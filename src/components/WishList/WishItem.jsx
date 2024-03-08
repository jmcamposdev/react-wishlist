import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

function WishItem({
  done, text, id, onDoneChange,
}) {
  const [age, setAge] = useState(0);

  useEffect(() => {
    let ageInterval;
    if (done) {
      setAge(0);
    } else {
      ageInterval = setInterval(() => {
        if (done) {
          clearInterval(ageInterval);
        } else {
          setAge((prevAge) => prevAge + 1);
        }
      }, 1000);
    }

    return () => {
      clearInterval(ageInterval);
    };
  }, [done]);

  return (
    <li
      key={id}
      className={`wish-list__item 
      ${done ? 'wish-list__item--done' : ''} 
      ${age >= 5 ? 'wish-list__item--warning' : ''}
      ${age >= 10 ? 'wish-list__item--danger' : ''}`}
    >
      <input
        id={`wish${id}`}
        type="checkbox"
        checked={done}
        onChange={(e) => onDoneChange(e.target.checked)}
      />
      <label htmlFor={`wish${id}`}>{text}</label>
    </li>
  );
}

// Add the propTypes declaration for done, text, id, and onDoneChange
WishItem.propTypes = {
  done: PropTypes.bool,
  text: PropTypes.string,
  id: PropTypes.string,
  onDoneChange: PropTypes.func,
};

// Add the defaultProps declaration for done, text, id, and onDoneChange
WishItem.defaultProps = {
  done: false,
  text: '',
  id: '',
  onDoneChange: () => {},
};

export default WishItem;
