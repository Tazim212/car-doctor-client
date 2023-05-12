/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import Table from "./Table";


const BookingCard = () => {

    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/bookings', {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => {
                setBooks(data)
            })
    }, [])

    return (
        <div className="overflow-x-auto w-full px-20 mt-28 mb-16">
            <table className="table w-full bg-amber-400">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Service Name</th>
                        <th>Service Types</th>
                        <th>Price</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map(book =><Table key={book._id} book={book}></Table>)
                    }
                </tbody>
            </table>
        </div>

    );
};

export default BookingCard;