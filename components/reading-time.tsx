"use client"

import { useEffect, useState } from "react"

interface ReadingTimeProps {
  content: string
  className?: string
}

const WORDS_PER_MINUTE = 200

export function ReadingTime({ content, className }: ReadingTimeProps) {
  const [readingTime, setReadingTime] = useState(0)

  useEffect(() => {
    const words = content.split(/\s+/).filter(Boolean).length
    const minutes = Math.ceil(words / WORDS_PER_MINUTE)
    setReadingTime(minutes)
  }, [content])

  if (readingTime === 0) return null

  return (
    <span className={className}>
      {readingTime} {readingTime === 1 ? "minute" : "minutes"} de lecture
    </span>
  )
}

