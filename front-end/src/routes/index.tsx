import { Route, Routes } from "react-router-dom"
import { AuthPage } from "../pages/Auth"

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path="/auth" element={<AuthPage />} />
    </Routes>
  )
}

export default RoutesIndex
