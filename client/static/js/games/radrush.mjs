// rad rush game 2025

import { ScoresheetTemplate } from "/static/js/score.mjs";

export const radrush = new ScoresheetTemplate()
	.createSection("Autonomous") // autonomous
		.addObjective({
			name: "Any Parking With Custom (Maintenance Zone)?",
			type: "dropdown",
			value: [0, 5],
			options: ["Didn't Park", "Parked"]
		})
		.addObjective({
			name: "Any Parking Without Custom (Power Zone)?",
			type: "dropdown",
			value: [0, 10],
			options: ["Didn't Park", "Parked"]
		})
		.addObjective({
			name: "Custom 1?",
			type: "checkbox",
			value: 15
			})
		.addObjective({
			name: "Custom 2?",
			type: "checkbox",
			value: 25
			})
		.addObjective({
			name: "Custom 3?",
			type: "checkbox",
			value: 30
			})
	.createSection("TeleOp") // teleop
		.addObjective({
			name: "Rod + Samples (Power/Waste)",
			value: 1
		})
		.addObjective({
			name: "Single Cell (Waste)",
			value: 10
		})
		.addObjective({
			name: "Single Cell (Power)",
			value: 20
		})
		.addObjective({
			name: "Double Cell (Waste)",
			value: 15
		})
		.addObjective({
			name: "Double Cell (Power)",
			value: 30
		})
	.createSection("End Game") // end game
		.addObjective({
			name: "Complete Cell (Waste)",
			type: "checkbox",
			value: 30
		})
		.addObjective({
			name: "Complete Cell (Power)",
			type: "checkbox",
			value: 40
		})
		.addObjective({
			name: "Any Parking (Maintenance Zone)?",
			type: "dropdown",
			value: [0, 5, 10],
			options: ["Didn't Park", "Somewhat Parked", "Parked"]
		})
	.createSection("Penalties")
		.addObjective({
			name: "Opposing Alliance Minor Penalties",
			value: 5
		})
		.addObjective({
			name: "Opposing Alliance Major Penalties",
			value: 10
		})