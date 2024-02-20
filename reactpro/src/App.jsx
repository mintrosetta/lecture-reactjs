import Hello from "./components/Hello"

// main component of application
// component is javascript function return jsx
function App() {
  const seatNumber = [1, 4, 7];
  const person = {
    name: 'Mint Rosetta',
    message: 'Hi there!',
    emoji: 'Huh',
    seatNumber: [1, 4, 7]
  };

  return (
    <div className="App">
      <Hello person={person}/>
    </div>
  )
}

export default App

