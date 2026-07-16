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
			value: [0, 10],
			options: ["Didn't Place", "Placed in Bagging"]
		})
	.createSection("TeleOp") // teleop
		.addObjective({
			name: "Silver Coins bagged",
			value: 6
		})
		.addObjective({
			name: "Gold Coins bagged",
			value: 10
		})
		.addObjective({
			name: "Gold Bars bagged",
			value: 16
		})
	.createSection("End Game") // end game
		.addObjective({
			name: "Gold Blocks bagged",
			value: 25
		})
		.addObjective({
			name: "Any Parking (Base Zone)?",
			type: "dropdown",
			value: [0, 3, 10],
			options: ["Didn't Park", "Partially Parked", "Fully Parked"]
		})
		.createSection("Tagged Goods (You must talk with your fellow scorer for these)") // teleop
		.addObjective({
			name: "[OTHER TEAM] Tagged Coins Bagged",
			value: 8
		})
		.addObjective({
			name: "[OTHER TEAM] Tagged Gold Bars Bagged",
			value: 12
		})
		.addObjective({
			name: "Tagged Coins Left in Bagging",
			value: 8
		})
		.addObjective({
			name: "Tagged Bars Left in Bagging",
			value: 12
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