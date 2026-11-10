const configAbility = {
  "fileName": "-243519640_StrongChallengeEX_Talent_StageAbility_034",
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
      "modifier": "<a class=\"gModGreen\" id=\"-385346531\">MStrongChallengeEX_Talent_StageAbility_LE_034</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1074851259\">MStrongChallengeEX_Talent_StageAbility_PLY_034</a>",
      "execute": [
        {
          "eventTrigger": "Caused Limbo [Owner]",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-537679168\">ReduceActionDelay</a>",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variables": {
                "parameter[0]_NormalizedValue": {
                  "displayLines": "MDF_ActionDelayRatio"
                }
              }
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DamageQuantum</span>&nbsp;",
              "statValue": {
                "displayLines": "MDF_QuantumDamageAddedRatio"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-385346531\">MStrongChallengeEX_Talent_StageAbility_LE_034</a>",
      "execute": [
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
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
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1074851259\">MStrongChallengeEX_Talent_StageAbility_PLY_034</a>",
                  "valuePerStack": {
                    "MDF_QuantumDamageAddedRatio": {
                      "displayLines": "#ADF_1"
                    },
                    "MDF_ActionDelayRatio": {
                      "displayLines": "#ADF_2"
                    }
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