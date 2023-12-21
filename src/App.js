import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav';
import Welcome from './components/Welcome';
import MyFooter from './components/MyFooter';
import history from './data/history.json';
import BookList from './components/BookList';
import CommentArea from './components/CommentArea';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyNav />
        <Welcome />
      </header>
      <BookList listaLibri={history} />
      <MyFooter />
    </div>
  );
}

export default App;

