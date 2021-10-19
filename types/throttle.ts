export default interface ThrottleDTO {
  (fn: () => any, waitTime: number): unknown
}