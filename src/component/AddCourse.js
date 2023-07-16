import React,{useEffect, useRef, useState} from 'react'
import { Form, FormGroup, Label, Input, Container, Button } from 'reactstrap';
import axios from 'axios';
import base_url from '../bootapi';

const AddCourse = () => {

    useEffect(() => {
        document.title = "Add Courses"
    }, [])
    
    const [course, setCourse] = useState({})

    const courseIdRef = useRef(null);
    const nameRef = useRef(null);
    const descriptionRef = useRef(null);

    // form handling function 
    const handleForm = (e) => {
        e.preventDefault()
        console.log(course)
        postDataToServer(course)
    }

    const resetForm = () => {
        setCourse({});
        courseIdRef.current.value = ''; // Reset input field value
        nameRef.current.value = ''; // Reset input field value
        descriptionRef.current.value = ''; // Reset input field value
      };

    // post data to server
    const postDataToServer = (course) => {
        axios.post(`${base_url}/course`, course).then(
            (response) => {
                console.log(response)
                console.log("success")
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
            <h1>Fill Course Detail</h1>
            <Form width="50%" onSubmit={handleForm}>
                <FormGroup>
                    <Label for='courseId'>Course Id</Label>
                    <Input type='number' placeholder='Enter here' name='id' id='courseId' innerRef={courseIdRef}
                        onChange={(e) => {
                            setCourse({...course, id:e.target.value})
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for='name'>Course Title</Label>
                    <Input type='text'
                        placeholder='Enter title here'
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
                        placeholder='Enter description here'
                        name='description'
                        id='description'
                        innerRef={descriptionRef}
                        onChange={(e) => {
                            setCourse({...course, description:e.target.value})
                        }}
                    />
                </FormGroup>
                <Container>
                    <Button color='success m-3' type='submit' style={{width:"150px"}}>Add Course</Button>
                    <Button color='warning m-3' type='reset' style={{width:"150px"}}>Clear </Button>
                </Container>
            </Form>
            <div style={{height:"100px"}}></div>
        </div>
    )
}

export default AddCourse;