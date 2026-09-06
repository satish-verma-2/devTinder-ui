import { BrowserRouter, Route, Routes } from "react-router"
import Body from "./Body"
import Login from "./Login"
import Profile from "./Profile"

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>


          <Route path="/" element={<Body />} >
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Route>




        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App



{/* both syntax are correct but we do write props in opening tag <ROute > and we acutally make it
          self clossing tag like <Route path="" element={} but we when we need to show children of this then 
          have to use <Route path="" element={}>  </Route>*/}

{/* <Route path="/profile" element={<div>Profile Page</div>} />
          <Route path="/signup" element={<div>Signup Page</div>}></Route> */}
