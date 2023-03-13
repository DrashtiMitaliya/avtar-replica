import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { updateAvtar } from '../features/AvatarSlice';
import { useDispatch } from 'react-redux';

const Information = (props) => {
    
const {name,email,website,phone,username,id} = props.users

const [data,setData] =useState({
    name,
    email,
    website,
    phone,
    username,
    id
})
const dispatch =useDispatch()
const changeData = (e)=>{
    const name= e.target.name
    const value =e.target.value
    setData(values => ({...values, [name]: value}))
  
}
const onSubmit = (e)=>{
    e.preventDefault()
    dispatch(updateAvtar(data)) 
    props.onHide()
}


    return (
        <div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Modal heading
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={onSubmit}>
                        <Form.Group className="mb-3" >
                            <Form.Label aria-required>Name </Form.Label>
                            <Form.Control
                                type="text"
                                value={data.name}
                                name = "name"
                                onChange={changeData}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Email </Form.Label>
                            <Form.Control
                                type="email"
                                value={data.email}
                                name = "email"
                                onChange={changeData}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label >Phone</Form.Label>
                            <Form.Control
                                type="tel"
                                value={data.phone}
                                name = "phone"
                                onChange={changeData}

                            />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Website</Form.Label>
                            <Form.Control
                                type="text"
                                value={data.website}
                                name = "website"
                                onChange={changeData}
                            />
                        </Form.Group>
                        <Modal.Footer>
                    <Button onClick={props.onHide } className="btn-light">Close</Button>
                    <Button type='submit' className="btn-primary">OK</Button>
                </Modal.Footer>
                    </Form>
                </Modal.Body>
             
               
            </Modal>
        </div>
    )
}
export default Information