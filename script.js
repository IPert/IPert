*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial, sans-serif;
}

body{
    height:100vh;
    overflow:hidden;
    color:white;
}

.bg{
    position:fixed;
    width:100%;
    height:100%;

    background:
    linear-gradient(
        rgba(0,0,0,0.6),
        rgba(0,0,0,0.9)
    ),
    url("background.jpg");

    background-size:cover;
    background-position:center;
}


.card{

    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);

    width:350px;
    padding:35px;

    text-align:center;

    background:rgba(255,255,255,0.1);
    backdrop-filter:blur(15px);

    border-radius:25px;

}


.profile{

    width:120px;
    height:120px;

    border-radius:50%;
    object-fit:cover;

    border:3px solid white;

}


h1{
    font-size:40px;
    margin-top:20px;
}


p{
    opacity:0.7;
    margin:10px;
}


.buttons a{

    display:block;

    margin:15px 0;

    padding:15px;

    background:rgba(255,255,255,0.15);

    color:white;

    text-decoration:none;

    border-radius:15px;

    transition:0.3s;

}


.buttons a:hover{

    background:white;

    color:black;

    transform:scale(1.05);

}
