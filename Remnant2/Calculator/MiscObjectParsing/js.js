//Recall though that now we've added these placement ID's to everything, we can't do it again just by doing it like this
//In the future we need to ensure items are added with placement ID's that are AFTER the max ID present now.
//Come time, we'll need to first loop over all ID's, get the highest, then loop again and find items without ID's and increment from the max found prior.

//Put the data object here you want to modify
let kits = {
	"": {
		"usesConditional": {},
		"name": "",
		"slot": "Mod",
		"image": "/images/Remnant/clear.png",
		"desc": "",
		"stats": {},
		"tags": []
	},
	"Loathe The Weak": {
		"usesConditional": {},
		"name": "",
		"slot": "Mod",
		"image": "/brotherLibrary/secondaryModsImages/Loathe The Weak.png",
		"desc": "Rapidly fires volatile needles that explode after 1.5s dealing 90 explosive damage.",
		"stats": {},
		"tags": []
	},
	"Cube Room": {
		"usesConditional": {},
		"name": "",
		"slot": "Mod",
		"image": "/brotherLibrary/secondaryModsImages/Cube Room.png",
		"desc": "Conjures a 5m anomalous Cube Room which grants allies an increase of 50% Heat Decay Rate, reduces Heat Generation per round when firing weapons that Overheat by 15% and automatically generates missing reserve ammo per second. Lasts 15s.",
		"stats": {},
		"tags": []
	},
	"Deadpoint": {
		"usesConditional": {},
		"name": "",
		"slot": "Mod",
		"image": "/brotherLibrary/secondaryModsImages/Deadpoint.png",
		"desc": "Fires a cluster bomb which detonates on impact across 2.5m. Each cluster deals up to 150 damage per explosion within 3.5m.",
		"stats": {},
		"tags": []
	},
	"Nano Phase": {
		"usesConditional": {},
		"name": "",
		"slot": "Mod",
		"image": "/brotherLibrary/secondaryModsImages/Nano Phase.png",
		"desc": "Detonate active Nano-bots, each dealing 200 ACID damage plus an additional 50 ACID damage per Nano-bot detonated to enemies within 2m and applies CORRODED, dealing 100 damage over 10s per Nano-bot detonated.",
		"stats": {
			"outgoingStatus": 1,
			"outCORRODED": 1
		},
		"tags": []
	},
	"Death Brand": {
		"usesConditional": {},
		"name": "",
		"slot": "Mod",
		"image": "/brotherLibrary/secondaryModsImages/Death Brand.png",
		"desc": "Applies Death Brand to all non-allies within 25m, increasing incoming damage by 10%. Enemies killed while bearing the Death Brand leave behind an Echo which lasts 10s before returning to the Nightmare Realm. Echoes are drawn to any survivor who walks within 3m, increasing Weakspot Damage dealt by 10% for 10s.",
		"stats": {
			"AllDamage": 0.10
		},
		"tags": []
	},
	"Will of the Wisp": {
		"usesConditional": {},
		"name": "",
		"slot": "Mod",
		"image": "/brotherLibrary/secondaryModsImages/Will of the Wisp.png",
		"desc": "Launches a Wisp that uniquely seeks to one anchored primary fire bolt location. Bolts anchored to enemies deal 300 damage per Wisp. Bolds anchored to allies heal 10% Max Health per Wisp. Bolts are consumed when impacted by a Wisp.",
		"stats": {},
		"tags": []
	},
	"Cube Shield": {
		"usesConditional": {},
		"name": "",
		"slot": "Mod",
		"image": "/brotherLibrary/secondaryModsImages/Cube Shield.png",
		"desc": "Generates a Cube Shield with absorbs up to 1,500 damage from incoming enemy projectiles. Lasts 15s. Reactivating fires the Cube Shield with damages enemies as it travels. Damage is increased if the Cube Shield has absorbed enemy projectile damage before firing.",
		"stats": {},
		"tags": []
	},
	"Chaos Driver": {
		"usesConditional": {},
		"name": "",
		"slot": "Mod",
		"image": "/brotherLibrary/secondaryModsImages/Chaos Driver.png",
		"desc": "Drives electrified rods which tether to other rods within 10m. Tethers last 10s and deal 60 SHOCK damage per second. Targets take 150 SHOCK damage per second, and 25% damage per extra rod. Increases 1.5x if linked to another rod. Rods in the same target will not link.",
		"stats": {},
		"tags": []
	},
	"Explosive Shot": {
		"usesConditional": {},
		"name": "",
		"slot": "Mod",
		"image": "/brotherLibrary/secondaryModsImages/Explosive Shot.png",
		"desc": "Fires an explosive round that deals up to 465 FIRE damage within 9m and applies BURNING, dealing 300 FIRE damage over 5s.",
		"stats": {
			"outgoingStatus": 1,
			"outBURN": 1
		},
		"tags": []
	},
	"Screamer": {
		"usesConditional": {},
		"name": "",
		"slot": "Mod",
		"image": "/brotherLibrary/secondaryModsImages/Screamer.png",
		"desc": "Fires a high-powered rocket that deals up to 600 damage within 2.5m.",
		"stats": {},
		"tags": []
	},
	"Nano Swarm": {
		"usesConditional": {},
		"name": "",
		"slot": "Mod",
		"image": "/brotherLibrary/secondaryModsImages/Nano Swarm.png",
		"desc": "Unleash a swarm of Nanomachines that seek after enemies within 20 meters and repeatedly attack dealing 6 ACID damage per hit and applying CORRODED dealing 100 ACID damage over 10s. Lasts 15 seconds.",
		"stats": {
			"outgoingStatus": 1,
			"outCORRODED": 1
		},
		"tags": []
	},
	"Soul Brand": {
		"usesConditional": {},
		"name": "",
		"slot": "Mod",
		"image": "/brotherLibrary/secondaryModsImages/Soul Brand.png",
		"desc": "Applies Soul Brand to all enemies within 25m which lasts 25s. Enemies killed while bearing the Soul Brand leave behind an Echo which lasts 10s before returning to the Nightmare Realm. Echoes are drawn to any survivor who walks within 3m, granting 20% of Max Health on contact.",
		"stats": {},
		"tags": []
	},
	"Eulogy": {
		"usesConditional": {},
		"name": "",
		"slot": "Mod",
		"image": "/brotherLibrary/secondaryModsImages/Eulogy.png",
		"desc": "Recalls bolts which deal 90 damage when pulled from a target and when striking targets on their return. Recalled bolts grant 2% of Max Health. Recalled bolts can also overfill Sorrow up to +5. Any additional bolts will be returned to reserves.",
		"stats": {},
		"tags": []
	},
	"Big Bang": {
		"usesConditional": {},
		"name": "",
		"slot": "Mod",
		"image": "/brotherLibrary/secondaryModsImages/Big Bang.png",
		"desc": "Funnels all current Mod Charges into the next shot. Projectile deals 195 direct damage and 195 Explosive damage per Charge consumed in a 5m radius. Explosion applies 225 BURNING damage over 10s per Charge consumed. Additional Charges consumed increase all damage by 5%. Max 5 Charges.",
		"stats": {
			"outgoingStatus": 1,
			"outBURN": 1
		},
		"tags": []
	},
}

console.log("Starting file construction");
const fs = require("fs");

// function addPlacementID(kitss, digits = 3,prefix) {
//     Object.keys(kitss).forEach((key, index) => {
//         // let placementID = String(index).padStart(digits, '0');

//         // kitss[key].placementID = prefix + placementID;

//         delete kitss[key].atkSpeed;
//         delete kitss[key].chargeDMG;
//         delete kitss[key].chargeSpeed;
//         delete kitss[key].chargeCost;
//         delete kitss[key].specialCost;

// 		// if (kitss[key].abilities) {
// 		// 	kitss[key].abilities = addPlacementID(kitss[key].abilities, 1,"");
// 		// }

//     });
//     return kitss;
// }

let objectKeys = Object.keys(kits);

for (let item of objectKeys) {
	ref = kits[item];

	if (Object.keys(ref.usesConditional).length) {
		let conditionalKeys = Object.keys(ref.usesConditional);
		ref.usesConditional.keys = conditionalKeys
	}
}

// let numbers = 2;//How many digits to display, even with 0's padding the string
// let prefix = "";//What letter prefix to assign to a placement ID
// const updatedObjects = addPlacementID(kits, numbers,prefix);

fs.writeFileSync(`primary.json`, JSON.stringify(kits, null, 2));
console.log("Finished")