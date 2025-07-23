import { useEffect, useState } from "react";
import Nav from "./Components/Nav/Nav";
import ThemeTrigger from "./Components/ThemeTrigger/ThemeTrigger";
import ToTop from "./Components/ToTop/ToTop";
import Home from "./Components/sections/Home/Home";
import About from "./Components/sections/About/About";
import Offer from "./Components/sections/Offer/Offer";
import Quote from "./Components/sections/Quote/Quote";
import Team from "./Components/sections/Team/Team";
import Process from "./Components/sections/Process/Process";
import FunFact from "./Components/sections/FunFact/FunFact";
import FAQ from "./Components/sections/FAQ/FAQ";
import Loan from "./Components/sections/Loan/Loan";
import Testomonials from "./Components/sections/Testomonials/Testomonials";
import ContactUs from "./Components/sections/ContactUs/ContactUs";
import Weblog from "./Components/sections/Weblog/Weblog";
import Subscribe from "./Components/sections/Subscribe/Subscribe";
import Footer from "./Components/Footer/Footer";
import Loader from "./Components/Loader/Loader";

function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])

  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <>
          <ThemeTrigger />
          <ToTop />
          <Nav/>
          <Home />
          <About/>
          <Offer />
          <Quote />
          <Team />
          <Process />
          <FunFact />
          <FAQ />
          <Loan />
          <Testomonials />
          <ContactUs />
          <Weblog />
          <Subscribe />
          <Footer />
        </>
      )}
      
    </div>
  );

}

export default App;
