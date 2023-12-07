
const btn = document.querySelector(".button-41");



btn.addEventListener("click",function(){
    const pass = document.querySelector(".pas");
    const confirm = document.querySelector(".conf");
    if(pass.value=== confirm.value){
        console.log("your passwords match wooo!!!");
    }else{
        console.log(pass.value);
        console.log(confirm.value);
        pass.classList.add("error");
        confirm.classList.add("error");
    }
})
