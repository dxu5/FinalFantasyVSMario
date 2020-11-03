export function createBackgroundLayer(backgroundSheet) {
  readJSON(`./world.json`);
}
function readJSON(path) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", path, true);
  xhr.responseType = "blob";
  xhr.onload = function (e) {
    if (this.status == 200) {
      var file = new File([this.response], "temp");
      var fileReader = new FileReader();
      fileReader.addEventListener("load", function () {});
      fileReader.readAsText(file);
    }
  };
  xhr.send();
}
