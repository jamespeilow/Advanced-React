import useForm from '../lib/useForm';

export default function CreateProduct() {
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    name: 'James',
    price: 12345,
    description: 'Test description',
  });
  return (
    <form>
      <label htmlFor="name">
        Name
        <input
          id="name"
          name="name"
          placeholder="Name"
          type="text"
          value={inputs.name}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="price">
        Price
        <input
          id="price"
          name="price"
          placeholder="Price"
          type="number"
          value={inputs.price}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="description">
        Description
        <textarea
          id="description"
          name="description"
          placeholder="Description"
          type="number"
          value={inputs.description}
          onChange={handleChange}
        />
      </label>

      <button type="button" onClick={clearForm}>
        Clear Form
      </button>
      <button type="button" onClick={resetForm}>
        Reset Form
      </button>
    </form>
  );
}
