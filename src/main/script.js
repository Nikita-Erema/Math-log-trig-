class Character {
  constructor() {
    this.damage = 100;
    this.stun = false;
  }

  set attack(position) {
    this.percent = (position - 1) * 10
    this.damage = this.damage - (this.damage / 100) * this.percent
    if(this.stun) {   
        this.damage = Math.round(this.damage - Math.log2(position) * 5 )
    }
  }

  set stoned(stun) {
    this.stun = stun;
  }

  get stoned() {
    return this.stun;
  }
}

export class Daemon extends Character {
  constructor() {
    super();
  }
}

export class Magician extends Character {
  constructor() {
    super();
  }
}