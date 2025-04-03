import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>🏆 Zeros Cleared Leaderboard</h1>
        <p>Updated: April, 2 2025</p>

      <div class="tier gold">
        <h2>🥇 Gold Tier (5+ Zeros Cleared)</h2>
        <ul>
          <li>Student 1</li>
          <li>Student 2</li>
        </ul>
      </div>

      <div class="tier silver">
        <h2>🥈 Silver Tier (3–4 Zeros Cleared)</h2>
        <ul>
          <li>Student 1</li>
        </ul>
      </div>

      <div class="tier bronze">
        <h2>🥉 Bronze Tier (1–2 Zeros Cleared)</h2>
        <ul>
        <li>Student 1</li>
        <li>Student 2</li>
        </ul>
      </div>

      <p class="challenge">
        Can you make it on the board next week?
      </p>
    </div>
  )
}

export default App
