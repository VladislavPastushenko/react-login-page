import React from 'react'

// Styles
import styles from './InputText.module.css'

// Components

function InputText ({
  id,
  placeholder,
  value,
  onChange,
  label,
  type,
  error,
}) {
  return (
    <div className={styles.container}>
      {label &&
        <label
          htmlFor={id}
          className={styles.label}
        >
          {label}
        </label>
      }
      <input
        id={id}
        name={id}
        className={styles.input}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
        <div className={styles.error}>
          {error}
        </div>
    </div>
  )
}

export default InputText
