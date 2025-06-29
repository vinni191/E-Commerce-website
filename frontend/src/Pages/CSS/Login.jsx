// import axios from 'axios'
// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'

// const Login = () => {

//   const [email,setEmail]=useState()
//   const [password,setPassword]=useState()
//   const navigate=useNavigate()

//   const handleSubmit=(e)=>{
//     e.preventDefault()
//     axios.post('http://localhost:3001/login',{email,password})
//     .then(result=>{console.log(result)
//       if(result.data==="success"){
//          navigate('/Shop')

//       }

//        else {
//         navigate('/Signup')
//        }
//     })
//     .catch(err=>console.log(err))
//   }
//   return (
//     <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
//       <div>
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit}>
         
//             <div className='mb-3'>
//             <label htmlFor="email">
//               <strong>Email</strong>
//             </label>
//             <input type="email" placeholder='enter email' autoComplete='off' name="email" className='form-control rounded-0' onChange={(e)=>setEmail(e.target.value)}/>
//           </div>
//             <div className='mb-3'>
//             <label htmlFor="email">
//               <strong>Password</strong>
//             </label>
//             <input type="password" placeholder='enter password' autoComplete='off' name="password" className='form-control rounded-0'  onChange={(e)=>setPassword(e.target.value)}/>
//           </div>
//           <button type="submit" className='btn btn-success w-100 rounded-0'>
//             Sign In

//           </button>
          
//         </form>
//           <p>Dont have an account</p>
//            <Link to="/signup" className='btn btn-default border w-100 rounded-0'>
//             Sign Up

//           </Link>

//       </div>

//     </div>
//   )
// }


 

// export default Login

import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const navigate = useNavigate()

  const validate = () => {
    const newErrors = {}
    if (!email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid'
    }
    if (!password) {
      newErrors.password = 'Password is required'
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      axios.post('http://localhost:3001/login', { email, password })
        .then(result => {
          console.log(result)
          if (result.data === "success") {
            navigate('/Shop')
          } else {
            navigate('/Signup')
          }
        })
        .catch(err => console.log(err))
    }
  }

  return (
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
      <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder='Enter email'
              autoComplete='off'
              name="email"
              className='form-control rounded-0'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <small className="text-danger">{errors.email}</small>}
          </div>

          <div className='mb-3'>
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder='Enter password'
              autoComplete='off'
              name="password"
              className='form-control rounded-0'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <small className="text-danger">{errors.password}</small>}
          </div>

          <button type="submit" className='btn btn-success w-100 rounded-0'>
            Sign In
          </button>
        </form>

        <p className='btn btn-default'>Dont have an account?</p>
        <Link to="/signup" className='btn btn-default border w-100 rounded-0'>
          Sign Up
        </Link>
      </div>
    </div>
  )
}

export default Login
