import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import ThemeTrigger from "./Components/ThemeTrigger/ThemeTrigger";
import About from "./Components/About/About";
import Offer from "./Components/Offer/Offer";
import Quote from "./Components/Quote/Quote";
import Team from "./Components/Team/Team";
import Process from "./Process/Process";

function App() {
  return (
    <div className="App">
      <ThemeTrigger />
      <Nav/>
      <Home />
      <About/>
      <Offer />
      <Quote />
      <Team />
      <Process />
    </div>
  );
}

export default App;
