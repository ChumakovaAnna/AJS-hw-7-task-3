/*
* Основной класс для всех персонажей
*/
export default class Character {
  /**
   * @param  {} name - имя персонажа
   */
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.level = 1;
    // this.powerMode = false;
    this.amountPowerAttack = 0;
  }

  /*
  * Метод для повышения уровня персонажа
   */
  levelUp() {
    if (this.health > 0) {
      this.health = 100;
      this.level += 1;
      this.attack += this.attack * 0.2;
      this.defence += this.defence * 0.2;
    } else {
      throw new Error("Нельзя повысить level умершего");
    }
  }

  /*
  * Метод, вызываемый, когда происходит смерть персонажа
   */
  death() {
    this.health = 0;
  }

  getAttack() {
    this.amountPowerAttack += 1;
    if (this.powerMode && this.amountPowerAttack < 3) {
      console.log("Совершена PowerAttack");
    } else if (this.powerMode && this.amountPowerAttack === 3) {
      this.attack /= 2;
      this.defence /= 2;
      this.health /= 2;
      console.log("Режим PowerAttack выключен. Совершена обычная атака");
    } else {
      this.amountPowerAttack = 4;
      console.log("Совершена обычная атака");
    }
  }

  set powerMode(value) {
    if (value !== "ok") throw new Error("Режим PowerAttack включается значeнием ok");
    if (this.powerMode === "ok") return console.log("Вы уже включали режим PowerAttack");
    this.powerMode = "ok";
    // return console.log("Вы включили режим PowerAttack");
  }

  get powerMode() {
    if (!this.powerMode && this.amountPowerAttack === 0) {
      this.attack *= 2;
      this.defence *= 2;
      this.health *= 2;
    } else if (this.amountPowerAttack > 3) {
      return console.log("Вы еще используете режим PowerAttack");
    }
  }
}
