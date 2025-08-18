export class Daemon {
    constructor() {
        this.damage = 100 
    }
    set attack(position) {
        this.percent = (position - 1) * 10
        this.damage = this.damage - (this.damage / 100) * this.percent
        if(Daemon.stun) {   
            this.damage = Math.round(this.damage - Math.log2(position) * 5 )
        }
    }
    set stoned(stun) {
        Magician.stun = stun
    }
}
export class Magician extends Daemon {
    constructor() {
        super()
    }
    set attack(position) {
        this.percent = (position - 1) * 10
        this.damage = this.damage - (this.damage / 100) * this.percent
        if(Magician.stun) {   
            this.damage = Math.round(this.damage - Math.log2(position) * 5 )
        }
    }
    set stoned(stun) {
        Daemon.stun = stun
    }
}