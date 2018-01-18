function getBrand(carDiv) {
  // return carDiv.find("h2").text();
  return carDiv.children("h2").text();
}

function getModel(carDiv) {
  // return carDiv.find("p").first().text();
  return carDiv.children("p").first().text()
}

function getYearDate(carDiv) {
	// return carDiv.find("p").last().text();
  return carDiv.children("p").last().text();
}