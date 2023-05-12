import person1 from '../../assets/images/team/1.jpg'
import person2 from '../../assets/images/team/2.jpg'
import person3 from '../../assets/images/team/3.jpg'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Team = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={person1} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Car Engine Plug</h2>
                    <p>Engine Expert</p>
                    <div className='flex gap-2'>
                        <span className='text-3xl text-blue-900'><FaFacebook></FaFacebook></span>
                        <span className='text-2xl text-slate-50 bg-sky-400 rounded-full p-1'><FaTwitter></FaTwitter></span>
                        <span className='text-2xl text-blue-900 rounded-full p-1'><FaLinkedin></FaLinkedin></span>
                        <span className='text-2xl text-slate-300 bg-red-400 rounded-full p-1'><FaInstagram></FaInstagram></span>
                    </div>
                </div>
            </div>

            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={person2} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Car Engine Plug</h2>
                    <p>Engine Expert</p>
                    <div className='flex gap-2'>
                        <span className='text-3xl text-blue-900'><FaFacebook></FaFacebook></span>
                        <span className='text-2xl text-slate-50 bg-sky-400 rounded-full p-1'><FaTwitter></FaTwitter></span>
                        <span className='text-2xl text-blue-900 rounded-full'><FaLinkedin></FaLinkedin></span>
                        <span className='text-2xl text-white bg-red-400 rounded-full p-1'><FaInstagram></FaInstagram></span>
                    </div>
                </div>
            </div>

            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={person3} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Car Engine Plug</h2>
                    <p>Engine Expert</p>
                    <div className='flex gap-2'>
                        <span className='text-3xl text-blue-900'><FaFacebook></FaFacebook></span>
                        <span className='text-2xl text-slate-50 bg-sky-400 rounded-full p-1'><FaTwitter></FaTwitter></span>
                        <span className='text-2xl text-blue-900 rounded-[50%]'><FaLinkedin></FaLinkedin></span>
                        <span className='text-2xl text-white bg-red-400 rounded-full p-1'><FaInstagram></FaInstagram></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;