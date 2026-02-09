const configAbility = {
  "fileName": "-1097634517_BattleEventAbility_Challenge_New_07",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"856090006\">Modifier_BattleEventAbility_Challenge_New_07</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__856090006\">Modifier_BattleEventAbility_Challenge_New_07</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "inherentTarget": {
                "name": "Target Name",
                "target": "{{Player Team Entity}}"
              },
              "ability": "BattleEventAbility_Camear_AllLightTeam",
              "isTrigger": true
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1797420881\">Standard_Protect_Shield</a>[<span class=\"descriptionNumberColor\">Shield</span>]"
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "ifTargetFound": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "EntityMaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1797420881\">Standard_Protect_Shield</a>[<span class=\"descriptionNumberColor\">Shield</span>]",
                  "valuePerStack": {
                    "MDF_ShowValue": {
                      "operator": "Variables[0] (EntityMaxHP) || Variables[1] (#BattleEvent_P1_ADF) || MUL || RETURN",
                      "displayLines": "(EntityMaxHP * #BattleEvent_P1_ADF)",
                      "constants": [],
                      "variables": [
                        "EntityMaxHP",
                        "#BattleEvent_P1_ADF"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}