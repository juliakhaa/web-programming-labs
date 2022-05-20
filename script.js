function notReadyAlert(event) {
    alert('Sorry, not ready yet!\nИзвините, еще не готово!');
    console.log('Sorry, not ready yet!\nИзвините, еще не готово!');
    event.preventDefault();
    return false;    
}

function AboutDiscounts() {
    alert('Hurry, discounts coming soon!\nСпешите, скоро скидки!');
    console.log('Hurry, discounts coming soon!\nСпешите, скоро скидки!');
    return false;
}

function Address() {
    alert('Dimitrova avenue, 2\nПроспект Димитрова, 2');
    console.log('Dimitrova avenue, 2\nПроспект Димитрова, 2');
    return false;
}

function Buy() {
    alert('Select quantity, if you want to buy\nЕсли хотите купить товар, выберите количество');
    console.log('Select quantity, if you want to buy\nЕсли хотите купить товар, выберите количество');
    return false;
}

function search() {
    let name = document.getElementById('search').value;
    let productNumber = null;
    if (name == 'панама') {
        productNumber = 0;
    } else if (name == 'лонгслив') {
        productNumber = 1;
    } else if (name == 'кроссовки') {
        productNumber = 2;
    } else {
        alert('Товар не найден');
    }
    console.log('Товар номер: ', productNumber);
                
    let cards = document.getElementsByClassName('card');
    if (name=='') {
        cards[0].style.display='inline-block';
        cards[1].style.display='inline-block';
        cards[2].style.display='inline-block';
    } else {
        cards[0].style.display='none';
        cards[1].style.display='none';
        cards[2].style.display='none';
    }
    let card = cards[productNumber];
    card.style.border = '1px dashed red';
    card.style.display = 'inline-block';
    card.style.backgroundColor = 'yellow';

    setTimeout(function() {
        card.style.border = 'none';
        card.style.backgroundColor = '';
    }, 2000);
}

function generateMenu() {
    let menu = document.querySelector('nav.main-menu ul');
    menu.innerHTML = '';

    let items = [
        {href: 'index.html', text: 'Товары'},
        {href: '', text: 'Контакты'},
        {href: '', text: 'Доставка'},
        {href: '', text: 'Акции'},
        {href: '', text: 'О нас'},
    ];

    for(let i = 0; i<items.length; i++) {
        let link = document.createElement('a');
        link.innerText = items[i].text;
        link.href = items[i].href;
        if(items[i].href == '') {
            link.addEventListener('click', notReadyAlert);
        }

        let menuItem = document.createElement('li');
        menuItem.appendChild(link);

        menu.appendChild(menuItem);
    }
}

function loaded() {
    let searchbox = document.getElementById('search');
    searchbox.addEventListener('keydown', function (key) {
        if(key.key == 'Enter')
        search();
    });

    generateMenu();
}