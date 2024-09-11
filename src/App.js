import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import ThemeTrigger from "./Components/ThemeTrigger/ThemeTrigger";
import About from "./Components/About/About";

function App() {
  return (
    <div className="App">
      <ThemeTrigger />
      <Nav/>
      <Home />
      <About/>
    </div>
  );
}

export default App;
