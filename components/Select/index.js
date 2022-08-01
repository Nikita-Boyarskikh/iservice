import cn from 'classnames'
import { useCallback, useMemo, useRef, useState } from 'react'

import Menu from 'components/Menu'

import ArrowIcon from 'public/icons/arrow.svg'
import controlStyles from 'styles/Control.module.css'
import styles from './Select.module.css'

// TODO: https://github.com/JedWatson/react-select
const Select = ({
    value,
    onChange,
    name,
    placeholder,
    choices = [],
    multi = false,
    required = false,
    offset = [0, 0],
}) => {
  const triggerRef = useRef(null)
  const optionsRef = useRef(null)

  const [isOpen, setIsOpen] = useState(false)

  const close = useCallback(() => {
    setIsOpen(false)
  }, [setIsOpen])

  const open = useCallback(() => {
    optionsRef.current.style.width = `${triggerRef.current.getBoundingClientRect().width}px`
    setIsOpen(true)
  }, [setIsOpen])

  const handleClickOption = useCallback((id) => {
    if (!multi) {
      return onChange(id)
    }

    const valueSet = new Set(value)
    if (valueSet.has(id)) {
      valueSet.delete(id)
      return onChange(Array.from(valueSet))
    }

    valueSet.add(id)
    return onChange(Array.from(valueSet))
  }, [multi, value])

  const choiceNamesMap = useMemo(() => {
    return choices.reduce((all, current) => {
      all[current.id] = current.name
      return all
    }, {})
  }, [choices])

  return (
    <Menu isOpen={isOpen} isOpenChanged={setIsOpen} offset={offset} trigger={(
      <div className={styles.trigger} ref={triggerRef}>
        <div
          tabIndex={0}
          className={cn(controlStyles.input, styles.input, {[styles.opened]: isOpen})}
          onFocus={open}
          onBlur={close}
        >
          {(multi ? value.map(x => choiceNamesMap[x]).join(', ') : choiceNamesMap[value]) || placeholder}
        </div>
        <select
          tabIndex={-1}
          className={styles.select}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={() => {}}
          required={required}
          multiple={multi}
        >
          {choices.map(({ id, name }) => (
            <option value={id} key={id}>{name}</option>
          ))}
        </select>
        <div className={cn(styles.arrow, {[styles.arrowUp]: isOpen})}>
          <ArrowIcon />
        </div>
      </div>
    )}>
      <div className={styles.options} ref={optionsRef}>
        {choices.map(({ id, name }) => (
          <div
            tabIndex={0}
            className={styles.option}
            aria-selected={multi ? value.includes(id) : value === id}
            key={id}
            onClick={() => handleClickOption(id)}
          >
            {name}
          </div>
        ))}
      </div>
    </Menu>
  )
}

export default Select
