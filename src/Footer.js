import React from 'react'

export default function Footer() {
  return (
    <footer className="py-4 bg-light mt-auto">
        <div className="container-fluid px-4">
            <div class="d-flex align-items-center justify-content-between small">
                <div className="text-muted">Copyright &copy; Your Website 2023</div>
                <div>
                    <a href="#y">Privacy Policy</a>
                    &middot;
                    <a href="#y">Terms &amp; Conditions</a>
                </div>
            </div>
        </div>
    </footer>
  )
}
