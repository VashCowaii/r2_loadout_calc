const configAbility = {
  "fileName": "Yukong_Yukong_Eidolon2",
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
      "modifier": "Yukong_Eidolon2_Bonus"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Yukong_Eidolon2_BonusCD"
    },
    {
      "name": "Modifier Construction",
      "for": "Yukong_Eidolon2_TeamMemberCheckSP",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "Yukong_Eidolon2_BonusCD",
                    "invertCondition": true
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "Energy%",
                    "compareType": ">=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": {
                    "operator": "Variables[0] (MDF_Rank02Amount) || RETURN",
                    "displayLines": "MDF_Rank02Amount",
                    "constants": [],
                    "variables": [
                      "MDF_Rank02Amount"
                    ]
                  },
                  "isFixed": "* ERR"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Yukong_Eidolon2_BonusCD"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Energy Change",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "Yukong_Eidolon2_BonusCD",
                    "invertCondition": true
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "ParameterValue",
                    "compareType": ">",
                    "value2": 0
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "Energy%",
                    "compareType": ">=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": {
                    "operator": "Variables[0] (MDF_Rank02Amount) || RETURN",
                    "displayLines": "MDF_Rank02Amount",
                    "constants": [],
                    "variables": [
                      "MDF_Rank02Amount"
                    ]
                  },
                  "isFixed": "* ERR"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Yukong_Eidolon2_BonusCD"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Yukong_Eidolon2_Bonus",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_Rank02Amount",
              "value": {
                "operator": "Variables[0] (5) || RETURN",
                "displayLines": "5",
                "constants": [],
                "variables": [
                  5
                ]
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members}}"
              },
              "modifier": "Yukong_Eidolon2_TeamMemberCheckSP"
            }
          ]
        },
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Teammate",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Yukong_Eidolon2_TeamMemberCheckSP"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members with Unselectables}}"
              },
              "modifier": "Yukong_Eidolon2_TeamMemberCheckSP",
              "onlyRemoveOwnersInstance": true
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}