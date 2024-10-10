import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import React from 'react'

const Home = () => {
    const handleSubmit = async (values, { resetForm }) => {
        try {
          
            const response = await axios.post('http://localhost:3021/form-one', values)
            const data = response.data

            if (data.success) {

                alert(data.message)
               
            } else {
               
                alert(data.error)
            }
       

        } catch (error) {
            console.error('Error:', error);

        }
    };
  return (
    <div>
      <Formik
                            initialValues={{
                             
                                name: '',
                            }}
                            validationSchema={Yup.object().shape({
                               
                                name: Yup.string()
                                    
                                    .required('*Name is required'),
                            
                            })}
                            onSubmit={handleSubmit }
                        >
                            {({ errors, touched }) => (
                                <Form className='frfrm'>
                                
                                    <Field
                                        name="name"
                                        placeholder='Name'
                                        type="name"
                                        className="fields" />
                                    {errors.name && touched.name ? <div className='err'>{errors.name}</div> : null}
                                 
                                 
                                    <button className='btnqwe' type="submit">submit</button>
                                </Form>
                            )}
                        </Formik>
    </div>
  )
}

export default Home
