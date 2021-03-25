console.log("JS loaded");
function but1() {
    scroll(1200);
    console.log("about clicked");
};

function but2() {
    scroll(2200);
    console.log("projects clicked");
};

function but3() {
    scroll(3150);
    console.log("contact clicked");
};

function scroll(px) {
    for (var i=0; i<px; i++) {
        setTimeout(window.scrollBy(0, 1), 100);
    };
};
