import logo from './logo.svg';
import './App.css';
import ToDoList from './Components/ToDoList';
import Footer from './Components/footer';

function App() {
  return (
    <div className="App">
      <h1 >To Do List</h1>
      <ToDoList />
     <Footer />
    </div>
  );
}

export default App;