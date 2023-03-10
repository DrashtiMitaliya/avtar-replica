import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { BsHeart } from 'react-icons/bs';
import { AiOutlineEdit } from 'react-icons/ai';
import { AiFillDelete } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlinePhone } from 'react-icons/ai';
import { BsGlobe } from 'react-icons/bs'

export const Cards = ({ users }) => {

    return (
    
           
               
                    <Card style={{ width: '20rem' }} className='m-3'>

                        <Card.Body className='bg-light'>
                            <Card.Img variant="top" src={`https://avatars.dicebear.com/v2/avataaars/${users.username}.svg?options[mood][]=happy`} />
                        </Card.Body>
                        <ListGroup className="list-group-flush text-start">
                            <Card.Title>{users.name}</Card.Title>
                            <ListGroup.Item className='border-0 '><AiOutlineMail /> {users.email}</ListGroup.Item>
                            <ListGroup.Item className='border-0 '> <AiOutlinePhone /> {users.phone}</ListGroup.Item>
                            <ListGroup.Item className='border-0 '><BsGlobe />{users.website}</ListGroup.Item>
                        </ListGroup>
                        <Card.Body className='bg-light'>
                            <div className="row ">
                                <div className="col"><button className='border-0 bg-transparent'><BsHeart /></button></div>
                                <div className="col"><button className='border-0 bg-transparent'><AiOutlineEdit /></button></div>
                                <div className="col"><button className='border-0 bg-transparent'><AiFillDelete /></button></div>
                            </div>
                        </Card.Body>
                    </Card>
               
     

    )
}
