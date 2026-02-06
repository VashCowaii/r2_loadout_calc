const compositeAbilityObject = {
  "fullCharacterName": 4012077,
  "trimCharacterName": 4012077,
  "abilityList": [
    "4012077_Monster_W4_PolluxPart_IF_L_PassiveAbility_Initiate",
    "4012077_Monster_W4_PolluxPart_IF_PassiveAbility_Initiate",
    "4012077_Monster_W4_PolluxPart_IF_AbilityP01_Insert02_Part02",
    "4012077_Monster_W4_PolluxPart_IF_AbilityP01_Insert02_Part01",
    "4012077_Monster_W4_PolluxPart_IF_AbilityP01_Insert01_Part02",
    "4012077_Monster_W4_PolluxPart_IF_AbilityP01_Insert01_Part01",
    "4012077_Monster_W4_PolluxPart_IF_AbilityP01",
    "4012077_Monster_W4_PolluxPart_IF_Ability02_L_Part02",
    "4012077_Monster_W4_PolluxPart_IF_Ability02_L_Part01",
    "4012077_Monster_W4_PolluxPart_IF_Ability02_Part02",
    "4012077_Monster_W4_PolluxPart_IF_Ability02_Part01",
    "4012077_Monster_W4_PolluxPart_IF_Ability01_L_Part02",
    "4012077_Monster_W4_PolluxPart_IF_Ability01_L_Part01",
    "4012077_Monster_W4_PolluxPart_IF_Ability01_Part02",
    "4012077_Monster_W4_PolluxPart_IF_Ability01_Part01",
    "4012077_Monster_W4_Pollux_IF_AbilityEX05",
    "4012077_Monster_W4_Pollux_IF_AbilityEX04",
    "4012077_Monster_W4_Pollux_IF_AbilityEX03",
    "4012077_Monster_W4_Pollux_IF_AbilityEX02",
    "4012077_Monster_W4_PolluxPart_IF_AbilityEX01",
    "4012077_Monster_W4_Pollux_IF_AbilityEX01",
    "4012077_Monster_W4_Pollux_IF_Stun_Insert",
    "4012077_Monster_W4_Pollux_IF_TeamFormation",
    "4012077_Monster_W4_Pollux_IF_AbilityP01_Insert01_Part02",
    "4012077_Monster_W4_Pollux_IF_AbilityP01_Insert01_Part01",
    "4012077_Monster_W4_Pollux_IF_PassiveAbility_Insert",
    "4012077_Monster_W4_Pollux_IF_AbilityP05",
    "4012077_Monster_W4_Pollux_IF_AbilityP04",
    "4012077_Monster_W4_Pollux_IF_AbilityP03",
    "4012077_Monster_W4_Pollux_IF_AbilityP02",
    "4012077_Monster_W4_Pollux_IF_AbilityP01",
    "4012077_Monster_W4_Pollux_IF_Ability06_Part02",
    "4012077_Monster_W4_Pollux_IF_Ability06_Part01",
    "4012077_Monster_W4_Pollux_IF_Ability05_Part02",
    "4012077_Monster_W4_Pollux_IF_Ability05_Part01",
    "4012077_Monster_W4_Pollux_IF_Ability04_Part02",
    "4012077_Monster_W4_Pollux_IF_Ability04_Part01",
    "4012077_Monster_W4_Pollux_IF_Ability03_Part02",
    "4012077_Monster_W4_Pollux_IF_Ability03_Part01",
    "4012077_Monster_W4_Pollux_IF_Ability02_Part02",
    "4012077_Monster_W4_Pollux_IF_Ability02_Part01",
    "4012077_Monster_W4_Pollux_IF_Ability01_Part02",
    "4012077_Monster_W4_Pollux_IF_Ability01_Part01",
    "4012077_Modifiers",
    "4012077_Functions"
  ],
  "abilityObject": {
    "4012077_Monster_W4_PolluxPart_IF_L_PassiveAbility_Initiate": {
      "fileName": "4012077_Monster_W4_PolluxPart_IF_L_PassiveAbility_Initiate",
      "skillTrigger": "Passive",
      "abilityType": "Talent",
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
          "modifier": "Enemy_W4_PolluxPart_IF_Status"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_W4_PolluxPart_IF_MinionsSuperArmorController",
          "valuePerStack": {
            "MDF_MinionsSuperArmor_AllDamageReduce": {
              "operator": "Variables[0] ({[SkillEX01[0]]}) || RETURN",
              "displayLines": "{[SkillEX01[0]]}",
              "constants": [],
              "variables": [
                "{[SkillEX01[0]]}"
              ]
            },
            "MDF_MinionsSuperArmor_AllDamageTypeTakenRatio": {
              "operator": "Variables[0] ({[SkillEX01[1]]}) || RETURN",
              "displayLines": "{[SkillEX01[1]]}",
              "constants": [],
              "variables": [
                "{[SkillEX01[1]]}"
              ]
            },
            "MDF_SetActionDelayValue": {
              "operator": "Variables[0] ({[SkillEX01[2]]}) || RETURN",
              "displayLines": "{[SkillEX01[2]]}",
              "constants": [],
              "variables": [
                "{[SkillEX01[2]]}"
              ]
            }
          }
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "scope": "TargetEntity",
          "variableName": "StanceDamagePreshowValue",
          "value": {
            "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
            "displayLines": "{[SkillP01[0]]}",
            "constants": [],
            "variables": [
              "{[SkillP01[0]]}"
            ]
          }
        }
      ],
      "references": []
    },
    "4012077_Monster_W4_PolluxPart_IF_PassiveAbility_Initiate": {
      "fileName": "4012077_Monster_W4_PolluxPart_IF_PassiveAbility_Initiate",
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
          "modifier": "Enemy_W4_PolluxPart_IF_Status"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_W4_PolluxPart_IF_MinionsSuperArmorController",
          "valuePerStack": {
            "MDF_MinionsSuperArmor_AllDamageReduce": {
              "operator": "Variables[0] ({[SkillEX01[0]]}) || RETURN",
              "displayLines": "{[SkillEX01[0]]}",
              "constants": [],
              "variables": [
                "{[SkillEX01[0]]}"
              ]
            },
            "MDF_MinionsSuperArmor_AllDamageTypeTakenRatio": {
              "operator": "Variables[0] ({[SkillEX01[1]]}) || RETURN",
              "displayLines": "{[SkillEX01[1]]}",
              "constants": [],
              "variables": [
                "{[SkillEX01[1]]}"
              ]
            },
            "MDF_SetActionDelayValue": {
              "operator": "Variables[0] ({[SkillEX01[2]]}) || RETURN",
              "displayLines": "{[SkillEX01[2]]}",
              "constants": [],
              "variables": [
                "{[SkillEX01[2]]}"
              ]
            }
          }
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
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "scope": "TargetEntity",
          "variableName": "StanceDamagePreshowValue",
          "value": {
            "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
            "displayLines": "{[SkillP01[0]]}",
            "constants": [],
            "variables": [
              "{[SkillP01[0]]}"
            ]
          }
        }
      ],
      "references": []
    },
    "4012077_Monster_W4_PolluxPart_IF_AbilityP01_Insert02_Part02": {
      "fileName": "4012077_Monster_W4_PolluxPart_IF_AbilityP01_Insert02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            },
            "team": "Enemy Team"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            },
            "team": "Enemy Team",
            "location": "Max"
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Enemy_W4_Pollux_IF_AbilityP01_NegativeBlood_Target_Display[<span class=\"descriptionNumberColor\">Death Rattle</span>]"
              },
              "passed": [
                {
                  "name": "Heal",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "healPercent": {
                    "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                    "displayLines": "{[SkillP01[3]]}",
                    "constants": [],
                    "variables": [
                      "{[SkillP01[3]]}"
                    ]
                  },
                  "formula": "Heal from Target MaxHP"
                }
              ],
              "failed": [
                {
                  "name": "Heal",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "healPercent": {
                    "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                    "displayLines": "{[SkillP01[2]]}",
                    "constants": [],
                    "variables": [
                      "{[SkillP01[2]]}"
                    ]
                  },
                  "formula": "Heal from Target MaxHP"
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
            "modifier": "Monster_Standard_WeakControl[<span class=\"descriptionNumberColor\">Toughness Protection</span>]"
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "modifier": "Monster_Standard_WeakControl[<span class=\"descriptionNumberColor\">Toughness Protection</span>]"
            },
            {
              "name": "Deal Toughness DMG",
              "value": {
                "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
                "displayLines": "{[SkillP01[0]]}",
                "constants": [],
                "variables": [
                  "{[SkillP01[0]]}"
                ]
              },
              "attacker": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "defender": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "forceReduction": true,
              "canDelay": true,
              "ToughnessDMGType": "Quantum"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "modifier": "Monster_Standard_WeakControl[<span class=\"descriptionNumberColor\">Toughness Protection</span>]",
              "casterAssign": "TargetSelf"
            }
          ],
          "failed": [
            {
              "name": "Deal Toughness DMG",
              "value": {
                "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
                "displayLines": "{[SkillP01[0]]}",
                "constants": [],
                "variables": [
                  "{[SkillP01[0]]}"
                ]
              },
              "attacker": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "defender": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "forceReduction": true,
              "canDelay": true,
              "ToughnessDMGType": "Quantum"
            }
          ]
        },
        {
          "name": "Consume",
          "consumeFrom": "MaxHP",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "sourceTarget": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "consumePercent": {
            "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
            "displayLines": "{[SkillP01[1]]}",
            "constants": [],
            "variables": [
              "{[SkillP01[1]]}"
            ]
          },
          "consumeFloor": 1
        }
      ],
      "references": []
    },
    "4012077_Monster_W4_PolluxPart_IF_AbilityP01_Insert02_Part01": {
      "fileName": "4012077_Monster_W4_PolluxPart_IF_AbilityP01_Insert02_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "InsertFlag02",
          "value": 0
        },
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
          "ability": "Monster_W4_PolluxPart_IF_AbilityP01_Insert02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "onAbort": [
        {
          "name": "Define Custom Variable",
          "variableName": "InsertFlag02",
          "value": 0
        }
      ],
      "references": []
    },
    "4012077_Monster_W4_PolluxPart_IF_AbilityP01_Insert01_Part02": {
      "fileName": "4012077_Monster_W4_PolluxPart_IF_AbilityP01_Insert01_Part02",
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
              "target": "{{Caster's Summoner}}"
            },
            "modifier": "Monster_Standard_WeakControl[<span class=\"descriptionNumberColor\">Toughness Protection</span>]"
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "modifier": "Monster_Standard_WeakControl[<span class=\"descriptionNumberColor\">Toughness Protection</span>]"
            },
            {
              "name": "Deal Toughness DMG",
              "value": {
                "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
                "displayLines": "{[SkillP01[0]]}",
                "constants": [],
                "variables": [
                  "{[SkillP01[0]]}"
                ]
              },
              "attacker": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "defender": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "forceReduction": true,
              "canDelay": true,
              "ToughnessDMGType": "Quantum"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "modifier": "Monster_Standard_WeakControl[<span class=\"descriptionNumberColor\">Toughness Protection</span>]",
              "casterAssign": "TargetSelf"
            }
          ],
          "failed": [
            {
              "name": "Deal Toughness DMG",
              "value": {
                "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
                "displayLines": "{[SkillP01[0]]}",
                "constants": [],
                "variables": [
                  "{[SkillP01[0]]}"
                ]
              },
              "attacker": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "defender": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "forceReduction": true,
              "canDelay": true,
              "ToughnessDMGType": "Quantum"
            }
          ]
        },
        {
          "name": "Consume",
          "consumeFrom": "MaxHP",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "sourceTarget": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "consumePercent": {
            "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
            "displayLines": "{[SkillP01[1]]}",
            "constants": [],
            "variables": [
              "{[SkillP01[1]]}"
            ]
          },
          "consumeFloor": 1
        }
      ],
      "references": []
    },
    "4012077_Monster_W4_PolluxPart_IF_AbilityP01_Insert01_Part01": {
      "fileName": "4012077_Monster_W4_PolluxPart_IF_AbilityP01_Insert01_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "InsertFlag01",
          "value": 0
        },
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
          "ability": "Monster_W4_PolluxPart_IF_AbilityP01_Insert01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "onAbort": [
        {
          "name": "Define Custom Variable",
          "variableName": "InsertFlag01",
          "value": 0
        }
      ],
      "references": []
    },
    "4012077_Monster_W4_PolluxPart_IF_AbilityP01": {
      "fileName": "4012077_Monster_W4_PolluxPart_IF_AbilityP01",
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
          "modifier": "Enemy_Standard_MuteHitFly"
        }
      ],
      "references": []
    },
    "4012077_Monster_W4_PolluxPart_IF_Ability02_L_Part02": {
      "fileName": "4012077_Monster_W4_PolluxPart_IF_Ability02_L_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
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
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHP) || Variables[1] ({[Skill02[2]]}) || MUL || RETURN",
                  "displayLines": "(_MaxHP * {[Skill02[2]]})",
                  "constants": [],
                  "variables": [
                    "_MaxHP",
                    "{[Skill02[2]]}"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
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
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHP) || Variables[1] ({[Skill02[3]]}) || MUL || RETURN",
                  "displayLines": "(_MaxHP * {[Skill02[3]]})",
                  "constants": [],
                  "variables": [
                    "_MaxHP",
                    "{[Skill02[3]]}"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK"
              }
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Target Left of Ability Target(ST)}}"
          },
          "maxTargets": 1
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Target Right of Ability Target(ST)}}"
          },
          "maxTargets": 1
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "TaskList_Monster_W4_Pollux_IF_Strengthen_EggAbsorb_FX"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "TaskList_Monster_W4_Pollux_IF_Strengthen_EggAbsorb"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4012077_Monster_W4_PolluxPart_IF_Ability02_L_Part01": {
      "fileName": "4012077_Monster_W4_PolluxPart_IF_Ability02_L_Part01",
      "childAbilityList": [
        "4012077_Monster_W4_PolluxPart_IF_Ability02_L_Part01",
        "4012077_Monster_W4_PolluxPart_IF_Ability02_L_Part02",
        "4012077_Monster_W4_PolluxPart_Ability02_L_Camera"
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
          "ability": "Monster_W4_PolluxPart_IF_Ability02_L_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4012077_Monster_W4_PolluxPart_IF_Ability02_Part02": {
      "fileName": "4012077_Monster_W4_PolluxPart_IF_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
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
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHP) || Variables[1] ({[Skill02[2]]}) || MUL || RETURN",
                  "displayLines": "(_MaxHP * {[Skill02[2]]})",
                  "constants": [],
                  "variables": [
                    "_MaxHP",
                    "{[Skill02[2]]}"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
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
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHP) || Variables[1] ({[Skill02[3]]}) || MUL || RETURN",
                  "displayLines": "(_MaxHP * {[Skill02[3]]})",
                  "constants": [],
                  "variables": [
                    "_MaxHP",
                    "{[Skill02[3]]}"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK"
              }
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Target Left of Ability Target(ST)}}"
          },
          "maxTargets": 1
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Target Right of Ability Target(ST)}}"
          },
          "maxTargets": 1
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "TaskList_Monster_W4_Pollux_IF_Strengthen_EggAbsorb_FX"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "TaskList_Monster_W4_Pollux_IF_Strengthen_EggAbsorb"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4012077_Monster_W4_PolluxPart_IF_Ability02_Part01": {
      "fileName": "4012077_Monster_W4_PolluxPart_IF_Ability02_Part01",
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
          "ability": "Monster_W4_PolluxPart_IF_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4012077_Monster_W4_PolluxPart_IF_Ability01_L_Part02": {
      "fileName": "4012077_Monster_W4_PolluxPart_IF_Ability01_L_Part02",
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
        "Trigger: Attack End",
        {
          "name": "Use Custom Character Function",
          "functionName": "TaskList_Monster_W4_Pollux_IF_Strengthen_EggAbsorb_FX"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "TaskList_Monster_W4_Pollux_IF_Strengthen_EggAbsorb"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4012077_Monster_W4_PolluxPart_IF_Ability01_L_Part01": {
      "fileName": "4012077_Monster_W4_PolluxPart_IF_Ability01_L_Part01",
      "childAbilityList": [
        "4012077_Monster_W4_PolluxPart_IF_Ability01_L_Part01",
        "4012077_Monster_W4_PolluxPart_IF_Ability01_L_Part02",
        "4012077_Monster_W4_PolluxPart_Ability01_L_Camera"
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
          "ability": "Monster_W4_PolluxPart_IF_Ability01_L_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4012077_Monster_W4_PolluxPart_IF_Ability01_Part02": {
      "fileName": "4012077_Monster_W4_PolluxPart_IF_Ability01_Part02",
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
        "Trigger: Attack End",
        {
          "name": "Use Custom Character Function",
          "functionName": "TaskList_Monster_W4_Pollux_IF_Strengthen_EggAbsorb_FX"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "TaskList_Monster_W4_Pollux_IF_Strengthen_EggAbsorb"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4012077_Monster_W4_PolluxPart_IF_Ability01_Part01": {
      "fileName": "4012077_Monster_W4_PolluxPart_IF_Ability01_Part01",
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
          "ability": "Monster_W4_PolluxPart_IF_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4012077_Monster_W4_Pollux_IF_AbilityEX05": {
      "fileName": "4012077_Monster_W4_Pollux_IF_AbilityEX05",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [],
      "references": []
    },
    "4012077_Monster_W4_Pollux_IF_AbilityEX04": {
      "fileName": "4012077_Monster_W4_Pollux_IF_AbilityEX04",
      "abilityType": null,
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
              "modifier": "Enemy_W4_Pollux_IF_AbilityEX04"
            }
          ]
        }
      ],
      "references": []
    },
    "4012077_Monster_W4_Pollux_IF_AbilityEX03": {
      "fileName": "4012077_Monster_W4_Pollux_IF_AbilityEX03",
      "abilityType": null,
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
              "modifier": "Enemy_W4_Pollux_IF_AbilityEX03"
            }
          ]
        }
      ],
      "references": []
    },
    "4012077_Monster_W4_Pollux_IF_AbilityEX02": {
      "fileName": "4012077_Monster_W4_Pollux_IF_AbilityEX02",
      "abilityType": null,
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
              "modifier": "Enemy_W4_Pollux_IF_AbilityEX02"
            }
          ]
        }
      ],
      "references": []
    },
    "4012077_Monster_W4_PolluxPart_IF_AbilityEX01": {
      "fileName": "4012077_Monster_W4_PolluxPart_IF_AbilityEX01",
      "skillTrigger": "SkillEX01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [],
      "references": []
    },
    "4012077_Monster_W4_Pollux_IF_AbilityEX01": {
      "fileName": "4012077_Monster_W4_Pollux_IF_AbilityEX01",
      "abilityType": null,
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
              "modifier": "Enemy_W4_Pollux_IF_AbilityEX01"
            }
          ]
        }
      ],
      "references": []
    },
    "4012077_Monster_W4_Pollux_IF_Stun_Insert": {
      "fileName": "4012077_Monster_W4_Pollux_IF_Stun_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "Consume",
          "consumeFrom": "MaxHP",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "consumePercent": {
            "operator": "Variables[0] (UnusedUnderThisBase_106) || RETURN",
            "displayLines": "UnusedUnderThisBase_106",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_106"
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_W4_Pollux_IF_Strengthen_Break"
        }
      ],
      "references": []
    },
    "4012077_Monster_W4_Pollux_IF_TeamFormation": {
      "fileName": "4012077_Monster_W4_Pollux_IF_TeamFormation",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "4012077_Monster_W4_Pollux_IF_AbilityP01_Insert01_Part02": {
      "fileName": "4012077_Monster_W4_Pollux_IF_AbilityP01_Insert01_Part02",
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
          "modifier": "Enemy_W4_Pollux_IF_AbilityP01_NegativeBlood_Controller",
          "valuePerStack": {
            "MDF_NegativeBlood_Target_DeathCountDown": {
              "operator": "Variables[0] (UnusedUnderThisBase_103) || RETURN",
              "displayLines": "UnusedUnderThisBase_103",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_103"
              ]
            },
            "MDF_NegativeBlood_Target_FatigueRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_104) || RETURN",
              "displayLines": "UnusedUnderThisBase_104",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_104"
              ]
            },
            "MDF_NegativeBlood_Target_StanceBreakDownRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_105) || RETURN",
              "displayLines": "UnusedUnderThisBase_105",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_105"
              ]
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "Enemy_W4_PolluxPart_IF_Reflex[<span class=\"descriptionNumberColor\">Corrosive Retaliation</span>]",
          "valuePerStack": {
            "MDF_ReflexDamageValue": {
              "operator": "Variables[0] (UnusedUnderThisBase_102) || RETURN",
              "displayLines": "UnusedUnderThisBase_102",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_102"
              ]
            }
          }
        }
      ],
      "references": []
    },
    "4012077_Monster_W4_Pollux_IF_AbilityP01_Insert01_Part01": {
      "fileName": "4012077_Monster_W4_Pollux_IF_AbilityP01_Insert01_Part01",
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
          "ability": "Monster_W4_Pollux_IF_AbilityP01_Insert01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4012077_Monster_W4_Pollux_IF_PassiveAbility_Insert": {
      "fileName": "4012077_Monster_W4_Pollux_IF_PassiveAbility_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Modifier Behavior Flag(s)",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}} + {{Caster's Minions}}"
          },
          "flagNames": []
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_W4_Pollux_IF_Strengthen[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "Enemy_W4_PolluxPart_IF_Link"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "Enemy_W4_PolluxPart_IF_Reflex[<span class=\"descriptionNumberColor\">Corrosive Retaliation</span>]",
          "valuePerStack": {
            "MDF_ReflexDamageValue": {
              "operator": "Variables[0] (UnusedUnderThisBase_102) || RETURN",
              "displayLines": "UnusedUnderThisBase_102",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_102"
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
          "modifier": "Enemy_W4_Pollux_Endurance"
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "set": 0
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Monster_ChangePhase"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "searchRandom": true,
          "ifTargetFound": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Monster_ChangePhase_ParamEntity"
            }
          ]
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
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W4_Pollux_IF_PartController_LockHP"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_W4_Pollux_IF_Strengthen_Break"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "modifier": "Enemy_W4_Pollux_IF_Strengthen_BreakMark"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_EnergyValue",
          "value": 0
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (_EnergyValue) || RETURN",
            "displayLines": "_EnergyValue",
            "constants": [],
            "variables": [
              "_EnergyValue"
            ]
          },
          "entityClass": "Enemy",
          "maximum": 1,
          "assignState": "True",
          "state": "Normal",
          "trigger": "SpEff_Trigger"
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
          "modifier": "Standard_Monster_AllDamageReduce[<span class=\"descriptionNumberColor\">DMG Mitigation</span>]",
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (UnusedUnderThisBase_101) || RETURN",
              "displayLines": "UnusedUnderThisBase_101",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_101"
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
          "modifier": "Monster_Standard_WeakControl[<span class=\"descriptionNumberColor\">Toughness Protection</span>]"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Stage Type",
                "stageType": "Challenge"
              },
              {
                "name": "Stage Type",
                "stageType": "VerseSimulation"
              },
              {
                "name": "Stage Type",
                "stageType": "StrongChallengeActivity"
              },
              {
                "name": "Stage Type",
                "stageType": "RogueRelic"
              }
            ]
          }
        }
      ],
      "references": []
    },
    "4012077_Monster_W4_Pollux_IF_AbilityP05": {
      "fileName": "4012077_Monster_W4_Pollux_IF_AbilityP05",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [],
      "references": []
    },
    "4012077_Monster_W4_Pollux_IF_AbilityP04": {
      "fileName": "4012077_Monster_W4_Pollux_IF_AbilityP04",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [],
      "references": []
    },
    "4012077_Monster_W4_Pollux_IF_AbilityP03": {
      "fileName": "4012077_Monster_W4_Pollux_IF_AbilityP03",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [],
      "references": []
    },
    "4012077_Monster_W4_Pollux_IF_AbilityP02": {
      "fileName": "4012077_Monster_W4_Pollux_IF_AbilityP02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [],
      "references": []
    },
    "4012077_Monster_W4_Pollux_IF_AbilityP01": {
      "fileName": "4012077_Monster_W4_Pollux_IF_AbilityP01",
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
          "modifier": "W4_Pollux_BattleScore2"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "W4_Pollux_BattleScore3"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_W4_Pollux_IF_Status"
        },
        {
          "name": "Create Enemies",
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (SummonID0) || RETURN",
                "displayLines": "SummonID0",
                "constants": [],
                "variables": [
                  "SummonID0"
                ]
              },
              "locationType": "BeforeCaster",
              "locationOffset": -1,
              "leader": {
                "name": "Target Name",
                "target": "{{Caster}}"
              }
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Recently Summoned Enemies}}"
          },
          "modifier": "Monster_W4_PolluxPart_L"
        },
        {
          "name": "Create Enemies",
          "delayPercent": 1.3,
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (SummonID1) || RETURN",
                "displayLines": "SummonID1",
                "constants": [],
                "variables": [
                  "SummonID1"
                ]
              },
              "locationType": "AfterCaster",
              "locationOffset": 1,
              "leader": {
                "name": "Target Name",
                "target": "{{Caster}}"
              }
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Recently Summoned Enemies}}"
          },
          "modifier": "Monster_W4_PolluxPart_R"
        },
        {
          "name": "Create Shared HP Group",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "subTarget": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "removeShields": true
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Standard_Monster_AllDamageReduce[<span class=\"descriptionNumberColor\">DMG Mitigation</span>]",
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (UnusedUnderThisBase_101) || RETURN",
              "displayLines": "UnusedUnderThisBase_101",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_101"
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
          "modifier": "Monster_Standard_WeakControl[<span class=\"descriptionNumberColor\">Toughness Protection</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_W4_Pollux_IF_BloodPool[<span class=\"descriptionNumberColor\">Dream of Demise</span>]"
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
          "modifier": "Enemy_Standard_MuteHitFly"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "OneMorePerTurn"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_W4_Pollux_IF_RemoveOneMore"
        },
        {
          "name": "Set Enemy Phase"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W4_Pollux_IF_PartController_LockHP"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_W4_Pollux_IF_AbilityP01_WeaknessControl"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Skill05_ActionDelay",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_100) || RETURN",
            "displayLines": "UnusedUnderThisBase_100",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_100"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Skill05_Part_ActionDelay",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_99) || RETURN",
            "displayLines": "UnusedUnderThisBase_99",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_99"
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_W4_Pollux_IF_HintToastController"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "Enemy_W4_Pollux_IF_AbilityEX01"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Enemy_W2_Cocolia_IF_SuperArmorController",
              "valuePerStack": {
                "MDF_IF_BOSS_BreakDelay": {
                  "operator": "Variables[0] (UnusedUnderThisBase_98) || RETURN",
                  "displayLines": "UnusedUnderThisBase_98",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_98"
                  ]
                },
                "MDF_IF_BOSS_WeaknessDMGUpRatio": {
                  "operator": "Variables[0] (UnusedUnderThisBase_97) || RETURN",
                  "displayLines": "UnusedUnderThisBase_97",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_97"
                  ]
                },
                "MDF_IF_BOSS_Standard_Defence": {
                  "operator": "Variables[0] (UnusedUnderThisBase_96) || RETURN",
                  "displayLines": "UnusedUnderThisBase_96",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_96"
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
              "modifier": "Enemy_W2_Cocolia_IF_SoftFrenzyController",
              "valuePerStack": {
                "MDF_FrenzyStartDelay": {
                  "operator": "Variables[0] (UnusedUnderThisBase_92) || RETURN",
                  "displayLines": "UnusedUnderThisBase_92",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_92"
                  ]
                },
                "MDF_FrenzyIntervalDelay": {
                  "operator": "Variables[0] (UnusedUnderThisBase_93) || RETURN",
                  "displayLines": "UnusedUnderThisBase_93",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_93"
                  ]
                },
                "MDF_MaxFrenzyLayer": {
                  "operator": "Variables[0] (UnusedUnderThisBase_94) || RETURN",
                  "displayLines": "UnusedUnderThisBase_94",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_94"
                  ]
                },
                "MDF_TokenDMGAddRatioPerLayer": {
                  "operator": "Variables[0] (UnusedUnderThisBase_95) || RETURN",
                  "displayLines": "UnusedUnderThisBase_95",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_95"
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
            "modifier": "Enemy_W4_Pollux_IF_AbilityEX04"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}} + {{Caster's Minions}}"
              },
              "modifier": "Enemy_W2_Cocolia_IF_WeaknessCount",
              "valuePerStack": {
                "MDF_TokenDamageReduceRatio": {
                  "operator": "Variables[0] (UnusedUnderThisBase_90) || RETURN",
                  "displayLines": "UnusedUnderThisBase_90",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_90"
                  ]
                },
                "MDF_TokenDamageAddRatioPerlayer": {
                  "operator": "Variables[0] (UnusedUnderThisBase_91) || RETURN",
                  "displayLines": "UnusedUnderThisBase_91",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_91"
                  ]
                }
              }
            }
          ]
        }
      ],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W4_Pollux_FX_Ground"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_W4_Pollux_IF_EnterBattle"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Monster_W4_PolluxPart_R",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W4_PolluxPart_L",
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "4012077_Monster_W4_Pollux_IF_Ability06_Part02": {
      "fileName": "4012077_Monster_W4_Pollux_IF_Ability06_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Define Custom Variable",
          "variableName": "IsNeedFade",
          "value": 1
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W4_Pollux_FX_Ground"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Enemy_W4_Pollux_IF_AbilityP01_NegativeBlood_Target_Display[<span class=\"descriptionNumberColor\">Death Rattle</span>]"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "_TargetNegativeHp",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPNegative</span>&nbsp;",
                  "context": "ContextAbility"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_TargetNegativeHp",
                  "value": {
                    "operator": "Variables[0] (CEIL) || Variables[1] (_TargetNegativeHp) || PARAM_1 || FUNCTION || RETURN",
                    "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">CEIL</span>(_TargetNegativeHp)",
                    "constants": [],
                    "variables": [
                      "CEIL",
                      "_TargetNegativeHp"
                    ]
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Enemy_W4_Pollux_IF_AbilityP01_NegativeBlood_Target_LockHP"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "DamageFlat": {
                      "operator": "Variables[0] (_TargetNegativeHp) || RETURN",
                      "displayLines": "_TargetNegativeHp",
                      "constants": [],
                      "variables": [
                        "_TargetNegativeHp"
                      ]
                    },
                    "dmgFormulaFinal": "Converted DMG Base",
                    "Toughness": null,
                    "Tags": null,
                    "behaviorTag": "DirectlyLoseHpHit",
                    "attackType": "Additional DMG"
                  }
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "_MaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "DamageFlat": {
                      "operator": "Variables[0] (_MaxHP) || Variables[1] (UnusedUnderThisBase_109) || MUL || Constants[0] (0.25) || MUL || RETURN",
                      "displayLines": "((_MaxHP * UnusedUnderThisBase_109) * 0.25)",
                      "constants": [
                        0.25
                      ],
                      "variables": [
                        "_MaxHP",
                        "UnusedUnderThisBase_109"
                      ]
                    },
                    "dmgFormulaFinal": "Converted DMG Base",
                    "Toughness": null,
                    "Tags": null,
                    "behaviorTag": "DirectlyLoseHpHit",
                    "attackType": "Basic ATK",
                    "EnergyGainPercent": "25%"
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
            "target": "{{Hostile Entities(AOE)}}"
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Enemy_W4_Pollux_IF_AbilityP01_NegativeBlood_Target_LockHP",
                "invertCondition": true
              },
              "failed": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "_MaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "DamageFlat": {
                      "operator": "Variables[0] (_MaxHP) || Variables[1] (UnusedUnderThisBase_109) || MUL || Constants[0] (0.25) || MUL || RETURN",
                      "displayLines": "((_MaxHP * UnusedUnderThisBase_109) * 0.25)",
                      "constants": [
                        0.25
                      ],
                      "variables": [
                        "_MaxHP",
                        "UnusedUnderThisBase_109"
                      ]
                    },
                    "dmgFormulaFinal": "Converted DMG Base",
                    "Toughness": null,
                    "Tags": null,
                    "behaviorTag": "DirectlyLoseHpHit",
                    "attackType": "Basic ATK",
                    "EnergyGainPercent": "25%"
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
            "target": "{{Hostile Entities(AOE)}}"
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Enemy_W4_Pollux_IF_AbilityP01_NegativeBlood_Target_LockHP",
                "invertCondition": true
              },
              "failed": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "_MaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "DamageFlat": {
                      "operator": "Variables[0] (_MaxHP) || Variables[1] (UnusedUnderThisBase_109) || MUL || Constants[0] (0.25) || MUL || RETURN",
                      "displayLines": "((_MaxHP * UnusedUnderThisBase_109) * 0.25)",
                      "constants": [
                        0.25
                      ],
                      "variables": [
                        "_MaxHP",
                        "UnusedUnderThisBase_109"
                      ]
                    },
                    "dmgFormulaFinal": "Converted DMG Base",
                    "Toughness": null,
                    "Tags": null,
                    "behaviorTag": "DirectlyLoseHpHit",
                    "attackType": "Basic ATK",
                    "EnergyGainPercent": "25%"
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
            "target": "{{Hostile Entities(AOE)}}"
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Enemy_W4_Pollux_IF_AbilityP01_NegativeBlood_Target_LockHP",
                "invertCondition": true
              },
              "failed": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "_MaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "DamageFlat": {
                      "operator": "Variables[0] (_MaxHP) || Variables[1] (UnusedUnderThisBase_109) || MUL || Constants[0] (0.25) || MUL || RETURN",
                      "displayLines": "((_MaxHP * UnusedUnderThisBase_109) * 0.25)",
                      "constants": [
                        0.25
                      ],
                      "variables": [
                        "_MaxHP",
                        "UnusedUnderThisBase_109"
                      ]
                    },
                    "dmgFormulaFinal": "Converted DMG Base",
                    "Toughness": null,
                    "Tags": null,
                    "behaviorTag": "DirectlyLoseHpHit",
                    "attackType": "Basic ATK",
                    "EnergyGainPercent": "25%"
                  }
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "Enemy_W4_Pollux_IF_ThirstBlood[<span class=\"descriptionNumberColor\">Hastened Death</span>]",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Enemy_W4_Pollux_IF_ThirstBlood[<span class=\"descriptionNumberColor\">Hastened Death</span>]",
              "valuePerStack": {
                "MDF_DamagePercentage": {
                  "operator": "Variables[0] (UnusedUnderThisBase_86) || RETURN",
                  "displayLines": "UnusedUnderThisBase_86",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_86"
                  ]
                },
                "MDF_DamageHpAddedRatio": {
                  "operator": "Variables[0] (UnusedUnderThisBase_87) || RETURN",
                  "displayLines": "UnusedUnderThisBase_87",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_87"
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
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "Enemy_W4_Pollux_IF_AbilityP01_NegativeBlood_Target_LockHP"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W4_Pollux_FX_Ground"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_APShow"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "IsNeedFade",
          "value": 0
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4012077_Monster_W4_Pollux_IF_Ability06_Part01": {
      "fileName": "4012077_Monster_W4_Pollux_IF_Ability06_Part01",
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
          "ability": "Monster_W4_Pollux_IF_Ability06_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4012077_Monster_W4_Pollux_IF_Ability05_Part02": {
      "fileName": "4012077_Monster_W4_Pollux_IF_Ability05_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": ">=",
                "value2": 2
              },
              {
                "name": "Enemy ID",
                "ID": 4014033,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Castorice, Hand of Shadow",
                "isBaseCompare": true
              }
            ]
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Enemy_W4_Pollux_IF_UltraReadyMark"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "AIFlag",
              "value": 3
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
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}.[[removeMemosprite]]"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHP) || Variables[1] (UnusedUnderThisBase_108) || MUL || Constants[0] (0.125) || MUL || RETURN",
                  "displayLines": "((_MaxHP * UnusedUnderThisBase_108) * 0.125)",
                  "constants": [
                    0.125
                  ],
                  "variables": [
                    "_MaxHP",
                    "UnusedUnderThisBase_108"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK",
                "EnergyGainPercent": "12.5%"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}.[[removeMemosprite]]"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHP) || Variables[1] (UnusedUnderThisBase_108) || MUL || Constants[0] (0.125) || MUL || RETURN",
                  "displayLines": "((_MaxHP * UnusedUnderThisBase_108) * 0.125)",
                  "constants": [
                    0.125
                  ],
                  "variables": [
                    "_MaxHP",
                    "UnusedUnderThisBase_108"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK",
                "EnergyGainPercent": "12.5%"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}.[[removeMemosprite]]"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHP) || Variables[1] (UnusedUnderThisBase_108) || MUL || Constants[0] (0.125) || MUL || RETURN",
                  "displayLines": "((_MaxHP * UnusedUnderThisBase_108) * 0.125)",
                  "constants": [
                    0.125
                  ],
                  "variables": [
                    "_MaxHP",
                    "UnusedUnderThisBase_108"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK",
                "EnergyGainPercent": "12.5%"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}.[[removeMemosprite]]"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHP) || Variables[1] (UnusedUnderThisBase_108) || MUL || Constants[0] (0.125) || MUL || RETURN",
                  "displayLines": "((_MaxHP * UnusedUnderThisBase_108) * 0.125)",
                  "constants": [
                    0.125
                  ],
                  "variables": [
                    "_MaxHP",
                    "UnusedUnderThisBase_108"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK",
                "EnergyGainPercent": "12.5%"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}.[[removeMemosprite]]"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHP) || Variables[1] (UnusedUnderThisBase_108) || MUL || Constants[0] (0.125) || MUL || RETURN",
                  "displayLines": "((_MaxHP * UnusedUnderThisBase_108) * 0.125)",
                  "constants": [
                    0.125
                  ],
                  "variables": [
                    "_MaxHP",
                    "UnusedUnderThisBase_108"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK",
                "EnergyGainPercent": "12.5%"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}.[[removeMemosprite]]"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHP) || Variables[1] (UnusedUnderThisBase_108) || MUL || Constants[0] (0.125) || MUL || RETURN",
                  "displayLines": "((_MaxHP * UnusedUnderThisBase_108) * 0.125)",
                  "constants": [
                    0.125
                  ],
                  "variables": [
                    "_MaxHP",
                    "UnusedUnderThisBase_108"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK",
                "EnergyGainPercent": "12.5%"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}.[[removeMemosprite]]"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHP) || Variables[1] (UnusedUnderThisBase_108) || MUL || Constants[0] (0.125) || MUL || RETURN",
                  "displayLines": "((_MaxHP * UnusedUnderThisBase_108) * 0.125)",
                  "constants": [
                    0.125
                  ],
                  "variables": [
                    "_MaxHP",
                    "UnusedUnderThisBase_108"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK",
                "EnergyGainPercent": "12.5%"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}.[[removeMemosprite]]"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHP) || Variables[1] (UnusedUnderThisBase_108) || MUL || Constants[0] (0.125) || MUL || RETURN",
                  "displayLines": "((_MaxHP * UnusedUnderThisBase_108) * 0.125)",
                  "constants": [
                    0.125
                  ],
                  "variables": [
                    "_MaxHP",
                    "UnusedUnderThisBase_108"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK",
                "EnergyGainPercent": "12.5%"
              }
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 2
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team(Exclude Memosprites)}}"
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "Enemy_W4_Pollux_IF_ThirstBlood[<span class=\"descriptionNumberColor\">Hastened Death</span>]",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Enemy_W4_Pollux_IF_ThirstBlood[<span class=\"descriptionNumberColor\">Hastened Death</span>]",
              "valuePerStack": {
                "MDF_DamagePercentage": {
                  "operator": "Variables[0] (UnusedUnderThisBase_86) || RETURN",
                  "displayLines": "UnusedUnderThisBase_86",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_86"
                  ]
                },
                "MDF_DamageHpAddedRatio": {
                  "operator": "Variables[0] (UnusedUnderThisBase_87) || RETURN",
                  "displayLines": "UnusedUnderThisBase_87",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_87"
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
          "modifier": "Enemy_W4_Pollux_IF_Strengthen[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]",
          "valuePerStack": {
            "MDF_ShowValue1": {
              "operator": "Variables[0] (UnusedUnderThisBase_81) || RETURN",
              "displayLines": "UnusedUnderThisBase_81",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_81"
              ]
            },
            "MDF_SpeedUpRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_81) || RETURN",
              "displayLines": "UnusedUnderThisBase_81",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_81"
              ]
            }
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "Enemy_W4_PolluxPart_IF_Reflex[<span class=\"descriptionNumberColor\">Corrosive Retaliation</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "Enemy_W4_PolluxPart_IF_Link"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "target2": {
              "name": "Target Name",
              "target": "{{Current Turn Owner}}"
            }
          },
          "passed": [
            {
              "name": "Assign Advance/Delay to Current Ability Use",
              "adjustmentValue": {
                "operator": "Variables[0] (_Skill05_ActionDelay) || RETURN",
                "displayLines": "_Skill05_ActionDelay",
                "constants": [],
                "variables": [
                  "_Skill05_ActionDelay"
                ]
              },
              "adjustmentType": "="
            },
            {
              "name": "Action Advance/Delay",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "advanceType": "Set",
              "multiAdd": "(_Skill05_ActionDelay - 1)"
            }
          ],
          "failed": [
            {
              "name": "Action Advance/Delay",
              "advanceType": "Set",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "multiBase": {
                "operator": "Variables[0] (_Skill05_ActionDelay) || RETURN",
                "displayLines": "_Skill05_ActionDelay",
                "constants": [],
                "variables": [
                  "_Skill05_ActionDelay"
                ]
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 2
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "OneMorePerTurn"
            }
          ]
        }
      ],
      "references": []
    },
    "4012077_Monster_W4_Pollux_IF_Ability05_Part01": {
      "fileName": "4012077_Monster_W4_Pollux_IF_Ability05_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "_ReadyToCharge",
          "value": 0
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "ability": "Monster_W4_Pollux_IF_Ability05_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "onAbort": [
        {
          "name": "Define Custom Variable",
          "variableName": "_ReadyToCharge",
          "value": 0
        }
      ],
      "references": []
    },
    "4012077_Monster_W4_Pollux_IF_Ability04_Part02": {
      "fileName": "4012077_Monster_W4_Pollux_IF_Ability04_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "flagName": "Break"
          },
          "ifTargetFound": [
            {
              "name": "Exit Broken-State",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            },
            {
              "name": "Reset Toughness",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            },
            {
              "name": "Action Advance/Delay",
              "advanceType": "Set",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "set": 0
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4012077_Monster_W4_Pollux_IF_Ability04_Part01": {
      "fileName": "4012077_Monster_W4_Pollux_IF_Ability04_Part01",
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
          "ability": "Monster_W4_Pollux_IF_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4012077_Monster_W4_Pollux_IF_Ability03_Part02": {
      "fileName": "4012077_Monster_W4_Pollux_IF_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "flagName": "Taunt",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 3,
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Monster_W4_Pollux_Ability03_Mark"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemies by Aggro}}"
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
                  "modifier": "Monster_W4_Pollux_Ability03_Mark"
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 2,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Monster_W4_Pollux_Ability03_Mark",
                "invertCondition": true
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Monster_W4_Pollux_Ability03_Mark"
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
              "target": "{{Pollox Mourning Departed Target}}"
            },
            "compareType": "=",
            "value2": 1,
            "livingTargets": true
          },
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count",
                "target": {
                  "name": "Target Name",
                  "target": "{{Pollox Mourning Departed Target}}"
                },
                "compareType": "=",
                "value2": 2,
                "livingTargets": true
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target Count",
            "target": {
              "name": "Target Name",
              "target": "{{Pollox Mourning Departed Target}}"
            },
            "compareType": "=",
            "value2": 1,
            "livingTargets": true
          },
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count",
                "target": {
                  "name": "Target Name",
                  "target": "{{Pollox Mourning Departed Target}}"
                },
                "compareType": "=",
                "value2": 2,
                "livingTargets": true
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Pollox Mourning Departed Target}}"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHP) || Variables[1] (UnusedUnderThisBase_64) || MUL || Constants[0] (0.15) || MUL || RETURN",
                  "displayLines": "((_MaxHP * UnusedUnderThisBase_64) * 0.15)",
                  "constants": [
                    0.15
                  ],
                  "variables": [
                    "_MaxHP",
                    "UnusedUnderThisBase_64"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK",
                "EnergyGainPercent": "15%"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Pollox Mourning Departed Target}}"
          },
          "ifTargetFound": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Pollox Mourning Departed Target}}"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Pollox Mourning Departed Target}}"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHP) || Variables[1] (UnusedUnderThisBase_64) || MUL || Constants[0] (0.15) || MUL || RETURN",
                  "displayLines": "((_MaxHP * UnusedUnderThisBase_64) * 0.15)",
                  "constants": [
                    0.15
                  ],
                  "variables": [
                    "_MaxHP",
                    "UnusedUnderThisBase_64"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK",
                "EnergyGainPercent": "15%"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Pollox Mourning Departed Target}}"
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Pollox Mourning Departed Target}}"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHP) || Variables[1] (UnusedUnderThisBase_64) || MUL || Constants[0] (0.15) || MUL || RETURN",
                  "displayLines": "((_MaxHP * UnusedUnderThisBase_64) * 0.15)",
                  "constants": [
                    0.15
                  ],
                  "variables": [
                    "_MaxHP",
                    "UnusedUnderThisBase_64"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK",
                "EnergyGainPercent": "15%"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Pollox Mourning Departed Target}}"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHP) || Variables[1] (UnusedUnderThisBase_64) || MUL || Constants[0] (0.15) || MUL || RETURN",
                  "displayLines": "((_MaxHP * UnusedUnderThisBase_64) * 0.15)",
                  "constants": [
                    0.15
                  ],
                  "variables": [
                    "_MaxHP",
                    "UnusedUnderThisBase_64"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK",
                "EnergyGainPercent": "15%"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Pollox Mourning Departed Target}}"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHP) || Variables[1] (UnusedUnderThisBase_64) || MUL || Constants[0] (0.15) || MUL || RETURN",
                  "displayLines": "((_MaxHP * UnusedUnderThisBase_64) * 0.15)",
                  "constants": [
                    0.15
                  ],
                  "variables": [
                    "_MaxHP",
                    "UnusedUnderThisBase_64"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK",
                "EnergyGainPercent": "15%"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Pollox Mourning Departed Target}}"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHP) || Variables[1] (UnusedUnderThisBase_64) || MUL || Constants[0] (0.25) || MUL || RETURN",
                  "displayLines": "((_MaxHP * UnusedUnderThisBase_64) * 0.25)",
                  "constants": [
                    0.25
                  ],
                  "variables": [
                    "_MaxHP",
                    "UnusedUnderThisBase_64"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK",
                "EnergyGainPercent": "25%"
              }
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Pollox Mourning Departed Target}}"
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "Enemy_W4_Pollux_IF_ThirstBlood[<span class=\"descriptionNumberColor\">Hastened Death</span>]",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Enemy_W4_Pollux_IF_ThirstBlood[<span class=\"descriptionNumberColor\">Hastened Death</span>]",
              "valuePerStack": {
                "MDF_DamagePercentage": {
                  "operator": "Variables[0] (UnusedUnderThisBase_86) || RETURN",
                  "displayLines": "UnusedUnderThisBase_86",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_86"
                  ]
                },
                "MDF_DamageHpAddedRatio": {
                  "operator": "Variables[0] (UnusedUnderThisBase_87) || RETURN",
                  "displayLines": "UnusedUnderThisBase_87",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_87"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "TaskList_Monster_W4_Pollux_IF_Strengthen_EggAbsorb_FX"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "TaskList_Monster_W4_Pollux_IF_Strengthen_EggAbsorb"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "Monster_W4_Pollux_Ability03_Mark"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4012077_Monster_W4_Pollux_IF_Ability03_Part01": {
      "fileName": "4012077_Monster_W4_Pollux_IF_Ability03_Part01",
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
          "ability": "Monster_W4_Pollux_IF_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4012077_Monster_W4_Pollux_IF_Ability02_Part02": {
      "fileName": "4012077_Monster_W4_Pollux_IF_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Define Custom Variable with Team Count",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "variableName": "_PlayerNum",
          "livingTargets": true
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill02[0]]}) || Variables[1] (_PlayerNum) || DIV || RETURN",
              "displayLines": "({[Skill02[0]]} / _PlayerNum)",
              "constants": [],
              "variables": [
                "{[Skill02[0]]}",
                "_PlayerNum"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
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
            "modifier": "Enemy_W4_Pollux_IF_Strengthen[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]"
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "ifTargetFound": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "_MaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "DamageFlat": {
                      "operator": "Variables[0] (_MaxHP) || Variables[1] (UnusedUnderThisBase_89) || MUL || RETURN",
                      "displayLines": "(_MaxHP * UnusedUnderThisBase_89)",
                      "constants": [],
                      "variables": [
                        "_MaxHP",
                        "UnusedUnderThisBase_89"
                      ]
                    },
                    "dmgFormulaFinal": "Converted DMG Base",
                    "Toughness": null,
                    "Tags": null,
                    "behaviorTag": "DirectlyLoseHpHit",
                    "attackType": "Basic ATK"
                  }
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "Enemy_W4_Pollux_IF_ThirstBlood[<span class=\"descriptionNumberColor\">Hastened Death</span>]",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Enemy_W4_Pollux_IF_ThirstBlood[<span class=\"descriptionNumberColor\">Hastened Death</span>]",
              "valuePerStack": {
                "MDF_DamagePercentage": {
                  "operator": "Variables[0] (UnusedUnderThisBase_86) || RETURN",
                  "displayLines": "UnusedUnderThisBase_86",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_86"
                  ]
                },
                "MDF_DamageHpAddedRatio": {
                  "operator": "Variables[0] (UnusedUnderThisBase_87) || RETURN",
                  "displayLines": "UnusedUnderThisBase_87",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_87"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "TaskList_Monster_W4_Pollux_IF_Strengthen_EggAbsorb_FX"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "TaskList_Monster_W4_Pollux_IF_Strengthen_EggAbsorb"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4012077_Monster_W4_Pollux_IF_Ability02_Part01": {
      "fileName": "4012077_Monster_W4_Pollux_IF_Ability02_Part01",
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
          "ability": "Monster_W4_Pollux_IF_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4012077_Monster_W4_Pollux_IF_Ability01_Part02": {
      "fileName": "4012077_Monster_W4_Pollux_IF_Ability01_Part02",
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
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "Enemy_W4_Pollux_IF_Strengthen[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]"
          },
          "passed": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "variableName": "_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHP) || Variables[1] (UnusedUnderThisBase_88) || MUL || RETURN",
                  "displayLines": "(_MaxHP * UnusedUnderThisBase_88)",
                  "constants": [],
                  "variables": [
                    "_MaxHP",
                    "UnusedUnderThisBase_88"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK"
              }
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Enemy_W4_Pollux_IF_ThirstBlood[<span class=\"descriptionNumberColor\">Hastened Death</span>]",
                "invertCondition": true
              },
              {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Player Team"
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Enemy_W4_Pollux_IF_ThirstBlood[<span class=\"descriptionNumberColor\">Hastened Death</span>]",
              "valuePerStack": {
                "MDF_DamagePercentage": {
                  "operator": "Variables[0] (UnusedUnderThisBase_86) || RETURN",
                  "displayLines": "UnusedUnderThisBase_86",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_86"
                  ]
                },
                "MDF_DamageHpAddedRatio": {
                  "operator": "Variables[0] (UnusedUnderThisBase_87) || RETURN",
                  "displayLines": "UnusedUnderThisBase_87",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_87"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "TaskList_Monster_W4_Pollux_IF_Strengthen_EggAbsorb_FX"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "TaskList_Monster_W4_Pollux_IF_Strengthen_EggAbsorb"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4012077_Monster_W4_Pollux_IF_Ability01_Part01": {
      "fileName": "4012077_Monster_W4_Pollux_IF_Ability01_Part01",
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
          "ability": "Monster_W4_Pollux_IF_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4012077_Modifiers": {
      "fileName": "4012077_Modifiers",
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
          "for": "Enemy_W4_Pollux_IF_ThirstBlood[<span class=\"descriptionNumberColor\">Hastened Death</span>]",
          "stackType": "Replace",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "STAT_DOT"
          ],
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP",
                    "compareType": ">",
                    "value2": 0
                  }
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_TargetMaxHp",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_TargetCurrentHp",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "Damage": {
                      "operator": "Variables[0] (MDF_DamagePercentage) || Constants[0] (1) || Variables[1] (_TargetCurrentHp) || Variables[2] (_TargetMaxHp) || DIV || Variables[3] (MDF_DamageHpAddedRatio) || MUL || ADD || MUL || RETURN",
                      "displayLines": "(MDF_DamagePercentage * (1 + ((_TargetCurrentHp / _TargetMaxHp) * MDF_DamageHpAddedRatio)))",
                      "constants": [
                        1
                      ],
                      "variables": [
                        "MDF_DamagePercentage",
                        "_TargetCurrentHp",
                        "_TargetMaxHp",
                        "MDF_DamageHpAddedRatio"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_TargetMaxHp",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_TargetCurrentHp",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "Damage": {
                      "operator": "Variables[0] (MDF_DamagePercentage) || Constants[0] (1) || Variables[1] (_TargetCurrentHp) || Variables[2] (_TargetMaxHp) || DIV || Variables[3] (MDF_DamageHpAddedRatio) || MUL || ADD || MUL || RETURN",
                      "displayLines": "(MDF_DamagePercentage * (1 + ((_TargetCurrentHp / _TargetMaxHp) * MDF_DamageHpAddedRatio)))",
                      "constants": [
                        1
                      ],
                      "variables": [
                        "MDF_DamagePercentage",
                        "_TargetCurrentHp",
                        "_TargetMaxHp",
                        "MDF_DamageHpAddedRatio"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "stackData": [
            "MDF_DamagePercentage",
            "MDF_DamageHpAddedRatio"
          ],
          "latentQueue": [],
          "description": "Receives DMG at the start of the turn. The higher the target's current HP percentage, the more DMG they receive.",
          "type": "Debuff",
          "effectName": "DoT",
          "statusName": "Hastened Death",
          "stackLimit": 1,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W4_Pollux_IF_PartController_LockHP",
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
                    "value1": "InsertCheck",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "StunCheck",
                        "compareType": "=",
                        "value2": 0
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Enemy_W4_Pollux_Endurance"
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
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
                      "abilityName": "Monster_W4_Pollux_IF_PassiveAbility_Insert",
                      "priorityTag": "MonsterChangePhase",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
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
          "for": "Enemy_W4_Pollux_IF_AbilityP01_Part02_Weakness",
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
                  "action": "Attach",
                  "valueList": [
                    "Ice",
                    "Quantum"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_W4_Pollux_IF_AbilityP01_Part01_Weakness",
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
                  "action": "Attach",
                  "valueList": [
                    "Wind",
                    "Imaginary"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_W4_Pollux_IF_AbilityP01_WeaknessControl",
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
                  "valueList": []
                }
              ]
            },
            {
              "eventTrigger": "Weakness Break [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Monster_W4_PolluxPart_L"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}} + {{Pollux Right Tentacle}}"
                      },
                      "modifier": "Enemy_W4_Pollux_IF_AbilityP01_Part01_Weakness"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Monster_W4_PolluxPart_R"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}} + {{Pollux Left Tentacle}}"
                      },
                      "modifier": "Enemy_W4_Pollux_IF_AbilityP01_Part02_Weakness"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "End Broken State [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Monster_W4_PolluxPart_L"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "modifier": "Enemy_W4_Pollux_IF_AbilityP01_Part01_Weakness"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Monster_W4_PolluxPart_R"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "modifier": "Enemy_W4_Pollux_IF_AbilityP01_Part02_Weakness"
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
          "for": "Enemy_W4_Pollux_IF_HintToastController",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "UI Display Event",
                  "popUpText": "Break the summons to weaken the boss"
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
                    "modifier": "Enemy_W4_Pollux_IF_Strengthen[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]"
                  },
                  "passed": [
                    {
                      "name": "UI Display Event",
                      "popUpText": "Clear Desperate Bubbles to defeat the boss"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "Enemy_W4_Pollux_IF_BloodPool[<span class=\"descriptionNumberColor\">Dream of Demise</span>]"
                  },
                  "passed": [
                    {
                      "name": "UI Display Event",
                      "popUpText": "Break the summons to weaken the boss"
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
                    "modifier": "Enemy_W4_Pollux_IF_Strengthen[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]"
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "Enemy_W4_Pollux_IF_AbilityP01_NegativeBlood_Target_Display[<span class=\"descriptionNumberColor\">Death Rattle</span>]"
                  },
                  "passed": [
                    {
                      "name": "UI Display Event",
                      "popUpText": "Break summons to get healing rewards"
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
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Modifier Was",
                        "modifier": "Enemy_W4_Pollux_IF_AbilityP01_NegativeBlood_Target_Display[<span class=\"descriptionNumberColor\">Death Rattle</span>]"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Player Team All}}"
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
                          "modifier": "Enemy_W4_Pollux_IF_AbilityP01_NegativeBlood_Target_Display[<span class=\"descriptionNumberColor\">Death Rattle</span>]"
                        }
                      }
                    ]
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
          "for": "Enemy_W4_PolluxPart_IF_Shield[<span class=\"descriptionNumberColor\">Overdue Obituary</span>]",
          "stackType": "Replace",
          "modifierFlags": [
            "Endurance"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Resistance",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "STAT_CTRL",
                  "value": 1
                },
                {
                  "name": "Exit Broken-State",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "Reset Toughness",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "Remove Modifier Behavior Flag(s)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "flagNames": []
                }
              ]
            }
          ],
          "description": "\"The Living Shan't Flee\" enhances to \"The Dead Shan't Avoid.\"",
          "type": "Other",
          "effectName": "Enhance",
          "statusName": "Overdue Obituary"
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_W4_Pollux_IF_AbilityEX04",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_W4_Pollux_IF_AbilityEX03",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_W4_Pollux_IF_AbilityEX02",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_W4_Pollux_IF_AbilityEX01",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_W4_PolluxPart_IF_Status",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 0.0000010000076
                }
              ]
            },
            {
              "eventTrigger": "Deal Damage End [Owner]: Any",
              "execute": [
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
                        "modifier": "Enemy_W4_Pollux_IF_ThirstBlood[<span class=\"descriptionNumberColor\">Hastened Death</span>]",
                        "invertCondition": true
                      },
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Player Team"
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
                      "modifier": "Enemy_W4_Pollux_IF_ThirstBlood[<span class=\"descriptionNumberColor\">Hastened Death</span>]",
                      "valuePerStack": {
                        "MDF_DamagePercentage": {
                          "operator": "Variables[0] (ThirstBlood_Dot_DamagePercentage) || RETURN",
                          "displayLines": "ThirstBlood_Dot_DamagePercentage",
                          "constants": [],
                          "variables": [
                            "ThirstBlood_Dot_DamagePercentage"
                          ]
                        },
                        "MDF_DamageHpAddedRatio": {
                          "operator": "Variables[0] (ThirstBlood_DamageHpAddedRatio) || RETURN",
                          "displayLines": "ThirstBlood_DamageHpAddedRatio",
                          "constants": [],
                          "variables": [
                            "ThirstBlood_DamageHpAddedRatio"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Copy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "variable": "#SkillP02_P1_ThirstBlood_DamageHpAddedRatio",
                  "target2": null,
                  "variable2": "ThirstBlood_DamageHpAddedRatio"
                },
                {
                  "name": "Define Custom Variable with Copy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "variable": "#SkillP02_P2_ThirstBlood_Dot_DamagePercentage",
                  "target2": null,
                  "variable2": "ThirstBlood_Dot_DamagePercentage"
                }
              ]
            },
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "Enemy_W4_PolluxPart_IF_Shield[<span class=\"descriptionNumberColor\">Overdue Obituary</span>]"
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
          "for": "Enemy_W4_Pollux_IF_BloodPool[<span class=\"descriptionNumberColor\">Dream of Demise</span>]",
          "stackData": [],
          "latentQueue": [],
          "description": "When ally targets' HP reduces, accumulates \"Desperate Bubble.\" When \"Desperate Bubble\" reaches the limit, this unit enters the \"Fragrance of Death\" state.",
          "type": "Other",
          "statusName": "Dream of Demise"
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_W4_Pollux_IF_EnterBattle",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "silent": true,
                  "toRemove": [
                    "STAT_CTRL"
                  ]
                },
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W4_Pollux_IF_AbilityP01_Insert01_Part01",
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "priorityTag": "MonsterBattleCry",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
                }
              ],
              "priorityLevel": -45
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_W4_Pollux_IF_Strengthen_Break",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "StunCheck",
                  "value": 0
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Enemy_W4_Pollux_IF_Strengthen_BreakMark"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Minions of Modifier Holder}}"
                  },
                  "modifier": "Enemy_W4_PolluxPart_IF_Link"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Enemy_W4_Pollux_IF_BloodPool[<span class=\"descriptionNumberColor\">Dream of Demise</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Minions of Modifier Holder}}"
                  },
                  "modifier": "Enemy_W4_PolluxPart_IF_Reflex[<span class=\"descriptionNumberColor\">Corrosive Retaliation</span>]",
                  "valuePerStack": {
                    "MDF_ReflexDamageValue": {
                      "operator": "Variables[0] (UnusedUnderThisBase_102) || RETURN",
                      "displayLines": "UnusedUnderThisBase_102",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_102"
                      ]
                    }
                  }
                },
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
              "eventTrigger": "End Broken State [Owner]",
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
          "for": "Enemy_W4_Pollux_IF_Strengthen_BreakMark",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Current Turn Owner}}"
                        }
                      },
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Minions of Modifier Holder}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Current Turn Owner}}"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
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
                          "target": "{{Modifier Holder}}"
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
              ]
            },
            {
              "eventTrigger": "Attack Action Completed [Anyone]",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
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
                      "target": "{{Modifier Holder}}"
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
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_W4_Pollux_IF_Strengthen_Shield",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
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
                        "value1": "MDF_CurrentShieldValue",
                        "compareType": "<=",
                        "value2": 0
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "Break",
                        "justAddedOrLiving": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Change Character Transformation",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "phase": "Phase2"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "StunCheck",
                      "value": 1
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Enemy_W4_Pollux_IF_Strengthen_BreakMark"
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W4_Pollux_IF_Stun_Insert",
                      "priorityTag": "MonsterForceKill",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    }
                  ]
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
                  "assignState": "False"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Enemy_W4_Pollux_IF_Strengthen[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]"
                }
              ]
            },
            {
              "eventTrigger": "Take Damage Start [Anyone]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      },
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Caster's Minions}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "mustBeAlive2": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Damage Data",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_AttackDamageData",
                      "context": "ContextModifier"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_CurrentShieldValue",
                      "value": {
                        "operator": "Variables[0] (MDF_CurrentShieldValue) || Variables[1] (MDF_AttackDamageData) || SUB || RETURN",
                        "displayLines": "(MDF_CurrentShieldValue - MDF_AttackDamageData)",
                        "constants": [],
                        "variables": [
                          "MDF_CurrentShieldValue",
                          "MDF_AttackDamageData"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_LastEnergyBarValue",
                      "value": {
                        "operator": "Variables[0] (MDF_EnergyBarValue) || RETURN",
                        "displayLines": "MDF_EnergyBarValue",
                        "constants": [],
                        "variables": [
                          "MDF_EnergyBarValue"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "_IsAttack",
                            "compareType": "=",
                            "value2": 1
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "MDF_LastEnergyBarValue_RLCheck",
                            "compareType": "=",
                            "value2": 0
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_LastEnergyBarValue_RL",
                          "value": {
                            "operator": "Variables[0] (MDF_EnergyBarValue) || RETURN",
                            "displayLines": "MDF_EnergyBarValue",
                            "constants": [],
                            "variables": [
                              "MDF_EnergyBarValue"
                            ]
                          }
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_LastEnergyBarValue_RLCheck",
                          "value": 1
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
                            "value1": "MDF_CurrentShieldValue",
                            "compareType": "<=",
                            "value2": 0
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "Modifier_StageSpecialAbility_10441065_OnPollux",
                            "invertCondition": true
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_EnergyBarValue",
                          "value": 0
                        },
                        {
                          "name": "Heal",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Player Team All}}"
                          },
                          "healPercent": {
                            "operator": "Variables[0] (MDF_LastEnergyBarValue_RL) || Variables[1] (MDF_EnergyBarValue) || SUB || Variables[2] (MDF_ShieldAttack_HealRatio) || MUL || RETURN",
                            "displayLines": "((MDF_LastEnergyBarValue_RL - MDF_EnergyBarValue) * MDF_ShieldAttack_HealRatio)",
                            "constants": [],
                            "variables": [
                              "MDF_LastEnergyBarValue_RL",
                              "MDF_EnergyBarValue",
                              "MDF_ShieldAttack_HealRatio"
                            ]
                          },
                          "formula": "Heal from Target MaxHP"
                        },
                        "Modifier Deletes Itself"
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_EnergyBarValue",
                          "value": {
                            "operator": "Variables[0] (MDF_CurrentShieldValue) || Variables[1] (MDF_MaxShieldValue) || DIV || RETURN",
                            "displayLines": "(MDF_CurrentShieldValue / MDF_MaxShieldValue)",
                            "constants": [],
                            "variables": [
                              "MDF_CurrentShieldValue",
                              "MDF_MaxShieldValue"
                            ]
                          }
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "OR",
                            "conditionList": [
                              {
                                "name": "Compare: Variable",
                                "value1": "_IsAttack",
                                "compareType": "=",
                                "value2": 0
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Heal",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Player Team All}}"
                              },
                              "healPercent": {
                                "operator": "Variables[0] (MDF_LastEnergyBarValue_RL) || Variables[1] (MDF_EnergyBarValue) || SUB || Variables[2] (MDF_ShieldAttack_HealRatio) || MUL || RETURN",
                                "displayLines": "((MDF_LastEnergyBarValue_RL - MDF_EnergyBarValue) * MDF_ShieldAttack_HealRatio)",
                                "constants": [],
                                "variables": [
                                  "MDF_LastEnergyBarValue_RL",
                                  "MDF_EnergyBarValue",
                                  "MDF_ShieldAttack_HealRatio"
                                ]
                              },
                              "formula": "Heal from Target MaxHP"
                            }
                          ]
                        },
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (MDF_EnergyBarValue) || RETURN",
                            "displayLines": "MDF_EnergyBarValue",
                            "constants": [],
                            "variables": [
                              "MDF_EnergyBarValue"
                            ]
                          },
                          "entityClass": "Enemy",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "maximum": 1
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
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_SummonerMaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_MaxShieldValue",
                  "value": {
                    "operator": "Variables[0] (MDF_SummonerMaxHP) || Variables[1] (MDF_ShieldPercentage) || MUL || RETURN",
                    "displayLines": "(MDF_SummonerMaxHP * MDF_ShieldPercentage)",
                    "constants": [],
                    "variables": [
                      "MDF_SummonerMaxHP",
                      "MDF_ShieldPercentage"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_CurrentShieldValue",
                  "value": {
                    "operator": "Variables[0] (MDF_MaxShieldValue) || RETURN",
                    "displayLines": "MDF_MaxShieldValue",
                    "constants": [],
                    "variables": [
                      "MDF_MaxShieldValue"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_EnergyBarValue",
                  "value": 1
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (MDF_EnergyBarValue) || RETURN",
                    "displayLines": "MDF_EnergyBarValue",
                    "constants": [],
                    "variables": [
                      "MDF_EnergyBarValue"
                    ]
                  },
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "maximum": {
                    "operator": "Variables[0] (MDF_EnergyBarValue) || RETURN",
                    "displayLines": "MDF_EnergyBarValue",
                    "constants": [],
                    "variables": [
                      "MDF_EnergyBarValue"
                    ]
                  },
                  "assignState": "True",
                  "state": "Active",
                  "trigger": "SpEff_Trigger"
                }
              ]
            },
            {
              "eventTrigger": "Attack Start [Anyone]",
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
                      "name": "Define Custom Variable",
                      "variableName": "_IsAttack",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Anyone]",
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
                      "name": "Define Custom Variable",
                      "variableName": "_IsAttack",
                      "value": 0
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "MDF_LastEnergyBarValue_RL",
                            "compareType": ">=",
                            "value2": {
                              "operator": "Variables[0] (MDF_EnergyBarValue) || RETURN",
                              "displayLines": "MDF_EnergyBarValue",
                              "constants": [],
                              "variables": [
                                "MDF_EnergyBarValue"
                              ]
                            }
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "MDF_LastEnergyBarValue_RLCheck",
                            "compareType": "=",
                            "value2": 1
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Heal",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Player Team All}}"
                          },
                          "healPercent": {
                            "operator": "Variables[0] (MDF_LastEnergyBarValue) || Variables[1] (MDF_EnergyBarValue) || SUB || Variables[2] (MDF_ShieldAttack_HealRatio) || MUL || RETURN",
                            "displayLines": "((MDF_LastEnergyBarValue - MDF_EnergyBarValue) * MDF_ShieldAttack_HealRatio)",
                            "constants": [],
                            "variables": [
                              "MDF_LastEnergyBarValue",
                              "MDF_EnergyBarValue",
                              "MDF_ShieldAttack_HealRatio"
                            ]
                          },
                          "formula": "Heal from Target MaxHP"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_LastEnergyBarValue_RLCheck",
                          "value": 0
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
          "for": "Enemy_W4_Pollux_IF_Strengthen[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Standard_Monster_AllDamageReduce[<span class=\"descriptionNumberColor\">DMG Mitigation</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Monster_Standard_WeakControl[<span class=\"descriptionNumberColor\">Toughness Protection</span>]"
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "entityClass": "Enemy",
                  "assignState": "False"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Enemy_W4_Pollux_IF_BloodPool[<span class=\"descriptionNumberColor\">Dream of Demise</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Enemy_W4_Pollux_IF_Strengthen_Shield",
                  "valuePerStack": {
                    "MDF_ShieldPercentage": {
                      "operator": "Variables[0] (UnusedUnderThisBase_112) || RETURN",
                      "displayLines": "UnusedUnderThisBase_112",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_112"
                      ]
                    },
                    "MDF_ShieldAttack_HealRatio": {
                      "operator": "Variables[0] (UnusedUnderThisBase_111) || RETURN",
                      "displayLines": "UnusedUnderThisBase_111",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_111"
                      ]
                    }
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": ">=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Monster_APShow"
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Monster_W4_Pollux_Strengthen_SpeedAdded",
                  "valuePerStack": {
                    "MDF_ShowValue1": {
                      "operator": "Variables[0] (MDF_ShowValue1) || RETURN",
                      "displayLines": "MDF_ShowValue1",
                      "constants": [],
                      "variables": [
                        "MDF_ShowValue1"
                      ]
                    }
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
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
                        "value2": 100,
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
                      "name": "Define Custom Variable",
                      "variableName": "AIFlag",
                      "value": 1
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Enemy_W4_Pollux_IF_Strengthen_Shield"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Monster_W4_Pollux_Strengthen_SpeedAdded"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Monster_APShow"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_EnergyValue",
                  "value": 0
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (_EnergyValue) || RETURN",
                    "displayLines": "_EnergyValue",
                    "constants": [],
                    "variables": [
                      "_EnergyValue"
                    ]
                  },
                  "entityClass": "Enemy",
                  "maximum": 1,
                  "assignState": "True",
                  "state": "Normal",
                  "trigger": "SpEff_Trigger"
                }
              ]
            },
            {
              "eventTrigger": "Turn [Action-End Phase]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_ShowValue1",
                  "value": {
                    "operator": "Variables[0] (MDF_ShowValue1) || Variables[1] (MDF_SpeedUpRatio) || ADD || RETURN",
                    "displayLines": "(MDF_ShowValue1 + MDF_SpeedUpRatio)",
                    "constants": [],
                    "variables": [
                      "MDF_ShowValue1",
                      "MDF_SpeedUpRatio"
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Monster_W4_Pollux_Strengthen_SpeedAdded",
                  "valuePerStack": {
                    "MDF_ShowValue1": {
                      "operator": "Variables[0] (MDF_ShowValue1) || RETURN",
                      "displayLines": "MDF_ShowValue1",
                      "constants": [],
                      "variables": [
                        "MDF_ShowValue1"
                      ]
                    }
                  }
                }
              ]
            },
            {
              "eventTrigger": "Pre-Death [Owner]"
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [
            "MDF_ShowValue1",
            "MDF_SpeedUpRatio"
          ],
          "latentQueue": [
            "AIFlag"
          ],
          "description": "Increases SPD by <span class=\"descriptionNumberColor\">MDF_ShowValue1</span>. Attacks against \"Guide of Withering and Decay\" or \"The Long Arms of Sorrow\" can reduce \"Desperate Bubble\" and restore allies' HP. When \"Desperate Bubble\" depletes, dispels \"Fragrance of Death.\"",
          "type": "Other",
          "effectName": "Enhance",
          "statusName": "Fragrance of Death"
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_W4_PolluxPart_IF_Link",
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
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "InsertFlag02",
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
                      "variableName": "InsertFlag02",
                      "value": 1
                    },
                    {
                      "name": "Inject Ability Use",
                      "conditionActive": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Summoner of Modifier Holder}}"
                            },
                            "value1": "CurrentHP",
                            "compareType": ">",
                            "value2": 0
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "Enemy_W4_PolluxPart_IF_MinionsSuperArmorBreak[<span class=\"descriptionNumberColor\">Physical Falter</span>]",
                            "invertCondition": true
                          }
                        ]
                      },
                      "checkOverride": {
                        "name": "Condition Priority",
                        "overridePriority": "MonsterForceKill",
                        "condition": {
                          "name": "Compare: Ability Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Summoner of Modifier Holder}}"
                          },
                          "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                          "compareType": "<=",
                          "value2": 0
                        }
                      },
                      "abilityName": "Monster_W4_PolluxPart_IF_AbilityP01_Insert02_Part01",
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "priorityTag": "MonsterChangePhase",
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
          "latentQueue": [
            "AIFlag"
          ],
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Enemy_W4_PolluxPart_IF_Shield[<span class=\"descriptionNumberColor\">Overdue Obituary</span>]"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_W4_PolluxPart_IF_Reflex_EffectLoop",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team Location",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "team": "Enemy Team"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team Location",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "team": "Enemy Team",
                    "location": "Max"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_W4_PolluxPart_IF_Reflex[<span class=\"descriptionNumberColor\">Corrosive Retaliation</span>]",
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
                  "modifier": "Enemy_W4_PolluxPart_IF_Reflex_EffectLoop"
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
                  "modifier": "Enemy_W4_PolluxPart_IF_Reflex_EffectLoop"
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked End [Owner]",
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": {
                      "name": "Custom Damage Type",
                      "initialTypePreRead": "Quantum",
                      "sourceType": "ReadTargetType",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      }
                    },
                    "DamageFlat": {
                      "operator": "Variables[0] (MDF_ReflexDamageValue) || RETURN",
                      "displayLines": "MDF_ReflexDamageValue",
                      "constants": [],
                      "variables": [
                        "MDF_ReflexDamageValue"
                      ]
                    },
                    "dmgFormulaFinal": "Converted DMG Base",
                    "Toughness": null,
                    "Tags": null,
                    "behaviorTag": "DirectlyLoseHpHit",
                    "attackType": "Additional DMG"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is in Timeline Execution",
                    "invertCondition": true
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team Location",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "team": "Enemy Team"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team Location",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "team": "Enemy Team",
                    "location": "Max"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Enemy_W4_PolluxPart_IF_Reflex_EffectLoop"
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Enemy_W4_PolluxPart_IF_Reflex_EffectLoop"
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
                    "value1": "InsertFlag01",
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
                      "variableName": "InsertFlag01",
                      "value": 1
                    },
                    {
                      "name": "Inject Ability Use",
                      "conditionActive": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Summoner of Modifier Holder}}"
                            },
                            "value1": "CurrentHP",
                            "compareType": ">",
                            "value2": 0
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "Enemy_W4_PolluxPart_IF_MinionsSuperArmorBreak[<span class=\"descriptionNumberColor\">Physical Falter</span>]",
                            "invertCondition": true
                          }
                        ]
                      },
                      "checkOverride": {
                        "name": "Condition Priority",
                        "overridePriority": "MonsterForceKill",
                        "condition": {
                          "name": "Compare: Ability Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Summoner of Modifier Holder}}"
                          },
                          "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                          "compareType": "<=",
                          "value2": 0
                        }
                      },
                      "abilityName": "Monster_W4_PolluxPart_IF_AbilityP01_Insert01_Part01",
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "priorityTag": "MonsterChangePhase",
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
          "stackData": [
            "MDF_ReflexDamageValue"
          ],
          "latentQueue": [
            "StunCheck"
          ],
          "description": "After attacking this target, the attacker will receive minor Quantum \"Atrophy DMG.\"",
          "type": "Other",
          "effectName": "Corrosive Retaliation",
          "statusName": "Corrosive Retaliation"
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_W4_PolluxPart_IF_MinionsSuperArmorBreak[<span class=\"descriptionNumberColor\">Physical Falter</span>]",
          "modifierFlags": [
            "STAT_SuperArmorBreak",
            "STAT_AITargetKeepActionDelay"
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
                  "modifier": "StanceBreakState_Effect"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
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
                      "target": "{{Modifier Holder}}"
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
                },
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "advanceType": "Set",
                  "add": 15
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
            },
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "StanceBreakState_Effect"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "StanceBreakState_Effect"
                    }
                  ]
                }
              ]
            }
          ],
          "description": "\"Guide of Withering and Decay\" is currently in \"Safeguard Breach\" state, this unit's DMG received increases by <span class=\"descriptionNumberColor\">MDF_AllDamageTypeTakenRatio</span>.",
          "type": "Debuff",
          "statusName": "Physical Falter"
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_W4_PolluxPart_IF_MinionsSuperArmor[<span class=\"descriptionNumberColor\">Physical Enhancement</span>]",
          "modifierFlags": [],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Set Hit-Class",
                  "reset": true
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
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "APOC_BOOL_OBJECT_UNUSED_26"
                      },
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "APOC_BOOL_OBJECT_UNUSED_25"
                      },
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "APOC_BOOL_OBJECT_UNUSED_24"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "APOC_BOOL_OBJECT_UNUSED_26"
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "APOC_BOOL_OBJECT_UNUSED_25"
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "APOC_BOOL_OBJECT_UNUSED_24"
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Body-Types",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "types": "Thin"
                          },
                          {
                            "name": "Has Body-Types",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "types": [
                              "LargeMonster",
                              "LargeAvatar",
                              "LargeFakeAvatar"
                            ],
                            "invertCondition": true
                          },
                          {
                            "name": "Compare: Monster Rank",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "compareType": "<",
                            "value2": 5
                          }
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Has Body-Types",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "types": "Thin"
                              },
                              {
                                "name": "Has Body-Types",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "types": [
                                  "LargeMonster",
                                  "LargeAvatar",
                                  "LargeFakeAvatar"
                                ]
                              },
                              {
                                "name": "Compare: Monster Rank",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "compareType": "<",
                                "value2": 5
                              }
                            ]
                          },
                          {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Has Body-Types",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "types": "Thin",
                                "invertCondition": true
                              },
                              {
                                "name": "Compare: Monster Rank",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "compareType": "<",
                                "value2": 5
                              }
                            ]
                          }
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Monster Rank",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "compareType": ">=",
                            "value2": 5
                          }
                        ]
                      }
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_AllDamageReduce) || RETURN",
                    "displayLines": "MDF_AllDamageReduce",
                    "constants": [],
                    "variables": [
                      "MDF_AllDamageReduce"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "\"Guide of Withering and Decay\" is currently in \"Steadfast Safeguard\" state, this unit's DMG received decreases by <span class=\"descriptionNumberColor\">MDF_AllDamageReduce</span>.",
          "type": "Buff",
          "statusName": "Physical Enhancement"
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_W4_PolluxPart_IF_MinionsSuperArmorController",
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
                  "modifier": "Enemy_W4_PolluxPart_IF_MinionsSuperArmor[<span class=\"descriptionNumberColor\">Physical Enhancement</span>]",
                  "valuePerStack": {
                    "MDF_AllDamageReduce": {
                      "operator": "Variables[0] (MDF_MinionsSuperArmor_AllDamageReduce) || RETURN",
                      "displayLines": "MDF_MinionsSuperArmor_AllDamageReduce",
                      "constants": [],
                      "variables": [
                        "MDF_MinionsSuperArmor_AllDamageReduce"
                      ]
                    }
                  }
                }
              ]
            },
            {
              "eventTrigger": "Weakness Break [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Enemy_W4_Pollux_IF_AbilityP01_NegativeBlood_Controller"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Enemy_W4_PolluxPart_IF_MinionsSuperArmor[<span class=\"descriptionNumberColor\">Physical Enhancement</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Enemy_W4_PolluxPart_IF_MinionsSuperArmorBreak[<span class=\"descriptionNumberColor\">Physical Falter</span>]",
                      "valuePerStack": {
                        "MDF_AllDamageTypeTakenRatio": {
                          "operator": "Variables[0] (MDF_MinionsSuperArmor_AllDamageTypeTakenRatio) || RETURN",
                          "displayLines": "MDF_MinionsSuperArmor_AllDamageTypeTakenRatio",
                          "constants": [],
                          "variables": [
                            "MDF_MinionsSuperArmor_AllDamageTypeTakenRatio"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "End Broken State [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Enemy_W4_Pollux_IF_AbilityP01_NegativeBlood_Controller"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Enemy_W4_PolluxPart_IF_MinionsSuperArmorBreak[<span class=\"descriptionNumberColor\">Physical Falter</span>]"
                    },
                    {
                      "name": "Exit Broken-State",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Standard_SuperArmor_IF[<span class=\"descriptionNumberColor\">Steadfast Safeguard</span>]"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "Enemy_W4_PolluxPart_IF_MinionsSuperArmor[<span class=\"descriptionNumberColor\">Physical Enhancement</span>]",
                          "valuePerStack": {
                            "MDF_AllDamageReduce": {
                              "operator": "Variables[0] (MDF_MinionsSuperArmor_AllDamageReduce) || RETURN",
                              "displayLines": "MDF_MinionsSuperArmor_AllDamageReduce",
                              "constants": [],
                              "variables": [
                                "MDF_MinionsSuperArmor_AllDamageReduce"
                              ]
                            }
                          }
                        }
                      ]
                    },
                    {
                      "name": "Remove Modifier Behavior Flag(s)",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "flagNames": []
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_MinionsSuperArmor_AllDamageReduce",
            "MDF_MinionsSuperArmor_AllDamageTypeTakenRatio",
            "MDF_SetActionDelayValue"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_W4_Pollux_IF_RemoveOneMore",
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
                          "modifier": "OneMorePerTurn"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "Monster_APShow"
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
                            "modifier": "OneMorePerTurn"
                          },
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "OneMorePerTurn"
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
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Monster_APShow"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "OneMorePerTurn"
                  },
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "OneMorePerTurn"
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
          "for": "Enemy_W4_Pollux_IF_Status",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_EnergyValue",
                  "value": 0
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "entityClass": "Enemy",
                  "assignState": "False"
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]"
            },
            {
              "eventTrigger": "Turn End [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "Enemy_W4_Pollux_IF_Strengthen[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]",
                        "invertCondition": true
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_ReadyToCharge",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Current Turn Owner}}"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Dispel Debuffs",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "silent": true,
                      "toRemove": [
                        "STAT_CTRL"
                      ]
                    },
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "conditionActive": {
                        "name": "AND",
                        "conditionList": [
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
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "Enemy_W4_Pollux_IF_Strengthen[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]",
                            "invertCondition": true
                          }
                        ]
                      },
                      "checkOverride": {
                        "name": "Condition Priority",
                        "overridePriority": "LevelPerformMonster",
                        "condition": {
                          "name": "Compare: Ability Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                          "compareType": "<=",
                          "value2": 0
                        }
                      },
                      "abilityName": "Monster_W4_Pollux_IF_Ability05_Part01",
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
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
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Monster_W4_Pollux_FX_Ground"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_EnergyValue",
                  "value": 0
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (_EnergyValue) || RETURN",
                    "displayLines": "_EnergyValue",
                    "constants": [],
                    "variables": [
                      "_EnergyValue"
                    ]
                  },
                  "entityClass": "Enemy",
                  "maximum": 1,
                  "assignState": "True",
                  "state": "Normal"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Monster_W4_Pollux_EnergyBar"
                }
              ]
            },
            {
              "eventTrigger": "Pre-Death [Owner]"
            },
            {
              "eventTrigger": "HP Change [Anyone]",
              "execute": [
                {
                  "name": "Define Custom Variable with Varying Data",
                  "target": null,
                  "variableName": "_HPChangeValue",
                  "value": "ParamValue"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "_TargetMaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
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
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "Enemy_W4_Pollux_IF_Strengthen[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "Enemy_W4_Pollux_IF_Strengthen_BreakMark",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "Standard_SuperArmorBreak_IF[<span class=\"descriptionNumberColor\">Safeguard Breach</span>]",
                        "invertCondition": true
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_HPChangeValue",
                        "compareType": "<",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_HPChangeRatio",
                      "value": {
                        "operator": "Variables[0] (_HPChangeValue) || INVERT || Variables[1] (_TargetMaxHP) || DIV || RETURN",
                        "displayLines": "(-_HPChangeValue / _TargetMaxHP)",
                        "constants": [],
                        "variables": [
                          "_HPChangeValue",
                          "_TargetMaxHP"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "_EnergyValue",
                      "value": {
                        "operator": "Variables[0] (_HPChangeRatio) || Variables[1] (UnusedUnderThisBase_110) || MUL || RETURN",
                        "displayLines": "(_HPChangeRatio * UnusedUnderThisBase_110)",
                        "constants": [],
                        "variables": [
                          "_HPChangeRatio",
                          "UnusedUnderThisBase_110"
                        ]
                      },
                      "max": 1
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Current Action Holder Is",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "invertCondition": true
                          },
                          {
                            "name": "Is Part Of",
                            "of": {
                              "name": "Target Name",
                              "target": "{{Current Turn Owner}}"
                            },
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster's Minions}}"
                            },
                            "mustBeAlive2": true,
                            "invertCondition": true
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (_EnergyValue) || RETURN",
                            "displayLines": "_EnergyValue",
                            "constants": [],
                            "variables": [
                              "_EnergyValue"
                            ]
                          },
                          "entityClass": "Enemy",
                          "maximum": 1
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: End"
            },
            {
              "eventTrigger": "Ability Use [Anyone]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "Enemy_W4_Pollux_IF_Strengthen[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]",
                        "invertCondition": true
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_ReadyToCharge",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Dispel Debuffs",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "silent": true,
                      "toRemove": [
                        "STAT_CTRL"
                      ]
                    },
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "conditionActive": {
                        "name": "AND",
                        "conditionList": [
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
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "Enemy_W4_Pollux_IF_Strengthen[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]",
                            "invertCondition": true
                          }
                        ]
                      },
                      "checkOverride": {
                        "name": "Condition Priority",
                        "overridePriority": "LevelPerformMonster",
                        "condition": {
                          "name": "Compare: Ability Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                          "compareType": "<=",
                          "value2": 0
                        }
                      },
                      "abilityName": "Monster_W4_Pollux_IF_Ability05_Part01",
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
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
                    "modifier": "Enemy_W4_Pollux_IF_BloodPool[<span class=\"descriptionNumberColor\">Dream of Demise</span>]"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Minions of Modifier Holder}}"
                      },
                      "modifier": "Enemy_W4_PolluxPart_IF_Reflex[<span class=\"descriptionNumberColor\">Corrosive Retaliation</span>]"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Standard_Monster_AllDamageReduce[<span class=\"descriptionNumberColor\">DMG Mitigation</span>]"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Monster_Standard_WeakControl[<span class=\"descriptionNumberColor\">Toughness Protection</span>]"
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "entityClass": "Enemy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "assignState": "False"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Enemy_W4_Pollux_IF_BloodPool[<span class=\"descriptionNumberColor\">Dream of Demise</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Enemy_W4_Pollux_IF_Strengthen_Break"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Enemy_W4_Pollux_IF_Strengthen_BreakMark"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_EnergyValue",
                      "value": 0
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (_EnergyValue) || RETURN",
                        "displayLines": "_EnergyValue",
                        "constants": [],
                        "variables": [
                          "_EnergyValue"
                        ]
                      },
                      "entityClass": "Enemy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "maximum": 1,
                      "assignState": "True",
                      "state": "Normal",
                      "trigger": "SpEff_Trigger"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "Enemy_W4_Pollux_IF_Strengthen[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]",
                        "invertCondition": true
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_ReadyToCharge",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Dispel Debuffs",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "silent": true,
                      "toRemove": [
                        "STAT_CTRL"
                      ]
                    },
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "conditionActive": {
                        "name": "AND",
                        "conditionList": [
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
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "Enemy_W4_Pollux_IF_Strengthen[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]",
                            "invertCondition": true
                          }
                        ]
                      },
                      "checkOverride": {
                        "name": "Condition Priority",
                        "overridePriority": "LevelPerformMonster",
                        "condition": {
                          "name": "Compare: Ability Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                          "compareType": "<=",
                          "value2": 0
                        }
                      },
                      "abilityName": "Monster_W4_Pollux_IF_Ability05_Part01",
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
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
              "eventTrigger": "Preview Shows Break[?]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Enemy_W4_PolluxPart_IF_Status"
                  },
                  "passed": [
                    {
                      "name": "Modifier: UI Preview",
                      "show": "Hide",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "attacker": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "baseToughnessDMG": {
                        "operator": "Variables[0] (StanceDamagePreshowValue) || RETURN",
                        "displayLines": "StanceDamagePreshowValue",
                        "constants": [],
                        "variables": [
                          "StanceDamagePreshowValue"
                        ]
                      },
                      "toughnessForcedReductionPreview": 1,
                      "isForcedReduction": true,
                      "ignoreBreakBlock": true
                    }
                  ]
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "_EnergyValue",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 1,
                  "maxValue": 1,
                  "includeMaxValueInRange": true,
                  "whenEnteringRange": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "Enemy_W4_Pollux_IF_Strengthen[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]",
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_ReadyToCharge",
                          "value": 1
                        }
                      ]
                    }
                  ],
                  "whenLeavingRange": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_ReadyToCharge",
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
          "for": "Enemy_W4_Pollux_IF_AbilityP01_NegativeBlood_Target_Display[<span class=\"descriptionNumberColor\">Death Rattle</span>]",
          "modifierFlags": [
            "STAT_Fatigue"
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
                  "variableName": "MDF_LifetimeDisplay",
                  "value": {
                    "operator": "Variables[0] (MDF_DeathCountDown) || RETURN",
                    "displayLines": "MDF_DeathCountDown",
                    "constants": [],
                    "variables": [
                      "MDF_DeathCountDown"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "operator": "Variables[0] (MDF_DeathCountDown) || RETURN",
                    "displayLines": "MDF_DeathCountDown",
                    "constants": [],
                    "variables": [
                      "MDF_DeathCountDown"
                    ]
                  },
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 2,
                      "execute": [
                        {
                          "name": "UI Display Event (On Entity)",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "popUpText": "The Reaper arrives in 2 turns"
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 1,
                      "execute": [
                        {
                          "name": "UI Display Event (On Entity)",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "popUpText": "The Reaper arrives in 1 turn"
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 0
                    }
                  ],
                  "defaultEvents": []
                },
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "operator": "Variables[0] (MDF_DeathCountDown) || RETURN",
                    "displayLines": "MDF_DeathCountDown",
                    "constants": [],
                    "variables": [
                      "MDF_DeathCountDown"
                    ]
                  },
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 0,
                      "execute": [
                        {
                          "name": "Define Custom Variable with Stat",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "_TargetNegativeHp",
                          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPNegative</span>&nbsp;"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_TargetNegativeHp",
                          "value": {
                            "operator": "Variables[0] (CEIL) || Variables[1] (_TargetNegativeHp) || PARAM_1 || FUNCTION || RETURN",
                            "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">CEIL</span>(_TargetNegativeHp)",
                            "constants": [],
                            "variables": [
                              "CEIL",
                              "_TargetNegativeHp"
                            ]
                          }
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "Enemy_W4_Pollux_IF_AbilityP01_NegativeBlood_Target_LockHP"
                        },
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Quantum",
                            "DamageFlat": {
                              "operator": "Variables[0] (_TargetNegativeHp) || RETURN",
                              "displayLines": "_TargetNegativeHp",
                              "constants": [],
                              "variables": [
                                "_TargetNegativeHp"
                              ]
                            },
                            "dmgFormulaFinal": "Converted DMG Base",
                            "Toughness": null,
                            "Tags": null,
                            "behaviorTag": "DirectlyLoseHpHit",
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    }
                  ],
                  "defaultEvents": []
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_LifetimeDisplay",
                  "value": {
                    "operator": "Variables[0] (MDF_DeathCountDown) || RETURN",
                    "displayLines": "MDF_DeathCountDown",
                    "constants": [],
                    "variables": [
                      "MDF_DeathCountDown"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_DeathCountDown",
                  "value": -1,
                  "max": 3
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Enemy_W4_Pollux_IF_AbilityP01_NegativeBlood_Target_LockHP"
                }
              ],
              "priorityLevel": -10
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">Weaken%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_FatigueRatio) || RETURN",
                    "displayLines": "MDF_FatigueRatio",
                    "constants": [],
                    "variables": [
                      "MDF_FatigueRatio"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakEfficiency</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (0) || Variables[0] (MDF_StanceBreakDownRatio) || SUB || RETURN",
                    "displayLines": "(0 - MDF_StanceBreakDownRatio)",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "MDF_StanceBreakDownRatio"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_LifetimeDisplay",
                  "value": 3
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Damaging Effect",
                    "skillTypeControl": "ControlSkill03",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "checkSubSkill": true,
                    "checkSubSkillLogic": "And"
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
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Skill Type",
                        "skillType": "Ultimate"
                      },
                      {
                        "name": "Is Damaging Effect",
                        "skillTypeControl": "ControlSkill03",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "checkSubSkill": true,
                        "checkSubSkillLogic": "And"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Update Target Selected(UI) [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Skill Type",
                        "skillType": "Basic ATK",
                        "activeSkill": true
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Skill",
                        "activeSkill": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Is Damaging Effect",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Is Damaging Effect",
                            "skillTypeControl": "ControlSkill02",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            }
                          },
                          "passed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Is Damaging Effect",
                                "skillTypeControl": "ControlSkill03",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "checkSubSkill": true,
                                "checkSubSkillLogic": "And"
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Is Damaging Effect",
                                "skillTypeControl": "ControlSkill03",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "checkSubSkill": true,
                                "checkSubSkillLogic": "And"
                              }
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Is Damaging Effect",
                            "skillTypeControl": "ControlSkill02",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            }
                          },
                          "passed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Is Damaging Effect",
                                "skillTypeControl": "ControlSkill03",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "checkSubSkill": true,
                                "checkSubSkillLogic": "And"
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Is Damaging Effect",
                                "skillTypeControl": "ControlSkill03",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "checkSubSkill": true,
                                "checkSubSkillLogic": "And"
                              }
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
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Skill Type",
                        "skillType": "Ultimate",
                        "activeSkill": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Is Damaging Effect",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Is Damaging Effect",
                            "skillTypeControl": "ControlSkill02",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            }
                          },
                          "passed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Is Damaging Effect",
                                "skillTypeControl": "ControlSkill03",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "checkSubSkill": true,
                                "checkSubSkillLogic": "And"
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Is Damaging Effect",
                                "skillTypeControl": "ControlSkill03",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "checkSubSkill": true,
                                "checkSubSkillLogic": "And"
                              }
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Is Damaging Effect",
                            "skillTypeControl": "ControlSkill02",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            }
                          },
                          "passed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Is Damaging Effect",
                                "skillTypeControl": "ControlSkill03",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "checkSubSkill": true,
                                "checkSubSkillLogic": "And"
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Is Damaging Effect",
                                "skillTypeControl": "ControlSkill03",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "checkSubSkill": true,
                                "checkSubSkillLogic": "And"
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
          ],
          "description": "Target has accumulated \"HP Overload.\" Heal <span class=\"descriptionNumberColor\">MDF_NegativeBlood</span> HP to remove this state. DMG dealt is reduced by <span class=\"descriptionNumberColor\">MDF_FatigueRatio</span>, and Weakness Break Efficiency is reduced by <span class=\"descriptionNumberColor\">MDF_StanceBreakDownRatio</span>. When its duration ends, the target will receive fatal damage. Remaining duration: <span class=\"descriptionNumberColor\">MDF_LifetimeDisplay</span> turn(s).",
          "type": "Other",
          "statusName": "Death Rattle"
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_W4_Pollux_IF_AbilityP01_NegativeBlood_Target_LockHP",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                "Allow NEGATIVE HP"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "MDF_LifetimeDisplay"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_W4_Pollux_IF_AbilityP01_NegativeBlood_Target[<span class=\"descriptionNumberColor\">Overloadable</span>]",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "TaskList_Monster_W4_Pollux_IF_NegativeBlood_Update"
                }
              ]
            },
            {
              "eventTrigger": "When Put in Deathstate Limbo",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Enemy_W4_Pollux_IF_AbilityP01_NegativeBlood_Target_LockHP"
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
                  "modifier": "Enemy_W4_Pollux_IF_AbilityP01_NegativeBlood_Target_LockHP"
                }
              ]
            },
            {
              "eventTrigger": "Losing HP [Owner]: Start",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "TaskList_Monster_W4_Pollux_IF_NegativeBlood_Update"
                }
              ]
            },
            {
              "eventTrigger": "HP Change [Owner]",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "TaskList_Monster_W4_Pollux_IF_NegativeBlood_Update"
                }
              ]
            },
            {
              "eventTrigger": "Update Target Selected(UI) [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "Enemy_W4_Pollux_IF_AbilityP01_NegativeBlood_Target_Display[<span class=\"descriptionNumberColor\">Death Rattle</span>]",
                    "invertCondition": true
                  }
                }
              ]
            },
            {
              "eventTrigger": "Get Revived [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Enemy_W4_Pollux_IF_AbilityP01_NegativeBlood_Target_LockHP"
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "TaskList_Monster_W4_Pollux_IF_NegativeBlood_Update",
              "parse": [
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
                  "name": "Define Custom Variable",
                  "variableName": "MDF_NegativeHP",
                  "value": {
                    "operator": "Variables[0] (CEIL) || Variables[1] (MDF_NegativeHP) || PARAM_1 || FUNCTION || RETURN",
                    "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">CEIL</span>(MDF_NegativeHP)",
                    "constants": [],
                    "variables": [
                      "CEIL",
                      "MDF_NegativeHP"
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
                    "value1": "MDF_NegativeHP",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Enemy_W4_Pollux_IF_AbilityP01_NegativeBlood_Target_Display[<span class=\"descriptionNumberColor\">Death Rattle</span>]"
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
                        "modifier": "Enemy_W4_Pollux_IF_AbilityP01_NegativeBlood_Target_Display[<span class=\"descriptionNumberColor\">Death Rattle</span>]"
                      },
                      "passed": [
                        {
                          "name": "Define Modifier-Specific Variable",
                          "modifierName": "Enemy_W4_Pollux_IF_AbilityP01_NegativeBlood_Target_Display[<span class=\"descriptionNumberColor\">Death Rattle</span>]",
                          "variableName": "MDF_NegativeBlood",
                          "value": {
                            "operator": "Variables[0] (MDF_NegativeHP) || RETURN",
                            "displayLines": "MDF_NegativeHP",
                            "constants": [],
                            "variables": [
                              "MDF_NegativeHP"
                            ]
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
                          "modifier": "Enemy_W4_Pollux_IF_AbilityP01_NegativeBlood_Target_Display[<span class=\"descriptionNumberColor\">Death Rattle</span>]",
                          "valuePerStack": {
                            "MDF_NegativeBlood": {
                              "operator": "Variables[0] (MDF_NegativeHP) || RETURN",
                              "displayLines": "MDF_NegativeHP",
                              "constants": [],
                              "variables": [
                                "MDF_NegativeHP"
                              ]
                            },
                            "MDF_DeathCountDown": {
                              "operator": "Variables[0] (MDF_NegativeBlood_DeathCountDown) || RETURN",
                              "displayLines": "MDF_NegativeBlood_DeathCountDown",
                              "constants": [],
                              "variables": [
                                "MDF_NegativeBlood_DeathCountDown"
                              ]
                            },
                            "MDF_FatigueRatio": {
                              "operator": "Variables[0] (MDF_NegativeBlood_FatigueRatio) || RETURN",
                              "displayLines": "MDF_NegativeBlood_FatigueRatio",
                              "constants": [],
                              "variables": [
                                "MDF_NegativeBlood_FatigueRatio"
                              ]
                            },
                            "MDF_StanceBreakDownRatio": {
                              "operator": "Variables[0] (MDF_NegativeBlood_StanceBreakDownRatio) || RETURN",
                              "displayLines": "MDF_NegativeBlood_StanceBreakDownRatio",
                              "constants": [],
                              "variables": [
                                "MDF_NegativeBlood_StanceBreakDownRatio"
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
          ],
          "description": "Target's HP cannot be reduced below 1, and any excess damage beyond an amount of their current HP will be converted to \"HP Overload.\" When receiving healing, prioritizes restoring their \"HP Overload.\"",
          "type": "Other",
          "effectName": "Overloadable",
          "statusName": "Overloadable"
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_W4_Pollux_IF_AbilityP01_NegativeBlood_Controller",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_ToastFlag",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "Enemy_W4_Pollux_IF_AbilityP01_NegativeBlood_Target_Display[<span class=\"descriptionNumberColor\">Death Rattle</span>]"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_ToastFlag",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_ToastFlag",
                          "value": 1
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_NegativeBlood_Target_DeathCountDown",
            "MDF_NegativeBlood_Target_FatigueRatio",
            "MDF_NegativeBlood_Target_StanceBreakDownRatio"
          ],
          "latentQueue": [],
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "Enemy_W4_Pollux_IF_AbilityP01_NegativeBlood_Target[<span class=\"descriptionNumberColor\">Overloadable</span>]",
              "haloStatus": true,
              "valuePerStack": {
                "MDF_NegativeBlood_DeathCountDown": {
                  "operator": "Variables[0] (MDF_NegativeBlood_Target_DeathCountDown) || RETURN",
                  "displayLines": "MDF_NegativeBlood_Target_DeathCountDown",
                  "constants": [],
                  "variables": [
                    "MDF_NegativeBlood_Target_DeathCountDown"
                  ]
                },
                "MDF_NegativeBlood_FatigueRatio": {
                  "operator": "Variables[0] (MDF_NegativeBlood_Target_FatigueRatio) || RETURN",
                  "displayLines": "MDF_NegativeBlood_Target_FatigueRatio",
                  "constants": [],
                  "variables": [
                    "MDF_NegativeBlood_Target_FatigueRatio"
                  ]
                },
                "MDF_NegativeBlood_StanceBreakDownRatio": {
                  "operator": "Variables[0] (MDF_NegativeBlood_Target_StanceBreakDownRatio) || RETURN",
                  "displayLines": "MDF_NegativeBlood_Target_StanceBreakDownRatio",
                  "constants": [],
                  "variables": [
                    "MDF_NegativeBlood_Target_StanceBreakDownRatio"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_W4_Pollux_IF_UltraReadyMark",
          "execute": [
            {
              "eventTrigger": "Turn End [Anyone]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "AIFlag"
          ]
        }
      ],
      "references": []
    },
    "4012077_Functions": {
      "fileName": "4012077_Functions",
      "abilityType": "Char. Functions",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "length": 2,
      "parse": [
        {
          "name": "CharacterFunctions",
          "functionName": "TaskList_Monster_W4_Pollux_IF_Strengthen_EggAbsorb_FX",
          "parse": [
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
                    "modifier": "Enemy_W4_Pollux_IF_Strengthen[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]",
                    "invertCondition": true
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Monster_W4_Pollux_EnergyBar"
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Enemy_W4_Pollux_IF_Strengthen_Break",
                    "invertCondition": true
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "TaskList_Monster_W4_Pollux_IF_Strengthen_EggAbsorb",
          "parse": [
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
                    "modifier": "Enemy_W4_Pollux_IF_Strengthen[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]",
                    "invertCondition": true
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Monster_W4_Pollux_EnergyBar"
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Enemy_W4_Pollux_IF_Strengthen_Break",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (_EnergyValue) || RETURN",
                        "displayLines": "_EnergyValue",
                        "constants": [],
                        "variables": [
                          "_EnergyValue"
                        ]
                      },
                      "entityClass": "Enemy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "maximum": 1
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "references": []
    }
  }
}