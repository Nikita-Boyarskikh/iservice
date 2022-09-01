import { useCallback } from 'react'

import MasterCard from 'components/ChatLayout/ChatSelect/MasterCard'
import SearchInput from 'components/SearchInput'

import SoundIcon from 'public/icons/sound.svg'
import styles from 'components/ChatLayout/ChatSelect/ChatSelect.module.css'

const ChatSelect = ({ chats, search, onChangeSearch, muted, onChangeMuted, onSelectChat }) =>{
  const MutedIcon = muted ? SoundIcon : SoundIcon  // TODO: MutedSoundIcon
  const mutedLabel = muted ? 'Unmute' : 'Mute'

  const handleToggleMuted = useCallback(() => {
    onChangeMuted(!muted)
  }, [onChangeMuted, muted])

  return (
    <div className={styles.container}>
      <div className={styles.headline}>
        <span className={styles.header}>Чат</span>
        <SearchInput search={search} onChangeSearch={onChangeSearch} />
        <span
          className={styles.mutedIcon}
          role="checkbox"
          aria-checked={!muted}
          aria-label={mutedLabel}
          tabIndex={0}
          onClick={handleToggleMuted}
        >
          <MutedIcon alt={mutedLabel} />
        </span>
      </div>

      <div className={styles.scrollArea}>
        {chats.map((chat, i) => (
          <div key={chat.master?.id || i} className={styles.master} onClick={() => chat.master && onSelectChat(chat.master.id)}>
            <MasterCard
              master={chat.master}
              messages={chat.messages}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ChatSelect
