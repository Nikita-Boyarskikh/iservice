import { useCallback, useMemo, useState } from 'react'

import Chat from './Chat'
import ChatSelect from './ChatSelect'

import styles from './ChatLayout.module.css'

const ChatLayout = ({ chats, activeChat, onChangeActiveChat, muted=false, onChangeMuted=() => {} }) => {
  const [search, setSearch] = useState('')
  const handleSearch = useCallback((newSearch) => {
    setSearch(newSearch)
  }, [setSearch])

  const filteredChats = useMemo(() => {
    return chats.filter(chat => !chat.master || chat.master.name.includes(search))
  }, [chats, search])

  const activeChatMessages = useMemo(() => {
    return chats.find(chat => chat?.master?.id === activeChat)?.messages
  }, [chats, activeChat])

  return (
    <div className={styles.layout}>
      <div className={styles.select}>
        <ChatSelect
          chats={filteredChats}
          onSelectChat={onChangeActiveChat}
          muted={muted}
          onChangeMuted={onChangeMuted}
          search={search}
          onChangeSearch={handleSearch}
        />
      </div>

      <div className={styles.chat}>
        {activeChatMessages && <Chat messages={activeChatMessages}/>}
      </div>
    </div>
  )
}

export default ChatLayout
