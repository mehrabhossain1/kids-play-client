const ToyTable = ({ toy, index, toys, setToys }) => {
  const { seller_name, name, subcategory, price, quantity } = toy;

  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>{seller_name}</td>
        <td>{name}</td>
        <td>{subcategory}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <td>
          <button className='btn btn-primary'>View Details</button>
        </td>
      </tr>
    </>
  );
};

export default ToyTable;
