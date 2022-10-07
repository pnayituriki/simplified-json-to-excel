# simplified-json-to-excel

The simplified-json-to-excel is a package designed to simplify your work.

Have you been struggling with exporting your data as excel file, here is a package that is ready to help you.
All you have to think about are data and nothing else.

## Installation

Install simplified-json-to-excel with npm

```bash
  npm install --save simplified-json-to-excel
```

Install simplified-json-to-excel with yarn

```bash
  yarn add --save simplified-json-to-excel
```

## Documentation

# Usage => Data format

`Single sheet excel file`
By default JSONToExcel accept an array of objects and generate an excel file with only one sheet.

An nested object will not be accepted and will return nothing the item with a value of an object

```js
[
  {
    id: 1,
    name: "John",
    age: 30,
  },
  {
    id: 2,
    name: "Joe",
    age: 10,
  },
];
```

`Multiple sheet excel file`

With JSONToExcel you can create one excel file with different sheets with different content as you like.
All you have to do is change the default format of your data.
If the data structured correctly it will generate an excel file with multiple sheets without requiring more props or other configurations.

Here is an example of the acceptable data format for multiple sheets excel file.

```js
[
  {
    sheetName: "Group A",
    data: [
      {
        id: 1,
        name: "John",
        age: 30,
      },
      {
        id: 2,
        name: "Joe",
        age: 10,
      },
    ],
  },
  {
    sheetName: "Group B",
    data: [
      {
        id: 1,
        name: "John",
        age: 20,
      },
    ],
  },
];
```

This example will generate one Excel file with two sheets: Group A & Group B;

## Usage/Examples

```javascript
import { JSONToExcel } from "simplified-json-to-excel";

function App() {
  const data = [
    {
      id: 1,
      name: "John",
      age: 30,
    },
    {
      id: 2,
      name: "Joe",
      age: 10,
    },
  ];

  return (
    <>
      <button onClick={() => JSONToExcel(data, "Name of the file")}>
        Generate File
      </button>
    </>
  );
}
```

## Authors

- [@pnayituriki](https://www.github.com/pnayituriki)

## 🔗 Links

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/nayituriki/)

## Badges

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
