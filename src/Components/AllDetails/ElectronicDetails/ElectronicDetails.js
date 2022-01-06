import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const ElectronicDetails = () => {
    const { electronicId } = useParams();
    const [electronics, setElectronic] = useState([]);

    useEffect(() => {

        fetch(`http://localhost:5000/electronicCollection/${electronicId}`)
            .then(res => res.json())
            .then(data => setElectronic(data))
    }, []);






    return (
        <div >
            <h1 style={{ color: "cyan", paddingBottom: "30px", paddingTop: "30px" }}>Details Information About {electronics?.name}</h1>
            <div >

                <div className="col ">
                    <div style={{ backgroundColor: "#D5D6EA" }} className="cardbox w-50 card h-50 ms-5 ps-5">
                        <div>
                            <img src={electronics.image} alt="" className=" w-50 h-50 p-5" />
                        </div>
                        <div className="card-body text-center">
                            <h4 className="card-text">{electronics.name}</h4>



                        </div>
                        <div className="card-body text-center">
                            <h4 className="card-text">{electronics.category}</h4>
                        </div>
                        <div className="card-body text-center">
                            <h4 className="card-text">{electronics.features}</h4>
                        </div>
                        <div className="card-body text-center">
                            <h4 className="card-text">{electronics.price}</h4>
                        </div>



                    </div>

                </div>


            </div>
        </div>
    );
};

export default ElectronicDetails;