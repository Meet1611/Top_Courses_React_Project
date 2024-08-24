import React, { useEffect,useState } from "react";
import { apiUrl,filterData } from "./data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";
import { toast } from "react-toastify";

const App = () => {

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);
  const [isLikedClicked, setIsLikedClicked] = useState(false);

  useEffect( () => {
    setLoading(true);
    const fetchData = async () => {
      try{
        const res = await fetch(apiUrl);
        const output = await res.json();
        setCourses(output.data);
      }
      catch(error) {
        toast.error('Something went wrong');
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#42435f]">
      <Navbar isLikedClicked={isLikedClicked} setIsLikedClicked={setIsLikedClicked} />
      <div>
        <Filter 
          filterData={filterData}
          category={category}
          setCategory={setCategory}
          isLikedClicked={isLikedClicked}
        />
        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {
            loading ? (<Spinner></Spinner>) : (<Cards courses={courses} category={category} isLikedClicked={isLikedClicked} />)
          }
        </div>
      </div>
    </div>
  );
}

export default App;
