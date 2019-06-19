function setScript(src, id) {
  var js, fjs = document.getElementsByTagName('script')[0]
  if (document.getElementById(id)) {
    document.getElementById(id).remove()
  }
  js = document.createElement('script') 
  js.id = id
  js.src = src
  fjs.parentNode.insertBefore(js, fjs)
}

export default setScript