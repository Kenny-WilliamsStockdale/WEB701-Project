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
      <footer class="footer text-center">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 mb-5 mb-lg-0">
              <h4 class="text-uppercase mb-4">Location</h4>
              <p class="lead mb-0">
                123 Fake Street
                <br />
                Nelson, 7050
              </p>
            </div>
            <div class="col-lg-4 mb-5 mb-lg-0">
              <h4 class="text-uppercase mb-4">Around the Web</h4>
              <FaFacebookF class="btn btn-outline-light btn-social mx-1" />
              <FaTwitter class="btn btn-outline-light btn-social mx-1" />
              <FaLinkedinIn class="btn btn-outline-light btn-social mx-1" />
            </div>
            <div class="col-lg-4">
              <h4 class="text-uppercase mb-4">About SaTCC</h4>
              <p class="lead mb-0">
                Stuff and Things clothing Charity is great!
              </p>
            </div>
          </div>
        </div>
      </footer>
      <div class="copyright py-4 text-center text-white">
        <div class="container"><small>Copyright &copy; SaTCC 2022</small></div>
      </div>
    </footer>
  )
}

export default Footer