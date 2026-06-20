var users = [
  {
    name: "JOHN LEAN",
    gender: "male",
    image: "../images/john.png",
  },
  {
    name: "JANE DOE",
    gender: "female",
    image: "../images/jane.png",
  },
];

var curId = 0;

function toggle() {
  curId = (curId + 1) % 2;

  var user = users[curId];
  document.getElementById("user-img").src = user.image;
  document.getElementById("username").innerText = user.name;
  document.getElementById("usergender").innerText = user.gender;
}
