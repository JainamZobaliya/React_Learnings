{
	/* 
    <div id="root">
        <h1 id="element-1">Happy Learning</h1>
        <div id="multiple_elements" aurProperties="can add more like this">
            <h2>From React !!!</h2>
            <h5>Hello World !!!</h5>
        </div>
    </div> 
*/
}

const headingElement = React.createElement(
	"h1",
	{ id: "element-1" },
	"Happy Learning"
);

const heading2Element = React.createElement("h2", {}, "From React !!!");
const heading5Element = React.createElement("h5", {}, "Hello World !!!");

const divElement = React.createElement(
	"div",
	{ id: "multiple_elements", aurProperties: "can add more like this" },
	[heading2Element, heading5Element]
);
console.log("divElement: ", divElement);

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("root: ", root);

root.render([headingElement, divElement]);
