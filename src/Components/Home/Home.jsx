import { useState } from "react";
import { useEffect } from "react";
import Cart from "../Cart/Cart";
// for toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// for icon



const Home = () => {
    // store the data by using useState
    const [allCourses, setAllCourses] = useState([]);
    const [selectedCourses, setSelectedCourses] = useState([]);
    const [remaining, setRemaining] = useState(0);
    const [totalCredit, setTotalCredit] = useState(0);
    const [totalCost, setTotalCost] = useState(0)
    // fetching the data
    useEffect(() => {
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setAllCourses(data))
    },[]);

    const handleSelectCourse = (course) =>{
        const isExist = selectedCourses.find((item) => item.id === course.id);

        let count =course.credit;
        let cost = course.price;

        if(isExist){
            toast('This course is already taken. Select other courses');
        }

        else{
            // for each loop for credit
            selectedCourses.forEach((item) =>{
                count += item.credit;
            });
            // for each loop for price
            selectedCourses.forEach((item) =>{
                cost += item.price;
            });
            // for remaining value
            const totalRemaining = 20 - count;
            
            // setting if condition for credit limit
            if(count > 20){
               return toast('You do not have enough credit hour')
            }
            else{
                setTotalCredit(count);
                setRemaining(totalRemaining);
                setTotalCost(cost);
                setSelectedCourses([...selectedCourses, course]);
            }
        }
    };

    
    return (
        <div className="container mx-auto">
            <h1 className='mt-10 text-4xl font-bold text-center '>Course Registration</h1> 
        <div className="flex flex-col-reverse lg:flex-row">
            {/* card design */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 md:ml-6">
        {/* mapping card */}
        {
            allCourses.map(course =>(
                <div key={course.id} className="card w-80 bg-base-100 shadow-2xl rounded-lg p-3">
                <img className="w-80 items-center rounded-xl py-2" src={course.cover} alt="Shoes" />
                <h2 className="text-xl font-semibold py-2 text-center">{course.title}</h2>
                <p className="text-gray-500 pb-3">{course.details}</p>
                    <div className="flex justify-between py-2">
                    <div className="flex gap-2">
                    <img className="w-5" src="https://i.ibb.co/tKhyr7J/dollar-sign-1.jpg" alt="" />
                    <p> Price: {course.price}</p>
                    </div>
                    <div className="flex gap-2">
                    <img className="w-5" src="https://i.ibb.co/0tYRcVB/Frame.jpg" alt="" />
                    <p>Credit: {course.credit} hr</p>
                    </div>
                    </div>
                    <div>
                        <button onClick={()=>handleSelectCourse(course)} className="bg-blue-600 w-72 items-center p-2 rounded-xl ml-1 my-2 text-white">Select</button>
                        {/* design of toast attribute */}
                        <ToastContainer
                            position="top-center"
                            autoClose={2000}
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
            <div className="card w-80 bg-base-100 shadow-2xl rounded-lg p-3 ml-11 max-h-96 mt-12 text-xl">               
                <Cart 
                selectedCourses={selectedCourses}
                remaining = {remaining}
                totalCredit = {totalCredit}
                totalCost = {totalCost}>                  
                </Cart>
            </div>
        </div>
        </div>
    );
};

export default Home;