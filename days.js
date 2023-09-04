diffButton.addEventListener('click', getDayDiff);
 
function getDayDiff()
{
 let date1 = document.getElementById('firstdate').valueAsNumber;
 let date2 = document.getElementById('enddate').valueAsNumber;
 var result  = ((Math.floor((date2 - date1) / (1000 * 60 * 60 * 24) )));
 document.getElementById("result").innerHTML = result ;
}

diffButton.addEventListener('click', getNumberOfDays);
 
function getNumberOfDays()
{
 let date3 = document.getElementById('firstdate').valueAsNumber;
 let num = document.getElementById('tentacles').valueAsNumber;
 var result1 = new Date(date3);
 result1.setDate(result1.getDate() + num);
 var result2 = new Intl.DateTimeFormat("ru", {dateStyle: "short"}).format(result1);
 document.getElementById("result1").innerHTML = result2; 
}
