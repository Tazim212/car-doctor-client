/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import About from "../Shared/About/About";
import Banner from "../Shared/Banner/Banner";
import Service from "../Shared/Service/Service";
import Question from "../../Pages/Question/Question";
import Products from "../Shared/Products/Products";
import Team from "../Team/Team";
import Cores from "../Shared/Cores/Cores";

const Home = () => {

    const [services, setServices] = useState([]);
    const [products, setProducts] = useState([]);



    useEffect(() => {
        fetch('http://localhost:4000/services',{
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    useEffect( ()=>{
        fetch('carEngine.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])


    return (
        <div className="mt-28">
            <Banner></Banner>
            <About></About>

            <div className="text-center">
                <h3 className="text-lg font-semibold text-orange-600">Service</h3>
                <h1 className="text-5xl font-bold py-4">Our Service Area</h1>
                <p className="pb-8">the majority have suffered alteration in some form, by injected humour, or randomised <br></br> words which don't look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 my-6">
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }

            </div>
            <div className="text-center">
                <button className="btn btn-outline btn-info">Get More Services</button>
            </div>

            <Question></Question>

            <div className="text-center">
                <h3 className="text-lg font-semibold text-orange-600">Popular Products</h3>
                <h1 className="text-5xl font-bold py-4">Browse Our Products</h1>
                <p className="pb-8">the majority have suffered alteration in some form, by injected humour, or randomised<br></br> words which don't look even slightly believable.  </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 my-6">
                {
                    products.map(product => <Products key={product.id} product={product}></Products>)
                }
            </div>
            <div className="text-center">
                <button className="btn btn-outline btn-success">More Products</button>
            </div>

            <div className="text-center my-9">
                <h3 className="text-lg font-semibold text-orange-600">Team</h3>
                <h1 className="text-5xl font-bold py-4">Meet Our Team</h1>
                <p className="pb-8">the majority have suffered alteration in some form, by injected humour, or randomised<br></br> words which don't look even slightly believable.  </p>
            </div>

            <Team></Team>

            <div className="text-center my-9">
                <h3 className="text-lg font-semibold text-orange-600">Core Features</h3>
                <h1 className="text-5xl font-bold py-4">Why Choose Us</h1>
                <p className="pb-8">the majority have suffered alteration in some form, by injected humour, or randomised<br></br> words which don't look even slightly believable.</p>
            </div>

            <Cores></Cores>
        </div>
    );
};

export default Home;