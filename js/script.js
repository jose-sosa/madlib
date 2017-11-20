//JavaScript in form...
console.log("jose Sosa");
var animalInputBox = document.querySelector("#animal-name-input");
  console.log(animalInputBox);
var occupationInputBox = document.querySelector("#occupation-name-input");
  console.log(occupationInputBox);
var hobbyInputBox = document.querySelector("#hobby-name-input");
  console.log(hobbyInputBox);
var familyInputBox = document.querySelector("#family-name-input");
  console.log(familyInputBox);
var salaryInputBox = document.querySelector("#salary-name-input");
  console.log(salaryInputBox);
var ageInputBox = document.querySelector("#age-name-input");
  console.log(ageInputBox);
var submitInfo = document.querySelector("#submit-information");
  console.log(submitInfo);
var randomizeLib = document.querySelector("#randomize-lib");
  console.log(randomizeLib);
var output = document.querySelector("#output");
  console.log(output);
//
//
// if (animalInputBox && occupationInputBox && hobbyInputBox && familyInputBox && salaryInputBox && ageInputBox && submitInfo && randomizeLib && output) {
//   console.log("fubar");
//
//   submitInfo.addEventListener("click", function() {
//
//
//
//
//   var madLib = "There once was a " + animalInputBox.value;
//
//   madLib+= " who wanted to rule over the world. Unfortunately his aspirations were cut short because he was a fulltime ";
//
//   madLib+= occupationInputBox.value + ". When he wasn't working he spent his time playing ";
//
//   madLib+= hobbyInputBox.value ;
//
//   madLib+= ". One day his " + familyInputBox.value;
//
//   madLib+= " told him that he too had world domination plans. So, " +  animalInputBox.value;
//
//   madLib+= " decided to leave his " + salaryInputBox.value;
//
//   madLib+= " a year job to pursue world domination. It took him a while but being only " + ageInputBox.value;
//
//   madLib+= " years old he had all the time in the world. Eventually they ruled the world and were able to play ";
//
//   madLib+= hobbyInputBox.value + " all day long!";
//
//
//   output.textContent = madLib;
// });
// }


console.log("jose Sosa");
var spanName11 = document.querySelector("#span-name11");
  console.log(spanName11);
var spanName12 = document.querySelector("#span-name12");
    console.log(spanName12);
var spanOccupation = document.querySelector("#span-occupation");
  console.log(spanOccupation);
var spanHobby = document.querySelector("#span-hobby");
  console.log(spanHobby);
var spanFamily = document.querySelector("#span-family");
  console.log(spanFamily);
var spanSalary = document.querySelector("#span-salary");
  console.log(spanSalary);
var spanAge = document.querySelector("#span-age");
  console.log(spanAge);
var submitInfo = document.querySelector("#submit-information");
  console.log(submitInfo);
var randomizeLib = document.querySelector("#randomize-lib");
  console.log(randomizeLib);
var output = document.querySelector("#output");
  console.log(output);

if (spanName11 && spanOccupation && spanHobby && spanFamily && spanSalary && spanAge && submitInfo && randomizeLib && output) {
  console.log("fubar");

  submitInfo.addEventListener("click", function() {

  spanName11.textContent = animalInputBox.value;
  spanOccupation.textContent = occupationInputBox.value;
  spanHobby.textContent = hobbyInputBox.value;
  spanFamily.textContent = familyInputBox.value
  spanSalary.textContent = salaryInputBox.value;
  spanAge.textContent = ageInputBox.value;
  spanName12.textContent = animalInputBox.value;

});
}
