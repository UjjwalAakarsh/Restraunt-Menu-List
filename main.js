menu=[]
function additem(){
    item=document.getElementById("item_input").value;
    menu.push(item)
    document.getElementById("output").innerHTML=menu
    document.getElementById("item_input").value=""
}