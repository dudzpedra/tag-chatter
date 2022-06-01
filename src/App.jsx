import "./App.css";
import MessageForm from "./components/MessageForm";
import MessagesList from "./components/MessagesList";

function App() {
  return (
    <div className="App">
      <MessagesList />
      <MessageForm />
    </div>
  );
}

export default App;
