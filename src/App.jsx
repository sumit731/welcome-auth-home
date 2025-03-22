import { Route, Routes } from "react-router-dom"
import SignUp from "./components/SignUp"
import SignIn from "./components/SignIn"
import Home from "./components/Home"
import WelcomePage from "./components/Welcome"

function App() {

  return (
    <>
      <div className="min-h-screen flex justify-center bg-white">
        <div className="w-full max-w-sm">
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
