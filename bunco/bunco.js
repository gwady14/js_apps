var round = 1;

//create team class
function Team (teamName, member1, member2, score) {
	this.teamName = teamName;
	this.member1 = member1;
	this.member2 = member2;
	this.score = score;
};

//create teams
var us = new Team("Team one", "Grady", "Amber", 0);
var them = new Team("Team two", "Patty", "Stacy", 0);

//randomizing function
function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

//act of rolling
function roll (team, otherTeam, target) {
	var die1 = 0;
	var die2 = 0;
	var die3 = 0;
	
	for (var i = 1; i < 100; i++) { //repeats loop until 'miss'
		if (team.score < 21 && otherTeam.score < 21) {
			console.log("Roll: " + i);
			die1 = Math.round(getRandom(1, 6));
			die2 = Math.round(getRandom(1, 6));
			die3 = Math.round(getRandom(1, 6));
			console.log("die 1: " + die1);
			console.log("die 2: " + die2);
			console.log("die 3: " + die3);
		} else {
			console.log("The game is over!!! " + team.teamName + " wins!!!");
			break;
		}
		if (die1 == target) {
			team.score += 1;
			console.log(team.teamName + " score: " + team.score);
		}
		if (die2 == target) {
			team.score += 1;
			console.log(team.teamName + " score: " + team.score);
		}
		if (die3 == target) {
			team.score += 1;
			console.log(team.teamName + " score: " + team.score);
		}
		if (die1 == target && die2 == target && die3 == target) {
			console.log("Buuuuuuuuunco! The game is over.");
			team.score += 21;
			console.log(team.teamName + " score: " + team.score);
		}
		if (die1 == die2 && die1 == die3) {
			console.log("Mini-bunco! Five more points");
			team.score += 5;
			console.log(team.teamName + " score: " + team.score);
		}
		if (die1 != target && die2 != target && die3 != target) {
			console.log("Nothing!");
			console.log(team.teamName + " score: " + team.score);
			console.log("************************************");
			break;
		} 
	} 
};

function gamePlay(team1, team2){
	for (var j = 0; j < 100; j++) {
		if (team1.score < 21 && team2.score < 21) {
			console.log(us.member1 + " rolls: ");
			roll(us, them, round);
		}
		if (team1.score < 21 && team2.score < 21) {	
			console.log(them.member1 + " rolls: ");
			roll(them, us, round);
		}
		if (team1.score < 21 && team2.score < 21) {
			console.log(us.member2 + " rolls: ");
			roll(us, them, round);
		}
		if (team1.score < 21 && team2.score < 21) {
			console.log(them.member2 + " rolls: ");
			roll(them, us, round);
		}
		console.log("************************************");
		console.log("Score Overview: ");
		console.log(us.teamName + " score: " + us.score);
		console.log(them.teamName + " score: " + them.score);
		console.log("************************************");
		console.log("************************************");
		if (team1.score >= 21 || team2.score >= 21) {
			break;
		}
	}
};

gamePlay(us, them);
console.log("The game is over! Thanks for playing.");


