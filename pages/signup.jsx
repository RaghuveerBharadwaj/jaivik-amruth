import { Formik } from 'formik'
import Link from 'next/link'
import { signup } from '../actions/auth'

const initialValues = {
  name: '',
  phone: '',
  email: '',
  referralId: '',
  password: ''
}

export default function Signup() {
  return (
    <div className="login-container">
      <img className="blur-img" src="signup.svg" alt="Jaivik Amruth" />
      <div className="login">
        <img src="signup.svg" alt="Jaivik Amruth" />
        <Formik
          initialValues={initialValues}
          validate={values => {
            let errors = {}
            if (!values.name) {
              errors.name = 'Please enter your full name'
            } if (!/^[6-9]\d{9}$/i.test(values.phone)) {
              errors.phone = 'Please enter valid phone number'
            } if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.email)) {
              errors.email = 'Please enter valid email'
            } if (!values.password) {
              errors.password = 'Please enter password'
            }
            return errors
          }}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values)
            const res = signup(values)
            console.log(res)
            setSubmitting(false)
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting
          }) => (
            <form className="login-form" onSubmit={handleSubmit}>
              <h1>Welcome to Jaivik Amruth!</h1>
              <input
                name='name'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                placeholder='John Wick'
                className={errors.name && touched.name ? "error" : ""}
              />
              <span className='err'>
                {errors.name && touched.name ? errors.name : ""}
              </span>
              <input
                name='phone'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
                placeholder='9876543210'
                className={errors.phone && touched.phone ? "error" : ""}
              />
              <span className='err'>
                {errors.phone && touched.phone ? errors.phone : ""}
              </span>
              <input
                name='email'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder='john@gmail.com'
                className={errors.email && touched.email ? "error" : ""}
              />
              <span className='err'>
                {errors.email && touched.email ? errors.email : ""}
              </span>
              <input
                type='password'
                name='password'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder='Password'
                className={errors.password && touched.password ? "error" : ""}
              />
              <span className='err'>
                {errors.password && touched.password ? errors.password : ""}
              </span>
              <input
                name='referralId'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.referralId}
                placeholder='XXX-YYY-ZZZ'
              />
              <p>
                Already have an account?
                <Link href="/login"> Sign In. </Link>
              </p>
              <button
                type='submit'
                disabled={isSubmitting}
              >
                SIGN UP
            </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  )
}
