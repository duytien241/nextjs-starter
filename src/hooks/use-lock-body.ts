import * as React from 'react'

export function useLockBody() {
  React.useLayoutEffect((): (() => void) => {
    if (typeof window !== 'undefined') {
      const originalStyle: string = window.getComputedStyle(
        document.body,
      ).overflow
      document.body.style.overflow = 'hidden'
      return () => (document.body.style.overflow = originalStyle)
    }
    return () => null
  }, [])
}
