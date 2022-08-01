import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'

import Input from 'components/Input'
import Select from 'components/Select'
import Button from 'components/Button'
import RegistrationSection from 'components/RegistrationSection'
import RegistrationLayout from 'components/RegistrationLayout'
import RegistrationAction from 'components/RegistrationSection/RegistrationAction'

import { getDeviceChoices, getServiceChoices, getServiceTypeChoices } from 'lib/api'
import { validateForm } from 'lib/utils'
import Store from 'state/localStorage'

const MasterRegistrationPage = () => {
  const formRef = useRef(null)
  const router = useRouter()

  const [serviceChoices, setServiceChoices] = useState([])
  const [deviceChoices, setDeviceChoices] = useState([])
  const [typeChoices, setTypeChoices] = useState([])

  useEffect(() => {
    getServiceChoices().then(setServiceChoices)
    getDeviceChoices().then(setDeviceChoices)
    getServiceTypeChoices().then(setTypeChoices)
  }, [])

  const [login, setLogin] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [services, setServices] = useState([])
  const [devices, setDevices] = useState([])
  const [types, setTypes] = useState([])

  useEffect(() => {
    const registrationState = Store.registrationState || {}
    setLogin(registrationState.login || '')
    setName(registrationState.name || '')
    setPhone(registrationState.phone || '')
    setEmail(registrationState.email || '')
    setServices(registrationState.services || [])
    setDevices(registrationState.devices || [])
    setTypes(registrationState.types || [])
  }, [])

  const onSubmit = useCallback((event) => {
    event.preventDefault()

    Store.registrationState = {
      ...Store.registrationState,
      login,
      name,
      phone,
      email,
      services,
      devices,
      types,
    }

    if (validateForm(formRef.current)) {
      router.push('/registration/master/details').then()
    }
  }, [router, login, name, phone, email, services, devices, types, devices])

  return (
    <RegistrationLayout header="Регистрация мастера">
      <form ref={formRef} onSubmit={onSubmit}>
        <RegistrationSection>
          <Input value={login} onChange={setLogin} name="login" placeholder="Логин" required />
          <Input value={name} onChange={setName} name="name" placeholder="Имя фамилия" required />
          <Input value={phone} onChange={setPhone} type="tel" name="phone" placeholder="Телефон" required />
          <Input value={email} onChange={setEmail} type="email" name="email" placeholder="Email" required />

          <Select
            value={services}
            onChange={setServices}
            name="services"
            placeholder="Список услуг"
            multi
            choices={serviceChoices}
            required
          />

          <Select
            value={devices}
            onChange={setDevices}
            name="devices"
            placeholder="Выбор устройства"
            multi
            choices={deviceChoices}
            required
          />

          <Select
            value={types}
            onChange={setTypes}
            name="types"
            placeholder="Вид ремонта"
            multi
            choices={typeChoices}
            required
          />

          <RegistrationAction>
            <Button>Продолжить</Button>
          </RegistrationAction>
        </RegistrationSection>
      </form>
    </RegistrationLayout>
  )
}

export default MasterRegistrationPage
