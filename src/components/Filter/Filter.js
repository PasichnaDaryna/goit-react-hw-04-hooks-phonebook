import T from 'prop-types';
import '../Filter/Filter.css';

const Filter = ({ value, onChange }) => {
  return (
    <label>
      Find contacts by name
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};

Filter.propTypes = {
  value: T.string,
  onChange: T.func.isRequired,
};

export default Filter;
