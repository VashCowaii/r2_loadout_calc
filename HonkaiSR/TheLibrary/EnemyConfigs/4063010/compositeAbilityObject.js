const compositeAbilityObject = {
  "fullCharacterName": 4063010,
  "trimCharacterName": 4063010,
  "abilityList": [
    "4063010_Monster_W4_Serpent_Ability05ToStb_Insert",
    "4063010_Monster_W4_Serpent_Ability05_Insert",
    "4063010_Monster_W4_Serpent_Ability04_Part02",
    "4063010_Monster_W4_Serpent_Ability04_Part01",
    "4063010_Monster_W4_Serpent_Ability03_Part02",
    "4063010_Monster_W4_Serpent_Ability03_Part01",
    "4063010_Monster_W4_Serpent_Ability02_Part02",
    "4063010_Monster_W4_Serpent_Ability02_Part01",
    "4063010_Monster_W4_Serpent_Ability01_Part02",
    "4063010_Monster_W4_Serpent_Ability01_Part01",
    "4063010_Monster_W4_Serpent_PassiveAbilityInitiate",
    "4063010_Modifiers"
  ],
  "abilityObject": {
    "4063010_Monster_W4_Serpent_Ability05ToStb_Insert": {
      "fileName": "4063010_Monster_W4_Serpent_Ability05ToStb_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-919299430\">Enemy_W4_Serpent_Charge</a>[<span class=\"descriptionNumberColor\">Whirl</span>]"
        },
        {
          "name": "Update Displayed Energy Bar",
          "entityClass": "Enemy",
          "trigger": "SpEff_Trigger"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1028185089\">Enemy_AML_Minion02_01_RallyHP_Controller_V2</a>",
          "valuePerStack": {
            "MDF_RallyTransferRatio": {
              "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
              "displayLines": "{[Skill05[1]]}",
              "constants": [],
              "variables": [
                "{[Skill05[1]]}"
              ]
            },
            "MDF_Rally_HealPercentage": {
              "operator": "Variables[0] ({[Skill05[2]]}) || RETURN",
              "displayLines": "{[Skill05[2]]}",
              "constants": [],
              "variables": [
                "{[Skill05[2]]}"
              ]
            },
            "MDF_Rally_Strongth_AllDamageTypeAddedRatio": {
              "operator": "Variables[0] ({[Skill05[3]]}) || RETURN",
              "displayLines": "{[Skill05[3]]}",
              "constants": [],
              "variables": [
                "{[Skill05[3]]}"
              ]
            }
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-969691416\">Enemy_W4_Serpent_Charge_TriggerEff</a>"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
              "displayLines": "{[Skill05[0]]}",
              "constants": [],
              "variables": [
                "{[Skill05[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Define Modifier-Specific Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifierName": "<a class=\"gModGreen\" id=\"-919299430\">Enemy_W4_Serpent_Charge</a>[<span class=\"descriptionNumberColor\">Whirl</span>]",
          "variableName": "MDF_Trigger",
          "value": 0
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1224800253\">W4_Serpent_BattleScore1</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-919299430\">Enemy_W4_Serpent_Charge</a>[<span class=\"descriptionNumberColor\">Whirl</span>]"
        },
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase0",
          "revertDefault": true
        }
      ],
      "references": []
    },
    "4063010_Monster_W4_Serpent_Ability05_Insert": {
      "fileName": "4063010_Monster_W4_Serpent_Ability05_Insert",
      "childAbilityList": [
        "4063010_Monster_W4_Serpent_Ability05_Insert_Camera",
        "4063010_Monster_W4_Serpent_Ability05ToStb_Insert_Camera",
        "4063010_Monster_W4_Serpent_Ability05_Insert",
        "4063010_Monster_W4_Serpent_Ability05ToStb_Insert"
      ],
      "skillTrigger": "Skill05",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-919299430\">Enemy_W4_Serpent_Charge</a>[<span class=\"descriptionNumberColor\">Whirl</span>]"
        },
        {
          "name": "Update Displayed Energy Bar",
          "entityClass": "Enemy",
          "trigger": "SpEff_Trigger"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1028185089\">Enemy_AML_Minion02_01_RallyHP_Controller_V2</a>",
          "valuePerStack": {
            "MDF_RallyTransferRatio": {
              "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
              "displayLines": "{[Skill05[1]]}",
              "constants": [],
              "variables": [
                "{[Skill05[1]]}"
              ]
            },
            "MDF_Rally_HealPercentage": {
              "operator": "Variables[0] ({[Skill05[2]]}) || RETURN",
              "displayLines": "{[Skill05[2]]}",
              "constants": [],
              "variables": [
                "{[Skill05[2]]}"
              ]
            },
            "MDF_Rally_Strongth_AllDamageTypeAddedRatio": {
              "operator": "Variables[0] ({[Skill05[3]]}) || RETURN",
              "displayLines": "{[Skill05[3]]}",
              "constants": [],
              "variables": [
                "{[Skill05[3]]}"
              ]
            }
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-969691416\">Enemy_W4_Serpent_Charge_TriggerEff</a>"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
              "displayLines": "{[Skill05[0]]}",
              "constants": [],
              "variables": [
                "{[Skill05[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Define Modifier-Specific Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifierName": "<a class=\"gModGreen\" id=\"-919299430\">Enemy_W4_Serpent_Charge</a>[<span class=\"descriptionNumberColor\">Whirl</span>]",
          "variableName": "MDF_Trigger",
          "value": 0
        }
      ],
      "references": []
    },
    "4063010_Monster_W4_Serpent_Ability04_Part02": {
      "fileName": "4063010_Monster_W4_Serpent_Ability04_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "Skill04_AttackCount"
        },
        {
          "name": "Define Custom Variable with Modifier Values",
          "valueType": "Layer",
          "variableName": "Skill04_AttackCount",
          "modifierName": "<a class=\"gModGreen\" id=\"-919299430\">Enemy_W4_Serpent_Charge</a>[<span class=\"descriptionNumberColor\">Whirl</span>]",
          "multiplier": 1
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1028185089\">Enemy_AML_Minion02_01_RallyHP_Controller_V2</a>",
          "valuePerStack": {
            "MDF_RallyTransferRatio": {
              "operator": "Variables[0] ({[Skill04[1]]}) || RETURN",
              "displayLines": "{[Skill04[1]]}",
              "constants": [],
              "variables": [
                "{[Skill04[1]]}"
              ]
            },
            "MDF_Rally_HealPercentage": {
              "operator": "Variables[0] ({[Skill04[2]]}) || RETURN",
              "displayLines": "{[Skill04[2]]}",
              "constants": [],
              "variables": [
                "{[Skill04[2]]}"
              ]
            },
            "MDF_Rally_Strongth_AllDamageTypeAddedRatio": {
              "operator": "Variables[0] ({[Skill04[3]]}) || RETURN",
              "displayLines": "{[Skill04[3]]}",
              "constants": [],
              "variables": [
                "{[Skill04[3]]}"
              ]
            }
          }
        },
        {
          "name": "Update Displayed Energy Bar",
          "entityClass": "Enemy",
          "display": 0,
          "trigger": "SpEff_Trigger"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill04[0]]}) || Variables[1] ({[Skill04[4]]}) || Variables[2] (Skill04_AttackCount) || MUL || ADD || RETURN",
              "displayLines": "({[Skill04[0]]} + ({[Skill04[4]]} * Skill04_AttackCount))",
              "constants": [],
              "variables": [
                "{[Skill04[0]]}",
                "{[Skill04[4]]}",
                "Skill04_AttackCount"
              ]
            },
            "HitSplit": 0.1,
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
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill04[0]]}) || Variables[1] ({[Skill04[4]]}) || Variables[2] (Skill04_AttackCount) || MUL || ADD || RETURN",
              "displayLines": "({[Skill04[0]]} + ({[Skill04[4]]} * Skill04_AttackCount))",
              "constants": [],
              "variables": [
                "{[Skill04[0]]}",
                "{[Skill04[4]]}",
                "Skill04_AttackCount"
              ]
            },
            "HitSplit": 0.1,
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
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill04[0]]}) || Variables[1] ({[Skill04[4]]}) || Variables[2] (Skill04_AttackCount) || MUL || ADD || RETURN",
              "displayLines": "({[Skill04[0]]} + ({[Skill04[4]]} * Skill04_AttackCount))",
              "constants": [],
              "variables": [
                "{[Skill04[0]]}",
                "{[Skill04[4]]}",
                "Skill04_AttackCount"
              ]
            },
            "HitSplit": 0.1,
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
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill04[0]]}) || Variables[1] ({[Skill04[4]]}) || Variables[2] (Skill04_AttackCount) || MUL || ADD || RETURN",
              "displayLines": "({[Skill04[0]]} + ({[Skill04[4]]} * Skill04_AttackCount))",
              "constants": [],
              "variables": [
                "{[Skill04[0]]}",
                "{[Skill04[4]]}",
                "Skill04_AttackCount"
              ]
            },
            "HitSplit": 0.1,
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
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill04[0]]}) || Variables[1] ({[Skill04[4]]}) || Variables[2] (Skill04_AttackCount) || MUL || ADD || RETURN",
              "displayLines": "({[Skill04[0]]} + ({[Skill04[4]]} * Skill04_AttackCount))",
              "constants": [],
              "variables": [
                "{[Skill04[0]]}",
                "{[Skill04[4]]}",
                "Skill04_AttackCount"
              ]
            },
            "HitSplit": 0.1,
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
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill04[0]]}) || Variables[1] ({[Skill04[4]]}) || Variables[2] (Skill04_AttackCount) || MUL || ADD || RETURN",
              "displayLines": "({[Skill04[0]]} + ({[Skill04[4]]} * Skill04_AttackCount))",
              "constants": [],
              "variables": [
                "{[Skill04[0]]}",
                "{[Skill04[4]]}",
                "Skill04_AttackCount"
              ]
            },
            "HitSplit": 0.1,
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
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill04[0]]}) || Variables[1] ({[Skill04[4]]}) || Variables[2] (Skill04_AttackCount) || MUL || ADD || RETURN",
              "displayLines": "({[Skill04[0]]} + ({[Skill04[4]]} * Skill04_AttackCount))",
              "constants": [],
              "variables": [
                "{[Skill04[0]]}",
                "{[Skill04[4]]}",
                "Skill04_AttackCount"
              ]
            },
            "HitSplit": 0.4,
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
          "modifier": "<a class=\"gModGreen\" id=\"-919299430\">Enemy_W4_Serpent_Charge</a>[<span class=\"descriptionNumberColor\">Whirl</span>]"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4063010_Monster_W4_Serpent_Ability04_Part01": {
      "fileName": "4063010_Monster_W4_Serpent_Ability04_Part01",
      "childAbilityList": [
        "4063010_Monster_W4_Serpent_Ability04_Camera",
        "4063010_Monster_W4_Serpent_Ability04_Part01",
        "4063010_Monster_W4_Serpent_Ability04_Part02"
      ],
      "skillTrigger": "Skill04",
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
          "ability": "Monster_W4_Serpent_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase0",
          "revertDefault": true
        }
      ],
      "references": []
    },
    "4063010_Monster_W4_Serpent_Ability03_Part02": {
      "fileName": "4063010_Monster_W4_Serpent_Ability03_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1176741350\">Enemy_W4_Serpent_Charge_Eff</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-919299430\">Enemy_W4_Serpent_Charge</a>[<span class=\"descriptionNumberColor\">Whirl</span>]",
          "stackLimit": {
            "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
            "displayLines": "{[Skill03[0]]}",
            "constants": [],
            "variables": [
              "{[Skill03[0]]}"
            ]
          },
          "addStacksPerTrigger": {
            "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
            "displayLines": "{[Skill03[0]]}",
            "constants": [],
            "variables": [
              "{[Skill03[0]]}"
            ]
          }
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4063010_Monster_W4_Serpent_Ability03_Part01": {
      "fileName": "4063010_Monster_W4_Serpent_Ability03_Part01",
      "childAbilityList": [
        "4063010_Monster_W4_Serpent_Ability03_Camera",
        "4063010_Monster_W4_Serpent_Ability03_Part01",
        "4063010_Monster_W4_Serpent_Ability03_Part02"
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
          "ability": "Monster_W4_Serpent_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4063010_Monster_W4_Serpent_Ability02_Part02": {
      "fileName": "4063010_Monster_W4_Serpent_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "ifTargetFound": [
            {
              "name": "Shot Fired",
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Projectile's Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Imaginary",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
                      "displayLines": "{[Skill02[1]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill02[1]]}"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "EnergyGainPercent": "100%"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target Count",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Targets Adjacent(Blast)}}"
            },
            "compareType": "=",
            "value2": 2,
            "livingTargets": true
          },
          "passed": [
            {
              "name": "Shot Fired",
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Projectile's Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Imaginary",
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
                    "EnergyGainPercent": "100%"
                  }
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Shot Fired",
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Projectile's Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Imaginary",
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
                    "EnergyGainPercent": "100%"
                  }
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4063010_Monster_W4_Serpent_Ability02_Part01": {
      "fileName": "4063010_Monster_W4_Serpent_Ability02_Part01",
      "childAbilityList": [
        "4063010_Monster_W4_Serpent_Ability02_Camera",
        "4063010_Monster_W4_Serpent_Ability02_Part01",
        "4063010_Monster_W4_Serpent_Ability02_Part02"
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
          "ability": "Monster_W4_Serpent_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4063010_Monster_W4_Serpent_Ability01_Part02": {
      "fileName": "4063010_Monster_W4_Serpent_Ability01_Part02",
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
            "DamageType": "Imaginary",
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
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4063010_Monster_W4_Serpent_Ability01_Part01": {
      "fileName": "4063010_Monster_W4_Serpent_Ability01_Part01",
      "childAbilityList": [
        "4063010_Monster_W4_Serpent_Ability01_Camera",
        "4063010_Monster_W4_Serpent_Ability01_Part01",
        "4063010_Monster_W4_Serpent_Ability01_Part02"
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
          "ability": "Monster_W4_Serpent_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "references": []
    },
    "4063010_Monster_W4_Serpent_PassiveAbilityInitiate": {
      "fileName": "4063010_Monster_W4_Serpent_PassiveAbilityInitiate",
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
          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
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
          "name": "Update Displayed Energy Bar",
          "value": 0,
          "entityClass": "Enemy",
          "maximum": 1,
          "assignState": "True",
          "state": "CoolDown"
        }
      ],
      "references": []
    },
    "4063010_Modifiers": {
      "fileName": "4063010_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1224800253\">W4_Serpent_BattleScore1</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Achievement",
                  "relatedAchievements": [
                    {
                      "title": "Conservation of Angular Momentum",
                      "desc": "After \"Ichor Memosprite: Winged Serpent\" enters the Charging state, trigger multiple \"Torque Counter\" until its Charging state is dispelled",
                      "rarity": "Low"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "MDF_Trigger"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1776149511\">Enemy_W4_Serpent_Charge_ServantMark</a>",
          "stackType": "Multiple",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "KeepOnDeathrattle",
            "ServantInherit_ModifierContinuation"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-785780105\">Enemy_W4_Serpent_Charge_AvatarMark</a>",
          "stackType": "Multiple",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "KeepOnDeathrattle"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1176741350\">Enemy_W4_Serpent_Charge_Eff</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-969691416\">Enemy_W4_Serpent_Charge_TriggerEff</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1769527179\">Enemy_W4_Serpent_Charge_EndBreak</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phase": "Phase3"
                }
              ]
            },
            {
              "eventTrigger": "End Broken State [Owner]",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "phase": "Phase1",
                  "revertDefault": true
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-919299430\">Enemy_W4_Serpent_Charge</a>[<span class=\"descriptionNumberColor\">Whirl</span>]",
          "stackType": "Replace",
          "modifierFlags": [
            "MuteHitH",
            "ListenBattleEventSkill"
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
                  "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
                },
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phase": "Phase2"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
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
                    "target": "{{Player Team All(with Unselectable)V2}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-785780105\">Enemy_W4_Serpent_Charge_AvatarMark</a>",
                  "onlyRemoveOwnersInstance": true
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1776149511\">Enemy_W4_Serpent_Charge_ServantMark</a>",
                  "onlyRemoveOwnersInstance": true
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-969691416\">Enemy_W4_Serpent_Charge_TriggerEff</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": 0,
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "maximum": 1,
                  "assignState": "True",
                  "state": "CoolDown"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 3
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 4
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "AIFlag",
                      "value": 4
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "AIFlag",
                      "value": 1
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1176741350\">Enemy_W4_Serpent_Charge_Eff</a>"
                }
              ]
            },
            {
              "eventTrigger": "Turn Start [Anyone]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Trigger",
                  "value": 0
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-785780105\">Enemy_W4_Serpent_Charge_AvatarMark</a>",
                  "onlyRemoveOwnersInstance": true
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1776149511\">Enemy_W4_Serpent_Charge_ServantMark</a>",
                  "onlyRemoveOwnersInstance": true
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "MDF_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "MaxLayer",
                  "variableName": "MDF_MaxLayer",
                  "multiplier": 1
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (MDF_Layer) || RETURN",
                    "displayLines": "MDF_Layer",
                    "constants": [],
                    "variables": [
                      "MDF_Layer"
                    ]
                  },
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "maximum": {
                    "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                    "displayLines": "MDF_MaxLayer",
                    "constants": [],
                    "variables": [
                      "MDF_MaxLayer"
                    ]
                  },
                  "assignState": "True",
                  "state": "Active"
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked End [Owner]",
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
                        "team": "Player Team"
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "STAT_CTRL",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "DisableAction",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "Break",
                        "invertCondition": true
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_Trigger",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Is Entity Type",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "type": "Memosprite",
                                "invertCondition": true
                              },
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"-785780105\">Enemy_W4_Serpent_Charge_AvatarMark</a>",
                                "invertCondition": true,
                                "casterFilter": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                }
                              }
                            ]
                          },
                          {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Is Entity Type",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "type": "Memosprite"
                              },
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"-1776149511\">Enemy_W4_Serpent_Charge_ServantMark</a>",
                                "invertCondition": true,
                                "casterFilter": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                }
                              }
                            ]
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
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-969691416\">Enemy_W4_Serpent_Charge_TriggerEff</a>"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Trigger",
                      "value": 1
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "type": "Memosprite",
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-785780105\">Enemy_W4_Serpent_Charge_AvatarMark</a>"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}.[[addSummoner]]"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1776149511\">Enemy_W4_Serpent_Charge_ServantMark</a>"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_Layer",
                        "compareType": ">",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_W4_Serpent_Ability05_Insert",
                          "priorityTag": "MonsterInsertAttackSelf",
                          "canHitNonTargets": true,
                          "showInActionOrder": true,
                          "abortFlags": [
                            "STAT_CTRL",
                            "DisableAction",
                            "Break"
                          ],
                          "allowAbilityTriggers": false
                        }
                      ],
                      "failed": [
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_W4_Serpent_Ability05ToStb_Insert",
                          "priorityTag": "MonsterInsertAttackSelf",
                          "canHitNonTargets": true,
                          "showInActionOrder": true,
                          "abortFlags": [
                            "STAT_CTRL",
                            "DisableAction",
                            "Break"
                          ],
                          "allowAbilityTriggers": false
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1769527179\">Enemy_W4_Serpent_Charge_EndBreak</a>"
                },
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Owner]: Aborted",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Parameter String",
                        "compareType": "=",
                        "value2": "Monster_W4_Serpent_Ability05_Insert"
                      },
                      {
                        "name": "Compare: Parameter String",
                        "compareType": "=",
                        "value2": "Monster_W4_Serpent_Ability05ToStb_Insert"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-969691416\">Enemy_W4_Serpent_Charge_TriggerEff</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "After being hit by attacks from target units, uses \"Torque Counter\" and loses 1 stack of \"Whirl.\" During any unit's turn, each target unit can only trigger this effect once. When the \"Whirl\" stack reaches 0, the Charging state is dispelled. When Weakness is Broken, this unit loses all \"Whirl\" stacks.",
          "type": "Other",
          "effectName": "Whirl",
          "statusName": "Whirl",
          "addStacksPerTrigger": -1
        }
      ],
      "references": []
    }
  }
}