import React from 'react'
import {Link} from "react-router-dom"
import {FaDiscord, FaFacebookF} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
import {FaYoutube} from "react-icons/fa"
import {FaTiktok} from 'react-icons/fa'
import {FaTwitch} from "react-icons/fa"
import "./Footer.scss"
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__top">
          <div className="footer__topLeft">
            <ul className="footer__shopList">
              <li className="footer__shopList--item footer__shopList--link footer__shopList--top"><Link to="/store">Shop</Link></li>
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
              <li className="footer__platformList--item footer__platformList--link"><Link to="/pc">Computers</Link></li>
              <li className="footer__platformList--item footer__platformList--link"><Link to="/console">Consoles</Link></li>
              <li className="footer__platformList--item footer__platformList--link"><Link to="/mobile">Mobile Devices</Link></li>
              <li className="footer__platformList--item">Steam Deck</li>
              <li className="footer__platformList--item">Other Devices</li>
            </ul>
            <ul className="footer__supportList">
              <li className='footer__supportList--item footer__supportList--top footer__supportList--link'><Link to="/support">Support</Link></li>
              <li className='footer__supportList--item'>Get Help</li>
              <li className='footer__supportList--item'>Registration & Warranty</li>
              <li className='footer__supportList--item'>RazerStore Support</li>
              <li className='footer__supportList--item'>RazerCare</li>
              <li className='footer__supportList--item'>Manage Razer ID</li>
              <li className='footer__supportList--item'>Support Videos</li>
              <li className='footer__supportList--item'>Accessibility Statement</li>
            </ul>
            <ul className="footer__companyList">
              <li className='footer__companyList--item footer__companyList--top'>Company</li>
              <li className='footer__companyList--item'>About Us</li>
              <li className='footer__companyList--item'>Careers</li>
              <li className='footer__companyList--item'>Press Room</li>
              <li className='footer__companyList--item'>zVentures</li>
              <li className='footer__companyList--item'>Contact Us</li>
            </ul>
            <ul className="footer__followList">
              <li className='footer__followList--top'>Follow Us</li>
              <li className='footer__followList--item'><a target='_blank' href="https://www.facebook.com/razer"><FaFacebookF className='footer__follow--icon'/></a></li>
              <li className='footer__followList--item'><a target='_blank' href="https://www.instagram.com/razer/"><FaInstagram className='footer__follow--icon'/></a></li>
              <li className='footer__followList--item'><a target='_blank' href="https://twitter.com/Razer"><FaTwitter className='footer__follow--icon'/></a></li>
              <li className='footer__followList--item'><a target='_blank' href="https://www.youtube.com/razer"><FaYoutube className='footer__follow--icon'/></a></li>
              <li className='footer__followList--item'><a target='_blank' href="https://www.tiktok.com/@razer"><FaTiktok className='footer__follow--icon'/></a></li>
              <li className='footer__followList--item'><a target='_blank' href="https://www.twitch.tv/razer"><FaTwitch className='footer__follow--icon'/></a></li>
              <li className='footer__followList--item'><a target='_blank' href="https://discord.com/invite/razer"><FaDiscord className='footer__follow--icon'/></a></li>
            </ul>
          </div>      
          <div className="footer__topRight">
            <p>FOR GAMERS. BY GAMERS.™</p>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__bottomLeft">
            <ul className='footer__bottomLeftList'>
              <li className='footer__bottomLeftList--item footer__bottomLeftList--item-1'>Copyright © 2023 Razer Inc. All rights reserved.</li>
              <li className='footer__bottomLeftList--item footer__bottomLeftList--item-2'>Site Map </li>
              <li className='footer__bottomLeftList--item footer__bottomLeftList--item-3'>Legal Terms </li>
              <li className='footer__bottomLeftList--item footer__bottomLeftList--item-4'>Privacy Policy </li>
              <li className='footer__bottomLeftList--item footer__bottomLeftList--item-5'>Cookie Settings</li>
            </ul>
          </div>
          <div className="footer__bottomLRight">Azerbaijan  |  Change Location</div>
        </div>
      </div>
    </>
  )
}

export default Footer
