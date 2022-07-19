const guest = document.getElementById("guest");
const user = document.getElementById("user");

export function toggle() {
  if ((localStorage === false)) {
    guest.style.display = "none";
    user.style.display = "block";
  } else {
    guest.style.display = "block";
    user.style.display = "none";
  }
}
