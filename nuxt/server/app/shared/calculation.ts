export default function calculateDaysDiff(constantDateStr: string): number {
  const constantDate = new Date(constantDateStr).getTime()
  const todayDate = new Date().getTime()
  let difference = todayDate - constantDate
  difference = Math.floor(difference / (1000 * 60 * 60 * 24))

  return Math.abs(difference)
}