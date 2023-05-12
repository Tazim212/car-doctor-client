import icon1 from '../../../assets/icons/check.svg'
import icon2 from '../../../assets/icons/deliveryt.svg'
import icon3 from '../../../assets/icons/group.svg'
import icon4 from '../../../assets/icons/Wrench.svg'
import icon5 from '../../../assets/icons/person.svg'
import icon6 from '../../../assets/icons/quote.svg'

const Cores = () => {
    return (
        <div className='flex justify-center gap-20 mb-16'>
            <img className='h-28 border-2 p-2 rounded-md' src={icon1} alt="" />
            <img className='h-28 border-2 p-2 rounded-md' src={icon2} alt="" />
            <img className='h-28 border-2 p-2 rounded-md' src={icon3} alt="" />
            <img className='h-28 border-2 p-2 rounded-md bg-orange-600' src={icon4} alt="" />
            <img className='h-28 border-2 p-2 rounded-md' src={icon5} alt="" />
            <img className='h-28 border-2 p-2 rounded-md' src={icon6} alt="" />
        </div>
    );
};

export default Cores;