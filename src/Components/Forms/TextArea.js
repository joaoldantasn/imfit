import React from 'react';
import styles from './TextArea.module.css';

const TextArea = ({
  label,
  type,
  name,
  value,
  onChange,
  error,
  onBlur,
  placeholder,
}) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        className={styles.input}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default TextArea;
