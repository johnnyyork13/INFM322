const famPic = document.getElementsByClassName('fam-pic');

let mouseOnPic = false;

famPic[0].style.width = "300px";
famPic[0].style.height = "300px";

for (let i = 0; i < famPic.length; i++) {
    const e = famPic[i];
    e.addEventListener('mouseenter', function() {
        for (let i = 0; i < famPic.length; i++) {
            const el = famPic[i];
            el.style.width = "200px";
            el.style.height = "200px";
        }
        e.style.width = "300px";
        e.style.height = "300px";
    })
}