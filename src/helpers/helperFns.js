// remove outer strings
const removeOuterStrings = prop => prop.replace(/[',"]+/g, '')

/*
*  @ CloneUpdateObject
*  @param: <Object>
*  @param: <Function>

*  Iterates over each obj property and calls a function to update prop
*  Returns a new obj
* */
const cloneUpdateObject = (obj, fn) => {
  let updatedObj = Object.assign({}, obj)
  for (let p in updatedObj) {
    updatedObj[p] = fn(updatedObj[p])
  }
  return updatedObj
}

export { removeOuterStrings, cloneUpdateObject }