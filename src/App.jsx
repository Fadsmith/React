import Body from "./Components/Body"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Second from "./Second"
import { Route,Routes,BrowserRouter} from "react-router-dom";
import Todo from "./Components/Todo"
import Form from "./Components/Form"
import Aipshop from "./Components/Aipshop"
import Shoppingcart from "./Components/Shoppingcart"
const App =() =>{
  return(
    <BrowserRouter>
     <Header/>
     {/* {<Body/>} */}
     <Routes>
     <Route path='/' element={<Body/>}/>
     <Route path='/todo' element={<Todo/>}/>
     <Route path='/form' element={<Form/>}/>
     <Route path='/element' element={<Aipshop/>}/>
     <Route path='/shoppingcart' element={<Shoppingcart/>}/>

     </Routes>
     <Footer/>
    </BrowserRouter>
    
  
  )
}

export default App