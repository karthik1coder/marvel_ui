images=[];
let i;
function display(i)
{
    images.splice(i,1);
}

function start()
{
document.getElementById("pictures").innerHTML="<div>"
for(i=0; i<20; i++)
{
let a="<div class=pic onclick=display("+i+")>"+"</div>";
document.getElementById("pictures").innerHTML+=a;
}
document.getElementById("pictures").innerHTML+="</div>";


}

    
start();



