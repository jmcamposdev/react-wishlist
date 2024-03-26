import { useState } from 'react';
import initialWishes from './data/wishes';
import './reset.css';
import './App.css';
import WishList from './components/WishList';
import WishInput from './components/WishInput';

const date = new Date().toLocaleString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
});

function App() {
  // Set the wishes state with the initialWishes array
  const [wishes, setWishes] = useState(initialWishes);

  /**
   * Adds a new wish to the list
   * @param {Object} wish - The new wish to add
   */
  const addNewWish = (wish) => {
    setWishes([...wishes, wish]);
  };

  /**
   * Updates the wishes list
   * @param {Array} updatedWishes - The updated wishes list
   */
  const updateWishes = (updatedWishes) => {
    setWishes(updatedWishes);
  };

  /**
   * Removes the done wishes from the list when the button is clicked
   */
  const handlerArchiveButton = () => {
    const filteredWishes = wishes.filter((wish) => !wish.done);
    setWishes(filteredWishes);
  };

  return (
    <div className="app">
      <h1>Wish List</h1>
      <span className="date">{date}</span>
      <WishList wishes={wishes} onWishChange={updateWishes} />
      <WishInput onNewWish={addNewWish} />
      <button type="button" className="wish-clear" onClick={handlerArchiveButton}>
        Archive done
      </button>
    </div>
  );
}

export default App;
