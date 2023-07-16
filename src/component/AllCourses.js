import React, { useState , useEffect} from "react";
import Course from "./Course";
import { Button } from "reactstrap";
import axios from "axios";
import base_url from "../bootapi";

const AllCourses = () => {

    const [courses, setCourses] = useState(
        [
            {id:321, name: "Java", description: "Java is most used backend language" },
            {id:123, name: "Python", description: "Python is most popular language" }
        ]
    )
    
    const updateCourses = (id) => {
        setCourses(courses.filter((c)=> c.id != id))
    }
    // [] this will run when the component is added not update (run only once)
    useEffect(() => {
        document.title = "View Course"
    }, [])
    
    // get course data
    const getAllCoursesFromServer = () => {
        axios.get(`${base_url}/course`)
            .then(
                (response) => {
                    console.log(response)
                    setCourses(response.data)
            },
                (error) => {
                    console.log(error)
                    alert("Something went wrong")
                }
            )
    }

    // calling get course data only once
    useEffect(() => {
        getAllCoursesFromServer()
    },[])

    
    return (
        <div className="text-center">
            {/* adding new courese when test button is clicked */}
            {/* <Button onClick={() => {
                setCourses([...courses, {title: "Python", description: "Python is most popular language"}])
            }}>Test</Button> */}



            <h1 className="">All Courses</h1>
            <p>List of courses are as follows</p>
            {
                (courses.length > 0) ?  courses.map((course)=> (<Course update={updateCourses} key={course.id} course={course}/>)) : "No course available"
            }
        </div>
    )
}

export default AllCourses;