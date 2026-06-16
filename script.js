const menu =
document.getElementById("menuBtn");


const sidebar =
document.getElementById("sidebar");


menu.onclick=function(){

sidebar.classList.add("open");

}



document.getElementById("closeBtn")
.onclick=function(){

sidebar.classList.remove("open");

}





const products=[


{

name:"透明な器",

artist:"山田太郎",

price:"¥30,000",

img:"https://picsum.photos/500",

text:
"光と金属をテーマにした作品"


},


{

name:"夜の花",

artist:"佐藤花子",

price:"¥50,000",

img:"https://picsum.photos/501",

text:
"夜を表現した作品"

}


]





function openProduct(id){


let p=products[id];


document.getElementById("shop")
.style.display="none";


document.getElementById("detail")
.style.display="block";



detailImg.src=p.img;


detailName.innerHTML=p.name;


detailArtist.innerHTML=
p.artist;


detailPrice.innerHTML=
p.price;


detailText.innerHTML=
p.text;



}





cartBtn.onclick=function(){

alert(
"カートページ"
);

}
