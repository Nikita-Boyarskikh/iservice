import cn from 'classnames'
import styles from './Button.module.css'

const Button = ({ onClick = () => {}, small = false, children } = {}) => (
  <button className={cn(styles.button, {[styles.small]: small})} onClick={onClick}>
    {children}
  </button>
)

export default Button
