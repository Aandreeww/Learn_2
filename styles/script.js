let head = document.createElement('header')
head.style.backgroundColor = 'green'
head.style.width = '600px'
head.style.height = '200px'
document.querySelector('body').append(head)

let main = document.createElement('main')
main.style.backgroundColor = 'blue'
main.style.width = '600px'
main.style.height = '200px'
main.style.marginTop = 10 + 'px';
document.querySelector('body').append(main)

let text = document.createElement('Text')
text.style.marginBottom = 100 + 'px';
text.innerHTML = 'Вот что я могу'
document.querySelector('main').append(text)

let image = document.createElement('IMG')
image.src = "../images/js.png";
image.style.width = '200px'
image.style.height = '200px'
document.querySelector('main').insertBefore(image, text)