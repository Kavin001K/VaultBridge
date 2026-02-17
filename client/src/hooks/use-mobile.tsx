import { useState, useEffect } from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean>(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }

    // Initial check
    checkMobile()

    // Listener
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => checkMobile()

    mql.addEventListener("change", onChange)
    window.addEventListener("resize", onChange)

    return () => {
      mql.removeEventListener("change", onChange)
      window.removeEventListener("resize", onChange)
    }
  }, [])

  return isMobile
}

export function useMobile() {
  const [state, setState] = useState({
    isMobile: false,
    isTablet: false,
    isIOS: false,
    isAndroid: false,
    isPWA: false,
    orientation: 'portrait' as 'portrait' | 'landscape'
  })

  useEffect(() => {
    const updateState = () => {
      const width = window.innerWidth
      const ua = navigator.userAgent
      setState({
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isIOS: /iPad|iPhone|iPod/.test(ua),
        isAndroid: /Android/.test(ua),
        isPWA: window.matchMedia('(display-mode: standalone)').matches,
        orientation: window.innerHeight > window.innerWidth ? 'portrait' : 'landscape'
      })
    }

    updateState()
    window.addEventListener('resize', updateState)
    window.addEventListener('orientationchange', updateState)

    return () => {
      window.removeEventListener('resize', updateState)
      window.removeEventListener('orientationchange', updateState)
    }
  }, [])

  return state
}
