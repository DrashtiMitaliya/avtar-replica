import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { BsHeart } from 'react-icons/bs';
import { AiOutlineEdit } from 'react-icons/ai';
import { AiFillDelete } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlinePhone } from 'react-icons/ai';
import { BsGlobe } from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai';
import { deleteAvtar } from '../features/AvatarSlice';
import Information from './Information';
import { useDispatch } from 'react-redux';


export const Cards = ({ users }) => {

    const [show, setShow] = useState(true);
    const [heartColor, setColor] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    const dispatch = useDispatch()

    const handleUpdateProfile = () => {
        console.log('click');
        setModalShow(true)
    }


    return (
        <>

            <Card style={{ width: '20rem' }} className='m-3 p-0'>
                <Information users={users}  show={modalShow} onHide={() => setModalShow(false)} />
                <Card.Body className='bg-light ' >
                    <Card.Img variant="top" style={{ height: '180px' }} src={`https://avatars.dicebear.com/v2/avataaars/${users.username}.svg?options[mood][]=happy`} />
                </Card.Body>
                <ListGroup className="list-group-flush text-start">
                    <Card.Title className='m-3 '>{users.name}</Card.Title>
                    <ListGroup.Item className='border-0 '><AiOutlineMail /> {users.email}</ListGroup.Item>
                    <ListGroup.Item className='border-0 '> <AiOutlinePhone /> {users.phone}</ListGroup.Item>
                    <ListGroup.Item className='border-0 '> <BsGlobe /> {users.website}</ListGroup.Item>
                </ListGroup>
                <Card.Body className='bg-light'>
                    <div className="row  m-auto text-center">
                        <div className="col"><button className='border-0 bg-transparent' onClick={() => setColor((prev) => !prev)}> {heartColor ? <AiFillHeart color='red' /> : <BsHeart />} </button></div>
                        <div className="col"><button className='border-0 bg-transparent edit' onClick={handleUpdateProfile} > <AiOutlineEdit /> </button>              </div>
                        {/* <div className="col"><button className='border-0 bg-transparent edit' onClick={() => setShow((prev) => !prev)} >{show ?  <AiOutlineEdit /> :  <Information /> }  </button>
                        <Information
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        />
                    </div> */}
                        <div className="col"><button className='border-0 bg-transparent  delete' onClick={() => dispatch(deleteAvtar(users.id))} >  <AiFillDelete /> </button></div>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}
