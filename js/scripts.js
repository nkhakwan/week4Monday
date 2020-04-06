function Visits(){
  this.visit = [],
  this.visitNumber =0
}

Visits.prototype.addVisits = function(placeVisited){
this.visit.push(placeVisited);
this.visitNumber +=1;
Visits.id = this.visitNumber;
return this.visitNumber;
}

function Places(country, city, landMark, comments){
this.country,
this.city,
this.landMark,
this.comments
}

var visits = new Visits();

//// =========== Jquery section ================================
$(document).ready(function() {
  $("#vacations").submit(function(event){
     //alert("we are at the beginning of submit block");
     event.preventDefault();
     var country = $("#country").val();
     var city = $("#city").val();
     var landMark = $("#landMark").val();
     var comments = $("#comments").val();
     $("#country").val("");
     $("#city").val("");
     $("#landMark").val("");
     $("#comments").val("");
     alert(country + city + landMark+ comments);
     //var myNewPlaces = places ;
     //var result = stateMent(courseType, highSchool, javaScript, engineeringDegree, interest, aptitude);
     var newPlaces = new Places(country, city, landMark, comments);
     visits.addVisits(newPlaces);
     $("#output").text(visits);
     });
 });