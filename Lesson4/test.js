function logUserName() {
  return this.name;
}
const user = { name: "NguyenVanAn" };
console.log(logUserName(this=user));
