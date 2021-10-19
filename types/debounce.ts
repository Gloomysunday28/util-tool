export default interface DebounceDTO {
  (fn: () => any, waitTime: number, immediate?: boolean): unknown
}