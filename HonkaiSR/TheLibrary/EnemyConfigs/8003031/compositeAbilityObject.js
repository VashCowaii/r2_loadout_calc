const compositeAbilityObject = {
  "fullCharacterName": 8003031,
  "trimCharacterName": 8003031,
  "abilityList": [
    "8003031_Monster_XP_Elite02_AbilityP02_Part02",
    "8003031_Monster_XP_Elite02_AbilityP02_Part01",
    "8003031_Monster_XP_Elite02_AbilityP01_Part02",
    "8003031_Monster_XP_Elite02_AbilityP01_Part01",
    "8003031_Monster_XP_Elite02_Ability06_Part02",
    "8003031_Monster_XP_Elite02_Ability06_Part01",
    "8003031_Monster_XP_Elite02_Ability05_Part02",
    "8003031_Monster_XP_Elite02_Ability05_Part01",
    "8003031_Monster_XP_Elite02_Ability04_Part02",
    "8003031_Monster_XP_Elite02_Ability04_Part01",
    "8003031_Monster_XP_Elite02_Ability03_Part02",
    "8003031_Monster_XP_Elite02_Ability03_Part01",
    "8003031_Monster_XP_Elite02_Ability02_Part02",
    "8003031_Monster_XP_Elite02_Ability02_Part01",
    "8003031_Monster_XP_Elite02_Ability01_Part02",
    "8003031_Monster_XP_Elite02_Ability01_Part01",
    "8003031_Monster_XP_Elite02_Passive01",
    "8003031_Modifiers"
  ],
  "abilityObject": {
    "8003031_Monster_XP_Elite02_AbilityP02_Part02": {
      "fileName": "8003031_Monster_XP_Elite02_AbilityP02_Part02",
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
          "scope": "TargetEntity",
          "variableName": "Monster_XP_Elite02_00_Achievement",
          "value": 1
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "searchRandom": true,
          "includeDyingTargets": true,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-2041430190\">Monster_XP_Elite02_Ability07_Mark</a>"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "Monster_XP_Elite02_00_Achievement_02",
              "context": "TargetEntity",
              "value": 1,
              "max": 4
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Monster_XP_Elite02_00_Achievement_02",
            "compareType": "=",
            "value2": 4,
            "contextScope": "TargetEntity"
          },
          "passed": [
            {
              "name": "Achievement",
              "matchTags": true,
              "relatedAchievements": [
                {
                  "title": "\"I Don't Get No Respect!\"",
                  "desc": "Enrage the Guardian Shadow with #1[i] character(s) in your team",
                  "rarity": "Mid",
                  "type": "Hidden until Completion",
                  "params": [
                    4
                  ]
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "Monster_XP_Elite02_00_Achievement_02"
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] ({[Skill07[0]]}) || RETURN",
              "displayLines": "{[Skill07[0]]}",
              "constants": [],
              "variables": [
                "{[Skill07[0]]}"
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
    "8003031_Monster_XP_Elite02_AbilityP02_Part01": {
      "fileName": "8003031_Monster_XP_Elite02_AbilityP02_Part01",
      "childAbilityList": [
        "8003031_Monster_XP_Elite02_AbilityP02_Camera",
        "8003031_Monster_XP_Elite02_AbilityP02_Part01",
        "8003031_Monster_XP_Elite02_AbilityP02_Part02"
      ],
      "skillTrigger": "Skill08",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_XP_Elite02_AbilityP02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8003031_Monster_XP_Elite02_AbilityP01_Part02": {
      "fileName": "8003031_Monster_XP_Elite02_AbilityP01_Part02",
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
          "scope": "TargetEntity",
          "variableName": "Monster_XP_Elite02_00_Achievement",
          "value": 1
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2041430190\">Monster_XP_Elite02_Ability07_Mark</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "searchRandom": true,
          "includeDyingTargets": true,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-2041430190\">Monster_XP_Elite02_Ability07_Mark</a>"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "Monster_XP_Elite02_00_Achievement_02",
              "context": "TargetEntity",
              "value": 1,
              "max": 4
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Monster_XP_Elite02_00_Achievement_02",
            "compareType": "=",
            "value2": 4,
            "contextScope": "TargetEntity"
          },
          "passed": [
            {
              "name": "Achievement",
              "matchTags": true,
              "relatedAchievements": [
                {
                  "title": "\"I Don't Get No Respect!\"",
                  "desc": "Enrage the Guardian Shadow with #1[i] character(s) in your team",
                  "rarity": "Mid",
                  "type": "Hidden until Completion",
                  "params": [
                    4
                  ]
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "Monster_XP_Elite02_00_Achievement_02"
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] ({[Skill07[0]]}) || RETURN",
              "displayLines": "{[Skill07[0]]}",
              "constants": [],
              "variables": [
                "{[Skill07[0]]}"
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
          "name": "WAIT FOR",
          "condition": {
            "name": "Death Animation Completed",
            "team": "Player Team",
            "type": "Team Characters"
          }
        }
      ],
      "references": []
    },
    "8003031_Monster_XP_Elite02_AbilityP01_Part01": {
      "fileName": "8003031_Monster_XP_Elite02_AbilityP01_Part01",
      "childAbilityList": [
        "8003031_Monster_XP_Elite02_AbilityP01_Camera",
        "8003031_Monster_XP_Elite02_AbilityP01_Part01",
        "8003031_Monster_XP_Elite02_AbilityP01_Part02"
      ],
      "skillTrigger": "Skill07",
      "abilityType": "Basic ATK",
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
            "target": "{{Ability Target(ST)}}"
          },
          "ability": "Monster_XP_Elite02_AbilityP01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8003031_Monster_XP_Elite02_Ability06_Part02": {
      "fileName": "8003031_Monster_XP_Elite02_Ability06_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemies by Aggro OR Random}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
                  "displayLines": "{[Skill06[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill06[0]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1935319413\">Standard_DOT_Electric</a>[<span class=\"descriptionNumberColor\">Shock</span>]",
              "duration": {
                "operator": "Variables[0] ({[Skill06[4]]}) || RETURN",
                "displayLines": "{[Skill06[4]]}",
                "constants": [],
                "variables": [
                  "{[Skill06[4]]}"
                ]
              },
              "baseChance": {
                "operator": "Variables[0] ({[Skill06[2]]}) || RETURN",
                "displayLines": "{[Skill06[2]]}",
                "constants": [],
                "variables": [
                  "{[Skill06[2]]}"
                ]
              },
              "immediateEffect": true,
              "valuePerStack": {
                "Modifier_Electric_DamagePercentage": {
                  "operator": "Variables[0] ({[Skill06[3]]}) || RETURN",
                  "displayLines": "{[Skill06[3]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill06[3]]}"
                  ]
                }
              },
              "stackFlag": "CharacterSkill"
            }
          ]
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "operator": "Variables[0] (WHOLE) || Variables[1] ({[Skill06[1]]}) || PARAM_1 || FUNCTION || Constants[0] (1) || SUB || RETURN",
            "displayLines": "(&nbsp;<span class=\"descriptionFunctionColor\">WHOLE</span>({[Skill06[1]]}) - 1)",
            "constants": [
              1
            ],
            "variables": [
              "WHOLE",
              "{[Skill06[1]]}"
            ]
          },
          "Event": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
                      "displayLines": "{[Skill06[0]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill06[0]]}"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK",
                    "EnergyGainPercent": "100%"
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1935319413\">Standard_DOT_Electric</a>[<span class=\"descriptionNumberColor\">Shock</span>]",
                  "duration": {
                    "operator": "Variables[0] ({[Skill06[4]]}) || RETURN",
                    "displayLines": "{[Skill06[4]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill06[4]]}"
                    ]
                  },
                  "baseChance": {
                    "operator": "Variables[0] ({[Skill06[2]]}) || RETURN",
                    "displayLines": "{[Skill06[2]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill06[2]]}"
                    ]
                  },
                  "immediateEffect": true,
                  "valuePerStack": {
                    "Modifier_Electric_DamagePercentage": {
                      "operator": "Variables[0] ({[Skill06[3]]}) || RETURN",
                      "displayLines": "{[Skill06[3]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill06[3]]}"
                      ]
                    }
                  },
                  "stackFlag": "CharacterSkill"
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase1"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8003031_Monster_XP_Elite02_Ability06_Part01": {
      "fileName": "8003031_Monster_XP_Elite02_Ability06_Part01",
      "childAbilityList": [
        "8003031_Monster_XP_Elite02_Ability06_Camera",
        "8003031_Monster_XP_Elite02_Ability06_Part01",
        "8003031_Monster_XP_Elite02_Ability06_Part02"
      ],
      "skillTrigger": "Skill06",
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
          "ability": "Monster_XP_Elite02_Ability06_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8003031_Monster_XP_Elite02_Ability05_Part02": {
      "fileName": "8003031_Monster_XP_Elite02_Ability05_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}.[[removeMemosprite]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-668499328\">Monster_XP_Elite02_Edict03</a>[<span class=\"descriptionNumberColor\">Ban</span>]"
        },
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase1"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8003031_Monster_XP_Elite02_Ability05_Part01": {
      "fileName": "8003031_Monster_XP_Elite02_Ability05_Part01",
      "childAbilityList": [
        "8003031_Monster_XP_Elite02_Ability05_Camera",
        "8003031_Monster_XP_Elite02_Ability05_Part01",
        "8003031_Monster_XP_Elite02_Ability05_Part02"
      ],
      "skillTrigger": "Skill05",
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
          "ability": "Monster_XP_Elite02_Ability05_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8003031_Monster_XP_Elite02_Ability04_Part02": {
      "fileName": "8003031_Monster_XP_Elite02_Ability04_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}.[[removeMemosprite]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-651721709\">Monster_XP_Elite02_Edict02</a>[<span class=\"descriptionNumberColor\">Ban</span>]"
        },
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase1"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8003031_Monster_XP_Elite02_Ability04_Part01": {
      "fileName": "8003031_Monster_XP_Elite02_Ability04_Part01",
      "childAbilityList": [
        "8003031_Monster_XP_Elite02_Ability04_Camera",
        "8003031_Monster_XP_Elite02_Ability04_Part01",
        "8003031_Monster_XP_Elite02_Ability04_Part02"
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
          "ability": "Monster_XP_Elite02_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8003031_Monster_XP_Elite02_Ability03_Part02": {
      "fileName": "8003031_Monster_XP_Elite02_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}.[[removeMemosprite]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-634944090\">Monster_XP_Elite02_Edict01</a>[<span class=\"descriptionNumberColor\">Ban</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"28427477\">Monster_XP_Elite02_Edict01_Self</a>"
        },
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase1"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8003031_Monster_XP_Elite02_Ability03_Part01": {
      "fileName": "8003031_Monster_XP_Elite02_Ability03_Part01",
      "childAbilityList": [
        "8003031_Monster_XP_Elite02_Ability03_Camera",
        "8003031_Monster_XP_Elite02_Ability03_Part01",
        "8003031_Monster_XP_Elite02_Ability03_Part02"
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
          "ability": "Monster_XP_Elite02_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8003031_Monster_XP_Elite02_Ability02_Part02": {
      "fileName": "8003031_Monster_XP_Elite02_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "searchRandom": true
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
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
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
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
            "attackType": "Basic ATK",
            "EnergyGainPercent": "50%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase1"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8003031_Monster_XP_Elite02_Ability02_Part01": {
      "fileName": "8003031_Monster_XP_Elite02_Ability02_Part01",
      "childAbilityList": [
        "8003031_Monster_XP_Elite02_Ability02_Camera",
        "8003031_Monster_XP_Elite02_Ability02_Part01",
        "8003031_Monster_XP_Elite02_Ability02_Part02"
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
          "ability": "Monster_XP_Elite02_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8003031_Monster_XP_Elite02_Ability01_Part02": {
      "fileName": "8003031_Monster_XP_Elite02_Ability01_Part02",
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
            "DamageType": "Thunder",
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
    "8003031_Monster_XP_Elite02_Ability01_Part01": {
      "fileName": "8003031_Monster_XP_Elite02_Ability01_Part01",
      "childAbilityList": [
        "8003031_Monster_XP_Elite02_Ability01_Camera",
        "8003031_Monster_XP_Elite02_Ability01_Part01",
        "8003031_Monster_XP_Elite02_Ability01_Part02"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_XP_Elite02_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8003031_Monster_XP_Elite02_Passive01": {
      "fileName": "8003031_Monster_XP_Elite02_Passive01",
      "childAbilityList": [
        "8003031_Monster_XP_Elite02_Passive01"
      ],
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
          "modifier": "<a class=\"gModGreen\" id=\"144051728\">Monster_XP_Elite02_AIChange</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-619107649\">Monster_XP_Elite02_AIChange_02</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"293273578\">Monster_XP_Elite02_AchievementControl</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"624895081\">Monster_XP_Elite02_DestroyClear</a>"
        }
      ],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1713212376\">Monster_XP_Elite02_EffectControl</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__783092667\">Monster_XP_Elite02_DebuffEnhanceEffect</a>[<span class=\"descriptionNumberColor\">undefined</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "ModifierLayers",
                  "multiplier": 1
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (0) || Variables[0] (MDF_DefenceAddedRatio_PerLayer) || Variables[1] (ModifierLayers) || MUL || SUB || RETURN",
                    "displayLines": "(0 - (MDF_DefenceAddedRatio_PerLayer * ModifierLayers))",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "MDF_DefenceAddedRatio_PerLayer",
                      "ModifierLayers"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Missing Description",
          "type": "Debuff",
          "stackLimit": 10,
          "addStacksPerTrigger": {
            "operator": "Variables[0] (ModifierStackLayer) || RETURN",
            "displayLines": "ModifierStackLayer",
            "constants": [],
            "variables": [
              "ModifierStackLayer"
            ]
          }
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-621665594\">Monster_XP_Elite02_DebuffEnhance</a>",
          "execute": [
            {
              "eventTrigger": "Turn End [Anyone]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "DebuffLastCount",
                  "value": {
                    "operator": "Variables[0] (DebuffCurrentCount) || RETURN",
                    "displayLines": "DebuffCurrentCount",
                    "constants": [],
                    "variables": [
                      "DebuffCurrentCount"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable with Status Counter",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "DebuffCurrentCount"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "DebuffCurrentCount",
                    "compareType": "=",
                    "value2": {
                      "operator": "Variables[0] (DebuffLastCount) || RETURN",
                      "displayLines": "DebuffLastCount",
                      "constants": [],
                      "variables": [
                        "DebuffLastCount"
                      ]
                    }
                  },
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "DebuffCurrentCount",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"783092667\">Monster_XP_Elite02_DebuffEnhanceEffect</a>[<span class=\"descriptionNumberColor\">undefined</span>]"
                          },
                          "passed": [
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"783092667\">Monster_XP_Elite02_DebuffEnhanceEffect</a>[<span class=\"descriptionNumberColor\">undefined</span>]"
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"783092667\">Monster_XP_Elite02_DebuffEnhanceEffect</a>[<span class=\"descriptionNumberColor\">undefined</span>]"
                          },
                          "passed": [
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"783092667\">Monster_XP_Elite02_DebuffEnhanceEffect</a>[<span class=\"descriptionNumberColor\">undefined</span>]"
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"783092667\">Monster_XP_Elite02_DebuffEnhanceEffect</a>[<span class=\"descriptionNumberColor\">undefined</span>]",
                              "stackLimit": {
                                "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                                "displayLines": "{[PassiveSkill01[1]]}",
                                "constants": [],
                                "variables": [
                                  "{[PassiveSkill01[1]]}"
                                ]
                              },
                              "valuePerStack": {
                                "ModifierStackLayer": {
                                  "operator": "Variables[0] (DebuffCurrentCount) || RETURN",
                                  "displayLines": "DebuffCurrentCount",
                                  "constants": [],
                                  "variables": [
                                    "DebuffCurrentCount"
                                  ]
                                },
                                "MDF_DefenceAddedRatio_PerLayer": {
                                  "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                                  "displayLines": "{[PassiveSkill01[0]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[PassiveSkill01[0]]}"
                                  ]
                                },
                                "MDF_MaxLayer": {
                                  "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                                  "displayLines": "{[PassiveSkill01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[PassiveSkill01[1]]}"
                                  ]
                                }
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"783092667\">Monster_XP_Elite02_DebuffEnhanceEffect</a>[<span class=\"descriptionNumberColor\">undefined</span>]",
                              "stackLimit": {
                                "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                                "displayLines": "{[PassiveSkill01[1]]}",
                                "constants": [],
                                "variables": [
                                  "{[PassiveSkill01[1]]}"
                                ]
                              },
                              "valuePerStack": {
                                "ModifierStackLayer": {
                                  "operator": "Variables[0] (DebuffCurrentCount) || RETURN",
                                  "displayLines": "DebuffCurrentCount",
                                  "constants": [],
                                  "variables": [
                                    "DebuffCurrentCount"
                                  ]
                                },
                                "MDF_DefenceAddedRatio_PerLayer": {
                                  "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                                  "displayLines": "{[PassiveSkill01[0]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[PassiveSkill01[0]]}"
                                  ]
                                },
                                "MDF_MaxLayer": {
                                  "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                                  "displayLines": "{[PassiveSkill01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[PassiveSkill01[1]]}"
                                  ]
                                }
                              }
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
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "DebuffLastCount",
                  "value": {
                    "operator": "Variables[0] (DebuffCurrentCount) || RETURN",
                    "displayLines": "DebuffCurrentCount",
                    "constants": [],
                    "variables": [
                      "DebuffCurrentCount"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable with Status Counter",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "DebuffCurrentCount"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "DebuffCurrentCount",
                    "compareType": "=",
                    "value2": {
                      "operator": "Variables[0] (DebuffLastCount) || RETURN",
                      "displayLines": "DebuffLastCount",
                      "constants": [],
                      "variables": [
                        "DebuffLastCount"
                      ]
                    }
                  },
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "DebuffCurrentCount",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"783092667\">Monster_XP_Elite02_DebuffEnhanceEffect</a>[<span class=\"descriptionNumberColor\">undefined</span>]"
                          },
                          "passed": [
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"783092667\">Monster_XP_Elite02_DebuffEnhanceEffect</a>[<span class=\"descriptionNumberColor\">undefined</span>]"
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"783092667\">Monster_XP_Elite02_DebuffEnhanceEffect</a>[<span class=\"descriptionNumberColor\">undefined</span>]"
                          },
                          "passed": [
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"783092667\">Monster_XP_Elite02_DebuffEnhanceEffect</a>[<span class=\"descriptionNumberColor\">undefined</span>]"
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"783092667\">Monster_XP_Elite02_DebuffEnhanceEffect</a>[<span class=\"descriptionNumberColor\">undefined</span>]",
                              "stackLimit": {
                                "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                                "displayLines": "{[PassiveSkill01[1]]}",
                                "constants": [],
                                "variables": [
                                  "{[PassiveSkill01[1]]}"
                                ]
                              },
                              "valuePerStack": {
                                "ModifierStackLayer": {
                                  "operator": "Variables[0] (DebuffCurrentCount) || RETURN",
                                  "displayLines": "DebuffCurrentCount",
                                  "constants": [],
                                  "variables": [
                                    "DebuffCurrentCount"
                                  ]
                                },
                                "MDF_DefenceAddedRatio_PerLayer": {
                                  "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                                  "displayLines": "{[PassiveSkill01[0]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[PassiveSkill01[0]]}"
                                  ]
                                },
                                "MDF_MaxLayer": {
                                  "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                                  "displayLines": "{[PassiveSkill01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[PassiveSkill01[1]]}"
                                  ]
                                }
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"783092667\">Monster_XP_Elite02_DebuffEnhanceEffect</a>[<span class=\"descriptionNumberColor\">undefined</span>]",
                              "stackLimit": {
                                "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                                "displayLines": "{[PassiveSkill01[1]]}",
                                "constants": [],
                                "variables": [
                                  "{[PassiveSkill01[1]]}"
                                ]
                              },
                              "valuePerStack": {
                                "ModifierStackLayer": {
                                  "operator": "Variables[0] (DebuffCurrentCount) || RETURN",
                                  "displayLines": "DebuffCurrentCount",
                                  "constants": [],
                                  "variables": [
                                    "DebuffCurrentCount"
                                  ]
                                },
                                "MDF_DefenceAddedRatio_PerLayer": {
                                  "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                                  "displayLines": "{[PassiveSkill01[0]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[PassiveSkill01[0]]}"
                                  ]
                                },
                                "MDF_MaxLayer": {
                                  "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                                  "displayLines": "{[PassiveSkill01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[PassiveSkill01[1]]}"
                                  ]
                                }
                              }
                            }
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
          "for": "<a class=\"gModGreen\" id=\"mod__-619107649\">Monster_XP_Elite02_AIChange_02</a>",
          "execute": [
            {
              "eventTrigger": "HP Change [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": "<=",
                    "value2": 0.35
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "Monster_XP_Elite02_00_AIFlag_02",
                      "value": 1
                    },
                    "Modifier Deletes Itself"
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
          "for": "<a class=\"gModGreen\" id=\"mod__144051728\">Monster_XP_Elite02_AIChange</a>",
          "execute": [
            {
              "eventTrigger": "End Broken State [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "Monster_XP_Elite02_00_AIFlag",
                    "compareType": "<=",
                    "value2": 3,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "Monster_XP_Elite02_00_AIFlag",
                      "value": 1
                    }
                  ],
                  "failed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "Monster_XP_Elite02_00_AIFlag",
                      "value": 3
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
          "for": "<a class=\"gModGreen\" id=\"mod__624895081\">Monster_XP_Elite02_DestroyClear</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-634944090\">Monster_XP_Elite02_Edict01</a>[<span class=\"descriptionNumberColor\">Ban</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-651721709\">Monster_XP_Elite02_Edict02</a>[<span class=\"descriptionNumberColor\">Ban</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-668499328\">Monster_XP_Elite02_Edict03</a>[<span class=\"descriptionNumberColor\">Ban</span>]"
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-634944090\">Monster_XP_Elite02_Edict01</a>[<span class=\"descriptionNumberColor\">Ban</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-651721709\">Monster_XP_Elite02_Edict02</a>[<span class=\"descriptionNumberColor\">Ban</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-668499328\">Monster_XP_Elite02_Edict03</a>[<span class=\"descriptionNumberColor\">Ban</span>]"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1713212376\">Monster_XP_Elite02_EffectControl</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Put in Deathstate Limbo"
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "8003031_Modifiers": {
      "fileName": "8003031_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-2041430190\">Monster_XP_Elite02_Ability07_Mark</a>",
          "stackData": [],
          "latentQueue": [
            "Monster_XP_Elite02_00_Achievement"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__293273578\">Monster_XP_Elite02_AchievementControl</a>",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "Monster_XP_Elite02_00_Achievement",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "matchTags": true,
                      "relatedAchievements": [
                        {
                          "title": "Chad Norris",
                          "desc": "Defeat the Guardian Shadow without enraging it",
                          "rarity": "Low"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-498511746\">Monster_XP_Elite02_Confine</a>",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Disable Abilities",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "abilityTypes": [
                    "Ultimate"
                  ],
                  "text": "Ability cannot be used"
                },
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "advanceType": "Set",
                  "multiAdd": "MDF_ActionDelayRatio"
                },
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
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__906589272\">Monster_XP_Elite02_Edict_Failure</a>[<span class=\"descriptionNumberColor\">undefined</span>]",
          "stackType": "Replace",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "ModifierLayers",
                  "multiplier": 1
                },
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_XP_Elite02_AbilityP01_Part01",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "priorityTag": "MonsterInsertAttackSelf",
                  "showInActionOrder": true,
                  "abortFlags": [
                    "DisableAction",
                    "STAT_CTRL",
                    "Break"
                  ],
                  "allowAbilityTriggers": false
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_AggroAddedRatio",
                  "value": {
                    "operator": "Variables[0] (MDF_AggroAddedRatio_PerLayer) || Variables[1] (ModifierLayers) || MUL || RETURN",
                    "displayLines": "(MDF_AggroAddedRatio_PerLayer * ModifierLayers)",
                    "constants": [],
                    "variables": [
                      "MDF_AggroAddedRatio_PerLayer",
                      "ModifierLayers"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">Aggro%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_AggroAddedRatio) || RETURN",
                    "displayLines": "MDF_AggroAddedRatio",
                    "constants": [],
                    "variables": [
                      "MDF_AggroAddedRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Missing Description",
          "type": "Debuff",
          "duration": 1,
          "stackLimit": 5,
          "addStacksPerTrigger": {
            "operator": "Variables[0] (ModifierStackLayer) || RETURN",
            "displayLines": "ModifierStackLayer",
            "constants": [],
            "variables": [
              "ModifierStackLayer"
            ]
          }
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__762896637\">Monster_XP_Elite02_Edict_Success</a>[<span class=\"descriptionNumberColor\">undefined</span>]",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_AttackAddedRatio) || RETURN",
                    "displayLines": "MDF_AttackAddedRatio",
                    "constants": [],
                    "variables": [
                      "MDF_AttackAddedRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Missing Description",
          "type": "Buff",
          "duration": 2
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1954502860\">Monster_XP_Elite02_EdictInsert</a>[<span class=\"descriptionNumberColor\">Retribution Warning</span>]",
          "execute": [
            {
              "eventTrigger": "Turn End [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": 8003031,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "Guardian Shadow (Bug)"
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_XP_Elite02_AbilityP02_Part01",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "priorityTag": "MonsterInsertAttackSelf",
                      "showInActionOrder": true,
                      "abortFlags": [
                        "DisableAction",
                        "STAT_CTRL",
                        "Break"
                      ],
                      "allowAbilityTriggers": false
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2041430190\">Monster_XP_Elite02_Ability07_Mark</a>"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_XP_Elite02_AbilityP01_Part01",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "priorityTag": "MonsterInsertAttackSelf",
                      "showInActionOrder": true,
                      "abortFlags": [
                        "DisableAction",
                        "STAT_CTRL",
                        "Break"
                      ],
                      "allowAbilityTriggers": false
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "flagName": "DisableAction"
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "flagName": "STAT_CTRL"
                      }
                    ]
                  }
                },
                "Modifier Deletes Itself"
              ]
            }
          ],
          "description": "Character(s) will be punished accordingly at the end of the turn.",
          "type": "Other",
          "statusName": "Retribution Warning"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-668499328\">Monster_XP_Elite02_Edict03</a>[<span class=\"descriptionNumberColor\">Ban</span>]",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "Action Choice Window [Owner]"
            },
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Skill"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Enemy ID",
                        "ID": 8003031,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "characterName": "Guardian Shadow (Bug)"
                      },
                      "passed": [
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_XP_Elite02_AbilityP02_Part01",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "priorityTag": "MonsterInsertAttackSelf",
                          "showInActionOrder": true,
                          "abortFlags": [
                            "DisableAction",
                            "STAT_CTRL",
                            "Break"
                          ],
                          "allowAbilityTriggers": false
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-2041430190\">Monster_XP_Elite02_Ability07_Mark</a>"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_XP_Elite02_AbilityP01_Part01",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "priorityTag": "MonsterInsertAttackSelf",
                          "showInActionOrder": true,
                          "abortFlags": [
                            "DisableAction",
                            "STAT_CTRL",
                            "Break"
                          ],
                          "allowAbilityTriggers": false
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "flagName": "DisableAction"
                          },
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "flagName": "STAT_CTRL"
                          }
                        ]
                      }
                    },
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ultimate Prep-Phase [Owner]"
            },
            {
              "eventTrigger": "Extra Action/Turn [Owner]: Start "
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "Whoever uses Skills will be attacked 1 time.",
          "type": "Debuff",
          "effectName": "Skill Punishment",
          "statusName": "Ban",
          "duration": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-651721709\">Monster_XP_Elite02_Edict02</a>[<span class=\"descriptionNumberColor\">Ban</span>]",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "Action Choice Window [Owner]"
            },
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Basic ATK"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Enemy ID",
                        "ID": 8003031,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "characterName": "Guardian Shadow (Bug)"
                      },
                      "passed": [
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_XP_Elite02_AbilityP02_Part01",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "priorityTag": "MonsterInsertAttackSelf",
                          "showInActionOrder": true,
                          "abortFlags": [
                            "DisableAction",
                            "STAT_CTRL",
                            "Break"
                          ],
                          "allowAbilityTriggers": false
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-2041430190\">Monster_XP_Elite02_Ability07_Mark</a>"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_XP_Elite02_AbilityP01_Part01",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "priorityTag": "MonsterInsertAttackSelf",
                          "showInActionOrder": true,
                          "abortFlags": [
                            "DisableAction",
                            "STAT_CTRL",
                            "Break"
                          ],
                          "allowAbilityTriggers": false
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "flagName": "DisableAction"
                          },
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "flagName": "STAT_CTRL"
                          }
                        ]
                      }
                    },
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ultimate Prep-Phase [Owner]"
            },
            {
              "eventTrigger": "Extra Action/Turn [Owner]: Start "
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "Whoever uses Basic ATK will be attacked 1 time.",
          "type": "Debuff",
          "effectName": "Basic ATK Punishment",
          "statusName": "Ban",
          "duration": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-634944090\">Monster_XP_Elite02_Edict01</a>[<span class=\"descriptionNumberColor\">Ban</span>]",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "Action Choice Window [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"28427477\">Monster_XP_Elite02_Edict01_Self</a>"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Ultimate Prep-Phase [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"28427477\">Monster_XP_Elite02_Edict01_Self</a>"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Extra Action/Turn [Owner]: Start ",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"28427477\">Monster_XP_Elite02_Edict01_Self</a>"
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "Whoever attacks %CasterName will be attacked 1 time.",
          "type": "Debuff",
          "effectName": "ATK Punishment",
          "statusName": "Ban",
          "duration": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__28427477\">Monster_XP_Elite02_Edict01_Self</a>",
          "execute": [
            {
              "eventTrigger": "Being Attacked End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "NOT",
                        "condition": {
                          "name": "Has Param Flag",
                          "flagName": "IsFakeAvatarAttack"
                        }
                      },
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Currency Wars Full OffFieldList}}"
                        },
                        "mustBeAlive2": true,
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-634944090\">Monster_XP_Elite02_Edict01</a>[<span class=\"descriptionNumberColor\">Ban</span>]",
                        "casterFilter": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Enemy ID",
                            "ID": 8003031,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "characterName": "Guardian Shadow (Bug)"
                          },
                          "passed": [
                            {
                              "name": "Inject Ability Use",
                              "abilityName": "Monster_XP_Elite02_AbilityP02_Part01",
                              "abilitySource": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "priorityTag": "MonsterInsertAttackSelf",
                              "showInActionOrder": true,
                              "abortFlags": [
                                "DisableAction",
                                "STAT_CTRL",
                                "Break"
                              ],
                              "allowAbilityTriggers": false
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-2041430190\">Monster_XP_Elite02_Ability07_Mark</a>"
                            }
                          ],
                          "failed": [
                            {
                              "name": "Inject Ability Use",
                              "abilityName": "Monster_XP_Elite02_AbilityP01_Part01",
                              "abilitySource": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "abilityTarget": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "priorityTag": "MonsterInsertAttackSelf",
                              "showInActionOrder": true,
                              "abortFlags": [
                                "DisableAction",
                                "STAT_CTRL",
                                "Break"
                              ],
                              "allowAbilityTriggers": false
                            }
                          ]
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-634944090\">Monster_XP_Elite02_Edict01</a>[<span class=\"descriptionNumberColor\">Ban</span>]"
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "OR",
                            "conditionList": [
                              {
                                "name": "Has Flag",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                "flagName": "DisableAction"
                              },
                              {
                                "name": "Has Flag",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                "flagName": "STAT_CTRL"
                              }
                            ]
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Losing Modifier [Anyone]",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Monster_XP_Elite02_00_Edict01Num"
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-634944090\">Monster_XP_Elite02_Edict01</a>[<span class=\"descriptionNumberColor\">Ban</span>]",
                    "casterFilter": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  "ifTargetFound": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "Monster_XP_Elite02_00_Edict01Num",
                      "value": 1
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Monster_XP_Elite02_00_Edict01Num",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    "Modifier Deletes Itself"
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