import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import ThemeTrigger from "./Components/ThemeTrigger/ThemeTrigger";
import About from "./Components/About/About";
import Offer from "./Components/Offer/Offer";
import Quote from "./Components/Quote/Quote";
import Team from "./Components/Team/Team";
import Process from "./Components/Process/Process";
import FunFact from "./Components/FunFact/FunFact";

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
      <FunFact />
    </div>
  );
}

export default App;
