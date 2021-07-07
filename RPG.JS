// // creature Pools
// let hero = "Hercules" ;
// let Lion = "Nemean Lion";
// let Hydra = "impossible nine-headed Lernaean Hydra";
// let Cerberus = "guard dog of the underworld";
// let hero = hercules;
// let enemy = lion
//HERO Info
let heroHp = 1;
let enemyHp= 1;
let heroPower = "";;
//MonsterHp
let lionHp = "";
let HydraHp = "";
let CerberusHp = "";

//Damage math   
let damageTaken = "";

function howMuchDamage (){
    let Power = Math.floor(Math.random() * attackArr.length);
    let damageTaken= attackArr[Power];
    
    console.log(damageTaken);
    return damageTaken;

}


//which attack

function whichAttack(enemy){
    enemy = enemy.attackNames
    if(enemy){
        let thisAttack = Math.floor(Math.random() *  enemy.length);
        let attackName = enemy[thisAttack]
        console.log(attackName)
    }

}


let hercules = {
    hp: 100,
    attackNames: ["stab", "slash", "slam"],
    attackArr: [1, 2, 3, 4, 5]
    

}
let Cerberus = {
    hp: 25,
    attackNames: ["Bite", "claw", "Flame Breath"],
    attackDamage: 4,
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


function heroChooseAttack(userAttackChoice){

}


let enemy = lion
console.log(whichAttack(enemy))




// function heroChooseAttack(){
//     userAttackChoice = prompt()
        
    
//         switch(userAttackChoice){
//             case 0:
                
//                 break;            
//             case 1:
//                 break;          
//             case 2:
//                 break;
                
//             }          
//     }
// }


// heroFight(hero)

// while(heroHp > 0 && enemyHp > 0){




