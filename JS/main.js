var siteNameInput = document.getElementById("siteName")
var siteUrlInput = document.getElementById("siteUrl")
var submitButton = document.getElementById("Submit")
var mood = "create"
var temp;



var allWebSite = [] ;

if(localStorage.getItem("allWebSite") != null){

  allWebSite = JSON.parse(localStorage.getItem("allWebSite")) ;
}




displayWebsite()


function getSubmit(){
  webSite = {
    siteName : siteNameInput.value,
    siteUrl : siteUrlInput.value,
  }

  if(mood === "create"){
    allWebSite.push(webSite);
  }else{
    allWebSite[temp] = webSite;
    mood = "create"
    document.getElementById("Submit").innerHTML = "Submit";
  }
  
  localStorage.setItem("allWebSite", JSON.stringify(allWebSite));
  clearWebsite();
  console.log(allWebSite);
  displayWebsite();
}


function clearWebsite(){
  siteNameInput.value = "";
  siteUrlInput.value = "";
}

function displayWebsite(){

  var cartona = "";

  for(var i = 0 ; i < allWebSite.length ; i++ ){
    
  cartona += `

  <tr>
    <td>${i}</td>
    <td>${allWebSite[i].siteName}</td>
    <td><a target="_blank" href="${allWebSite[i].siteUrl}"><button onclick="visitWebsite()"type="button" class="btn btn-success ">Visit</button></a></td>
    <td><button onclick="DeleteWebsite(${i})"type="button" class="btn btn-danger">Delete</button></td>
    <td><button onclick="UpdateWebsite(${i})" type="button" class="btn btn-primary">Update</button></td>
  </tr>
  ` 
  }
  document.getElementById("tbInformation").innerHTML = cartona ; 
}

function visitWebsite(){

}

function DeleteWebsite(indx){
  allWebSite.splice(indx,1)
  displayWebsite()
}

function UpdateWebsite(i){
  siteNameInput.value = allWebSite[i].siteName;
  siteUrlInput.value = allWebSite[i].siteUrl;
  document.getElementById("Submit").innerHTML = "Update";
  mood = "update";
  temp = i ;
  scroll({
    top : 0,
    behavior : "smooth", 
  })
}






