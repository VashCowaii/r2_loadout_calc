const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 4033031,
  "trimCharacterName": 4033031,
  "abilityList": [
    "4033031_Monster_W4_Griffin_01_LocalLegend_Ability01_Part02",
    "4033031_Monster_W4_Griffin_01_LocalLegend_Ability01_Part01",
    "4033031_Monster_W4_Griffin_01_LocalLegend_PassiveAbilityInitiate",
    "4033031_Monster_W4_Claymore_01_LocalLegend03_Ability03_Part02",
    "4033031_Monster_W4_Claymore_01_LocalLegend03_Ability03_Part01",
    "4033031_Monster_W2_Mecha02_02_LocalLegend_DeathRattle_Insert",
    "4033031_Monster_W2_Mecha02_02_LocalLegend_Ability01_Part02",
    "4033031_Monster_W2_Mecha02_02_LocalLegend_Ability01_Part01",
    "4033031_Monster_W2_Mecha02_02_LocalLegend_PassiveAbilityInitiate"
  ],
  "abilityObject": {
    "4033031_Monster_W4_Griffin_01_LocalLegend_Ability01_Part02": {
      "fileName": "4033031_Monster_W4_Griffin_01_LocalLegend_Ability01_Part02",
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
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Dark Sun Gryphon: Skill01 Target 2}}.[[addMemosprite]].[[removeUnselectable]]"
              },
              "AttackScaling": {
                "DamageType": "Wind",
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
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Dark Sun Gryphon: Skill01 Target 3}}.[[addMemosprite]].[[removeUnselectable]]"
              },
              "AttackScaling": {
                "DamageType": "Wind",
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
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Dark Sun Gryphon: Skill01 Target 4}}.[[addMemosprite]].[[removeUnselectable]]"
              },
              "AttackScaling": {
                "DamageType": "Wind",
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
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Dark Sun Gryphon: Skill01 Target 2}}.[[addMemosprite]].[[removeUnselectable]]"
              },
              "AttackScaling": {
                "DamageType": "Wind",
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
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Dark Sun Gryphon: Skill01 Target 3}}.[[addMemosprite]].[[removeUnselectable]]"
              },
              "AttackScaling": {
                "DamageType": "Wind",
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
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Dark Sun Gryphon: Skill01 Target 2}}.[[addMemosprite]].[[removeUnselectable]]"
              },
              "AttackScaling": {
                "DamageType": "Wind",
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
    "4033031_Monster_W4_Griffin_01_LocalLegend_Ability01_Part01": {
      "fileName": "4033031_Monster_W4_Griffin_01_LocalLegend_Ability01_Part01",
      "childAbilityList": [
        "4033031_Monster_W4_Griffin_01_Ability01_Camera",
        "4033031_Monster_W4_Griffin_01_LocalLegend_Ability01_Part01",
        "4033031_Monster_W4_Griffin_01_LocalLegend_Ability01_Part02"
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
    "4033031_Monster_W4_Griffin_01_LocalLegend_PassiveAbilityInitiate": {
      "fileName": "4033031_Monster_W4_Griffin_01_LocalLegend_PassiveAbilityInitiate",
      "skillTrigger": "PassiveSkillInitiate",
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
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4033031_Monster_W4_Claymore_01_LocalLegend03_Ability03_Part02": {
      "fileName": "4033031_Monster_W4_Claymore_01_LocalLegend03_Ability03_Part02",
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
              "operator": "Variables[0] (UnusedUnderThisBase_64) || RETURN",
              "displayLines": "UnusedUnderThisBase_64",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_64"
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
    "4033031_Monster_W4_Claymore_01_LocalLegend03_Ability03_Part01": {
      "fileName": "4033031_Monster_W4_Claymore_01_LocalLegend03_Ability03_Part01",
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
    "4033031_Monster_W2_Mecha02_02_LocalLegend_DeathRattle_Insert": {
      "fileName": "4033031_Monster_W2_Mecha02_02_LocalLegend_DeathRattle_Insert",
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
    "4033031_Monster_W2_Mecha02_02_LocalLegend_Ability01_Part02": {
      "fileName": "4033031_Monster_W2_Mecha02_02_LocalLegend_Ability01_Part02",
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
    "4033031_Monster_W2_Mecha02_02_LocalLegend_Ability01_Part01": {
      "fileName": "4033031_Monster_W2_Mecha02_02_LocalLegend_Ability01_Part01",
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
    "4033031_Monster_W2_Mecha02_02_LocalLegend_PassiveAbilityInitiate": {
      "fileName": "4033031_Monster_W2_Mecha02_02_LocalLegend_PassiveAbilityInitiate",
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
    }
  }
}