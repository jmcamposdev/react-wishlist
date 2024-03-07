import PropTypes from 'prop-types';

function WishList({ wishes }) {
  return (
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
  );
}

WishList.propTypes = {
  wishes: PropTypes.arrayOf(PropTypes.shape({
    done: PropTypes.bool,
    text: PropTypes.string,
  })),
};

WishList.defaultProps = {
  wishes: [],
};

export default WishList;
