'use client'

import { useEffect } from 'react'

/** Ambient background, scroll progress bar and cursor-follow spotlight for cards. */
export default function Effects() {
  useEffect(() => {
    let frame = 0
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight
        document.documentElement.style.setProperty('--scroll', max > 0 ? (window.scrollY / max).toFixed(4) : '0')
      })
    }
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const onMove = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null
      const card = target?.closest?.(".spotlight, [class*='bg-white/5'][class*='rounded'], [class*='bg-white/10'][class*='rounded']") as HTMLElement | null
      if (!card) return
      const rect = card.getBoundingClientRect()
      card.style.setProperty('--mx', `${event.clientX - rect.left}px`)
      card.style.setProperty('--my', `${event.clientY - rect.top}px`)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    if (fine) document.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      document.removeEventListener('pointermove', onMove)
    }
  }, [])

  return (
    <>
      <div className="bg-fx" aria-hidden="true">
        <div className="bg-orb orb-a" />
        <div className="bg-orb orb-b" />
        <div className="bg-orb orb-c" />
        <div className="bg-grid" />
        <div className="bg-grain" />
      </div>
      <div className="scroll-progress" aria-hidden="true" />
    </>
  )
}
