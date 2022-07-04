import { useMediaQuery } from 'react-responsive'

const useIsMobile = () => {
  const isDesktop = useMediaQuery({
    query: 'screen and (min-width: 1400px)',
  })

  return !isDesktop
}

export default useIsMobile
