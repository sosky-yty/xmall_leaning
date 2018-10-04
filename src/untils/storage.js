/**
 * 储存
 * @param {*} name 键
 * @param {*} content 值
 */
export const setStore = (name, content) => {
  if (!name) return
  // 比较类型是否相同，然后在进行值的比较
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.localStorage.setItem(name, content)
}

/**
 * 取出值
 * @param {*} name 键
 */
export const getStore = name => {
  if (!name) return
  return window.localStorage.getItem(name)
}

/**
 * 删除存储
 * @param {*} name
 */
export const removeStore = name => {
  if (!name) return
  window.localStorage.removeItem(name)
}
