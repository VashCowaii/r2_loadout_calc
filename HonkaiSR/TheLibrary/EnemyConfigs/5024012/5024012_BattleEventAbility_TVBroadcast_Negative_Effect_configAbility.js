const configAbility = {
  "fileName": "5024012_BattleEventAbility_TVBroadcast_Negative_Effect",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Random Chance",
        "chance": 0.7
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All}}.[[removeMemosprite]]"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-958879550\">Monster_Standard_SpeedRatioDown</a>[<span class=\"descriptionNumberColor\">Slow</span>]",
      "duration": 2,
      "baseChance": 1,
      "valuePerStack": {
        "MDF_PropertyValue": {
          "operator": "Variables[0] (BattleEvent_P1_ADF) || RETURN",
          "displayLines": "BattleEvent_P1_ADF",
          "constants": [],
          "variables": [
            "BattleEvent_P1_ADF"
          ]
        }
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-383684220\">Monster_W5_Ripper_MainBETrigger1</a>"
      },
      "passed": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-383684220\">Monster_W5_Ripper_MainBETrigger1</a>"
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}