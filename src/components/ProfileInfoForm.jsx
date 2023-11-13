import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const editProfileSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  phNumber: Yup.string()
    .min(11, '11 digits required!')
    .max(11, 'Only 11 digits allowed!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  city: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  state: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  zipCode: Yup.string()
    .min(4, '4 digits required!')
    .max(4, 'max 4 digits allowed!')
    .required('Required'),
  country: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const ProfileInfoForm= () => {
  const userImg = useSelector((state) => state.user.userImg);
  const userName = useSelector((state) => state.user.userName);
  const userEmail = useSelector((state) => state.user.userEmail);

const submitHandler = (values)=> {
  console.log(values)
  toast.success("Form Submitted")
}
  return (
  <>
  <ToastContainer position='bottom-left' theme='dark'/>
    <div className='editImg'>
      <img src={userImg} alt="" />
      <span className="editIcon">
        <box-icon name='pencil'></box-icon>
      </span>
    </div>
    <Formik
      initialValues={{
        fullName: userName,
        email: userEmail,
        phNumber: '',
        city: '',
        state: '',
        zipCode: '',
        country: '',
      }}
      validationSchema={editProfileSchema}
      onSubmit={values => { submitHandler(values); }}
    >
      {({ errors, touched }) => (
        <Form>
            <div className="mb-3">
                <Field name="fullName" className='form-control' placeholder='Full Name'/>
                {errors.fullName && touched.fullName ? (
                    <div className='errorMsg'>{errors.fullName}</div>
                    ) : null}
            </div>
            <div className="mb-3">
                <Field name="email" type="email" className='form-control' placeholder='Email'/>
                {errors.email && touched.email ? <div className='errorMsg'>{errors.email}</div> : null}
            </div>
            <div className="mb-3">
                <Field name="phNumber" className='form-control' placeholder='Phone Number' />
                {errors.phNumber && touched.phNumber ? (
                    <div className='errorMsg'>{errors.phNumber}</div>
                ) : null}
            </div>
            <div className="mb-3">
                <Field name='city' className='form-control' placeholder='City'/>
                {errors.city && touched.city ? (
                    <div className='errorMsg'>{errors.city}</div>
                    ) : null}
            </div>
            <div className="row">
                <div className="col-md-6 mb-3">
                    <Field name='state' className='form-control' placeholder='State'/>
                    {errors.state && touched.state ? (
                    <div className='errorMsg'>{errors.state}</div>
                    ) : null}
                </div>
                <div className="col-md-6 mb-3">
                    <Field name='zipCode' className='form-control' placeholder='Zip Code'/>
                    {errors.zipCode && touched.zipCode ? (
                    <div className='errorMsg'>{errors.zipCode}</div>
                    ) : null}
                </div>
            </div>
            <div className="mb-3">
                <Field name='country' className='form-control' placeholder='country'/>
                {errors.country && touched.country ? (
                    <div className='errorMsg'>{errors.country}</div>
                    ) : null}
            </div>
            <div className="d-flex gap-4 flex-wrap justify-content-end">
              <Link to='/'>
                <button className='btn btn-outline-primary'>Back to Home</button>
              </Link>
              <button type="submit" className='btn btn-primary'>Submit</button>
            </div>
        </Form>
      )}
    </Formik>
  </>
    )
  }

export default ProfileInfoForm