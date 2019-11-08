"use strict";

function openWindow(meal) {
  newWindow = window.open("", null, "height=600,width=900,status=yes,toolbar=no,menubar=no,location=no");
  newWindow.document.write("<head>");
  newWindow.document.write("<meta http-equiv='" + "X-UA-Compatible" + "' content='" + "ie=edge" + "' />");
  newWindow.document.write("<title>Meal Generator</title>");
  newWindow.document.write("<link rel='" + "stylesheet" + "' type='" + "text/css" + "' href='" + "index.css" + "' />");
  newWindow.document.write("</head>");
  newWindow.document.write("<body>");
  newWindow.document.write("<iframe id='" + "vi" + "' src='" + meal.video + "'> </iframe>");
  newWindow.document.write("</body>");
}