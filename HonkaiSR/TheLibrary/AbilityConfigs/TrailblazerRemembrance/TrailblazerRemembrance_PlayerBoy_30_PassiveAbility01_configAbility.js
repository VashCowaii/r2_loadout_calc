const configAbility = {
  "fileName": "TrailblazerRemembrance_PlayerBoy_30_PassiveAbility01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "PlayerBoy_30_Passive"
    },
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "M_PlayerBoy_30_CreateServantPreshow",
      "valuePerStack": {
        "ServantID": {
          "operator": "Variables[0] (ServantID) || RETURN",
          "displayLines": "ServantID",
          "constants": [],
          "variables": [
            "ServantID"
          ]
        }
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "PointSpecial1"
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Character ID",
            "ID": 8007,
            "target": "Caster",
            "characterName": "Trailblazer - Remembrance[M]"
          },
          "passed": [
            {
              "name": "Change Character UI"
            }
          ],
          "failed": [
            {
              "name": "Change Character UI"
            }
          ]
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "PlayerBoy_30_Passive",
      "execute": [
        {
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count",
                "target": "Caster (Memosprite)",
                "compareType": "<=",
                "value2": 0,
                "livingTargets": true
              },
              "passed": [
                {
                  "name": "Update Ability Binding",
                  "target": "Caster",
                  "abilityName": "Skill02",
                  "skillSlot": "Skill",
                  "enableSecondaryType": "ControlSkill02"
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "assignState": "False"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team",
                "target": "Use Prior Target(s) Defined",
                "team": "TeamLight"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Use Prior Target(s) Defined",
                  "modifier": "PlayerBoy_30_Halo_ListenSPChange"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Trace Activated",
                    "conditionList": "PointSpecial1"
                  },
                  {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "PlayerBoy_30_UltraState[<span class=\"descriptionNumberColor\">Epic</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  },
                  "addStacksPerTrigger": 1
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": "Allied Team",
              "modifier": "PlayerBoy_30_Halo_ListenSPChange"
            }
          ],
          "priorityLevel": -80
        }
      ],
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "TeamAddSP",
          "from": "ContextOwner",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "maxValue": 999,
              "whenValueChanges": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "TeamAddSP",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (10) || RETURN",
                      "displayLines": "10",
                      "constants": [],
                      "variables": [
                        10
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": "Caster",
                      "scope": "ContextModifier",
                      "variableName": "_chargeEnergy",
                      "value": {
                        "operator": "Variables[0] (FLOOR) || Variables[1] (TeamAddSP) || Variables[2] (10) || DIV || PARAM_1 || FUNCTION || RETURN",
                        "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>((TeamAddSP / 10))",
                        "constants": [],
                        "variables": [
                          "FLOOR",
                          "TeamAddSP",
                          10
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": "Caster's Memosprite",
                      "variableName": "CurEnergy",
                      "context": "TargetEntity",
                      "value": {
                        "operator": "Variables[0] (_chargeEnergy) || RETURN",
                        "displayLines": "_chargeEnergy",
                        "constants": [],
                        "variables": [
                          "_chargeEnergy"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": "Caster",
                      "variableName": "TeamAddSP",
                      "value": {
                        "operator": "Constants[0] (0) || Variables[0] (_chargeEnergy) || Variables[1] (10) || MUL || SUB || RETURN",
                        "displayLines": "(0 - (_chargeEnergy * 10))",
                        "constants": [
                          0
                        ],
                        "variables": [
                          "_chargeEnergy",
                          10
                        ]
                      }
                    }
                  ]
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