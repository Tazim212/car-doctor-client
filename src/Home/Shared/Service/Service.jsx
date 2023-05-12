/* eslint-disable react/prop-types */
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const Service = ({service}) => {

    const {title, img, price} = service
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className="h-72" src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">{title}</h2>
                <div className="card-actions justify-end items-center py-3">
                <p className="text-xl font-semibold text-orange-500">Price: ${price}</p>
                    <Link to='/book'><button><span className="text-xl"><HiArrowNarrowRight></HiArrowNarrowRight></span></button></Link>
                </div>
            </div>
        </div>
    );
};

export default Service;