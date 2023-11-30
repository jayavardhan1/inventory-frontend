import React from 'react';

import { Accordion,Nav} from 'react-bootstrap';

const Sidebar = () => { 
    return (
        < div >
            <Accordion defaultActiveKey="0" >

                <Accordion.Item eventKey="0">
                    <Accordion.Header>Home</Accordion.Header>
                    <Accordion.Body>
                        <Nav.Item>
                            <Nav.Link href="/">DashBoard</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/">Low Stock</Nav.Link>
                        </Nav.Item>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Inventory</Accordion.Header>
                    <Accordion.Body>
                        
                        <Nav.Item>
                            <Nav.Link href="/">Items</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/">Items Group</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/">Price List</Nav.Link>
                        </Nav.Item>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Sales</Accordion.Header>
                    <Accordion.Body>
                    <Nav.Item>
                            <Nav.Link href="/">Orders</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/">Customers</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/">Bill</Nav.Link>
                        </Nav.Item>
                        
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Account</Accordion.Header>
                    <Accordion.Body>
                    <Nav.Item>
                            <Nav.Link href="/">Sign Out</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/">Sign In</Nav.Link>
                        </Nav.Item>
                        
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Sidebar;
