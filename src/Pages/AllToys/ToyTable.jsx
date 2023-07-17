import { Link } from "react-router-dom";

const ToyTable = ({ toy, index }) => {
  const { _id, seller_name, name, subcategory, price, quantity } = toy;

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
          <Link to={`/toys/${_id}`}>
            <button className='btn btn-primary'>View Details</button>
          </Link>
        </td>
      </tr>
    </>
  );
};

export default ToyTable;
