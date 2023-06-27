import React from 'react'
import Link from 'next/link'
import Footer from '../../Footer'
export default function E404() {
  return (
    <div id = "layoutError">
      <div id="layoutError_content">
        <main>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="text-center mt-4">
                  <img
                    className="mb-4 img-error"
                    src="assets/img/error-404-monochrome.svg"
                    alt= 'error'
                  />
                  <p className="lead">
                    This requested URL was not found on this server.
                  </p>
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
      <div id ="layoutError_footer">
        <Footer/>
      </div>
    </div>
  )
}
