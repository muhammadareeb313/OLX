
let load=()=>{
   var a = document.getElementById("diva")
a.style.display="block"

}
let form=()=>{
       var name1= document.getElementById('name').value.length
       // console.log(name1)
       if(name1 === 0){
           alert("Please enter your name")
           return false
       }
       var age= document.getElementById('age').value.length
        if(age === 0){
        alert("Please enter your Age")
       return false
      }
         var roll= document.getElementById('roll').value.length
         if(roll === 0){
           alert("Please enter your roll no")
          return false
      }
   
   var radio=document.getElementsByName('radio')
   for(i=0;i<radio.length;i++){
       if(radio[i].checked){
           var checkbox=document.getElementsByName('checkbox')
           for(i=0;i<checkbox.length;i++){
               if(checkbox[i].checked){
               return true
               }
           }
           alert("Please select any one skill")
           return false
       }
   }
   
   alert("Please select any one qualification")
   return false
   
   
   }
   let login=()=>{
      window.location.href="form.html"
   }
   