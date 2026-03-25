const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 5013011,
  "trimCharacterName": 5013011,
  "abilityList": [
    "5013011_Monster_W4_Claymore_02_PassiveAbilityInitiate",
    "5013011_Monster_W4_Claymore_02_Ability052_Part02",
    "5013011_Monster_W4_Claymore_02_Ability05_Part02",
    "5013011_Monster_W4_Claymore_02_Ability05_Part01",
    "5013011_Monster_W4_Claymore_02_Ability042_Part02",
    "5013011_Monster_W4_Claymore_02_Ability042_Part01",
    "5013011_Monster_W4_Claymore_02_Ability04_Part02",
    "5013011_Monster_W4_Claymore_02_Ability04_Part01",
    "5013011_Monster_W4_Claymore_02_Ability03_Part02",
    "5013011_Monster_W4_Claymore_02_Ability03_Part01",
    "5013011_Monster_W4_Claymore_02_Ability02_Insert_Part02",
    "5013011_Monster_W4_Claymore_02_Ability02_Insert_Part01",
    "5013011_Monster_W4_Claymore_02_Ability01_Insert_Part02",
    "5013011_Monster_W4_Claymore_02_Ability01_Insert_Part01",
    "5013011_Monster_W4_Claymore_02_Ability02_Part02",
    "5013011_Monster_W4_Claymore_02_Ability02_Part01",
    "5013011_Monster_W4_Claymore_02_Ability01_Part02",
    "5013011_Monster_W4_Claymore_02_Ability01_Part01",
    "5013011_Modifiers"
  ],
  "abilityObject": {
    "5013011_Monster_W4_Claymore_02_PassiveAbilityInitiate": {
      "fileName": "5013011_Monster_W4_Claymore_02_PassiveAbilityInitiate",
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"527111621\">MModifier_Monster_W4_Claymore_02_Status</a>"
        }
      ],
      "references": []
    },
    "5013011_Monster_W4_Claymore_02_Ability052_Part02": {
      "fileName": "5013011_Monster_W4_Claymore_02_Ability052_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-491236403\">W4_Claymore_02_BattleScore2</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Lineup Position",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "Index_Caster"
            },
            {
              "name": "Define Custom Variable with Lineup Position",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "Index_Target"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Index_Caster",
                "compareType": ">",
                "value2": {
                  "operator": "Variables[0] (Index_Target) || RETURN",
                  "displayLines": "Index_Target",
                  "constants": [],
                  "variables": [
                    "Index_Target"
                  ]
                }
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Imaginary",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill05[5]]}) || RETURN",
                      "displayLines": "{[Skill05[5]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill05[5]]}"
                      ]
                    },
                    "dmgFormula": "Max HP Scaling",
                    "Toughness": {
                      "operator": "Variables[0] ({[Skill05[6]]}) || RETURN",
                      "displayLines": "{[Skill05[6]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill05[6]]}"
                      ]
                    },
                    "Tags": null
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
                    "DamageType": "Imaginary",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill05[5]]}) || RETURN",
                      "displayLines": "{[Skill05[5]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill05[5]]}"
                      ]
                    },
                    "dmgFormula": "Max HP Scaling",
                    "Toughness": {
                      "operator": "Variables[0] ({[Skill05[6]]}) || RETURN",
                      "displayLines": "{[Skill05[6]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill05[6]]}"
                      ]
                    },
                    "Tags": null
                  }
                }
              ]
            },
            "Trigger: Attack End"
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "searchRandom": true,
          "conditions": {
            "name": "Compare: Monster Rank",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "compareType": "<=",
            "value2": 3
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target List}}.[[randomize]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"604474914\">MModifier_Monster_W4_Claymore_02_Ability05_Status</a>[<span class=\"descriptionNumberColor\">Revelry</span>]",
              "maxTargetCount": {
                "operator": "Variables[0] ({[Skill05[2]]}) || RETURN",
                "displayLines": "{[Skill05[2]]}",
                "constants": [],
                "variables": [
                  "{[Skill05[2]]}"
                ]
              },
              "duration": {
                "operator": "Variables[0] ({[Skill05[3]]}) || RETURN",
                "displayLines": "{[Skill05[3]]}",
                "constants": [],
                "variables": [
                  "{[Skill05[3]]}"
                ]
              },
              "baseChance": {
                "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                "displayLines": "{[Skill05[1]]}",
                "constants": [],
                "variables": [
                  "{[Skill05[1]]}"
                ]
              }
            }
          ]
        },
        {
          "name": "Adjust Team Punchline Value",
          "value": {
            "operator": "Variables[0] ({[Skill05[7]]}) || RETURN",
            "displayLines": "{[Skill05[7]]}",
            "constants": [],
            "variables": [
              "{[Skill05[7]]}"
            ]
          },
          "adjustment": "Add"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1907385221\">MModifier_Monster_W4_Claymore_02_Elation</a>[<span class=\"descriptionNumberColor\">Frenzied Rendition</span>]"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "5013011_Monster_W4_Claymore_02_Ability05_Part02": {
      "fileName": "5013011_Monster_W4_Claymore_02_Ability05_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"135439563\">MModifier_Monster_W4_Claymore_02_Ability05_Speed</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
          "duration": {
            "operator": "Variables[0] ({[Skill05[4]]}) || RETURN",
            "displayLines": "{[Skill05[4]]}",
            "constants": [],
            "variables": [
              "{[Skill05[4]]}"
            ]
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
              "displayLines": "{[Skill05[0]]}",
              "constants": [],
              "variables": [
                "{[Skill05[0]]}"
              ]
            }
          }
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
              "name": "Action Advance/Delay",
              "advanceType": "Set",
              "target": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              "set": 0
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"437668983\">Monster_W4_Nikadory_RLBoss_DamageUp</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
              "duration": {
                "operator": "Variables[0] (UnusedUnderThisBase_584) || RETURN",
                "displayLines": "UnusedUnderThisBase_584",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_584"
                ]
              },
              "valuePerStack": {
                "MDF_DamageUpRatio_PerLayer": {
                  "operator": "Variables[0] (UnusedUnderThisBase_585) || RETURN",
                  "displayLines": "UnusedUnderThisBase_585",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_585"
                  ]
                }
              }
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "5013011_Monster_W4_Claymore_02_Ability05_Part01": {
      "fileName": "5013011_Monster_W4_Claymore_02_Ability05_Part01",
      "childAbilityList": [
        "5013011_Monster_W4_Claymore_02_Ability05_Camera",
        "5013011_Monster_W4_Claymore_02_Ability05_Part01",
        "5013011_Monster_W4_Claymore_02_Ability05_Part02",
        "5013011_Monster_W4_Claymore_02_Ability052_Camera",
        "5013011_Monster_W4_Claymore_02_Ability052_Part02"
      ],
      "skillTrigger": "Skill05",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1907385221\">MModifier_Monster_W4_Claymore_02_Elation</a>[<span class=\"descriptionNumberColor\">Frenzied Rendition</span>]"
          },
          "passed": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "Monster_W4_Claymore_02_Ability052_Part02",
              "isTrigger": true
            },
            "Deleted bullshit"
          ],
          "failed": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "Monster_W4_Claymore_02_Ability05_Part02",
              "isTrigger": true
            },
            "Deleted bullshit"
          ]
        }
      ],
      "references": []
    },
    "5013011_Monster_W4_Claymore_02_Ability042_Part02": {
      "fileName": "5013011_Monster_W4_Claymore_02_Ability042_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase1"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-541569260\">W4_Claymore_02_BattleScore1</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-40648707\">MModifier_Monster_W4_Claymore_02_Ability03_Eff</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1076182583\">MModifier_Monster_W4_Claymore_02_Ability03_Aim</a>[<span class=\"descriptionNumberColor\">Charging</span>]"
        },
        {
          "name": "Adjust Team Punchline Value",
          "value": {
            "operator": "Variables[0] ({[Skill03[1]]}) || RETURN",
            "displayLines": "{[Skill03[1]]}",
            "constants": [],
            "variables": [
              "{[Skill03[1]]}"
            ]
          },
          "adjustment": "Add"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-989097149\">MModifier_Monster_W4_Claymore_02_Ability03_AllDamageTypeTaken</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
          "duration": {
            "operator": "Variables[0] ({[Skill03[3]]}) || RETURN",
            "displayLines": "{[Skill03[3]]}",
            "constants": [],
            "variables": [
              "{[Skill03[3]]}"
            ]
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] ({[Skill03[2]]}) || RETURN",
              "displayLines": "{[Skill03[2]]}",
              "constants": [],
              "variables": [
                "{[Skill03[2]]}"
              ]
            }
          }
        }
      ],
      "references": []
    },
    "5013011_Monster_W4_Claymore_02_Ability042_Part01": {
      "fileName": "5013011_Monster_W4_Claymore_02_Ability042_Part01",
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
          "ability": "Monster_W4_Claymore_02_Ability042_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "5013011_Monster_W4_Claymore_02_Ability04_Part02": {
      "fileName": "5013011_Monster_W4_Claymore_02_Ability04_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase1"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-40648707\">MModifier_Monster_W4_Claymore_02_Ability03_Eff</a>"
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
              "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
              "displayLines": "{[Skill04[0]]}",
              "constants": [],
              "variables": [
                "{[Skill04[0]]}"
              ]
            },
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
          "modifier": "<a class=\"gModGreen\" id=\"1076182583\">MModifier_Monster_W4_Claymore_02_Ability03_Aim</a>[<span class=\"descriptionNumberColor\">Charging</span>]"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "5013011_Monster_W4_Claymore_02_Ability04_Part01": {
      "fileName": "5013011_Monster_W4_Claymore_02_Ability04_Part01",
      "childAbilityList": [
        "5013011_Monster_W4_Claymore_Ability04_Camera",
        "5013011_Monster_W4_Claymore_02_Ability04_Part01",
        "5013011_Monster_W4_Claymore_02_Ability04_Part02",
        "5013011_Monster_W4_Claymore_02_Ability04_Camera",
        "5013011_Monster_W4_Claymore_02_Ability042_Part01",
        "5013011_Monster_W4_Claymore_02_Ability042_Part02",
        "5013011_Monster_W4_Claymore_02_Ability042_Camera"
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
          "ability": "Monster_W4_Claymore_02_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "5013011_Monster_W4_Claymore_02_Ability03_Part02": {
      "fileName": "5013011_Monster_W4_Claymore_02_Ability03_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"-40648707\">MModifier_Monster_W4_Claymore_02_Ability03_Eff</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1076182583\">MModifier_Monster_W4_Claymore_02_Ability03_Aim</a>[<span class=\"descriptionNumberColor\">Charging</span>]"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "5013011_Monster_W4_Claymore_02_Ability03_Part01": {
      "fileName": "5013011_Monster_W4_Claymore_02_Ability03_Part01",
      "childAbilityList": [
        "5013011_Monster_W4_Claymore_02_Ability03_Camera",
        "5013011_Monster_W4_Claymore_02_Ability03_Part01",
        "5013011_Monster_W4_Claymore_02_Ability03_Part02"
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
          "ability": "Monster_W4_Claymore_02_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase2"
        }
      ],
      "references": []
    },
    "5013011_Monster_W4_Claymore_02_Ability02_Insert_Part02": {
      "fileName": "5013011_Monster_W4_Claymore_02_Ability02_Insert_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "Sweep the Right!"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Target Right of Ability Target(ST)}}"
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
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Target Left of Ability Target(ST)}}"
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
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End"
      ],
      "references": []
    },
    "5013011_Monster_W4_Claymore_02_Ability02_Insert_Part01": {
      "fileName": "5013011_Monster_W4_Claymore_02_Ability02_Insert_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "inherentTarget": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              {
                "name": "Sort by Physical Positioning",
                "byHighest": true
              },
              {
                "name": "Filter by Life-State",
                "state": "Mask_AliveOnly"
              },
              {
                "name": "Target Index",
                "indexValue": 1
              }
            ]
          },
          "ability": "Monster_W4_Claymore_02_Ability02_Insert_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "5013011_Monster_W4_Claymore_02_Ability01_Insert_Part02": {
      "fileName": "5013011_Monster_W4_Claymore_02_Ability01_Insert_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "Sweep the Left!"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Target Left of Ability Target(ST)}}"
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
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Target Right of Ability Target(ST)}}"
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
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End"
      ],
      "references": []
    },
    "5013011_Monster_W4_Claymore_02_Ability01_Insert_Part01": {
      "fileName": "5013011_Monster_W4_Claymore_02_Ability01_Insert_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "inherentTarget": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              {
                "name": "Sort by Physical Positioning"
              },
              {
                "name": "Filter by Life-State",
                "state": "Mask_AliveOnly"
              },
              {
                "name": "Target Index",
                "indexValue": 1
              }
            ]
          },
          "ability": "Monster_W4_Claymore_02_Ability01_Insert_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "5013011_Monster_W4_Claymore_02_Ability02_Part02": {
      "fileName": "5013011_Monster_W4_Claymore_02_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Target Right of Ability Target(ST)}}"
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
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Target Left of Ability Target(ST)}}"
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
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "5013011_Monster_W4_Claymore_02_Ability02_Part01": {
      "fileName": "5013011_Monster_W4_Claymore_02_Ability02_Part01",
      "childAbilityList": [
        "5013011_Monster_W4_Claymore_02_Ability02_Camera",
        "5013011_Monster_W4_Claymore_02_Ability02_Part01",
        "5013011_Monster_W4_Claymore_02_Ability02_Part02",
        "5013011_Monster_W4_Claymore_02_Ability02_Insert_Part01",
        "5013011_Monster_W4_Claymore_02_Ability02_Insert_Part02"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "inherentTarget": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              {
                "name": "Sort by Physical Positioning",
                "byHighest": true
              },
              {
                "name": "Filter by Life-State",
                "state": "Mask_AliveOnly"
              },
              {
                "name": "Target Index",
                "indexValue": 1
              }
            ]
          },
          "ability": "Monster_W4_Claymore_02_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "5013011_Monster_W4_Claymore_02_Ability01_Part02": {
      "fileName": "5013011_Monster_W4_Claymore_02_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Target Left of Ability Target(ST)}}"
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
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Target Right of Ability Target(ST)}}"
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
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "5013011_Monster_W4_Claymore_02_Ability01_Part01": {
      "fileName": "5013011_Monster_W4_Claymore_02_Ability01_Part01",
      "childAbilityList": [
        "5013011_Monster_W4_Claymore_02_Ability01_Camera",
        "5013011_Monster_W4_Claymore_02_Ability01_Part01",
        "5013011_Monster_W4_Claymore_02_Ability01_Part02",
        "5013011_Monster_W4_Claymore_02_Ability01_Insert_Part01",
        "5013011_Monster_W4_Claymore_02_Ability01_Insert_Part02"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "inherentTarget": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              {
                "name": "Sort by Physical Positioning"
              },
              {
                "name": "Filter by Life-State",
                "state": "Mask_AliveOnly"
              },
              {
                "name": "Target Index",
                "indexValue": 1
              }
            ]
          },
          "ability": "Monster_W4_Claymore_02_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "5013011_Modifiers": {
      "fileName": "5013011_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__931132041\">MModifier_Monster_W4_Claymore_02_Ability05_Status_Part1</a>",
          "stackType": "Replace",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "maxTargets": 1,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1076182583\">MModifier_Monster_W4_Claymore_02_Ability03_Aim</a>[<span class=\"descriptionNumberColor\">Charging</span>]",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": [
                          "Break",
                          "DisableAction",
                          "STAT_CTRL"
                        ],
                        "invertCondition": true
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable with Lineup Position",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_Index1"
                    },
                    {
                      "name": "Define Custom Variable with Lineup Position",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "MDF_Index2"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_Index1",
                        "compareType": ">",
                        "value2": {
                          "operator": "Variables[0] (MDF_Index2) || RETURN",
                          "displayLines": "MDF_Index2",
                          "constants": [],
                          "variables": [
                            "MDF_Index2"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Random Event",
                      "odds": [
                        0.5,
                        0.5
                      ],
                      "execute": [
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_W4_Claymore_02_Ability01_Insert_Part01",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Player Team All}}"
                          },
                          "priorityTag": "MonsterInsertAttackOthers",
                          "targetState": "Mask_AliveOrLimbo",
                          "showInActionOrder": true,
                          "abortFlags": [
                            "Break",
                            "DisableAction",
                            "STAT_CTRL"
                          ],
                          "allowAbilityTriggers": false
                        },
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_W4_Claymore_02_Ability02_Insert_Part01",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Player Team All}}"
                          },
                          "priorityTag": "MonsterInsertAttackOthers",
                          "targetState": "Mask_AliveOrLimbo",
                          "showInActionOrder": true,
                          "abortFlags": [
                            "Break",
                            "DisableAction",
                            "STAT_CTRL"
                          ],
                          "allowAbilityTriggers": false
                        }
                      ]
                    }
                  ]
                }
              ],
              "priorityLevel": 100
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__604474914\">MModifier_Monster_W4_Claymore_02_Ability05_Status</a>[<span class=\"descriptionNumberColor\">Revelry</span>]",
          "stackType": "Merge",
          "modifierFlags": [
            "DisableAction",
            "IdleStun",
            "STAT_Stun_Effect",
            "STAT_CTRL"
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
                  "modifier": "<a class=\"gModGreen\" id=\"931132041\">MModifier_Monster_W4_Claymore_02_Ability05_Status_Part1</a>"
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
                  "modifier": "<a class=\"gModGreen\" id=\"931132041\">MModifier_Monster_W4_Claymore_02_Ability05_Status_Part1</a>"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "Index_Caster"
          ],
          "description": "Cannot take action. At the start of the turn, if \"%CasterName\" is not in Charging state, \"%CasterName\" will initiate a Sweep attack.",
          "type": "Debuff",
          "effectName": "Revelry",
          "statusName": "Revelry"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__135439563\">MModifier_Monster_W4_Claymore_02_Ability05_Speed</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
          "modifierFlags": [
            "STAT_SpeedUp"
          ],
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                    "displayLines": "MDF_PropertyValue",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
                  }
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "stackData": [
            "MDF_PropertyValue"
          ],
          "latentQueue": [],
          "description": "SPD increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "SPD Boost",
          "statusName": "SPD Boost"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1582140309\">MModifier_Monster_W4_Claymore_02_Ability03_Mark</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-40648707\">MModifier_Monster_W4_Claymore_02_Ability03_Eff</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-989097149\">MModifier_Monster_W4_Claymore_02_Ability03_AllDamageTypeTaken</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
          "stackType": "Replace",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                    "displayLines": "MDF_PropertyValue",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyValue"
          ],
          "latentQueue": [],
          "description": "DMG taken increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "effectName": "Vulnerability",
          "statusName": "Vulnerability"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1076182583\">MModifier_Monster_W4_Claymore_02_Ability03_Aim</a>[<span class=\"descriptionNumberColor\">Charging</span>]",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phase": "Phase1"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-40648707\">MModifier_Monster_W4_Claymore_02_Ability03_Eff</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Living State",
                    "state": "Mask_AliveOnly",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "invertCondition": true
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "AIFlag",
                  "value": 2
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
                    "target": "{{Level Entity}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1582140309\">MModifier_Monster_W4_Claymore_02_Ability03_Mark</a>"
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "entityClass": "Enemy",
                  "assignState": "False"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1582140309\">MModifier_Monster_W4_Claymore_02_Ability03_Mark</a>"
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "assignState": "True",
                  "state": "Active"
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
                    "value1": "MDF_Trigger",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Adjust Team Punchline Value",
                      "value": {
                        "operator": "Variables[0] ({[Skill03[1]]}) || RETURN",
                        "displayLines": "{[Skill03[1]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill03[1]]}"
                        ]
                      },
                      "adjustment": "Add"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-989097149\">MModifier_Monster_W4_Claymore_02_Ability03_AllDamageTypeTaken</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
                      "duration": {
                        "operator": "Variables[0] ({[Skill03[3]]}) || RETURN",
                        "displayLines": "{[Skill03[3]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill03[3]]}"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] ({[Skill03[2]]}) || RETURN",
                          "displayLines": "{[Skill03[2]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill03[2]]}"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-541569260\">W4_Claymore_02_BattleScore1</a>"
                    }
                  ]
                },
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "When Losing Modifier [Owner]",
              "execute": [
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
                        "value1": "MDF_Trigger",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_Insert",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Modifier Has Flag",
                            "flagName": "DisableAction"
                          },
                          {
                            "name": "Modifier Has Flag",
                            "flagName": "STAT_CTRL"
                          }
                        ]
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
                        "flagName": "STAT_CTRL",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Insert",
                      "value": 1
                    },
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "abilityName": "Monster_W4_Claymore_02_Ability042_Part01",
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "priorityTag": "MonsterBuffSelf",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "abortFlags": [
                        "Break",
                        "DisableAction",
                        "STAT_CTRL"
                      ],
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Owner]: Aborted",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Parameter String",
                    "compareType": "=",
                    "value2": "Monster_W4_Claymore_02_Ability042_Part01"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Insert",
                      "value": 0
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Aha Instant: Start",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Trigger",
                  "value": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Insert",
                  "value": 1
                },
                {
                  "name": "Inject Ability Use",
                  "condition": {
                    "name": "Insert Ability Condition",
                    "type": "AbilityOwnerInsertUnusedCount",
                    "typeValue": 1
                  },
                  "abilityName": "Monster_W4_Claymore_02_Ability042_Part01",
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "priorityTag": "MonsterBuffSelf",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "abortFlags": [
                    "Break",
                    "DisableAction",
                    "STAT_CTRL"
                  ],
                  "allowAbilityTriggers": false
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "When taking the next action, uses \"Time to Rock!\" When Aha Instant is triggered or Weakness is broken and dispels Charging. After Aha Instant is triggered, grants the target team Punchline, and increases the DMG taken by this unit.",
          "type": "Other",
          "effectName": "Charging",
          "statusName": "Charging"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1907385221\">MModifier_Monster_W4_Claymore_02_Elation</a>[<span class=\"descriptionNumberColor\">Frenzied Rendition</span>]",
          "description": "Using \"Get Hyped!\" produces a more Elated effect.",
          "type": "Other",
          "effectName": "Frenzied Rendition",
          "statusName": "Frenzied Rendition"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-844017062\">MModifier_Monster_W4_Claymore_02_NoElation</a>[<span class=\"descriptionNumberColor\">Music Madness</span>]",
          "description": "When Aha Instant is activated, this unit gains the \"Frenzied Rendition\" state, making the effects of \"Get Hyped!\" more Elated.",
          "type": "Other",
          "statusName": "Music Madness"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__527111621\">MModifier_Monster_W4_Claymore_02_Status</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"-844017062\">MModifier_Monster_W4_Claymore_02_NoElation</a>[<span class=\"descriptionNumberColor\">Music Madness</span>]"
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
                    "target": "{{Modifier Holder}}"
                  },
                  "revertDefault": true
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Wig",
                  "value": 1
                }
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-1907385221\">MModifier_Monster_W4_Claymore_02_Elation</a>[<span class=\"descriptionNumberColor\">Frenzied Rendition</span>]"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-844017062\">MModifier_Monster_W4_Claymore_02_NoElation</a>[<span class=\"descriptionNumberColor\">Music Madness</span>]"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Losing Modifier [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-1907385221\">MModifier_Monster_W4_Claymore_02_Elation</a>[<span class=\"descriptionNumberColor\">Frenzied Rendition</span>]"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-844017062\">MModifier_Monster_W4_Claymore_02_NoElation</a>[<span class=\"descriptionNumberColor\">Music Madness</span>]"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Aha Instant: Start",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1907385221\">MModifier_Monster_W4_Claymore_02_Elation</a>[<span class=\"descriptionNumberColor\">Frenzied Rendition</span>]"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-491236403\">W4_Claymore_02_BattleScore2</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Achievement",
                  "relatedAchievements": [
                    {
                      "title": "Oil To The Flames",
                      "desc": "In a battle against \"Rocking Rebel,\" trigger the \"Get Hyped!\" Elation effect",
                      "rarity": "Low"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-541569260\">W4_Claymore_02_BattleScore1</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Achievement",
                  "relatedAchievements": [
                    {
                      "title": "Rock 'n' Roll Is Dead",
                      "desc": "In a battle against \"Rocking Rebel,\" activate Aha Instant to interrupt its Charging state",
                      "rarity": "Low"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "AIFlag",
            "MDF_Trigger"
          ]
        }
      ],
      "references": []
    }
  }
}