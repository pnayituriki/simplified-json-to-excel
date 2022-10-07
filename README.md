# Introduction

SheetJS
The simplified-json-to-excel is a package designed to simplify your work Community Edition offers battle-tested open-source solutions for extracting useful data from almost any complex spreadsheet and generating new spreadsheets that will work with legacy and modern software alike.

SheetJS Pro offers solutions beyond data processing: Edit complex templates with ease; let out your inner Picasso with styling; make custom sheets with images/graphs/PivotTables; evaluate formula expressions and port calculations to web apps; automate common spreadsheet tasks, and much more!

# Installation

`npm install --save simplified-json-to-excel`

# Usage

`Default json format example`
By default simplified-json-to-excel support an array of objects and generate an excel file with on sheet.

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

`Both Vanilla JavaScript & TypeScript`

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
