import "./App.css"
// import MyContainer from "./layout/MyContainer";
// import Login from "./components/Login";
import { Outlet } from "react-router-dom"
import Header from "./components/Header"

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App
