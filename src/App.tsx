import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import {ContactUs} from './modules/ContactUsPage/index'
import {Product} from './modules/ProductPage/index'
import Header from './components/Header'



function App() {

  return (
    <>
      {/* <ContactUs /> */}
      <BrowserRouter>
      <Header />
        <Routes>
          <Route  path='/' element={<Product />}/>
          <Route  path='/contact' element={<ContactUs />}/>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
