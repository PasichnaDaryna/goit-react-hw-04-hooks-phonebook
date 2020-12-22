import { useState } from 'react';
import T from 'prop-types';
// import shortid from 'shortid';
import '../Form/Form.css';

function Form({ onSubmit }) {
  // state = {
  //   name: '',
  //   number: '',
  // };

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  // nameInputId = shortid.generate();
  // numberInputId = shortid.generate();

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(name, number);
    resetInput();
  };

  const resetInput = () => {
    setName('');
    setNumber('');
  };
  return (
    <form id="contact" onSubmit={handleSubmit}>
      <label>
        Name
        <input
          className="input-field"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="John Dows"
        />
      </label>
      <br />
      <label>
        Phone number
        <input
          className="input-field"
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          placeholder="459-12-56"
        />
      </label>

      <button type="submit" className="submit-button">
        Add contact
      </button>
    </form>
  );
}
Form.propTypes = {
  onSubmit: T.func.isRequired,
};

export default Form;
