let myForm=document.querySelector('form');
let name=document.getElementById('name');
let docID=document.getElementById('docID');
let dept=document.getElementById('dept');
let exp=document.getElementById('exp');
let email=document.getElementById('email');
let mbl=document.getElementById('mbl');
let tbody=document.querySelector('tbody');


let alldata=[];

 myForm.addEventListener('submit',function(e){

    e.preventDefault(e);
   let data={};

   data.input1=name.value;
   data.input2=docID.value;
   data.input3=dept.value;
   data.input4=exp.value;
   data.input5=email.value;
   data.input6=mbl.value;

    alldata.push(data);
    

    

    tbody.innerHTML=null;

alldata.map((ele)=>{

   let row=document.createElement('tr');
   let td1=document.createElement('td');
   let td2 =document.createElement('td');
   let td3=document.createElement('td');
   let td4=document.createElement('td');
   let td5=document.createElement('td');
   let td6=document.createElement('td');
   let td7=document.createElement('td');
   let td8=document.createElement('td');
  
    
   td1.innerText=ele.input1;
   td2.innerText=ele.input2;
   td3.innerText=ele.input3;
   td4.innerText=ele.input4;
   td5.innerText=ele.input5;
   td6.innerText=ele.input6;
   
   if((Number)(td4.innerText)>5)
   {
    td7.innerText="Experience";
   }
   if((Number)(td4.innerText)<=1)
   {
    td7.innerText="Fresher";
   }
   if((Number)(td4.innerText)>=2 && (Number)(td4.innerText)<=5)
   {
    td7.innerText="Junior";
   }
    
   td8.innerText="Delete";
   

   
   
   row.append(td1,td2,td3,td4,td5,td6,td7,td8);
   tbody.append(row);

   
   





})

 
 
 
 
 
 })


 
 