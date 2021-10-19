/**
 * @description
 *  数组去重
 * @param { Array } array 原始数组
 * @param { number } floor 扁平化的层数，默认是全部
 * 
 * @returns { Array }
 */

 export function flattern(array: Array<unknown>, floor: number = Infinity): Array<any> {
  if (floor <= 0) return array
  return array.reduce<any>((prev, arr) => {
    return prev.concat(Array.isArray(arr) ? flattern(arr, floor - 1) : arr as any)
  }, [])
}