import React from 'react'

import {useAuth0} from '@auth0/auth0-react'
const Home = () => {
  const {loginWithPopup} = useAuth0()

  return (
    <section className='container'>
        <div className="row">
            <div className="col-md-6">
                <h1>Login to see profile</h1>
                <button className='btn btn-primary mt-4' onClick={loginWithPopup}>Login</button>
            </div>
            <div className="col-md-6">
                <img src="/heroimg.png" className='img-fluid' alt="" />
            </div>
        </div>

    </section>
  )
}

export default Home