import { Navigate, Route, Routes } from "react-router-dom"
import { AuthPage } from "../pages/Auth"
import { Dashboard } from "../pages/Dashboard"
import { Home } from "../pages/Home"
import { PrivateNoAdm } from "../components/PrivateNoAdm"

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/adm/auth" element={<AuthPage />} />
      <Route element={<PrivateNoAdm />}>
        <Route path="/adm/dashboard" element={<Dashboard />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default RoutesIndex
