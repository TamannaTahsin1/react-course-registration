## React + Vite


#### Question 1: Write 3 features of your projects

Answer 1: The Course Registration React Project aims to streamline the course registration process for students.

### Key Features:
1.Course Catalog.
2.Course Selection.
3.Course Details.


#### Question 2: Discuss how you managed the state in your project!

Answer 2: 
Here's a general approach to managing state in a React course registration project:

1. Importing use state for multiple times: At the top of my component file, I imported React and the useState hook.

2. Initialize State: Inside my functional component, declared a state variable using the useState hook. The useState hook returns an array with two elements: the current state value and a function to update it. By convention, the state variable and the updater function have a name starting with set.

3. Access and Display State: I accessed and displayed the state value within my Home JSX.

4. Updating State: To update the state, call the updater function (in this case, setCount) with the new value. It's important to note that the state update is asynchronous. 

5. Handling Complex State Objects: The state is more complex and consists of multiple values, so I use an object to hold those values. To update specific properties of the object, I creatd a new object that spreads the existing state and only modifies the properties I wanted to change.

6. Functional Updates: The new state value depends on the previous state value, it's recommended to use a functional update. This ensures that I'm working with the latest state.

7. Cleaning Up State: So, I performed state cleanup by using the useEffect hook to handle cleanup when a component unmounts.