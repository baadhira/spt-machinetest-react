import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Error = () => {
    const navigate = useNavigate()
  return (
    <div>
        <div className="container">
            <div className="error d-flex flex-column justify-content-lg-center align-items-center">
                <img src="./404.jpg" alt="error" className="errorimg" />
                <h4>404 Error | Page not found</h4>
                <button className="btn btn-primary" onClick={()=>navigate("/signin")}>Redirect Login Page</button>
            </div>
        </div>
    </div>
  )
}
