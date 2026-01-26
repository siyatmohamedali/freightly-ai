"use client"

import { useState, useEffect } from "react"

interface TypingAnimationProps {
  text: string
  speed?: number
  className?: string
  pauseDuration?: number
}

export function TypingAnimation({ text, speed = 100, className = "", pauseDuration = 2000 }: TypingAnimationProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (isPaused) {
      timeout = setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(true)
      }, pauseDuration)
    } else if (isDeleting) {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(prev => prev.slice(0, -1))
        }, speed / 2)
      } else {
        setIsDeleting(false)
        setCurrentIndex(0)
      }
    } else {
      if (currentIndex < text.length) {
        timeout = setTimeout(() => {
          setDisplayText(prev => prev + text[currentIndex])
          setCurrentIndex(prev => prev + 1)
        }, speed)
      } else {
        setIsPaused(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [currentIndex, text, speed, isDeleting, isPaused, displayText, pauseDuration])

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  )
}