import React,{useEffect, useRef, useState} from 'react'
import { Form, FormGroup, Label, Input, Container, Button } from 'reactstrap';
import axios from 'axios';
import base_url from '../bootapi';
import { useLocation } from 'react-router-dom';

const UpdateCourse = () => {
    const location = useLocation();
    // console.log(location)

    const { updateCourse } = location.state;

    useEffect(() => {
        console.log(`updatecourse -> ${JSON.stringify(updateCourse)}`)
        document.title = "Update Courses"
        courseIdRef.current.value = updateCourse.id;
        nameRef.current.value = updateCourse.name;
        descriptionRef.current.value = updateCourse.description;
    }, [])
    
    const [course, setCourse] = useState(
        {
            id: updateCourse.id,
            name: updateCourse.name,
            description: updateCourse.description
        })

    const courseIdRef = useRef(null);
    const nameRef = useRef(null);
    const descriptionRef = useRef(null);

    // form handling function 
    const handleForm = (e) => {
        e.preventDefault()
        console.log(`updated course data ${JSON.stringify(course)}`)
        postDataToServer(course)
    }

    const resetForm = () => {
        setCourse({});
        courseIdRef.current.value = ''; // Reset input field value
        nameRef.current.value = ''; // Reset input field value
        descriptionRef.current.value = ''; // Reset input field value
      };

    // update data to server
    const postDataToServer = (course) => {
        console.log(`post course -> ${JSON.stringify(course)}`)
        axios.put(`${base_url}/course/${course.id}`, course).then(
            (response) => {
                console.log(response)
                console.log("success")
                alert(`Course ${course.name} update successfully!!`)
                resetForm()
            },
            (error) => {
                console.log(error)
                console.log("error")
            }
        )
    }
    
    return (
        <div className="text-center">
            <h1>Update Course Detail</h1>
            <Form width="50%" onSubmit={handleForm}>
                <FormGroup>
                    <Label for='courseId'>Course Id</Label>
                    <Input type='number' placeholder='Update here' name='id' id='courseId'
                        innerRef={courseIdRef}
                        // onChange={(e) => {
                        //     setCourse({...course, id:e.target.value})
                        // }}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for='name'>Course Title</Label>
                    <Input type='text'
                        placeholder='Update title here'
                        name='name'
                        id='name'
                        innerRef={nameRef}
                        onChange={(e) => {
                            setCourse({...course, name:e.target.value})
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for='description'>Course description</Label>
                    <Input style={{ height:120 }}
                        type='text'
                        placeholder='Update description here'
                        name='description'
                        id='description'
                        innerRef={descriptionRef}
                        onChange={(e) => {
                            setCourse({...course, description:e.target.value})
                        }}
                    />
                </FormGroup>
                <Container>
                    <Button color='success m-3' type='submit' style={{width:"150px"}}>Update Course</Button>
                    {/* <Button color='warning m-3' type='reset' style={{width:"150px"}}>Clear </Button> */}
                </Container>
            </Form>
            <div style={{height:"100px"}}></div>
        </div>
    )
}

export default UpdateCourse;