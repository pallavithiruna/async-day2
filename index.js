var con=document.createElement("div");
con.setAttribute("class","container");
var row= document.createElement("div");
row.setAttribute("class","row");
     
var title=document.createElement('h1');
title.setAttribute("id","title");
title.setAttribute("class","text-center");
title.innerHTML="This is Rest countries task"



var res=fetch("https://restcountries.com/v2/all")
.then((data)=> data.json())
.then((data1)=>print(data1));
function print(data1)
{
     for(var i=0;i<data1.length;i++)
    {        
        row.innerHTML +=`<div class="col-md-4  col-sm-6 col-lg-4 col-xl-4">
        <div class="card h-100 border-info mb-3" style="max-width: 18rem;">
        <div class="card-header">Country Name:${data1[i].name}</div>
        <img src=${data1[i].flag} class="card-img-top" alt=${data1[i].name} width=100px height=100px>
        <div class="card-body">
        <h5 class="card-title">Capital:${data1[i].capital}</h5>
        <h5 class="card-title">Countrycode:${data1[i].alpha3Code}</h5>
        <div class="card-text">Region:${data1[i].region}</div>
        <div class="card-text">Native Name:${data1[i].nativeName}</div>
        <div class="card-text">Population:${data1[i].population}</div>
        <button onclick="foo(${data1[i].latlng[0]},${data1[i].latlng[1]})">Click here for weather</button>
        </div>
      </div>`
      } 
}
async function foo(lat,lon)
{
let res=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=17dc4d98276652dc2112615c60f4f346`);
let res1= await res.json();
alert(`Temp:${res1.main.temp}`);
}
con.append(title,row);
document.body.append(con);
