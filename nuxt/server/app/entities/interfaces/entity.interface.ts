export default interface Entity<T> {
  list: Array<T>
  find(uid: number | string): T | undefined | null
}