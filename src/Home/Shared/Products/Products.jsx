/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa"; 

const Products = ({ product }) => {

    const { image, title, price } = product;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl h-72 bg-slate-300" />
            </figure>
            <div className="card-body items-center text-center">
                <div className="flex gap-1 text-base text-orange-500">
                <span><FaStar></FaStar></span>
                <span><FaStar></FaStar></span>
                <span><FaStar></FaStar></span>
                <span><FaStar></FaStar></span>
                <span><FaStar></FaStar></span>
                </div>
                <h2 className="card-title text-2xl font-bold">{title}</h2>
                <p className="text-xl font-semibold text-orange-500">Price: ${price}</p>
            </div>
        </div>
    );
};

export default Products;