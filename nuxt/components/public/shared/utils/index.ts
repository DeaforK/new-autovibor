export function debounce<T extends any[]>(func: (...args: T) => void, wait: number) {
  let timeout: NodeJS.Timeout | null
  return (...args: T) => {
    clearTimeout(timeout as NodeJS.Timeout)
    timeout = setTimeout(() => func.apply(null, args), wait)
  }
}