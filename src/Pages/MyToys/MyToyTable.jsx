import axios from "axios";
import Swal from "sweetalert2";

const MyToyTable = ({ toy, index, myToys, setMyToys }) => {
  const {
    _id,
    seller_name,
    name,
    subcategory,
    price,
    quantity,
    picture,
    seller_email,
    rating,
    description,
  } = toy;

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/myToys/${id}`).then((result) => {
      console.log(result.data);

      if (result.data) {
        const newData = myToys.filter((toy) => toy._id != id);
        console.log(newData);
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
        setMyToys(newData);
      }
    });
  };

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
        <td>{rating}</td>
        <td>{description}</td>
        <td>
          <button className='btn btn-info'>Update</button>
        </td>
        <td>
          <button onClick={() => handleDelete(_id)} className='btn btn-error'>
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default MyToyTable;
