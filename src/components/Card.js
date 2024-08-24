import react, { useState } from 'react';
import { FcLike } from 'react-icons/fc';

const Card = ( {course} ) => {

    const [heart, setHeart] = useState(false);

    return (
        <div className='w-[300px] bg-[#1f1c36] bg-opacity-80 rounded-md overflow-hidden'>
            <div className='relative'>
                <img src={course.image.url}/>
                <div className='absolute bg-white w-[40px] h-[40px] rounded-full right-2 -bottom-3 flex justify-center items-center'>
                    <button>
                        <FcLike fontSize="1.75rem" />
                    </button>
                </div>
            </div>
            <div>
                <p>{course.title}</p>
                <p>{course.description}</p>
            </div>
        </div>
    )
}

export default Card;