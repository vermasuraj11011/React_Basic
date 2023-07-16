import React from "react";
import { Container, Button } from "reactstrap";
import { Link } from "react-router-dom";

const Jumbotron = () =>{
    return (
        <div class="container-fluid bg-light text-dark p-3">
            <div class="container bg-light p-3">
                <h1 class="display-6 fw-bold">Welcome to React App Course</h1>
                <hr/>
                <p>This is a new web app built on the react</p>
                <Container>
                    {/* <Button color="primary">Start Using Our Application</Button> */}
                    <Link tag="a" className="btn btn-primary" to="/view-course" action>Start Using Our Application</Link>
                </Container>
            </div>
        </div>
    )
}

export default Jumbotron;