async function toggle() {
  var response = await fetch("https://randomuser.me/api/");
  var data = await response.json();
  var user = data.results[0];

  document.getElementById("user-img").src = user.picture.large;
  document.getElementById("username").innerText =
    user.name.first.toUpperCase() + " " + user.name.last.toUpperCase();
  document.getElementById("usergender").innerText = user.gender;
}
