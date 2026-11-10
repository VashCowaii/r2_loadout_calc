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
      "value": {
        "displayLines": "2"
      },
      "variableName": "SkillP01_CurrentEnergy"
    },
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "3"
      },
      "variableName": "SkillP01_MaxEnergy"
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": {
        "displayLines": "SkillP01_CurrentEnergy"
      },
      "maximum": {
        "displayLines": "SkillP01_MaxEnergy"
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
      "value": 0,
      "variableName": "SkillP01_EnhanceInsertBuffStack"
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
          "value": {
            "displayLines": "18"
          },
          "variableName": "SkillP01_EnhanceInsertBuffStackLimit"
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "12"
          },
          "variableName": "SkillP01_EnhanceInsertBuffStackLimit"
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "SkillRank_Rank02_EnhanceInsertBuffStackReturn"
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
              "displayLines": "0.4"
            },
            "MDF_InsertCriticalDamageAddTemp": {
              "displayLines": "0.8"
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
                    "target1": {
                      "name": "Target Name",
                      "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
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
                    "displayLines": "8"
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
                      "displayLines": "1"
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
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  }
}