import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import QuoteModal from './components/QuoteModal'
import ContactModal from './components/ContactModal'
import ScrollToTop from './components/ScrollToTop'
import Toast from './components/Toast'
import './App.css'

function App() {
  const [toast, setToast] = useState(null)

  const showToast = (message, type = 'info') => {
    setToast({ message, type })
    setTimeout(() => setToast(null), 5000)
  }

  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero showToast={showToast} />
        <Services />
        <HowItWorks />
        <Testimonials />
      </main>
      <Footer showToast={showToast} />
      <QuoteModal showToast={showToast} />
      <ContactModal showToast={showToast} />
      <ScrollToTop />
      {toast && <Toast message={toast.message} type={toast.type} />}
    </>
  )
}

export default App
