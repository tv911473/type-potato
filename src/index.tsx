import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"
import Login from "./components/Login"
import MyInfo from "./components/MyInfo"
import MyForm from "./components/MyForm"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<App />}
    >
      <Route
        path="login"
        element={<Login />}
      />
      <Route
        path="form"
        element={<MyForm />}
      />
      <Route
        path="extra"
        element={
          <MyInfo
            name={"Taavi"}
            hobbies={["biking", "hiking", "camping"]}
          />
        }
      />
    </Route>,
  ),
  { basename: "/type-potato" },
)

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
