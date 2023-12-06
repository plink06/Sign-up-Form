const pass = document.querySelector("#pass");
const confirm= document.querySelector("#confirm");
const btn= document.querySelector("button-41");


function checkpasswordmatch(confirm, pass){
    if(confirm.innerText == pass.innerText){
        return;
    }else{
        pass.classlist.add("nigger")
        confirm.classlist.add("nigger")
    }
    console.log(confirm.innerText)
}
btn.addEventListener("click",checkpasswordmatch(confirm,pass))
