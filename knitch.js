var stitches = ["-", "/", "O", "T"];
var stitchCluster
var stitchChain

function newStitch(){
	stitchCluster = stitches[Math.round((Math.random() * 3))];
	stitchChain = Math.round((Math.random() * 34) + 1);
}

function reverse(s) {
  var o = '';
  for (var i = s.length - 1; i >= 0; i--)
    o += s[i];
  return o;
}

function getStitch() {
	var half = '';
	var full
  for (var y = 0; y <= 4; y++) {
	  newStitch();
	  for (var i = 0; i <= 100; i += stitchChain) {
		  half = half + stitchCluster;
		}
	}
	half = half.substring(0,20);
	full = half + reverse(half) + "<br>";
	return full;
}

for (var x = 0; x <= 4; x++) {
	document.write("<p>" +getStitch() + "</p>");
}