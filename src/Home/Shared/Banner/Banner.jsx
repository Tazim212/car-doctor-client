import { Link } from 'react-router-dom';
import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full">
            {/* -------------------=slide-1-------------------  */}

            <div id="slide1" className="carousel-item relative w-full  mx-6">
                <img src={img1} className="w-full h-[700px]" />

                <div className="absolute w-full pb-3 top-8 ps-28 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <h1 className='font-bold text-6xl pt-24 pb-0 text-zinc-50'>Affordable<br/> Price For Car<br/> Servicing</h1>
                    <p className='text-slate-50 py-8'>There are many variations of passages of  available, but <br/> the majority have suffered alteration in some form</p>
                    <Link><button className='bg-orange-600 py-4 px-4 font-semibold rounded-lg'>Discover More</button></Link>
                    <Link><button className='btn btn-outline text-green-500 ms-4'>Latest Project</button></Link>
                </div>

                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-orange-600">❯</a>
                </div>
            </div>
                {/* --------------------------slide-2-------------------------  */}

            <div id="slide2" className="carousel-item relative w-full h-[700px]">
                <img src={img2} className="w-full h-[700px]" />

                <div className="absolute top-8 pb-3 ps-28 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <h1 className='font-bold text-6xl pt-24 pb-0 text-zinc-50'>Affordable<br/> Price For Car<br/> Servicing</h1>
                    <p className='text-slate-50 py-8'>There are many variations of passages of  available, but <br/>the majority have suffered alteration in some form</p>
                    <Link><button className='bg-orange-600 py-4 px-4 font-semibold rounded-lg'>Discover More</button></Link>
                    <Link><button className='btn btn-outline text-green-500 ms-4'>Latest Project</button></Link>
                </div>

                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle bg-orange-600">❯</a>
                </div>
            </div>
                        {/* ------------------------slide-3----------------------  */}

            <div id="slide3" className="carousel-item relative w-full h-[700px]">
                <img src={img3} className="w-full h-[700px]" />

                <div className="absolute top-8 pb-3 ps-28 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <h1 className='font-bold text-6xl pt-24 pb-0 text-zinc-50'>Affordable<br/> Price For Car<br/> Servicing</h1>
                    <p className='text-slate-50 py-8'>There are many variations of passages of  available, but<br/> the majority have suffered alteration in some form</p>
                    <Link><button className='bg-orange-600 py-4 px-4 font-semibold rounded-lg'>Discover More</button></Link>
                    <Link><button className='btn btn-outline text-green-500 ms-4'>Latest Project</button></Link>
                </div>

                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle bg-orange-600">❯</a>
                </div>
            </div>
                        {/*-------------------------- slide-4 ------------------------- */}

            <div id="slide4" className="carousel-item relative w-full h-[700px]">
                <img src={img4} className="w-full h-[700px]" />

                <div className="absolute top-8 pb-3 ps-28 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <h1 className='font-bold text-6xl pt-24 pb-0 text-zinc-50'>Affordable<br/> Price For Car<br/> Servicing</h1>
                    <p className='text-slate-50 py-8'>There are many variations of passages of  available, but<br/> the majority have suffered alteration in some form</p>
                    <Link><button className='bg-orange-600 py-4 px-4 font-semibold rounded-lg'>Discover More</button></Link>
                    <Link><button className='btn btn-outline text-green-500 ms-4'>Latest Project</button></Link>
                </div>

                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle bg-orange-600">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Banner;