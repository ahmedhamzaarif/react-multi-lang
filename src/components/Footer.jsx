import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear()
  return (
    <footer id='footer'>
        <div className="container">
            <div className="text-center">
                &copy; {year} - All Rights Reserved
            </div>
        </div>
    </footer>
  )
}

export default Footer