
document.addEventListener("DOMContentLoaded", () => {
    const next = document.querySelector(".next");
    const prev = document.querySelector(".prev");

    next.addEventListener("click", () => {
        const items = document.querySelectorAll(".item");
        document.querySelector(".slide").appendChild(items[0]);
    });

    prev.addEventListener("click", () => {
        const items = document.querySelectorAll(".item");
        const lastItem = items[items.length - 1];
        const slide = document.querySelector(".slide");
        slide.insertBefore(lastItem, slide.firstChild);
    });

    function autoChangeSlide(interval) {
        setInterval(() => {
            const items = document.querySelectorAll(".item");
            const firstItem = items[0];
            const slide = document.querySelector(".slide");
            slide.appendChild(firstItem);
        }, interval);
    }
    //autoChangeSlide(8000);
});

