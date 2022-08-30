import { createRoot } from "react-dom/client"
import { PokemonProvider } from "./contexts/PokemonContext"
import App from "./App"

createRoot(document.getElementById("root")).render(
  <PokemonProvider>
    <App />
  </PokemonProvider>
)
