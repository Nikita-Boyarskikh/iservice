import { useCallback, useRef, useState } from 'react'

import Modal from 'components/Modal'
import Button from 'components/Button'

import { validateForm } from 'lib/utils'

import styles from './RepairRequestSection.module.css'

const RepairRequestSection = ({ onSubmit }) => {
  const formRef = useRef()
  const [isOpen, setIsOpen] = useState(false)

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    setIsOpen(true)
    if (!validateForm(formRef.current)) {
      return
    }

    const formData = new FormData(formRef.current)
    const data = Object.fromEntries(formData.entries())
    onSubmit(data)
  }, [onSubmit])

  return (
    <>
      <section className={styles.repairRequest}>
        <header className={styles.repairRequestHeader}>Заявка на ремонт</header>
        <div className={styles.repairRequestSubHeader}>
          Оформите заявку на ремонт и получите скидку 10% на работу мастера.
        </div>
        <form ref={formRef} className={styles.repairRequestForm} onSubmit={handleSubmit}>
          <input type="text" name="name" autoComplete="name" placeholder="Ваше имя" required/>
          <input type="tel" name="tel" autoComplete="tel" placeholder="Номер телефона" required />
          <input type="text" name="reason" placeholder="Причина обращения" required />
          <textarea name="description" rows={3} placeholder="Описание проблемы" required />
          <input type="submit" value="Отправить" />
        </form>
      </section>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className={styles.modal}>
          <header className={styles.modalHeader}>Ваша заявка рассмотрена</header>
          <main className={styles.modalBody}>
            Вам будет предоставлен список мастеров готовых взяться выполнить заказ
          </main>
          <Button small onClick={() => setIsOpen(false)}>ОК</Button>
        </div>
      </Modal>
    </>
  )
}

export default RepairRequestSection
