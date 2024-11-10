// Utils
import React from 'react'

// Components

// Styles
import styles from './LinksTrain.module.css'

function LinksTrain ({ links }) {

  return (
    <div className={styles.container}>
      {links.map((link, idx) => (
        <div
          key={idx}
          className={styles.wagon}
        >
          <a href={link.url}>
            {link.label}
          </a>
        </div>
      ))}
    </div>
  )
}

export default LinksTrain
