import "./App.css";

/*Custom Component*/
//const Person = (props) => {
//  return (
//    <>
//      <h1>Name: {props.name ? props.name : "No Name"} </h1>
//      <h2>Age: {props.age}</h2>
//    </>
//  );
//};

const App = () => {
  const name = "Banksy";
  const isNameShowing = false;

  return (
    //code below is JSX (class in HTML, className in JS)
    //inside curly braces, you can put an valid Javascript expression!
    //You can dynamically render real data inside browser
    <div className="App"></div>

    /* Person component dyanmic rendering*/
    //</div><h1> Hello, {name} </h1>
    //</div><Person name={"John"} age={22 + 22} />
    //</div><Person name={"Banksy"} age={24} />
    //</div><Person />
    //</div>{isNameShowing ? (
    //</div>  name
    //</div>) : (
    //</div>  <>
    //</div>    <h1>testing failed</h1> <h2>Oh no!</h2>
    //</div>  </>
    //</div>)}
  );
};

export default App;
