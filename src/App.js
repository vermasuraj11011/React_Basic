import React from 'react';
import './App.css';
import {Container, Row, Col } from 'reactstrap';
import Header from './component/Header';
import Home from './component/Home';
import AllCourses from "./component/AllCourses";
import AddCourse from './component/AddCourse';
import Menus from './component/Menu'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UpdateCourse from './component/UpdateCourse';


function App() {

  return (
    
    <div >
      <Router>
        <Container>
          <Header/>
          <Row>
            <Col md={4}>
              <Menus/>
            </Col>
            <Col md={8}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/view-course" element={<AllCourses />} />
                <Route path="/add-course" element={<AddCourse />} />
                <Route path="/update-course" element={<UpdateCourse />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
   
    );
}

export default App;