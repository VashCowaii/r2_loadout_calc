const configAbility = {
  "fileName": "3002012_Monster_W3_TV_02_IF_Ability01_Insert_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-2083560746\">MModifier_W3_Theater_IF_HourglassTrigger_Flop</a>"
    },
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "valuePercent": {
        "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
        "displayLines": "{[Skill01[0]]}",
        "constants": [],
        "variables": [
          "{[Skill01[0]]}"
        ]
      },
      "isFixed": "* ERR"
    },
    {
      "name": "UI Display Event (On Entity)",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "popUpText": "Energy Regenerated",
      "living": true
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Check Boolean Value",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "value": "MonsterType_W3_Theater"
      }
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-2083560746\">MModifier_W3_Theater_IF_HourglassTrigger_Flop</a>"
    }
  ],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  },
  "references": []
}