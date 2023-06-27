import React from 'react'
import Link from 'next/link'
import Sidebar from '../../Sidebar';
import Footer from '../../Footer';
import Navbar from '../../Navbar'; 

export default function Sidenavlight() {
    return(
        <>
            <Navbar/>
            <div id="layoutSidenav">
                <Sidebar/>
                <div id="layoutSidenav_content">
                <Light/>
                <Footer/>
                </div>
            </div>  
        </>  
    )


};
function Light() {
  return (
    <main>
        <div className="container-fluid px-4">
            <h1 className="mt-4">Sidenav Light</h1>
            <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item">
                    <Link href="/">Dashboard</Link>
                </li>
                <li className="breadcrumb-item active">Sidenav Light</li>
            </ol>
            <div className="card mb-4">
                <div className="card-body">
                    This page is an example of using the light side navigation option. By
                    appending the
                    <code>.sb-sidenav-light</code>
                    class to the
                    <code>.sb-sidenav</code>
                    class, the side navigation will take on a light color scheme. The
                    <code>.sb-sidenav-dark</code>
                    is also available for a darker option.
                </div>
            </div>
        </div>
    </main>

  )
}
