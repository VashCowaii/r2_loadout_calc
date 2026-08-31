const entityPageType = "misc"
const compositeAbilityObject = {
  "fullCharacterName": 60044,
  "trimCharacterName": 60044,
  "abilityList": [
    "60044_MissionBattleEvent60044_AbilityP01",
    "60044_MissionBattleEvent60044_Ability03_Camera",
    "60044_MissionBattleEvent60044_Ability03_Part02",
    "60044_MissionBattleEvent60044_Ability03_Part01",
    "60044_BE_BattleEvents"
  ],
  "abilityObject": {
    "60044_MissionBattleEvent60044_AbilityP01": {
      "fileName": "60044_MissionBattleEvent60044_AbilityP01",
      "childAbilityList": [
        "60044_MissionBattleEvent60044_AbilityP01"
      ],
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"549929288\">MissionBattleEvent60044_PassiveAbility</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"960515933\">MissionBattleEvent60044_Charge</a>",
          "valuePerStack": {
            "DelayToCharge": {
              "operator": "Variables[0] (#BattleEvent_P3_ADF) || RETURN",
              "displayLines": "#BattleEvent_P3_ADF",
              "constants": [],
              "variables": [
                "#BattleEvent_P3_ADF"
              ]
            },
            "MinionDeathCharge": {
              "operator": "Variables[0] (#BattleEvent_P4_ADF) || RETURN",
              "displayLines": "#BattleEvent_P4_ADF",
              "constants": [],
              "variables": [
                "#BattleEvent_P4_ADF"
              ]
            },
            "InitialCharge": {
              "operator": "Variables[0] (#BattleEvent_P5_ADF) || RETURN",
              "displayLines": "#BattleEvent_P5_ADF",
              "constants": [],
              "variables": [
                "#BattleEvent_P5_ADF"
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
          "modifier": "<a class=\"gModGreen\" id=\"-602725128\">MissionBattleEvent60044_UltraReady</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1490350994\">MissionBattleEvent60044_AutoUseUltraAbility</a>"
        }
      ],
      "whenAdded": [],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-602725128\">MissionBattleEvent60044_UltraReady</a>",
          "execute": [
            {
              "eventTrigger": "Ultimate Prep-Phase [Owner]",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "W5_Shell"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Remove from Team Target Grouping",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "stayInTeam": false
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Asat Pramad: 0}} + {{Asat Pramad: 1}} + {{Asat Pramad: 2}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1242962761\">Enemy_W5_AsatPramad_Part03Unselectable</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1490350994\">MissionBattleEvent60044_AutoUseUltraAbility</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Automatically use Ultimate",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__960515933\">MissionBattleEvent60044_Charge</a>",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
          "stackData": [
            "DelayToCharge",
            "MinionDeathCharge",
            "InitialCharge"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valuePercent": {
                    "operator": "Variables[0] (InitialCharge) || RETURN",
                    "displayLines": "InitialCharge",
                    "constants": [],
                    "variables": [
                      "InitialCharge"
                    ]
                  },
                  "isFixed": "(Fixed)",
                  "isSetToValue": true
                }
              ]
            },
            {
              "eventTrigger": "Entity Death [Anyone]",
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
                          "target": "{{Level Entity}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"2070107442\">Enemy_W5_AsatPramad_AcrossPhaseController</a>",
                        "invertCondition": true
                      },
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value": "W5_Shell"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": {
                        "operator": "Variables[0] (MinionDeathCharge) || RETURN",
                        "displayLines": "MinionDeathCharge",
                        "constants": [],
                        "variables": [
                          "MinionDeathCharge"
                        ]
                      },
                      "isFixed": "* ERR"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "AV Forcibly Changed [Global]",
              "execute": [
                {
                  "name": "Define Custom Variable with Varying Data",
                  "target": null,
                  "variableName": "DelayAdd",
                  "value": "ParamValue"
                },
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": {
                    "operator": "Variables[0] (DelayAdd) || Variables[1] (DelayToCharge) || MUL || RETURN",
                    "displayLines": "(DelayAdd * DelayToCharge)",
                    "constants": [],
                    "variables": [
                      "DelayAdd",
                      "DelayToCharge"
                    ]
                  },
                  "isFixed": "* ERR"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__549929288\">MissionBattleEvent60044_PassiveAbility</a>",
          "modifierFlags": [
            "BlockDamage",
            "Stealth"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                "Mark Entity as Non-Target(Unselectable)"
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "typeOverride": "Buff"
                },
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "typeOverride": "Other"
                }
              ]
            },
            {
              "eventTrigger": "Energy Change"
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "60044_MissionBattleEvent60044_Ability03_Camera": {
      "fileName": "60044_MissionBattleEvent60044_Ability03_Camera",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "60044_MissionBattleEvent60044_Ability03_Part02": {
      "fileName": "60044_MissionBattleEvent60044_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Asat Pramad: 0}} + {{Asat Pramad: 1}} + {{Asat Pramad: 2}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1762940048\">Enemy_W5_AsatPramad_BELockHP</a>"
        },
        {
          "name": "UI Display Event",
          "popUpText": "Mechatron Swordomain: Void Slash"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2113551112\">MissionBattleEvent60044_ChangeMusic</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Asat Pramad: 0}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"192411193\">Enemy_W5_AsatPramad_MainStory03</a>"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Gender is",
            "gender": "GENDER_MAN"
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2070107442\">Enemy_W5_AsatPramad_AcrossPhaseController</a>"
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Asat Pramad: 2}}"
          },
          "variableName": "EnemyBoss_MaxHP",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Asat Pramad: 0}} + {{Asat Pramad: 1}} + {{Asat Pramad: 2}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Imaginary",
            "DamageFlat": {
              "operator": "Variables[0] (#BattleEvent_P1_ADF) || Variables[1] (EnemyBoss_MaxHP) || MUL || Constants[0] (3) || DIV || RETURN",
              "displayLines": "((#BattleEvent_P1_ADF * EnemyBoss_MaxHP) / 3)",
              "constants": [
                3
              ],
              "variables": [
                "#BattleEvent_P1_ADF",
                "EnemyBoss_MaxHP"
              ]
            },
            "cantKill": true,
            "dmgFormula": "Max HP Scaling",
            "dmgFormulaFinal": "Converted DMG Base",
            "Toughness": {
              "operator": "Variables[0] (AOE Toughness Value) || RETURN",
              "displayLines": "AOE Toughness Value",
              "constants": [],
              "variables": [
                "AOE Toughness Value"
              ]
            },
            "ToughnessDMGType": {
              "DamageType": "Imaginary"
            },
            "Tags": null,
            "attackType": "Ultimate"
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value": "W5_Shell"
          },
          "ifTargetFound": [
            {
              "name": "Force Entity Death",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Change Entity Turn-State",
          "target": {
            "name": "Target Name",
            "target": "{{Asat Pramad: 0}} + {{Asat Pramad: 1}} + {{Asat Pramad: 2}}"
          },
          "phase": "Phase1"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Asat Pramad: 0}} + {{Asat Pramad: 1}} + {{Asat Pramad: 2}}"
          },
          "ifTargetFound": [
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
              "failed": [
                {
                  "name": "Trigger 0-Toughness",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1161208794\">Enemy_W5_AsatPramad_AllDamageTypeTakenRatio</a>[<span class=\"descriptionNumberColor\">Knockdown</span>]",
              "duration": -1,
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (#BattleEvent_P2_ADF) || RETURN",
                  "displayLines": "#BattleEvent_P2_ADF",
                  "constants": [],
                  "variables": [
                    "#BattleEvent_P2_ADF"
                  ]
                }
              },
              "casterAssign": "TargetSelf"
            }
          ]
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "set": 0
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1445036185\">AddMuteSpeedAndLockActionDelayChange</a>",
          "target": {
            "name": "Add Target by Unique Identifier",
            "identifier": "BossUltra"
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1445036185\">AddMuteSpeedAndLockActionDelayChange</a>",
          "target": {
            "name": "Add Target by Unique Identifier",
            "identifier": "BossSummonMonster"
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1445036185\">AddMuteSpeedAndLockActionDelayChange</a>",
          "target": {
            "name": "Add Target by Unique Identifier",
            "identifier": "BE_AsatPramad_00"
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1445036185\">AddMuteSpeedAndLockActionDelayChange</a>",
          "target": {
            "name": "Add Target by Unique Identifier",
            "identifier": "BE_AsatPramad_01"
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1445036185\">AddMuteSpeedAndLockActionDelayChange</a>",
          "target": {
            "name": "Add Target by Unique Identifier",
            "identifier": "W5_AsatPramad_02"
          }
        },
        {
          "name": "Set Action-State",
          "on": null,
          "stateName": "AsatPramadAfterBE",
          "state": false
        },
        {
          "name": "Set Action-State",
          "on": null,
          "stateName": "AsatPramadAfterBE",
          "state": false
        },
        {
          "name": "Set Action-State",
          "on": null,
          "stateName": "AsatPramadAfterBE",
          "state": false
        },
        {
          "name": "Set Action-State",
          "on": null,
          "stateName": "AsatPramadAfterBE",
          "state": false
        },
        {
          "name": "Set Action-State",
          "on": null,
          "stateName": "AsatPramadAfterBE",
          "state": false
        },
        {
          "name": "Preload Battle Event(s)",
          "eventID": [
            20052
          ]
        },
        {
          "name": "Add Battle Event",
          "teamName": "Enemy Team",
          "eventID": 20052,
          "variables": null,
          "whenCreated": [
            {
              "name": "Action Advance/Delay",
              "advanceType": "Set",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "multiBase": 1
            },
            {
              "name": "Assign Unique Name",
              "uniqueName": "BossAfterBE",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"724771238\">Enemy_W5_AsatPramad_Bomb</a>[<span class=\"descriptionNumberColor\">Meme'd</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Asat Pramad: 0}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1505992097\">Enemy_W5_AsatPramad_BombCharging</a>[<span class=\"descriptionNumberColor\">Memes Incoming</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-607981901\">Enemy_W5_AsatPramad_MainStory02Talk02End</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Asat Pramad: 0}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-473353257\">Enemy_W5_AsatPramad_Effect00</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Asat Pramad: 1}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-490130876\">Enemy_W5_AsatPramad_Effect01</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Asat Pramad: 2}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-439798019\">Enemy_W5_AsatPramad_Effect02</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"964206682\">W5_AsatPramad_Part03BEBreakSet</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Asat Pramad: 0}} + {{Asat Pramad: 1}} + {{Asat Pramad: 2}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1762940048\">Enemy_W5_AsatPramad_BELockHP</a>"
        },
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1762940048\">Enemy_W5_AsatPramad_BELockHP</a>",
          "modifierFlags": [
            "Endurance"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 0.00010000006
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-607981901\">Enemy_W5_AsatPramad_MainStory02Talk02End</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2113551112\">MissionBattleEvent60044_ChangeMusic</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Asat Pramad: 0}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"192411193\">Enemy_W5_AsatPramad_MainStory03</a>"
                  }
                }
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "60044_MissionBattleEvent60044_Ability03_Part01": {
      "fileName": "60044_MissionBattleEvent60044_Ability03_Part01",
      "childAbilityList": [
        "60044_MissionBattleEvent60044_Ability03_Part01",
        "60044_MissionBattleEvent60044_Ability03_Part02",
        "60044_MissionBattleEvent60044_Ability03_Camera"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Ultimate",
      "energy": null,
      "toughnessList": [
        0,
        60,
        0
      ],
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
          "ability": "MissionBattleEvent60044_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target",
        "allowUnselectable": true
      }
    },
    "60044_BE_BattleEvents": {
      "fileName": "60044_BE_BattleEvents",
      "abilityType": "Char. B.Events",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Battle Event Construction",
          "ID": 20052,
          "team": "Enemy Team",
          "eventType": "Assist",
          "abilityList": [
            "BattleEventAbility_Monster_W5_AsatPramad_RestartAfterBE"
          ],
          "overridesArray": [
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;",
              "value": 90
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
              "value": 100
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;",
              "value": 100
            }
          ],
          "hardLevelEvent": true
        }
      ],
      "references": []
    }
  },
  "enemyData": {
    "Skill03": {
      "skillID": 6004401,
      "trigger": "Skill03",
      "name": "Mechatron Swordomain: Void Slash",
      "type": "AoE",
      "slot": "Ultimate",
      "desc": "Deals massive DMG to all enemy targets, applies \"Knockdown\" to Asat Pramad, and causes all ally targets to immediately take action. A \"Knockdown\" countdown appears on the Action Order. At the start of the countdown's turn, Lord of Saṃvartasthāyi, Asat Pramad exits the \"Knockdown\" state and immediately takes action.",
      "energyCost": 100,
      "energyRegen": null,
      "energyRate": 0.5,
      "toughnessReductionDisplayed": null,
      "skillPointCost": 0,
      "skillPointGain": 0,
      "params": {
        "1": []
      },
      "element": "Imaginary",
      "attackType": "Ultra",
      "skillEffect": "SingleAttack",
      "maxLevel": 1,
      "configAbilityList": [
        "Avatar_MissionBattleEvent60044_Skill03_Phase01",
        "Avatar_MissionBattleEvent60044_Skill03_Phase02",
        "Avatar_MissionBattleEvent60044_Skill03_Camera"
      ],
      "toughnessList": [
        0,
        180,
        0
      ],
      "hitSplits": []
    },
    "SkillP01": {
      "skillID": 6004402,
      "trigger": "SkillP01",
      "name": "Mechatron Swordomain: Void Slash",
      "type": "Talent",
      "slot": "Talent",
      "desc": "",
      "energyCost": null,
      "energyRegen": null,
      "energyRate": 0.5,
      "toughnessReductionDisplayed": null,
      "skillPointCost": 0,
      "skillPointGain": 0,
      "params": {
        "1": []
      },
      "skillEffect": "Passive",
      "maxLevel": 1,
      "configAbilityList": [
        "Avatar_MissionBattleEvent60044_SkillP01"
      ],
      "toughnessList": [
        0,
        0,
        0
      ],
      "hitSplits": []
    }
  },
  "isBattleEvent": true,
  "finalData": {
    "name": "Battle Event Construction",
    "ID": 60044,
    "team": "Player Team",
    "eventType": "Assist",
    "abilityList": null,
    "overridesArray": [
      {
        "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;",
        "value": 90
      },
      {
        "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
        "value": 100
      },
      {
        "statName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;",
        "value": 100
      }
    ],
    "hardLevelEvent": true,
    "actionDescription": "Deals massive DMG to all enemy targets, applies \"Knockdown\" to Asat Pramad, and causes all ally targets to immediately take action. A \"Knockdown\" countdown appears on the Action Order. At the start of the countdown's turn, Lord of Saṃvartasthāyi, Asat Pramad exits the \"Knockdown\" state and immediately takes action."
  }
}