import React from "react";
import * as XLSX from "xlsx";

// type any[] is for single sheet file
// type { sheetName: string; data: any[] }[] is for multiple sheets file
export type FileDataType = any[] | { sheetName: string; data: any[] }[];

interface JSONToExcelProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  fileData: FileDataType;
  fileName: string;
  children?: React.ReactNode;
}

export const JSONToExcel: React.FC<JSONToExcelProps> = (props) => {
  const { children, fileData, fileName } = props;
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

  return (
    <button onClick={() => exportToCSV(fileData, fileName)} {...props}>
      {children ? children : "Export Excel"}
    </button>
  );
};

// THIS FUNCTION WILL LOOP THROUGH THE ARRAY GIVEN TO CHECK WEEVER
// THE DATA TYPE IS VALID FOR MULTIPLE SHEET
const FN_IsDataForMultiple = (
  data: { sheetName: string; data: any[] }[]
): boolean => {
  let i = 0;
  while (i < data.length) {
    if (
      data[i].sheetName === undefined ||
      typeof data[i].sheetName !== "string" ||
      data[i].data === undefined ||
      Array.isArray(data[i].data) === false
    )
      return false;
    i++;
  }
  return true;
};
