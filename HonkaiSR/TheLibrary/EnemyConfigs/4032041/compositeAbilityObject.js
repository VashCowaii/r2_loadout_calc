const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 4032041,
  "trimCharacterName": 4032041,
  "abilityList": [
    "4032041_Monster_W4_Scholar_01_LocalLegend02_Ability03_Part02",
    "4032041_Monster_W4_Scholar_01_LocalLegend02_Ability03_Part01",
    "4032041_Monster_W4_Scholar_01_LocalLegend02_Ability02_Part02",
    "4032041_Monster_W4_Scholar_01_LocalLegend02_Ability02_Part01",
    "4032041_Monster_W4_Scholar_01_LocalLegend_Ability03_Part02",
    "4032041_Monster_W4_Scholar_01_LocalLegend_Ability03_Part01",
    "4032041_Monster_W4_Scholar_01_LocalLegend_Ability01_Part02",
    "4032041_Monster_W4_Scholar_01_LocalLegend_Ability01_Part01",
    "4032041_Monster_W4_Scholar_01_LocalLegend_AbilityP01",
    "4032041_Monster_W4_Scholar_01_Ability03_Part02",
    "4032041_Monster_W4_Scholar_01_Ability03_Part01",
    "4032041_Monster_W4_Scholar_01_Ability02_Part02",
    "4032041_Monster_W4_Scholar_01_Ability02_Part01",
    "4032041_Monster_W4_Scholar_01_Ability01_Part02",
    "4032041_Monster_W4_Scholar_01_Ability01_Part01",
    "4032041_Monster_W4_Scholar_01_AbilityP01",
    "4032041_Modifiers"
  ],
  "abilityObject": {
    "4032041_Monster_W4_Scholar_01_LocalLegend02_Ability03_Part02": {
      "fileName": "4032041_Monster_W4_Scholar_01_LocalLegend02_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-212213853\">Enemy_W4_Scholar_01_Stealth_Effect</a>"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
              "displayLines": "{[Skill03[0]]}",
              "constants": [],
              "variables": [
                "{[Skill03[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-19048827\">Enemy_W4_Scholar_01_Stealth</a>[<span class=\"descriptionNumberColor\">Lurking</span>]"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "4032041_Monster_W4_Scholar_01_LocalLegend02_Ability03_Part01": {
      "fileName": "4032041_Monster_W4_Scholar_01_LocalLegend02_Ability03_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W4_Scholar_01_LocalLegend02_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "4032041_Monster_W4_Scholar_01_LocalLegend02_Ability02_Part02": {
      "fileName": "4032041_Monster_W4_Scholar_01_LocalLegend02_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
              "displayLines": "{[Skill02[0]]}",
              "constants": [],
              "variables": [
                "{[Skill02[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "4032041_Monster_W4_Scholar_01_LocalLegend02_Ability02_Part01": {
      "fileName": "4032041_Monster_W4_Scholar_01_LocalLegend02_Ability02_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W4_Scholar_01_LocalLegend02_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "4032041_Monster_W4_Scholar_01_LocalLegend_Ability03_Part02": {
      "fileName": "4032041_Monster_W4_Scholar_01_LocalLegend_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
              "displayLines": "{[Skill03[0]]}",
              "constants": [],
              "variables": [
                "{[Skill03[0]]}"
              ]
            },
            "HitSplit": 0.25,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
              "displayLines": "{[Skill03[0]]}",
              "constants": [],
              "variables": [
                "{[Skill03[0]]}"
              ]
            },
            "HitSplit": 0.25,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
              "displayLines": "{[Skill03[0]]}",
              "constants": [],
              "variables": [
                "{[Skill03[0]]}"
              ]
            },
            "HitSplit": 0.5,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1507903432\">Enemy_W4_Scholar_01_LocalLegend_Stealth</a>[<span class=\"descriptionNumberColor\">Lurking</span>]"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "4032041_Monster_W4_Scholar_01_LocalLegend_Ability03_Part01": {
      "fileName": "4032041_Monster_W4_Scholar_01_LocalLegend_Ability03_Part01",
      "childAbilityList": [
        "4032041_Monster_W4_Scholar_01_Ability03_Camera",
        "4032041_Monster_W4_Scholar_01_LocalLegend_Ability03_Part01",
        "4032041_Monster_W4_Scholar_01_LocalLegend_Ability03_Part02"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W4_Scholar_01_LocalLegend_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      },
      "references": []
    },
    "4032041_Monster_W4_Scholar_01_LocalLegend_Ability01_Part02": {
      "fileName": "4032041_Monster_W4_Scholar_01_LocalLegend_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "flagName": "STAT_CTRL",
                "invertCondition": true
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "flagName": "Break",
                "invertCondition": true
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "flagName": "DisableAction",
                "invertCondition": true
              }
            ]
          }
        },
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "silent": true
        },
        {
          "name": "Exit Broken-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Reset Toughness",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1771764709\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood</a>[<span class=\"descriptionNumberColor\">HP Overload</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1507903432\">Enemy_W4_Scholar_01_LocalLegend_Stealth</a>[<span class=\"descriptionNumberColor\">Lurking</span>]"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4032041_Monster_W4_Scholar_01_LocalLegend_Ability01_Part01": {
      "fileName": "4032041_Monster_W4_Scholar_01_LocalLegend_Ability01_Part01",
      "childAbilityList": [
        "4032041_Monster_W4_Scholar_01_Ability01_Camera",
        "4032041_Monster_W4_Scholar_01_LocalLegend_Ability01_Part01",
        "4032041_Monster_W4_Scholar_01_LocalLegend_Ability01_Part02"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W4_Scholar_01_LocalLegend_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4032041_Monster_W4_Scholar_01_LocalLegend_AbilityP01": {
      "fileName": "4032041_Monster_W4_Scholar_01_LocalLegend_AbilityP01",
      "childAbilityList": [
        "4032041_Monster_W4_Scholar_01_AbilityP01"
      ],
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1296271884\">Enemy_W4_Scholar_01_ConfineHit_Controller</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1987258167\">Enemy_W4_Scholar_01_LocalLegend_AbilityP01</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1987258167\">Enemy_W4_Scholar_01_LocalLegend_AbilityP01</a>",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "MDF_IsNegative"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1258915271\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood_LockHP</a>"
                }
              ]
            },
            {
              "eventTrigger": "HP Change [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_NegativeHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPNegative</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_NegativeHP",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "flagName": "STAT_CTRL",
                            "invertCondition": true
                          },
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "flagName": "Break",
                            "invertCondition": true
                          },
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "flagName": "DisableAction",
                            "invertCondition": true
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "MDF_IsNegative",
                            "compareType": "=",
                            "value2": 0
                          }
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_IsNegative",
                      "value": 1
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_IsNegative",
                      "value": 0
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1972420771\">Enemy_XP_Elite01_02_LocalLegend_Ability03_Mark</a>[<span class=\"descriptionNumberColor\">Overloadable</span>]"
                    }
                  ]
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "MDF_IsNegative",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 0,
                  "includeMaxValueInRange": true,
                  "whenEnteringRange": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1771764709\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood</a>[<span class=\"descriptionNumberColor\">HP Overload</span>]"
                    }
                  ]
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 1,
                  "maxValue": 1,
                  "includeMaxValueInRange": true,
                  "whenEnteringRange": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W4_Scholar_01_LocalLegend_Ability01_Part01",
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "priorityTag": "EnemyReviveSelf",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1972420771\">Enemy_XP_Elite01_02_LocalLegend_Ability03_Mark</a>[<span class=\"descriptionNumberColor\">Overloadable</span>]"
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
    },
    "4032041_Monster_W4_Scholar_01_Ability03_Part02": {
      "fileName": "4032041_Monster_W4_Scholar_01_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-212213853\">Enemy_W4_Scholar_01_Stealth_Effect</a>"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
              "displayLines": "{[Skill03[0]]}",
              "constants": [],
              "variables": [
                "{[Skill03[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-19048827\">Enemy_W4_Scholar_01_Stealth</a>[<span class=\"descriptionNumberColor\">Lurking</span>]"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "4032041_Monster_W4_Scholar_01_Ability03_Part01": {
      "fileName": "4032041_Monster_W4_Scholar_01_Ability03_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W4_Scholar_01_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "4032041_Monster_W4_Scholar_01_Ability02_Part02": {
      "fileName": "4032041_Monster_W4_Scholar_01_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
              "displayLines": "{[Skill02[0]]}",
              "constants": [],
              "variables": [
                "{[Skill02[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "4032041_Monster_W4_Scholar_01_Ability02_Part01": {
      "fileName": "4032041_Monster_W4_Scholar_01_Ability02_Part01",
      "childAbilityList": [
        "4032041_Monster_W4_Scholar_01_Ability02_Camera",
        "4032041_Monster_W4_Scholar_01_Ability02_Part01",
        "4032041_Monster_W4_Scholar_01_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W4_Scholar_01_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      },
      "references": []
    },
    "4032041_Monster_W4_Scholar_01_Ability01_Part02": {
      "fileName": "4032041_Monster_W4_Scholar_01_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-19048827\">Enemy_W4_Scholar_01_Stealth</a>[<span class=\"descriptionNumberColor\">Lurking</span>]",
          "valuePerStack": {
            "MDF_StealthBreak_ActionDelayRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_389) || RETURN",
              "displayLines": "UnusedUnderThisBase_389",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_389"
              ]
            },
            "MDF_StealthBreak_AllDamageTypeTakenRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_390) || RETURN",
              "displayLines": "UnusedUnderThisBase_390",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_390"
              ]
            }
          }
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4032041_Monster_W4_Scholar_01_Ability01_Part01": {
      "fileName": "4032041_Monster_W4_Scholar_01_Ability01_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W4_Scholar_01_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4032041_Monster_W4_Scholar_01_AbilityP01": {
      "fileName": "4032041_Monster_W4_Scholar_01_AbilityP01",
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
          "modifier": "<a class=\"gModGreen\" id=\"1296271884\">Enemy_W4_Scholar_01_ConfineHit_Controller</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4032041_Modifiers": {
      "fileName": "4032041_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-82278057\">Enemy_W4_Scholar_01_LocalLegend_StealthBreak</a>",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "ForceHitH"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ],
          "duration": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1507903432\">Enemy_W4_Scholar_01_LocalLegend_Stealth</a>[<span class=\"descriptionNumberColor\">Lurking</span>]",
          "modifierFlags": [
            "Stealth"
          ],
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
                  "modifier": "<a class=\"gModGreen\" id=\"-212213853\">Enemy_W4_Scholar_01_Stealth_Effect</a>"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-212213853\">Enemy_W4_Scholar_01_Stealth_Effect</a>"
                }
              ]
            },
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team"
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1733989221\">TaskList_W4_Scholar_01_OnDieOrEscape</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Entity Left Battle [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team"
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1733989221\">TaskList_W4_Scholar_01_OnDieOrEscape</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-82278057\">Enemy_W4_Scholar_01_LocalLegend_StealthBreak</a>"
                },
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team"
                      },
                      {
                        "name": "Modifier Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "Stealth"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1733989221\">TaskList_W4_Scholar_01_OnDieOrEscape</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Unselectable Adjustment [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team"
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1733989221\">TaskList_W4_Scholar_01_OnDieOrEscape</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__-1733989221\">TaskList_W4_Scholar_01_OnDieOrEscape</a>",
              "parse": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Enemy Team All}}"
                        },
                        "value1": "TeamCharacterCount",
                        "compareType": "=",
                        "value2": 0,
                        "conditions": {
                          "name": "Has Flag",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "flagName": "Stealth",
                          "invertCondition": true
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1507903432\">Enemy_W4_Scholar_01_LocalLegend_Stealth</a>[<span class=\"descriptionNumberColor\">Lurking</span>]"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "Cannot become the primary target for abilities that require active selection. When Weakness is Broken or when all enemy units on the field aside from this unit are in \"Lurking\" state, dispels \"Lurking\" state for this unit. When there are no other enemy units on the battlefield, this unit dispels the \"Lurking\" state.",
          "type": "Buff",
          "effectName": "Lurking",
          "statusName": "Lurking"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__264567512\">Enemy_W4_Scholar_01_StealthBreak</a>[<span class=\"descriptionNumberColor\">Flawed</span>]",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "ForceHitH"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "advanceType": "Set",
                  "multiAdd": "MDF_ActionDelayRatio"
                }
              ]
            },
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
                    "operator": "Variables[0] (MDF_AllDamageTypeTakenRatio) || RETURN",
                    "displayLines": "MDF_AllDamageTypeTakenRatio",
                    "constants": [],
                    "variables": [
                      "MDF_AllDamageTypeTakenRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "DMG received increases by <span class=\"descriptionNumberColor\">MDF_AllDamageTypeTakenRatio</span>.",
          "type": "Debuff",
          "effectName": "Vulnerability",
          "statusName": "Flawed",
          "duration": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-212213853\">Enemy_W4_Scholar_01_Stealth_Effect</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-19048827\">Enemy_W4_Scholar_01_Stealth</a>[<span class=\"descriptionNumberColor\">Lurking</span>]",
          "modifierFlags": [
            "Stealth"
          ],
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
                  "modifier": "<a class=\"gModGreen\" id=\"-212213853\">Enemy_W4_Scholar_01_Stealth_Effect</a>"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-212213853\">Enemy_W4_Scholar_01_Stealth_Effect</a>"
                }
              ]
            },
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
                    "operator": "Variables[0] (MDF_StealthBreak_AllDamageTypeTakenRatio) || RETURN",
                    "displayLines": "MDF_StealthBreak_AllDamageTypeTakenRatio",
                    "constants": [],
                    "variables": [
                      "MDF_StealthBreak_AllDamageTypeTakenRatio"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team"
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1733989221\">TaskList_W4_Scholar_01_OnDieOrEscape</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Entity Left Battle [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team"
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1733989221\">TaskList_W4_Scholar_01_OnDieOrEscape</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"264567512\">Enemy_W4_Scholar_01_StealthBreak</a>[<span class=\"descriptionNumberColor\">Flawed</span>]",
                  "valuePerStack": {
                    "MDF_ActionDelayRatio": {
                      "operator": "Variables[0] (MDF_StealthBreak_ActionDelayRatio) || RETURN",
                      "displayLines": "MDF_StealthBreak_ActionDelayRatio",
                      "constants": [],
                      "variables": [
                        "MDF_StealthBreak_ActionDelayRatio"
                      ]
                    },
                    "MDF_AllDamageTypeTakenRatio": {
                      "operator": "Variables[0] (MDF_StealthBreak_AllDamageTypeTakenRatio) || RETURN",
                      "displayLines": "MDF_StealthBreak_AllDamageTypeTakenRatio",
                      "constants": [],
                      "variables": [
                        "MDF_StealthBreak_AllDamageTypeTakenRatio"
                      ]
                    }
                  }
                },
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team"
                      },
                      {
                        "name": "Modifier Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "Stealth"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1733989221\">TaskList_W4_Scholar_01_OnDieOrEscape</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Unselectable Adjustment [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team"
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1733989221\">TaskList_W4_Scholar_01_OnDieOrEscape</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__-1733989221\">TaskList_W4_Scholar_01_OnDieOrEscape</a>",
              "parse": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Enemy Team All}}"
                        },
                        "value1": "TeamCharacterCount",
                        "compareType": "=",
                        "value2": 0,
                        "conditions": {
                          "name": "Has Flag",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "flagName": "Stealth",
                          "invertCondition": true
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-19048827\">Enemy_W4_Scholar_01_Stealth</a>[<span class=\"descriptionNumberColor\">Lurking</span>]"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_StealthBreak_ActionDelayRatio",
            "MDF_StealthBreak_AllDamageTypeTakenRatio"
          ],
          "latentQueue": [],
          "description": "Cannot become the primary target for abilities that require active selection. DMG received increases by <span class=\"descriptionNumberColor\">MDF_StealthBreak_AllDamageTypeTakenRatio</span>. When Weakness is Broken or when all enemy units on the field aside from this unit are in \"Lurking\" state, dispels \"Lurking\" state for this unit. When there are no other enemy units on the battlefield, this unit dispels the \"Lurking\" state.",
          "type": "Buff",
          "effectName": "Lurking",
          "statusName": "Lurking"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1296271884\">Enemy_W4_Scholar_01_ConfineHit_Controller</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "phase": "Phase1"
                }
              ]
            },
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "flagName": "STAT_Confine"
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
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "references": []
    }
  }
}