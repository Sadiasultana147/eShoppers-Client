import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';

const Category = (props) => {
    const history = useHistory()

    const { _id, name, image } = props.category;
    const { handleDelete } = props;
    const handleAllProducts = () => {
        if (name == "Electronics") {

            const url = "/electronics"


            history.push(url)
            console.log("Electro")
        }
        else if (name == "Sports") {

            const url1 = "/sports"
            history.push(url1)
            console.log("Sport")
        }

        else if (name == "Furnitures") {

            const url3 = "/furnitures"
            history.push(url3)

        }
        else if (name == "Fashions") {

            const url4 = "/fashions"
            history.push(url4)

        }
        else if (name == "Cosmetics") {

            const url5 = "/cosmetics"
            history.push(url5)

        }
    }
    return (
        <div>
            <div className="col h-100">
                <div style={{ backgroundColor: "#D5D6EA" }} className="cardbox w-100 card h-100">
                    <div>
                        <img src={image} alt="" className=" w-100 h-100 p-5" />
                    </div>
                    <div className="card-body text-center">
                        <h4 className="card-text">{name}</h4>



                    </div>
                    <div class="card-footer bg-transparent border-success d-flex justify-content-between">
                        <Link style={{ textDecoration: "none" }} className="link d-flex justify-content-center" ><button onClick={() => handleDelete(_id)} className="btn btn-danger">
                            <i style={{ color: "red", fontSize: "20px" }} class="fa fa-cart-plus"></i>
                            <span className="ps-1"> DELETE</span>
                        </button>
                        </Link>


                        <Link style={{ textDecoration: "none" }} className="link d-flex justify-content-center" onClick={handleAllProducts}  ><button className="btn btn-info ">
                            <i style={{ color: "red", fontSize: "20px" }} class="fa fa-cart-plus"></i>
                            <span className="ps-1"> ALL PRODUCTS</span>
                        </button>
                        </Link>

                    </div>


                </div>

            </div>
        </div>
    );
};

export default Category;