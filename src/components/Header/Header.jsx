import React from 'react'

// Images
import logo from '../../images/logo.svg'

// Styles
import styles from './Header.module.css'
import LinksTrain from '../LinksTrain/LinksTrain'

// Constants
const HEADER_LINKS = [
  {label: 'Home', url: ''},
  {label: 'About us', url: ''},
  {label: 'Projects', url: ''},
]

function Header () {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.leftContainer}>
          <img
            className={styles.logoImage}
            src={logo}
          />
          <a>
            /- support@mail.com
          </a>
        </div>
      </div>
      <LinksTrain links={HEADER_LINKS} />
    </div>
  )
}

export default Header
