import { Route, Routes } from "react-router-dom"
import { AuthPage } from "../pages/Auth"
import { Dashboard } from "../pages/Dashboard"
import { Home } from "../pages/Home"

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/adm/dashboard" element={<Dashboard />} />
    </Routes>
  )
}

export default RoutesIndex
