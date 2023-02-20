function rgb() {
    let red = prompt('Введи число от 0 до 255, отвечающее за красный спектр');
    let green = prompt('Введи число от 0 до 255, отвечающее за зеленый спектр')
    let blue = prompt('Введи число от 0 до 255, отвечающее за синий спектр');
    document.getElementById('body').style.background = `rgb(${red}, ${green}, ${blue})`
}