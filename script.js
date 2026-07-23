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


.background{

    position:fixed;

    width:100%;
    height:100%;

    background:
    linear-gradient(
        rgba(0,0,0,0.7),
        rgba(0,0,0,0.9)
    );

    background-color:#111;

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

    margin:auto;

    display:flex;

    justify-content:center;

    align-items:center;

    border-radius:50%;

    background:white;

    color:black;

    font-size:40px;

    font-weight:bold;

}


h1{

    margin-top:20px;

    font-size:40px;

}


p{

    margin:10px;

    opacity:0.7;

}


a{

    display:block;

    margin:15px 0;

    padding:15px;

    border-radius:15px;

    background:rgba(255,255,255,0.15);

    color:white;

    text-decoration:none;

}


a:hover{

    background:white;

    color:black;

}
