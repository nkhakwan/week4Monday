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
this.country = country;
this.city = city;
this.landMark = landMark;
this.comments = comments;
}

//newplaces(country)


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
     $("#city").val("");
     $("#landMark").val("");
     $("#comments").val("");
     //alert(country + city + landMark+ comments);
     //var myNewPlaces = places ;
     //var result = stateMent(courseType, highSchool, javaScript, engineeringDegree, interest, aptitude);
     var newPlaces = new Places(country, city, landMark, comments);
     alert(newPlaces.country);
     alert(newPlaces);
     visits.addVisits(newPlaces);
     $("#output").text(visits.country);
     });
 });