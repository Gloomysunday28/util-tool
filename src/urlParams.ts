 /**
  * @description
  *   url的工具集合
  */

 import { setFormatQuery, objectTools } from './helpers/index'

 const location = window.location
 export const urlParams = {
   /**
   * @description
   *   获取url的哈希值
   * @param { string } url 传入的URL字符串，默认是当前URL
   * 
   * @returns { string } 返回url里的哈希值
   */
   getHash(url: string = location.href): string {
     return url.split('#')[1]
   },

   /**
   * @description
   *   格式化url里的query字符串结构
   * @param { string } url 传入的URL字符串，默认是当前URL
   * @param { string } key 获取具体的某个key值
   * 
   * @returns { object } 返回格式化后的query结构
   */
  formatQuery(url: string = location.href, key?: string) {
     const queryString = url.split('?')[1]

     if (queryString) {
       const query =  queryString.split('&').reduce(setFormatQuery, {})

       return key ? query[key] : query
     } else {
       return void 0
     }
   },
   /**
    * @description
    *   将格式化后的url序列化
    * @param { object } obj 格式化后的query对象s
    * @returns { string }
    */
   transformStringifyValue(obj): string {
    return Object.keys(obj).reduce((stringify, key) => {
      const value = obj[key]

      return stringify += `${stringify ? '&' : '?'}${key}=${objectTools.isArray(value) ? value.join(',') : value}`
    }, '')
   },

   /**
   * @description
   *   设置格式化url里的query字符串结构
   * @param { string } url 传入的URL字符串，默认是当前URL
   * @param { string } key 获取具体的某个key值
   * @param { string } value 设置的值
   * 
   * @returns { object } 返回格式化后的query结构
   */
   setQueryStringValue(url, key, value) {
     const query = setFormatQuery(this.formatQuery(url), `${key}=${value}`)

     return this.transformStringifyValue(query)
   }
 }