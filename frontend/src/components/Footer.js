/* -------------------------------------------------------------------------- */
/*                               Import Section                               */
/* -------------------------------------------------------------------------- */
import React from 'react'
import { FaFacebookF } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"
import './Footer.css'
/* -------------------------------------------------------------------------- */
/*                               Layout Section                               */
/* -------------------------------------------------------------------------- */

const Footer = () => {
  return (
    <footer className="footer-main">
      <footer className="footer text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">Location</h4>
              <p className="lead mb-0">
                123 Fake Street
                <br />
                Nelson, 7050
              </p>
            </div>
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">Around the Web</h4>
              <FaFacebookF className="btn btn-outline-light btn-social mx-1" />
              <FaTwitter className="btn btn-outline-light btn-social mx-1" />
              <FaLinkedinIn className="btn btn-outline-light btn-social mx-1" />
            </div>
            <div className="col-lg-4">
              <h4 className="text-uppercase mb-4">About SaTCC</h4>
              <p className="lead mb-0">
                Stuff and Things clothing Charity is great!
              </p>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright py-4 text-center text-white">
        <div className="container"><small>&copy; SaTCC 2022. All rights reserved.</small></div>
      </div>
    </footer>
  )
}

export default Footer