const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
    // console.log(counter);
    counter.innerHTML = 0;

    const updateCounter = () => {
        const targetCounter = +counter.getAttribute("data-target");
        // console.log(targetCounter);
        const startingCount = Number(counter.innerHTML);
        const incr = targetCounter / 100;


        if(startingCount < targetCounter){
            counter.innerHTML = `${startingCount + incr}`;
            setTimeout(updateCounter, 50);
        }

    }
    updateCounter();
})