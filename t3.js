function digital() {
    const watch = new Date();
    let minute = watch.getMinutes();
    let hour = watch.getHours();
    let second = watch.getSeconds();
    second = inc(second);
    minute = inc(minute);
    document.getElementById('time').innerHTML = hour + ":" + minute + ":" + second;
    setTimeout(digital, 1000);
}

function inc(end) {
    if (end < 10) {
        end += "0"
    };
    return end;
}
