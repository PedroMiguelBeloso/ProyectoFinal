import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';
import { FaList, FaCog, FaUser } from 'react-icons/fa';
import './Sidebar.css'; 

const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column flex-shrink-0 p-3 bg-dark text-white">
            <Nav className="flex-column" variant="pills">
                <Nav.Item className="mb-3 text-center"> {}
                    <Nav.Link href="#" className="text-white d-flex justify-content-center align-items-center">
                        <FaList size={20} /> {}
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="mb-3 text-center"> {}
                    <Nav.Link href="#" className="text-white d-flex justify-content-center align-items-center">
                        <FaCog size={20} /> {}
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="mb-3 text-center"> {}
                    <Nav.Link href="#" className="text-white d-flex justify-content-center align-items-center">
                        <FaUser size={20} /> {}
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
};

export default Sidebar;
