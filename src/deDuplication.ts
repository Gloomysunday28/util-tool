/**
 * @description
 *  数组去重
 * @param { Array } array 原始数组
 * @param { string } mark 可选项, 根据mark标志去筛选
 * 
 * @returns { Array }
 */

 export function deDuplication<T>(array: Array<T>, mark?: string): Array<T> {
   if (mark) {
    return array.filter((arr, index) => {
      return array.findIndex((v) => v[mark] === arr[mark]) === index
    })
   } else {
     return array.filter((v, index) => array.indexOf(v) === index)
   }
 }