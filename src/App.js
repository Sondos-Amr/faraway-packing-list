export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1> 🌴 FAR AWAY 🧳</h1>;
}

function Form() {
  return (
    <form className="add-form">
      <h3>What do you need for your 😎 trip ?</h3>
      <input type="text" placeholder="Item..." />
      <button>Add</button>
    </form>
  );
}

function PackingList() {
  return <div className="list"></div>;
}

function Stats() {
  return (
    <footer className="stats">
      <em> You have x item on your list, and you already packed x (x%)</em>
    </footer>
  );
}
