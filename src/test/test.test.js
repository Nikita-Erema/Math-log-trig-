import { Magician, Daemon } from "../main/script";
test('test Magician',() => {
    const mage = new Magician
    mage.attack = 3
    expect(mage.damage).toBe(80)
})
test('test Magician 2',() => {
    const mage = new Magician
    mage.attack = 1
    expect(mage.damage).toBe(100)
})
test('test Magician and Daemons',() => {
    const mage = new Magician
    const demon = new Daemon
    demon.stoned = true
    mage.attack = 4
    expect(mage.damage).toBe(60)
})
test('test Daemon',() => {
    const demon = new Daemon
    demon.attack = 3
    expect(demon.damage).toBe(80)
})
test('test Daemon 2',() => {
    const demon = new Daemon
    demon.attack = 1
    expect(demon.damage).toBe(100)
})
test('test Daemons and Magician',() => {
    const mage = new Magician
    const demon = new Daemon
    mage.stoned = true
    demon.attack = 4
    expect(demon.damage).toBe(60)
})