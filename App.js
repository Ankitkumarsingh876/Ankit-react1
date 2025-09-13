import React from "react";
import ReactDOM from "react-dom/client";

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     [
//       React.createElement("div", { key: 1, className: "item" }, "hi i am ankit kumar singh"),
//       React.createElement("div", { key: 2, className: "item" }, "hi I am 2 tag"),
//     ]
//   ),
//   React.createElement(
//     "div",
//     { id: "child2" },
//     [
//       React.createElement("div", { key: 3, className: "item" }, "hi I ajgsjfsjfsjffjjgljgsgnksdfngkg tag"),
//       React.createElement("div", { key: 4, className: "item" }, "hi I sdglkhdskghsklghshgkldfgjsdfgjklam h1 tag"),
//     ]
//   )
// );
const JsxHeading = <h1 className="heading" tabIndex="2">
  hi i am ankit kumar singh
  </h1>;
console.log(JsxHeading);
// console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(JsxHeading);
