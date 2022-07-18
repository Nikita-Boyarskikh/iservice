import { useEffect, useState } from 'react'

import { range } from 'lib/utils'

const useApi = (callApi, number = 4, fallback = null) => {
  const [data, setData] = useState(fallback || range(number).map(() => ({})))

  useEffect(() => {
    callApi().then(setData)
  }, [])

  return data
}

export default useApi
