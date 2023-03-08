var t = 0,
misses = ['your eyes', 'your touch', 'the warmth', 'the stars in your eyes'],
hates = ['hates it when you cry', 'blames himself', ' he cant take this pain forever', 'hate that she wants him'],
will = ['dies for you', 'lies for you', 'kills for you', ];

function rand_range(maximum) {
    "use strict";
    return Math.floor(Math.random() * (maximum + 1));
}
function choose(array) {
    "use strict";
    return array[rand_range(array.length - 1)];
}
function stanza() {
    "use strict";
    return 'He misses ' + choose(misses) + '<br \>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and ' + choose(hates) + '<br \>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; and instead ' + choose(will);
}
function litany() {
    "use strict";
    var last, text, main = document.getElementById('main');
    if (8 > t) {
        t += 1;
    } else {
        main.removeChild(document.getElementById('main').firstChild);
    }
    last = document.createElement('div');
    last.innerHTML = stanza();
    main.appendChild(last);
}
function produce_litany() {
    "use strict";
    litany();
    setInterval(litany, 5000);
}