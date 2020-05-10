import Daemon from "./types/daemon";

console.log("worked");

const user = new Daemon("Oleg");
user.levelUp();
console.log(user);
