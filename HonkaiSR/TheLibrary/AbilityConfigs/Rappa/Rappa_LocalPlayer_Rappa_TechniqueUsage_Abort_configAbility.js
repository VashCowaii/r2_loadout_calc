const configAbility = {
  "fileName": "Rappa_LocalPlayer_Rappa_TechniqueUsage_Abort",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Submit Technique Use",
    {
      "name": "Remove Overworld Entity",
      "summon": {
        "name": "Add Target by Summoned Units",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "summonID": 13171
      }
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": null,
      "overworldID": 131702
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1835153663\">ADV_Modifier_Maze_Rappa_HolyShield</a>"
    }
  ],
  "references": [],
  "triggerType": "Free",
  "targetObjectData": {
    "primaryTarget": "Skill Point User(Or NONE)"
  }
}