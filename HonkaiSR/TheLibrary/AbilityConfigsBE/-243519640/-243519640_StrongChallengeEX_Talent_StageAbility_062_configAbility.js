const configAbility = {
  "fileName": "-243519640_StrongChallengeEX_Talent_StageAbility_062",
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
      "modifier": "<a class=\"gModGreen\" id=\"1494188082\">MStrongChallengeEX_Talent_StageAbility_LE_062</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1341567162\">MStrongChallengeEX_Talent_StageAbility_PLY_062</a>",
      "stackType": "ReplaceByCaster",
      "addStacksPerTrigger": 1,
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valueType": "Layer",
              "variableName": "MDF_Layer",
              "multiplier": 1
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "statValue": {
                "displayLines": "(MDF_PropertyValue * MDF_Layer)"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1494188082\">MStrongChallengeEX_Talent_StageAbility_LE_062</a>",
      "execute": [
        {
          "eventTrigger": "Skill Point Changes",
          "execute": [
            {
              "name": "Define Custom Variable with SkillPoint Changes",
              "variableName": "MDF_BPCost"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "MDF_BPCost",
                    "compareType": "<",
                    "value2": 0
                  },
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1341567162\">MStrongChallengeEX_Talent_StageAbility_PLY_062</a>",
                  "stackLimit": {
                    "displayLines": "#ADF_2"
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "displayLines": "#ADF_1"
                    }
                  },
                  "addStacksPerTrigger": {
                    "displayLines": "-MDF_BPCost"
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}