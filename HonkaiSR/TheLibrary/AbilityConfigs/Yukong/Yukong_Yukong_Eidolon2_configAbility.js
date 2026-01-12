const configAbility = {
  "fileName": "Yukong_Yukong_Eidolon2",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
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
                    "target": "Owner of this Modifier",
                    "modifier": "Yukong_Eidolon2_BonusCD",
                    "invertCondition": true
                  },
                  {
                    "name": "Compare: Variable",
                    "target": "Owner of this Modifier",
                    "value1": "Energy%",
                    "compareType": ">=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "Update Energy",
                  "on": "Caster",
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
                  "to": "Owner of this Modifier",
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
                    "target": "Owner of this Modifier",
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
                    "target": "Owner of this Modifier",
                    "value1": "Energy%",
                    "compareType": ">=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "Update Energy",
                  "on": "Caster",
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
                  "to": "Owner of this Modifier",
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
              "to": "All Team Members(In Context)",
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
                "target": "Use Prior Target(s) Defined"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Use Prior Target(s) Defined",
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
              "to": "All Team Members(In Context, with Untargetable)",
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