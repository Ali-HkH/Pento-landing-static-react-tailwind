import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import ThemeTrigger from "./Components/ThemeTrigger/ThemeTrigger";
import About from "./Components/About/About";
import Offer from "./Components/Offer/Offer";
import Quote from "./Components/Quote/Quote";
import Team from "./Components/Team/Team";
import Process from "./Components/Process/Process";
import FunFact from "./Components/FunFact/FunFact";
import ToTop from "./Components/ToTop/ToTop";
import FAQ from "./Components/FAQ/FAQ";
import Loan from "./Components/Loan/Loan";
import Testomonials from "./Components/Testomonials/Testomonials";
import ContactUs from "./Components/ContactUs/ContactUs";
import Weblog from "./Components/Weblog/Weblog";
import Subscribe from "./Components/Subscribe/Subscribe";
import Footer from "./Components/Footer/Footer";
import { useEffect, useState } from "react";
import Loader from "./Components/Loader/Loader";

function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
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
