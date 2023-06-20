import React from 'react'
import {Link} from "react-router-dom"
import "./Footer.scss"
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__top">
          <div className="footer__topLeft">
            <ul className="Shop">
              <li><Link to="/store">Shop</Link></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <ul className="Expore"></ul>
            <ul className="Support"></ul>
            <ul className="Company"></ul>
            <ul className="Follow Us"></ul>
          </div>
          <div className="footer__topRight"></div>
        </div>
        <div className="footer__bottom"></div>
      </div>
    </>
  )
}

export default Footer
