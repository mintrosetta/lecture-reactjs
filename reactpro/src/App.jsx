import Hello from "./components/Hello"

// main component of application
// component is javascript function return jsx
function App() {
  return (
    <div className="App">
      <Hello name='Mint Rosetta' message='hi there!' emoji='eiei'/>
    </div>
  )
}

export default App

