import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Feed from "./components/Feed";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Feed />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;

{
  /* both syntax are correct but we do write props in opening tag <ROute > and we acutally make it
          self clossing tag like <Route path="" element={} but we when we need to show children of this then 
          have to use <Route path="" element={}>  </Route>*/
}

{
  /* <Route path="/profile" element={<div>Profile Page</div>} />
          <Route path="/signup" element={<div>Signup Page</div>}></Route> */
}
