const configAbility = {
  "fileName": "BlackSwan_BlackSwan_Eidolon6",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "BlackSwan_Eidolon6"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "M_BlackSwan_Eidolon6_AddDOTFlag"
    },
    {
      "name": "Modifier Construction",
      "for": "BlackSwan_Eidolon6_SubOnEnemy",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "_count",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked Start [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Part Of",
                    "of": "All Teammates + Unselectable (Excluding Owner) [INCLUDE battle events]",
                    "target": "Use Prior Target(s) Defined",
                    "mustBeAlive2": true
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "_count",
                    "compareType": "<=",
                    "value2": 0,
                    "contextScope": "ContextModifier"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_count",
                  "value": 1
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "M_BlackSwan_Eidolon6_AddDOTFlag"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Attack Action Completed [Anyone]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "_count",
              "value": 0
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "BlackSwan_Eidolon6",
      "execute": [
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team",
                "target": "Use Prior Target(s) Defined",
                "team": "TeamDark"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Use Prior Target(s) Defined",
                  "modifier": "BlackSwan_Eidolon6_SubOnEnemy"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Modifier is Added [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "M_BlackSwan_Eidolon6_AddDOTFlag"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Use Prior Target(s) Defined",
                  "modifier": "M_BlackSwan_Eidolon6_AddDOTFlag"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Random Chance",
                    "chance": {
                      "operator": "Variables[0] (Rank06_Chance) || RETURN",
                      "displayLines": "Rank06_Chance",
                      "constants": [],
                      "variables": [
                        "Rank06_Chance"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Rank06_Weighted_Stack_Layer",
                      "value": {
                        "operator": "Constants[0] (1) || Variables[0] (Rank06_Extra_Layer) || ADD || RETURN",
                        "displayLines": "(1 + Rank06_Extra_Layer)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "Rank06_Extra_Layer"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Rank06_Weighted_Stack_Layer",
                      "value": {
                        "operator": "Constants[0] (1) || RETURN",
                        "displayLines": "1",
                        "constants": [
                          1
                        ],
                        "variables": []
                      }
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "Use Prior Target(s) Defined",
                  "modifier": "BlackSwan_DOT[<span class=\"descriptionNumberColor\">Arcana</span>]",
                  "baseChance": {
                    "operator": "Variables[0] (0.65) || RETURN",
                    "displayLines": "0.65",
                    "constants": [],
                    "variables": [
                      0.65
                    ]
                  },
                  "stackLimit": {
                    "operator": "Variables[0] (Max_DOT_Layer) || RETURN",
                    "displayLines": "Max_DOT_Layer",
                    "constants": [],
                    "variables": [
                      "Max_DOT_Layer"
                    ]
                  },
                  "valuePerStack": {
                    "Basic_DamagePercentage": {
                      "operator": "Variables[0] (2.4) || RETURN",
                      "displayLines": "2.4",
                      "constants": [],
                      "variables": [
                        2.4
                      ]
                    },
                    "ExtraLayer_DamagePercentage": {
                      "operator": "Variables[0] (0.12) || RETURN",
                      "displayLines": "0.12",
                      "constants": [],
                      "variables": [
                        0.12
                      ]
                    },
                    "SecondLayer": {
                      "operator": "Variables[0] (3) || RETURN",
                      "displayLines": "3",
                      "constants": [],
                      "variables": [
                        3
                      ]
                    },
                    "Spread_DamagePercentage": {
                      "operator": "Variables[0] (1.8) || RETURN",
                      "displayLines": "1.8",
                      "constants": [],
                      "variables": [
                        1.8
                      ]
                    },
                    "ThirdLayer": {
                      "operator": "Variables[0] (7) || RETURN",
                      "displayLines": "7",
                      "constants": [],
                      "variables": [
                        7
                      ]
                    },
                    "DefenceIgnore": {
                      "operator": "Variables[0] (0.2) || RETURN",
                      "displayLines": "0.2",
                      "constants": [],
                      "variables": [
                        0.2
                      ]
                    },
                    "Cast_By_Level": 0
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (Rank06_Weighted_Stack_Layer) || RETURN",
                    "displayLines": "Rank06_Weighted_Stack_Layer",
                    "constants": [],
                    "variables": [
                      "Rank06_Weighted_Stack_Layer"
                    ]
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