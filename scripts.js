document.getElementById('calculateBtn').addEventListener('click', function() {

    const food = parseFloat(document.getElementById('food').value) || 0;
    const shel = parseFloat(document.getElementById('shel').value) || 0;
    const mob = parseFloat(document.getElementById('mob').value) || 0;
    const good = parseFloat(document.getElementById('good').value) || 0;
    const serv = parseFloat(document.getElementById('serv').value) || 0;


    const data = [
        { name: 'Food', value: food, path: 'images/food.png' },
        { name: 'Shelter', value: shel, path: 'images/shel.png' },
        { name: 'Mobility', value: mob, path: 'images/mob.png' },
        { name: 'Goods', value: good, path: 'images/good.png' },
        { name: 'Services', value: serv, path: 'images/serv.png' }
    ];


    data.sort((a, b) => b.value - a.value);

    const top3 = data.slice(0, 3);

    const gallery = document.getElementById('imageDisplay');
    gallery.innerHTML = ''; 

    top3.forEach(item => {
        if (item.value > 0) {
            const container = document.createElement('div');
            container.className = 'result-card';

            const img = document.createElement('img');
            img.src = item.path;
            img.alt = item.name;
            img.className = 'result-img';

            container.appendChild(img);
            gallery.appendChild(container);
        }
    });
});
