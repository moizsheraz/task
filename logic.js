console.log("Iam back")
let name1=document.getElementById('EnterName');
let studentname=document.getElementById('studentname')
let submit=document.getElementById('submit')
let btn1=document.getElementById('btn1');
let btn2=document.getElementById('btn2');
let view=document.getElementById('view');
let history=document.getElementById('History');
let fetch=document.getElementById('fetch');
let fetch1=document.getElementById('fetch1');
let status1;
console.log(submit)

btn1.addEventListener('click',function(){
    btn1.disabled = true;
    alert("Attendence Marked!")
    status1="Present";

})
btn2.addEventListener('click',function(){
    btn2.disabled = true;
    alert("Application Submitted For leave")
    status1="Leave";
})
submit.addEventListener('click',function(){
    studentname.innerText =name1.value;

    submit.disabled = true;
    let  Student_History = [{name:name1.value,Status:status1,date:new Date()}];
    localStorage.setItem('StudentHistory', JSON.stringify(Student_History))
   let storedArray = JSON.parse(localStorage.getItem('StudentHistory'));
console.log(storedArray)
name1.value="";
})


view.addEventListener('click',()=>{
    let storedArray = JSON.parse(localStorage.getItem('StudentHistory'));
storedArray.forEach(element => {
   history.innerHTML=`
  Name: <h2>${element.name}</h2>
   Status: <h2>${element.Status}</h2>
  Date: <h2>${element.date}</h2>

   `
});

})


fetch.addEventListener('click', () => {
  let storedArray = JSON.parse(localStorage.getItem('StudentHistory'));
  let html = '';
  storedArray.forEach(element => {
    html += `
      Name: <h2>${element.name}</h2>
      Status: <h2>${element.Status}</h2>
      <br>
    `;
  });
  fetch1.innerHTML = html;
});

