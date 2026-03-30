const configAbility = {
  "fileName": "Ashveil_Ashveil_PassiveAbility01",
  "childAbilityList": [
    "Ashveil_Ashveil_PassiveAbility01",
    "Ashveil_Ashveil_PassiveAbility_Camera",
    "Ashveil_Ashveil_Passive_FirstInsert_Camera",
    "Ashveil_Ashveil_Passive_EnhanceContinueInsert_Camera",
    "Ashveil_Ashveil_Insert_SelectTargetSelf",
    "Ashveil_Ashveil_Insert_SelectTargetSelf_Enhance",
    "Ashveil_Ashveil_Insert",
    "Ashveil_Ashveil_Insert_Enhance",
    "Ashveil_Ashveil_Passive_FirstInsert_ForTest1"
  ],
  "skillTrigger": "SkillP01",
  "abilityType": "Talent",
  "energy": 5,
  "toughnessList": [
    5,
    0,
    0
  ],
  "parse": [
    {
      "name": "Define Custom Variable",
      "variableName": "SkillP01_CurrentEnergy",
      "value": {
        "operator": "Variables[0] (2) || RETURN",
        "displayLines": "2",
        "constants": [],
        "variables": [
          2
        ]
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "SkillP01_MaxEnergy",
      "value": {
        "operator": "Variables[0] (3) || RETURN",
        "displayLines": "3",
        "constants": [],
        "variables": [
          3
        ]
      }
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": {
        "operator": "Variables[0] (SkillP01_CurrentEnergy) || RETURN",
        "displayLines": "SkillP01_CurrentEnergy",
        "constants": [],
        "variables": [
          "SkillP01_CurrentEnergy"
        ]
      },
      "maximum": {
        "operator": "Variables[0] (SkillP01_MaxEnergy) || RETURN",
        "displayLines": "SkillP01_MaxEnergy",
        "constants": [],
        "variables": [
          "SkillP01_MaxEnergy"
        ]
      },
      "assignState": "True",
      "priorState": "Active",
      "bar#": 3
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1062721873\">Ashveil_Passive</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1818760526\">Ashveil_Ability02_DebuffShift</a>"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "SkillP01_EnhanceInsertBuffStack",
      "value": 0
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 2
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "SkillP01_EnhanceInsertBuffStackLimit",
          "value": {
            "operator": "Variables[0] (18) || RETURN",
            "displayLines": "18",
            "constants": [],
            "variables": [
              18
            ]
          }
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "variableName": "SkillP01_EnhanceInsertBuffStackLimit",
          "value": {
            "operator": "Variables[0] (12) || RETURN",
            "displayLines": "12",
            "constants": [],
            "variables": [
              12
            ]
          }
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "variableName": "SkillRank_Rank02_EnhanceInsertBuffStackReturn",
      "value": 0
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"826719973\">Ashveil_Passive_ListenEnergy</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1000668599\">Ashveil_Passive_ListenEnhanceInsertBonusStack</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Damnation Trail"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1782538245\">Ashveil_PointB1_ListenCharacterLimbo</a>"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Phantom Limb"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"499961464\">Ashveil_PointB2_ListenAttack</a>"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "First Fang"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2049711974\">Ashveil_PointB3_CriticalDamageAddPre</a>",
          "valuePerStack": {
            "MDF_CriticalDamageTemp": {
              "operator": "Variables[0] (0.4) || RETURN",
              "displayLines": "0.4",
              "constants": [],
              "variables": [
                0.4
              ]
            },
            "MDF_InsertCriticalDamageAddTemp": {
              "operator": "Variables[0] (0.8) || RETURN",
              "displayLines": "0.8",
              "constants": [],
              "variables": [
                0.8
              ]
            }
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 1
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"35105186\">Ashveil_Eidolon1_DamageTakenAddPre</a>"
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1062721873\">Ashveil_Passive</a>",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "Attack DMG End [Anyone]",
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
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1062721873\">Ashveil_Passive</a>",
                    "invertCondition": true
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-422850470\">Ashveil_InsertAbilityHit</a>"
                  },
                  {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "mustBeAlive2": true
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
                    "operator": "Variables[0] (8) || RETURN",
                    "displayLines": "8",
                    "constants": [],
                    "variables": [
                      8
                    ]
                  },
                  "isFixed": "(Fixed)"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "SkillP01_CurrentEnergy",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (1) || RETURN",
                      "displayLines": "1",
                      "constants": [],
                      "variables": [
                        1
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1726722231\">Ashveil_TryInsert</a>"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-422850470\">Ashveil_InsertAbilityHit</a>"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  }
}