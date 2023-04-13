const headingElement = React.createElement("h1", {}, "Happy Learning from React JS !!!");
console.log("headingElement: ", headingElement);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(headingElement);