import { greet } from "rustlib";

function App() {
  greet('and from TypeScript!')

  return (
    <div id="root">
      <h1>
        React ❤️ Rust
      </h1>
      <p>
        This project was bootstrapped with Vite and includes a Rust compiled library.
      </p>
      <div id="logos">
        <img src="react.svg" alt="React logo" />
        <img src="rust.svg" alt="Rust logo" />
      </div>
    </div>
  )
}

export default App
