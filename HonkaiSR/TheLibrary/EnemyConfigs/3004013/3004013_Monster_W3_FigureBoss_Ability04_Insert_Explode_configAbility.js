const configAbility = {
  "fileName": "3004013_Monster_W3_FigureBoss_Ability04_Insert_Explode",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"941590351\">Monster_W3_FigureBoss_Standard_TheChosenOne</a>[<span class=\"descriptionNumberColor\">Impresario</span>]"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "conditions": {
        "name": "OR",
        "conditionList": [
          {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value": "W3_Figure_00"
          },
          {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value": "W3_Figure_01"
          },
          {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value": "W3_Figure_02"
          }
        ]
      },
      "ifTargetFound": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target List}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target List}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-607059020\">Enemy_W3_DollElite_Commnon_TheChosenOne</a>[<span class=\"descriptionNumberColor\">Impresario</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target List}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"745906485\">Enemy_W3_Figure_02_RLElite_SuperArmorBreak</a>"
        },
        {
          "name": "Looped Event",
          "maxLoops": 4,
          "Event": [
            {
              "name": "Consume",
              "consumeFrom": "MaxHP",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target List}}"
              },
              "consumePercent": {
                "operator": "Variables[0] (P3_ExploreDamagePercentage) || Constants[0] (4) || DIV || RETURN",
                "displayLines": "(P3_ExploreDamagePercentage / 4)",
                "constants": [
                  4
                ],
                "variables": [
                  "P3_ExploreDamagePercentage"
                ]
              },
              "DamageType": {
                "name": "Damage Type Source",
                "sourceType": "AllType"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Action Advance/Delay",
      "target": {
        "name": "Target Sequence",
        "Sequence": [
          {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          {
            "name": "Target Filter",
            "conditions": {
              "name": "OR",
              "conditionList": [
                {
                  "name": "Check Boolean Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "value": "W3_Figure_00"
                },
                {
                  "name": "Check Boolean Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "value": "W3_Figure_01"
                },
                {
                  "name": "Check Boolean Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "value": "W3_Figure_02"
                }
              ]
            }
          }
        ]
      },
      "advanceType": "Set",
      "multiAdd": "P4_ExploreDelayRatio"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Sequence",
        "Sequence": [
          {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          {
            "name": "Target Filter",
            "conditions": {
              "name": "OR",
              "conditionList": [
                {
                  "name": "Check Boolean Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "value": "W3_Figure_00"
                },
                {
                  "name": "Check Boolean Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "value": "W3_Figure_01"
                },
                {
                  "name": "Check Boolean Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "value": "W3_Figure_02"
                }
              ]
            }
          }
        ]
      },
      "modifier": "<a class=\"gModGreen\" id=\"-558855282\">Enemy_W3_FigureBoss_DamageTakenUp</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
      "valuePerStack": {
        "MDF_ExploreDamageUpRatio": {
          "operator": "Variables[0] (P5_ExploreDamageUpRatio) || RETURN",
          "displayLines": "P5_ExploreDamageUpRatio",
          "constants": [],
          "variables": [
            "P5_ExploreDamageUpRatio"
          ]
        }
      }
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-558855282\">Enemy_W3_FigureBoss_DamageTakenUp</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_ExploreDamageUpRatio) || RETURN",
                "displayLines": "MDF_ExploreDamageUpRatio",
                "constants": [],
                "variables": [
                  "MDF_ExploreDamageUpRatio"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_ExploreDamageUpRatio"
      ],
      "latentQueue": [],
      "description": "Increases DMG taken by <span class=\"descriptionNumberColor\">MDF_ExploreDamageUpRatio</span>.",
      "type": "Debuff",
      "effectName": "Vulnerability",
      "statusName": "Vulnerability",
      "duration": 1
    }
  ]
}