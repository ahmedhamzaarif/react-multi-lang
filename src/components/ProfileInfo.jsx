import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProfileInfo = () => {
    const userImg = useSelector((state) => state.user.userImg);
    const userName = useSelector((state) => state.user.userName);
    const userEmail = useSelector((state) => state.user.userEmail)
  return (
    <section>
        <img src={userImg} alt={userName} className='profileImg mx-auto d-flex'/>
        <div>Name: {userName}</div>
        <div>Email: {userEmail}</div>
          <Link to='/profile/edit'>
        <button className='btn btn-primary mt-4'>
            Edit
        </button>
            </Link>
    </section>
  )
}

export default ProfileInfo