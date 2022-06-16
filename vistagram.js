function adduser()
{
    username = document.getElementById("user_name").value;
    localStorage.setItem("user name",username);
    window.location = "vistagram_room.html";
}