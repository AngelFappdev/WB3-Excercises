let extraPerDay = 0;

let tollTag = document.getElementById("tollTag").checked;// if the checkbox is checked then this is what follows through
if (tollTag) {
 extraPerDay += 3.95;
}
let gps = document.getElementById("gps").checked;// same over here 
if (gps) {
 extraPerDay += 4.95;
}
let roadside = document.getElementById("roadside").checked; // same over here. To get a checkbox you <input type ="checkbox">
if (roadside) {
 extraPerDay += 2.95;
}