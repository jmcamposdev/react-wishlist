import './reset.css';
import './App.css';

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

      <ul className="wish-list">
        {wishes.map(({ done, text }, i) => (
          <li
            key={text}
            className={`wish-list__item ${done ? 'wish-list__item--done' : ''}`}
          >
            <input
              id={`wish${i}`}
              type="checkbox"
              checked={done}
            />
            <label htmlFor={`wish${i}`}>{text}</label>
          </li>
        ))}
      </ul>

      <input className="wish-input__field" placeholder="Enter your wish here" />
      <button type="button" className="wish-clear">
        Archive done
      </button>
    </div>
  );
}

export default App;
