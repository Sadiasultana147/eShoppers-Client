import React, { useEffect, useRef, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router';
import Swal from 'sweetalert2';
import useAuth from '../../../Hook/useAuth';

const SportOrders = () => {
    const { _id } = useParams();
    const [sports, setSports] = useState({});

    const { user } = useAuth();
    const history = useHistory()
    const location = useLocation()

    const url = location.state?.from || "/myOrders"


    const cityRef = useRef();
    const addressRef = useRef();
    const contactRef = useRef()

    useEffect(() => {

        fetch(`http://localhost:5000/sportCollection/${_id}`)
            .then(res => res.json())
            .then(data => setSports(data))


    }, [])

    const handleOrder = (e) => {


        const UserName = user.displayName;

        const userEmail = user.email;
        const city = cityRef.current.value;
        const address = addressRef.current.value;
        const contact = contactRef.current.value;
        const productName = sports.name
        const productImage = sports.image
        const productDetails = sports.features
        const price = sports.price


        const newOrder = { productName, productImage, productDetails, price, city, address, contact };
        fetch('http://localhost:5000/orderCollection', {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSports(data)
                    Swal.fire({
                        title: ' Successfully Ordered',
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        }
                    })

                    e.target.reset();
                }
                history.push(url)

            })

        e.preventDefault();
    }
    return (
        <div>
            <h1>Details of : {sports?.name}</h1>


            <img src={sports?.image} alt="" />
            <h5>{sports?.features}</h5>





            <div className=" d-flex justify-content-center mt-4 pt-5">
                <form onSubmit={handleOrder} className="d-flex flex-column  w-50  ">

                    <input className="p-2" value={user.displayName} />



                    <input className="p-2 mt-3" value={user.email} />
                    <input className="p-2 mt-3" ref={cityRef} type="text" placeholder="City" required />
                    <input className="p-2 mt-3" ref={addressRef} type="text" placeholder="Address" required />
                    <input className="p-2 mt-3" ref={contactRef} type="number" placeholder="Contact No." required />

                    <button style={{ backgroundColor: "indigo", color: "white", fontSize: "20px" }} className="mb-5 mt-5 btn" type="submit">CONFIRM ORDER</button>
                </form>

            </div>
        </div>
    );
};

export default SportOrders;