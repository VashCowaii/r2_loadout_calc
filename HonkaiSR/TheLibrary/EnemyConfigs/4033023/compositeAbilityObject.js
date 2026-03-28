const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 4033023,
  "trimCharacterName": 4033023,
  "abilityList": [
    "4033023_Monster_W4_Griffin_01_LocalLegend_Ability01_Part02",
    "4033023_Monster_W4_Griffin_01_LocalLegend_Ability01_Part01",
    "4033023_Monster_W4_Griffin_01_LocalLegend_PassiveAbilityInitiate",
    "4033023_Monster_W4_Claymore_01_LocalLegend03_Ability03_Part02",
    "4033023_Monster_W4_Claymore_01_LocalLegend03_Ability03_Part01",
    "4033023_Monster_W2_Mecha02_02_LocalLegend_DeathRattle_Insert",
    "4033023_Monster_W2_Mecha02_02_LocalLegend_Ability01_Part02",
    "4033023_Monster_W2_Mecha02_02_LocalLegend_Ability01_Part01",
    "4033023_Monster_W2_Mecha02_02_LocalLegend_PassiveAbilityInitiate",
    "4033023_Monster_W4_Claymore_01_Ability04_Part02",
    "4033023_Monster_W4_Claymore_01_Ability04_Part01",
    "4033023_Monster_W4_Claymore_01_Ability03_Part02",
    "4033023_Monster_W4_Claymore_01_Ability03_Part01",
    "4033023_Monster_W4_Claymore_01_Ability02_InsertAbility_Part02",
    "4033023_Monster_W4_Claymore_01_Ability02_InsertAbility_Part01",
    "4033023_Monster_W4_Claymore_01_Ability02_Part02",
    "4033023_Monster_W4_Claymore_01_Ability02_Part01",
    "4033023_Monster_W4_Claymore_01_Ability01_Part02",
    "4033023_Monster_W4_Claymore_01_Ability01_Part01",
    "4033023_Monster_W4_Claymore_01_AbilityP01",
    "4033023_Modifiers"
  ],
  "abilityObject": {
    "4033023_Monster_W4_Griffin_01_LocalLegend_Ability01_Part02": {
      "fileName": "4033023_Monster_W4_Griffin_01_LocalLegend_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable with Team Count",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}.[[removeMemosprite]]"
          },
          "variableName": "PosCount",
          "livingTargets": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "PosCount",
            "compareType": "=",
            "value2": 4
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "PosCount",
            "compareType": "=",
            "value2": 3
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "PosCount",
            "compareType": "=",
            "value2": 2
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "PosCount",
            "compareType": "=",
            "value2": 1
          }
        },
        "Ability Start",
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "PosCount",
            "compareType": "=",
            "value2": 4
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Dark Sun Gryphon: Skill01 Target 1}}.[[addMemosprite]].[[removeUnselectable]]"
              },
              "AttackScaling": {
                "DamageType": "Wind",
                "Damage": {
                  "operator": "Variables[0] (UnusedUnderThisBase_3) || RETURN",
                  "displayLines": "UnusedUnderThisBase_3",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_3"
                  ]
                },
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
                "target": "{{Dark Sun Gryphon: Skill01 Target 2}}.[[addMemosprite]].[[removeUnselectable]]"
              },
              "AttackScaling": {
                "DamageType": "Wind",
                "Damage": {
                  "operator": "Variables[0] (UnusedUnderThisBase_3) || RETURN",
                  "displayLines": "UnusedUnderThisBase_3",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_3"
                  ]
                },
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
                "target": "{{Dark Sun Gryphon: Skill01 Target 3}}.[[addMemosprite]].[[removeUnselectable]]"
              },
              "AttackScaling": {
                "DamageType": "Wind",
                "Damage": {
                  "operator": "Variables[0] (UnusedUnderThisBase_3) || RETURN",
                  "displayLines": "UnusedUnderThisBase_3",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_3"
                  ]
                },
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
                "target": "{{Dark Sun Gryphon: Skill01 Target 4}}.[[addMemosprite]].[[removeUnselectable]]"
              },
              "AttackScaling": {
                "DamageType": "Wind",
                "Damage": {
                  "operator": "Variables[0] (UnusedUnderThisBase_3) || RETURN",
                  "displayLines": "UnusedUnderThisBase_3",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_3"
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
            "name": "Compare: Variable",
            "value1": "PosCount",
            "compareType": "=",
            "value2": 3
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Dark Sun Gryphon: Skill01 Target 1}}.[[addMemosprite]].[[removeUnselectable]]"
              },
              "AttackScaling": {
                "DamageType": "Wind",
                "Damage": {
                  "operator": "Variables[0] (UnusedUnderThisBase_3) || RETURN",
                  "displayLines": "UnusedUnderThisBase_3",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_3"
                  ]
                },
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
                "target": "{{Dark Sun Gryphon: Skill01 Target 2}}.[[addMemosprite]].[[removeUnselectable]]"
              },
              "AttackScaling": {
                "DamageType": "Wind",
                "Damage": {
                  "operator": "Variables[0] (UnusedUnderThisBase_3) || RETURN",
                  "displayLines": "UnusedUnderThisBase_3",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_3"
                  ]
                },
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
                "target": "{{Dark Sun Gryphon: Skill01 Target 3}}.[[addMemosprite]].[[removeUnselectable]]"
              },
              "AttackScaling": {
                "DamageType": "Wind",
                "Damage": {
                  "operator": "Variables[0] (UnusedUnderThisBase_3) || RETURN",
                  "displayLines": "UnusedUnderThisBase_3",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_3"
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
            "name": "Compare: Variable",
            "value1": "PosCount",
            "compareType": "=",
            "value2": 2
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Dark Sun Gryphon: Skill01 Target 1}}.[[addMemosprite]].[[removeUnselectable]]"
              },
              "AttackScaling": {
                "DamageType": "Wind",
                "Damage": {
                  "operator": "Variables[0] (UnusedUnderThisBase_3) || RETURN",
                  "displayLines": "UnusedUnderThisBase_3",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_3"
                  ]
                },
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
                "target": "{{Dark Sun Gryphon: Skill01 Target 2}}.[[addMemosprite]].[[removeUnselectable]]"
              },
              "AttackScaling": {
                "DamageType": "Wind",
                "Damage": {
                  "operator": "Variables[0] (UnusedUnderThisBase_3) || RETURN",
                  "displayLines": "UnusedUnderThisBase_3",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_3"
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
            "name": "Compare: Variable",
            "value1": "PosCount",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Dark Sun Gryphon: Skill01 Target 1}}.[[addMemosprite]].[[removeUnselectable]]"
              },
              "AttackScaling": {
                "DamageType": "Wind",
                "Damage": {
                  "operator": "Variables[0] (UnusedUnderThisBase_3) || RETURN",
                  "displayLines": "UnusedUnderThisBase_3",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_3"
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
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "4033023_Monster_W4_Griffin_01_LocalLegend_Ability01_Part01": {
      "fileName": "4033023_Monster_W4_Griffin_01_LocalLegend_Ability01_Part01",
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
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Player Team All(Left to Right)}}"
          },
          "ability": "Monster_W4_Griffin_01_LocalLegend_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "4033023_Monster_W4_Griffin_01_LocalLegend_PassiveAbilityInitiate": {
      "fileName": "4033023_Monster_W4_Griffin_01_LocalLegend_PassiveAbilityInitiate",
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
          "modifier": "<a class=\"gModGreen\" id=\"1166907060\">Enemy_Standard_MuteHitFly</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4033023_Monster_W4_Claymore_01_LocalLegend03_Ability03_Part02": {
      "fileName": "4033023_Monster_W4_Claymore_01_LocalLegend03_Ability03_Part02",
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
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "4033023_Monster_W4_Claymore_01_LocalLegend03_Ability03_Part01": {
      "fileName": "4033023_Monster_W4_Claymore_01_LocalLegend03_Ability03_Part01",
      "childAbilityList": [
        "4033023_Monster_W4_Claymore_01_Ability03_Camera",
        "4033023_Monster_W4_Claymore_01_LocalLegend03_Ability03_Part01",
        "4033023_Monster_W4_Claymore_01_LocalLegend03_Ability03_Part02"
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
          "ability": "Monster_W4_Claymore_01_LocalLegend03_Ability03_Part02",
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
    "4033023_Monster_W2_Mecha02_02_LocalLegend_DeathRattle_Insert": {
      "fileName": "4033023_Monster_W2_Mecha02_02_LocalLegend_DeathRattle_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "River of Souls' Intolerable Solitude"
        },
        {
          "name": "Exit Broken-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "W2_Mecha02_02_DeathRattle",
          "context": "TargetEntity",
          "value": 1,
          "max": 1
        },
        {
          "name": "Animation Event",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "state": "Die",
          "passed": [
            {
              "name": "Animation Task"
            },
            {
              "name": "Animation Task"
            },
            {
              "name": "Animation Task",
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{All Team Members(Exclude Self)}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "Damage": {
                      "operator": "Variables[0] (UnusedUnderThisBase_29) || RETURN",
                      "displayLines": "UnusedUnderThisBase_29",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_29"
                      ]
                    },
                    "dmgFormula": "Max HP Scaling",
                    "Toughness": {
                      "operator": "Variables[0] (UnusedUnderThisBase_488) || RETURN",
                      "displayLines": "UnusedUnderThisBase_488",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_488"
                      ]
                    },
                    "ToughnessDMGType": {
                      "DamageType": "Ice"
                    },
                    "Tags": null,
                    "attackType": "Basic ATK"
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Manta: Event Target 01}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-643353377\">Enemy_W4_Manta_LocalLegend_Virus_Monster</a>[<span class=\"descriptionNumberColor\">Glacial Erosion</span>]",
                  "duration": {
                    "operator": "Variables[0] (UnusedUnderThisBase_489) || RETURN",
                    "displayLines": "UnusedUnderThisBase_489",
                    "constants": [],
                    "variables": [
                      "UnusedUnderThisBase_489"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_DotHPRatio": {
                      "operator": "Variables[0] (UnusedUnderThisBase_490) || RETURN",
                      "displayLines": "UnusedUnderThisBase_490",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_490"
                      ]
                    },
                    "MDF_DotDamageRatio": {
                      "operator": "Variables[0] (_DotDamageRatio) || RETURN",
                      "displayLines": "_DotDamageRatio",
                      "constants": [],
                      "variables": [
                        "_DotDamageRatio"
                      ]
                    }
                  },
                  "casterAssign": "TargetSelf"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members(Exclude Self)}} - {{Manta: Event Target 01}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-643353377\">Enemy_W4_Manta_LocalLegend_Virus_Monster</a>[<span class=\"descriptionNumberColor\">Glacial Erosion</span>]",
                  "duration": {
                    "operator": "Variables[0] (UnusedUnderThisBase_489) || RETURN",
                    "displayLines": "UnusedUnderThisBase_489",
                    "constants": [],
                    "variables": [
                      "UnusedUnderThisBase_489"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_DotHPRatio": {
                      "operator": "Variables[0] (UnusedUnderThisBase_491) || RETURN",
                      "displayLines": "UnusedUnderThisBase_491",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_491"
                      ]
                    },
                    "MDF_DotDamageRatio": {
                      "operator": "Variables[0] (_DotDamageRatio) || RETURN",
                      "displayLines": "_DotDamageRatio",
                      "constants": [],
                      "variables": [
                        "_DotDamageRatio"
                      ]
                    }
                  },
                  "casterAssign": "TargetSelf"
                },
                "Trigger: Attack End"
              ]
            },
            {
              "name": "Animation Task"
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{All Team Members}}"
      },
      "references": []
    },
    "4033023_Monster_W2_Mecha02_02_LocalLegend_Ability01_Part02": {
      "fileName": "4033023_Monster_W2_Mecha02_02_LocalLegend_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] (UnusedUnderThisBase_3) || RETURN",
              "displayLines": "UnusedUnderThisBase_3",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_3"
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
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1053900391\">Enemy_W4_Manta_Virus_Transfer</a>",
          "onlyRemoveOwnersInstance": true
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "4033023_Monster_W2_Mecha02_02_LocalLegend_Ability01_Part01": {
      "fileName": "4033023_Monster_W2_Mecha02_02_LocalLegend_Ability01_Part01",
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
          "ability": "Monster_W2_Mecha02_02_LocalLegend_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "4033023_Monster_W2_Mecha02_02_LocalLegend_PassiveAbilityInitiate": {
      "fileName": "4033023_Monster_W2_Mecha02_02_LocalLegend_PassiveAbilityInitiate",
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
          "modifier": "<a class=\"gModGreen\" id=\"56832249\">Enemy_W2_Mecha02_02_DeathRattle</a>"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "W2_Mecha02_02_DeathRattle"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Living State",
                "state": "Mask_AliveOnly",
                "target": {
                  "name": "Target Name",
                  "target": "{{Manta: Event Target 01}}"
                }
              },
              {
                "name": "Enemy ID",
                "ID": 4053013,
                "target": {
                  "name": "Target Name",
                  "target": "{{Manta: Event Target 01}}"
                },
                "characterName": "Elegy Siren: Insatiable Leviathan"
              }
            ]
          },
          "passed": [
            {
              "name": "Define Custom Variable with Copy",
              "target": {
                "name": "Target Name",
                "target": "{{Manta: Event Target 01}}"
              },
              "variable": "_DotDamageRatio",
              "target2": null,
              "variable2": "_DotDamageRatio"
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__56832249\">Enemy_W2_Mecha02_02_DeathRattle</a>",
          "modifierFlags": [
            "Deathrattle",
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Was Killed (Queued) [Owner]",
              "execute": [
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "silent": true
                },
                {
                  "name": "Mark Entity For Immediate Death"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_ChangePhaseKill",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W2_Mecha02_02_LocalLegend_DeathRattle_Insert",
                      "priorityTag": "LevelPerformMonster",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    }
                  ],
                  "failed": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W2_Mecha02_02_LocalLegend_DeathRattle_Insert",
                      "priorityTag": "MonsterDeathRattle",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
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
    "4033023_Monster_W4_Claymore_01_Ability04_Part02": {
      "fileName": "4033023_Monster_W4_Claymore_01_Ability04_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1028185089\">Enemy_AML_Minion02_01_RallyHP_Controller_V2</a>",
          "valuePerStack": {
            "MDF_RallyTransferRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_391) || RETURN",
              "displayLines": "UnusedUnderThisBase_391",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_391"
              ]
            },
            "MDF_Rally_HealPercentage": {
              "operator": "Variables[0] (UnusedUnderThisBase_392) || RETURN",
              "displayLines": "UnusedUnderThisBase_392",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_392"
              ]
            },
            "MDF_Rally_HealUpRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_393) || RETURN",
              "displayLines": "UnusedUnderThisBase_393",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_393"
              ]
            },
            "MDF_Rally_Strongth_AllDamageTypeAddedRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_394) || RETURN",
              "displayLines": "UnusedUnderThisBase_394",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_394"
              ]
            }
          }
        },
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (UnusedUnderThisBase_154) || RETURN",
              "displayLines": "UnusedUnderThisBase_154",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_154"
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
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (UnusedUnderThisBase_154) || RETURN",
              "displayLines": "UnusedUnderThisBase_154",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_154"
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
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (UnusedUnderThisBase_154) || RETURN",
              "displayLines": "UnusedUnderThisBase_154",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_154"
              ]
            },
            "HitSplit": 0.5,
            "Toughness": null,
            "Tags": null,
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
          "modifier": "<a class=\"gModGreen\" id=\"-1906405018\">Enemy_W4_Claymore_01_Ability02_DeadLock_Self</a>[<span class=\"descriptionNumberColor\">Duel</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE, with Unselectables)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-34378787\">Enemy_W4_Claymore_01_Ability02_DeadLock_Target</a>[<span class=\"descriptionNumberColor\">Duel</span>]",
          "onlyRemoveOwnersInstance": true
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE, with Unselectables)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1632906191\">Enemy_W4_Claymore_01_Ability02_DeadLock_Target_Servant</a>[<span class=\"descriptionNumberColor\">Duel</span>]",
          "onlyRemoveOwnersInstance": true
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Snapshot Target List}}.[[getPlayerTeam]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-304685094\">Enemy_W4_Claymore_01_Ability02_DeadLock_Target_Snapshot</a>",
          "onlyRemoveOwnersInstance": true
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "4033023_Monster_W4_Claymore_01_Ability04_Part01": {
      "fileName": "4033023_Monster_W4_Claymore_01_Ability04_Part01",
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
          "ability": "Monster_W4_Claymore_01_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "4033023_Monster_W4_Claymore_01_Ability03_Part02": {
      "fileName": "4033023_Monster_W4_Claymore_01_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1028185089\">Enemy_AML_Minion02_01_RallyHP_Controller_V2</a>",
          "valuePerStack": {
            "MDF_RallyTransferRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_391) || RETURN",
              "displayLines": "UnusedUnderThisBase_391",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_391"
              ]
            },
            "MDF_Rally_HealPercentage": {
              "operator": "Variables[0] (UnusedUnderThisBase_392) || RETURN",
              "displayLines": "UnusedUnderThisBase_392",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_392"
              ]
            },
            "MDF_Rally_HealUpRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_393) || RETURN",
              "displayLines": "UnusedUnderThisBase_393",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_393"
              ]
            },
            "MDF_Rally_Strongth_AllDamageTypeAddedRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_394) || RETURN",
              "displayLines": "UnusedUnderThisBase_394",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_394"
              ]
            }
          }
        },
        "Ability Start",
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
          "name": "SWITCH",
          "switchValue": {
            "operator": "Variables[0] (_ReadyToCharge) || RETURN",
            "displayLines": "_ReadyToCharge",
            "constants": [],
            "variables": [
              "_ReadyToCharge"
            ]
          },
          "caseEvents": [
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 4
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 5
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 6,
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2144224307\">Enemy_W4_Claymore_01_Ability04_Ready</a>"
                }
              ]
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
    "4033023_Monster_W4_Claymore_01_Ability03_Part01": {
      "fileName": "4033023_Monster_W4_Claymore_01_Ability03_Part01",
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
          "ability": "Monster_W4_Claymore_01_Ability03_Part02",
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
    "4033023_Monster_W4_Claymore_01_Ability02_InsertAbility_Part02": {
      "fileName": "4033023_Monster_W4_Claymore_01_Ability02_InsertAbility_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1906405018\">Enemy_W4_Claymore_01_Ability02_DeadLock_Self</a>[<span class=\"descriptionNumberColor\">Duel</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE, with Unselectables)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-34378787\">Enemy_W4_Claymore_01_Ability02_DeadLock_Target</a>[<span class=\"descriptionNumberColor\">Duel</span>]",
          "onlyRemoveOwnersInstance": true
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE, with Unselectables)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1632906191\">Enemy_W4_Claymore_01_Ability02_DeadLock_Target_Servant</a>[<span class=\"descriptionNumberColor\">Duel</span>]",
          "onlyRemoveOwnersInstance": true
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Snapshot Target List}}.[[getPlayerTeam]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-304685094\">Enemy_W4_Claymore_01_Ability02_DeadLock_Target_Snapshot</a>",
          "onlyRemoveOwnersInstance": true
        },
        {
          "name": "Define Custom Variable",
          "scope": "TargetEntity",
          "variableName": "AIFlag",
          "value": 1
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE, with Unselectables)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2009401658\">Enemy_W4_Claymore_01_Ability02_DeadLock_Win</a>[<span class=\"descriptionNumberColor\">Honor</span>]",
          "duration": 2,
          "valuePerStack": {
            "MDF_AllDamageTypeAddedRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_487) || RETURN",
              "displayLines": "UnusedUnderThisBase_487",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_487"
              ]
            }
          }
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4033023_Monster_W4_Claymore_01_Ability02_InsertAbility_Part01": {
      "fileName": "4033023_Monster_W4_Claymore_01_Ability02_InsertAbility_Part01",
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
          "ability": "Monster_W4_Claymore_01_Ability02_InsertAbility_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4033023_Monster_W4_Claymore_01_Ability02_Part02": {
      "fileName": "4033023_Monster_W4_Claymore_01_Ability02_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1906405018\">Enemy_W4_Claymore_01_Ability02_DeadLock_Self</a>[<span class=\"descriptionNumberColor\">Duel</span>]",
          "valuePerStack": {
            "MDF_DeadLock_HPRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_483) || RETURN",
              "displayLines": "UnusedUnderThisBase_483",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_483"
              ]
            },
            "MDF_DamageReduce": {
              "operator": "Variables[0] (UnusedUnderThisBase_484) || RETURN",
              "displayLines": "UnusedUnderThisBase_484",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_484"
              ]
            },
            "MDF_SpeedAddedRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_485) || RETURN",
              "displayLines": "UnusedUnderThisBase_485",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_485"
              ]
            },
            "MDF_PowerUp_AllDamageTypeAddedRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_486) || RETURN",
              "displayLines": "UnusedUnderThisBase_486",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_486"
              ]
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-34378787\">Enemy_W4_Claymore_01_Ability02_DeadLock_Target</a>[<span class=\"descriptionNumberColor\">Duel</span>]",
          "valuePerStack": {
            "MDF_DamageReduce": {
              "operator": "Variables[0] (UnusedUnderThisBase_484) || RETURN",
              "displayLines": "UnusedUnderThisBase_484",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_484"
              ]
            },
            "MDF_SpeedAddedRatio": {
              "operator": "Variables[0] ([object Object]) || RETURN",
              "displayLines": "[object Object]",
              "constants": [],
              "variables": [
                {}
              ]
            },
            "MDF_PowerUp_AllDamageTypeAddedRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_486) || RETURN",
              "displayLines": "UnusedUnderThisBase_486",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_486"
              ]
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "4033023_Monster_W4_Claymore_01_Ability02_Part01": {
      "fileName": "4033023_Monster_W4_Claymore_01_Ability02_Part01",
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
          "ability": "Monster_W4_Claymore_01_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "4033023_Monster_W4_Claymore_01_Ability01_Part02": {
      "fileName": "4033023_Monster_W4_Claymore_01_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{ST and Blast}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1028185089\">Enemy_AML_Minion02_01_RallyHP_Controller_V2</a>",
          "valuePerStack": {
            "MDF_RallyTransferRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_391) || RETURN",
              "displayLines": "UnusedUnderThisBase_391",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_391"
              ]
            },
            "MDF_Rally_HealPercentage": {
              "operator": "Variables[0] (UnusedUnderThisBase_392) || RETURN",
              "displayLines": "UnusedUnderThisBase_392",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_392"
              ]
            },
            "MDF_Rally_HealUpRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_393) || RETURN",
              "displayLines": "UnusedUnderThisBase_393",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_393"
              ]
            },
            "MDF_Rally_Strongth_AllDamageTypeAddedRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_394) || RETURN",
              "displayLines": "UnusedUnderThisBase_394",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_394"
              ]
            }
          }
        },
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (UnusedUnderThisBase_3) || RETURN",
              "displayLines": "UnusedUnderThisBase_3",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_3"
              ]
            },
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
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (UnusedUnderThisBase_482) || RETURN",
              "displayLines": "UnusedUnderThisBase_482",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_482"
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
    "4033023_Monster_W4_Claymore_01_Ability01_Part01": {
      "fileName": "4033023_Monster_W4_Claymore_01_Ability01_Part01",
      "childAbilityList": [
        "4033023_Monster_W4_Claymore_01_Ability01_Camera",
        "4033023_Monster_W4_Claymore_01_Ability01_Part01",
        "4033023_Monster_W4_Claymore_01_Ability01_Part02"
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
          "ability": "Monster_W4_Claymore_01_Ability01_Part02",
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
    "4033023_Monster_W4_Claymore_01_AbilityP01": {
      "fileName": "4033023_Monster_W4_Claymore_01_AbilityP01",
      "childAbilityList": [
        "4033023_Monster_W4_Claymore_01_AbilityP01"
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
          "modifier": "<a class=\"gModGreen\" id=\"1166907060\">Enemy_Standard_MuteHitFly</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"709550235\">W4_Claymore_01_BattleScore1</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4033023_Modifiers": {
      "fileName": "4033023_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__709550235\">W4_Claymore_01_BattleScore1</a>",
          "execute": [
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1906405018\">Enemy_W4_Claymore_01_Ability02_DeadLock_Self</a>[<span class=\"descriptionNumberColor\">Duel</span>]"
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "relatedAchievements": [
                        {
                          "title": "The Arena Champion",
                          "desc": "Win the \"Duel\" challenge by inflicting Weakness Break on the Black Tide's Champion",
                          "rarity": "Low",
                          "type": "Hidden until Completion"
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
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2009401658\">Enemy_W4_Claymore_01_Ability02_DeadLock_Win</a>[<span class=\"descriptionNumberColor\">Honor</span>]",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_AllDamageTypeAddedRatio) || RETURN",
                    "displayLines": "MDF_AllDamageTypeAddedRatio",
                    "constants": [],
                    "variables": [
                      "MDF_AllDamageTypeAddedRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_AllDamageTypeAddedRatio"
          ],
          "latentQueue": [
            "AIFlag"
          ],
          "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_AllDamageTypeAddedRatio</span>.",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "Honor"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1754815848\">Enemy_W4_Claymore_01_Ability02_DeadLock_PowerUp</a>[<span class=\"descriptionNumberColor\">Morale</span>]",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "MDF_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_Layer) || Variables[1] (MDF_AllDamageTypeAddedRatio) || MUL || RETURN",
                    "displayLines": "(MDF_Layer * MDF_AllDamageTypeAddedRatio)",
                    "constants": [],
                    "variables": [
                      "MDF_Layer",
                      "MDF_AllDamageTypeAddedRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Each stack increases the DMG dealt by <span class=\"descriptionNumberColor\">MDF_AllDamageTypeAddedRatio</span>.",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "Morale"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2144224307\">Enemy_W4_Claymore_01_Ability04_Ready</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
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
                  "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1437984250\">Enemy_W4_Claymore_01_Ability02_SkillTarget</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-304685094\">Enemy_W4_Claymore_01_Ability02_DeadLock_Target_Snapshot</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1632906191\">Enemy_W4_Claymore_01_Ability02_DeadLock_Target_Servant</a>[<span class=\"descriptionNumberColor\">Duel</span>]",
          "targetRestriction": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "targetRestrictionFor": "EnemySelect",
          "modifierFlags": [
            "Taunt",
            "RemoveWhenCasterDead",
            "AttackSign"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1754815848\">Enemy_W4_Claymore_01_Ability02_DeadLock_PowerUp</a>[<span class=\"descriptionNumberColor\">Morale</span>]"
                }
              ]
            },
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1906405018\">Enemy_W4_Claymore_01_Ability02_DeadLock_Self</a>[<span class=\"descriptionNumberColor\">Duel</span>]"
                  },
                  "failed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
                          "value": "MDF_DamageReduce"
                        }
                      ]
                    }
                  ]
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_SpeedAddedRatio) || RETURN",
                    "displayLines": "MDF_SpeedAddedRatio",
                    "constants": [],
                    "variables": [
                      "MDF_SpeedAddedRatio"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1754815848\">Enemy_W4_Claymore_01_Ability02_DeadLock_PowerUp</a>[<span class=\"descriptionNumberColor\">Morale</span>]",
                  "valuePerStack": {
                    "MDF_AllDamageTypeAddedRatio": {
                      "operator": "Variables[0] (MDF_PowerUp_AllDamageTypeAddedRatio) || RETURN",
                      "displayLines": "MDF_PowerUp_AllDamageTypeAddedRatio",
                      "constants": [],
                      "variables": [
                        "MDF_PowerUp_AllDamageTypeAddedRatio"
                      ]
                    }
                  },
                  "addStacksPerTrigger": 1
                }
              ]
            }
          ],
          "description": "SPD increases by <span class=\"descriptionNumberColor\">MDF_SpeedAddedRatio</span>. When receiving DMG from targets outside the Duel state, reduces DMG by <span class=\"descriptionNumberColor\">MDF_DamageReduce</span>. Obtains 1 stack of \"Morale\" after each attack.",
          "type": "Other",
          "statusName": "Duel"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-34378787\">Enemy_W4_Claymore_01_Ability02_DeadLock_Target</a>[<span class=\"descriptionNumberColor\">Duel</span>]",
          "targetRestriction": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "targetRestrictionFor": "EnemySelect",
          "modifierFlags": [
            "Taunt",
            "RemoveWhenCasterDead",
            "AttackSign"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}.[[getMemosprite]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1632906191\">Enemy_W4_Claymore_01_Ability02_DeadLock_Target_Servant</a>[<span class=\"descriptionNumberColor\">Duel</span>]",
                  "valuePerStack": {
                    "MDF_DamageReduce": {
                      "operator": "Variables[0] (MDF_DamageReduce) || RETURN",
                      "displayLines": "MDF_DamageReduce",
                      "constants": [],
                      "variables": [
                        "MDF_DamageReduce"
                      ]
                    },
                    "MDF_SpeedAddedRatio": {
                      "operator": "Variables[0] (MDF_SpeedAddedRatio) || RETURN",
                      "displayLines": "MDF_SpeedAddedRatio",
                      "constants": [],
                      "variables": [
                        "MDF_SpeedAddedRatio"
                      ]
                    },
                    "MDF_PowerUp_AllDamageTypeAddedRatio": {
                      "operator": "Variables[0] (MDF_PowerUp_AllDamageTypeAddedRatio) || RETURN",
                      "displayLines": "MDF_PowerUp_AllDamageTypeAddedRatio",
                      "constants": [],
                      "variables": [
                        "MDF_PowerUp_AllDamageTypeAddedRatio"
                      ]
                    }
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}.[[getSnapshotTarget]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-304685094\">Enemy_W4_Claymore_01_Ability02_DeadLock_Target_Snapshot</a>"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1754815848\">Enemy_W4_Claymore_01_Ability02_DeadLock_PowerUp</a>[<span class=\"descriptionNumberColor\">Morale</span>]"
                }
              ]
            },
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1906405018\">Enemy_W4_Claymore_01_Ability02_DeadLock_Self</a>[<span class=\"descriptionNumberColor\">Duel</span>]"
                  },
                  "failed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
                          "value": "MDF_DamageReduce"
                        }
                      ]
                    }
                  ]
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_SpeedAddedRatio) || RETURN",
                    "displayLines": "MDF_SpeedAddedRatio",
                    "constants": [],
                    "variables": [
                      "MDF_SpeedAddedRatio"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Related Summoned Entity",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}.[[getMemosprite]]"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1632906191\">Enemy_W4_Claymore_01_Ability02_DeadLock_Target_Servant</a>[<span class=\"descriptionNumberColor\">Duel</span>]",
                      "valuePerStack": {
                        "MDF_DamageReduce": {
                          "operator": "Variables[0] (MDF_DamageReduce) || RETURN",
                          "displayLines": "MDF_DamageReduce",
                          "constants": [],
                          "variables": [
                            "MDF_DamageReduce"
                          ]
                        },
                        "MDF_SpeedAddedRatio": {
                          "operator": "Variables[0] (MDF_SpeedAddedRatio) || RETURN",
                          "displayLines": "MDF_SpeedAddedRatio",
                          "constants": [],
                          "variables": [
                            "MDF_SpeedAddedRatio"
                          ]
                        },
                        "MDF_PowerUp_AllDamageTypeAddedRatio": {
                          "operator": "Variables[0] (MDF_PowerUp_AllDamageTypeAddedRatio) || RETURN",
                          "displayLines": "MDF_PowerUp_AllDamageTypeAddedRatio",
                          "constants": [],
                          "variables": [
                            "MDF_PowerUp_AllDamageTypeAddedRatio"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1754815848\">Enemy_W4_Claymore_01_Ability02_DeadLock_PowerUp</a>[<span class=\"descriptionNumberColor\">Morale</span>]",
                  "valuePerStack": {
                    "MDF_AllDamageTypeAddedRatio": {
                      "operator": "Variables[0] (MDF_PowerUp_AllDamageTypeAddedRatio) || RETURN",
                      "displayLines": "MDF_PowerUp_AllDamageTypeAddedRatio",
                      "constants": [],
                      "variables": [
                        "MDF_PowerUp_AllDamageTypeAddedRatio"
                      ]
                    }
                  },
                  "addStacksPerTrigger": 1
                }
              ]
            }
          ],
          "stackData": [
            "MDF_DamageReduce",
            "MDF_SpeedAddedRatio",
            "MDF_PowerUp_AllDamageTypeAddedRatio"
          ],
          "latentQueue": [],
          "description": "SPD increases by <span class=\"descriptionNumberColor\">MDF_SpeedAddedRatio</span>. When receiving DMG from targets outside the Duel state, reduces DMG by <span class=\"descriptionNumberColor\">MDF_DamageReduce</span>. Obtains 1 stack of \"Morale\" after each attack.",
          "type": "Other",
          "effectName": "Duel",
          "statusName": "Duel"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1906405018\">Enemy_W4_Claymore_01_Ability02_DeadLock_Self</a>[<span class=\"descriptionNumberColor\">Duel</span>]",
          "targetRestriction": {
            "name": "Target Name",
            "target": "{{Praetor: Skill03 Target}}"
          },
          "targetRestrictionFor": "EnemySelect",
          "modifierFlags": [
            "Taunt"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "InsertFlag",
                  "value": 0
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Stage Type",
                    "stageType": "GridFightActivity"
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "ContextModifier",
                      "variableName": "GridFight_MDF_MaxHP"
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "ContextModifier",
                      "statValue": "&nbsp;<span class=\"descriptionNumberColor\">HPMaxMultiplier</span>&nbsp;",
                      "variableName": "GridFight_MDF_MaxHPMulRatio"
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "ContextModifier",
                      "variableName": "GridFight_DeadLock_HP_CurrentRatio",
                      "value": {
                        "operator": "Variables[0] (MDF_DeadLock_HPRatio) || RETURN",
                        "displayLines": "MDF_DeadLock_HPRatio",
                        "constants": [],
                        "variables": [
                          "MDF_DeadLock_HPRatio"
                        ]
                      }
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (GridFight_DeadLock_HP_CurrentRatio) || RETURN",
                        "displayLines": "GridFight_DeadLock_HP_CurrentRatio",
                        "constants": [],
                        "variables": [
                          "GridFight_DeadLock_HP_CurrentRatio"
                        ]
                      },
                      "entityClass": "Enemy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "maximum": {
                        "operator": "Variables[0] (MDF_DeadLock_HPRatio) || RETURN",
                        "displayLines": "MDF_DeadLock_HPRatio",
                        "constants": [],
                        "variables": [
                          "MDF_DeadLock_HPRatio"
                        ]
                      },
                      "assignState": "True",
                      "state": "Normal",
                      "enableState": "False"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_MaxHP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "ContextModifier",
                      "variableName": "MDF_DeadLock_HP",
                      "value": {
                        "operator": "Variables[0] (MDF_MaxHP) || Variables[1] (MDF_DeadLock_HPRatio) || MUL || RETURN",
                        "displayLines": "(MDF_MaxHP * MDF_DeadLock_HPRatio)",
                        "constants": [],
                        "variables": [
                          "MDF_MaxHP",
                          "MDF_DeadLock_HPRatio"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "ContextModifier",
                      "variableName": "DeadLock_HP_CurrentValue",
                      "value": {
                        "operator": "Variables[0] (MDF_DeadLock_HP) || RETURN",
                        "displayLines": "MDF_DeadLock_HP",
                        "constants": [],
                        "variables": [
                          "MDF_DeadLock_HP"
                        ]
                      }
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (DeadLock_HP_CurrentValue) || RETURN",
                        "displayLines": "DeadLock_HP_CurrentValue",
                        "constants": [],
                        "variables": [
                          "DeadLock_HP_CurrentValue"
                        ]
                      },
                      "entityClass": "Enemy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "maximum": {
                        "operator": "Variables[0] (MDF_DeadLock_HP) || RETURN",
                        "displayLines": "MDF_DeadLock_HP",
                        "constants": [],
                        "variables": [
                          "MDF_DeadLock_HP"
                        ]
                      },
                      "assignState": "True",
                      "state": "Normal",
                      "enableState": "False"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Stage Type",
                    "stageType": "GridFightActivity"
                  },
                  "passed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (GridFight_DeadLock_HP_CurrentRatio) || RETURN",
                        "displayLines": "GridFight_DeadLock_HP_CurrentRatio",
                        "constants": [],
                        "variables": [
                          "GridFight_DeadLock_HP_CurrentRatio"
                        ]
                      },
                      "entityClass": "Enemy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "maximum": {
                        "operator": "Variables[0] (MDF_DeadLock_HPRatio) || RETURN",
                        "displayLines": "MDF_DeadLock_HPRatio",
                        "constants": [],
                        "variables": [
                          "MDF_DeadLock_HPRatio"
                        ]
                      },
                      "assignState": "False",
                      "state": "Normal",
                      "enableState": "False"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (DeadLock_HP_CurrentValue) || RETURN",
                        "displayLines": "DeadLock_HP_CurrentValue",
                        "constants": [],
                        "variables": [
                          "DeadLock_HP_CurrentValue"
                        ]
                      },
                      "entityClass": "Enemy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "maximum": {
                        "operator": "Variables[0] (MDF_DeadLock_HP) || RETURN",
                        "displayLines": "MDF_DeadLock_HP",
                        "constants": [],
                        "variables": [
                          "MDF_DeadLock_HP"
                        ]
                      },
                      "assignState": "False",
                      "state": "Normal",
                      "enableState": "False"
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2144224307\">Enemy_W4_Claymore_01_Ability04_Ready</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1754815848\">Enemy_W4_Claymore_01_Ability02_DeadLock_PowerUp</a>[<span class=\"descriptionNumberColor\">Morale</span>]"
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Stage Type",
                    "stageType": "GridFightActivity"
                  },
                  "passed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (GridFight_DeadLock_HP_CurrentRatio) || RETURN",
                        "displayLines": "GridFight_DeadLock_HP_CurrentRatio",
                        "constants": [],
                        "variables": [
                          "GridFight_DeadLock_HP_CurrentRatio"
                        ]
                      },
                      "entityClass": "Enemy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "maximum": {
                        "operator": "Variables[0] (MDF_DeadLock_HPRatio) || RETURN",
                        "displayLines": "MDF_DeadLock_HPRatio",
                        "constants": [],
                        "variables": [
                          "MDF_DeadLock_HPRatio"
                        ]
                      },
                      "assignState": "True",
                      "state": "Normal",
                      "enableState": "False"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (DeadLock_HP_CurrentValue) || RETURN",
                        "displayLines": "DeadLock_HP_CurrentValue",
                        "constants": [],
                        "variables": [
                          "DeadLock_HP_CurrentValue"
                        ]
                      },
                      "entityClass": "Enemy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "maximum": {
                        "operator": "Variables[0] (MDF_DeadLock_HP) || RETURN",
                        "displayLines": "MDF_DeadLock_HP",
                        "constants": [],
                        "variables": [
                          "MDF_DeadLock_HP"
                        ]
                      },
                      "assignState": "True",
                      "state": "Normal",
                      "enableState": "False"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Action Choice Window [Anyone]",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1248901181\">TaskList_Monster_W4_Claymore_01_UpdateEnergyBarDisplay</a>"
                }
              ]
            },
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Attack Type",
                        "attackTypes": [
                          "DOT"
                        ],
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target's Source Owner}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-34378787\">Enemy_W4_Claymore_01_Ability02_DeadLock_Target</a>[<span class=\"descriptionNumberColor\">Duel</span>]",
                            "casterFilter": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            }
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target's Source Owner}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1632906191\">Enemy_W4_Claymore_01_Ability02_DeadLock_Target_Servant</a>[<span class=\"descriptionNumberColor\">Duel</span>]",
                            "casterFilter": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            }
                          }
                        ]
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-304685094\">Enemy_W4_Claymore_01_Ability02_DeadLock_Target_Snapshot</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target's Source Owner}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-34378787\">Enemy_W4_Claymore_01_Ability02_DeadLock_Target</a>[<span class=\"descriptionNumberColor\">Duel</span>]",
                        "casterFilter": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target's Source Owner}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1632906191\">Enemy_W4_Claymore_01_Ability02_DeadLock_Target_Servant</a>[<span class=\"descriptionNumberColor\">Duel</span>]",
                        "casterFilter": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-304685094\">Enemy_W4_Claymore_01_Ability02_DeadLock_Target_Snapshot</a>",
                        "casterFilter": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      }
                    ]
                  },
                  "failed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
                          "value": "MDF_DamageReduce"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target's Source Owner}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-34378787\">Enemy_W4_Claymore_01_Ability02_DeadLock_Target</a>[<span class=\"descriptionNumberColor\">Duel</span>]",
                        "casterFilter": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target's Source Owner}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1632906191\">Enemy_W4_Claymore_01_Ability02_DeadLock_Target_Servant</a>[<span class=\"descriptionNumberColor\">Duel</span>]",
                        "casterFilter": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-304685094\">Enemy_W4_Claymore_01_Ability02_DeadLock_Target_Snapshot</a>",
                        "casterFilter": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Stage Type",
                        "stageType": "GridFightActivity"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Damage Data",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "variableName": "GridFight_MDF_Result_HPReduce",
                          "value": "Result_HPReduce"
                        },
                        {
                          "name": "Define Custom Variable with Damage Data",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "variableName": "GridFight_MDF_Result_HPReduceMulRatio",
                          "value": "Result_HPReduceMulRatio"
                        },
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "ContextModifier",
                          "variableName": "GridFight_DeadLock_HP_CurrentRatio",
                          "value": {
                            "operator": "Variables[0] (GridFight_DeadLock_HP_CurrentRatio) || Variables[1] (GridFight_MDF_Result_HPReduce) || Variables[2] (GridFight_MDF_MaxHP) || DIV || Variables[3] (GridFight_MDF_Result_HPReduceMulRatio) || MUL || Variables[4] (GridFight_MDF_MaxHPMulRatio) || DIV || SUB || RETURN",
                            "displayLines": "(GridFight_DeadLock_HP_CurrentRatio - (((GridFight_MDF_Result_HPReduce / GridFight_MDF_MaxHP) * GridFight_MDF_Result_HPReduceMulRatio) / GridFight_MDF_MaxHPMulRatio))",
                            "constants": [],
                            "variables": [
                              "GridFight_DeadLock_HP_CurrentRatio",
                              "GridFight_MDF_Result_HPReduce",
                              "GridFight_MDF_MaxHP",
                              "GridFight_MDF_Result_HPReduceMulRatio",
                              "GridFight_MDF_MaxHPMulRatio"
                            ]
                          }
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "GridFight_DeadLock_HP_CurrentRatio",
                            "compareType": "<=",
                            "value2": 0,
                            "contextScope": "ContextModifier"
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "scope": "ContextModifier",
                              "variableName": "GridFight_DeadLock_HP_CurrentRatio",
                              "value": 0
                            }
                          ]
                        },
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (GridFight_DeadLock_HP_CurrentRatio) || RETURN",
                            "displayLines": "GridFight_DeadLock_HP_CurrentRatio",
                            "constants": [],
                            "variables": [
                              "GridFight_DeadLock_HP_CurrentRatio"
                            ]
                          },
                          "entityClass": "Enemy",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "maximum": {
                            "operator": "Variables[0] (MDF_DeadLock_HPRatio) || RETURN",
                            "displayLines": "MDF_DeadLock_HPRatio",
                            "constants": [],
                            "variables": [
                              "MDF_DeadLock_HPRatio"
                            ]
                          },
                          "assignState": "True"
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
                                "value1": "InsertFlag",
                                "compareType": "=",
                                "value2": 0,
                                "contextScope": "TargetEntity"
                              },
                              {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value1": "GridFight_DeadLock_HP_CurrentRatio",
                                "compareType": "<=",
                                "value2": 0,
                                "contextScope": "ContextModifier"
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "scope": "TargetEntity",
                              "variableName": "InsertFlag",
                              "value": 1
                            },
                            {
                              "name": "Define Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "scope": "ContextModifier",
                              "variableName": "GridFight_DeadLock_HP_CurrentRatio",
                              "value": 0
                            },
                            {
                              "name": "Inject Ability Use",
                              "conditionActive": {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value1": "CurrentHP",
                                "compareType": ">",
                                "value2": 0
                              },
                              "abilityName": "Monster_W4_Claymore_01_Ability02_InsertAbility_Part01",
                              "priorityTag": "MonsterChangePhase",
                              "canHitNonTargets": true,
                              "showInActionOrder": true,
                              "allowAbilityTriggers": false
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable with Damage Data",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "variableName": "_Damage"
                        },
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "ContextModifier",
                          "variableName": "DeadLock_HP_CurrentValue",
                          "value": {
                            "operator": "Variables[0] (DeadLock_HP_CurrentValue) || Variables[1] (_Damage) || SUB || RETURN",
                            "displayLines": "(DeadLock_HP_CurrentValue - _Damage)",
                            "constants": [],
                            "variables": [
                              "DeadLock_HP_CurrentValue",
                              "_Damage"
                            ]
                          }
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "DeadLock_HP_CurrentValue",
                            "compareType": "<=",
                            "value2": 0,
                            "contextScope": "ContextModifier"
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "scope": "ContextModifier",
                              "variableName": "DeadLock_HP_CurrentValue",
                              "value": 0
                            }
                          ]
                        },
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (DeadLock_HP_CurrentValue) || RETURN",
                            "displayLines": "DeadLock_HP_CurrentValue",
                            "constants": [],
                            "variables": [
                              "DeadLock_HP_CurrentValue"
                            ]
                          },
                          "entityClass": "Enemy",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "maximum": {
                            "operator": "Variables[0] (MDF_DeadLock_HP) || RETURN",
                            "displayLines": "MDF_DeadLock_HP",
                            "constants": [],
                            "variables": [
                              "MDF_DeadLock_HP"
                            ]
                          },
                          "assignState": "True"
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
                                "value1": "InsertFlag",
                                "compareType": "=",
                                "value2": 0,
                                "contextScope": "TargetEntity"
                              },
                              {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value1": "DeadLock_HP_CurrentValue",
                                "compareType": "<=",
                                "value2": 0,
                                "contextScope": "ContextModifier"
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "scope": "TargetEntity",
                              "variableName": "InsertFlag",
                              "value": 1
                            },
                            {
                              "name": "Define Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "scope": "ContextModifier",
                              "variableName": "DeadLock_HP_CurrentValue",
                              "value": 0
                            },
                            {
                              "name": "Inject Ability Use",
                              "conditionActive": {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value1": "CurrentHP",
                                "compareType": ">",
                                "value2": 0
                              },
                              "abilityName": "Monster_W4_Claymore_01_Ability02_InsertAbility_Part01",
                              "priorityTag": "MonsterChangePhase",
                              "canHitNonTargets": true,
                              "showInActionOrder": true,
                              "allowAbilityTriggers": false
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
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Stage Type",
                    "stageType": "GridFightActivity"
                  },
                  "passed": [
                    {
                      "name": "Update Modifier Description",
                      "popUpText": "SPD increases by <span class=\"descriptionNumberColor\">MDF_SpeedAddedRatio</span>. When receiving DMG from targets outside the Duel state, DMG decreases by <span class=\"descriptionNumberColor\">MDF_DamageReduce</span>. Obtains 1 stack of \"Morale\" after each attack. DMG taken from Duel target will reduce the Duel's progress bar based on the DMG. When the Duel's progress bar is at 0, the Duel is lost and the Duel state is dispelled."
                    }
                  ]
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_SpeedAddedRatio) || RETURN",
                    "displayLines": "MDF_SpeedAddedRatio",
                    "constants": [],
                    "variables": [
                      "MDF_SpeedAddedRatio"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1754815848\">Enemy_W4_Claymore_01_Ability02_DeadLock_PowerUp</a>[<span class=\"descriptionNumberColor\">Morale</span>]",
                  "valuePerStack": {
                    "MDF_AllDamageTypeAddedRatio": {
                      "operator": "Variables[0] (MDF_PowerUp_AllDamageTypeAddedRatio) || RETURN",
                      "displayLines": "MDF_PowerUp_AllDamageTypeAddedRatio",
                      "constants": [],
                      "variables": [
                        "MDF_PowerUp_AllDamageTypeAddedRatio"
                      ]
                    }
                  },
                  "addStacksPerTrigger": 1
                }
              ]
            },
            {
              "eventTrigger": "Action Completed [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Hostile Entities(AOE)}}"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": "=",
                    "value2": 0,
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-34378787\">Enemy_W4_Claymore_01_Ability02_DeadLock_Target</a>[<span class=\"descriptionNumberColor\">Duel</span>]"
                    }
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1432870977\">TaskList_W4_Claymore_01_DeadLockTarget_Die</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-34378787\">Enemy_W4_Claymore_01_Ability02_DeadLock_Target</a>[<span class=\"descriptionNumberColor\">Duel</span>]",
                        "casterFilter": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1632906191\">Enemy_W4_Claymore_01_Ability02_DeadLock_Target_Servant</a>[<span class=\"descriptionNumberColor\">Duel</span>]",
                        "casterFilter": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Stage Type",
                        "stageType": "GridFightActivity"
                      },
                      "passed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (GridFight_DeadLock_HP_CurrentRatio) || RETURN",
                            "displayLines": "GridFight_DeadLock_HP_CurrentRatio",
                            "constants": [],
                            "variables": [
                              "GridFight_DeadLock_HP_CurrentRatio"
                            ]
                          },
                          "entityClass": "Enemy",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "maximum": {
                            "operator": "Variables[0] (MDF_DeadLock_HPRatio) || RETURN",
                            "displayLines": "MDF_DeadLock_HPRatio",
                            "constants": [],
                            "variables": [
                              "MDF_DeadLock_HPRatio"
                            ]
                          },
                          "assignState": "True",
                          "enableState": "False"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (DeadLock_HP_CurrentValue) || RETURN",
                            "displayLines": "DeadLock_HP_CurrentValue",
                            "constants": [],
                            "variables": [
                              "DeadLock_HP_CurrentValue"
                            ]
                          },
                          "entityClass": "Enemy",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "maximum": {
                            "operator": "Variables[0] (MDF_DeadLock_HP) || RETURN",
                            "displayLines": "MDF_DeadLock_HP",
                            "constants": [],
                            "variables": [
                              "MDF_DeadLock_HP"
                            ]
                          },
                          "assignState": "True",
                          "enableState": "False"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "InsertFlag",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "InsertFlag",
                      "value": 1
                    },
                    {
                      "name": "Inject Ability Use",
                      "conditionActive": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "CurrentHP",
                        "compareType": ">",
                        "value2": 0
                      },
                      "abilityName": "Monster_W4_Claymore_01_Ability02_InsertAbility_Part01",
                      "priorityTag": "MonsterChangePhase",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ultimate Prep-Phase [Anyone]",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1248901181\">TaskList_Monster_W4_Claymore_01_UpdateEnergyBarDisplay</a>"
                }
              ]
            },
            {
              "eventTrigger": "Extra Action/Turn [Anyone]: Start",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1248901181\">TaskList_Monster_W4_Claymore_01_UpdateEnergyBarDisplay</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Owner]"
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1248901181\">TaskList_Monster_W4_Claymore_01_UpdateEnergyBarDisplay</a>"
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__1248901181\">TaskList_Monster_W4_Claymore_01_UpdateEnergyBarDisplay</a>",
              "parse": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-34378787\">Enemy_W4_Claymore_01_Ability02_DeadLock_Target</a>[<span class=\"descriptionNumberColor\">Duel</span>]",
                        "casterFilter": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1632906191\">Enemy_W4_Claymore_01_Ability02_DeadLock_Target_Servant</a>[<span class=\"descriptionNumberColor\">Duel</span>]",
                        "casterFilter": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Stage Type",
                        "stageType": "GridFightActivity"
                      },
                      "passed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (GridFight_DeadLock_HP_CurrentRatio) || RETURN",
                            "displayLines": "GridFight_DeadLock_HP_CurrentRatio",
                            "constants": [],
                            "variables": [
                              "GridFight_DeadLock_HP_CurrentRatio"
                            ]
                          },
                          "entityClass": "Enemy",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "maximum": {
                            "operator": "Variables[0] (MDF_DeadLock_HPRatio) || RETURN",
                            "displayLines": "MDF_DeadLock_HPRatio",
                            "constants": [],
                            "variables": [
                              "MDF_DeadLock_HPRatio"
                            ]
                          },
                          "assignState": "True",
                          "state": "Normal",
                          "enableState": "True"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (DeadLock_HP_CurrentValue) || RETURN",
                            "displayLines": "DeadLock_HP_CurrentValue",
                            "constants": [],
                            "variables": [
                              "DeadLock_HP_CurrentValue"
                            ]
                          },
                          "entityClass": "Enemy",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "maximum": {
                            "operator": "Variables[0] (MDF_DeadLock_HP) || RETURN",
                            "displayLines": "MDF_DeadLock_HP",
                            "constants": [],
                            "variables": [
                              "MDF_DeadLock_HP"
                            ]
                          },
                          "assignState": "True",
                          "state": "Normal",
                          "enableState": "True"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Stage Type",
                        "stageType": "GridFightActivity"
                      },
                      "passed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (GridFight_DeadLock_HP_CurrentRatio) || RETURN",
                            "displayLines": "GridFight_DeadLock_HP_CurrentRatio",
                            "constants": [],
                            "variables": [
                              "GridFight_DeadLock_HP_CurrentRatio"
                            ]
                          },
                          "entityClass": "Enemy",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "maximum": {
                            "operator": "Variables[0] (MDF_DeadLock_HPRatio) || RETURN",
                            "displayLines": "MDF_DeadLock_HPRatio",
                            "constants": [],
                            "variables": [
                              "MDF_DeadLock_HPRatio"
                            ]
                          },
                          "assignState": "True",
                          "state": "Disable",
                          "enableState": "False"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (DeadLock_HP_CurrentValue) || RETURN",
                            "displayLines": "DeadLock_HP_CurrentValue",
                            "constants": [],
                            "variables": [
                              "DeadLock_HP_CurrentValue"
                            ]
                          },
                          "entityClass": "Enemy",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "maximum": {
                            "operator": "Variables[0] (MDF_DeadLock_HP) || RETURN",
                            "displayLines": "MDF_DeadLock_HP",
                            "constants": [],
                            "variables": [
                              "MDF_DeadLock_HP"
                            ]
                          },
                          "assignState": "True",
                          "state": "Disable",
                          "enableState": "False"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Stage Type",
                        "stageType": "GridFightActivity"
                      },
                      "passed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (GridFight_DeadLock_HP_CurrentRatio) || RETURN",
                            "displayLines": "GridFight_DeadLock_HP_CurrentRatio",
                            "constants": [],
                            "variables": [
                              "GridFight_DeadLock_HP_CurrentRatio"
                            ]
                          },
                          "entityClass": "Enemy",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "maximum": {
                            "operator": "Variables[0] (MDF_DeadLock_HPRatio) || RETURN",
                            "displayLines": "MDF_DeadLock_HPRatio",
                            "constants": [],
                            "variables": [
                              "MDF_DeadLock_HPRatio"
                            ]
                          },
                          "assignState": "True",
                          "state": "Normal",
                          "enableState": "False"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (DeadLock_HP_CurrentValue) || RETURN",
                            "displayLines": "DeadLock_HP_CurrentValue",
                            "constants": [],
                            "variables": [
                              "DeadLock_HP_CurrentValue"
                            ]
                          },
                          "entityClass": "Enemy",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "maximum": {
                            "operator": "Variables[0] (MDF_DeadLock_HP) || RETURN",
                            "displayLines": "MDF_DeadLock_HP",
                            "constants": [],
                            "variables": [
                              "MDF_DeadLock_HP"
                            ]
                          },
                          "assignState": "True",
                          "state": "Normal",
                          "enableState": "False"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__1432870977\">TaskList_W4_Claymore_01_DeadLockTarget_Die</a>",
              "parse": [
                {
                  "name": "Action Advance/Delay",
                  "advanceType": "Set",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "multiBase": 0
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Current Turn Is",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Assign Advance/Delay to Current Ability Use",
                      "adjustmentValue": 0,
                      "adjustmentType": "="
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "AIFlag",
                  "value": 6
                }
              ]
            }
          ],
          "stackData": [
            "MDF_DeadLock_HPRatio",
            "MDF_DamageReduce",
            "MDF_SpeedAddedRatio",
            "MDF_PowerUp_AllDamageTypeAddedRatio"
          ],
          "latentQueue": [],
          "description": "Increases SPD by <span class=\"descriptionNumberColor\">MDF_SpeedAddedRatio</span> and when receiving DMG from targets outside the Showdown state, reduces DMG by <span class=\"descriptionNumberColor\">MDF_DamageReduce</span>. Obtains 1 stack of \"Morale\" after each attack. DMG taken from Duel target will reduce the Duel's progress bar based on the DMG. When the Duel's progress bar is at 0, the Duel is lost and the Duel state is dispelled. Still requires <span class=\"descriptionNumberColor\">DeadLock_HP_CurrentValue</span> DMG to dispel Duel state.",
          "type": "Other",
          "effectName": "Duel",
          "statusName": "Duel"
        }
      ],
      "references": []
    }
  }
}