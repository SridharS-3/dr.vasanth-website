import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
import WhyChooseUs from './components/WhyChooseUs'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import TreatmentDetail from './components/TreatmentDetail'
import Contact from './components/Contact'
import AboutPage from './components/AboutPage'
import TeamPage from './components/TeamPage'
import DentalInsights from './components/DentalInsights'
import BookAppointment from './components/BookAppointment'
import Braces from './components/Braces'

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <AboutUs />
            <Services />
            <Braces />
            <Team />
            <Testimonials />
            <WhyChooseUs />
            <FAQ />
          </>
        } />
        <Route path="/treatment/:id" element={<TreatmentDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/insights" element={<DentalInsights />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
