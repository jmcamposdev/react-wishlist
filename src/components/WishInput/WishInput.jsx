import PropTypes from 'prop-types';
import { useState } from 'react';

function WishInput({ onNewWish }) {
  const [newWishText, setNewWishText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from submitting

    // Trim the input text and check if it's empty
    if (newWishText.trim().length <= 0) return;

    // Call the onNewWish function with the new wish object
    onNewWish({ done: false, text: newWishText });

    // Reset the input text
    setNewWishText('');
  };

  const handleInputNameChange = (e) => {
    setNewWishText(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="wish-form">
      <input value={newWishText} onChange={handleInputNameChange} className="wish-input__field" placeholder="Enter your wish here" />
      <button className="wish-submit__field" type="submit" aria-label="Submit">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </button>
    </form>
  );
}

WishInput.propTypes = {
  onNewWish: PropTypes.func,
};

WishInput.defaultProps = {
  onNewWish: () => {},
};

export default WishInput;
