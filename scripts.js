document.getElementById('calculateBtn').addEventListener('click', function() {
    // 1. Get values
    const food = parseFloat(document.getElementById('food').value) || 0;
    const shel = parseFloat(document.getElementById('shel').value) || 0;
    const mob = parseFloat(document.getElementById('mob').value) || 0;
    const good = parseFloat(document.getElementById('good').value) || 0;
    const serv = parseFloat(document.getElementById('serv').value) || 0;

    // 2. Create data objects with your specific file paths
    const data = [
        { name: 'Food', value: food, path: 'images/food.png' },
        { name: 'Shelter', value: shel, path: 'images/shel.png' },
        { name: 'Mobility', value: mob, path: 'images/mob.png' },
        { name: 'Goods', value: good, path: 'images/good.png' },
        { name: 'Services', value: serv, path: 'images/serv.png' }
    ];

    // 3. Sort by value descending
    data.sort((a, b) => b.value - a.value);

    // 4. Get the top 3 items
    const top3 = data.slice(0, 3);
    const top3Names = top3.map(item => item.name).join(', ');

    // 5. Update text result
    document.getElementById('result').innerText = "Top 3 Categories: " + top3Names;

    // 6. Display the images
    const gallery = document.getElementById('imageDisplay');
    gallery.innerHTML = ''; // Clear old images from previous clicks

    top3.forEach(item => {
        // Only show the image if the user actually entered a value > 0
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