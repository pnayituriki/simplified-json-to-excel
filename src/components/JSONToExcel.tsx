import * as XLSX from "xlsx";

// type any[] is for single sheet file
// type { sheetName: string; data: any[] }[] is for multiple sheets file
export type FileDataType = any[] | { sheetName: string; data: any[] }[];

export const JSONToExcel = (fileData: FileDataType, fileName: string) => {
  const fileExtension = ".xlsx";

  const exportToCSV = (excelData: FileDataType, fileName: string) => {
    if (FN_IsDataForMultiple(excelData)) {
      const workbook = XLSX.utils.book_new();
      excelData.forEach((dataItem: { sheetName: string; data: any[] }) => {
        const worksheet = XLSX.utils.json_to_sheet(dataItem.data);
        XLSX.utils.book_append_sheet(workbook, worksheet, dataItem.sheetName);
      });

      XLSX.writeFile(workbook, fileName + fileExtension, {
        bookType: "xlsx",
        type: "array",
      });
    } else {
      const worksheet = XLSX.utils.json_to_sheet(excelData);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ["data"] };
      XLSX.writeFile(workbook, fileName + fileExtension, {
        bookType: "xlsx",
        type: "array",
      });
    }
  };

  return exportToCSV(fileData, fileName);
};

// THIS FUNCTION WILL LOOP THROUGH THE ARRAY GIVEN TO CHECK WEEVER
// THE DATA TYPE IS VALID FOR MULTIPLE SHEET
const FN_IsDataForMultiple = (
  data: { sheetName: string; data: any[] }[]
): boolean => {
  if (
    data.find(
      (item) =>
        item.sheetName === undefined ||
        typeof item.sheetName !== "string" ||
        item.data === undefined ||
        Array.isArray(item.data) === false
    )
  )
    return false;
  return true;
};
