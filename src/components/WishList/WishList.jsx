import PropTypes from 'prop-types';
import WishItem from './WishItem';

function WishList({ wishes, onWishChange }) {
  return (
    <ul className="wish-list">
      {wishes.map(({ done, text }, i) => (
        <WishItem
          key={text}
          done={done}
          text={text}
          id={`wish-${i}`}
          onDoneChange={(value) => {
            const updatedWishes = [...wishes];
            updatedWishes[i].done = value;
            onWishChange(updatedWishes);
          }}
        />
      ))}
    </ul>
  );
}

// Add the propTypes declaration for wishes
WishList.propTypes = {
  wishes: PropTypes.arrayOf(PropTypes.shape({
    done: PropTypes.bool,
    text: PropTypes.string,
  })),
  onWishChange: PropTypes.func, // Add the propTypes declaration for onWishChange
};

// Add the defaultProps declaration for wishes
WishList.defaultProps = {
  wishes: [],
  onWishChange: () => {},
};

export default WishList;
