// Initialize the map
var map = L.map("map").setView([17.446289443590427, 78.34805812026025], 17); // Adjust the center coordinates

// Load OpenStreetMap tiles
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
}).addTo(map);

// Define an array of coordinates for locations 1 to 12
var locations = [
  [17.446086260182593, 78.34872418631379], // 1
  [17.446378129738132, 78.34833928984249], // 2
  [17.44641175523294, 78.3482941737726], // 3
  [17.446582572650822, 78.34805731440564], // 4
  [17.446617543126074, 78.34801360821294], // 5
  [17.44683274590693, 78.34771894388366], // 6
  [17.446385707646918, 78.34730274782102], // 7
  [17.445957525241802, 78.347849354568], // 8
  [17.445163577802912, 78.3471560265109], // 9
  [17.44483599520428, 78.3475246987447], // 10
  [17.445635628155138, 78.34831397282788], // 11
  [17.446086260182593, 78.34872418631379], // 12
];

// Create a polyline to connect locations 1 to 12 with a blue line
var polyline = L.polyline(locations, { color: "blue" }).addTo(map);
// Create a polygon to enclose locations 1 to 12
var polygon = L.polygon(locations, { color: "blue" }).addTo(map);

// Add markers for locations 1 to 12
for (var i = 0; i < locations.length; i++) {
  var number = i + 1;
  var marker = L.marker(locations[i], { icon: redIcon }).addTo(map);
  marker
    .bindPopup("Location " + number)
    .on("mouseenter", function () {
      this.openPopup();
    })
    .on("mouseleave", function () {
      this.closePopup();
    });
}

// Define a custom red marker icon
var redIcon = L.divIcon({
  className: "custom-icon",
  html: '<div class="marker-red"></div>',
  iconSize: [20, 20],
});

// Function to show data according to the parameter
function showParameterData() {
  // Add your logic here
  // For example, you can fetch and display data based on a specific parameter
  console.log("Showing data by parameter");
}

// Function to show total data of Node
function showTotal_NodeData() {
  openOutdoorAQTotal_DataFile();
  console.log("Showing total data");
}

// Function to show total data of Node
function showBy_ParameterData() {
  openOutdoorAQBy_ParameterFile();
  console.log("Showing total data");
}

// Function to open the Outdoor Air Quality Data Visualization HTML file
function openOutdoorAQTotal_DataFile() {
  const outdoorAQDataFile = "Total_Data.html";
  const link = document.createElement("a");
  link.href = outdoorAQDataFile;
  link.target = "_blank"; // Open in a new tab or window
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Function to open the Outdoor Air Quality Data Visualization HTML file
function openOutdoorAQBy_ParameterFile() {
  const outdoorAQDataFile = "By_Parameter.html";
  const link = document.createElement("a");
  link.href = outdoorAQDataFile;
  link.target = "_blank"; // Open in a new tab or window
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
