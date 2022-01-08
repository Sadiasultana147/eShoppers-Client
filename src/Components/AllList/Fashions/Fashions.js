import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Fashion from "./Fashion";
import image from "../../../Images/bg.jpg";

const Fashions = () => {
  const [fashions, setFashion] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/fashionCollection")
      .then((res) => res.json())
      .then((data) => setFashion(data));
  }, []);
  //Delete Categories

  const handleDelete = (id) => {
    console.log(id);
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
        const url = `http://localhost:5000/fashionCollection/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = fashions.filter(
                (fashion) => fashion._id !== id
              );
              setFashion(remaining);
            }
          });
      }
    });
  };
  return (
    <div>
      <div
        className="d-flex align-items-center"
        style={{ maxHeight: "500px", backgroundColor: "#282828" }}
      >
        <div className="col-md-6 text-center">
          <h1 style={{ color: "white" }}>Sale Offer -50% Off This Week</h1>
          <h1 style={{ color: "white" }}>New Arrivals</h1>
        </div>
        <div className="col-md-6 text-center">
          <img src={image} alt="" className="w-75 p-3" />
        </div>
      </div>

      <div className="mt-5 w-75 mx-auto">
        {
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 justify-content-center g-5">
            {fashions.map((fashion) => (
              <Fashion
                key={fashion._id}
                fashion={fashion}
                handleDelete={handleDelete}
              ></Fashion>
            ))}
          </div>
        }
      </div>
    </div>
  );
};

export default Fashions;
