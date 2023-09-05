import { Toaster } from "react-hot-toast"
import RoutesIndex from "./routes"

const App = () => {
  return (
    <div>
      <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
      <RoutesIndex />
    </div>
  )
}

export default App
