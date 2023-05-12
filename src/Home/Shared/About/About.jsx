import aboutimg from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200 my-9">
            <div className="hero-content relative flex-col lg:flex-row">
                <img src={aboutimg} className="max-w-md rounded-lg shadow-2xl" />
                <img className='absolute w-52 h-52 left-64 top-1/2' src={parts} alt="" />
                <div className='ps-24'>
                    <h2 className='font-semibold text-xl text-orange-500'>About Us</h2>
                    <h1 className="text-5xl font-bold">We are qualified & lot<br/> of experience <br/>in this field</h1>
                    <p className="py-6 leading-6 tracking-wider">There are many variations of passages of Lorem Ipsum available, but<br></br> the majority have suffered alteration in some form, by injected humour,<br></br> or randomised words which dont look even slightly believable. </p>
                    <p className="py-6 leading-6 tracking-wider">the majority have suffered alteration in some form, by<br></br> injected humour, or randomised words which dont look<br></br> even slightly believable.  </p>
                    <button className="btn bg-orange-500">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;