employeeDetails={}
function add(){
    if(id.value&&names.value&&desgn.value&&salary.value){
        employeeDetails.id=id.value,
        employeeDetails.name=names.value,
        employeeDetails.desgn=desgn.value,
        employeeDetails.salary=salary.value
        window.location="showEmp.html"
        //to store permanently
        localStorage.setItem("employeeDetails",JSON.stringify(employeeDetails))
    
    }else{
        alert("please enter full details")
    }

}
//to display in showEmp page
if(localStorage.getItem("employeeDetails")){
    var displayDetails=JSON.parse(localStorage.getItem("employeeDetails"))
    display.innerHTML=`<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${displayDetails.name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">ID:${displayDetails.id}</h6>
      <h6 class="card-subtitle mb-2 text-muted">ID:${displayDetails.desgn}</h6>
      <h6 class="card-subtitle mb-2 text-muted">ID:${displayDetails.salary}</h6>

      
    </div>
  </div>`
    
    
    console.log(displayDetails)

}else{
    display.innerHTML="nothing to dispaly"
}