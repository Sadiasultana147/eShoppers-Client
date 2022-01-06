import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const FashionDetails = () => {
    const { fashionId } = useParams();
    const [fashions, setFashion] = useState([]);

    useEffect(() => {

        fetch(`http://localhost:5000/fashionCollection/${fashionId}`)
            .then(res => res.json())
            .then(data => setFashion(data))
    }, []);
    return (
        <div >
            <h1 style={{ color: "cyan", paddingBottom: "30px", paddingTop: "30px" }}>Details Information About {fashions?.name}</h1>
            <div >

                <div className="col ">
                    <div style={{ backgroundColor: "#D5D6EA" }} className="cardbox w-50 card h-50 ms-5 ps-5">
                        <div>
                            <img src={fashions.image} alt="" className=" w-50 h-50 p-5" />
                        </div>
                        <div className="card-body text-center">
                            <h4 className="card-text">{fashions.name}</h4>



                        </div>
                        <div className="card-body text-center">
                            <h4 className="card-text">{fashions.category}</h4>
                        </div>
                        <div className="card-body text-center">
                            <h4 className="card-text">{fashions.features}</h4>
                        </div>
                        <div className="card-body text-center">
                            <h4 className="card-text">{fashions.price}</h4>
                        </div>



                    </div>

                </div>


            </div>
        </div>
    );
};

export default FashionDetails;