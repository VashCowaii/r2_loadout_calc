const configAbility = {
  "fileName": "5012100_Monster_W5_Magical_ChangeToSun",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"222603007\">Enemy_W5_Magical_Passive_ChangeToSun</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1664599275\">Enemy_W5_Magical_Passive_ChangeToRain</a>"
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": {
        "operator": "Variables[0] (ModifierLayers) || RETURN",
        "displayLines": "ModifierLayers",
        "constants": [],
        "variables": [
          "ModifierLayers"
        ]
      },
      "entityClass": "Enemy",
      "maximum": {
        "operator": "Variables[0] (ModifierMaxLayers) || RETURN",
        "displayLines": "ModifierMaxLayers",
        "constants": [],
        "variables": [
          "ModifierMaxLayers"
        ]
      },
      "assignState": "True",
      "state": "Active",
      "trigger": "SpEff_Trigger"
    },
    {
      "name": "Adjust Team Punchline Value",
      "value": {
        "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
        "displayLines": "{[PassiveSkill01[1]]}",
        "constants": [],
        "variables": [
          "{[PassiveSkill01[1]]}"
        ]
      },
      "adjustment": "Add"
    },
    {
      "name": "Action Advance/Delay",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "advanceType": "Set",
      "multiAdd": "{[PassiveSkill01[2]]}"
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}