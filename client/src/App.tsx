import Facts from "./components/Facts"

function App() {

  return (
    <>
    <header className="py-4 border-b-2">
    <h1 className="text-8xl font-bold text-blue-700 text-center">
          Факты
        </h1>
    </header>
      <main className="py-8 container mx-auto h-screen">
        <Facts />
      </main>
      <footer className="bg-black py-16 sticky bottom-0">
        <div className="flex gap-8 w-fit mx-auto">
          <img src="https://skillicons.dev/icons?i=go" />
          <img src="https://skillicons.dev/icons?i=ts" />
          <img src="https://skillicons.dev/icons?i=postgres" />
          <img src="https://skillicons.dev/icons?i=docker" />
          <img src="https://skillicons.dev/icons?i=tailwind" />
        </div>
      </footer>
    </>
  )
}

export default App
