function terseCevir(word){
    word = document.querySelector('input').value
    document.querySelector('#result').innerHTML = word.split('').reverse().join('')
}