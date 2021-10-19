/**
 * @description
 *   函数节流，规定的时间短促内执行一次
 * @param { function } fn 目标受众函数
 * @param { number } waitTime 节流间隔
 * 
 * @returns { any } 返回fn返回的值
 */

import type ThrottleDTO from '../types/throttle'
export function throttle(fn, waitTime): ThrottleDTO {
  let oldTime = +new Date()
  
  return function(...args) {
    let newTime = +new Date()

    if (newTime - oldTime >= waitTime) {
      fn && fn(...args)
      oldTime = newTime
    }
  }
}