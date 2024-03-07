import './reset.css';
import './App.css';
import WishList from './components/WishList';
import WishInput from './components/WishInput';

const wishes = [
  { done: false, text: 'Travel to the moon' },
  { done: true, text: 'Make an intro course to React' },
  { done: true, text: 'Pay the gym' },
  { done: false, text: 'Go to the gym' },
];

const date = new Date().toLocaleString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
});

function App() {
  return (
    <div className="app">
      <h1>Wish List</h1>
      <span className="date">{date}</span>

      <WishList wishes={wishes} />

      <WishInput />
      <button type="button" className="wish-clear">
        Archive done
      </button>
    </div>
  );
}

export default App;
