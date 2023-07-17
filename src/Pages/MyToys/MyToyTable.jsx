const MyToyTable = ({ toy, index }) => {
  const {
    seller_name,
    name,
    subcategory,
    price,
    quantity,
    picture,
    seller_email,
    description,
  } = toy;

  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>
          <img src={picture} alt='' />
        </td>
        <td>{name}</td>
        <td>{seller_name}</td>
        <td>{seller_email}</td>
        <td>{subcategory}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <td>{description}</td>
        <td>
          <button className='btn btn-info'>Update</button>
        </td>
        <td>
          <button className='btn btn-error'>Delete</button>
        </td>
      </tr>
    </>
  );
};

export default MyToyTable;
