import React from 'react'
import Link from 'next/link'
import Footer from "../../Footer"
export default function E401() {
  return (
    <div id="layoutError">
        <div id="layoutError_content">
            <main>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="text-center mt-4">
                                <h1 className="display-1">401</h1>
                                <p className="lead">Unauthorized</p>
                                <p>Access to this resource is denied.</p>
                                <Link href="/">
                                <i className="fas fa-arrow-left me-1" />
                                Return to Dashboard
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
        <div id="layoutError_footer">
            <Footer/>
        </div>

    </div>

  )
}
