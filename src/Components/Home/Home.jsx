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
        <div className="card-container">
            {/* card design */}
            <div className="card w-80 bg-base-100 shadow-2xl rounded-lg p-3">
            <img className="w-80 items-center rounded-xl py-2" src="https://i.ibb.co/Y8kNvKg/Rectangle-2.png" alt="Shoes" />
            <h2 className="text-xl font-semibold py-2">Introduction to C Programming</h2>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                <div className="flex justify-around py-2">
                <p>Price: 10000</p>
                <p>Credit: 1hr</p>
                </div>
                <div>
                    <button className="bg-blue-600 w-72 items-center p-2 rounded-xl ml-1 my-2 text-white">Select</button>
                </div>
            </div>
            {/* for cart */}
        </div>
        </div>
    );
};

export default Home;