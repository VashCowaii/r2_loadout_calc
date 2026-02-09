const configAbility = {
  "fileName": "-1857366819_TrialPlayer_1021111_Luka_TalkAbility_Battle2_Round1",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable with Stat",
      "target": {
        "name": "Target Name",
        "target": "{{Modifier Holder}}"
      },
      "variableName": "MDF_LukaMaxHP",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
    },
    {
      "name": "Set HP Value",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "setValue": {
        "operator": "Variables[0] (MDF_LukaMaxHP) || Constants[0] (0.7) || MUL || RETURN",
        "displayLines": "(MDF_LukaMaxHP * 0.7)",
        "constants": [
          0.7
        ],
        "variables": [
          "MDF_LukaMaxHP"
        ]
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"714755645\">TrialPlayer_101111_Luka_LimboAddAttack</a>",
      "valuePerStack": {
        "MDF_AttackRatio": 1
      }
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__714755645\">TrialPlayer_101111_Luka_LimboAddAttack</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">StageFinalDMG</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_AttackRatio) || RETURN",
                "displayLines": "MDF_AttackRatio",
                "constants": [],
                "variables": [
                  "MDF_AttackRatio"
                ]
              }
            },
            {
              "name": "Action Advance/Delay",
              "advanceType": "Set",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "set": 0
            }
          ]
        }
      ],
      "stackData": [
        "MDF_AttackRatio"
      ],
      "latentQueue": []
    }
  ]
}