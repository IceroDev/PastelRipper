var h5 = document.getElementsByTagName('h5')
for(let e of h5){
  if(e.className != "card-title col-lg-9 col-md-8 col-sm-7") break
  let url = e.childNodes[1].href
  let code = url.split('/')[url.split('/').length-1]
  var frame = document.createElement('a')
    frame.href = "https://projet-pastel.be/document/download/"+code
  frame.style.display = "none"
  frame.download = ""
    document.body.appendChild(frame)
  frame.click()
}
