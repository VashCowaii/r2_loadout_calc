const configAbility = {
  "fileName": "5024012_BattleEventAbility_TVBroadcast_Neutral_Effect",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-333351363\">Monster_W5_Ripper_MainBETrigger2</a>"
      },
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Random Chance",
            "chance": 0.7
          }
        }
      ]
    },
    {
      "name": "Adjust Team Punchline Value",
      "value": {
        "operator": "Variables[0] (BattleEvent_P1_ADF) || RETURN",
        "displayLines": "BattleEvent_P1_ADF",
        "constants": [],
        "variables": [
          "BattleEvent_P1_ADF"
        ]
      },
      "adjustment": "Add"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-333351363\">Monster_W5_Ripper_MainBETrigger2</a>"
      },
      "passed": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-333351363\">Monster_W5_Ripper_MainBETrigger2</a>"
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}