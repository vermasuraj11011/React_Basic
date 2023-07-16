import React from 'react'
import { ListGroup } from 'reactstrap';
import { Link } from 'react-router-dom';

const Menus = () => {
    return (
        <div>
            <ListGroup>
                <Link tag="a" className="list-group-item list-group-item-action" to="/" action>Home</Link>
                <Link tag="a" className="list-group-item list-group-item-action" to="/view-course" action>View Courses</Link>
                <Link tag="a" className="list-group-item list-group-item-action" to="/add-course" action>Add Courses</Link>
                <Link tag="a" className="list-group-item list-group-item-action" to="#" action>About</Link>
                <Link tag="a" className="list-group-item list-group-item-action" to="#" action>Contact</Link>
            </ListGroup>
        </div>
    )
}

export default Menus;