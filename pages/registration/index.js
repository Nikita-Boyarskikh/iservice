import RegistrationLayout from 'components/RegistrationLayout'
import RegistrationTypeSection from 'components/RegistrationTypeSection'
import RegistrationType from 'components/RegistrationTypeSection/RegistrationType'

import UserIcon from 'public/icons/user.svg'
import DocsIcon from 'public/icons/docs.svg'

const RegistrationPage = () => {
  return (
    <RegistrationLayout header="Выбор регистрации">
      <RegistrationTypeSection>
        <RegistrationType
          href="/registration/client"
          icon={<UserIcon alt="Регистрация пользователя" />}
          header="Регистрация пользователя"
          description={
            <>
              Тип регистрации для пользователей<br />
              (только клиентам)
            </>
          }
        />
        <RegistrationType
          href="/registration/master"
          icon={<DocsIcon alt="Регистрация сервисов и мастеров" />}
          header="Регистрация сервисов и мастеров"
          description={<><br/><br/></>}
        />
      </RegistrationTypeSection>
    </RegistrationLayout>
  )
}

export default RegistrationPage
