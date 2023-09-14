/* eslint-disable react/jsx-key */
import { useState } from "react";
import { useEffect } from "react";


const Home = () => {
    // store the data
    const [allCourses, setAllCourses] = useState([])
    // fetching the data
    useEffect(() => {
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setAllCourses(data))
    },[]);
    console.log(allCourses);

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
                        <button className="bg-blue-600 w-72 items-center p-2 rounded-xl ml-1 my-2 text-white">Select</button>
                    </div>
                </div>
            ))
        }
        </div>
            {/* for cart */}
            <div className="card w-80 bg-base-100 shadow-2xl rounded-lg p-3 ml-11 max-h-96 mt-12">
                <h1 className="text-2xl font-semibold text-blue-500">Credit Hour Remaining: </h1>
                <hr />
                <p className="text-2xl font-semibold">Course Name</p>
                <hr />
                <p className="text-2xl">Total Credit Hour:</p>
                <hr />
                <p className="text-2xl">Total Price:</p>
            </div>
        </div>
        </div>
    );
};

export default Home;