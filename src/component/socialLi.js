import React from 'react'
import '../css/social.css'
function SocialLi(props) {
    return (
        <li>
        <a href="javascript:void(0)" className={`libox ps-4 d-flex justify-content-between align-items-center ${props.acls}`}>
          <span className={`sp-text ${props.spancls01}`}>{props.atext01}</span>
          <span className={`me-5 sp-style ${props.spancls02}`}>{props.atext02}</span>
          <span className={`px-2 ${props.spancls03}`}></span>
        </a>
      </li>
    )
}

export default SocialLi

