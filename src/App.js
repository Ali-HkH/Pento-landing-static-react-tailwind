import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import ThemeTrigger from "./Components/ThemeTrigger/ThemeTrigger";
import About from "./Components/About/About";
import Offer from "./Components/Offer/Offer";
import Quote from "./Components/Quote/Quote";
import Team from "./Components/Team/Team";

function App() {
  return (
    <div className="App h-[5000px]">
      <ThemeTrigger />
      <Nav/>
      <Home />
      <About/>
      <Offer />
      <Quote />
      <Team />
    </div>
  );
}

export default App;
