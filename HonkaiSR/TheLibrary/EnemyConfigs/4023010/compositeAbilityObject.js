const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 4023010,
  "trimCharacterName": 4023010,
  "abilityList": [
    "4023010_Monster_W4_Griffin_Ability04_Part02",
    "4023010_Monster_W4_Griffin_Ability04_Part01",
    "4023010_Monster_W4_Griffin_Ability03_Part02",
    "4023010_Monster_W4_Griffin_Ability03_Part01",
    "4023010_Monster_W4_Griffin_Ability02_Part02",
    "4023010_Monster_W4_Griffin_Ability02_Part01",
    "4023010_Monster_W4_Griffin_Ability01_Part02",
    "4023010_Monster_W4_Griffin_Ability01_Part01",
    "4023010_Monster_W4_Griffin_PassiveAbilityInitiate",
    "4023010_Modifiers"
  ],
  "abilityObject": {
    "4023010_Monster_W4_Griffin_Ability04_Part02": {
      "fileName": "4023010_Monster_W4_Griffin_Ability04_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1209574560\">Enemy_W4_Griffin_UltraReady</a>"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
              "displayLines": "{[Skill04[0]]}",
              "constants": [],
              "variables": [
                "{[Skill04[0]]}"
              ]
            },
            "HitSplit": 0.25,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] ({[Skill04[1]]}) || RETURN",
              "displayLines": "{[Skill04[1]]}",
              "constants": [],
              "variables": [
                "{[Skill04[1]]}"
              ]
            },
            "HitSplit": 0.25,
            "Toughness": null,
            "Tags": null,
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
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
              "displayLines": "{[Skill04[0]]}",
              "constants": [],
              "variables": [
                "{[Skill04[0]]}"
              ]
            },
            "HitSplit": 0.25,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] ({[Skill04[1]]}) || RETURN",
              "displayLines": "{[Skill04[1]]}",
              "constants": [],
              "variables": [
                "{[Skill04[1]]}"
              ]
            },
            "HitSplit": 0.25,
            "Toughness": null,
            "Tags": null,
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
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
              "displayLines": "{[Skill04[0]]}",
              "constants": [],
              "variables": [
                "{[Skill04[0]]}"
              ]
            },
            "HitSplit": 0.25,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] ({[Skill04[1]]}) || RETURN",
              "displayLines": "{[Skill04[1]]}",
              "constants": [],
              "variables": [
                "{[Skill04[1]]}"
              ]
            },
            "HitSplit": 0.25,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "searchRandom": true,
          "ifTargetFound": [
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
                    "modifier": "<a class=\"gModGreen\" id=\"-1656896295\">Enemy_W4_Unicorn_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Oronyx's Mark</span>]",
                    "invertCondition": true
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"26062276\">Enemy_W4_Griffin_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Aquila's Mark</span>]",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                      "displayLines": "{[Skill04[0]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill04[0]]}"
                      ]
                    },
                    "HitSplit": 0.25,
                    "Toughness": null,
                    "Tags": null,
                    "EnergyGainPercent": "100%"
                  }
                }
              ],
              "failed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                      "displayLines": "{[Skill04[0]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill04[0]]}"
                      ]
                    },
                    "HitSplit": 0.25,
                    "Toughness": null,
                    "Tags": null,
                    "EnergyGainPercent": "100%"
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "value": "ENEMIES_OBJECT_UNUSED__181"
              },
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"26062276\">Enemy_W4_Griffin_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Aquila's Mark</span>]",
                  "valuePerStack": {
                    "_GriffinMark_SPCost": {
                      "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                      "displayLines": "{[PassiveSkill01[0]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill01[0]]}"
                      ]
                    },
                    "_GriffinMark_DamagePercentage": {
                      "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                      "displayLines": "{[PassiveSkill01[1]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill01[1]]}"
                      ]
                    },
                    "_MixedMark_LoseHpRatio": {
                      "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
                      "displayLines": "{[PassiveSkill01[2]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill01[2]]}"
                      ]
                    },
                    "_UnicornMark_Chance": {
                      "operator": "Variables[0] ({[PassiveSkill02[0]]}) || RETURN",
                      "displayLines": "{[PassiveSkill02[0]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill02[0]]}"
                      ]
                    },
                    "_UnicornMark_LifeTime": {
                      "operator": "Variables[0] ({[PassiveSkill02[1]]}) || RETURN",
                      "displayLines": "{[PassiveSkill02[1]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill02[1]]}"
                      ]
                    },
                    "_UnicornMark_ActionDelayRatio": {
                      "operator": "Variables[0] ({[PassiveSkill02[2]]}) || RETURN",
                      "displayLines": "{[PassiveSkill02[2]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill02[2]]}"
                      ]
                    },
                    "_UnicornMark_DebuffDamagePercentage": {
                      "operator": "Variables[0] ({[PassiveSkill02[3]]}) || RETURN",
                      "displayLines": "{[PassiveSkill02[3]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill02[3]]}"
                      ]
                    },
                    "_UnicornMark_DamagePercentage": {
                      "operator": "Variables[0] ({[PassiveSkill02[4]]}) || RETURN",
                      "displayLines": "{[PassiveSkill02[4]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill02[4]]}"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "searchRandom": true,
          "ifTargetFound": [
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
                    "modifier": "<a class=\"gModGreen\" id=\"-1656896295\">Enemy_W4_Unicorn_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Oronyx's Mark</span>]",
                    "invertCondition": true
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"26062276\">Enemy_W4_Griffin_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Aquila's Mark</span>]",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill04[1]]}) || RETURN",
                      "displayLines": "{[Skill04[1]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill04[1]]}"
                      ]
                    },
                    "HitSplit": 0.25,
                    "Toughness": null,
                    "Tags": null,
                    "EnergyGainPercent": "100%"
                  }
                }
              ],
              "failed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill04[1]]}) || RETURN",
                      "displayLines": "{[Skill04[1]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill04[1]]}"
                      ]
                    },
                    "HitSplit": 0.25,
                    "Toughness": null,
                    "Tags": null,
                    "EnergyGainPercent": "100%"
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "value": "ENEMIES_OBJECT_UNUSED__181"
              },
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"26062276\">Enemy_W4_Griffin_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Aquila's Mark</span>]",
                  "valuePerStack": {
                    "_GriffinMark_SPCost": {
                      "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                      "displayLines": "{[PassiveSkill01[0]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill01[0]]}"
                      ]
                    },
                    "_GriffinMark_DamagePercentage": {
                      "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                      "displayLines": "{[PassiveSkill01[1]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill01[1]]}"
                      ]
                    },
                    "_MixedMark_LoseHpRatio": {
                      "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
                      "displayLines": "{[PassiveSkill01[2]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill01[2]]}"
                      ]
                    },
                    "_UnicornMark_Chance": {
                      "operator": "Variables[0] ({[PassiveSkill02[0]]}) || RETURN",
                      "displayLines": "{[PassiveSkill02[0]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill02[0]]}"
                      ]
                    },
                    "_UnicornMark_LifeTime": {
                      "operator": "Variables[0] ({[PassiveSkill02[1]]}) || RETURN",
                      "displayLines": "{[PassiveSkill02[1]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill02[1]]}"
                      ]
                    },
                    "_UnicornMark_ActionDelayRatio": {
                      "operator": "Variables[0] ({[PassiveSkill02[2]]}) || RETURN",
                      "displayLines": "{[PassiveSkill02[2]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill02[2]]}"
                      ]
                    },
                    "_UnicornMark_DebuffDamagePercentage": {
                      "operator": "Variables[0] ({[PassiveSkill02[3]]}) || RETURN",
                      "displayLines": "{[PassiveSkill02[3]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill02[3]]}"
                      ]
                    },
                    "_UnicornMark_DamagePercentage": {
                      "operator": "Variables[0] ({[PassiveSkill02[4]]}) || RETURN",
                      "displayLines": "{[PassiveSkill02[4]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill02[4]]}"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "value": "ENEMIES_OBJECT_UNUSED__181"
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{ST and Blast}}"
              },
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"263350627\">Enemy_XP_Elite01_Burn</a>[<span class=\"descriptionNumberColor\">Enkindle</span>]"
              },
              "ifTargetFound": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "Damage": {
                      "operator": "Variables[0] (UnusedUnderThisBase_378) || RETURN",
                      "displayLines": "UnusedUnderThisBase_378",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_378"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null
                  }
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2109418688\">Enemy_W4_Griffin_SignOnAvatar</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
          "onlyRemoveOwnersInstance": true
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "4023010_Monster_W4_Griffin_Ability04_Part01": {
      "fileName": "4023010_Monster_W4_Griffin_Ability04_Part01",
      "childAbilityList": [
        "4023010_Monster_W4_Griffin_Ability04_Part01",
        "4023010_Monster_W4_Griffin_Ability04_Part02",
        "4023010_Monster_W4_Griffin_Ability04_Camera"
      ],
      "skillTrigger": "Skill04",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target Count",
            "target": {
              "name": "Target Name",
              "target": "{{Noontide Gryphon: Skill04 Target}}"
            },
            "compareType": "=",
            "value2": 2,
            "livingTargets": true
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "target2": {
                  "name": "Target Sequence",
                  "Sequence": [
                    {
                      "name": "Target Name",
                      "target": "{{Player Team All}}"
                    },
                    {
                      "name": "Return Target",
                      "value": 1
                    }
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W4_Griffin_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target",
        "subTarget": "Blast Targets"
      },
      "references": []
    },
    "4023010_Monster_W4_Griffin_Ability03_Part02": {
      "fileName": "4023010_Monster_W4_Griffin_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Noontide Gryphon: Skill03 Target}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2109418688\">Enemy_W4_Griffin_SignOnAvatar</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1926757602\">Enemy_W4_Griffin_Ability03_Mark</a>",
          "onlyRemoveOwnersInstance": true
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1209574560\">Enemy_W4_Griffin_UltraReady</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "4023010_Monster_W4_Griffin_Ability03_Part01": {
      "fileName": "4023010_Monster_W4_Griffin_Ability03_Part01",
      "childAbilityList": [
        "4023010_Monster_W4_Griffin_Ability03_Camera",
        "4023010_Monster_W4_Griffin_Ability03_Part01",
        "4023010_Monster_W4_Griffin_Ability03_Part02"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"26062276\">Enemy_W4_Griffin_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Aquila's Mark</span>]"
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1926757602\">Enemy_W4_Griffin_Ability03_Mark</a>"
            }
          ]
        },
        {
          "name": "Define Custom Variable with Team Count",
          "target": {
            "name": "Target Name",
            "target": "{{Noontide Gryphon: Skill03 Target}}"
          },
          "variableName": "_TargetCount",
          "livingTargets": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_TargetCount",
            "compareType": "<",
            "value2": 1
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1926757602\">Enemy_W4_Griffin_Ability03_Mark</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W4_Griffin_Ability03_Part02",
          "isTrigger": true
        },
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
    "4023010_Monster_W4_Griffin_Ability02_Part02": {
      "fileName": "4023010_Monster_W4_Griffin_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1273402705\">Monster_W4_Griffin_NoSummon</a>",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Mark Entity For Immediate Death",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              }
            },
            {
              "name": "Force Entity Death",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              }
            },
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
                "displayLines": "{[Skill02[1]]}",
                "constants": [],
                "variables": [
                  "{[Skill02[1]]}"
                ]
              },
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (SummonID01) || RETURN",
                    "displayLines": "SummonID01",
                    "constants": [],
                    "variables": [
                      "SummonID01"
                    ]
                  },
                  "locationType": "AroundCaster"
                }
              ]
            },
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
                "displayLines": "{[Skill02[2]]}",
                "constants": [],
                "variables": [
                  "{[Skill02[2]]}"
                ]
              },
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (SummonID02) || RETURN",
                    "displayLines": "SummonID02",
                    "constants": [],
                    "variables": [
                      "SummonID02"
                    ]
                  },
                  "locationType": "AroundCaster"
                }
              ]
            },
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
                "displayLines": "{[Skill02[3]]}",
                "constants": [],
                "variables": [
                  "{[Skill02[3]]}"
                ]
              },
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (SummonID03) || RETURN",
                    "displayLines": "SummonID03",
                    "constants": [],
                    "variables": [
                      "SummonID03"
                    ]
                  },
                  "locationType": "AroundCaster"
                }
              ]
            },
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] ({[Skill02[4]]}) || RETURN",
                "displayLines": "{[Skill02[4]]}",
                "constants": [],
                "variables": [
                  "{[Skill02[4]]}"
                ]
              },
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (SummonID04) || RETURN",
                    "displayLines": "SummonID04",
                    "constants": [],
                    "variables": [
                      "SummonID04"
                    ]
                  },
                  "locationType": "AroundCaster"
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target Count",
            "target": {
              "name": "Target Name",
              "target": "{{Player Team All}}"
            },
            "compareType": "NOT=",
            "value2": 1,
            "livingTargets": true
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target Count",
            "target": {
              "name": "Target Name",
              "target": "{{Player Team All}}"
            },
            "compareType": ">=",
            "value2": 3,
            "livingTargets": true
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Noontide Gryphon: Skill02 Target}}"
                  },
                  {
                    "name": "Target Index"
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"1749508957\">Monster_W4_Griffin_Ability02_Target01</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Noontide Gryphon: Skill02 Target}}"
                  },
                  {
                    "name": "Target Index",
                    "indexValue": 1
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"1699176100\">Monster_W4_Griffin_Ability02_Target02</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Noontide Gryphon: Skill02 Target}}"
                  },
                  {
                    "name": "Target Index",
                    "indexValue": 2
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"1715953719\">Monster_W4_Griffin_Ability02_Target03</a>"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1624884388\">Monster_W4_Griffin_Ability02_Attack01</a>"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1675217245\">Monster_W4_Griffin_Ability02_Attack02</a>"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1658439626\">Monster_W4_Griffin_Ability02_Attack03</a>"
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count",
                "target": {
                  "name": "Target Name",
                  "target": "{{Player Team All}}"
                },
                "compareType": ">=",
                "value2": 2,
                "livingTargets": true
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Noontide Gryphon: Skill02 Target}}"
                      },
                      {
                        "name": "Target Index"
                      }
                    ]
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1749508957\">Monster_W4_Griffin_Ability02_Target01</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Noontide Gryphon: Skill02 Target}}"
                      },
                      {
                        "name": "Target Index",
                        "indexValue": 1
                      }
                    ]
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1699176100\">Monster_W4_Griffin_Ability02_Target02</a>"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1624884388\">Monster_W4_Griffin_Ability02_Attack01</a>"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1675217245\">Monster_W4_Griffin_Ability02_Attack02</a>"
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Noontide Gryphon: Skill02 Target}}"
                      },
                      {
                        "name": "Target Index"
                      }
                    ]
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1749508957\">Monster_W4_Griffin_Ability02_Target01</a>"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"299917600\">Monster_W4_Griffin_Ability02_Attack01_1P</a>"
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1749508957\">Monster_W4_Griffin_Ability02_Target01</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1699176100\">Monster_W4_Griffin_Ability02_Target02</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1715953719\">Monster_W4_Griffin_Ability02_Target03</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_Location",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Assign Target Battle-Location",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "spot": "KeepOnFirst"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_Location",
                  "value": 1
                }
              ],
              "failed": [
                {
                  "name": "Assign Target Battle-Location",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "spot": "KeepOnLast"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_Location",
                  "value": 0
                }
              ]
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "functions": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__299917600\">Monster_W4_Griffin_Ability02_Attack01_1P</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Sequence",
                      "Sequence": [
                        {
                          "name": "Target Name",
                          "target": "{{Player Team All}}"
                        },
                        {
                          "name": "Target Filter",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1749508957\">Monster_W4_Griffin_Ability02_Target01</a>"
                          }
                        }
                      ]
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1656896295\">Enemy_W4_Unicorn_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Oronyx's Mark</span>]",
                    "invertCondition": true
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Sequence",
                      "Sequence": [
                        {
                          "name": "Target Name",
                          "target": "{{Player Team All}}"
                        },
                        {
                          "name": "Target Filter",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1749508957\">Monster_W4_Griffin_Ability02_Target01</a>"
                          }
                        }
                      ]
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"26062276\">Enemy_W4_Griffin_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Aquila's Mark</span>]",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1749508957\">Monster_W4_Griffin_Ability02_Target01</a>"
                        }
                      }
                    ]
                  },
                  "AttackScaling": {
                    "DamageType": "Fire",
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
                }
              ],
              "failed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1749508957\">Monster_W4_Griffin_Ability02_Target01</a>"
                        }
                      }
                    ]
                  },
                  "AttackScaling": {
                    "DamageType": "Fire",
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
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "value": "ENEMIES_OBJECT_UNUSED__181"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1749508957\">Monster_W4_Griffin_Ability02_Target01</a>"
                        }
                      }
                    ]
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"263350627\">Enemy_XP_Elite01_Burn</a>[<span class=\"descriptionNumberColor\">Enkindle</span>]",
                  "duration": {
                    "operator": "Variables[0] (UnusedUnderThisBase_376) || RETURN",
                    "displayLines": "UnusedUnderThisBase_376",
                    "constants": [],
                    "variables": [
                      "UnusedUnderThisBase_376"
                    ]
                  },
                  "baseChance": {
                    "operator": "Variables[0] (UnusedUnderThisBase_375) || RETURN",
                    "displayLines": "UnusedUnderThisBase_375",
                    "constants": [],
                    "variables": [
                      "UnusedUnderThisBase_375"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_DamagePercentage_Layer": {
                      "operator": "Variables[0] (UnusedUnderThisBase_377) || RETURN",
                      "displayLines": "UnusedUnderThisBase_377",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_377"
                      ]
                    }
                  }
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1749508957\">Monster_W4_Griffin_Ability02_Target01</a>"
                        }
                      }
                    ]
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"26062276\">Enemy_W4_Griffin_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Aquila's Mark</span>]",
                  "valuePerStack": {
                    "_GriffinMark_SPCost": {
                      "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                      "displayLines": "{[PassiveSkill01[0]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill01[0]]}"
                      ]
                    },
                    "_GriffinMark_DamagePercentage": {
                      "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                      "displayLines": "{[PassiveSkill01[1]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill01[1]]}"
                      ]
                    },
                    "_MixedMark_LoseHpRatio": {
                      "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
                      "displayLines": "{[PassiveSkill01[2]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill01[2]]}"
                      ]
                    },
                    "_UnicornMark_Chance": {
                      "operator": "Variables[0] ({[PassiveSkill02[0]]}) || RETURN",
                      "displayLines": "{[PassiveSkill02[0]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill02[0]]}"
                      ]
                    },
                    "_UnicornMark_LifeTime": {
                      "operator": "Variables[0] ({[PassiveSkill02[1]]}) || RETURN",
                      "displayLines": "{[PassiveSkill02[1]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill02[1]]}"
                      ]
                    },
                    "_UnicornMark_ActionDelayRatio": {
                      "operator": "Variables[0] ({[PassiveSkill02[2]]}) || RETURN",
                      "displayLines": "{[PassiveSkill02[2]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill02[2]]}"
                      ]
                    },
                    "_UnicornMark_DebuffDamagePercentage": {
                      "operator": "Variables[0] ({[PassiveSkill02[3]]}) || RETURN",
                      "displayLines": "{[PassiveSkill02[3]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill02[3]]}"
                      ]
                    },
                    "_UnicornMark_DamagePercentage": {
                      "operator": "Variables[0] ({[PassiveSkill02[4]]}) || RETURN",
                      "displayLines": "{[PassiveSkill02[4]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill02[4]]}"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__1624884388\">Monster_W4_Griffin_Ability02_Attack01</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Sequence",
                      "Sequence": [
                        {
                          "name": "Target Name",
                          "target": "{{Player Team All}}"
                        },
                        {
                          "name": "Target Filter",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1749508957\">Monster_W4_Griffin_Ability02_Target01</a>"
                          }
                        }
                      ]
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1656896295\">Enemy_W4_Unicorn_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Oronyx's Mark</span>]",
                    "invertCondition": true
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Sequence",
                      "Sequence": [
                        {
                          "name": "Target Name",
                          "target": "{{Player Team All}}"
                        },
                        {
                          "name": "Target Filter",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1749508957\">Monster_W4_Griffin_Ability02_Target01</a>"
                          }
                        }
                      ]
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"26062276\">Enemy_W4_Griffin_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Aquila's Mark</span>]",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1749508957\">Monster_W4_Griffin_Ability02_Target01</a>"
                        }
                      }
                    ]
                  },
                  "AttackScaling": {
                    "DamageType": "Fire",
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
                }
              ],
              "failed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1749508957\">Monster_W4_Griffin_Ability02_Target01</a>"
                        }
                      }
                    ]
                  },
                  "AttackScaling": {
                    "DamageType": "Fire",
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
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "value": "ENEMIES_OBJECT_UNUSED__181"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1749508957\">Monster_W4_Griffin_Ability02_Target01</a>"
                        }
                      }
                    ]
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"263350627\">Enemy_XP_Elite01_Burn</a>[<span class=\"descriptionNumberColor\">Enkindle</span>]",
                  "duration": {
                    "operator": "Variables[0] (UnusedUnderThisBase_376) || RETURN",
                    "displayLines": "UnusedUnderThisBase_376",
                    "constants": [],
                    "variables": [
                      "UnusedUnderThisBase_376"
                    ]
                  },
                  "baseChance": {
                    "operator": "Variables[0] (UnusedUnderThisBase_375) || RETURN",
                    "displayLines": "UnusedUnderThisBase_375",
                    "constants": [],
                    "variables": [
                      "UnusedUnderThisBase_375"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_DamagePercentage_Layer": {
                      "operator": "Variables[0] (UnusedUnderThisBase_377) || RETURN",
                      "displayLines": "UnusedUnderThisBase_377",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_377"
                      ]
                    }
                  }
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1749508957\">Monster_W4_Griffin_Ability02_Target01</a>"
                        }
                      }
                    ]
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"26062276\">Enemy_W4_Griffin_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Aquila's Mark</span>]",
                  "valuePerStack": {
                    "_GriffinMark_SPCost": {
                      "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                      "displayLines": "{[PassiveSkill01[0]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill01[0]]}"
                      ]
                    },
                    "_GriffinMark_DamagePercentage": {
                      "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                      "displayLines": "{[PassiveSkill01[1]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill01[1]]}"
                      ]
                    },
                    "_MixedMark_LoseHpRatio": {
                      "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
                      "displayLines": "{[PassiveSkill01[2]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill01[2]]}"
                      ]
                    },
                    "_UnicornMark_Chance": {
                      "operator": "Variables[0] ({[PassiveSkill02[0]]}) || RETURN",
                      "displayLines": "{[PassiveSkill02[0]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill02[0]]}"
                      ]
                    },
                    "_UnicornMark_LifeTime": {
                      "operator": "Variables[0] ({[PassiveSkill02[1]]}) || RETURN",
                      "displayLines": "{[PassiveSkill02[1]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill02[1]]}"
                      ]
                    },
                    "_UnicornMark_ActionDelayRatio": {
                      "operator": "Variables[0] ({[PassiveSkill02[2]]}) || RETURN",
                      "displayLines": "{[PassiveSkill02[2]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill02[2]]}"
                      ]
                    },
                    "_UnicornMark_DebuffDamagePercentage": {
                      "operator": "Variables[0] ({[PassiveSkill02[3]]}) || RETURN",
                      "displayLines": "{[PassiveSkill02[3]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill02[3]]}"
                      ]
                    },
                    "_UnicornMark_DamagePercentage": {
                      "operator": "Variables[0] ({[PassiveSkill02[4]]}) || RETURN",
                      "displayLines": "{[PassiveSkill02[4]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill02[4]]}"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__1675217245\">Monster_W4_Griffin_Ability02_Attack02</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Sequence",
                      "Sequence": [
                        {
                          "name": "Target Name",
                          "target": "{{Player Team All}}"
                        },
                        {
                          "name": "Target Filter",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1699176100\">Monster_W4_Griffin_Ability02_Target02</a>"
                          }
                        }
                      ]
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1656896295\">Enemy_W4_Unicorn_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Oronyx's Mark</span>]",
                    "invertCondition": true
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Sequence",
                      "Sequence": [
                        {
                          "name": "Target Name",
                          "target": "{{Player Team All}}"
                        },
                        {
                          "name": "Target Filter",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1699176100\">Monster_W4_Griffin_Ability02_Target02</a>"
                          }
                        }
                      ]
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"26062276\">Enemy_W4_Griffin_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Aquila's Mark</span>]",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1699176100\">Monster_W4_Griffin_Ability02_Target02</a>"
                        }
                      }
                    ]
                  },
                  "AttackScaling": {
                    "DamageType": "Fire",
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
                }
              ],
              "failed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1699176100\">Monster_W4_Griffin_Ability02_Target02</a>"
                        }
                      }
                    ]
                  },
                  "AttackScaling": {
                    "DamageType": "Fire",
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
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "value": "ENEMIES_OBJECT_UNUSED__181"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1699176100\">Monster_W4_Griffin_Ability02_Target02</a>"
                        }
                      }
                    ]
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"263350627\">Enemy_XP_Elite01_Burn</a>[<span class=\"descriptionNumberColor\">Enkindle</span>]",
                  "duration": {
                    "operator": "Variables[0] (UnusedUnderThisBase_376) || RETURN",
                    "displayLines": "UnusedUnderThisBase_376",
                    "constants": [],
                    "variables": [
                      "UnusedUnderThisBase_376"
                    ]
                  },
                  "baseChance": {
                    "operator": "Variables[0] (UnusedUnderThisBase_375) || RETURN",
                    "displayLines": "UnusedUnderThisBase_375",
                    "constants": [],
                    "variables": [
                      "UnusedUnderThisBase_375"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_DamagePercentage_Layer": {
                      "operator": "Variables[0] (UnusedUnderThisBase_377) || RETURN",
                      "displayLines": "UnusedUnderThisBase_377",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_377"
                      ]
                    }
                  }
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1699176100\">Monster_W4_Griffin_Ability02_Target02</a>"
                        }
                      }
                    ]
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"26062276\">Enemy_W4_Griffin_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Aquila's Mark</span>]",
                  "valuePerStack": {
                    "_GriffinMark_SPCost": {
                      "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                      "displayLines": "{[PassiveSkill01[0]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill01[0]]}"
                      ]
                    },
                    "_GriffinMark_DamagePercentage": {
                      "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                      "displayLines": "{[PassiveSkill01[1]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill01[1]]}"
                      ]
                    },
                    "_MixedMark_LoseHpRatio": {
                      "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
                      "displayLines": "{[PassiveSkill01[2]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill01[2]]}"
                      ]
                    },
                    "_UnicornMark_Chance": {
                      "operator": "Variables[0] ({[PassiveSkill02[0]]}) || RETURN",
                      "displayLines": "{[PassiveSkill02[0]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill02[0]]}"
                      ]
                    },
                    "_UnicornMark_LifeTime": {
                      "operator": "Variables[0] ({[PassiveSkill02[1]]}) || RETURN",
                      "displayLines": "{[PassiveSkill02[1]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill02[1]]}"
                      ]
                    },
                    "_UnicornMark_ActionDelayRatio": {
                      "operator": "Variables[0] ({[PassiveSkill02[2]]}) || RETURN",
                      "displayLines": "{[PassiveSkill02[2]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill02[2]]}"
                      ]
                    },
                    "_UnicornMark_DebuffDamagePercentage": {
                      "operator": "Variables[0] ({[PassiveSkill02[3]]}) || RETURN",
                      "displayLines": "{[PassiveSkill02[3]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill02[3]]}"
                      ]
                    },
                    "_UnicornMark_DamagePercentage": {
                      "operator": "Variables[0] ({[PassiveSkill02[4]]}) || RETURN",
                      "displayLines": "{[PassiveSkill02[4]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill02[4]]}"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__1658439626\">Monster_W4_Griffin_Ability02_Attack03</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Sequence",
                      "Sequence": [
                        {
                          "name": "Target Name",
                          "target": "{{Player Team All}}"
                        },
                        {
                          "name": "Target Filter",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1715953719\">Monster_W4_Griffin_Ability02_Target03</a>"
                          }
                        }
                      ]
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1656896295\">Enemy_W4_Unicorn_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Oronyx's Mark</span>]",
                    "invertCondition": true
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Sequence",
                      "Sequence": [
                        {
                          "name": "Target Name",
                          "target": "{{Player Team All}}"
                        },
                        {
                          "name": "Target Filter",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1715953719\">Monster_W4_Griffin_Ability02_Target03</a>"
                          }
                        }
                      ]
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"26062276\">Enemy_W4_Griffin_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Aquila's Mark</span>]",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1715953719\">Monster_W4_Griffin_Ability02_Target03</a>"
                        }
                      }
                    ]
                  },
                  "AttackScaling": {
                    "DamageType": "Fire",
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
                }
              ],
              "failed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1715953719\">Monster_W4_Griffin_Ability02_Target03</a>"
                        }
                      }
                    ]
                  },
                  "AttackScaling": {
                    "DamageType": "Fire",
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
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "value": "ENEMIES_OBJECT_UNUSED__181"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1715953719\">Monster_W4_Griffin_Ability02_Target03</a>"
                        }
                      }
                    ]
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"263350627\">Enemy_XP_Elite01_Burn</a>[<span class=\"descriptionNumberColor\">Enkindle</span>]",
                  "duration": {
                    "operator": "Variables[0] (UnusedUnderThisBase_376) || RETURN",
                    "displayLines": "UnusedUnderThisBase_376",
                    "constants": [],
                    "variables": [
                      "UnusedUnderThisBase_376"
                    ]
                  },
                  "baseChance": {
                    "operator": "Variables[0] (UnusedUnderThisBase_375) || RETURN",
                    "displayLines": "UnusedUnderThisBase_375",
                    "constants": [],
                    "variables": [
                      "UnusedUnderThisBase_375"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_DamagePercentage_Layer": {
                      "operator": "Variables[0] (UnusedUnderThisBase_377) || RETURN",
                      "displayLines": "UnusedUnderThisBase_377",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_377"
                      ]
                    }
                  }
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1715953719\">Monster_W4_Griffin_Ability02_Target03</a>"
                        }
                      }
                    ]
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"26062276\">Enemy_W4_Griffin_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Aquila's Mark</span>]",
                  "valuePerStack": {
                    "_GriffinMark_SPCost": {
                      "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                      "displayLines": "{[PassiveSkill01[0]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill01[0]]}"
                      ]
                    },
                    "_GriffinMark_DamagePercentage": {
                      "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                      "displayLines": "{[PassiveSkill01[1]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill01[1]]}"
                      ]
                    },
                    "_MixedMark_LoseHpRatio": {
                      "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
                      "displayLines": "{[PassiveSkill01[2]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill01[2]]}"
                      ]
                    },
                    "_UnicornMark_Chance": {
                      "operator": "Variables[0] ({[PassiveSkill02[0]]}) || RETURN",
                      "displayLines": "{[PassiveSkill02[0]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill02[0]]}"
                      ]
                    },
                    "_UnicornMark_LifeTime": {
                      "operator": "Variables[0] ({[PassiveSkill02[1]]}) || RETURN",
                      "displayLines": "{[PassiveSkill02[1]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill02[1]]}"
                      ]
                    },
                    "_UnicornMark_ActionDelayRatio": {
                      "operator": "Variables[0] ({[PassiveSkill02[2]]}) || RETURN",
                      "displayLines": "{[PassiveSkill02[2]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill02[2]]}"
                      ]
                    },
                    "_UnicornMark_DebuffDamagePercentage": {
                      "operator": "Variables[0] ({[PassiveSkill02[3]]}) || RETURN",
                      "displayLines": "{[PassiveSkill02[3]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill02[3]]}"
                      ]
                    },
                    "_UnicornMark_DamagePercentage": {
                      "operator": "Variables[0] ({[PassiveSkill02[4]]}) || RETURN",
                      "displayLines": "{[PassiveSkill02[4]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill02[4]]}"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1715953719\">Monster_W4_Griffin_Ability02_Target03</a>",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1699176100\">Monster_W4_Griffin_Ability02_Target02</a>",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1749508957\">Monster_W4_Griffin_Ability02_Target01</a>",
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "4023010_Monster_W4_Griffin_Ability02_Part01": {
      "fileName": "4023010_Monster_W4_Griffin_Ability02_Part01",
      "childAbilityList": [
        "4023010_Monster_W4_Griffin_Ability02_Camera",
        "4023010_Monster_W4_Griffin_Ability02_Part01",
        "4023010_Monster_W4_Griffin_Ability02_Part02"
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
          "ability": "Monster_W4_Griffin_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}",
        "targetIsVariable": true
      },
      "references": []
    },
    "4023010_Monster_W4_Griffin_Ability01_Part02": {
      "fileName": "4023010_Monster_W4_Griffin_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
              "displayLines": "{[Skill01[0]]}",
              "constants": [],
              "variables": [
                "{[Skill01[0]]}"
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
          "name": "IF",
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "value": "ENEMIES_OBJECT_UNUSED__181"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"263350627\">Enemy_XP_Elite01_Burn</a>[<span class=\"descriptionNumberColor\">Enkindle</span>]",
              "duration": {
                "operator": "Variables[0] (UnusedUnderThisBase_376) || RETURN",
                "displayLines": "UnusedUnderThisBase_376",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_376"
                ]
              },
              "baseChance": {
                "operator": "Variables[0] (UnusedUnderThisBase_375) || RETURN",
                "displayLines": "UnusedUnderThisBase_375",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_375"
                ]
              },
              "valuePerStack": {
                "MDF_DamagePercentage_Layer": {
                  "operator": "Variables[0] (UnusedUnderThisBase_377) || RETURN",
                  "displayLines": "UnusedUnderThisBase_377",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_377"
                  ]
                }
              }
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "4023010_Monster_W4_Griffin_Ability01_Part01": {
      "fileName": "4023010_Monster_W4_Griffin_Ability01_Part01",
      "childAbilityList": [
        "4023010_Monster_W4_Griffin_Ability01_Camera",
        "4023010_Monster_W4_Griffin_Ability01_Part01",
        "4023010_Monster_W4_Griffin_Ability01_Part02"
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
          "ability": "Monster_W4_Griffin_Ability01_Part02",
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
    "4023010_Monster_W4_Griffin_PassiveAbilityInitiate": {
      "fileName": "4023010_Monster_W4_Griffin_PassiveAbilityInitiate",
      "skillTrigger": "PassiveSkill01",
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
          "modifier": "<a class=\"gModGreen\" id=\"203272356\">Enemy_W4_Griffin_Status</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1166907060\">Enemy_Standard_MuteHitFly</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
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
          "for": "<a class=\"gModGreen\" id=\"mod__203272356\">Enemy_W4_Griffin_Status</a>",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2109418688\">Enemy_W4_Griffin_SignOnAvatar</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
                  "onlyRemoveOwnersInstance": true
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 2,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 4,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "AIFlag",
                      "context": "TargetEntity",
                      "value": -1,
                      "max": 20
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 5,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "AIFlag",
                      "value": 1
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2109418688\">Enemy_W4_Griffin_SignOnAvatar</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
                  "onlyRemoveOwnersInstance": true
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1209574560\">Enemy_W4_Griffin_UltraReady</a>"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "4023010_Modifiers": {
      "fileName": "4023010_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1065862437\">W4_Griffin_BattleScore1</a>",
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
                  "variableName": "W4_Griffin_00_Debuff_Resolve"
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "W4_Griffin_00_Debuff_Resolve",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 3,
                  "maxValue": 3,
                  "includeMaxValueInRange": true,
                  "whenEnteringRange": [
                    {
                      "name": "Achievement",
                      "matchTags": true,
                      "relatedAchievements": [
                        {
                          "title": "Fading Light",
                          "desc": "Remove #1 \"Aquila's Mark(s)\" through defeating enemy targets in a single battle",
                          "rarity": "Low",
                          "params": [
                            3
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1273402705\">Monster_W4_Griffin_NoSummon</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1209574560\">Enemy_W4_Griffin_UltraReady</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "phase": "PhaseNormal"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
                },
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "phase": "PhaseNormal"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1926757602\">Enemy_W4_Griffin_Ability03_Mark</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2106879681\">Enemy_W4_Griffin_AttackSign_OnAvatar</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "AttackSign"
          ],
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
                  "modifier": "<a class=\"gModGreen\" id=\"-2109418688\">Enemy_W4_Griffin_SignOnAvatar</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
                  "onlyRemoveOwnersInstance": true
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2109418688\">Enemy_W4_Griffin_SignOnAvatar</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "KeepOnDeathrattle"
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
                  "modifier": "<a class=\"gModGreen\" id=\"2106879681\">Enemy_W4_Griffin_AttackSign_OnAvatar</a>"
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
                  "modifier": "<a class=\"gModGreen\" id=\"2106879681\">Enemy_W4_Griffin_AttackSign_OnAvatar</a>",
                  "onlyRemoveOwnersInstance": true
                }
              ]
            },
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target Count",
                    "target": {
                      "name": "Target Sequence",
                      "Sequence": [
                        {
                          "name": "Target Name",
                          "target": "{{Enemy Team All}}"
                        },
                        {
                          "name": "Target Filter",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"203272356\">Enemy_W4_Griffin_Status</a>"
                          }
                        }
                      ]
                    },
                    "compareType": ">",
                    "value2": 0,
                    "livingTargets": true
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{Player Team All}}"
                          },
                          {
                            "name": "Target Filter",
                            "conditions": {
                              "name": "Has Modifier",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-2109418688\">Enemy_W4_Griffin_SignOnAvatar</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
                              "invertCondition": true,
                              "casterFilter": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              }
                            }
                          }
                        ]
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-2109418688\">Enemy_W4_Griffin_SignOnAvatar</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "Locked on by %CasterName as their attack target.",
          "type": "Other",
          "effectName": "Target Locked On",
          "statusName": "Lock On"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1452860689\">Enemy_W4_Griffin_RemoveSignAvatar</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-716514127\">Enemy_W4_Griffin_Debuff_FirstNotice</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-964877890\">Enemy_W4_Griffin_Debuff_UITop</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "RemoveWhenCasterUnstage"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__478350921\">Enemy_W4_Griffin_Debuff_TriggerMix_Mark</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-86216455\">Enemy_W4_Griffin_Debuff_Trigger_Mark</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__26062276\">Enemy_W4_Griffin_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Aquila's Mark</span>]",
          "stackType": "Replace",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "RemoveWhenCasterUnstage"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1506863241\">Enemy_W4_Griffin_Debuff_Status</a>"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-964877890\">Enemy_W4_Griffin_Debuff_UITop</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1065862437\">W4_Griffin_BattleScore1</a>",
                  "casterAssign": "TargetSelf"
                },
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "MDF_Layer",
                  "modifierName": "<a class=\"gModGreen\" id=\"26062276\">Enemy_W4_Griffin_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Aquila's Mark</span>]",
                  "multiplier": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_Layer",
                        "compareType": "<",
                        "value2": 2
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1656896295\">Enemy_W4_Unicorn_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Oronyx's Mark</span>]",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-964877890\">Enemy_W4_Griffin_Debuff_UITop</a>"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Level Entity}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-716514127\">Enemy_W4_Griffin_Debuff_FirstNotice</a>",
                        "invertCondition": true
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-716514127\">Enemy_W4_Griffin_Debuff_FirstNotice</a>"
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_Layer",
                        "compareType": "=",
                        "value2": 2
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-86216455\">Enemy_W4_Griffin_Debuff_Trigger_Mark</a>"
                        },
                        {
                          "name": "Update Energy",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "value": {
                            "operator": "Constants[0] (1) || INVERT || Variables[0] (_GriffinMark_SPCost) || MUL || RETURN",
                            "displayLines": "(-1 * _GriffinMark_SPCost)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "_GriffinMark_SPCost"
                            ]
                          },
                          "isFixed": "(Fixed)"
                        },
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Fire",
                            "Damage": {
                              "operator": "Variables[0] (_GriffinMark_DamagePercentage) || RETURN",
                              "displayLines": "_GriffinMark_DamagePercentage",
                              "constants": [],
                              "variables": [
                                "_GriffinMark_DamagePercentage"
                              ]
                            },
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"26062276\">Enemy_W4_Griffin_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Aquila's Mark</span>]",
                          "removeAllInstances": true
                        },
                        "Modifier Deletes Itself"
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1656896295\">Enemy_W4_Unicorn_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Oronyx's Mark</span>]"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"478350921\">Enemy_W4_Griffin_Debuff_TriggerMix_Mark</a>"
                        },
                        {
                          "name": "Define Custom Variable with Stat",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "_MaxHP",
                          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                        },
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "AttackScaling": {
                            "DamageType": {
                              "name": "Damage Type Source",
                              "sourceType": {}
                            },
                            "DamageFlat": {
                              "operator": "Variables[0] (_MaxHP) || Variables[1] (_MixedMark_LoseHpRatio) || MUL || RETURN",
                              "displayLines": "(_MaxHP * _MixedMark_LoseHpRatio)",
                              "constants": [],
                              "variables": [
                                "_MaxHP",
                                "_MixedMark_LoseHpRatio"
                              ]
                            },
                            "dmgFormulaFinal": "Converted DMG Base",
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "True DMG"
                          }
                        },
                        {
                          "name": "Update Energy",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "value": {
                            "operator": "Constants[0] (1) || INVERT || Variables[0] (_GriffinMark_SPCost) || MUL || RETURN",
                            "displayLines": "(-1 * _GriffinMark_SPCost)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "_GriffinMark_SPCost"
                            ]
                          },
                          "isFixed": "(Fixed)"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"2065489118\">Standard_Entangle</a>[<span class=\"descriptionNumberColor\">Entanglement</span>]",
                          "duration": {
                            "operator": "Variables[0] (_UnicornMark_LifeTime) || RETURN",
                            "displayLines": "_UnicornMark_LifeTime",
                            "constants": [],
                            "variables": [
                              "_UnicornMark_LifeTime"
                            ]
                          },
                          "baseChance": {
                            "operator": "Variables[0] (_UnicornMark_Chance) || RETURN",
                            "displayLines": "_UnicornMark_Chance",
                            "constants": [],
                            "variables": [
                              "_UnicornMark_Chance"
                            ]
                          },
                          "valuePerStack": {
                            "MDF_ActionDelayRatio": {
                              "operator": "Variables[0] (_UnicornMark_ActionDelayRatio) || RETURN",
                              "displayLines": "_UnicornMark_ActionDelayRatio",
                              "constants": [],
                              "variables": [
                                "_UnicornMark_ActionDelayRatio"
                              ]
                            },
                            "Modifier_Entangle_DamagePercentage": {
                              "operator": "Variables[0] (_UnicornMark_DebuffDamagePercentage) || RETURN",
                              "displayLines": "_UnicornMark_DebuffDamagePercentage",
                              "constants": [],
                              "variables": [
                                "_UnicornMark_DebuffDamagePercentage"
                              ]
                            },
                            "Modifier_Entangle_DamageValue": 0
                          }
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"26062276\">Enemy_W4_Griffin_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Aquila's Mark</span>]",
                          "removeAllInstances": true
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1656896295\">Enemy_W4_Unicorn_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Oronyx's Mark</span>]",
                          "removeAllInstances": true
                        },
                        "Modifier Deletes Itself"
                      ]
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
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1506863241\">Enemy_W4_Griffin_Debuff_Status</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "_GriffinMark_SPCost",
            "_GriffinMark_DamagePercentage",
            "_MixedMark_LoseHpRatio",
            "_UnicornMark_Chance",
            "_UnicornMark_LifeTime",
            "_UnicornMark_ActionDelayRatio",
            "_UnicornMark_DebuffDamagePercentage",
            "_UnicornMark_DamagePercentage"
          ],
          "latentQueue": [
            "_Location"
          ],
          "description": "When a target gains \"Aquila's Mark\" again, dispel all marks, and they take Fire DMG and lose Energy. When a target gains \"Oronyx's Mark\" again, dispel all marks, and they take True DMG based on <span class=\"descriptionNumberColor\">_MixedMark_LoseHpRatio</span> of their Max HP, lose Energy, and have a high chance to be afflicted with Entanglement. After any ally target defeats an enemy target, this mark can be dispelled, prioritizing dispelling the mark from the target that dealt the fatal damage.",
          "type": "Other",
          "effectName": "Aquila's Mark",
          "statusName": "Aquila's Mark",
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1506863241\">Enemy_W4_Griffin_Debuff_Status</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Got a Kill [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"26062276\">Enemy_W4_Griffin_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Aquila's Mark</span>]"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "variableName": "W4_Griffin_00_Debuff_Resolve",
                      "value": 1,
                      "max": 3
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"26062276\">Enemy_W4_Griffin_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Aquila's Mark</span>]"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"26062276\">Enemy_W4_Griffin_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Aquila's Mark</span>]"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Level Entity}}"
                          },
                          "variableName": "W4_Griffin_00_Debuff_Resolve",
                          "value": 1,
                          "max": 3
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"26062276\">Enemy_W4_Griffin_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Aquila's Mark</span>]"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "_Location"
          ]
        }
      ],
      "references": []
    }
  }
}