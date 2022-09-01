import { useContext, useState } from 'react'

import { StateContext } from 'state/context'
import useApi from 'hooks/useApi'
import { getChats } from 'lib/api'

import PageLayout from 'components/PageLayout'
import ChatLayout from 'components/ChatLayout'

const ChatPage = () => {
  const { state } = useContext(StateContext)
  const [activeChat, setActiveChat] = useState(null)
  const chats = useApi(getChats, 20)

  return (
    <PageLayout reviews={state.reviews} articles={state.articles}>
      <ChatLayout
        chats={chats}
        activeChat={activeChat}
        onChangeActiveChat={setActiveChat}
      />
    </PageLayout>
  )
}

export default ChatPage
