import { FaBusinessTime , FaMapMarkerAlt} from "react-icons/fa"
import { MdPermPhoneMsg } from "react-icons/md";
const Question = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-12 py-24 bg-black text-slate-50">
            <div className="flex justify-center items-center gap-3">
                <span className="text-4xl"><FaBusinessTime></FaBusinessTime></span>
                <div>
                    <p>We are open monday-friday</p>
                    <strong className="text-lg">7:00 am - 9:00 pm</strong>
                </div>
            </div>
            <div className="flex justify-center items-center gap-3">
                <span className="text-4xl"><MdPermPhoneMsg></MdPermPhoneMsg></span>
                <div>
                    <p>Have a question?</p>
                    <strong className="text-lg">+2546 251 2658</strong>
                </div>
            </div>
            <div className="flex justify-center items-center gap-3">
                <span className="text-3xl"><FaMapMarkerAlt></FaMapMarkerAlt></span>
                <div>
                    <p>Need a repair? our address</p>
                    <strong className="text-lg">Liza Street, New York</strong>
                </div>
            </div>
        </div>
    );
};

export default Question;