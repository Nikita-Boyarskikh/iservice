import { useCallback, useEffect, useRef } from 'react'
import { act } from 'react-dom/test-utils'

const useListToggleHandler = (activeId, onChangeId) => {
  const selectedRef = useRef(new Set())

  useEffect(() => {
    if (activeId) {
      selectedRef.current.add(activeId)
    }
  }, [])

  return useCallback((id) => {
    const selected = selectedRef.current
    if (id === activeId) {
      selected.delete(id)
    } else {
      selected.add(id)
    }

    if (selected.size === 0) {
      onChangeId(null)
    } else {
      const [newId] = selected
      onChangeId(newId)
    }
  }, [activeId, onChangeId])
}

export default useListToggleHandler
