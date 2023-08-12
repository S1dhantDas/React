

const divNew = ReactDOM.createRoot(document.querySelector(".div1"));
const newDiv = React.createElement("div", {}, "hello");

divNew.render(newDiv);
