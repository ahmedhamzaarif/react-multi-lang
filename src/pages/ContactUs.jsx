import React from 'react'

const ContactUs = () => {
  return (
    <section id='contactPage' className="container">
      <div className="row">
        <div className="col-md-6 col-left">
          <h2 className='title'>Our Offices</h2>
          <h4 className='desc'>Find us at these locations</h4>
        </div>
        <div className="col-md-6 col-right">
          <div className='office-details'>
            <h3 className='title'>Head Office</h3>
            <h5 className='timing'>Mon-Sat 9am to 5pm.</h5>
            <p className='address'>Suite No. 1234, ABC Building, Block-B, Street 65, City, Country</p>
          </div>
          <div className='office-details'>
            <h3 className='title'>Branch II</h3>
            <h5 className='timing'>Mon-Sat 9am to 5pm.</h5>
            <p className='address'>Suite No. 1234, ABC Building, Block-B, Street 65, City, Country</p>
          </div>
          <div className='office-details'>
            <h3 className='title'>Branch III</h3>
            <h5 className='timing'>Mon-Sat 9am to 5pm.</h5>
            <p className='address'>Suite No. 1234, ABC Building, Block-B, Street 65, City, Country</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs