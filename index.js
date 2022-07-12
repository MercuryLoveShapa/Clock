let size = 86;
let columns = Array.from(document.getElementsByClassName('column'));
let class_list = ['visible', 'near', 'far', 'far', 'distant', 'distant'];
let is_24_hour_clock = true;

function getClock() {
    let d = new Date();
    let hour = is_24_hour_clock ? d.getHours() : d.getHours() % 12 || 12;
    hour = hour < 10 ? '0' + hour : hour;
    let minute = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();
    let second = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds();
    return hour + '' + minute + '' + second;
}

function getClass(n, i) {
    return class_list.find(function(_class, class_index) {
        return i - class_index === n || i + class_index === n;
    }) || '';
}

setInterval(() => {
    let c = getClock();
    columns.forEach(function(e, i) {
        let n = parseInt(c[i]);
        let offset = -n * size;
        e.style.transform = 'translateY(calc(50vh + ' + offset + 'px - ' + (size / 2) + 'px))';
        Array.from(e.children).forEach(function(e2, i2) {
            e2.className = 'num ' + getClass(n, i2);
        })
    })
}, 1000);