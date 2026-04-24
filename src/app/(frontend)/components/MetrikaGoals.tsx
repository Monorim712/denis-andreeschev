'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    ym?: (id: number, method: string, goal: string) => void
  }
}

const ID = 108580980

function goal(name: string) {
  window.ym?.(ID, 'reachGoal', name)
}

export function MetrikaGoals() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest('a')
      if (!link) return

      const href = link.getAttribute('href') || ''
      if (href.startsWith('tel:')) goal('click_phone')
      else if (href.startsWith('mailto:')) goal('click_email')
      else if (href.includes('max.ru')) goal('click_max')
    }

    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  useEffect(() => {
    const section = document.getElementById('pricing')
    if (!section) return

    let fired = false
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !fired) {
        fired = true
        goal('view_pricing')
        observer.disconnect()
      }
    }, { threshold: 0.3 })

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return null
}
