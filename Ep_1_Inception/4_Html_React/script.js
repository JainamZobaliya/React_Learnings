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

const headingElement2 = React.createElement("h2", {}, "From React !!!");
const headingElement5 = React.createElement("h5", {}, "Hello World !!!");

const divElement = React.createElement(
	"div",
	{ id: "multiple_elements", aurProperties: "can add more like this" },
	[headingElement2, headingElement5]
);
console.log("divElement: ", divElement);

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("root: ", root);

root.render([headingElement, divElement]);
