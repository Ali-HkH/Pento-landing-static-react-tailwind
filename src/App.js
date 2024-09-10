import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import ThemeTrigger from "./Components/ThemeTrigger/ThemeTrigger";

function App() {
  return (
    <div className="App">
      <ThemeTrigger />
      <Nav/>
      <Home />
    </div>
  );
}

export default App;
