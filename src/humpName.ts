/**
 * @description
 *  更改成驼峰命名
 * @param { string } str 字符串
 * @param { string } division 驼峰命名的分隔符
 * 
 * @returns { string }
 */

import type HumpNameDTO from '../types/humpName'
export function humpName(str, division): HumpNameDTO {
  return str.split(new RegExp(division, 'g')).map((v, index) => {
    if (index) {
      return v[0].toUpperCase() + v.slice(1)
    } else return v
  }).join('')
}