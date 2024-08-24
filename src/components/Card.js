import react, { useState } from 'react';
import { FcLike,FcLikePlaceholder } from 'react-icons/fc';
import { toast } from 'react-toastify';

const Card = ( {course, likedCourses, setLikedCourses} ) => {

    function clickHandler() {
        if(likedCourses.includes(course.id)) {
            //it is liked already
            setLikedCourses(likedCourses.filter(id => id!== course.id));
            toast.warning("Like Removed");
        }
        else {
            //it is not liked yet
            //insert it in likedCourses
            if(likedCourses.length === 0) {
                setLikedCourses([course.id]);
            }
            else {
                // setLikedCourses((prev) => [...prev, course.id])
                setLikedCourses([...likedCourses, course.id]);
            }
            toast.success("Liked Successfully");
        }
        console.log(likedCourses)
    }

    return (
        <div className='w-[300px] bg-[#1f1c36] bg-opacity-80 rounded-md overflow-hidden'>
            <div className='relative'>
                <img src={course.image.url}/>
                <div className='absolute bg-white w-[40px] h-[40px] rounded-full right-2 -bottom-3 flex justify-center items-center cursor-pointer'>
                    <button onClick={clickHandler}>
                        {
                            likedCourses.includes(course.id) ? (
                                <FcLike fontSize="1.75rem" color="#e74c3c" />
                            ) : (
                                <FcLikePlaceholder fontSize="1.75rem" color="#e74c3c" />
                            )
                        }
                    </button>
                </div>
            </div>
            <div className='p-4 '>
                <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
                <p className='text-white mt-2'>
                    {
                        course.description.length > 100 ? 
                        (`${course.description.substring(0, 100)}...`) : 
                        (course.description)
                    }
                </p>
            </div>
        </div>
    )
}

export default Card;