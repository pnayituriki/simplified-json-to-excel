# Introduction

SheetJS
The simplified-json-to-excel is a package designed to simplify your work Community Edition offers battle-tested open-source solutions for extracting useful data from almost any complex spreadsheet and generating new spreadsheets that will work with legacy and modern software alike.

SheetJS Pro offers solutions beyond data processing: Edit complex templates with ease; let out your inner Picasso with styling; make custom sheets with images/graphs/PivotTables; evaluate formula expressions and port calculations to web apps; automate common spreadsheet tasks, and much more!

# Installation

`npm install --save simplified-json-to-excel`

# Usage => Data format

`Single sheet excel file`
By default simplified-json-to-excel support an array of objects and generate an excel file with only sheet.

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

# Usage

`Both Vanilla JavaScript & TypeScript`

`Example 1`

```js
import { JSONToExcel } from "simplified-json-to-excel";
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
<JSONToExcel fileData={data} fileName="Name of the file" />;
```

`Output`
![EXAMPLE1OUTPUT!](https://drive.google.com/file/d/1QgwzFWkMHreTB9rQE_1VeSWfsxr6_9L_/view?usp=sharing)

The JSONToExcel component extends and attribute of a normal HTML button, which gives you the ability to customize it as you like.
JSONToExcel can also accept the component child which as a normal HTML button.
Here is the sample

```js
<JSONToExcel
  fileData={data}
  fileName="Name of the file"
  style={{
    backgroundColor: "green",
    color: "#ffffff",
    padding: "4px 10px",
  }}
>
  Generate File
</JSONToExcel>
```

`Output`
![EXAMPLE1OUTPUT!](https://drive.google.com/file/d/1YcxgUJfDvi6KYjcrrckIkcdAoTARouBs/view?usp=sharing)
