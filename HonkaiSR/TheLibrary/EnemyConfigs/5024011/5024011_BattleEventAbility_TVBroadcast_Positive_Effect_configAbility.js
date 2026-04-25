const configAbility = {
  "fileName": "5024011_BattleEventAbility_TVBroadcast_Positive_Effect",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
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
      "name": "Action Advance/Delay",
      "target": {
        "name": "Target Name",
        "target": "{{Player Team All}}.[[removeMemosprite]]"
      },
      "advanceType": "Set",
      "multiAdd": "(0 - BattleEvent_P2_ADF)"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All}}.[[removeMemosprite]]"
      },
      "modifier": "<a class=\"gModGreen\" id=\"365398491\">Standard_CriticalDamageUp</a>[<span class=\"descriptionNumberColor\">CRIT DMG Boost</span>]",
      "duration": 1,
      "valuePerStack": {
        "MDF_PropertyValue": {
          "operator": "Variables[0] (BattleEvent_P4_ADF) || RETURN",
          "displayLines": "BattleEvent_P4_ADF",
          "constants": [],
          "variables": [
            "BattleEvent_P4_ADF"
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
        "modifier": "<a class=\"gModGreen\" id=\"-350128982\">Monster_W5_Ripper_MainBETrigger3</a>"
      },
      "passed": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-350128982\">Monster_W5_Ripper_MainBETrigger3</a>"
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}