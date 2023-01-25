import React from 'react'
import './index.scss'
import { Formik, Form, Field } from 'formik';
 import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

 const SignupSchema = Yup.object().shape({
    caption: Yup.string()
      .min(2, 'Too Short!')
      .max(80, 'Too Long!')
      .required('Required'),
      description: Yup.string()
      .min(2, 'Too Short!')
      .max(80, 'Too Long!')
      .required('Required'),
      image: Yup.string()
      .min(2, 'Too Short!')
      .max(80, 'Too Long!')
      .required('Required'),
      personimg: Yup.string()
      .min(2, 'Too Short!')
      .max(80, 'Too Long!')
      .required('Required'),
      fullname: Yup.string()
      .min(2, 'Too Short!')
      .max(1000, 'Too Long!')
      .required('Required'),
      price: Yup.number().required('Required'),
  });
const AddCourses = () => {
    const navigate = useNavigate()
  return (
    <div className='addCourses'>
      
<div className="form">


    <Formik
       initialValues={{
        caption: '',
        fullname: '',
        price: '',
        description: '',
        image: '',
        personimg: '',
       }}
       validationSchema={SignupSchema}
       onSubmit={values => {
        
        console.log(values);
           navigate('/')
         axios.post(`http://localhost:8000/courses/`, values)
       }}
     >
       {({ errors, touched }) => (
         <Form>
           <Field name="caption" placeholder='caption' />
           {errors.caption && touched.caption ? (
             <div>{errors.caption}</div>
           ) : null}
           <Field name="fullname"  placeholder='fullname'/>
           {errors.fullname && touched.fullname ? (
             <div>{errors.fullname}</div>
           ) : null}
           <Field name="price" type='number'  placeholder='number'/>
           {errors.price && touched.price ? (
             <div>{errors.price}</div>
           ) : null}
           <Field name="description"  placeholder='description'/>
           {errors.description && touched.description ? (
             <div>{errors.description}</div>
           ) : null}
           <Field name="image"   placeholder='image'/>
           {errors.image && touched.image ? (
             <div>{errors.image}</div>
           ) : null}
          <Field name="personimg"   placeholder='personimg'/>
           {errors.personimg && touched.personimg ? (
             <div>{errors.personimg}</div>
           ) : null}
           <button type="submit">Submit</button>
           
         </Form>
       )}
     </Formik>

</div>
    </div>
  )
}

export default AddCourses
