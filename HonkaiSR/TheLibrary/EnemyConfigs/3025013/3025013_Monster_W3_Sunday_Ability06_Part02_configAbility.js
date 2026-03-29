const configAbility = {
  "fileName": "3025013_Monster_W3_Sunday_Ability06_Part02",
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
      "scope": "ContextOwner",
      "variableName": "Skill06BgmStateDelaySeconds"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "ContextOwner",
      "variableName": "Skill06BgmGapSeconds"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"252376560\">Enemy_W3_Sunday_P2SongState</a>"
      },
      "passed": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextOwner",
          "variableName": "Skill06BgmGapSeconds",
          "value": 1
        }
      ],
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Active: Fast-Forward Animations"
          }
        }
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
        "name": "AND",
        "conditionList": [
          {
            "name": "Is Related Summoned Entity",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "target2": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            }
          },
          {
            "name": "OR",
            "conditionList": [
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "STAT_CTRL"
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "Break"
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "DisableAction"
              }
            ],
            "invertCondition": true
          }
        ]
      },
      "ifTargetFound": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "scope": "TargetEntity",
          "variableName": "Skill06BgmGapSeconds",
          "value": {
            "operator": "Variables[0] (Skill06BgmGapSeconds) || RETURN",
            "displayLines": "Skill06BgmGapSeconds",
            "constants": [],
            "variables": [
              "Skill06BgmGapSeconds"
            ]
          }
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "ability": "Monster_W3_SundayPart_Ability06_Part01",
          "isTrigger": true
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{All Team Members}}"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "conditions": {
        "name": "Is Part Of Team Location",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "team": "Enemy Team"
      },
      "ifTargetFound": [
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "STAT_CTRL"
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "Break"
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "DisableAction"
              }
            ],
            "invertCondition": true
          }
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{All Team Members}}"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Enemy Team",
            "location": "Left"
          },
          {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Enemy Team",
            "location": "Medium"
          },
          {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Enemy Team",
            "location": "Right",
            "invertCondition": true
          }
        ]
      },
      "ifTargetFound": [
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "STAT_CTRL"
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "Break"
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "DisableAction"
              }
            ],
            "invertCondition": true
          }
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{All Team Members}}"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Enemy Team",
            "location": "Left",
            "invertCondition": true
          },
          {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Enemy Team",
            "location": "Medium"
          },
          {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Enemy Team",
            "location": "Right"
          }
        ]
      },
      "ifTargetFound": [
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "STAT_CTRL"
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "Break"
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "DisableAction"
              }
            ],
            "invertCondition": true
          }
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{All Team Members}}"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "conditions": {
        "name": "Is Part Of Team Location",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "team": "Enemy Team",
        "location": "Max"
      },
      "ifTargetFound": [
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "STAT_CTRL"
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "Break"
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "DisableAction"
              }
            ],
            "invertCondition": true
          }
        }
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{All Team Members(Exclude Self)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-847238495\">Enemy_W3_Sunday_Ability042_Part_ChargeEffect</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{All Team Members(Exclude Self)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-103642110\">Enemy_W3_Sunday_Ability042_Part_ChargeEffect_Controller</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"54417858\">Enemy_W3_Sunday_Ability042_Charge</a>"
    },
    "Ability Start",
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] ({[Skill06[0]]}) || Constants[0] (0.15) || MUL || RETURN",
          "displayLines": "({[Skill06[0]]} * 0.15)",
          "constants": [
            0.15
          ],
          "variables": [
            "{[Skill06[0]]}"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "15%"
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
          "operator": "Variables[0] ({[Skill06[0]]}) || Constants[0] (0.15) || MUL || RETURN",
          "displayLines": "({[Skill06[0]]} * 0.15)",
          "constants": [
            0.15
          ],
          "variables": [
            "{[Skill06[0]]}"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "15%"
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
          "operator": "Variables[0] ({[Skill06[0]]}) || Constants[0] (0.15) || MUL || RETURN",
          "displayLines": "({[Skill06[0]]} * 0.15)",
          "constants": [
            0.15
          ],
          "variables": [
            "{[Skill06[0]]}"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "15%"
      }
    },
    {
      "name": "Define Custom Variable with Team Count",
      "target": {
        "name": "Target Name",
        "target": "{{All Team Members(Exclude Self)}}"
      },
      "variableName": "Skill05AssistNumber",
      "conditions": {
        "name": "OR",
        "conditionList": [
          {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "flagName": "STAT_CTRL"
          },
          {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "flagName": "Break"
          },
          {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "flagName": "DisableAction"
          }
        ],
        "invertCondition": true
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Skill05ErrorNumber",
      "value": {
        "operator": "Constants[0] (4) || Variables[0] (Skill05AssistNumber) || SUB || RETURN",
        "displayLines": "(4 - Skill05AssistNumber)",
        "constants": [
          4
        ],
        "variables": [
          "Skill05AssistNumber"
        ]
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
          "operator": "Variables[0] ({[Skill06[0]]}) || Constants[0] (0.15) || MUL || Variables[1] ({[Skill06[2]]}) || Variables[2] (Skill05AssistNumber) || MUL || Constants[1] (3) || DIV || ADD || RETURN",
          "displayLines": "(({[Skill06[0]]} * 0.15) + (({[Skill06[2]]} * Skill05AssistNumber) / 3))",
          "constants": [
            0.15,
            3
          ],
          "variables": [
            "{[Skill06[0]]}",
            "{[Skill06[2]]}",
            "Skill05AssistNumber"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "15%"
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
          "operator": "Variables[0] ({[Skill06[0]]}) || Constants[0] (0.15) || MUL || Variables[1] ({[Skill06[2]]}) || Variables[2] (Skill05AssistNumber) || MUL || Constants[1] (3) || DIV || ADD || RETURN",
          "displayLines": "(({[Skill06[0]]} * 0.15) + (({[Skill06[2]]} * Skill05AssistNumber) / 3))",
          "constants": [
            0.15,
            3
          ],
          "variables": [
            "{[Skill06[0]]}",
            "{[Skill06[2]]}",
            "Skill05AssistNumber"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "15%"
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
          "operator": "Variables[0] ({[Skill06[0]]}) || Constants[0] (0.25) || MUL || Variables[1] ({[Skill06[2]]}) || Variables[2] (Skill05AssistNumber) || MUL || Constants[1] (3) || DIV || ADD || RETURN",
          "displayLines": "(({[Skill06[0]]} * 0.25) + (({[Skill06[2]]} * Skill05AssistNumber) / 3))",
          "constants": [
            0.25,
            3
          ],
          "variables": [
            "{[Skill06[0]]}",
            "{[Skill06[2]]}",
            "Skill05AssistNumber"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "25%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1395877089\">Enemy_W3_Sunday_Ability042_Charge_Body</a>"
    },
    {
      "name": "Exit Broken-State",
      "target": {
        "name": "Target Name",
        "target": "{{All Team Members(Exclude Self)}}"
      }
    },
    {
      "name": "Reset Toughness",
      "target": {
        "name": "Target Name",
        "target": "{{All Team Members(Exclude Self)}}"
      }
    },
    {
      "name": "Remove Modifier Behavior Flag(s)",
      "target": {
        "name": "Target Name",
        "target": "{{All Team Members(Exclude Self)}}"
      },
      "flagNames": []
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{All Team Members(Exclude Self)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1169017547\">Enemy_W3_Sunday_Ability06_Assist</a>"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{All Team Members}}"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "conditions": {
        "name": "Is Part Of Team Location",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "team": "Enemy Team"
      }
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{All Team Members}}"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "conditions": {
        "name": "Is Part Of Team Location",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "team": "Enemy Team",
        "location": "Max"
      }
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{All Team Members}}"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Enemy Team",
            "location": "Left"
          },
          {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Enemy Team",
            "location": "Medium"
          },
          {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Enemy Team",
            "location": "Right",
            "invertCondition": true
          }
        ]
      }
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{All Team Members}}"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Enemy Team",
            "location": "Left",
            "invertCondition": true
          },
          {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Enemy Team",
            "location": "Medium"
          },
          {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Enemy Team",
            "location": "Right"
          }
        ]
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"252376560\">Enemy_W3_Sunday_P2SongState</a>"
      }
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1624906470\">Enemy_W3_Sunday_Instance_DisableAction</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-660746350\">Enemy_W3_Sunday_LightTeamLockHP</a>"
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}