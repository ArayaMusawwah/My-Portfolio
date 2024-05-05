import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./Global.css"
import { ActiveProvider } from "./contexts/ActiveContext.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ActiveProvider>
      <App />
    </ActiveProvider>
  </React.StrictMode>
)
