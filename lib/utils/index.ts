import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Combines Tailwind classes with clsx and tailwind-merge
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Formats a date string into MMMM YYYY or YYYY
 */
export function formatDate(dateString: string): string {
  if (!dateString) return ''
  if (dateString.toLowerCase() === 'present') return 'Present'
  try {
    const date = new Date(dateString)
    if (isNaN(date.getTime())) return dateString
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      year: 'numeric',
    }).format(date)
  } catch {
    return dateString
  }
}

/**
 * Calculates years of experience from a start date string (e.g. '2023-01-01')
 */
export function calculateYears(startDate: string): number {
  try {
    const start = new Date(startDate)
    const now = new Date()
    const diffTime = Math.abs(now.getTime() - start.getTime())
    const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25)
    return Math.max(1, Math.round(diffYears * 10) / 10)
  } catch {
    return 1
  }
}
