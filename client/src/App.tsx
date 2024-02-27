import { Toaster } from "react-hot-toast"
import Facts from "./components/Facts"
import AddFactForm from "./components/AddFactForm"

function App() {

  return (
    <>
      <Toaster />
      <header className="py-4 border-b-2">
        <h1 className="text-8xl font-bold text-blue-700 text-center">
          Факты
        </h1>
      </header>
      <main className="py-4 mx-auto h-screen">
        <div className="flex items-center justify-between w-[50%] mx-auto">
          <div>
            <h3>Добавить факт</h3>
          </div>
          <div>
            <AddFactForm />
          </div>
        </div>
        <div className="py-4">
          <hr />
        </div>
        <div className="container mx-auto">
          <Facts />
        </div>
      </main>
      <footer className="sticky bg-black bottom-0 border-t py-4">
        <div className="w-fit mx-auto">
          <a href="https://github.com/tinarao/go-crud" target="_blank">
            <img src="https://skillicons.dev/icons?i=github" />
          </a>
        </div>
      </footer>
    </>
  )
}

export default App
