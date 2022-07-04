import { useEffect } from 'react'

const useOnClickOutside = (refs, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!refs.every((ref) => ref && !ref.contains(event.target))) {
        return
      }

      handler(event)
    }

    document.addEventListener('mousedown', listener);

    return () => {
      document.removeEventListener('mousedown', listener)
    }
  },
  [...refs, handler],
  )
}

export default useOnClickOutside
