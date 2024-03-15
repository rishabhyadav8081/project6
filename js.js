const input= document.querySelector("#input");
const todo = document.querySelector("#todo");
console.log(input);

input.addEventListener(
    'keyup',
    function (event){
        if(event.key == "Enter"){
            addtodo(this.value);
            this.value =""
        };
    }
)
const addtodo = (item)=>{
     const li = document.createElement("li");
     li.innerHTML = `
     <li><i>${item}</i><button>c</button></li> 
     `;
     li.addEventListener('click',
     function(){
        this.classList.toggle("done");
     })
     li.querySelector("button").addEventListener('click',
     function(){
        li.remove();
     })
     todo.appendChild(li)
}