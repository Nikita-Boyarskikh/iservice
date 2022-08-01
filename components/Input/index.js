import controlStyles from 'styles/Control.module.css'

const Input = ({ value, onChange, name, placeholder, type = 'text', required = false }) => (
  <input
    type={type}
    placeholder={placeholder}
    name={name}
    value={value}
    className={controlStyles.input}
    onChange={(event) => {
      event.preventDefault()
      onChange(event.target.value)
    }}
    required={required}
  />
)

export default Input
