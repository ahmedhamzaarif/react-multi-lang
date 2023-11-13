import React from 'react'
import { Sidebar } from '../components'

const ProfileLayout = ({children}) => {
  return (
    <div>
        <div className="row">
          <div className="col-xl-2">
            <Sidebar/>
          </div>
          <div className="col-xl-10">
            <section>
            {children}
            </section>
          </div>
        </div>
    </div>
  )
}

export default ProfileLayout