import React, { useEffect, useState } from 'react';
import useAuth from '../../Hook/useAuth';

const SearchProducts = () => {
    const { searchText } = useAuth();
    console.log(searchText)
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/fashionCollection")
            .then((res) => res.json())
            .then((data) => {
                let abc = [...data];

                fetch("http://localhost:5000/electronicCollection")
                    .then((res) => res.json())
                    .then((data) => {
                        abc = [...abc, ...data];

                        fetch("http://localhost:5000/sportCollection")
                            .then((res) => res.json())
                            .then((data) => {
                                abc = [...abc, ...data];

                                fetch("http://localhost:5000/cosmeticCollection")
                                    .then((res) => res.json())
                                    .then((data) => {
                                        abc = [...abc, ...data];

                                        fetch("http://localhost:5000/furnitureCollection")
                                            .then((res) => res.json())
                                            .then((data) => {
                                                abc = [...abc, ...data];
                                                setAPIData(abc);
                                            });
                                    });
                            });
                    });
            });
    }, []);

    const result = APIData.filter(data => (data.name.toLowerCase() == searchText.toLowerCase()))
    console.log(result)
    return (
        <div>
            <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 g-4 ms-5 ps-5  ">
                {
                    result.map(data =>
                        <div>
                            <div className="col h-100 ">
                                <div className=" cardbox m-5  ">
                                    <img className="w-75 mt-2" src={data.image} alt="" />
                                    <h3>{data.name}</h3>
                                    <h3>{data.features}</h3>
                                    <h3>{data.price}</h3>
                                </div>
                            </div>
                        </div>
                    )

                }
            </div>
        </div>

    );
};

export default SearchProducts;