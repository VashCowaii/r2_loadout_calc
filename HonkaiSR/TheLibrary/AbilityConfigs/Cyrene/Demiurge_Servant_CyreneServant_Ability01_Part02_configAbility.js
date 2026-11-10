const configAbility = {
  "fileName": "Demiurge_Servant_CyreneServant_Ability01_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable with Copy",
      "target": {
        "name": "Target Name",
        "target": "{{Caster's Summoner}}"
      },
      "variable": "CurInsertHitCount",
      "target2": null,
      "variable2": "HitCount",
      "scope": "ContextAbility"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 4
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(0.6 + (Skill01Count * 0.06))"
          },
          "variableName": "HitRatio"
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "0.6"
          },
          "variableName": "HitRatio"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "IsInRank01Action",
        "compareType": "=",
        "value2": 1
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "value": 0,
          "variableName": "IsInRank01Action"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2012168482\">_M_Cyrene_Eidolon1_Ability01Prepare</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 1
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(HitCount + 12)"
              },
              "variableName": "HitCount"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1364306036\">ServantCyrene_ChargeEnergy</a>",
              "variables": {
                "parameter[0]_AddValue": {
                  "displayLines": "6"
                }
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-296031576\">ServantCyrene_Eidolon6</a>"
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"684175961\">Memosprite_CyreneServant_Energy</a>[<span class=\"descriptionNumberColor\">Story</span>]"
        }
      ],
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "IsInPlayerAction",
                "compareType": "=",
                "value2": 1
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"874651474\">_M_Cyrene_Player_Ability01Prepare</a>"
              }
            ]
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "IsInPlayerAction"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "<a class=\"gModGreen\" id=\"874651474\">_M_Cyrene_Player_Ability01Prepare</a>",
                "compareType": ">",
                "value2": 1,
                "valueType": "Layer"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"874651474\">_M_Cyrene_Player_Ability01Prepare</a>",
                  "addStacksPerTrigger": -1
                }
              ],
              "failed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"874651474\">_M_Cyrene_Player_Ability01Prepare</a>"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target Group}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Ice",
        "Damage": {
          "displayLines": "0.6"
        },
        "dmgFormula": "Max HP Scaling",
        "Toughness": {
          "displayLines": "AOE Toughness Value"
        },
        "Tags": null
      }
    },
    {
      "name": "Clear DMG Numbers(UI)",
      "target": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      }
    },
    {
      "name": "Looped Event",
      "maxLoops": {
        "displayLines": "HitCount"
      },
      "execute": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"247970287\">Bounce_SelectTarget</a>",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "paramSequence": [
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
                  "displayLines": "HitRatio"
                },
                "dmgFormula": "Max HP Scaling",
                "Toughness": {
                  "displayLines": "ST Toughness Value"
                },
                "Tags": null
              }
            }
          ]
        }
      ]
    },
    "Trigger: Attack End",
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team All(with Unselectable)V2}}"
      },
      "conditions": {
        "name": "Character ID",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "characterID": "1409 (Hyacine)"
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-588160151\">Memosprite_CyreneServant_AmazingBonus_Hyacine</a>[<span class=\"descriptionNumberColor\">Ode to Sky</span>]",
          "valuePerStack": {
            "MDF_HyacineRatio": {
              "displayLines": "0.72"
            }
          },
          "addStacksPerTrigger": 2
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Sequence",
        "TargetList": [
          {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}"
          },
          {
            "name": "Target Filter",
            "conditions": {
              "name": "Character ID",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "characterID": "1414 (Dan Heng • Permansor Terrae)"
            }
          }
        ]
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1655562855\">Memosprite_CyreneServant_AmazingBonus_DanHengPT</a>[<span class=\"descriptionNumberColor\">Ode to Earth</span>]",
      "valuePerStack": {
        "MDF_DamageIncrease": {
          "displayLines": "0.24"
        },
        "MDF_DanHengPT_ExtraDamageCount": {
          "displayLines": "3"
        },
        "MDF_DamageRatio": {
          "displayLines": "0.8"
        }
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Sequence",
        "TargetList": [
          {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}"
          },
          {
            "name": "Target Filter",
            "conditions": {
              "name": "Character ID",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "characterID": "1414 (Dan Heng • Permansor Terrae)"
            }
          }
        ]
      },
      "modifier": "<a class=\"gModGreen\" id=\"-249685208\">DanHengPT_LongLingAttackExtraDamage</a>",
      "valuePerStack": {
        "MDF_Count": {
          "displayLines": "3"
        },
        "MDF_DanHengPT_ExtraDamageCount": {
          "displayLines": "3"
        },
        "MDF_DamageRatio": {
          "displayLines": "0.8"
        }
      }
    },
    "Trigger: Ability End"
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1620033376\">Memosprite_CyreneServant_Ability01_Debuff</a>",
      "stackType": "ReplaceByCaster",
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
                "displayLines": "MDF_PropertyValue"
              }
            }
          ]
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}