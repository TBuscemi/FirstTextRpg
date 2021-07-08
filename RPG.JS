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

// Global stats
let hero = hercules
let enemy = lion
let heroHp = hero.hp
let enemyHp = enemy.hp

startgame()

function startgame(){
    introToTheGameStory()

} // button will start the game


function introToTheGameStory(){
    alert("King Eurystheus giving you the 3 trials")
    startOfTheFirstQuestfight()
}// bring given the quest before the fight 

function startOfTheFirstQuestfight(){
    alert("the battle with the vicious Nemean Lion")
    while(heroHp || enemyHp > 0)
    heroAttackChoice(hero)
    whichEnemyAttack(enemy)
    if(heroHp <= 0){
        alert("You have died!")
        introToTheGameStory()
    }   
    else if(enemyHp = 0){
        alert("You killed it")
    } 
}// this will start the first fight










function heroAttackChoice (hero){
    heroAttackNames = hero.attackNames
    heroAttackBeingMade = prompt (heroAttackNames);
    switch(heroAttackBeingMade){
        case(heroAttackNames[0]):
            break;
        case(heroAttackNames[1]):
            break;
        case(heroAttackNames[2]):
            break;
        default:
            heroAttackChoice()
    }        
    console.log(heroAttackBeingMade)
    damageDone(hero)
    return heroAttackBeingMade
}

function damageDone (heroOrEnemy){
    let DoingDamage = heroOrEnemy.attackDamage
    damageDelt = Math.floor(Math.random() * DoingDamage)
    if(heroOrEnemy = hero){
    enemyhp = damageDelt - enemyHp
    }
    else if(heroOrEnemy == enemy){
    heroHp = damageDelt - heroHp
    }
    console.log(damageDelt)
    return  damageDelt
}




function whichEnemyAttack(enemy){
    enemy = enemy.attackNames
    if(enemy){
        let thisAttack = Math.floor(Math.random() *  enemy.length);
        let enemyAttackBeingMade = enemy[thisAttack]
        
    }
    console.log(enemyAttackBeingMade)
    damageDone(enemy)
    
} 



