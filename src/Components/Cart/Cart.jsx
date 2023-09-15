/* eslint-disable react/prop-types */


// eslint-disable-next-line react/prop-types
const Cart = ({ selectedCourses }) => {
    console.log(selectedCourses)
    return (
        <div>
                <h1 className="font-semibold text-blue-500">Credit Hour Remaining: {selectedCourses.length}</h1>
                <hr />
                <p className="font-bold">Course Name</p>
                {/* mapping */}
               
                {selectedCourses.map((course) =>(           
                   <ol  key={course.id}>
                     <li className="text-lg text-gray-500">{course.title}</li>
                   </ol>
                ))}

                <hr />
                <p className="text-xl">Total Credit Hour:</p>
                <hr />
                <p className="text-xl">Total Price:</p>
        </div>
    );
};

export default Cart;