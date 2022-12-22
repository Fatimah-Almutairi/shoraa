import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import Nav from './component/Nav'
import Footer from './component/Footer'
import {HomePage} from './component/HomePage'
import {Consultant} from './component/Consultant'
import {Info} from './component/Info'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import RegisterPages from './component/Register'
import LoginPages from './component/Login'
import SelectUser from "./component/SelectUser"
import {ConProfile} from "../src/component/ConProfile"
import { Rating } from "./component/Rating"
import ProtectedRoute from "./component/protectedRoute"
import Payment2 from "./component/Payment2"
import {RegisterConPages} from "./component/ConRegister"
import AboutUs from "./component/AboutUs"
import Whatsapp from "./component/Whatsapp"
// import ProtectCon from "./component/ProtectCon"



export const App = () => (
  <BrowserRouter>

  <ChakraProvider theme={theme}>
    <Nav/>
    <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/selectuser' element={<SelectUser />}></Route>
        <Route path='/login' element={<LoginPages />}></Route>
        <Route path='/Userregister' element={<RegisterPages />}></Route>
        <Route path="/register" element={<RegisterConPages />}></Route>
        <Route path='/AboutUs' element={<AboutUs/>}></Route>
        <Route path='/conprofile' element={<ConProfile />}></Route>
        <Route path='/consultant' element={<Consultant />}></Route>

        <Route element={<ProtectedRoute />}>
        <Route path='/info/:user_id' element={<Info />}></Route>
        <Route path='/rating' element={<Rating />}></Route>
       
        </Route>
{/* 

        <Route element={<ProtectCon />}>
        </Route> */}

<Route path='/payment' element={<Payment2/>}></Route>
<Route path='/chat' element={<Whatsapp/>}></Route>

      


     </Routes>
     <Footer/> 
  </ChakraProvider>

</BrowserRouter>
)