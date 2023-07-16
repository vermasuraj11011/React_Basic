import React from "react";
import {
    Card,
    CardBody,
    CardSubtitle,
    CardText,
    Container,
    Button
} from "reactstrap";
import axios from "axios";
import base_url from "../bootapi";
import { Link } from "react-router-dom";


const Course = ({ update,course }) => {

    console.log(`course id -> ${course.id}`) 

    console.log(`course -> ${JSON.stringify(course)}`) 

    const deleteCourse = (id) => {
        axios.delete(`${base_url}/course/${id}`)
            .then(
                (response) => {
                    console.log(`response -> ${response}`)
                }, (error) => {
                    console.log(error)
                }
            )
    }

    return (
        <Card className="text-center m-3">
            <CardBody>
                <CardSubtitle className="font-weight-bold">{ course.name }</CardSubtitle>
                <CardText>{ course.description }</CardText>
                <Container >
                    <Button color="danger ms-3" onClick={() => { deleteCourse(course.id) }}>Delete</Button>
                    <Link
                        tag="a"
                        className="btn btn-warning ms-3"
                        // to="/update-course"
                        to={{ pathname: '/update-course' }}
                        state= {{ updateCourse: course }}
                        action>
                        Update
                    </Link>
                </Container>
            </CardBody>
        </Card>
    )
}

export default Course;