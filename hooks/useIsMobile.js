import { useMediaQuery } from 'react-responsive'

const useIsMobile = () => {
  const isDesktop = useMediaQuery({
    query: 'screen and (min-width: 1000px)',
  })

  return !isDesktop
}

export default useIsMobile
