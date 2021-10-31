

// {/* <span id="temp" class="fa"></span> */}

const tempLoad = () => {
    let temp = document.getElementById('temp');
    temp.innerHTML = "&#xf2cb";
    temp.style.color = "white"

    setTimeout(() => {
        temp.innerHTML = "&#xf2c9";
        temp.style.color = "yellow"
    }, 1000);

    setTimeout(() => {
        temp.innerHTML = "&#xf2c7";
        temp.style.color = "red";
    }, 2000)
}

tempLoad();

setInterval(tempLoad, 3000)