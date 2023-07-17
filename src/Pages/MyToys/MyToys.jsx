import { useEffect, useState } from "react";
import axios from "axios";

const MyToys = () => {
  const [myToys, setMyToys] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8800/myToys").then((result) => {
      setMyToys(result.data);
      console.log(result.data);
    });
  }, []);

  return (
    <>
      <h2 className='text-3xl font-bold text-center my-10'>My Toys</h2>
      <div>
        <div className='overflow-x-auto'>
          <table className='table'>
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Seller Name</th>
                <th>Toy Name</th>
                <th>Sub-Category</th>
                <th>Price</th>
                <th>Available Quantity</th>
                <th> </th>
              </tr>
            </thead>

            <tbody></tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MyToys;
