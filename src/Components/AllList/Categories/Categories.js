import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Category from './Category';


const Categories = () => {
    const [categories, setCategories] = useState([]);






    useEffect(() => {
        fetch('http://localhost:5000/categoryCollection')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    // const categoryList = categories.find(category => (category.id == categoryID))
    // console.log(categories);
    // console.log(categoryList)

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
                const url = `http://localhost:5000/categoryCollection/${id}`;
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
                            const remaining = categories.filter(category => category._id !== id);
                            setCategories(remaining);
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
                        categories.map(category => <Category key={category._id} category={category}
                            handleDelete={handleDelete}





                        >

                        </Category>)
                    }
                </div>







            }

        </div>
    );
};

export default Categories;