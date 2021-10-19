/**
 * @description
 * 函数防抖
 * @param { function } fn 防抖的受众函数
 * @param { number } waitTime 防抖间隔
 * @param { boolean } immediate 前置后置函数执行
 * 
 * @returns { any } 返回受众函数返回的数据
 */
import type DebounceDTO from '../types/debounce'

export function debounce(fn, waitTime, immediate?): DebounceDTO {
  let timer = null

  return function(...args) {
    if (!timer) {
      if (immediate) {
        fn && fn(...args)
      }
    } else {
      clearTimeout(timer)
    }
      
    timer = setTimeout(() => {
      fn && fn(...args)
    }, waitTime)
  }
}