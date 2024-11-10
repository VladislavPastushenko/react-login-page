// Utils
import React from 'react'

// Styles
import styles from './Btn.module.css'

function Btn ({label, onClick, disabled = false}) {
  const handleClick = () => {
    if (disabled) {
      return
    }

    onClick()
  }

  return (
    <button
      className={[
        styles.button,
        disabled && styles.disabled
      ].join(' ')}
      type="button"
      onClick={handleClick}
    >
      {label}
    </button>
  )
}

export default Btn
