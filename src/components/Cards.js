import React, { useState } from "react";
import Card from './Card';

const Cards = ({ courses, category, isLikedClicked }) => {

  let allCourses = []; 
  let allLikedCourses = []; 
  const [likedCourses, setLikedCourses] = useState([]);

  const getCourses = () => {    
    if(category === 'All') {
      Object.values(courses).forEach((courseCategory) => {
        courseCategory.forEach((course) => {
           allCourses.push(course);
        });
      });
      return allCourses;
    }
    else {
      // specific category will be passed as a parameter
      return courses[category];
    }
  } 
  
  const handleLike = () => {
    if(category === 'All') {
      likedCourses.forEach((id) => {
          Object.values(courses).forEach((courseCategory) => {
          courseCategory.forEach((course) => {
            if(id === course.id) {
              allLikedCourses.push(course);
            }
          })
        })
      })
      return allLikedCourses
    }
    else {
      // specific category will be passed as a parameter
      return courses[category].filter((course) => likedCourses.includes(course.id));
    }
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
        {
          isLikedClicked ? 
          (
            handleLike().map((course) => {
              return (
                <Card 
                  key={course.id} 
                  course={course} 
                  likedCourses={likedCourses} 
                  setLikedCourses={setLikedCourses} />
              )
            })
          ) : (
          getCourses().map((course) => {
            return (
              <Card 
              key={course.id} 
              course={course} 
              likedCourses={likedCourses} 
              setLikedCourses={setLikedCourses} />
            )
          }))
        }
    </div>
  )
};

export default Cards;
