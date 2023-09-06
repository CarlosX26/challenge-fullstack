import { Navigate, Outlet } from "react-router-dom"
import { useAuthContext } from "../../contexts/authContext"

export const PrivateNoAdm = () => {
  const { user, loading } = useAuthContext()

  if (loading) {
    return null
  }

  if (!user?.isAdm) {
    return <Navigate to="/" replace />
  }

  return user ? <Outlet /> : <Navigate to="/" replace />
}
