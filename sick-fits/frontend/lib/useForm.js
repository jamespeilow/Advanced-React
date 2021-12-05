import { useState } from 'react';

export default function useForm(initial = {}) {
  // Create state object for inputs
  const [inputs, setInputs] = useState(initial);

  function handleChange(event) {
    let { value, name, type } = event.target;

    if (type === 'number') {
      value = Number(value);
    }

    if (type === 'file') {
      value[0] = event.target.files;
    }

    setInputs({
      ...inputs,
      [name]: value,
    });
  }

  function resetForm() {
    setInputs(initial);
  }

  function clearForm() {
    const blankState = Object.keys(inputs).reduce(
      (acc, key) => ({ ...acc, [key]: '' }),
      {}
    );

    setInputs(blankState);
  }

  // Return state and setter.
  return {
    inputs,
    handleChange,
    resetForm,
    clearForm,
  };
}
