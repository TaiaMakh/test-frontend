import "./App.css";
import List from "./Components/List";

function App() {
  return (
    <div className="App" data-test='component-app'>
      <List data-test='component-list'/>
    </div>
  );
}

export default App;
