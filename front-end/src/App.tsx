import { Toaster } from "react-hot-toast"
import { useAuthContext } from "./contexts/authContext"
import RoutesIndex from "./routes"

const App = () => {
  const { loading } = useAuthContext()
  return (
    <div>
      <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
      {!loading && <RoutesIndex />}
    </div>
  )
}

export default App
