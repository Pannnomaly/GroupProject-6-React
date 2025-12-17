import { Button } from "@/components/ui/button"
import './App.css'

function App() {

  return (
    <>
      <div className="flex min-h-svh flex-col items-center justify-center gap-y-3">
        <h1 className="text-2xl font-bold">Hello World!</h1>
        <Button variant="ghost">Click me</Button>
      </div>
    </>
  )
}

export default App
