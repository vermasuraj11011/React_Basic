import React from 'react'
import { Card, CardBody } from 'reactstrap';

function Header({name, pos}) {
    return (
        <div >
            <Card className='my-2 bg-warning'>
                <CardBody>
                <h1 className='text-center my-4'>Welcome to new Learning platform</h1>
                </CardBody>
            </Card>
        </div>
    )
}

export default Header;