window.onload = function() {
    document.getElementById("Body").style.display = "flex";
}

function mostrar() {
    for(var i=1; i<5; i++){
        document.getElementById("t"+i).hidden=true;
    }
    var obj=event.target.dataset.nome;
    document.getElementById(obj).hidden=false;
}

function inicia(){
    for(var i=2; i<5; i++){
        document.getElementById("t"+i).hidden=true;
    }
    document.getElementById("PicMarcio").addEventListener("click",mostrar);
    document.getElementById("PicCorreia").addEventListener("click",mostrar);
    document.getElementById("PicMarine").addEventListener("click",mostrar);
    document.getElementById("PicKim").addEventListener("click",mostrar);

}

window.addEventListener("load",inicia);
