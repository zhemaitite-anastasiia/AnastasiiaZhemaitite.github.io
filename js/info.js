$(document).ready(function(){
  $("#computerSci").hide();
  $("#engineering").hide();
  $("#nonprofit").hide();


$("#computer").on("click", function() {
  $("#computerSci").show();
  $("#engineering").hide();
});

$("#engineer").on("click", function() {
  $("#engineering").show();
  $("#computerSci").hide();
});

//empty array to receive ajax response after ajax function is called
var ajaxResult = [];

// This .on("click") function will trigger the AJAX Call
$("#computer").on("click", function(event) {
// event.preventDefault() can be used to prevent an event's default behavior.
// Here, it prevents the submit button from trying to submit a form when clicked
event.preventDefault();
// Here we grab the text from the input box

// Here we construct our URL
var queryURL = "https://api.adzuna.com:443/v1/api/jobs/us/search/1?app_id=0310bdf8&app_key=f3e2162ac6c48176078a6a29ba3b9322&results_per_page=5&what_or=computer-science%2C%20information%2C%20internet-technology&sort_direction=down&sort_by=relevance&salary_min=30000&salary_max=150000&full_time=1"
// var queryURL = "https://https://api.adzuna.com:443/v1/api/jobs/us/top_companies?j=" + job + "US&location1=&"
// var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
//whenever the user clicks submit and ajax call is about to begin
//console log "hey this works!" and push the ajax response to variable ajaxResult
//ajax call to retrieve job&salary information
$.ajax({
url: queryURL,
method: "GET",
dataType: "json",
header: "application/json",
}).done(function(response) {
  var results = response.results
 for(i=0;i < results.length; i++){
  $("#company").append("<div class='company'>" +results[i].company.display_name + "</div>");
  $("#title").append("<div class='title'>" +results[i].title + "</div>");
  $("#SalaryMin").append("<div class='minSalary'>"+ "$" +results[i].salary_min + "</div>");
  $("#SalaryMax").append("<div class='maxSalary'>"+ "$" +results[i].salary_max + "</div>");
  $("#Location").append("<div class='location'>" +results[i].location.display_name + "</div>");
  }  
});
});

// This .on("click") function will trigger the AJAX Call
$("#engineer").on("click", function(event) {
// event.preventDefault() can be used to prevent an event's default behavior.
// Here, it prevents the submit button from trying to submit a form when clicked
event.preventDefault();

// Here we construct our URL
var queryURL = "https://api.adzuna.com:443/v1/api/jobs/us/search/1?app_id=0310bdf8&app_key=f3e2162ac6c48176078a6a29ba3b9322&results_per_page=5&what_or=engineering%2C%20manufacturing%2C%20transportation&sort_direction=down&sort_by=relevance&salary_min=30000&salary_max=150000&full_time=1"

//ajax call to retrieve job&salary information
$.ajax({
url: queryURL,
method: "GET",
dataType: "json",
header: "application/json",
}).done(function(response) {
  var results = response.results

 for(i=0;i < results.length; i++){
  $("#company2").append("<div class='company'>" +results[i].company.display_name + "</div>");
  $("#title2").append("<div class='title'>" +results[i].title + "</div>");
  $("#SalaryMin2").append("<div class='minSalary'>"+ "$" +results[i].salary_min + "</div>");
  $("#SalaryMax2").append("<div class='maxSalary'>"+ "$" +results[i].salary_max + "</div>");
  $("#Location2").append("<div class='location'>" +results[i].location.display_name + "</div>");
  }  
});
});
});