/* eslint-disable no-unused-vars */
import { useState } from "react";

const Bookings = () => {

    const [booking, setBooking] = useState({})


    const handleBooking = event => {
        event.preventDefault()

        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const type = form.type.value;
        const date = form.date.value;

        const books = { name, price, type, date }

        fetch('http://localhost:4000/bookings', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(books)
        })
            .then(res => res.json())
            .then(data => {
                setBooking(data)
                form.reset()
            })
    }


    return (
        <div>
            <div className="hero h-96 mb-11 mt-32" style={{ backgroundImage: "url('/src/assets/images/banner/5.jpg')" }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="text-neutral-content pr-96">
                    <div>
                        <h1 className="mb-5 text-5xl font-bold pr-56">Add New Service</h1>
                    </div>
                </div>
            </div>

            {/*----------------------------- booking form ------------------------------------- */}

            <form onSubmit={handleBooking} className="grid grid-cols-1 md:grid-cols-2 gap-11 mb-16">
                <div>
                    <label className="label">
                        <span className="label-text">Service Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Service Name" className="w-full border-solid border-black outline outline-offset-2 outline-slate-500 rounded-sm py-2 px-4" />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Service Price</span>
                    </label>
                    <input type="text" name="price" placeholder="Service Price" className="w-full border-solid border-black outline outline-offset-2 outline-slate-500 rounded-sm py-2 px-4" />
                </div>

                <div>
                    <label className="label">
                        <span className="label-text">Service type</span>
                    </label>
                    <input type="text" name="type" placeholder="Service Type" className="w-full border-solid border-black outline outline-offset-2 outline-slate-500 rounded-sm py-2 px-4" />
                </div>

                <div>
                    <label className="label">
                        <span className="label-text">Date</span>
                    </label>
                    <input type="date" name="date" placeholder="Date" className="w-full border-solid border-black outline outline-offset-2 outline-slate-500 rounded-sm py-2 px-4" />
                </div>
                <div className="mt-6">
                    <button className="btn btn-primary btn-block ms-80">Order Now</button>
                </div>

            </form>
        </div>
    );
};

export default Bookings;