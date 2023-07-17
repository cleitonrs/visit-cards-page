import { Cards } from "./Cards"
import { HeroPattern } from "./HeroPattern"

export function App() {

  return (
    <main className="relative">
      <h1 className="text-7xl m-10 text-center font-bold tracking-tight relative">
        <span className="text-cyan-400"> Cartões </span> de Visita 
      </h1>
      <div className="flex justify-center items-center fixed top-0 left-0 right-0 z-10">
        <HeroPattern />
      </div>
      <Cards />
    </main>
  )
}
