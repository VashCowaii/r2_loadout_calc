const compositeAbilityObject = {
  "fullCharacterName": 8025011,
  "trimCharacterName": 8025011,
  "abilityList": [
    "8025011_Monster_SW_Minion01_01_IF_Ability02_Part02",
    "8025011_Monster_SW_Minion01_01_IF_Ability02_Part01",
    "8025011_Monster_SW_Minion01_02_IF_Ability01_Part02",
    "8025011_Monster_SW_Minion01_02_IF_Ability01_Part01",
    "8025011_Monster_SW_Minion01_02_IF_AbilityP02",
    "8025011_Monster_SW_Minion01_02_IF_AbilityP01",
    "8025011_Monster_SW_Minion01_01_IF_AbilityP02",
    "8025011_Monster_SW_Minion01_01_IF_AbilityP01",
    "8025011_Monster_SW_Minion01_IF_AbilityP01",
    "8025011_Monster_SW_Minion01_02_IF_PassiveAbility_Insert_Part01",
    "8025011_Monster_SW_Minion01_01_IF_PassiveAbility_Insert_Part01",
    "8025011_Monster_SW_Minion01_IF_PassiveAbility_Insert_Part01",
    "8025011_Monster_SW_Boss_01_IF_Ability07_Part02",
    "8025011_Monster_SW_Boss_01_IF_Ability07_Part01",
    "8025011_Monster_SW_Boss_01_IF_Ability06_Part02",
    "8025011_Monster_SW_Boss_01_IF_Ability06_Part01",
    "8025011_Monster_SW_Boss_01_IF_Ability05_Part02",
    "8025011_Monster_SW_Boss_01_IF_Ability05_Part01",
    "8025011_Monster_SW_Boss_01_IF_Ability04_Part02",
    "8025011_Monster_SW_Boss_01_IF_Ability04_Part01",
    "8025011_Monster_SW_Boss_01_IF_Ability03_Part02",
    "8025011_Monster_SW_Boss_01_IF_Ability03_Part01",
    "8025011_Monster_SW_Boss_01_IF_AbilityP01_Insert",
    "8025011_Monster_SW_Boss_01_IF_AbilityEX05",
    "8025011_Monster_SW_Boss_01_IF_AbilityEX04",
    "8025011_Monster_SW_Boss_01_IF_AbilityEX03",
    "8025011_Monster_SW_Boss_01_IF_AbilityEX02",
    "8025011_Monster_SW_Boss_01_IF_AbilityEX01",
    "8025011_Monster_SW_Boss_01_IF_AbilityP05_02",
    "8025011_Monster_SW_Boss_01_IF_PassiveAbility_Insert",
    "8025011_Monster_SW_Boss_01_IF_Passive01",
    "8025011_Monster_SW_Boss_01_IF_AbilityP02",
    "8025011_Monster_SW_Boss_01_IF_AbilityP01",
    "8025011_Monster_SW_Boss_01_PassiveAbilityMainBattle",
    "8025011_Monster_SW_Boss_01_PassiveAbility_Insert",
    "8025011_Monster_SW_Boss_01_AbilityP05_02",
    "8025011_Monster_SW_Boss_01_AbilityP05",
    "8025011_Monster_SW_Boss_01_Ability06_Part02",
    "8025011_Monster_SW_Boss_01_Ability06_Part01",
    "8025011_Monster_SW_Boss_01_Ability05_Part02",
    "8025011_Monster_SW_Boss_01_Ability05_Part01",
    "8025011_Monster_SW_Boss_01_Ability04_Part02",
    "8025011_Monster_SW_Boss_01_Ability04_Part01",
    "8025011_Monster_SW_Boss_01_Ability03_Part02",
    "8025011_Monster_SW_Boss_01_Ability03_Part01",
    "8025011_Monster_SW_Boss_01_Ability02_Part02",
    "8025011_Monster_SW_Boss_01_Ability02_Part01",
    "8025011_Monster_SW_Boss_01_Ability01_Part02",
    "8025011_Monster_SW_Boss_01_Ability01_Part01",
    "8025011_Monster_SW_Boss_01_Passive01",
    "8025011_Modifiers"
  ],
  "abilityObject": {
    "8025011_Monster_SW_Minion01_01_IF_Ability02_Part02": {
      "fileName": "8025011_Monster_SW_Minion01_01_IF_Ability02_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"526943540\">Enemy_SW_Minion01_01_IF_Deathrattle</a>"
        },
        "Ability Start",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"585935533\">Monster_SW_Minion01_01_Deathrattle</a>"
        },
        {
          "name": "Mark Entity For Immediate Death"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Wind",
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
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] (UnusedUnderThisBase_183) || RETURN",
              "displayLines": "UnusedUnderThisBase_183",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_183"
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1794338335\">Standard_CTRL_Crazy</a>[<span class=\"descriptionNumberColor\">Outrage</span>]",
          "duration": {
            "operator": "Variables[0] (UnusedUnderThisBase_182) || RETURN",
            "displayLines": "UnusedUnderThisBase_182",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_182"
            ]
          },
          "baseChance": 1
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1794338335\">Standard_CTRL_Crazy</a>[<span class=\"descriptionNumberColor\">Outrage</span>]",
          "duration": {
            "operator": "Variables[0] (UnusedUnderThisBase_182) || RETURN",
            "displayLines": "UnusedUnderThisBase_182",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_182"
            ]
          },
          "baseChance": 1
        },
        {
          "name": "Force Entity Death",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8025011_Monster_SW_Minion01_01_IF_Ability02_Part01": {
      "fileName": "8025011_Monster_SW_Minion01_01_IF_Ability02_Part01",
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
          "ability": "Monster_SW_Minion01_01_IF_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8025011_Monster_SW_Minion01_02_IF_Ability01_Part02": {
      "fileName": "8025011_Monster_SW_Minion01_02_IF_Ability01_Part02",
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
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill01[0]]}) || Constants[0] (0.5) || MUL || RETURN",
              "displayLines": "({[Skill01[0]]} * 0.5)",
              "constants": [
                0.5
              ],
              "variables": [
                "{[Skill01[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "50%"
          }
        },
        {
          "name": "Trigger Modifier Event",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "variableName": null,
          "eventType": "DOT_Entangle",
          "value": null
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill01[0]]}) || Constants[0] (0.5) || MUL || RETURN",
              "displayLines": "({[Skill01[0]]} * 0.5)",
              "constants": [
                0.5
              ],
              "variables": [
                "{[Skill01[0]]}"
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
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "flagName": "STAT_Entangle",
                "invertCondition": true
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1342778921\">Enemy_SW_Boss_01_IF_MinionsEnhancement_DisplayLV3</a>"
              }
            ]
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2065489118\">Standard_Entangle</a>[<span class=\"descriptionNumberColor\">Entanglement</span>]",
              "duration": 1,
              "baseChance": {
                "operator": "Variables[0] (UnusedUnderThisBase_181) || RETURN",
                "displayLines": "UnusedUnderThisBase_181",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_181"
                ]
              },
              "valuePerStack": {
                "MDF_ActionDelayRatio": {
                  "operator": "Variables[0] (UnusedUnderThisBase_180) || RETURN",
                  "displayLines": "UnusedUnderThisBase_180",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_180"
                  ]
                },
                "Modifier_Entangle_DamagePercentage": {
                  "operator": "Variables[0] (UnusedUnderThisBase_179) || RETURN",
                  "displayLines": "UnusedUnderThisBase_179",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_179"
                  ]
                },
                "Modifier_Entangle_DamageValue": 0
              }
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-670541105\">Monster_SW_Minion01_02_Ability01Target</a>"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8025011_Monster_SW_Minion01_02_IF_Ability01_Part01": {
      "fileName": "8025011_Monster_SW_Minion01_02_IF_Ability01_Part01",
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
          "ability": "Monster_SW_Minion01_02_IF_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "references": []
    },
    "8025011_Monster_SW_Minion01_02_IF_AbilityP02": {
      "fileName": "8025011_Monster_SW_Minion01_02_IF_AbilityP02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "8025011_Monster_SW_Minion01_02_IF_AbilityP01": {
      "fileName": "8025011_Monster_SW_Minion01_02_IF_AbilityP01",
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
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-938003569\">Enemy_SW_Minion01_02_IF_Deathrattle</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-646358836\">Enemy_SW_Minion01_02_IF_WingsControl</a>"
        }
      ],
      "references": []
    },
    "8025011_Monster_SW_Minion01_01_IF_AbilityP02": {
      "fileName": "8025011_Monster_SW_Minion01_01_IF_AbilityP02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "8025011_Monster_SW_Minion01_01_IF_AbilityP01": {
      "fileName": "8025011_Monster_SW_Minion01_01_IF_AbilityP01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1345320754\">Enemy_SW_Minion01_01_IF_AIChange</a>"
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
          "modifier": "<a class=\"gModGreen\" id=\"526943540\">Enemy_SW_Minion01_01_IF_Deathrattle</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-850002708\">Enemy_SW_Minion01_01_IF_Listener</a>"
        }
      ],
      "references": []
    },
    "8025011_Monster_SW_Minion01_IF_AbilityP01": {
      "fileName": "8025011_Monster_SW_Minion01_IF_AbilityP01",
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
          "modifier": "<a class=\"gModGreen\" id=\"1780753426\">Monster_SW_Minion01_Split</a>[<span class=\"descriptionNumberColor\">Mitosis: Warning</span>]"
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
          "modifier": "<a class=\"gModGreen\" id=\"-1150081091\">Enemy_SW_Minion01_IF_Deathrattle</a>"
        }
      ],
      "references": []
    },
    "8025011_Monster_SW_Minion01_02_IF_PassiveAbility_Insert_Part01": {
      "fileName": "8025011_Monster_SW_Minion01_02_IF_PassiveAbility_Insert_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "performAccFlag",
            "compareType": "=",
            "value2": 1
          },
          "failed": [
            {
              "name": "UI Display Event",
              "popUpText": "Decay Eulogy"
            },
            "Deleted bullshit"
          ]
        },
        {
          "name": "Exit Broken-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Animation Event",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "state": "PassiveSkill01",
          "passed": [
            {
              "name": "Animation Task",
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1014902925\">Enemy_SW_Boss_01_IF_Ability05_WeaknessProtect</a>"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{All Team Members(Exclude Self)}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "Damage": {
                      "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                      "displayLines": "{[PassiveSkill01[0]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill01[0]]}"
                      ]
                    },
                    "dmgFormula": "Max HP Scaling",
                    "Toughness": {
                      "operator": "Variables[0] ({[PassiveSkill01[5]]}) || RETURN",
                      "displayLines": "{[PassiveSkill01[5]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill01[5]]}"
                      ]
                    },
                    "ToughnessDMGType": {
                      "DamageType": "Quantum"
                    },
                    "Tags": null,
                    "attackType": "Basic ATK"
                  }
                },
                "Trigger: Attack End",
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members(Exclude Self)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-658511969\">Monster_SW_Boss_DamageTakenUp</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
                  "duration": {
                    "operator": "Variables[0] ({[PassiveSkill01[3]]}) || RETURN",
                    "displayLines": "{[PassiveSkill01[3]]}",
                    "constants": [],
                    "variables": [
                      "{[PassiveSkill01[3]]}"
                    ]
                  },
                  "stackLimit": {
                    "operator": "Variables[0] ({[PassiveSkill01[4]]}) || RETURN",
                    "displayLines": "{[PassiveSkill01[4]]}",
                    "constants": [],
                    "variables": [
                      "{[PassiveSkill01[4]]}"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_DamageTakenUpRatio_PerLayer": {
                      "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
                      "displayLines": "{[PassiveSkill01[2]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill01[2]]}"
                      ]
                    }
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                    "displayLines": "{[PassiveSkill01[1]]}",
                    "constants": [],
                    "variables": [
                      "{[PassiveSkill01[1]]}"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "performAccFlag",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Summoner}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"399740303\">Enemy_SW_Boss_01_IF_Ability05_Charge</a>"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1014902925\">Enemy_SW_Boss_01_IF_Ability05_WeaknessProtect</a>",
              "casterAssign": "TargetSelf"
            }
          ]
        },
        {
          "name": "Heal",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "healPercent": {
            "operator": "Variables[0] (UnusedUnderThisBase_188) || RETURN",
            "displayLines": "UnusedUnderThisBase_188",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_188"
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{All Team Members(Exclude Self)}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": ">=",
            "value2": 1,
            "conditions": {
              "name": "AND",
              "conditionList": [
                {
                  "name": "OR",
                  "conditionList": [
                    {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1150081091\">Enemy_SW_Minion01_IF_Deathrattle</a>"
                    },
                    {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"526943540\">Enemy_SW_Minion01_01_IF_Deathrattle</a>"
                    },
                    {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-938003569\">Enemy_SW_Minion01_02_IF_Deathrattle</a>"
                    }
                  ]
                },
                {
                  "name": "Compare: Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "value1": "CurrentHP%",
                  "compareType": "<=",
                  "value2": 0
                }
              ]
            }
          }
        }
      ],
      "references": []
    },
    "8025011_Monster_SW_Minion01_01_IF_PassiveAbility_Insert_Part01": {
      "fileName": "8025011_Monster_SW_Minion01_01_IF_PassiveAbility_Insert_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "performAccFlag",
            "compareType": "=",
            "value2": 1
          },
          "failed": [
            {
              "name": "UI Display Event",
              "popUpText": "Entomon Eulogy"
            },
            "Deleted bullshit"
          ]
        },
        {
          "name": "Exit Broken-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Animation Event",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "state": "PassiveSkill01",
          "passed": [
            {
              "name": "Animation Task",
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1014902925\">Enemy_SW_Boss_01_IF_Ability05_WeaknessProtect</a>"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{All Team Members(Exclude Self)}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Wind",
                    "Damage": {
                      "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                      "displayLines": "{[PassiveSkill01[0]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill01[0]]}"
                      ]
                    },
                    "dmgFormula": "Max HP Scaling",
                    "Toughness": {
                      "operator": "Variables[0] ({[PassiveSkill01[5]]}) || RETURN",
                      "displayLines": "{[PassiveSkill01[5]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill01[5]]}"
                      ]
                    },
                    "ToughnessDMGType": {
                      "DamageType": "Wind"
                    },
                    "Tags": null,
                    "attackType": "Basic ATK"
                  }
                },
                "Trigger: Attack End",
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members(Exclude Self)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-658511969\">Monster_SW_Boss_DamageTakenUp</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
                  "duration": {
                    "operator": "Variables[0] ({[PassiveSkill01[3]]}) || RETURN",
                    "displayLines": "{[PassiveSkill01[3]]}",
                    "constants": [],
                    "variables": [
                      "{[PassiveSkill01[3]]}"
                    ]
                  },
                  "stackLimit": {
                    "operator": "Variables[0] ({[PassiveSkill01[4]]}) || RETURN",
                    "displayLines": "{[PassiveSkill01[4]]}",
                    "constants": [],
                    "variables": [
                      "{[PassiveSkill01[4]]}"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_DamageTakenUpRatio_PerLayer": {
                      "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
                      "displayLines": "{[PassiveSkill01[2]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill01[2]]}"
                      ]
                    }
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                    "displayLines": "{[PassiveSkill01[1]]}",
                    "constants": [],
                    "variables": [
                      "{[PassiveSkill01[1]]}"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "performAccFlag",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Summoner}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"399740303\">Enemy_SW_Boss_01_IF_Ability05_Charge</a>"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1014902925\">Enemy_SW_Boss_01_IF_Ability05_WeaknessProtect</a>",
              "casterAssign": "TargetSelf"
            }
          ]
        },
        {
          "name": "Skill Points Modification",
          "adjustmentValue": {
            "operator": "Variables[0] (UnusedUnderThisBase_189) || RETURN",
            "displayLines": "UnusedUnderThisBase_189",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_189"
            ]
          },
          "adjustmentType": "+"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{All Team Members(Exclude Self)}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": ">=",
            "value2": 1,
            "conditions": {
              "name": "AND",
              "conditionList": [
                {
                  "name": "OR",
                  "conditionList": [
                    {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1150081091\">Enemy_SW_Minion01_IF_Deathrattle</a>"
                    },
                    {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"526943540\">Enemy_SW_Minion01_01_IF_Deathrattle</a>"
                    },
                    {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-938003569\">Enemy_SW_Minion01_02_IF_Deathrattle</a>"
                    }
                  ]
                },
                {
                  "name": "Compare: Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "value1": "CurrentHP%",
                  "compareType": "<=",
                  "value2": 0
                }
              ]
            }
          }
        }
      ],
      "references": []
    },
    "8025011_Monster_SW_Minion01_IF_PassiveAbility_Insert_Part01": {
      "fileName": "8025011_Monster_SW_Minion01_IF_PassiveAbility_Insert_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "performAccFlag",
            "compareType": "=",
            "value2": 1
          },
          "failed": [
            {
              "name": "UI Display Event",
              "popUpText": "Entomon Eulogy"
            },
            "Deleted bullshit"
          ]
        },
        {
          "name": "Exit Broken-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Animation Event",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "state": "PassiveSkill01",
          "passed": [
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
                    "DamageType": "Wind",
                    "Damage": {
                      "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                      "displayLines": "{[PassiveSkill01[0]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill01[0]]}"
                      ]
                    },
                    "dmgFormula": "Max HP Scaling",
                    "Toughness": {
                      "operator": "Variables[0] ({[PassiveSkill01[5]]}) || RETURN",
                      "displayLines": "{[PassiveSkill01[5]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill01[5]]}"
                      ]
                    },
                    "ToughnessDMGType": {
                      "DamageType": "Wind"
                    },
                    "Tags": null,
                    "attackType": "Basic ATK"
                  }
                },
                "Trigger: Attack End",
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members(Exclude Self)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-658511969\">Monster_SW_Boss_DamageTakenUp</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
                  "duration": {
                    "operator": "Variables[0] ({[PassiveSkill01[3]]}) || RETURN",
                    "displayLines": "{[PassiveSkill01[3]]}",
                    "constants": [],
                    "variables": [
                      "{[PassiveSkill01[3]]}"
                    ]
                  },
                  "stackLimit": {
                    "operator": "Variables[0] ({[PassiveSkill01[4]]}) || RETURN",
                    "displayLines": "{[PassiveSkill01[4]]}",
                    "constants": [],
                    "variables": [
                      "{[PassiveSkill01[4]]}"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_DamageTakenUpRatio_PerLayer": {
                      "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
                      "displayLines": "{[PassiveSkill01[2]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill01[2]]}"
                      ]
                    }
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                    "displayLines": "{[PassiveSkill01[1]]}",
                    "constants": [],
                    "variables": [
                      "{[PassiveSkill01[1]]}"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "performAccFlag",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "name": "Heal",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "healPercent": {
            "operator": "Variables[0] (UnusedUnderThisBase_188) || RETURN",
            "displayLines": "UnusedUnderThisBase_188",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_188"
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Enemy Team All}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": ">=",
            "value2": 1,
            "conditions": {
              "name": "AND",
              "conditionList": [
                {
                  "name": "OR",
                  "conditionList": [
                    {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1150081091\">Enemy_SW_Minion01_IF_Deathrattle</a>"
                    },
                    {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"526943540\">Enemy_SW_Minion01_01_IF_Deathrattle</a>"
                    },
                    {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-938003569\">Enemy_SW_Minion01_02_IF_Deathrattle</a>"
                    }
                  ]
                },
                {
                  "name": "Compare: Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "value1": "CurrentHP%",
                  "compareType": "<=",
                  "value2": 0
                }
              ]
            }
          }
        }
      ],
      "references": []
    },
    "8025011_Monster_SW_Boss_01_IF_Ability07_Part02": {
      "fileName": "8025011_Monster_SW_Boss_01_IF_Ability07_Part02",
      "abilityType": null,
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
            "modifier": "<a class=\"gModGreen\" id=\"-2022523841\">Enemy_SW_Boss_01_IF_SwarmArmor</a>[<span class=\"descriptionNumberColor\">Insect Egg</span>]"
          },
          "passed": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "variableName": "Skill07ArmorCount",
              "modifierName": "<a class=\"gModGreen\" id=\"-2022523841\">Enemy_SW_Boss_01_IF_SwarmArmor</a>[<span class=\"descriptionNumberColor\">Insect Egg</span>]",
              "multiplier": 1
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Skill07ArmorCount",
              "value": 0
            }
          ]
        },
        "Ability Start",
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Minions}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": "=",
            "value2": 0
          },
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster's Minions}}"
                },
                "value1": "TeamCharacterCount",
                "compareType": "=",
                "value2": 0,
                "conditions": {
                  "name": "OR",
                  "conditionList": [
                    {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-103304753\">Enemy_SW_Boss_01_IF_MinionsEnhancement</a>[<span class=\"descriptionNumberColor\">Growth Hormones</span>]",
                      "invertCondition": true
                    },
                    {
                      "name": "Compare: Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "value1": "<a class=\"gModGreen\" id=\"-103304753\">Enemy_SW_Boss_01_IF_MinionsEnhancement</a>[<span class=\"descriptionNumberColor\">Growth Hormones</span>]",
                      "compareType": "<",
                      "value2": 3,
                      "valueType": "Layer"
                    }
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "operator": "Variables[0] (Skill07ArmorCount) || RETURN",
            "displayLines": "Skill07ArmorCount",
            "constants": [],
            "variables": [
              "Skill07ArmorCount"
            ]
          },
          "Event": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Sting Bug: Lowest Enhancement Level}}"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-103304753\">Enemy_SW_Boss_01_IF_MinionsEnhancement</a>[<span class=\"descriptionNumberColor\">Growth Hormones</span>]",
                  "valuePerStack": {
                    "MDF_AttackAddedRatio": {
                      "operator": "Variables[0] ({[Skill07[0]]}) || RETURN",
                      "displayLines": "{[Skill07[0]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill07[0]]}"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-937628746\">Enemy_SW_Boss_01_IF_MinionsEnhancement_AddEffect</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2022523841\">Enemy_SW_Boss_01_IF_SwarmArmor</a>[<span class=\"descriptionNumberColor\">Insect Egg</span>]"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8025011_Monster_SW_Boss_01_IF_Ability07_Part01": {
      "fileName": "8025011_Monster_SW_Boss_01_IF_Ability07_Part01",
      "childAbilityList": [
        "8025011_Monster_SW_Boss_01_IF_Ability07_Part01",
        "8025011_Monster_SW_Boss_01_IF_Ability07_Part02",
        "8025011_Monster_SW_Boss_01_IF_Ability07_Camera"
      ],
      "skillTrigger": "Skill07",
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
          "ability": "Monster_SW_Boss_01_IF_Ability07_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8025011_Monster_SW_Boss_01_IF_Ability06_Part02": {
      "fileName": "8025011_Monster_SW_Boss_01_IF_Ability06_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "Skill06FinalDamage",
          "value": {
            "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
            "displayLines": "{[Skill06[0]]}",
            "constants": [],
            "variables": [
              "{[Skill06[0]]}"
            ]
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-850302516\">Monster_SW_Boss_01_DamageReduce</a>[<span class=\"descriptionNumberColor\">Multiply</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"399740303\">Enemy_SW_Boss_01_IF_Ability05_Charge</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2142572207\">Monster_SW_Boss_01_Ability05_Passive</a>"
        },
        "Ability Start",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1256327347\">Monster_SW_Boss_01_Ability07_Ball</a>"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (Skill06FinalDamage) || RETURN",
              "displayLines": "Skill06FinalDamage",
              "constants": [],
              "variables": [
                "Skill06FinalDamage"
              ]
            },
            "HitSplit": 0.1,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Looped Event",
          "maxLoops": 5,
          "Event": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] (Skill06FinalDamage) || RETURN",
                  "displayLines": "Skill06FinalDamage",
                  "constants": [],
                  "variables": [
                    "Skill06FinalDamage"
                  ]
                },
                "HitSplit": 0.05,
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "Looped Event",
          "maxLoops": 10,
          "Event": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] (Skill06FinalDamage) || RETURN",
                  "displayLines": "Skill06FinalDamage",
                  "constants": [],
                  "variables": [
                    "Skill06FinalDamage"
                  ]
                },
                "HitSplit": 0.065,
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
      "references": []
    },
    "8025011_Monster_SW_Boss_01_IF_Ability06_Part01": {
      "fileName": "8025011_Monster_SW_Boss_01_IF_Ability06_Part01",
      "childAbilityList": [
        "8025011_Monster_SW_Boss_01_Ability06_Camera",
        "8025011_Monster_SW_Boss_01_IF_Ability06_Part01",
        "8025011_Monster_SW_Boss_01_IF_Ability06_Part02"
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
          "ability": "Monster_SW_Boss_01_IF_Ability06_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8025011_Monster_SW_Boss_01_IF_Ability05_Part02": {
      "fileName": "8025011_Monster_SW_Boss_01_IF_Ability05_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"1256327347\">Monster_SW_Boss_01_Ability07_Ball</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1900288072\">Enemy_SW_Boss_01_IF_AbilityEX04</a>"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2022523841\">Enemy_SW_Boss_01_IF_SwarmArmor</a>[<span class=\"descriptionNumberColor\">Insect Egg</span>]",
              "counter": {
                "operator": "Variables[0] ({[SkillP02[3]]}) || Variables[1] ({[SkillEX04[1]]}) || ADD || RETURN",
                "displayLines": "({[SkillP02[3]]} + {[SkillEX04[1]]})",
                "constants": [],
                "variables": [
                  "{[SkillP02[3]]}",
                  "{[SkillEX04[1]]}"
                ]
              },
              "valuePerStack": {
                "MDF_DamageReduce": {
                  "operator": "Variables[0] ({[SkillP02[1]]}) || RETURN",
                  "displayLines": "{[SkillP02[1]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP02[1]]}"
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
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2022523841\">Enemy_SW_Boss_01_IF_SwarmArmor</a>[<span class=\"descriptionNumberColor\">Insect Egg</span>]",
              "counter": {
                "operator": "Variables[0] ({[SkillP02[3]]}) || RETURN",
                "displayLines": "{[SkillP02[3]]}",
                "constants": [],
                "variables": [
                  "{[SkillP02[3]]}"
                ]
              },
              "valuePerStack": {
                "MDF_DamageReduce": {
                  "operator": "Variables[0] ({[SkillP02[1]]}) || RETURN",
                  "displayLines": "{[SkillP02[1]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP02[1]]}"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"399740303\">Enemy_SW_Boss_01_IF_Ability05_Charge</a>"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8025011_Monster_SW_Boss_01_IF_Ability05_Part01": {
      "fileName": "8025011_Monster_SW_Boss_01_IF_Ability05_Part01",
      "childAbilityList": [
        "8025011_Monster_SW_Boss_01_Ability05_Camera",
        "8025011_Monster_SW_Boss_01_IF_Ability05_Part01",
        "8025011_Monster_SW_Boss_01_IF_Ability05_Part02",
        "8025011_Monster_SW_Boss_01_IF_AbilityP01_Insert",
        "8025011_Monster_SW_Boss_01_AbilityP05_Camera"
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
          "ability": "Monster_SW_Boss_01_IF_Ability05_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8025011_Monster_SW_Boss_01_IF_Ability04_Part02": {
      "fileName": "8025011_Monster_SW_Boss_01_IF_Ability04_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"-2022523841\">Enemy_SW_Boss_01_IF_SwarmArmor</a>[<span class=\"descriptionNumberColor\">Insect Egg</span>]",
          "counter": {
            "operator": "Variables[0] ({[SkillP02[2]]}) || RETURN",
            "displayLines": "{[SkillP02[2]]}",
            "constants": [],
            "variables": [
              "{[SkillP02[2]]}"
            ]
          },
          "valuePerStack": {
            "MDF_DamageReduce": {
              "operator": "Variables[0] ({[SkillP02[1]]}) || RETURN",
              "displayLines": "{[SkillP02[1]]}",
              "constants": [],
              "variables": [
                "{[SkillP02[1]]}"
              ]
            }
          }
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8025011_Monster_SW_Boss_01_IF_Ability04_Part01": {
      "fileName": "8025011_Monster_SW_Boss_01_IF_Ability04_Part01",
      "childAbilityList": [
        "8025011_Monster_SW_Boss_01_Ability04_Camera",
        "8025011_Monster_SW_Boss_01_IF_Ability04_Part01",
        "8025011_Monster_SW_Boss_01_IF_Ability04_Part02"
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
          "ability": "Monster_SW_Boss_01_IF_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8025011_Monster_SW_Boss_01_IF_Ability03_Part02": {
      "fileName": "8025011_Monster_SW_Boss_01_IF_Ability03_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"-850302516\">Monster_SW_Boss_01_DamageReduce</a>[<span class=\"descriptionNumberColor\">Multiply</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2142572207\">Monster_SW_Boss_01_Ability05_Passive</a>"
        },
        "Ability Start",
        {
          "name": "Looped Event",
          "maxLoops": 8,
          "Event": [
            {
              "name": "Random Event",
              "odds": [
                0.333,
                0.333,
                0.334
              ]
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
                  "displayLines": "{[Skill03[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill03[0]]}"
                  ]
                },
                "HitSplit": {
                  "operator": "Variables[0] ({[Skill03[0]]}) || Variables[1] ({[Skill03[1]]}) || SUB || Variables[0] ({[Skill03[0]]}) || DIV || Constants[0] (8) || DIV || RETURN",
                  "displayLines": "((({[Skill03[0]]} - {[Skill03[1]]}) / {[Skill03[0]]}) / 8)",
                  "constants": [
                    8
                  ],
                  "variables": [
                    "{[Skill03[0]]}",
                    "{[Skill03[1]]}"
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
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
              "displayLines": "{[Skill03[0]]}",
              "constants": [],
              "variables": [
                "{[Skill03[0]]}"
              ]
            },
            "HitSplit": {
              "operator": "Variables[0] ({[Skill03[1]]}) || Variables[1] ({[Skill03[0]]}) || DIV || Constants[0] (1) || DIV || RETURN",
              "displayLines": "(({[Skill03[1]]} / {[Skill03[0]]}) / 1)",
              "constants": [
                1
              ],
              "variables": [
                "{[Skill03[1]]}",
                "{[Skill03[0]]}"
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
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill03[1]]}) || Constants[0] (1) || DIV || RETURN",
              "displayLines": "({[Skill03[1]]} / 1)",
              "constants": [
                1
              ],
              "variables": [
                "{[Skill03[1]]}"
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
    "8025011_Monster_SW_Boss_01_IF_Ability03_Part01": {
      "fileName": "8025011_Monster_SW_Boss_01_IF_Ability03_Part01",
      "childAbilityList": [
        "8025011_Monster_SW_Boss_01_Ability03_Camera",
        "8025011_Monster_SW_Boss_01_IF_Ability03_Part01",
        "8025011_Monster_SW_Boss_01_IF_Ability03_Part02"
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
          "ability": "Monster_SW_Boss_01_IF_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8025011_Monster_SW_Boss_01_IF_AbilityP01_Insert": {
      "fileName": "8025011_Monster_SW_Boss_01_IF_AbilityP01_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1940595812\">RandomSummonDelay</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1730193233\">Enemy_SW_Boss_01_SummonMinion</a>",
              "valuePerStack": {
                "MDF_SummonID": {
                  "operator": "Variables[0] (SummonMonsterID01) || RETURN",
                  "displayLines": "SummonMonsterID01",
                  "constants": [],
                  "variables": [
                    "SummonMonsterID01"
                  ]
                },
                "MDF_SummonDelay": {
                  "operator": "Variables[0] (SummonDelayRatioPhase2) || RETURN",
                  "displayLines": "SummonDelayRatioPhase2",
                  "constants": [],
                  "variables": [
                    "SummonDelayRatioPhase2"
                  ]
                }
              }
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Phase2FirstSummon",
                "compareType": "=",
                "value2": 1,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Phase2FirstSummon",
                  "value": 0
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1730193233\">Enemy_SW_Boss_01_SummonMinion</a>",
                  "valuePerStack": {
                    "MDF_SummonID": {
                      "operator": "Variables[0] (SummonMonsterID02) || RETURN",
                      "displayLines": "SummonMonsterID02",
                      "constants": [],
                      "variables": [
                        "SummonMonsterID02"
                      ]
                    },
                    "MDF_SummonDelay": {
                      "operator": "Variables[0] (SummonDelayRatioPhase1) || RETURN",
                      "displayLines": "SummonDelayRatioPhase1",
                      "constants": [],
                      "variables": [
                        "SummonDelayRatioPhase1"
                      ]
                    }
                  }
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1940595812\">RandomSummonDelay</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1730193233\">Enemy_SW_Boss_01_SummonMinion</a>",
                  "valuePerStack": {
                    "MDF_SummonID": {
                      "operator": "Variables[0] (SummonMonsterID01) || RETURN",
                      "displayLines": "SummonMonsterID01",
                      "constants": [],
                      "variables": [
                        "SummonMonsterID01"
                      ]
                    },
                    "MDF_SummonDelay": {
                      "operator": "Variables[0] (SummonDelayRatioPhase2) || RETURN",
                      "displayLines": "SummonDelayRatioPhase2",
                      "constants": [],
                      "variables": [
                        "SummonDelayRatioPhase2"
                      ]
                    }
                  }
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Random Chance",
                    "chance": 0.5
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1730193233\">Enemy_SW_Boss_01_SummonMinion</a>",
                      "valuePerStack": {
                        "MDF_SummonID": {
                          "operator": "Variables[0] (SummonMonsterID02) || RETURN",
                          "displayLines": "SummonMonsterID02",
                          "constants": [],
                          "variables": [
                            "SummonMonsterID02"
                          ]
                        },
                        "MDF_SummonDelay": {
                          "operator": "Variables[0] (SummonDelayRatioPhase1) || RETURN",
                          "displayLines": "SummonDelayRatioPhase1",
                          "constants": [],
                          "variables": [
                            "SummonDelayRatioPhase1"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1940595812\">RandomSummonDelay</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1730193233\">Enemy_SW_Boss_01_SummonMinion</a>",
                      "valuePerStack": {
                        "MDF_SummonID": {
                          "operator": "Variables[0] (SummonMonsterID01) || RETURN",
                          "displayLines": "SummonMonsterID01",
                          "constants": [],
                          "variables": [
                            "SummonMonsterID01"
                          ]
                        },
                        "MDF_SummonDelay": {
                          "operator": "Variables[0] (SummonDelayRatioPhase2) || RETURN",
                          "displayLines": "SummonDelayRatioPhase2",
                          "constants": [],
                          "variables": [
                            "SummonDelayRatioPhase2"
                          ]
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1940595812\">RandomSummonDelay</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1730193233\">Enemy_SW_Boss_01_SummonMinion</a>",
                      "valuePerStack": {
                        "MDF_SummonID": {
                          "operator": "Variables[0] (SummonMonsterID01) || RETURN",
                          "displayLines": "SummonMonsterID01",
                          "constants": [],
                          "variables": [
                            "SummonMonsterID01"
                          ]
                        },
                        "MDF_SummonDelay": {
                          "operator": "Variables[0] (SummonDelayRatioPhase2) || RETURN",
                          "displayLines": "SummonDelayRatioPhase2",
                          "constants": [],
                          "variables": [
                            "SummonDelayRatioPhase2"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1940595812\">RandomSummonDelay</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1730193233\">Enemy_SW_Boss_01_SummonMinion</a>",
                      "valuePerStack": {
                        "MDF_SummonID": {
                          "operator": "Variables[0] (SummonMonsterID01) || RETURN",
                          "displayLines": "SummonMonsterID01",
                          "constants": [],
                          "variables": [
                            "SummonMonsterID01"
                          ]
                        },
                        "MDF_SummonDelay": {
                          "operator": "Variables[0] (SummonDelayRatioPhase2) || RETURN",
                          "displayLines": "SummonDelayRatioPhase2",
                          "constants": [],
                          "variables": [
                            "SummonDelayRatioPhase2"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
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
                  "target": "{{Enemy Team All}}"
                },
                "value1": "TeamCharacterCount",
                "compareType": "<=",
                "value2": 4
              },
              {
                "name": "Compare: Variable",
                "abilityOwnerType": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "abilityName": "Monster_SW_Boss_01_IF_AbilityP01_Insert",
                "value1": "QueuedActions",
                "compareType": ">=",
                "value2": 1
              }
            ]
          }
        }
      ],
      "functions": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1940595812\">RandomSummonDelay</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Random Chance",
                "chance": 0.4
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "SummonDelayRatio1",
                  "value": {
                    "operator": "Variables[0] (SummonDelayRatio1Random2) || RETURN",
                    "displayLines": "SummonDelayRatio1Random2",
                    "constants": [],
                    "variables": [
                      "SummonDelayRatio1Random2"
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Random Chance",
                    "chance": 0.5
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "SummonDelayRatio1",
                      "value": {
                        "operator": "Variables[0] (SummonDelayRatio1Random3) || RETURN",
                        "displayLines": "SummonDelayRatio1Random3",
                        "constants": [],
                        "variables": [
                          "SummonDelayRatio1Random3"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "SummonDelayRatio1",
                      "value": {
                        "operator": "Variables[0] (SummonDelayRatio1Random1) || RETURN",
                        "displayLines": "SummonDelayRatio1Random1",
                        "constants": [],
                        "variables": [
                          "SummonDelayRatio1Random1"
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "references": []
    },
    "8025011_Monster_SW_Boss_01_IF_AbilityEX05": {
      "fileName": "8025011_Monster_SW_Boss_01_IF_AbilityEX05",
      "skillTrigger": "SkillEX05",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [],
      "references": []
    },
    "8025011_Monster_SW_Boss_01_IF_AbilityEX04": {
      "fileName": "8025011_Monster_SW_Boss_01_IF_AbilityEX04",
      "skillTrigger": "SkillEX04",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HardLevel",
            "compareType": ">=",
            "value2": 4
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1900288072\">Enemy_SW_Boss_01_IF_AbilityEX04</a>"
            }
          ]
        }
      ],
      "references": []
    },
    "8025011_Monster_SW_Boss_01_IF_AbilityEX03": {
      "fileName": "8025011_Monster_SW_Boss_01_IF_AbilityEX03",
      "skillTrigger": "SkillEX03",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HardLevel",
            "compareType": ">=",
            "value2": 3
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2017731405\">Enemy_SW_Boss_01_IF_AbilityEX03</a>"
            }
          ]
        }
      ],
      "references": []
    },
    "8025011_Monster_SW_Boss_01_IF_AbilityEX02": {
      "fileName": "8025011_Monster_SW_Boss_01_IF_AbilityEX02",
      "skillTrigger": "SkillEX02",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HardLevel",
            "compareType": ">=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2000953786\">Enemy_SW_Boss_01_IF_AbilityEX02</a>"
            }
          ]
        }
      ],
      "references": []
    },
    "8025011_Monster_SW_Boss_01_IF_AbilityEX01": {
      "fileName": "8025011_Monster_SW_Boss_01_IF_AbilityEX01",
      "skillTrigger": "SkillEX01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HardLevel",
            "compareType": ">=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1984176167\">Enemy_SW_Boss_01_IF_AbilityEX01</a>"
            }
          ]
        }
      ],
      "references": []
    },
    "8025011_Monster_SW_Boss_01_IF_AbilityP05_02": {
      "fileName": "8025011_Monster_SW_Boss_01_IF_AbilityP05_02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "value1": "Target__Toughness",
            "compareType": "=",
            "value2": 0
          },
          "passed": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "ContextAbility",
              "variableName": "Ability_Count"
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "includeDyingTargets": true,
              "maxTargets": 5,
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team"
              },
              "ifTargetFound": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "Ability_Count",
                  "context": "ContextAbility",
                  "value": 1,
                  "max": 5
                }
              ]
            },
            "Deleted bullshit",
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-850302516\">Monster_SW_Boss_01_DamageReduce</a>[<span class=\"descriptionNumberColor\">Multiply</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"259450291\">Monster_SW_Boss_01_Ability05Charge</a>"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 1
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                  "displayLines": "{[Skill05[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill05[1]]}"
                  ]
                },
                "dmgFormula": "Max HP Scaling",
                "Toughness": null,
                "ToughnessDMGType": {
                  "DamageType": "Quantum"
                },
                "Tags": null,
                "attackType": "Additional DMG"
              }
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "ifTargetFound": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "MDF_CurrentStance",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "Break",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Deal Toughness DMG",
                      "value": {
                        "operator": "Variables[0] (MDF_CurrentStance) || RETURN",
                        "displayLines": "MDF_CurrentStance",
                        "constants": [],
                        "variables": [
                          "MDF_CurrentStance"
                        ]
                      },
                      "attacker": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "forceReduction": true,
                      "canDelay": true,
                      "ToughnessDMGType": "Quantum"
                    }
                  ]
                }
              ]
            },
            "Trigger: Attack End",
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-658511969\">Monster_SW_Boss_DamageTakenUp</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
              "duration": {
                "operator": "Variables[0] ({[Skill04[3]]}) || RETURN",
                "displayLines": "{[Skill04[3]]}",
                "constants": [],
                "variables": [
                  "{[Skill04[3]]}"
                ]
              },
              "stackLimit": {
                "operator": "Variables[0] ({[Skill04[4]]}) || RETURN",
                "displayLines": "{[Skill04[4]]}",
                "constants": [],
                "variables": [
                  "{[Skill04[4]]}"
                ]
              },
              "valuePerStack": {
                "MDF_DamageTakenUpRatio_PerLayer": {
                  "operator": "Variables[0] ({[Skill04[2]]}) || RETURN",
                  "displayLines": "{[Skill04[2]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill04[2]]}"
                  ]
                }
              },
              "addStacksPerTrigger": {
                "operator": "Variables[0] ({[Skill04[1]]}) || RETURN",
                "displayLines": "{[Skill04[1]]}",
                "constants": [],
                "variables": [
                  "{[Skill04[1]]}"
                ]
              }
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "BreakEndFlag",
              "value": 1
            }
          ]
        }
      ],
      "functions": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1940595812\">RandomSummonDelay</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Random Chance",
                "chance": 0.4
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "SummonDelayRatio1",
                  "value": {
                    "operator": "Variables[0] (SummonDelayRatio1Random2) || RETURN",
                    "displayLines": "SummonDelayRatio1Random2",
                    "constants": [],
                    "variables": [
                      "SummonDelayRatio1Random2"
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Random Chance",
                    "chance": 0.5
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "SummonDelayRatio1",
                      "value": {
                        "operator": "Variables[0] (SummonDelayRatio1Random3) || RETURN",
                        "displayLines": "SummonDelayRatio1Random3",
                        "constants": [],
                        "variables": [
                          "SummonDelayRatio1Random3"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "SummonDelayRatio1",
                      "value": {
                        "operator": "Variables[0] (SummonDelayRatio1Random1) || RETURN",
                        "displayLines": "SummonDelayRatio1Random1",
                        "constants": [],
                        "variables": [
                          "SummonDelayRatio1Random1"
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "references": []
    },
    "8025011_Monster_SW_Boss_01_IF_PassiveAbility_Insert": {
      "fileName": "8025011_Monster_SW_Boss_01_IF_PassiveAbility_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "silent": true
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "BreakEndFlag"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"259450291\">Monster_SW_Boss_01_Ability05Charge</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2142572207\">Monster_SW_Boss_01_Ability05_Passive</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-850302516\">Monster_SW_Boss_01_DamageReduce</a>[<span class=\"descriptionNumberColor\">Multiply</span>]"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-848257295\">Enemy_SW_Boss_01_PassiveAbilityMainBattle</a>"
          }
        },
        "Deleted bullshit",
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "multiBase": 0
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"542143301\">Monster_ChangePhase</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1916097971\">Monster_SW_Boss_Endurance</a>"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "InsertCheck",
          "value": 1
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-2022523841\">Enemy_SW_Boss_01_IF_SwarmArmor</a>[<span class=\"descriptionNumberColor\">Insect Egg</span>]"
          },
          "passed": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "AIFlag",
              "value": 1
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
              "variableName": "AIFlag",
              "value": 2
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1293250966\">Monster_SW_Boss_01_PartController</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-848257295\">Enemy_SW_Boss_01_PassiveAbilityMainBattle</a>"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"346528323\">Monster_SW_Boss_01_MainBattleLockHP</a>"
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__217357917\">Monster_SW_Boss_01_MainBattle_DisableAction</a>",
          "modifierFlags": [
            "DisableAction"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__346528323\">Monster_SW_Boss_01_MainBattleLockHP</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 0.01
                }
              ]
            },
            {
              "eventTrigger": "Locked HP Floor Reached [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"217357917\">Monster_SW_Boss_01_MainBattle_DisableAction</a>"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "BreakEndFlag",
            "InsertCheck",
            "AIFlag"
          ]
        }
      ]
    },
    "8025011_Monster_SW_Boss_01_IF_Passive01": {
      "fileName": "8025011_Monster_SW_Boss_01_IF_Passive01",
      "skillTrigger": "PassiveSkill02",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-794767767\">W2_SW_Boss_01_BattleScore1</a>"
        },
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
          "modifier": "<a class=\"gModGreen\" id=\"224752569\">Enemy_SW_Boss_01_IF_RemoveOneMore</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1095252278\">Monster_SW_Boss_01_WingsControl</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1783095716\">Monster_SW_Boss_01_MuteHitFly</a>"
        },
        {
          "name": "Boss Bar Display",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "display": true
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1923762583\">Enemy_SW_Boss_01_IF_PartController</a>"
        },
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
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1982402150\">Enemy_SW_Boss_01_ScoringDetect0101</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1095252278\">Monster_SW_Boss_01_WingsControl</a>",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "When Put in Deathstate Limbo"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Pre-Death [Owner]"
            },
            {
              "eventTrigger": "Ability Use [Owner]: Start"
            },
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Skill Name",
                        "skillName": "Skill05"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]"
            },
            {
              "eventTrigger": "End Broken State [Owner]"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1783095716\">Monster_SW_Boss_01_MuteHitFly</a>",
          "modifierFlags": [
            "MuteHitFly"
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "8025011_Monster_SW_Boss_01_IF_AbilityP02": {
      "fileName": "8025011_Monster_SW_Boss_01_IF_AbilityP02",
      "childAbilityList": [
        "8025011_Monster_SW_Boss_01_IF_AbilityP02"
      ],
      "skillTrigger": "SkillP02",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "8025011_Monster_SW_Boss_01_IF_AbilityP01": {
      "fileName": "8025011_Monster_SW_Boss_01_IF_AbilityP01",
      "childAbilityList": [
        "8025011_Monster_SW_Boss_01_IF_AbilityP01"
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
          "modifier": "<a class=\"gModGreen\" id=\"1310292986\">Enemy_SW_Boss_01_IF_AbilityP01_SummonController</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2090015456\">Enemy_SW_Boss_01_IF_HintToastController</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"654310441\">Enemy_SW_Boss_01_IF_StanceDamageController</a>",
          "valuePerStack": {
            "MDF_ExplodeDamageTakenRatio": {
              "operator": "Variables[0] ({[SkillP02[4]]}) || RETURN",
              "displayLines": "{[SkillP02[4]]}",
              "constants": [],
              "variables": [
                "{[SkillP02[4]]}"
              ]
            },
            "MDF_ExplodeStanceDamage": {
              "operator": "Variables[0] ({[SkillP02[5]]}) || RETURN",
              "displayLines": "{[SkillP02[5]]}",
              "constants": [],
              "variables": [
                "{[SkillP02[5]]}"
              ]
            }
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "SummonDelayRatio1Random1",
          "value": {
            "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
            "displayLines": "{[SkillP01[0]]}",
            "constants": [],
            "variables": [
              "{[SkillP01[0]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "SummonDelayRatio1Random2",
          "value": {
            "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
            "displayLines": "{[SkillP01[1]]}",
            "constants": [],
            "variables": [
              "{[SkillP01[1]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "SummonDelayRatio1Random3",
          "value": {
            "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
            "displayLines": "{[SkillP01[2]]}",
            "constants": [],
            "variables": [
              "{[SkillP01[2]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "SummonDelayRatio2",
          "value": {
            "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
            "displayLines": "{[SkillP01[3]]}",
            "constants": [],
            "variables": [
              "{[SkillP01[3]]}"
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
            "modifier": "<a class=\"gModGreen\" id=\"1984176167\">Enemy_SW_Boss_01_IF_AbilityEX01</a>"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1587187705\">Enemy_W2_Cocolia_IF_SuperArmorController</a>",
              "valuePerStack": {
                "MDF_IF_BOSS_BreakDelay": {
                  "operator": "Variables[0] ({[SkillEX01[2]]}) || RETURN",
                  "displayLines": "{[SkillEX01[2]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillEX01[2]]}"
                  ]
                },
                "MDF_IF_BOSS_WeaknessDMGUpRatio": {
                  "operator": "Variables[0] ({[SkillEX01[1]]}) || RETURN",
                  "displayLines": "{[SkillEX01[1]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillEX01[1]]}"
                  ]
                },
                "MDF_IF_BOSS_Standard_Defence": {
                  "operator": "Variables[0] ({[SkillEX01[0]]}) || RETURN",
                  "displayLines": "{[SkillEX01[0]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillEX01[0]]}"
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
              "modifier": "<a class=\"gModGreen\" id=\"-1246789467\">Enemy_W2_Cocolia_IF_SoftFrenzyController</a>",
              "valuePerStack": {
                "MDF_FrenzyStartDelay": {
                  "operator": "Variables[0] ({[SkillEX05[0]]}) || RETURN",
                  "displayLines": "{[SkillEX05[0]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillEX05[0]]}"
                  ]
                },
                "MDF_FrenzyIntervalDelay": {
                  "operator": "Variables[0] ({[SkillEX05[1]]}) || RETURN",
                  "displayLines": "{[SkillEX05[1]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillEX05[1]]}"
                  ]
                },
                "MDF_MaxFrenzyLayer": {
                  "operator": "Variables[0] ({[SkillEX05[2]]}) || RETURN",
                  "displayLines": "{[SkillEX05[2]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillEX05[2]]}"
                  ]
                },
                "MDF_TokenDMGAddRatioPerLayer": {
                  "operator": "Variables[0] ({[SkillEX05[3]]}) || RETURN",
                  "displayLines": "{[SkillEX05[3]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillEX05[3]]}"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"2017731405\">Enemy_SW_Boss_01_IF_AbilityEX03</a>"
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "SummonCount",
              "value": {
                "operator": "Variables[0] ({[SkillEX03[0]]}) || RETURN",
                "displayLines": "{[SkillEX03[0]]}",
                "constants": [],
                "variables": [
                  "{[SkillEX03[0]]}"
                ]
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1828577143\">Enemy_SW_Boss_01_IF_AbilityEX03_SummonEnhanceCounter</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1900288072\">Enemy_SW_Boss_01_IF_AbilityEX04</a>"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-77514845\">Enemy_SW_Boss_01_IF_SwarmArmorController</a>",
              "valuePerStack": {
                "MDF_Armor_DamageReduce": {
                  "operator": "Variables[0] ({[SkillP02[1]]}) || RETURN",
                  "displayLines": "{[SkillP02[1]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP02[1]]}"
                  ]
                },
                "MDF_Armor_CountNormal": {
                  "operator": "Variables[0] ({[SkillP02[0]]}) || Variables[1] ({[SkillEX04[0]]}) || ADD || RETURN",
                  "displayLines": "({[SkillP02[0]]} + {[SkillEX04[0]]})",
                  "constants": [],
                  "variables": [
                    "{[SkillP02[0]]}",
                    "{[SkillEX04[0]]}"
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
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-77514845\">Enemy_SW_Boss_01_IF_SwarmArmorController</a>",
              "valuePerStack": {
                "MDF_Armor_DamageReduce": {
                  "operator": "Variables[0] ({[SkillP02[1]]}) || RETURN",
                  "displayLines": "{[SkillP02[1]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP02[1]]}"
                  ]
                },
                "MDF_Armor_CountNormal": {
                  "operator": "Variables[0] ({[SkillP02[0]]}) || RETURN",
                  "displayLines": "{[SkillP02[0]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP02[0]]}"
                  ]
                }
              }
            }
          ]
        }
      ],
      "references": []
    },
    "8025011_Monster_SW_Boss_01_PassiveAbilityMainBattle": {
      "fileName": "8025011_Monster_SW_Boss_01_PassiveAbilityMainBattle",
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
          "modifier": "<a class=\"gModGreen\" id=\"-848257295\">Enemy_SW_Boss_01_PassiveAbilityMainBattle</a>"
        }
      ],
      "references": []
    },
    "8025011_Monster_SW_Boss_01_PassiveAbility_Insert": {
      "fileName": "8025011_Monster_SW_Boss_01_PassiveAbility_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "silent": true
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "BreakEndFlag"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"259450291\">Monster_SW_Boss_01_Ability05Charge</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2142572207\">Monster_SW_Boss_01_Ability05_Passive</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-850302516\">Monster_SW_Boss_01_DamageReduce</a>[<span class=\"descriptionNumberColor\">Multiply</span>]"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-848257295\">Enemy_SW_Boss_01_PassiveAbilityMainBattle</a>"
          }
        },
        "Deleted bullshit",
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "multiBase": 0
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"542143301\">Monster_ChangePhase</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1916097971\">Monster_SW_Boss_Endurance</a>"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "InsertCheck",
          "value": 1
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "AIFlag",
          "value": 1
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Phase2FirstTurn",
          "value": 1
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1293250966\">Monster_SW_Boss_01_PartController</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-848257295\">Enemy_SW_Boss_01_PassiveAbilityMainBattle</a>"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"346528323\">Monster_SW_Boss_01_MainBattleLockHP</a>"
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__217357917\">Monster_SW_Boss_01_MainBattle_DisableAction</a>",
          "modifierFlags": [
            "DisableAction"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__346528323\">Monster_SW_Boss_01_MainBattleLockHP</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 0.01
                }
              ]
            },
            {
              "eventTrigger": "Locked HP Floor Reached [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"217357917\">Monster_SW_Boss_01_MainBattle_DisableAction</a>"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "BreakEndFlag",
            "InsertCheck",
            "AIFlag",
            "Phase2FirstTurn"
          ]
        }
      ]
    },
    "8025011_Monster_SW_Boss_01_AbilityP05_02": {
      "fileName": "8025011_Monster_SW_Boss_01_AbilityP05_02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "value1": "Target__Toughness",
            "compareType": "=",
            "value2": 0
          },
          "passed": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "ContextAbility",
              "variableName": "Ability_Count"
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "includeDyingTargets": true,
              "maxTargets": 5,
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team"
              },
              "ifTargetFound": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "Ability_Count",
                  "context": "ContextAbility",
                  "value": 1,
                  "max": 5
                }
              ]
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
                    "value1": "Ability_Count",
                    "compareType": "<",
                    "value2": 5
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP",
                    "compareType": ">",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Phase2FirstTurn",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"-1940595812\">RandomSummonDelay</a>"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1730193233\">Enemy_SW_Boss_01_SummonMinion</a>",
                          "valuePerStack": {
                            "MDF_SummonID": {
                              "operator": "Variables[0] (SummonMonsterID01) || RETURN",
                              "displayLines": "SummonMonsterID01",
                              "constants": [],
                              "variables": [
                                "SummonMonsterID01"
                              ]
                            },
                            "MDF_SummonDelay": {
                              "operator": "Variables[0] (SummonDelayRatioPhase2) || RETURN",
                              "displayLines": "SummonDelayRatioPhase2",
                              "constants": [],
                              "variables": [
                                "SummonDelayRatioPhase2"
                              ]
                            }
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"-1940595812\">RandomSummonDelay</a>"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1730193233\">Enemy_SW_Boss_01_SummonMinion</a>",
                          "valuePerStack": {
                            "MDF_SummonID": {
                              "operator": "Variables[0] (SummonMonsterID01) || RETURN",
                              "displayLines": "SummonMonsterID01",
                              "constants": [],
                              "variables": [
                                "SummonMonsterID01"
                              ]
                            },
                            "MDF_SummonDelay": {
                              "operator": "Variables[0] (SummonDelayRatioPhase2) || RETURN",
                              "displayLines": "SummonDelayRatioPhase2",
                              "constants": [],
                              "variables": [
                                "SummonDelayRatioPhase2"
                              ]
                            }
                          }
                        },
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"-1940595812\">RandomSummonDelay</a>"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1730193233\">Enemy_SW_Boss_01_SummonMinion</a>",
                          "valuePerStack": {
                            "MDF_SummonID": {
                              "operator": "Variables[0] (SummonMonsterID01) || RETURN",
                              "displayLines": "SummonMonsterID01",
                              "constants": [],
                              "variables": [
                                "SummonMonsterID01"
                              ]
                            },
                            "MDF_SummonDelay": {
                              "operator": "Variables[0] (SummonDelayRatioPhase2) || RETURN",
                              "displayLines": "SummonDelayRatioPhase2",
                              "constants": [],
                              "variables": [
                                "SummonDelayRatioPhase2"
                              ]
                            }
                          }
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
                }
              ]
            },
            "Deleted bullshit",
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-850302516\">Monster_SW_Boss_01_DamageReduce</a>[<span class=\"descriptionNumberColor\">Multiply</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"259450291\">Monster_SW_Boss_01_Ability05Charge</a>"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "MaxStance",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
              "warningType": "MaxToughness"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 1
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                  "displayLines": "{[Skill05[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill05[1]]}"
                  ]
                },
                "dmgFormula": "Max HP Scaling",
                "Toughness": {
                  "operator": "Variables[0] (MaxStance) || RETURN",
                  "displayLines": "MaxStance",
                  "constants": [],
                  "variables": [
                    "MaxStance"
                  ]
                },
                "ToughnessDMGType": {},
                "Tags": null,
                "attackType": "Additional DMG"
              }
            },
            "Trigger: Attack End",
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-658511969\">Monster_SW_Boss_DamageTakenUp</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
              "duration": {
                "operator": "Variables[0] ({[Skill04[3]]}) || RETURN",
                "displayLines": "{[Skill04[3]]}",
                "constants": [],
                "variables": [
                  "{[Skill04[3]]}"
                ]
              },
              "stackLimit": {
                "operator": "Variables[0] ({[Skill04[4]]}) || RETURN",
                "displayLines": "{[Skill04[4]]}",
                "constants": [],
                "variables": [
                  "{[Skill04[4]]}"
                ]
              },
              "valuePerStack": {
                "MDF_DamageTakenUpRatio_PerLayer": {
                  "operator": "Variables[0] ({[Skill04[2]]}) || RETURN",
                  "displayLines": "{[Skill04[2]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill04[2]]}"
                  ]
                }
              },
              "addStacksPerTrigger": {
                "operator": "Variables[0] ({[Skill04[1]]}) || RETURN",
                "displayLines": "{[Skill04[1]]}",
                "constants": [],
                "variables": [
                  "{[Skill04[1]]}"
                ]
              }
            },
            {
              "name": "Action Advance/Delay",
              "target": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "advanceType": "Set",
              "multiAdd": "{[Skill04[5]]}"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "BreakEndFlag",
              "value": 1
            }
          ]
        }
      ],
      "functions": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1940595812\">RandomSummonDelay</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Random Chance",
                "chance": 0.4
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "SummonDelayRatio1",
                  "value": {
                    "operator": "Variables[0] (SummonDelayRatio1Random2) || RETURN",
                    "displayLines": "SummonDelayRatio1Random2",
                    "constants": [],
                    "variables": [
                      "SummonDelayRatio1Random2"
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Random Chance",
                    "chance": 0.5
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "SummonDelayRatio1",
                      "value": {
                        "operator": "Variables[0] (SummonDelayRatio1Random3) || RETURN",
                        "displayLines": "SummonDelayRatio1Random3",
                        "constants": [],
                        "variables": [
                          "SummonDelayRatio1Random3"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "SummonDelayRatio1",
                      "value": {
                        "operator": "Variables[0] (SummonDelayRatio1Random1) || RETURN",
                        "displayLines": "SummonDelayRatio1Random1",
                        "constants": [],
                        "variables": [
                          "SummonDelayRatio1Random1"
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "references": []
    },
    "8025011_Monster_SW_Boss_01_AbilityP05": {
      "fileName": "8025011_Monster_SW_Boss_01_AbilityP05",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Phase2FirstTurn",
            "compareType": "=",
            "value2": 1,
            "contextScope": "TargetEntity"
          },
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1940595812\">RandomSummonDelay</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1730193233\">Enemy_SW_Boss_01_SummonMinion</a>",
                  "valuePerStack": {
                    "MDF_SummonID": {
                      "operator": "Variables[0] (SummonMonsterID01) || RETURN",
                      "displayLines": "SummonMonsterID01",
                      "constants": [],
                      "variables": [
                        "SummonMonsterID01"
                      ]
                    },
                    "MDF_SummonDelay": {
                      "operator": "Variables[0] (SummonDelayRatioPhase2) || RETURN",
                      "displayLines": "SummonDelayRatioPhase2",
                      "constants": [],
                      "variables": [
                        "SummonDelayRatioPhase2"
                      ]
                    }
                  }
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Phase2FirstSummon",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Phase2FirstSummon",
                      "value": 0
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1730193233\">Enemy_SW_Boss_01_SummonMinion</a>",
                      "valuePerStack": {
                        "MDF_SummonID": {
                          "operator": "Variables[0] (SummonMonsterID02) || RETURN",
                          "displayLines": "SummonMonsterID02",
                          "constants": [],
                          "variables": [
                            "SummonMonsterID02"
                          ]
                        },
                        "MDF_SummonDelay": {
                          "operator": "Variables[0] (SummonDelayRatioPhase1) || RETURN",
                          "displayLines": "SummonDelayRatioPhase1",
                          "constants": [],
                          "variables": [
                            "SummonDelayRatioPhase1"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1940595812\">RandomSummonDelay</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1730193233\">Enemy_SW_Boss_01_SummonMinion</a>",
                      "valuePerStack": {
                        "MDF_SummonID": {
                          "operator": "Variables[0] (SummonMonsterID01) || RETURN",
                          "displayLines": "SummonMonsterID01",
                          "constants": [],
                          "variables": [
                            "SummonMonsterID01"
                          ]
                        },
                        "MDF_SummonDelay": {
                          "operator": "Variables[0] (SummonDelayRatioPhase2) || RETURN",
                          "displayLines": "SummonDelayRatioPhase2",
                          "constants": [],
                          "variables": [
                            "SummonDelayRatioPhase2"
                          ]
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Random Chance",
                        "chance": 0.5
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1730193233\">Enemy_SW_Boss_01_SummonMinion</a>",
                          "valuePerStack": {
                            "MDF_SummonID": {
                              "operator": "Variables[0] (SummonMonsterID02) || RETURN",
                              "displayLines": "SummonMonsterID02",
                              "constants": [],
                              "variables": [
                                "SummonMonsterID02"
                              ]
                            },
                            "MDF_SummonDelay": {
                              "operator": "Variables[0] (SummonDelayRatioPhase1) || RETURN",
                              "displayLines": "SummonDelayRatioPhase1",
                              "constants": [],
                              "variables": [
                                "SummonDelayRatioPhase1"
                              ]
                            }
                          }
                        },
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"-1940595812\">RandomSummonDelay</a>"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1730193233\">Enemy_SW_Boss_01_SummonMinion</a>",
                          "valuePerStack": {
                            "MDF_SummonID": {
                              "operator": "Variables[0] (SummonMonsterID01) || RETURN",
                              "displayLines": "SummonMonsterID01",
                              "constants": [],
                              "variables": [
                                "SummonMonsterID01"
                              ]
                            },
                            "MDF_SummonDelay": {
                              "operator": "Variables[0] (SummonDelayRatioPhase2) || RETURN",
                              "displayLines": "SummonDelayRatioPhase2",
                              "constants": [],
                              "variables": [
                                "SummonDelayRatioPhase2"
                              ]
                            }
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"-1940595812\">RandomSummonDelay</a>"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1730193233\">Enemy_SW_Boss_01_SummonMinion</a>",
                          "valuePerStack": {
                            "MDF_SummonID": {
                              "operator": "Variables[0] (SummonMonsterID01) || RETURN",
                              "displayLines": "SummonMonsterID01",
                              "constants": [],
                              "variables": [
                                "SummonMonsterID01"
                              ]
                            },
                            "MDF_SummonDelay": {
                              "operator": "Variables[0] (SummonDelayRatioPhase2) || RETURN",
                              "displayLines": "SummonDelayRatioPhase2",
                              "constants": [],
                              "variables": [
                                "SummonDelayRatioPhase2"
                              ]
                            }
                          }
                        },
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"-1940595812\">RandomSummonDelay</a>"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1730193233\">Enemy_SW_Boss_01_SummonMinion</a>",
                          "valuePerStack": {
                            "MDF_SummonID": {
                              "operator": "Variables[0] (SummonMonsterID01) || RETURN",
                              "displayLines": "SummonMonsterID01",
                              "constants": [],
                              "variables": [
                                "SummonMonsterID01"
                              ]
                            },
                            "MDF_SummonDelay": {
                              "operator": "Variables[0] (SummonDelayRatioPhase2) || RETURN",
                              "displayLines": "SummonDelayRatioPhase2",
                              "constants": [],
                              "variables": [
                                "SummonDelayRatioPhase2"
                              ]
                            }
                          }
                        }
                      ]
                    }
                  ]
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
        }
      ],
      "functions": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1940595812\">RandomSummonDelay</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Random Chance",
                "chance": 0.4
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "SummonDelayRatio1",
                  "value": {
                    "operator": "Variables[0] (SummonDelayRatio1Random2) || RETURN",
                    "displayLines": "SummonDelayRatio1Random2",
                    "constants": [],
                    "variables": [
                      "SummonDelayRatio1Random2"
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Random Chance",
                    "chance": 0.5
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "SummonDelayRatio1",
                      "value": {
                        "operator": "Variables[0] (SummonDelayRatio1Random3) || RETURN",
                        "displayLines": "SummonDelayRatio1Random3",
                        "constants": [],
                        "variables": [
                          "SummonDelayRatio1Random3"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "SummonDelayRatio1",
                      "value": {
                        "operator": "Variables[0] (SummonDelayRatio1Random1) || RETURN",
                        "displayLines": "SummonDelayRatio1Random1",
                        "constants": [],
                        "variables": [
                          "SummonDelayRatio1Random1"
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "references": []
    },
    "8025011_Monster_SW_Boss_01_Ability06_Part02": {
      "fileName": "8025011_Monster_SW_Boss_01_Ability06_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"259450291\">Monster_SW_Boss_01_Ability05Charge</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-850302516\">Monster_SW_Boss_01_DamageReduce</a>[<span class=\"descriptionNumberColor\">Multiply</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2142572207\">Monster_SW_Boss_01_Ability05_Passive</a>"
        },
        "Ability Start",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1256327347\">Monster_SW_Boss_01_Ability07_Ball</a>"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
              "displayLines": "{[Skill06[0]]}",
              "constants": [],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "HitSplit": 0.1,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Looped Event",
          "maxLoops": 5,
          "Event": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
                  "displayLines": "{[Skill06[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill06[0]]}"
                  ]
                },
                "HitSplit": 0.05,
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "Looped Event",
          "maxLoops": 10,
          "Event": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
                  "displayLines": "{[Skill06[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill06[0]]}"
                  ]
                },
                "HitSplit": 0.065,
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
      "references": []
    },
    "8025011_Monster_SW_Boss_01_Ability06_Part01": {
      "fileName": "8025011_Monster_SW_Boss_01_Ability06_Part01",
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
          "ability": "Monster_SW_Boss_01_Ability06_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8025011_Monster_SW_Boss_01_Ability05_Part02": {
      "fileName": "8025011_Monster_SW_Boss_01_Ability05_Part02",
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
          "variableName": "Phase2FirstTurn"
        },
        "Ability Start",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1256327347\">Monster_SW_Boss_01_Ability07_Ball</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"259450291\">Monster_SW_Boss_01_Ability05Charge</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2142572207\">Monster_SW_Boss_01_Ability05_Passive</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-850302516\">Monster_SW_Boss_01_DamageReduce</a>[<span class=\"descriptionNumberColor\">Multiply</span>]",
          "valuePerStack": {
            "MDF_DamageReduceRatio": {
              "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
              "displayLines": "{[Skill04[0]]}",
              "constants": [],
              "variables": [
                "{[Skill04[0]]}"
              ]
            }
          }
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8025011_Monster_SW_Boss_01_Ability05_Part01": {
      "fileName": "8025011_Monster_SW_Boss_01_Ability05_Part01",
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
          "ability": "Monster_SW_Boss_01_Ability05_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8025011_Monster_SW_Boss_01_Ability04_Part02": {
      "fileName": "8025011_Monster_SW_Boss_01_Ability04_Part02",
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
          "variableName": "Phase2FirstTurn"
        },
        "Ability Start",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-850302516\">Monster_SW_Boss_01_DamageReduce</a>[<span class=\"descriptionNumberColor\">Multiply</span>]",
          "valuePerStack": {
            "MDF_DamageReduceRatio": {
              "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
              "displayLines": "{[Skill04[0]]}",
              "constants": [],
              "variables": [
                "{[Skill04[0]]}"
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
          "modifier": "<a class=\"gModGreen\" id=\"259450291\">Monster_SW_Boss_01_Ability05Charge</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2142572207\">Monster_SW_Boss_01_Ability05_Passive</a>"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8025011_Monster_SW_Boss_01_Ability04_Part01": {
      "fileName": "8025011_Monster_SW_Boss_01_Ability04_Part01",
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
          "ability": "Monster_SW_Boss_01_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8025011_Monster_SW_Boss_01_Ability03_Part02": {
      "fileName": "8025011_Monster_SW_Boss_01_Ability03_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"259450291\">Monster_SW_Boss_01_Ability05Charge</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-850302516\">Monster_SW_Boss_01_DamageReduce</a>[<span class=\"descriptionNumberColor\">Multiply</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2142572207\">Monster_SW_Boss_01_Ability05_Passive</a>"
        },
        "Ability Start",
        {
          "name": "Looped Event",
          "maxLoops": 8,
          "Event": [
            {
              "name": "Random Event",
              "odds": [
                0.333,
                0.333,
                0.334
              ]
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
                  "displayLines": "{[Skill03[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill03[0]]}"
                  ]
                },
                "HitSplit": {
                  "operator": "Variables[0] ({[Skill03[0]]}) || Variables[1] ({[Skill03[1]]}) || SUB || Variables[0] ({[Skill03[0]]}) || DIV || Constants[0] (8) || DIV || RETURN",
                  "displayLines": "((({[Skill03[0]]} - {[Skill03[1]]}) / {[Skill03[0]]}) / 8)",
                  "constants": [
                    8
                  ],
                  "variables": [
                    "{[Skill03[0]]}",
                    "{[Skill03[1]]}"
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
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
              "displayLines": "{[Skill03[0]]}",
              "constants": [],
              "variables": [
                "{[Skill03[0]]}"
              ]
            },
            "HitSplit": {
              "operator": "Variables[0] ({[Skill03[1]]}) || Variables[1] ({[Skill03[0]]}) || DIV || Constants[0] (1) || DIV || RETURN",
              "displayLines": "(({[Skill03[1]]} / {[Skill03[0]]}) / 1)",
              "constants": [
                1
              ],
              "variables": [
                "{[Skill03[1]]}",
                "{[Skill03[0]]}"
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
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill03[1]]}) || Constants[0] (1) || DIV || RETURN",
              "displayLines": "({[Skill03[1]]} / 1)",
              "constants": [
                1
              ],
              "variables": [
                "{[Skill03[1]]}"
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
    "8025011_Monster_SW_Boss_01_Ability03_Part01": {
      "fileName": "8025011_Monster_SW_Boss_01_Ability03_Part01",
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
          "ability": "Monster_SW_Boss_01_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8025011_Monster_SW_Boss_01_Ability02_Part02": {
      "fileName": "8025011_Monster_SW_Boss_01_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Define Custom Variable",
          "scope": "ContextAbility",
          "variableName": "AbilityFlag",
          "value": 0
        },
        {
          "name": "Looped Event",
          "maxLoops": 7,
          "Event": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                  "displayLines": "{[Skill02[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill02[0]]}"
                  ]
                },
                "HitSplit": 0.05,
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "Looped Event",
          "maxLoops": 1,
          "Event": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                  "displayLines": "{[Skill02[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill02[0]]}"
                  ]
                },
                "HitSplit": 0.05,
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
              "displayLines": "{[Skill02[0]]}",
              "constants": [],
              "variables": [
                "{[Skill02[0]]}"
              ]
            },
            "HitSplit": 0.6,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2065489118\">Standard_Entangle</a>[<span class=\"descriptionNumberColor\">Entanglement</span>]",
          "duration": 1,
          "baseChance": {
            "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
            "displayLines": "{[Skill02[3]]}",
            "constants": [],
            "variables": [
              "{[Skill02[3]]}"
            ]
          },
          "valuePerStack": {
            "MDF_ActionDelayRatio": {
              "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
              "displayLines": "{[Skill02[1]]}",
              "constants": [],
              "variables": [
                "{[Skill02[1]]}"
              ]
            },
            "Modifier_Entangle_DamagePercentage": {
              "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
              "displayLines": "{[Skill02[2]]}",
              "constants": [],
              "variables": [
                "{[Skill02[2]]}"
              ]
            },
            "Modifier_Entangle_DamageValue": 0
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1730193233\">Enemy_SW_Boss_01_SummonMinion</a>",
          "valuePerStack": {
            "MDF_SummonID": {
              "operator": "Variables[0] (SummonMonsterID01) || RETURN",
              "displayLines": "SummonMonsterID01",
              "constants": [],
              "variables": [
                "SummonMonsterID01"
              ]
            },
            "MDF_SummonDelay": {
              "operator": "Variables[0] ({[Skill02[4]]}) || RETURN",
              "displayLines": "{[Skill02[4]]}",
              "constants": [],
              "variables": [
                "{[Skill02[4]]}"
              ]
            }
          }
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8025011_Monster_SW_Boss_01_Ability02_Part01": {
      "fileName": "8025011_Monster_SW_Boss_01_Ability02_Part01",
      "childAbilityList": [
        "8025011_Monster_SW_Boss_01_Ability02_Camera",
        "8025011_Monster_SW_Boss_01_Ability02_Part01",
        "8025011_Monster_SW_Boss_01_Ability02_Part02"
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
          "ability": "Monster_SW_Boss_01_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8025011_Monster_SW_Boss_01_Ability01_Part02": {
      "fileName": "8025011_Monster_SW_Boss_01_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Quantum",
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
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8025011_Monster_SW_Boss_01_Ability01_Part01": {
      "fileName": "8025011_Monster_SW_Boss_01_Ability01_Part01",
      "childAbilityList": [
        "8025011_Monster_SW_Boss_01_Ability01_Camera",
        "8025011_Monster_SW_Boss_01_Ability01_Part01",
        "8025011_Monster_SW_Boss_01_Ability01_Part02"
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
          "ability": "Monster_SW_Boss_01_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8025011_Monster_SW_Boss_01_Passive01": {
      "fileName": "8025011_Monster_SW_Boss_01_Passive01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-794767767\">W2_SW_Boss_01_BattleScore1</a>"
        },
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
          "modifier": "<a class=\"gModGreen\" id=\"-1551418319\">Monster_SW_Boss_01_AIChange</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1095252278\">Monster_SW_Boss_01_WingsControl</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1783095716\">Monster_SW_Boss_01_MuteHitFly</a>"
        },
        {
          "name": "Boss Bar Display",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "display": true
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1293250966\">Monster_SW_Boss_01_PartController</a>"
        },
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
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1982402150\">Enemy_SW_Boss_01_ScoringDetect0101</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1095252278\">Monster_SW_Boss_01_WingsControl</a>",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "When Put in Deathstate Limbo"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Pre-Death [Owner]"
            },
            {
              "eventTrigger": "Ability Use [Owner]: Start"
            },
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Skill Name",
                        "skillName": "Skill05"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]"
            },
            {
              "eventTrigger": "End Broken State [Owner]"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1551418319\">Monster_SW_Boss_01_AIChange</a>",
          "execute": [
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 1
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1783095716\">Monster_SW_Boss_01_MuteHitFly</a>",
          "modifierFlags": [
            "MuteHitFly"
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "8025011_Modifiers": {
      "fileName": "8025011_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1014902925\">Enemy_SW_Boss_01_IF_Ability05_WeaknessProtect</a>",
          "modifierFlags": [
            "MuteBreak"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "action": "Protected",
                  "valueList": [
                    "Physical",
                    "Fire",
                    "Ice",
                    "Thunder",
                    "Wind",
                    "Quantum",
                    "Imaginary"
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "performAccFlag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__399740303\">Enemy_SW_Boss_01_IF_Ability05_Charge</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1014902925\">Enemy_SW_Boss_01_IF_Ability05_WeaknessProtect</a>"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1014902925\">Enemy_SW_Boss_01_IF_Ability05_WeaknessProtect</a>"
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1828577143\">Enemy_SW_Boss_01_IF_AbilityEX03_SummonEnhanceCounter</a>",
          "execute": [
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
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "CurrentSummonCount",
                        "compareType": "=",
                        "value2": {
                          "operator": "Variables[0] (SummonCount) || RETURN",
                          "displayLines": "SummonCount",
                          "constants": [],
                          "variables": [
                            "SummonCount"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-103304753\">Enemy_SW_Boss_01_IF_MinionsEnhancement</a>[<span class=\"descriptionNumberColor\">Growth Hormones</span>]",
                          "valuePerStack": {
                            "MDF_AttackAddedRatio": {
                              "operator": "Variables[0] ({[Skill07[0]]}) || RETURN",
                              "displayLines": "{[Skill07[0]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill07[0]]}"
                              ]
                            }
                          }
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "CurrentSummonCount",
                          "value": 0
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "CurrentSummonCount",
                          "context": "TargetEntity",
                          "value": 1,
                          "max": {
                            "operator": "Variables[0] (SummonCount) || RETURN",
                            "displayLines": "SummonCount",
                            "constants": [],
                            "variables": [
                              "SummonCount"
                            ]
                          }
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
            "SummonDelayRatio2"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1923762583\">Enemy_SW_Boss_01_IF_PartController</a>",
          "execute": [
            {
              "eventTrigger": "Waiting for Healing in Limbo",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "InsertCheck",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        {
                          "name": "Dispel Debuffs",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "silent": true
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1916097971\">Monster_SW_Boss_Endurance</a>"
                        },
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "InsertCheck"
                        },
                        {
                          "name": "Set Enemy Phase",
                          "mode": "Inc"
                        },
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_SW_Boss_01_IF_PassiveAbility_Insert",
                          "priorityTag": "MonsterChangePhase",
                          "ownerState": "Mask_AliveOrLimbo",
                          "targetState": "Mask_AliveOrLimbo",
                          "canHitNonTargets": true,
                          "allowAbilityTriggers": false
                        }
                      ]
                    }
                  ]
                }
              ],
              "priorityLevel": -90
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__224752569\">Enemy_SW_Boss_01_IF_RemoveOneMore</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Action-End Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 7,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-129923965\">MoreOneMorePerTurn</a>"
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                          },
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-129923965\">MoreOneMorePerTurn</a>"
                          },
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-129923965\">MoreOneMorePerTurn</a>"
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-129923965\">MoreOneMorePerTurn</a>"
                      },
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-129923965\">MoreOneMorePerTurn</a>"
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
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-2022523841\">Enemy_SW_Boss_01_IF_SwarmArmor</a>[<span class=\"descriptionNumberColor\">Insect Egg</span>]"
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "AIFlag",
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
                      "variableName": "AIFlag",
                      "value": 2
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
                    "modifier": "<a class=\"gModGreen\" id=\"-2022523841\">Enemy_SW_Boss_01_IF_SwarmArmor</a>[<span class=\"descriptionNumberColor\">Insect Egg</span>]"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-129923965\">MoreOneMorePerTurn</a>"
                      },
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-129923965\">MoreOneMorePerTurn</a>"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-129923965\">MoreOneMorePerTurn</a>"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                      },
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
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
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-311925230\">Enemy_SW_Boss_01_IF_SwarmArmorBreak</a>"
                  },
                  "passed": [
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
                            "value2": 1,
                            "contextScope": "TargetEntity"
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 4,
                            "contextScope": "TargetEntity"
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 7,
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
                          "value": 1,
                          "max": 10
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
                        "modifier": "<a class=\"gModGreen\" id=\"-129923965\">MoreOneMorePerTurn</a>"
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-129923965\">MoreOneMorePerTurn</a>"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
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
                            "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                          },
                          "passed": [
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Has Flag",
                    "flagName": "DisableAction"
                  },
                  "passed": [
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
                            "value2": 2,
                            "contextScope": "TargetEntity"
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 3,
                            "contextScope": "TargetEntity"
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
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-2022523841\">Enemy_SW_Boss_01_IF_SwarmArmor</a>[<span class=\"descriptionNumberColor\">Insect Egg</span>]"
                          },
                          "passed": [
                            {
                              "name": "Declare Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "scope": "TargetEntity",
                              "variableName": "AIFlag",
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
                              "variableName": "AIFlag",
                              "value": 2
                            }
                          ]
                        }
                      ]
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
                            "value2": 5,
                            "contextScope": "TargetEntity"
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 6,
                            "contextScope": "TargetEntity"
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
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-2022523841\">Enemy_SW_Boss_01_IF_SwarmArmor</a>[<span class=\"descriptionNumberColor\">Insect Egg</span>]"
                          },
                          "passed": [
                            {
                              "name": "Declare Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "scope": "TargetEntity",
                              "variableName": "AIFlag",
                              "value": 4
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
                              "variableName": "AIFlag",
                              "value": 5
                            }
                          ]
                        }
                      ]
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
                            "value2": 8,
                            "contextScope": "TargetEntity"
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
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-2022523841\">Enemy_SW_Boss_01_IF_SwarmArmor</a>[<span class=\"descriptionNumberColor\">Insect Egg</span>]"
                          },
                          "passed": [
                            {
                              "name": "Declare Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "scope": "TargetEntity",
                              "variableName": "AIFlag",
                              "value": 7
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
                              "variableName": "AIFlag",
                              "value": 8
                            }
                          ]
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
          "for": "<a class=\"gModGreen\" id=\"mod__-850002708\">Enemy_SW_Minion01_01_IF_Listener</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"1342778921\">Enemy_SW_Boss_01_IF_MinionsEnhancement_DisplayLV3</a>"
                  },
                  "passed": [
                    {
                      "name": "Action Advance/Delay",
                      "advanceType": "Set",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "set": 0
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
          "for": "<a class=\"gModGreen\" id=\"mod__1342778921\">Enemy_SW_Boss_01_IF_MinionsEnhancement_DisplayLV3</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1309223683\">Enemy_SW_Boss_01_IF_MinionsEnhancement_DisplayLV1</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-235139435\">Enemy_SW_Boss_01_IF_MinionsEnhancement_AddEffect_Trigger</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-937628746\">Enemy_SW_Boss_01_IF_MinionsEnhancement_AddEffect</a>",
          "stackType": "Replace",
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
                  "modifier": "<a class=\"gModGreen\" id=\"-235139435\">Enemy_SW_Boss_01_IF_MinionsEnhancement_AddEffect_Trigger</a>"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-235139435\">Enemy_SW_Boss_01_IF_MinionsEnhancement_AddEffect_Trigger</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "SW_Minion01_EnhancementLevel",
                    "compareType": "<",
                    "value2": 3,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1342778921\">Enemy_SW_Boss_01_IF_MinionsEnhancement_DisplayLV3</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1309223683\">Enemy_SW_Boss_01_IF_MinionsEnhancement_DisplayLV1</a>"
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
                    "value1": "SW_Minion01_EnhancementLevel",
                    "compareType": "=",
                    "value2": 3,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1309223683\">Enemy_SW_Boss_01_IF_MinionsEnhancement_DisplayLV1</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1342778921\">Enemy_SW_Boss_01_IF_MinionsEnhancement_DisplayLV3</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-103304753\">Enemy_SW_Boss_01_IF_MinionsEnhancement</a>[<span class=\"descriptionNumberColor\">Growth Hormones</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "SW_Minion01_EnhancementLevel",
                  "value": 0
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1309223683\">Enemy_SW_Boss_01_IF_MinionsEnhancement_DisplayLV1</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1342778921\">Enemy_SW_Boss_01_IF_MinionsEnhancement_DisplayLV3</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "MDF_EnhancementLevel",
                  "multiplier": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_EnhancementLevel",
                    "compareType": "=",
                    "value2": 3
                  },
                  "passed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (MDF_EnhancementLevel) || RETURN",
                        "displayLines": "MDF_EnhancementLevel",
                        "constants": [],
                        "variables": [
                          "MDF_EnhancementLevel"
                        ]
                      },
                      "entityClass": "Enemy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "maximum": 3,
                      "assignState": "True",
                      "state": "Active"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (MDF_EnhancementLevel) || RETURN",
                        "displayLines": "MDF_EnhancementLevel",
                        "constants": [],
                        "variables": [
                          "MDF_EnhancementLevel"
                        ]
                      },
                      "entityClass": "Enemy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "maximum": 3,
                      "assignState": "True",
                      "state": "Normal"
                    }
                  ]
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_AttackAddedRatio) || Variables[1] (MDF_EnhancementLevel) || MUL || RETURN",
                    "displayLines": "(MDF_AttackAddedRatio * MDF_EnhancementLevel)",
                    "constants": [],
                    "variables": [
                      "MDF_AttackAddedRatio",
                      "MDF_EnhancementLevel"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "SW_Minion01_EnhancementLevel",
                  "value": {
                    "operator": "Variables[0] (MDF_EnhancementLevel) || RETURN",
                    "displayLines": "MDF_EnhancementLevel",
                    "constants": [],
                    "variables": [
                      "MDF_EnhancementLevel"
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-937628746\">Enemy_SW_Boss_01_IF_MinionsEnhancement_AddEffect</a>"
                }
              ]
            }
          ],
          "stackData": [
            "MDF_AttackAddedRatio"
          ],
          "latentQueue": [
            "SummonDelayRatio2",
            "CurrentSummonCount"
          ],
          "description": "Each stack increases ATK by <span class=\"descriptionNumberColor\">MDF_AttackAddedRatio</span>.",
          "type": "Other",
          "effectName": "Growth Hormones",
          "statusName": "Growth Hormones",
          "stackLimit": 3,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-311925230\">Enemy_SW_Boss_01_IF_SwarmArmorBreak</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2022523841\">Enemy_SW_Boss_01_IF_SwarmArmor</a>[<span class=\"descriptionNumberColor\">Insect Egg</span>]",
          "stackType": "Replace",
          "modifierFlags": [
            "RetainCountZero"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-311925230\">Enemy_SW_Boss_01_IF_SwarmArmorBreak</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Being Attacked End [Owner]",
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
                      "name": "Define Modifier Variable",
                      "modifierName": null,
                      "function": "Add"
                    },
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "_CurrentCount",
                      "modifierName": "<a class=\"gModGreen\" id=\"-2022523841\">Enemy_SW_Boss_01_IF_SwarmArmor</a>[<span class=\"descriptionNumberColor\">Insect Egg</span>]",
                      "multiplier": 1
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (_CurrentCount) || RETURN",
                        "displayLines": "_CurrentCount",
                        "constants": [],
                        "variables": [
                          "_CurrentCount"
                        ]
                      },
                      "entityClass": "Enemy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "assignState": "True",
                      "state": "Normal"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": null,
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-311925230\">Enemy_SW_Boss_01_IF_SwarmArmorBreak</a>"
                        },
                        "Modifier Deletes Itself"
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_DamageReduce"
          ],
          "latentQueue": [],
          "description": "Lose 1 Insect Egg when attacked by \"Entomon Eulogy\" or \"Decay Eulogy.\"",
          "type": "Other",
          "statusName": "Insect Egg"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-77514845\">Enemy_SW_Boss_01_IF_SwarmArmorController</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "Turn [Action-End Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-2022523841\">Enemy_SW_Boss_01_IF_SwarmArmor</a>[<span class=\"descriptionNumberColor\">Insect Egg</span>]",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2022523841\">Enemy_SW_Boss_01_IF_SwarmArmor</a>[<span class=\"descriptionNumberColor\">Insect Egg</span>]",
                      "counter": {
                        "operator": "Variables[0] (MDF_Armor_CountNormal) || RETURN",
                        "displayLines": "MDF_Armor_CountNormal",
                        "constants": [],
                        "variables": [
                          "MDF_Armor_CountNormal"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_DamageReduce": {
                          "operator": "Variables[0] (MDF_Armor_DamageReduce) || RETURN",
                          "displayLines": "MDF_Armor_DamageReduce",
                          "constants": [],
                          "variables": [
                            "MDF_Armor_DamageReduce"
                          ]
                        }
                      }
                    }
                  ]
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
                    "modifier": "<a class=\"gModGreen\" id=\"-2022523841\">Enemy_SW_Boss_01_IF_SwarmArmor</a>[<span class=\"descriptionNumberColor\">Insect Egg</span>]"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "_CurrentMaxCount",
                      "modifierName": "<a class=\"gModGreen\" id=\"-2022523841\">Enemy_SW_Boss_01_IF_SwarmArmor</a>[<span class=\"descriptionNumberColor\">Insect Egg</span>]",
                      "multiplier": 1
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (_CurrentMaxCount) || RETURN",
                        "displayLines": "_CurrentMaxCount",
                        "constants": [],
                        "variables": [
                          "_CurrentMaxCount"
                        ]
                      },
                      "entityClass": "Enemy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "maximum": {
                        "operator": "Variables[0] (_CurrentMaxCount) || RETURN",
                        "displayLines": "_CurrentMaxCount",
                        "constants": [],
                        "variables": [
                          "_CurrentMaxCount"
                        ]
                      },
                      "assignState": "True",
                      "state": "Normal"
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
                    "modifier": "<a class=\"gModGreen\" id=\"-2022523841\">Enemy_SW_Boss_01_IF_SwarmArmor</a>[<span class=\"descriptionNumberColor\">Insect Egg</span>]"
                  },
                  "passed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": 0,
                      "entityClass": "Enemy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "maximum": {
                        "operator": "Variables[0] (_CurrentMaxCount) || RETURN",
                        "displayLines": "_CurrentMaxCount",
                        "constants": [],
                        "variables": [
                          "_CurrentMaxCount"
                        ]
                      },
                      "assignState": "True",
                      "state": "Disable"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_Armor_DamageReduce",
            "MDF_Armor_CountNormal"
          ],
          "latentQueue": [
            "SummonDelayRatio2"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__654310441\">Enemy_SW_Boss_01_IF_StanceDamageController</a>",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
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
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">EnemyVulnerability</span>&nbsp;",
                          "value": "MDF_ExplodeDamageTakenRatio"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked End [Owner]",
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
                      "name": "Deal Toughness DMG",
                      "value": {
                        "operator": "Variables[0] (MDF_ExplodeStanceDamage) || RETURN",
                        "displayLines": "MDF_ExplodeStanceDamage",
                        "constants": [],
                        "variables": [
                          "MDF_ExplodeStanceDamage"
                        ]
                      },
                      "attacker": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "defender": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "forceReduction": true,
                      "canDelay": true,
                      "ToughnessDMGType": "Quantum"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_ExplodeDamageTakenRatio",
            "MDF_ExplodeStanceDamage"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2090015456\">Enemy_SW_Boss_01_IF_HintToastController</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier is Added [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-2022523841\">Enemy_SW_Boss_01_IF_SwarmArmor</a>[<span class=\"descriptionNumberColor\">Insect Egg</span>]"
                  },
                  "passed": [
                    {
                      "name": "UI Display Event",
                      "popUpText": "Defeat Swarm summons to weaken the leader"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Losing Modifier [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-2022523841\">Enemy_SW_Boss_01_IF_SwarmArmor</a>[<span class=\"descriptionNumberColor\">Insect Egg</span>]"
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1900288072\">Enemy_SW_Boss_01_IF_AbilityEX04</a>",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2017731405\">Enemy_SW_Boss_01_IF_AbilityEX03</a>",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2000953786\">Enemy_SW_Boss_01_IF_AbilityEX02</a>",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1984176167\">Enemy_SW_Boss_01_IF_AbilityEX01</a>",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-646358836\">Enemy_SW_Minion01_02_IF_WingsControl</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Ability Use [Owner]: Start"
            },
            {
              "eventTrigger": "Ability Use [Owner]: End"
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]"
            },
            {
              "eventTrigger": "End Broken State [Owner]"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1345320754\">Enemy_SW_Minion01_01_IF_AIChange</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1702234274\">Monster_SW_Minion01_01_Burning_Modifier</a>"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 1
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-938003569\">Enemy_SW_Minion01_02_IF_Deathrattle</a>",
          "modifierFlags": [
            "Deathrattle",
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Action Phase Start [Anyone][?]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "performAccFlag",
                  "value": 0
                }
              ]
            },
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
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_SW_Minion01_02_IF_PassiveAbility_Insert_Part01",
                  "priorityTag": "MonsterDeathRattle",
                  "ownerState": "Mask_AliveOrLimbo",
                  "targetState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
                },
                {
                  "name": "Mark Entity For Immediate Death"
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "mustBeAlive2": true
                  },
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "performAccFlag",
                      "value": 0
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
          "for": "<a class=\"gModGreen\" id=\"mod__526943540\">Enemy_SW_Minion01_01_IF_Deathrattle</a>",
          "modifierFlags": [
            "Deathrattle",
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Action Phase Start [Anyone][?]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "performAccFlag",
                  "value": 0
                }
              ]
            },
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
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_SW_Minion01_01_IF_PassiveAbility_Insert_Part01",
                  "priorityTag": "MonsterDeathRattle",
                  "ownerState": "Mask_AliveOrLimbo",
                  "targetState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
                },
                {
                  "name": "Mark Entity For Immediate Death"
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "mustBeAlive2": true
                  },
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "performAccFlag",
                      "value": 0
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1150081091\">Enemy_SW_Minion01_IF_Deathrattle</a>",
          "modifierFlags": [
            "Deathrattle",
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Action Phase Start [Anyone][?]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "performAccFlag",
                  "value": 0
                }
              ]
            },
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
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_SW_Minion01_IF_PassiveAbility_Insert_Part01",
                  "priorityTag": "MonsterDeathRattle",
                  "ownerState": "Mask_AliveOrLimbo",
                  "targetState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
                },
                {
                  "name": "Mark Entity For Immediate Death"
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "mustBeAlive2": true
                  },
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "performAccFlag",
                      "value": 0
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
          "for": "<a class=\"gModGreen\" id=\"mod__1310292986\">Enemy_SW_Boss_01_IF_AbilityP01_SummonController</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "Take Damage Start [Owner]: Any"
            },
            {
              "eventTrigger": "Being Attacked End [Owner]",
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
                    },
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "ContextModifier",
                      "variableName": "MDF_Count"
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "maxTargets": 5,
                      "conditions": {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "MDF_Count",
                          "context": "ContextModifier",
                          "value": 1,
                          "max": 5
                        }
                      ]
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
                            "value1": "MDF_Count",
                            "compareType": "<",
                            "value2": 5
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "CurrentHP",
                            "compareType": ">",
                            "value2": 0
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Inject Ability Use",
                          "conditionActive": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Enemy Team All}}"
                            },
                            "value1": "TeamCharacterCount",
                            "compareType": "<=",
                            "value2": 4
                          },
                          "abilityName": "Monster_SW_Boss_01_IF_AbilityP01_Insert",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "priorityTag": "MonsterBattleCry",
                          "canHitNonTargets": true,
                          "showInActionOrder": true,
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
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 1
                      }
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_SW_Boss_01_IF_AbilityP05_02",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "priorityTag": "MonsterBattleCry",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "End Broken State [Owner]"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-794767767\">W2_SW_Boss_01_BattleScore1</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier is Added [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"1965624531\">Enemy_SW_Boss_01_ScoringDetect0102</a>"
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "matchTags": true,
                      "relatedAchievements": [
                        {
                          "title": "In Utter Darkness",
                          "desc": "After the Starcrusher Swarm King unleashes \"Carapace of Nurtured Disaster,\" inflict Weakness Break on it",
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
          "for": "<a class=\"gModGreen\" id=\"mod__259450291\">Monster_SW_Boss_01_Ability05Charge</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "Take Damage Start [Owner]: Any"
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]"
            }
          ],
          "stackData": [],
          "latentQueue": [
            "Phase2FirstTurn"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1256327347\">Monster_SW_Boss_01_Ability07_Ball</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "Phase2FirstTurn"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-689016270\">Monster_SW_Boss_01_AbilityP05_First</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": 8022030,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Gnaw Sting"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-689016270\">Monster_SW_Boss_01_AbilityP05_First</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2142572207\">Monster_SW_Boss_01_Ability05_Passive</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "SummonDelayRatioPhase1",
                  "value": 0.5
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "SummonDelayRatioPhase2",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked End [Owner]",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "ContextModifier",
                  "variableName": "MDF_Count"
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "includeDyingTargets": true,
                  "maxTargets": 5,
                  "conditions": {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_Count",
                      "context": "ContextModifier",
                      "value": 1,
                      "max": 5
                    }
                  ]
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
                        "value1": "MDF_Count",
                        "compareType": "<",
                        "value2": 5
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "CurrentHP",
                        "compareType": ">",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "Current_Toughness_%",
                        "compareType": ">",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_SW_Boss_01_AbilityP05",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "priorityTag": "MonsterBattleCry",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
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
                    "value1": "CurrentHP%",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 1
                      }
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_SW_Boss_01_AbilityP05_02",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "priorityTag": "MonsterBattleCry",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                },
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "Phase2FirstTurn"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-257262548\">Monster_SW_Boss_01_DamageTakenUp</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
          "stackType": "Replace",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_DamageTakenUpRatio_PerLayer) || Variables[1] (ModifierLayers) || MUL || RETURN",
                    "displayLines": "(MDF_DamageTakenUpRatio_PerLayer * ModifierLayers)",
                    "constants": [],
                    "variables": [
                      "MDF_DamageTakenUpRatio_PerLayer",
                      "ModifierLayers"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Increases DMG received by <span class=\"descriptionNumberColor\">MDF_DamageTakenUpRatio_PerLayer</span>. This effect is stackable.",
          "type": "Debuff",
          "effectName": "Vulnerability",
          "statusName": "Vulnerability",
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-850302516\">Monster_SW_Boss_01_DamageReduce</a>[<span class=\"descriptionNumberColor\">Multiply</span>]",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Defender",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
                      "value": "MDF_DamageReduceRatio"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_DamageReduceRatio"
          ],
          "latentQueue": [
            "Phase2FirstTurn"
          ],
          "description": "Reduces DMG taken by <span class=\"descriptionNumberColor\">MDF_DamageReduceRatio</span>. Summons a regular Swarm every time this unit is attacked. When this unit's Weakness is Broken, deals Toughness Reduction equal to its own max Toughness to all friendly units and increases the DMG taken by all other friendly units besides the target themselves.",
          "type": "Buff",
          "effectName": "Multiply",
          "statusName": "Multiply",
          "duration": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1293250966\">Monster_SW_Boss_01_PartController</a>",
          "execute": [
            {
              "eventTrigger": "Waiting for Healing in Limbo",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "InsertCheck",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        {
                          "name": "Dispel Debuffs",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "silent": true
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1916097971\">Monster_SW_Boss_Endurance</a>"
                        },
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "InsertCheck"
                        },
                        {
                          "name": "Set Enemy Phase",
                          "mode": "Inc"
                        },
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_SW_Boss_01_PassiveAbility_Insert",
                          "priorityTag": "MonsterChangePhase",
                          "ownerState": "Mask_AliveOrLimbo",
                          "targetState": "Mask_AliveOrLimbo",
                          "canHitNonTargets": true,
                          "allowAbilityTriggers": false
                        }
                      ]
                    }
                  ]
                }
              ],
              "priorityLevel": -90
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-848257295\">Enemy_SW_Boss_01_PassiveAbilityMainBattle</a>",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1965624531\">Enemy_SW_Boss_01_ScoringDetect0102</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1982402150\">Enemy_SW_Boss_01_ScoringDetect0101</a>",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: End",
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
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 2
                      },
                      {
                        "name": "Skill Name",
                        "skillName": "Skill05"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "FirstTime",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "scope": "ContextModifier",
                      "variableName": "FirstTime",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "scope": "ContextModifier",
                      "variableName": "FirstSkillInPhase02",
                      "value": 1
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "scope": "ContextModifier",
                      "variableName": "FirstSkillInPhase02",
                      "value": 0
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
                    "value1": "FirstSkillInPhase02",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1965624531\">Enemy_SW_Boss_01_ScoringDetect0102</a>"
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
          "for": "<a class=\"gModGreen\" id=\"mod__1022584123\">Enemy_SW_Boss_01_ShowMinion</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "maxTargets": 2,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"979937712\">Enemy_SW_Boss_01_NeedToShow_Mark</a>"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"979937712\">Enemy_SW_Boss_01_NeedToShow_Mark</a>"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Enemy ID",
                        "ID": {
                          "operator": "Variables[0] (SummonMonsterID02) || RETURN",
                          "displayLines": "SummonMonsterID02",
                          "constants": [],
                          "variables": [
                            "SummonMonsterID02"
                          ]
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": null,
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Enemy ID",
                            "ID": 802501000,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "characterName": null
                          }
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Enemy ID",
                        "ID": 802501000,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "characterName": null
                      }
                    }
                  ]
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__979937712\">Enemy_SW_Boss_01_NeedToShow_Mark</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1730193233\">Enemy_SW_Boss_01_SummonMinion</a>",
          "stackType": "Multiple",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Target Count",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Enemy Team All}}"
                        },
                        "compareType": "<",
                        "value2": 5,
                        "livingTargets": true
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_SummonFlag",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "ContextModifier"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "scope": "ContextModifier",
                      "variableName": "MDF_SummonFlag",
                      "value": 0
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Is Part Of Team Location",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "team": "Enemy Team",
                            "location": "Left"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": {
                            "operator": "Variables[0] (MDF_SummonDelay) || RETURN",
                            "displayLines": "MDF_SummonDelay",
                            "constants": [],
                            "variables": [
                              "MDF_SummonDelay"
                            ]
                          },
                          "enemyList": [
                            {
                              "name": "Enemy Entry",
                              "enemyID": {
                                "operator": "Variables[0] (MDF_SummonID) || RETURN",
                                "displayLines": "MDF_SummonID",
                                "constants": [],
                                "variables": [
                                  "MDF_SummonID"
                                ]
                              },
                              "locationType": "First"
                            }
                          ]
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Recently Summoned Enemies}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"979937712\">Enemy_SW_Boss_01_NeedToShow_Mark</a>"
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Enemy ID",
                            "ID": 802501000,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "characterName": null
                          },
                          "passed": [
                            {
                              "name": "Shot Fired",
                              "execute": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1022584123\">Enemy_SW_Boss_01_ShowMinion</a>"
                                },
                                "Modifier Deletes Itself"
                              ]
                            }
                          ],
                          "failed": [
                            {
                              "name": "Shot Fired",
                              "execute": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1022584123\">Enemy_SW_Boss_01_ShowMinion</a>"
                                },
                                "Modifier Deletes Itself"
                              ]
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": {
                            "operator": "Variables[0] (MDF_SummonDelay) || RETURN",
                            "displayLines": "MDF_SummonDelay",
                            "constants": [],
                            "variables": [
                              "MDF_SummonDelay"
                            ]
                          },
                          "enemyList": [
                            {
                              "name": "Enemy Entry",
                              "enemyID": {
                                "operator": "Variables[0] (MDF_SummonID) || RETURN",
                                "displayLines": "MDF_SummonID",
                                "constants": [],
                                "variables": [
                                  "MDF_SummonID"
                                ]
                              },
                              "locationType": "Last"
                            }
                          ]
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Recently Summoned Enemies}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"979937712\">Enemy_SW_Boss_01_NeedToShow_Mark</a>"
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Enemy ID",
                            "ID": 802501000,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "characterName": null
                          },
                          "passed": [
                            {
                              "name": "Shot Fired",
                              "execute": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1022584123\">Enemy_SW_Boss_01_ShowMinion</a>"
                                },
                                "Modifier Deletes Itself"
                              ]
                            }
                          ],
                          "failed": [
                            {
                              "name": "Shot Fired",
                              "execute": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1022584123\">Enemy_SW_Boss_01_ShowMinion</a>"
                                },
                                "Modifier Deletes Itself"
                              ]
                            }
                          ]
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
                }
              ]
            }
          ],
          "stackData": [
            "MDF_SummonID",
            "MDF_SummonDelay"
          ],
          "latentQueue": [
            "AbilityFlag"
          ]
        }
      ],
      "references": []
    }
  }
}