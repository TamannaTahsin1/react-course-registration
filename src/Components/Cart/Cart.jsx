/* eslint-disable react/prop-types */


// eslint-disable-next-line react/prop-types
const Cart = ({ selectedCourses, remaining, totalCredit, totalCost }) => {
    console.log(selectedCourses)
    return (
        <div>
                <h1 className="font-semibold text-blue-500 pb-2">Credit Hour Remaining: {remaining} hr</h1>
                <hr />
                <p className="font-bold pb-2">Course Name</p>
                {/* mapping */}  
                       
                {selectedCourses.map((course) =>(           
                   
                     <li key={course.id} className="list-decimal text-lg text-gray-500 pb-2">{course.title}</li>
                   
                ))}

                <hr />
                <p className="text-xl pb-2">Total Credit Hour: {totalCredit} </p>
                <hr />
                <p className="text-xl pb-2">Total Price: {totalCost} USD</p>
        </div>
    );
};

export default Cart;