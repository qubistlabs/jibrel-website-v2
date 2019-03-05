<template>
  
</template>

<script>
import { keyBy } from 'lodash-es'
const files = require.context('@/assets/img/svg', true, /.*\.svg$/)
// const icons = keyBy(
//   files.keys().map((x) => {
//     const filesArray = files(x)
//     // console.log(x.replace('./', ''), filesArray);
    
//     // const sizeArray = filesArray.viewBox.split(/(\s+)/).filter(e => e.trim().length > 0)
//     // filesArray.width = sizeArray[2]
//     // filesArray.height = sizeArray[3]
//     // return filesArray
//   }),
//   'id',
// )
// const icons = keyBy(files.keys().map((x) => {x}))
// console.log(icons);

export default {
  
}
</script>