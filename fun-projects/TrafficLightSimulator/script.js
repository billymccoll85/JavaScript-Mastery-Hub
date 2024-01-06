let activeLight = null;

setInterval(() => {
    switch (activeLight) {
        case 'red':
            activeLight = 'green';
            break;
        case 'yellow':
            activeLight = 'red';
            break;
        case 'green':
        case null:
            activeLight = 'yellow';
            break;
    }

    document.querySelectorAll('.light').forEach(light => {
        light.classList.remove('active');
    });

    document.getElementById(activeLight).classList.add('active');
}, 2000);