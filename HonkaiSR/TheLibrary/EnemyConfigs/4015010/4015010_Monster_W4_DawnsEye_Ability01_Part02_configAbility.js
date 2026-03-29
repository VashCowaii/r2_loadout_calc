const configAbility = {
  "fileName": "4015010_Monster_W4_DawnsEye_Ability01_Part02",
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
        "modifier": "<a class=\"gModGreen\" id=\"-39064349\">Modifier_Monster_W4_DawnsEye_WheaterSunny</a>"
      },
      "passed": [
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "Sunny_Temperature",
          "value": {
            "operator": "Variables[0] ({[Skill01P1[2]]}) || RETURN",
            "displayLines": "{[Skill01P1[2]]}",
            "constants": [],
            "variables": [
              "{[Skill01P1[2]]}"
            ]
          },
          "max": 999
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"735847061\">Modifier_Monster_W4_DawnsEye_WheaterSunnyUIController</a>"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "DamageAddHeat",
          "value": {
            "operator": "Variables[0] (Sunny_Temperature) || Variables[1] ({[SkillP05[1]]}) || SUB || Constants[0] (10) || ADD || RETURN",
            "displayLines": "((Sunny_Temperature - {[SkillP05[1]]}) + 10)",
            "constants": [
              10
            ],
            "variables": [
              "Sunny_Temperature",
              "{[SkillP05[1]]}"
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "DamageAddHeat",
            "compareType": "<=",
            "value2": 10
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "DamageAddHeat",
              "value": 10
            }
          ]
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team All(Left to Right)}}"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-1526533181\">Enemy_W4_DawnsEye_Ability01_HitTag</a>",
        "invertCondition": true
      },
      "ifTargetFound": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] ({[Skill01P1[0]]}) || Variables[1] ({[Skill01P1[1]]}) || Variables[2] (DamageAddHeat) || MUL || ADD || RETURN",
              "displayLines": "({[Skill01P1[0]]} + ({[Skill01P1[1]]} * DamageAddHeat))",
              "constants": [],
              "variables": [
                "{[Skill01P1[0]]}",
                "{[Skill01P1[1]]}",
                "DamageAddHeat"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1526533181\">Enemy_W4_DawnsEye_Ability01_HitTag</a>"
        }
      ],
      "noTargetFound": [
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
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "operator": "Variables[0] ({[Skill01P1[0]]}) || Variables[1] ({[Skill01P1[1]]}) || Variables[2] (DamageAddHeat) || MUL || ADD || RETURN",
                  "displayLines": "({[Skill01P1[0]]} + ({[Skill01P1[1]]} * DamageAddHeat))",
                  "constants": [],
                  "variables": [
                    "{[Skill01P1[0]]}",
                    "{[Skill01P1[1]]}",
                    "DamageAddHeat"
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
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team All(Left to Right)}}"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-1526533181\">Enemy_W4_DawnsEye_Ability01_HitTag</a>",
        "invertCondition": true
      },
      "ifTargetFound": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] ({[Skill01P1[0]]}) || Variables[1] ({[Skill01P1[1]]}) || Variables[2] (DamageAddHeat) || MUL || ADD || RETURN",
              "displayLines": "({[Skill01P1[0]]} + ({[Skill01P1[1]]} * DamageAddHeat))",
              "constants": [],
              "variables": [
                "{[Skill01P1[0]]}",
                "{[Skill01P1[1]]}",
                "DamageAddHeat"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1526533181\">Enemy_W4_DawnsEye_Ability01_HitTag</a>"
        }
      ],
      "noTargetFound": [
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
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "operator": "Variables[0] ({[Skill01P1[0]]}) || Variables[1] ({[Skill01P1[1]]}) || Variables[2] (DamageAddHeat) || MUL || ADD || RETURN",
                  "displayLines": "({[Skill01P1[0]]} + ({[Skill01P1[1]]} * DamageAddHeat))",
                  "constants": [],
                  "variables": [
                    "{[Skill01P1[0]]}",
                    "{[Skill01P1[1]]}",
                    "DamageAddHeat"
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
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team All(Left to Right)}}"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-1526533181\">Enemy_W4_DawnsEye_Ability01_HitTag</a>",
        "invertCondition": true
      },
      "ifTargetFound": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] ({[Skill01P1[0]]}) || Variables[1] ({[Skill01P1[1]]}) || Variables[2] (DamageAddHeat) || MUL || ADD || RETURN",
              "displayLines": "({[Skill01P1[0]]} + ({[Skill01P1[1]]} * DamageAddHeat))",
              "constants": [],
              "variables": [
                "{[Skill01P1[0]]}",
                "{[Skill01P1[1]]}",
                "DamageAddHeat"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1526533181\">Enemy_W4_DawnsEye_Ability01_HitTag</a>"
        }
      ],
      "noTargetFound": [
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
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "operator": "Variables[0] ({[Skill01P1[0]]}) || Variables[1] ({[Skill01P1[1]]}) || Variables[2] (DamageAddHeat) || MUL || ADD || RETURN",
                  "displayLines": "({[Skill01P1[0]]} + ({[Skill01P1[1]]} * DamageAddHeat))",
                  "constants": [],
                  "variables": [
                    "{[Skill01P1[0]]}",
                    "{[Skill01P1[1]]}",
                    "DamageAddHeat"
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
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team All(Left to Right)}}"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-1526533181\">Enemy_W4_DawnsEye_Ability01_HitTag</a>",
        "invertCondition": true
      },
      "ifTargetFound": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] ({[Skill01P1[0]]}) || Variables[1] ({[Skill01P1[1]]}) || Variables[2] (DamageAddHeat) || MUL || ADD || RETURN",
              "displayLines": "({[Skill01P1[0]]} + ({[Skill01P1[1]]} * DamageAddHeat))",
              "constants": [],
              "variables": [
                "{[Skill01P1[0]]}",
                "{[Skill01P1[1]]}",
                "DamageAddHeat"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1526533181\">Enemy_W4_DawnsEye_Ability01_HitTag</a>"
        }
      ],
      "noTargetFound": [
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
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "operator": "Variables[0] ({[Skill01P1[0]]}) || Variables[1] ({[Skill01P1[1]]}) || Variables[2] (DamageAddHeat) || MUL || ADD || RETURN",
                  "displayLines": "({[Skill01P1[0]]} + ({[Skill01P1[1]]} * DamageAddHeat))",
                  "constants": [],
                  "variables": [
                    "{[Skill01P1[0]]}",
                    "{[Skill01P1[1]]}",
                    "DamageAddHeat"
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
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team All(Left to Right)}}"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-1526533181\">Enemy_W4_DawnsEye_Ability01_HitTag</a>",
        "invertCondition": true
      },
      "ifTargetFound": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] ({[Skill01P1[0]]}) || Variables[1] ({[Skill01P1[1]]}) || Variables[2] (DamageAddHeat) || MUL || ADD || RETURN",
              "displayLines": "({[Skill01P1[0]]} + ({[Skill01P1[1]]} * DamageAddHeat))",
              "constants": [],
              "variables": [
                "{[Skill01P1[0]]}",
                "{[Skill01P1[1]]}",
                "DamageAddHeat"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1526533181\">Enemy_W4_DawnsEye_Ability01_HitTag</a>"
        }
      ],
      "noTargetFound": [
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
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "operator": "Variables[0] ({[Skill01P1[0]]}) || Variables[1] ({[Skill01P1[1]]}) || Variables[2] (DamageAddHeat) || MUL || ADD || RETURN",
                  "displayLines": "({[Skill01P1[0]]} + ({[Skill01P1[1]]} * DamageAddHeat))",
                  "constants": [],
                  "variables": [
                    "{[Skill01P1[0]]}",
                    "{[Skill01P1[1]]}",
                    "DamageAddHeat"
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
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team All(Left to Right)}}"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-1526533181\">Enemy_W4_DawnsEye_Ability01_HitTag</a>",
        "invertCondition": true
      },
      "ifTargetFound": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] ({[Skill01P1[0]]}) || Variables[1] ({[Skill01P1[1]]}) || Variables[2] (DamageAddHeat) || MUL || ADD || RETURN",
              "displayLines": "({[Skill01P1[0]]} + ({[Skill01P1[1]]} * DamageAddHeat))",
              "constants": [],
              "variables": [
                "{[Skill01P1[0]]}",
                "{[Skill01P1[1]]}",
                "DamageAddHeat"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1526533181\">Enemy_W4_DawnsEye_Ability01_HitTag</a>"
        }
      ],
      "noTargetFound": [
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
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "operator": "Variables[0] ({[Skill01P1[0]]}) || Variables[1] ({[Skill01P1[1]]}) || Variables[2] (DamageAddHeat) || MUL || ADD || RETURN",
                  "displayLines": "({[Skill01P1[0]]} + ({[Skill01P1[1]]} * DamageAddHeat))",
                  "constants": [],
                  "variables": [
                    "{[Skill01P1[0]]}",
                    "{[Skill01P1[1]]}",
                    "DamageAddHeat"
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
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1526533181\">Enemy_W4_DawnsEye_Ability01_HitTag</a>"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All(with Unselectable)}}"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Enemy ID",
        "ID": {
          "operator": "Variables[0] (PartEntity3_MonsterID) || RETURN",
          "displayLines": "PartEntity3_MonsterID",
          "constants": [],
          "variables": [
            "PartEntity3_MonsterID"
          ]
        },
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "characterName": null
      },
      "ifTargetFound": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]"
        },
        {
          "name": "Remove Modifier Behavior Flag(s)",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "flagNames": []
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "flagName": "Break"
          },
          "passed": [
            {
              "name": "Reset Toughness",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            },
            {
              "name": "Exit Broken-State",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            }
          ]
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-117550687\">Enemy_W4_DawnsEye_Ability01_EnhanceMessage</a>",
      "execute": [
        {
          "eventTrigger": "Action End [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ]
    }
  ]
}