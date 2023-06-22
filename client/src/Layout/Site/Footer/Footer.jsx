import React from 'react'
import {Link} from "react-router-dom"
import "./Footer.scss"
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__top">
          <div className="footer__topLeft">
            <ul className="footer__shopList">
              <li className="footer__shopList--item footer__shopList--top"><Link to="/store">Shop</Link></li>
              <li className="footer__shopList--item">RazerStores</li>
              <li className="footer__shopList--item">RazerCafe</li>
              <li className="footer__shopList--item">Store Locator</li>
              <li className="footer__shopList--item">Purchase Programs</li>
              <li className="footer__shopList--item">Education</li>
              <li className="footer__shopList--item">Exclusives</li>
              <li className="footer__shopList--item">RazerStore Rewards</li>
              <li className="footer__shopList--item">Newsletter</li>
            </ul>
            <ul className="footer__platformList">
              <li className="footer__platformList--item footer__platformList--top">Platforms</li>
              <li className="footer__platformList--item"><Link to="/pc">Computers</Link></li>
              <li className="footer__platformList--item"><Link to="/console">Consoles</Link></li>
              <li className="footer__platformList--item"><Link to="/mobile">Mobile Devices</Link></li>
            </ul>
            <ul className="footer__supportList"></ul>
            <ul className="footer__companyList"></ul>
            <ul className="footer__followList"></ul>
          </div>
          <div className="footer__topRight"></div>
        </div>
        <div className="footer__bottom"></div>
      </div>
    </>
  )
}

export default Footer
