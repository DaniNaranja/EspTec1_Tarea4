function after1(){
    document.getElementById('image1')
    .src='https://www.boredpanda.com/blog/wp-content/uploads/2020/07/shiba-cheems-meme-dog-balltze-5-5f030ec3cf823__700.jpg';
}

function after2(){
    document.getElementById('parrafo2')
    .innerHTML="Este es un parrafo modificado."
}

function after3(){
    const tituloAves = document.getElementById('aves-titulo');
    tituloAves.style.backgroundColor = '#B2DAFA';  
    tituloAves.style.fontSize= "3rem"            
}

function imprimir(){
    var email= document.getElementById('email');
    var name= document.getElementById('name');
    var edad= document.getElementById('edad');
    var ciudad= document.getElementById('ciudad');
    var pregunta1= document.getElementById('pregunta1');

    console.log(email.value);
    console.log(name.value);
    console.log(edad.value);
    console.log(ciudad.value);
    console.log(pregunta1.value);
}