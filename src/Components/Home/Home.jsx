import { useState } from "react";
import { useEffect } from "react";
import Cart from "../Cart/Cart";
// for toast pakeage
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Home = () => {
    // store the data
    const [allCourses, setAllCourses] = useState([]);
    const [selectedCourses, setSelectedCourses] = useState([]);
    // fetching the data
    useEffect(() => {
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setAllCourses(data))
    },[]);

    const handleSelectCourse = (course) =>{
        const isExist = selectedCourses.find(item => item.id === course.id)
        if(isExist){
            toast('This course is already taken. Select other courses')
        }
        else{
            setSelectedCourses([...selectedCourses, course])
        }
    }
    console.log(selectedCourses);
    
    return (
        <div className="container mx-auto">
            <h1 className='mt-10 text-4xl font-bold text-center '>Course Registration</h1> 
        <div className="lg:flex">
            {/* card design */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 md:ml-6">
        {/* mapping card */}
        {
            allCourses.map(course =>(
                <div key={course.id} className="card w-80 bg-base-100 shadow-2xl rounded-lg p-3">
                <img className="w-80 items-center rounded-xl py-2" src={course.cover} alt="Shoes" />
                <h2 className="text-xl font-semibold py-2">{course.title}</h2>
                <p>{course.details}</p>
                    <div className="flex justify-around py-2">
                    <p>Price: {course.price}</p>
                    <p>Credit: {course.credit}</p>
                    </div>
                    <div>
                        <button onClick={()=>handleSelectCourse(course)} className="bg-blue-600 w-72 items-center p-2 rounded-xl ml-1 my-2 text-white">Select</button>
                        {/* design of toast attribute */}
                        <ToastContainer
                            position="top-center"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="dark"
                            />
                    </div>
                </div>
            ))
        }
        </div>
            {/* for cart */}
            <div className="card w-80 bg-base-100 shadow-2xl rounded-lg p-3 ml-11 max-h-96 mt-12 text-2xl">               
                <Cart 
                selectedCourses={selectedCourses}>
                    
                </Cart>
            </div>
        </div>
        </div>
    );
};

export default Home;