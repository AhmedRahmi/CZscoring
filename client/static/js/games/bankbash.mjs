// bank bash game 2025

import { ScoresheetTemplate } from "/static/js/score.mjs";

export const bankbash = new ScoresheetTemplate()
	.createSection("Autonomous") // autonomous
		.addObjective({
			name: "Left Starting Area?",
			type: "dropdown",
			value: [0, 2],
			options: ["Didn't Leave", "Left"]
		})
		.addObjective({
			name: "Was TGI Placed?",
			type: "dropdown",
			value: [0, 10],
			options: ["Didn't Place", "Placed in Bagging"]
		})
	.createSection("TeleOp") // teleop
		.addObjective({
			name: "Silver Coins bagged",
			value: 4
		})
		.addObjective({
			name: "Gold Coins bagged",
			value: 8
		})
		.addObjective({
			name: "Gold Bars bagged",
			value: 12
		})
	.createSection("End Game") // end game
		.addObjective({
			name: "Gold Blocks bagged",
			value: 30
		})
		.addObjective({
			name: "Any Parking (Base Zone)?",
			type: "dropdown",
			value: [0, 2, 5],
			options: ["Didn't Park", "Partially Parked", "Fully Parked"]
		})
	.createSection("Penalties (You must talk with your fellow scorer for these)")
		.addObjective({
			name: "Opposing Alliance Minor Penalties",
			value: 5
		})
		.addObjective({
			name: "Opposing Alliance Major Penalties",
			value: 15
		})