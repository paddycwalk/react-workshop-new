import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './TextField.module.scss';

interface Props {
  className?: string;
  placeholder?: string;
  defaultValue?: string;
  format?: 'time';
}

function TextField({
  className,
  placeholder,
  defaultValue = '',
  format,
}: Props) {
  const [value, setValue] = useState(defaultValue);

  // reRender
  useEffect(() => {
    setValue(defaultValue);
    // console.log(defaultValue);
  }, [defaultValue]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log('value:', e.target.value);
    setValue(e.target.value);
  }
  return (
    <div className={clsx(className, styles.main)}>
      <input
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleChange(e)}
        maxLength={format === 'time' ? 5 : undefined}
      />
    </div>
  );
}

export default TextField;
