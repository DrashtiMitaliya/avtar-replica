import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { updateAvtar } from '../features/AvatarSlice';
import { useDispatch } from 'react-redux';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Information = (props) => {
    /* This is a destructuring assignment. It is used to extract data from arrays or objects into
    distinct variables. */
    const { name, email, website, phone, username, id } = props.users
    const initialValues = {
        id,
        username,
        name,
        email,
        phone,
        website
    }

   /* A validation schema that is used to validate the form. */
    const validationSchema = Yup.object().shape({
        name: Yup.string().required(' Name is Required'),
        email: Yup.string()
            .email('invalid email Format')
            .required('email is required'),
        phone: Yup
            .string()
            .required("Mobile Number is required"),
        website: Yup.string().required('Website is Required')
    })

  /* This is a function that is used to update the avtar. */
    const dispatch = useDispatch()
    const onSubmit = (values) => {
        dispatch(updateAvtar(values))
        props.onHide()
    }

    return (
        <div>
         { /* The above code is a modal that is used to edit profile of perticular avtar. */}
            <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Modal heading
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                    >
                      {  /* This is a form that is used to edit the profile of the avtar. */}
                        <Form >
                            <label htmlFor="name">Name</label>
                            <Field
                                type="text"
                                name="name"
                            />
                            <p className='text-start text-danger'> <ErrorMessage name="name" /></p>

                            <label htmlFor="emai">Email</label>
                            <Field
                                type="email"
                                name="email"
                            />
                            <p className='text-start text-danger'> <ErrorMessage name="email" /></p>

                            <label htmlFor="emai">Phone</label>
                            <Field
                                type="tel"
                                name="phone"
                            />
                            <p className='text-start text-danger'> <ErrorMessage name="phone" /></p>

                            <label htmlFor="website">Website</label>
                            <Field
                                type="text"
                                name="website"
                            />
                            <p className='text-start text-danger'> <ErrorMessage name="website" /></p>

                            <Modal.Footer>
                                <Button onClick={props.onHide} className="btn-light">Close</Button>
                                <Button type='submit' className="btn-primary"  >OK</Button>
                            </Modal.Footer>
                        </Form>
                    </Formik>
                </Modal.Body>
            </Modal>
        </div >
    )
}
export default Information