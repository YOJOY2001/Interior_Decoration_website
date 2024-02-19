const bar = document.getElementById('bar')
const close = document.getElementById('close')
const nav = document.getElementById('navigation')

if (bar) {
    bar.addEventListener('click', () => {
        bar.style.display = 'none'
        nav.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
        bar.style.display = 'block'
    })
}

function myHeader() {
    let header = document.getElementById("header");
    // let lol = document.getElementById("lol");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 0) {
            header.classList.add("active");
            // lol.src = "pic/bulb2.png";
        } else {
            header.classList.remove("active");
            // lol.src = "pic/bulb.png";
        }

    })
}
myHeader();



function myFun() {
    let plus = document.querySelector(".plus");
    let textBox = document.querySelector(".text-box");
    plus.onclick = () => {

        textBox.classList.toggle('active')
        plus.classList.toggle("img_active")
    }
}
myFun()

function myVideo() {
    let links = document.querySelector(".link_a");
    let overs = document.querySelector(".bg-show .overlay");
    let exit = document.querySelector(".cancel");
    let player = document.querySelector(".player");
    let videos = document.getElementById("video");
    links.onclick = (ed) => {
        ed.preventDefault();
        console.log("hii");
        overs.style.display = "block"
    }
    exit.onclick = () => {
        overs.style.display = "none"
    }
    player.onclick = () => {
        // console.log(videos.paused);
        if (videos.paused) {
            videos.play();
            player.src = "images/pause.png"
        } else {
            videos.pause();
            player.src = "images/play.png"
        }
    }
}
myVideo()

function toTop() {
    let top = document.querySelector(".top")
    window.onscroll = () => {
        if (window.scrollY > 100 || documentElement.scrollTop > 100) {
            top.style.display = "block"
        } else {
            top.style.display = "none"
        }
    }
    top.onclick = () => {
        scrollTo(0, 0)
    }

}
toTop();
