const configAbility = {
  "fileName": "-888136228_Modifiers",
  "abilityType": "Char. Modifiers",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Modifier Construction",
      "for": "Monster_Standard_ConfineHit",
      "execute": [
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "flagName": "STAT_Confine"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "flagName": "STAT_Confine_Effect"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "phase": "Phase0"
                }
              ],
              "failed": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "phase": "Phase1"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_APShow_Infinite_NotCancel",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Monster_APShow"
            },
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_APShow_SevenTurn",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Monster_APShow_Base",
              "valuePerStack": {
                "Acc_Turn": 7
              }
            },
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_APShow_TwoTurn_NotCancel",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Monster_APShow_Base_NotCancel",
              "valuePerStack": {
                "Acc_Turn": 2
              }
            },
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_APShow_TwoTurn",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Monster_APShow_Base",
              "valuePerStack": {
                "Acc_Turn": 2
              }
            },
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_APShow_OneTurn_NotCancel",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Monster_APShow_Base_NotCancel",
              "valuePerStack": {
                "Acc_Turn": 1
              }
            },
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_APShow_OneTurn",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Monster_APShow_Base",
              "valuePerStack": {
                "Acc_Turn": 1
              }
            },
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_APShow_Base_NotCancel",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Monster_APShow"
            }
          ]
        },
        {
          "eventTrigger": "Turn [Action-End Phase]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Monster_APShow"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "Acc_Turn",
              "value": {
                "operator": "Variables[0] (Acc_Turn) || Constants[0] (1) || SUB || RETURN",
                "displayLines": "(Acc_Turn - 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "Acc_Turn"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "When Put in Deathstate Limbo",
          "execute": [
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Acc_Turn",
                "compareType": "<=",
                "value2": 0
              },
              "passed": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ],
      "stackData": [
        "Acc_Turn"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_APShow_Base_Immediately",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Monster_APShow"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Monster_APShow"
            }
          ]
        },
        {
          "eventTrigger": "Turn [Action-End Phase]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "Acc_Turn",
              "value": {
                "operator": "Variables[0] (Acc_Turn) || Constants[0] (1) || SUB || RETURN",
                "displayLines": "(Acc_Turn - 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "Acc_Turn"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "When Put in Deathstate Limbo",
          "execute": [
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Acc_Turn",
                "compareType": "<=",
                "value2": 0
              },
              "passed": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_APShow_Base",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Monster_APShow"
            }
          ]
        },
        {
          "eventTrigger": "Turn [Action-End Phase]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Monster_APShow"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "Acc_Turn",
              "value": {
                "operator": "Variables[0] (Acc_Turn) || Constants[0] (1) || SUB || RETURN",
                "displayLines": "(Acc_Turn - 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "Acc_Turn"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "When Put in Deathstate Limbo",
          "execute": [
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Acc_Turn",
                "compareType": "<=",
                "value2": 0
              },
              "passed": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [
        "Acc_Turn"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_APShow_OneMore",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Standard_MonsterCharge_ActionBarText"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Standard_MonsterCharge_ActionBarText"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_APShow",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Standard_MonsterCharge_ActionBarText"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Standard_MonsterCharge_ActionBarText"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ],
  "references": []
}