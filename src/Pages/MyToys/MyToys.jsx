import { useEffect, useState } from "react";
import axios from "axios";
import MyToyTable from "./MyToyTable";

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
                <th>Picture</th>
                <th>Toy Name</th>
                <th>seller name</th>
                <th>seller email</th>
                <th>Sub-category</th>
                <th>Price</th>
                <th>Rating</th>
                <th>Available quantity</th>
                <th>Detail description</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {myToys.map((toy, index) => (
                <MyToyTable key={toy._id} toy={toy} index={index}></MyToyTable>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MyToys;
