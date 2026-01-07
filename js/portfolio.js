const navLinks = document.querySelectorAll('.nav-link');
const navbar = document.querySelector('.navbar');
const navbarHeight = navbar.offsetHeight;
const c = document.getElementById('arrow');
const back = document.getElementById("spyNav");
const sec2Top = document.getElementById("sec2").offsetTop;
const sec3Top = document.getElementById("sec3").offsetTop;
const sec4Top = document.getElementById("sec4").offsetTop;
const sec5Top = document.getElementById("sec5").offsetTop;
const nav1 = document.getElementById("nav1");
const nav2 = document.getElementById("nav2");
const nav3 = document.getElementById("nav3");
const nav4 = document.getElementById("nav4");
const nav5 = document.getElementById("nav5");
const dnav1 = document.getElementById("dnav1");
const dnav2 = document.getElementById("dnav2");
const dnav3 = document.getElementById("dnav3");
const dnav4 = document.getElementById("dnav4");
const dnav5 = document.getElementById("dnav5");
const dropdown = document.getElementById("dropdownMenuButton");
const drop = document.getElementById("dropdown");
const x = document.getElementById("xmark");
const overlay = document.getElementById("overlay");
const menu = document.getElementById("menu-button");
document.addEventListener('DOMContentLoaded', function () {
    const jb = document.querySelector('.navbar-brand');
    // go to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // click brand go to top
    jb.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    // each navbar element
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (!targetSection) return;

            const targetPosition = targetSection.offsetTop;


            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });
    const sections = [sec2Top, sec3Top, sec4Top, sec5Top, Infinity];
    const navs = [nav1, nav2, nav3, nav4, nav5];

    // change color in the section user used
    window.addEventListener('scroll', () => {
        const y = window.scrollY;

        navs.forEach(nav => nav.classList.remove('scrolled'));

        for (let i = 0; i < sections.length; i++) {
            if (y < sections[i]) {
                navs[i].classList.add('scrolled');
                break;
            }
        }
    });
    // overlay
    function xf(e) {
        e.stopPropagation();
        drop.classList.remove("show");
        overlay.style.display = "none";

        handleScroll();
        window.addEventListener('scroll', handleScroll);
        window.removeEventListener('scroll', handlemenuScroll);

        menu.classList.add("text-white");
        menu.classList.remove("text-black-50");
    }
    // x mark function
    x.addEventListener('click', xf);
    // only x mark work
    drop.addEventListener('click', function (e) {
        e.stopPropagation();
    });
    overlay.addEventListener('click', function (e) {
        e.stopPropagation();
    });

    // arrow
    c.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({
            top: sec2Top,
            behavior: 'smooth'
        });
    });
    // menu button
    function moblie() {
        const button = document.getElementById("dropdownbasic");
        if (window.innerWidth > 992) {
            button.style.display = "none";
        } else {
            button.style.display = "block";
        }
    }
    //change dropwdown baox flexible
    function change() {
        moblie();
        if (window.innerWidth < 992) {
            drop.style.width = window.innerWidth * 0.95 + "px";
            drop.style.height = (window.innerHeight * 0.9 - navbarHeight + 70) + "px";
            drop.style.position = "fixed";
            drop.style.top = "navbarHeight + 30px";
            drop.style.left = "1.75%"; // 0.95 * 0.5% 여백
            drop.style.zIndex = "1050";
        } else {
            drop.style.width = "";
            drop.style.height = "";
            drop.style.position = "";
            drop.style.top = "";
            drop.style.left = "";
            drop.style.zIndex = "";
            overlay.style.display = "none";

        }
    }
    // change background color of navbar
    function handleScroll() {
        if (window.scrollY > sec2Top - navbarHeight) {
            back.style.backgroundColor = "rgba(0,0,0,0.45)";
        } else {
            back.style.backgroundColor = "transparent";
        }
    }
    // change menu icon color 
    function handlemenuScroll() {
        if (window.scrollY < sec2Top - navbarHeight) {
            menu.classList.add("text-white");
            menu.classList.remove("text-black-50");
        } else {
            menu.classList.remove("text-white");
            menu.classList.add("text-black-50");
        }
    }
    dropdown.addEventListener('click', function () {
        window.removeEventListener('scroll', handleScroll);
        back.style.backgroundColor = "transparent";
        handlemenuScroll();
        window.addEventListener('scroll', handlemenuScroll);
    });

    // move smooth 
    const dnavs = [dnav1, dnav2, dnav3, dnav4, dnav5];
    dnavs.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (!targetSection) return;
            const targetPosition = targetSection.offsetTop;


            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            })
        })
    });
    for (let i = 0; i < dnavs.length; i++) {
        dnavs[i].addEventListener('click', function (e) {
            xf(e);
        })
    }
    dropdown.addEventListener('click', function (e) {

        change();
        overlay.style.display = "block"
        window.addEventListener('scroll', () => {
            const y = window.scrollY;
            dnavs.forEach(dnav => dnav.classList.remove('scrolled'));

            for (let i = 0; i < sections.length; i++) {
                if (y < sections[i]) {
                    dnavs[i].classList.add('scrolled');
                    break;
                }
            }
        });
    });
    window.addEventListener('resize', function () {
        moblie();
        change();
    })
    window.addEventListener('scroll', handleScroll);
    moblie();
    change();
});
// text delete and add
document.addEventListener('DOMContentLoaded', function () {
    const name = document.querySelector(".im");
    const txtArr = ['I\'m A Data Scientist', 'I\'m A Data Analyst', 'I\'m A Business Analyst'];
    let index = 0;
    let current = txtArr[index].split("");
    function write() {
        name.textContent += current.shift();
        if (current.length !== 0) {
            setTimeout(write, Math.floor(Math.random() * 100));
        } else {
            setTimeout(deleteTxt, 3000);
        }
    }

    function deleteTxt() {
        let b = name.textContent.split("");
        b.pop();
        name.textContent = b.join("");
        if (b.length !== 0) {
            setTimeout(deleteTxt, Math.floor(Math.random() * 100));
        } else {
            index = (index + 1) % txtArr.length;
            current = txtArr[index].split("");
            write();
        }
    }
    write();
});

$('[data-toggle="tooltip"]').tooltip({
    animation: true,
    container: 'body',
    delay: { show: 300, hide: 100 },
    html: false,
    placement: 'top',
    trigger: 'hover focus',
    title: 'JS Tooltip',
    template:
        '<div class="tooltip" role="tooltip">' +
        '<div class="arrow"></div>' +
        '<div class="tooltip-inner"></div>' +
        '</div>'
});

// change navbar background    
$('[data-toggle="tooltip"]')
    .on('show.bs.tooltip', function () {
        console.log('tooltip show');
    })
    .on('shown.bs.tooltip', function () {
        console.log('tooltip shown');
    })
    .on('hide.bs.tooltip', function () {
        console.log('tooltip hide');
    })
    .on('hidden.bs.tooltip', function () {
        console.log('tooltip hidden');
    })
    .on('inserted.bs.tooltip', function () {
        console.log('tooltip inserted');
    });
$(document).ready(function () {
    $('#bt-work1').click(function () {
        $('#carousel-work').carousel(0);
    });

    $('#bt-work2').click(function () {
        $('#carousel-work').carousel(1);
    });

    $('#bt-work3').click(function () {
        $('#carousel-work').carousel(2);
    });
    $('#bt-work4').click(function () {
        $('#carousel-work').carousel(3);
    });

    $('#bt-edu1').click(function () {
        $('#carousel-edu').carousel(0);
    });
    $('#bt-edu2').click(function () {
        $('#carousel-edu').carousel(1);
    });

    $('#bt-club1').click(function () {
        $('#carousel-club').carousel(0);
    });

    $('#bt-club2').click(function () {
        $('#carousel-club').carousel(1);
    });
    $('#bt-club3').click(function () {
        $('#carousel-club').carousel(2);
    });
    $('#bt-club4').click(function () {
        $('#carousel-club').carousel(3);
    });
});
const form = document.getElementById("contact-form");
const msg = document.getElementById("success-msg");

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/mqeareae", {
        method: "POST",
        body: data,
        headers: {
            "Accept": "application/json"
        }
    });

    if (response.ok) {
        alert("✅ Message sent successfully!");
        form.reset();
    }
});

const bt_edu1 = document.getElementById("bt-edu1");
const bt_edu2 = document.getElementById("bt-edu2");
const bt_work1 = document.getElementById("bt-work1");
const bt_work2 = document.getElementById("bt-work2");
const bt_work3 = document.getElementById("bt-work3");
const bt_work4 = document.getElementById("bt-work4");
const bt_club1 = document.getElementById("bt-club1");
const bt_club2 = document.getElementById("bt-club2");
const bt_club3 = document.getElementById("bt-club3");
const bt_club4 = document.getElementById("bt-club4");

const edu = [bt_edu1, bt_edu2];
const work = [bt_work1, bt_work2, bt_work3, bt_work4];
const club = [bt_club1, bt_club2, bt_club3, bt_club4];
const eduH = document.getElementById("carousel-edu").offsetTop;
const workH = document.getElementById("carousel-work").offsetTop;
const clubH = document.getElementById("carousel-club").offsetTop;

document.addEventListener('DOMContentLoaded', function () {
    edu.forEach(a => a.addEventListener('click', function(e){
        window.scrollTo({
            top: eduH - navbarHeight,
            behavior: 'smooth'
        });
    }));
    work.forEach(a => a.addEventListener('click', function(e){
        window.scrollTo({
            top: workH - navbarHeight,
            behavior: 'smooth'
        });
    }));
    club.forEach(a => a.addEventListener('click', function(e){
        window.scrollTo({
            top: clubH - navbarHeight,
            behavior: 'smooth'
        });
    }));
});
