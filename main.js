// Create element
// const li  = document.createElement('li');

// // Add class
// li.className = 'collection-item';

// // Add id
// li.id = 'new-item';

// // Add attribute
// li.setAttribute('title', 'New Item');

// // Create text node and append


// // Create new link element
// const link = document.createElement('a');
// // Add classes
// link.className = 'delete-item secondary-content';
// // Add icon html
// link.innerHTML = '<i class="fa fa-remove"></i>';

// // Append link into li

// // Append li as child to ul
// document.querySelector('ul.collection').appendChild(li);








let iElement = document.createElement("i");



let inputValue = document.getElementById('task');

let addTaskBtn = document.querySelector('.addTaskBtn')

let ulList = document.querySelector("ul");

addTaskBtn.addEventListener("click", addTask);
function addTask(){
     

let iElement = document.createElement("i");
let aTag = document.createElement("a");
let editBtn = document.createElement("button")
editBtn.classList = "btn btn-primary mr-3"
editBtn.innerHTML = "Edit"
aTag.classList = "delete-item secondary-content"
  iElement.classList = "fa fa-remove"
   let list = document.createElement('li');
   list.classList = "collection-item";
   aTag.appendChild(editBtn);
   list.innerHTML = inputValue.value;
   list.appendChild(aTag);
   aTag.appendChild(iElement);
  
   ulList.appendChild(list);

   inputValue.value = "";

   

}



ulList.addEventListener("click", deleteList);

function deleteList(e){
       let target = e.target;
       if (target.tagName ==="I"){
          target.parentElement.parentElement.remove();
         console.log(target)
       }
  
}


let forLoopElements = document.querySelectorAll('.collection>li>a>i')
 const fafaIcon = Array.from(forLoopElements)


for (let i = 0; i < fafaIcon.length; i++) {
    fafaIcon[i].addEventListener('click',function(e){
         
        let target = e.target.parentElement.parentElement.remove();
   });

   iElement.addEventListener('click',function(e){

      let target = e.target;
        if  (target.tagName === "I"){
         target.parentElement.parentElement.remove();
           
        }
   });
   
   }

   function success(e){

      e.target.value ? addTaskBtn.disabled = false : addTaskBtn.disabled = true;

   }

   inputValue.addEventListener("keyup", success);
