body{
    background:black;
    color:white;
    font-family:Arial;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
}

.card{
    text-align:center;
    background:#222;
    padding:40px;
    border-radius:20px;
}

a{
    display:block;
    margin:15px;
    padding:15px;
    background:#333;
    color:white;
    text-decoration:none;
    border-radius:10px;
}

const leaves=document.getElementById("leaves");

for(let i=0;i<18;i++){

let leaf=document.createElement("div");

leaf.className="leaf";

leaf.style.left=Math.random()100+"%";

leaf.style.animationDuration=
10+Math.random()12+"s";

leaf.style.animationDelay=
Math.random()*15+"s";

leaf.style.transform=
scale(${0.5+Math.random()});

leaves.appendChild(leaf);

}
