import React from 'react'
import AdminHeader from '../../components/admin/common/AdminHeader'
import AdminFooter from '../../components/admin/common/AdminFooter'

function AdminLayout({children}) {
  return (
    <div className='flex flex-col items-center'>
      <AdminHeader />
      <main className="container mx-auto my-10">
        {children}
      </main>
      <AdminFooter />
    </div>
  )
}

export default AdminLayout