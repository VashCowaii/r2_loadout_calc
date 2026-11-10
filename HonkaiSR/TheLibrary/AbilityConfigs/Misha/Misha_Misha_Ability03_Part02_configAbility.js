const configAbility = {
  "fileName": "Misha_Misha_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Interlock"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-874080613\">Misha_Ability03_StatusProbabilityUp</a>[<span class=\"descriptionNumberColor\">Interlock</span>]",
          "valuePerStack": {
            "MDF_PropertyRatio": {
              "displayLines": "0.6"
            }
          }
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "_current_hit_count"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 1
      },
      "passed": [
        {
          "name": "Define Custom Variable with Team Count",
          "variableName": "Skill03_Hit_Count",
          "scope": "ContextCaster",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "living": true
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>((1 * Skill03_Hit_Count), 5)"
          },
          "variableName": "Skill03_Hit_Count"
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "value": 0,
          "variableName": "Skill03_Hit_Count"
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "((Skill03_Hit_Count + EnergyBar_BasicUltraAttack) + EnergyBar_ExtraUltraAttack)"
      },
      "variableName": "Skill03_Hit_Count"
    },
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "((MISHA_OBJECT_UNUSED_2 - MISHA_OBJECT_UNUSED_1) / &nbsp;<span class=\"descriptionFunctionColor\">MAX</span>(1, (Skill03_Hit_Count - 2)))"
      },
      "variableName": "_delta_ntime"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Release"
      },
      "passed": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "ifTargetFound": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-469829956\">Misha_Ability03_SingleAttack</a>",
              "variables": {
                "parameter[01]_StanceRatio": 1,
                "parameter[02]_Frozen_Chance": {
                  "displayLines": "(0.2 + 0.8)"
                }
              }
            }
          ]
        }
      ],
      "failed": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "ifTargetFound": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-469829956\">Misha_Ability03_SingleAttack</a>",
              "variables": {
                "parameter[01]_StanceRatio": 1,
                "parameter[02]_Frozen_Chance": {
                  "displayLines": "0.2"
                }
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Looped Event",
      "maxLoops": {
        "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MAX</span>(0, (Skill03_Hit_Count - 2))"
      },
      "execute": [
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(_current_hit_count + 1)"
          },
          "variableName": "_current_hit_count"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"247970287\">Bounce_SelectTarget</a>",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "paramSequence": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-469829956\">Misha_Ability03_SingleAttack</a>",
              "variables": {
                "parameter[01]_StanceRatio": 0.5,
                "parameter[02]_Frozen_Chance": {
                  "displayLines": "0.2"
                }
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "(_current_hit_count + 1)"
      },
      "variableName": "_current_hit_count"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"247970287\">Bounce_SelectTarget</a>",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "paramSequence": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-469829956\">Misha_Ability03_SingleAttack</a>",
          "variables": {
            "parameter[01]_StanceRatio": 0.5,
            "parameter[02]_Frozen_Chance": {
              "displayLines": "0.2"
            }
          }
        }
      ]
    },
    "Trigger: Attack End",
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "valuePercent": 1,
      "ofAbilitySplit": true,
      "isFixed": "* ERR"
    },
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "EnergyBar_ExtraUltraAttack"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-874080613\">Misha_Ability03_StatusProbabilityUp</a>[<span class=\"descriptionNumberColor\">Interlock</span>]"
    },
    "Trigger: Ability End"
  ],
  "functions": [
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-469829956\">Misha_Ability03_SingleAttack</a>",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 2
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1428052703\">Misha_Eidolon2_DefenceDown</a>[<span class=\"descriptionNumberColor\">Yearning of Youth</span>]",
              "duration": {
                "displayLines": "3"
              },
              "baseChance": {
                "displayLines": "0.24"
              },
              "valuePerStack": {
                "MDF_PropertyRatio": {
                  "displayLines": "0.16"
                }
              }
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-298752594\">Standard_CTRL_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]",
          "duration": 1,
          "baseChance": {
            "displayLines": "parameter[02]_Frozen_Chance"
          },
          "valuePerStack": {
            "Modifier_Frozen_DamagePercentage": {
              "displayLines": "0.3"
            }
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "displayLines": "Skill03_DamagePercentage"
            },
            "Toughness": {
              "displayLines": "(ST Toughness Value * parameter[01]_StanceRatio)"
            },
            "Tags": null
          }
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1428052703\">Misha_Eidolon2_DefenceDown</a>[<span class=\"descriptionNumberColor\">Yearning of Youth</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "DEF_DOWN"
      ],
      "stackData": [
        "MDF_PropertyRatio"
      ],
      "latentQueue": [
        "_delta_ntime"
      ],
      "description": "Reduces DEF by <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>.",
      "type": "Debuff",
      "effectName": "DEF Reduction",
      "statusName": "Yearning of Youth",
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
              "statValue": {
                "displayLines": "(0 - MDF_PropertyRatio)"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-874080613\">Misha_Ability03_StatusProbabilityUp</a>[<span class=\"descriptionNumberColor\">Interlock</span>]",
      "stackType": "ReplaceByCaster",
      "stackData": [
        "MDF_PropertyRatio"
      ],
      "description": "Increases Effect Hit Rate by <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>.",
      "type": "Buff",
      "effectName": "Effect Hit Rate Boost",
      "statusName": "Interlock",
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">EffectHitRate</span>&nbsp;",
              "statValue": {
                "displayLines": "MDF_PropertyRatio"
              }
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}