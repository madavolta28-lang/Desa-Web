function welcome() {
    const pesan = document.createElement("div");

    pesan.innerHTML = " Selamat Menjelajah di Website Desa Mojayan ";

    pesan.style.position = "fixed";
    pesan.style.top = "50%";
    pesan.style.left = "50%";
    pesan.style.transform = "translate(-50%, -50%)";
    pesan.style.padding = "25px 40px";
    pesan.style.background = "rgba(37,99,235,0.95)";
    pesan.style.color = "white";
    pesan.style.fontSize = "24px";
    pesan.style.fontWeight = "bold";
    pesan.style.borderRadius = "20px";
    pesan.style.boxShadow = "0 0 30px rgba(37,99,235,.8)";
    pesan.style.zIndex = "9999";
    pesan.style.animation = "popup 0.5s ease";

    document.body.appendChild(pesan);

    setTimeout(() => {
        pesan.remove();
    }, 3000);
}

// tombol kembali ke atas

const btn = document.createElement("button");

btn.id = "topBtn";
btn.innerHTML = "↑";

document.body.appendChild(btn);

window.onscroll = function(){

    if(document.documentElement.scrollTop > 300){
        btn.style.display = "block";
    }else{
        btn.style.display = "none";
    }
};

btn.onclick = function(){

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

};

// efek muncul navbar saat scroll

window.addEventListener("scroll",()=>{

    const header = document.querySelector("header");

    if(window.scrollY > 50){
        header.style.background="rgba(15,23,42,0.9)";
    }else{
        header.style.background="rgba(0,0,0,0.25)";
    }

});