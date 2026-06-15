// bank bash game 2025

import { ScoresheetTemplate } from "/static/js/score.mjs";

export const bankbash = new ScoresheetTemplate()
	.createSection("Autonomous") // autonomous
		.addObjective({
			name: "Left Starting Area?",
			type: "dropdown",
			value: [0, 5],
			options: ["Didn't Leave", "Left"]
		})
		.addObjective({
			name: "Was TGI Placed?",
			type: "dropdown",
			value: [0, 5, 15],
			options: ["Didn't Place", "Placed in Opposing Key Area", "Placed in Bagging"]
		})
	.createSection("TeleOp") // teleop
		.addObjective({
			name: "Coins bagged",
			value: 2
		})
		.addObjective({
			name: "Gold Bars Scored (Base)",
			value: 4
		})
		.addObjective({
			name: "Gold Bars Scored (Vault)",
			value: 8
		})
	.createSection("End Game") // end game
		.addObjective({
			name: "Gold Blocks Scored (Base)",
			value: 4
		})
		.addObjective({
			name: "Gold Blocks Scored (Vault)",
			value: 8
		})
		.addObjective({
			name: "Gold Bars Scored (Shelf)",
			value: 12
		})
		.addObjective({
			name: "Gold Blocks Scored (Shelf)",
			value: 12
		})
		.addObjective({
			name: "Any Parking (Base Zone)?",
			type: "dropdown",
			value: [0, 5, 10],
			options: ["Didn't Park", "Somewhat Parked", "Parked"]
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