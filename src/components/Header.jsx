import React from 'react'
import { Link } from 'react-router-dom'
import i18n from '../translations/i18n'
import { useTranslation } from 'react-i18next';
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch } from 'react-redux';
import { updateEmail, updateImg, updateName } from '../features/user/userSlice';

const Header = () => {
  const {loginWithPopup, isAuthenticated, logout, user} = useAuth0()
  const { t, i18n } = useTranslation();
  

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const dispatch = useDispatch()
  if (isAuthenticated) {
    dispatch(updateImg(user.picture))
    dispatch(updateName(user.name))
    dispatch(updateEmail(user.email))
  }
  return (
    <>
    <header id='header'>
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <Link to='/' className="navbar-brand"><span>React</span> Test</Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarScroll">
                <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll align-items-center">
                    <li className="nav-item">
                        <Link className="nav-link" to='/contact-us'>{t('contactUs')}</Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link className="nav-link" to='/profile'>{t('profile')}</Link>
                    </li> */}
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {t('changeLanguage')}
                    </a>
                    <ul className="dropdown-menu">
                        <li className='dropdown-item'>
                            <div className='' onClick={() => changeLanguage('en')}>English</div>
                        </li>
                        <li className='dropdown-item'>
                            <div className='' onClick={() => changeLanguage('ar')}>عربي</div>
                        </li>
                    </ul>
                    </li>
                        {
                            isAuthenticated && 
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src={user.picture} className='userImg' alt="" />
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li className="dropdown-item">
                                            <Link to='/profile' className='text-reset'>Profile</Link>
                                         </li>
                                         <hr className="dropdown-divider" />
                                        <li className="dropdown-item">
                                             <div className='' onClick={logout}>{t('logout')}</div>
                                         </li>
                                    </ul>
                                    </li>
                        }
                </ul>
                </div>
            </div>
        </nav>
    </header>
    <div id="headerOffset"></div>
    </>
  )
}

export default Header