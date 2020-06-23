document.getElementsByTagName('body')[0].onclick = function (e) {
    console.log('O evento ocorreu!')
    console.log(e.target)
}