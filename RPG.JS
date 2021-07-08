// // creature Pools
// let hero = "Hercules" ;
// let Lion = "Nemean Lion";
// let Hydra = "impossible nine-headed Lernaean Hydra";
// let Cerberus = "guard dog of the underworld";
//HERO Info
//Damage math   
//which attack


let hercules = {
    hp: 100,
    attackNames: ["stab", "slash", "slam"],
    attackDamage: [20]
    

}
let Cerberus = {
    hp: 25,
    attackNames: ["Bite", "claw", "Flame Breath"],
    attackDamage: 10,
}

let lion = {
    hp: 25,
    attackNames: ["Bite", "pounce", "claw"],
    attackDamage: 10,
 

}

let Hydra = {
    hp: 25,
    attackNames: ["Head But", "Body Slam", "coil"],
    attackDamage:10,

}
let hero = hercules
let enemy = lion

function startgame(){
    introToTheGameStory

} // button will start the game


function introToTheGameStory(){
    alert("King Eurystheus giving you the 3 trials")

}// bring given the quest before the fight 

function startOfTheFirstQuestfight(){
    alert("the battle with the vicious Nemean Lion")

}// this will start the first fight

function heroAttackChoice (){
    hero = hero.attackNames
    HeroAttackBeingMade = prompt (hero);
    switch(HeroAttackBeingMade){
        case(hero[0]):
            break;
        case(hero[1]):
            break;
        case(hero[2]):
            break;
        default:
            heroAttackChoice()
    }        
    return heroAttackBeingMade
}

function damageDone (heroOrEnemy){
    let DoingDamage = heroOrEnemy.attackDamage
    damageDelt = Math.floor(Math.random() * DoingDamage)
    return  damageDelt
    
}

console.log(damageDone(hero))


function whichEnemyAttack(enemy){
    enemy = enemy.attackNames
    if(enemy){
        let thisAttack = Math.floor(Math.random() *  enemy.length);
        let enemyAttackBeingMade = enemy[thisAttack]
        console.log(enemyAttackBeingMade)
    }

}


