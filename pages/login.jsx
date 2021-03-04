import { Formik } from 'formik'
import Link from 'next/link'
import { login } from '../actions/auth'

export default function Login() {
  return (
    <div className="login-container">
      <img className="blur-img" src="login.svg" alt="Jaivik Amruth" />
      <div className="login">
        <img src="login.svg" alt="Jaivik Amruth" />
        <Formik
          initialValues={{ username: '', password: '' }}
          validate={values => {
            let errors = {}
            if (!(values.username &&
              (/^[6-9]\d{9}$/i.test(values.username) ||
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.username)))) {
              errors.username = 'Please enter valid email or phone number'
            } if (!values.password) {
              errors.password = 'Please enter password'
            }
            return errors
          }}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values)
            const res = login(values)
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
              <h1>Welcome Back! <br />
                  Login to your account now.</h1>
                  <br/>
                  <br/>
              <input
                name='username'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
                placeholder='Email or Phone Number'
                className={errors.username && touched.login ? "error" : ""}
              />
              <span className='err'>
                {errors.username && touched.login ? errors.username : ""}
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
              <p>
                Don't have an account yet?
                <Link href="/signup"> Register </Link>
                with us.
              </p>
              <button
                type='submit'
                disabled={isSubmitting}
              >
                LOG IN
            </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  )
}
