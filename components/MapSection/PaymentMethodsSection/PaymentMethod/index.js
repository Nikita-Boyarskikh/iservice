import { useRef } from 'react'
import { v4 as uuid4 } from 'uuid'

import styles from './PaymentMethod.module.css'

const PaymentMethod = ({ id, name, icon, selected, select }) => {
  const { current: inputId } = useRef(uuid4())
  return (
    <div className={styles.paymentMethod}>
      <label htmlFor={inputId} className={styles.paymentMethodLabel}>
        <div className={styles.paymentMethodIcon}>{icon}</div>
        {name}
      </label>
      <input
        id={inputId}
        className={styles.paymentMethodRadio}
        type="radio"
        name="paymentMethod"
        onChange={select}
        value={id}
        checked={selected}
      />
    </div>
  )
}

export default PaymentMethod
