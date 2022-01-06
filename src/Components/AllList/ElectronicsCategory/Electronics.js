import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Electronic from './Electronic';

const Electronics = () => {
    const [electronics, setElectronic] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/electronicCollection')
            .then(res => res.json())
            .then(data => setElectronic(data))
    }, [])
    //Delete Categories

    const handleDelete = (id) => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                const url = `http://localhost:5000/electronicCollection/${id}`;
                fetch(url, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = electronics.filter(electronic => electronic._id !== id);
                            setElectronic(remaining);
                        }
                    })
            }

        })

    }
    return (
        <div>
            {

                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3 g-5 d-flex justify-content-center mb-5 pb-5  ">


                    {
                        electronics.map(electronic => <Electronic key={electronic._id} electronic={electronic}
                            handleDelete={handleDelete}





                        >

                        </Electronic>)
                    }
                </div>







            }
        </div>
    );
};

export default Electronics;