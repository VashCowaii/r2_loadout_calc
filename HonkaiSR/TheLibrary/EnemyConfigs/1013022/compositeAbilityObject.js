const compositeAbilityObject = {
  "fullCharacterName": 1013022,
  "trimCharacterName": 1013022,
  "abilityList": [
    "1013022_Monster_W1_Mecha04_RL_PassiveAbility_InsertCamera",
    "1013022_Monster_W1_Mecha04_RL_PassiveAbility_Insert3",
    "1013022_Monster_W1_Mecha04_RL_PassiveAbility_Insert2",
    "1013022_Monster_W1_Mecha04_RL_PassiveAbility_Insert",
    "1013022_WMonster_W1_Mecha_05_RL_Ability13_Part02",
    "1013022_WMonster_W1_Mecha_05_RL_Ability13_Part01",
    "1013022_WMonster_W1_Mecha_05_RL_Ability10_Part02",
    "1013022_WMonster_W1_Mecha_05_RL_Ability10_Part01",
    "1013022_WMonster_W1_Mecha_05_RL_Ability08_Part02",
    "1013022_WMonster_W1_Mecha_05_RL_Ability08_Part01",
    "1013022_WMonster_W1_Mecha_05_RL_Passive_AIControlAndHPLock",
    "1013022_WMonster_W1_Mecha_05_Passive_AIControlAndHPLock",
    "1013022_WMonster_W1_Mecha_05_Ability12_Part02",
    "1013022_WMonster_W1_Mecha_05_Ability12_Part01",
    "1013022_WMonster_W1_Mecha_05_Ability11_Part02",
    "1013022_WMonster_W1_Mecha_05_Ability11_Part01",
    "1013022_WMonster_W1_Mecha_05_AbilityP09_Part02",
    "1013022_WMonster_W1_Mecha_05_AbilityP09_Part01",
    "1013022_WMonster_W1_Mecha_05_Ability09_Part02",
    "1013022_WMonster_W1_Mecha_05_Ability09_Part01",
    "1013022_WMonster_W1_Mecha_05_Ability07_Part02",
    "1013022_WMonster_W1_Mecha_05_Ability07_Part01",
    "1013022_WMonster_W1_Mecha_05_Ability06_Part02",
    "1013022_WMonster_W1_Mecha_05_Ability06_Part01",
    "1013022_Monster_W1_Mecha04_PassiveAbility_KlaraSpecialVictory",
    "1013022_Modifiers"
  ],
  "abilityObject": {
    "1013022_Monster_W1_Mecha04_RL_PassiveAbility_InsertCamera": {
      "fileName": "1013022_Monster_W1_Mecha04_RL_PassiveAbility_InsertCamera",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "1013022_Monster_W1_Mecha04_RL_PassiveAbility_Insert3": {
      "fileName": "1013022_Monster_W1_Mecha04_RL_PassiveAbility_Insert3",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "searchRandom": true,
          "includeDyingTargets": true,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "Monster_W1_Mecha03_RL_PartController"
          },
          "ifTargetFound": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Monster_W1_Mecha03_RL_Dormancy"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Monster_W1_Mecha03_RL_Enhance_Dormancy[<span class=\"descriptionNumberColor\">Firepower Recovery</span>]"
            },
            {
              "name": "Lock HP",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            },
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "silent": true
            },
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "silent": true
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "W1_Mecha02_AttackBonus[<span class=\"descriptionNumberColor\">Charging</span>]"
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Standard_Servant[<span class=\"descriptionNumberColor\">Self-Destruct</span>]",
                "includePreDeath": true
              },
              "ifTargetFound": [
                {
                  "name": "Remove Modifier Behavior Flag(s)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "flagNames": []
                },
                {
                  "name": "Mark Entity For Immediate Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                },
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Monster_W1_Mecha03_RL_Explode"
                }
              ]
            },
            {
              "name": "Action Advance/Delay",
              "advanceType": "Set",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "multiBase": 0.01
            },
            {
              "name": "Action Advance/Delay",
              "advanceType": "Set",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "multiBase": 0
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "Monster_ChangePhase"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "Monster_ChangePhase_ParamEntity"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Monster_W1_Mecha04_RL_Part3Passive[<span class=\"descriptionNumberColor\">Combat Speed-Up</span>]",
              "valuePerStack": {
                "MDF_SpeedAddedRatio": {
                  "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                  "displayLines": "{[PassiveSkill01[0]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill01[0]]}"
                  ]
                }
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Monster_W1_Mecha03_RL_Revenge[<span class=\"descriptionNumberColor\">Obliteration Order</span>]",
              "valuePerStack": {
                "MDF_DamageUpRatio": {
                  "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__34) || RETURN",
                  "displayLines": "ENEMIES_OBJECT_UNUSED__34",
                  "constants": [],
                  "variables": [
                    "ENEMIES_OBJECT_UNUSED__34"
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
              "modifier": "Monster_W1_Mecha04_RL_Endurance"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Monster_W1_Mecha04_PassiveMDF[<span class=\"descriptionNumberColor\">Hounding Pursuit</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Enemy_W1_Mecha04_ChainSawSpeedUp"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Monster_W1_Mecha04_RL_ChargeFlag"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Monster_W1_Mecha04_RL_Part02Effect"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Monster_W1_Mecha04_RL_Part03Effect"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Monster_Mecha04_RL_ResetAI"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "Monster_W1_Mecha04_Sign01[<span class=\"descriptionNumberColor\">Lock On</span>]",
              "onlyRemoveOwnersInstance": true
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "Monster_W1_Mecha04_Sign02[<span class=\"descriptionNumberColor\">Lock On</span>]",
              "onlyRemoveOwnersInstance": true
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Monster_W1_Mecha03_RL_Endurance"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Monster_W1_Mecha03_RemoveOneMore"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "OneMorePerTurn",
              "casterAssign": "TargetSelf"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Monster_W1_Mecha03_RL_ChargeFlag",
              "casterAssign": "TargetSelf"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Monster_W1_Mecha03_RL_Part03Effect"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Monster_W1_Mecha03_RL_Part03Effect",
              "casterAssign": "TargetSelf"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "Standard_CTRL_Taunt[<span class=\"descriptionNumberColor\">Taunt</span>]",
              "onlyRemoveOwnersInstance": true
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
              "variableName": "WMonster_W1_Mecha_02_AIFlag_P2",
              "value": 1
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "scope": "TargetEntity",
              "variableName": "InsertCheck",
              "value": 1
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
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
              "variableName": "TeammateSurvive",
              "value": 1
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "scope": "TargetEntity",
              "variableName": "TeammateSurvive",
              "value": 1
            }
          ]
        }
      ],
      "references": []
    },
    "1013022_Monster_W1_Mecha04_RL_PassiveAbility_Insert2": {
      "fileName": "1013022_Monster_W1_Mecha04_RL_PassiveAbility_Insert2",
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
          "name": "Use Custom Character Function",
          "functionName": "Monster_ChangePhase"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W1_Mecha04_RL_Part3Passive[<span class=\"descriptionNumberColor\">Combat Speed-Up</span>]",
          "valuePerStack": {
            "MDF_SpeedAddedRatio": {
              "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
              "displayLines": "{[PassiveSkill01[0]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill01[0]]}"
              ]
            }
          }
        },
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
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W1_Mecha04_RL_Endurance"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_W1_Mecha04_ChainSawSpeedUp"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "Monster_W1_Mecha04_Sign01[<span class=\"descriptionNumberColor\">Lock On</span>]",
          "onlyRemoveOwnersInstance": true
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "Monster_W1_Mecha04_Sign02[<span class=\"descriptionNumberColor\">Lock On</span>]",
          "onlyRemoveOwnersInstance": true
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "WMonster_W1_Mecha_02_AIFlag_P2",
          "value": 1
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W1_Mecha04_RL_PartController"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W1_Mecha04_RL_ChargeFlag"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W1_Mecha04_RL_Part02Effect"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W1_Mecha04_RL_Part03Effect"
        }
      ],
      "references": []
    },
    "1013022_Monster_W1_Mecha04_RL_PassiveAbility_Insert": {
      "fileName": "1013022_Monster_W1_Mecha04_RL_PassiveAbility_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "searchRandom": true,
          "includeDyingTargets": true,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "Monster_W1_Mecha03_RL_PartController"
          },
          "ifTargetFound": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Monster_W1_Mecha03_RL_Dormancy"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Monster_W1_Mecha03_RL_Enhance_Dormancy[<span class=\"descriptionNumberColor\">Firepower Recovery</span>]"
            },
            {
              "name": "Lock HP",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            },
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "silent": true
            },
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "silent": true
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "W1_Mecha02_AttackBonus[<span class=\"descriptionNumberColor\">Charging</span>]"
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Standard_Servant[<span class=\"descriptionNumberColor\">Self-Destruct</span>]",
                "includePreDeath": true
              },
              "ifTargetFound": [
                {
                  "name": "Remove Modifier Behavior Flag(s)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "flagNames": []
                },
                {
                  "name": "Mark Entity For Immediate Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                },
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Monster_W1_Mecha03_RL_Explode"
                }
              ]
            },
            {
              "name": "Action Advance/Delay",
              "advanceType": "Set",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "multiBase": 0.01
            },
            {
              "name": "Action Advance/Delay",
              "advanceType": "Set",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "multiBase": 0
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "Monster_ChangePhase"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "Monster_ChangePhase_ParamEntity"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Monster_W1_Mecha04_RL_Endurance"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Monster_W1_Mecha04_PassiveMDF[<span class=\"descriptionNumberColor\">Hounding Pursuit</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Enemy_W1_Mecha04_ChainSawSpeedUp"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Monster_W1_Mecha04_RL_ChargeFlag"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Monster_W1_Mecha04_RL_Part02Effect"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Monster_Mecha04_RL_ResetAI"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "Sign_W1_Mecha02[<span class=\"descriptionNumberColor\">Lock On</span>]",
              "onlyRemoveOwnersInstance": true
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Monster_W1_Mecha03_RL_Endurance"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Monster_W1_Mecha03_RemoveOneMore"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "OneMorePerTurn",
              "casterAssign": "TargetSelf"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Monster_W1_Mecha03_RL_ChargeFlag",
              "casterAssign": "TargetSelf"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Monster_W1_Mecha03_RL_Part02Effect",
              "casterAssign": "TargetSelf"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "Standard_CTRL_Taunt[<span class=\"descriptionNumberColor\">Taunt</span>]",
              "onlyRemoveOwnersInstance": true
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
              "variableName": "WMonster_W1_Mecha_02_AIFlag_P2",
              "value": 1
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "scope": "TargetEntity",
              "variableName": "InsertCheck",
              "value": 1
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "scope": "TargetEntity",
              "variableName": "AIFlag",
              "value": 1
            }
          ]
        }
      ],
      "references": []
    },
    "1013022_WMonster_W1_Mecha_05_RL_Ability13_Part02": {
      "fileName": "1013022_WMonster_W1_Mecha_05_RL_Ability13_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Monster_W1_Mecha04_RL_Enhance_Dormancy[<span class=\"descriptionNumberColor\">Speedy Recovery</span>]",
            "compareType": "=",
            "value2": 1,
            "valueType": "LifeTime"
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Monster_W1_Mecha04_RL_Enhance_Dormancy[<span class=\"descriptionNumberColor\">Speedy Recovery</span>]"
            },
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "silent": true
            },
            {
              "name": "Exit Broken-State",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              }
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "MaxHPValue",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
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
                  "name": "Set HP Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "setValue": {
                    "operator": "Variables[0] (MaxHPValue) || Variables[1] ({[Skill13[1]]}) || MUL || RETURN",
                    "displayLines": "(MaxHPValue * {[Skill13[1]]})",
                    "constants": [],
                    "variables": [
                      "MaxHPValue",
                      "{[Skill13[1]]}"
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "Set HP Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "setValue": {
                    "operator": "Variables[0] (MaxHPValue) || Variables[1] ({[Skill13[3]]}) || MUL || RETURN",
                    "displayLines": "(MaxHPValue * {[Skill13[3]]})",
                    "constants": [],
                    "variables": [
                      "MaxHPValue",
                      "{[Skill13[3]]}"
                    ]
                  }
                }
              ]
            },
            {
              "name": "Reset Toughness",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 1
              },
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
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
                "value2": 1
              },
              "failed": [
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Monster_W1_Mecha04_RL_Part02Effect"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Monster_W1_Mecha04_RL_Part03Effect"
                    }
                  ]
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Monster_W1_Mecha04_RL_Enhance_Dormancy[<span class=\"descriptionNumberColor\">Speedy Recovery</span>]",
                "compareType": "=",
                "value2": 2,
                "valueType": "LifeTime"
              },
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Monster_W1_Mecha04_RL_Enhance_Dormancy[<span class=\"descriptionNumberColor\">Speedy Recovery</span>]",
                    "compareType": "=",
                    "value2": 3,
                    "valueType": "LifeTime"
                  },
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Monster_W1_Mecha04_RL_Enhance_Dormancy[<span class=\"descriptionNumberColor\">Speedy Recovery</span>]",
                        "compareType": "=",
                        "value2": 4,
                        "valueType": "LifeTime"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1013022_WMonster_W1_Mecha_05_RL_Ability13_Part01": {
      "fileName": "1013022_WMonster_W1_Mecha_05_RL_Ability13_Part01",
      "childAbilityList": [
        "1013022_WMonster_W1_Mecha_05_RL_Ability13_Camera",
        "1013022_WMonster_W1_Mecha_05_RL_Ability13_Part01",
        "1013022_WMonster_W1_Mecha_05_RL_Ability13_Part02"
      ],
      "skillTrigger": "Skill13",
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
          "ability": "WMonster_W1_Mecha_05_RL_Ability13_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1013022_WMonster_W1_Mecha_05_RL_Ability10_Part02": {
      "fileName": "1013022_WMonster_W1_Mecha_05_RL_Ability10_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "searchRandom": true,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "Monster_W1_Mecha03_RL_PartController"
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
                    "flagName": "DisableAction"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "Break"
                  }
                ]
              },
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 3
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Monster_W1_Mecha03_RL_Ability03_DamageUp[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                      "valuePerStack": {
                        "MDF_DamageUpRatio_PerLayer": {
                          "operator": "Variables[0] (Mecha03_00_DamageUpPercentage) || RETURN",
                          "displayLines": "Mecha03_00_DamageUpPercentage",
                          "constants": [],
                          "variables": [
                            "Mecha03_00_DamageUpPercentage"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "W1_Mecha02_AttackBonus_Effect"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "W1_Mecha02_AttackBonus[<span class=\"descriptionNumberColor\">Charging</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "W1_Mecha02_AttackBonus[<span class=\"descriptionNumberColor\">Charging</span>]",
                      "duration": 1,
                      "valuePerStack": {
                        "ModifierDamageUpValue": {
                          "operator": "Variables[0] (Mecha03_00_DamageUpPercentage) || RETURN",
                          "displayLines": "Mecha03_00_DamageUpPercentage",
                          "constants": [],
                          "variables": [
                            "Mecha03_00_DamageUpPercentage"
                          ]
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 3
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Monster_APShow_Base_Immediately",
                  "valuePerStack": {
                    "Acc_Turn": 0
                  }
                }
              ]
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
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 3
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
              "modifier": "Monster_W1_Mecha04_RL_Ability12_SpeedUp[<span class=\"descriptionNumberColor\">SPD Boost</span>]"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_W1_Mecha04_ChainSawSpeedUp"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Mecha04_Aim_Flag"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "searchRandom": true,
          "maxTargets": 2,
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Mecha04_Aim_Flag",
                "compareType": "=",
                "value2": 0,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Mecha04_Aim_Flag",
                  "value": 1
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Monster_W1_Mecha04_Sign01[<span class=\"descriptionNumberColor\">Lock On</span>]",
                  "counter": 1
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Monster_W1_Mecha04_Sign02[<span class=\"descriptionNumberColor\">Lock On</span>]",
                  "counter": 1
                }
              ]
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1013022_WMonster_W1_Mecha_05_RL_Ability10_Part01": {
      "fileName": "1013022_WMonster_W1_Mecha_05_RL_Ability10_Part01",
      "childAbilityList": [
        "1013022_WMonster_W1_Mecha_05_RL_Ability10_Camera",
        "1013022_WMonster_W1_Mecha_05_RL_Ability10_Part01",
        "1013022_WMonster_W1_Mecha_05_RL_Ability10_Part02"
      ],
      "skillTrigger": "Skill10",
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
          "ability": "WMonster_W1_Mecha_05_RL_Ability10_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "searchRandom": true,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "Monster_W1_Mecha03_RL_PartController"
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
                    "flagName": "DisableAction"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "Break"
                  }
                ]
              }
            }
          ]
        }
      ],
      "references": []
    },
    "1013022_WMonster_W1_Mecha_05_RL_Ability08_Part02": {
      "fileName": "1013022_WMonster_W1_Mecha_05_RL_Ability08_Part02",
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
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill08[0]]}) || Constants[0] (0.2) || MUL || RETURN",
              "displayLines": "({[Skill08[0]]} * 0.2)",
              "constants": [
                0.2
              ],
              "variables": [
                "{[Skill08[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "20%"
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
              "operator": "Variables[0] ({[Skill08[0]]}) || Constants[0] (0.8) || MUL || RETURN",
              "displayLines": "({[Skill08[0]]} * 0.8)",
              "constants": [
                0.8
              ],
              "variables": [
                "{[Skill08[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "80%"
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "W1_Mecha02_ThunderDOT[<span class=\"descriptionNumberColor\">Bleed</span>]",
          "duration": 2,
          "baseChance": 1,
          "stackLimit": {
            "operator": "Variables[0] ({[Skill06[3]]}) || RETURN",
            "displayLines": "{[Skill06[3]]}",
            "constants": [],
            "variables": [
              "{[Skill06[3]]}"
            ]
          },
          "valuePerStack": {
            "Modifier_Bleed_DamagePercentage": {
              "operator": "Variables[0] ({[Skill06[1]]}) || RETURN",
              "displayLines": "{[Skill06[1]]}",
              "constants": [],
              "variables": [
                "{[Skill06[1]]}"
              ]
            },
            "MDF_MaxLayer": {
              "operator": "Variables[0] ({[Skill06[3]]}) || RETURN",
              "displayLines": "{[Skill06[3]]}",
              "constants": [],
              "variables": [
                "{[Skill06[3]]}"
              ]
            }
          },
          "addStacksPerTrigger": {
            "operator": "Variables[0] ({[Skill08[1]]}) || RETURN",
            "displayLines": "{[Skill08[1]]}",
            "constants": [],
            "variables": [
              "{[Skill08[1]]}"
            ]
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1013022_WMonster_W1_Mecha_05_RL_Ability08_Part01": {
      "fileName": "1013022_WMonster_W1_Mecha_05_RL_Ability08_Part01",
      "childAbilityList": [
        "1013022_WMonster_W1_Mecha_05_RL_Ability08_Camera",
        "1013022_WMonster_W1_Mecha_05_RL_Ability08_Part01",
        "1013022_WMonster_W1_Mecha_05_RL_Ability08_Part02"
      ],
      "skillTrigger": "Skill08",
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
          "ability": "WMonster_W1_Mecha_05_RL_Ability08_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "references": []
    },
    "1013022_WMonster_W1_Mecha_05_RL_Passive_AIControlAndHPLock": {
      "fileName": "1013022_WMonster_W1_Mecha_05_RL_Passive_AIControlAndHPLock",
      "childAbilityList": [
        "1013022_WMonster_W1_Mecha_05_RL_Passive_AIControlAndHPLock"
      ],
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
          "modifier": "Monster_Mecha04_BattleScore1"
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
          "modifier": "Monster_W1_Mecha04_PassiveMDF[<span class=\"descriptionNumberColor\">Hounding Pursuit</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W1_Mecha04_InsertControl"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W1_Mecha04_RL_PartController"
        }
      ],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "WMonster_Mecha_02_MuteHitFly"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_W1_Mecha04_ChainSawSpeedController"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "HideMonsterHUD"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Monster_W1_Mecha04_PassiveMDF[<span class=\"descriptionNumberColor\">Hounding Pursuit</span>]",
          "stackData": [],
          "latentQueue": [],
          "description": "If \"Felling Order\" hits one target that does not currently have a Shield, immediately use \"Dismantle\" on a random target.",
          "type": "Other",
          "statusName": "Hounding Pursuit"
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_W1_Mecha04_ChainSawSpeedNormal",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_W1_Mecha04_ChainSawSpeedController",
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
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "StanceBreakState"
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "STAT_Confine"
                      }
                    ]
                  },
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Enemy_W1_Mecha04_ChainSawSpeedNormal"
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
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "STAT_Confine"
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "STAT_CTRL_Frozen"
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "Break"
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
                      "modifier": "Enemy_W1_Mecha04_ChainSawSpeedNormal"
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
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "STAT_Confine"
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "STAT_CTRL_Frozen"
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "Break"
                      }
                    ]
                  },
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Enemy_W1_Mecha04_ChainSawSpeedNormal"
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
          "for": "WMonster_Mecha_02_MuteHitFly",
          "modifierFlags": [
            "MuteHitFly"
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "HideMonsterHUD",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]"
            },
            {
              "eventTrigger": "Action Choice Window [Owner]"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W1_Mecha04_InsertControl",
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
                  "variableName": "Monster_W1_Mecha04_00_InsertFlag"
                }
              ]
            },
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
                    "value1": "HP_Bars_Remaining",
                    "compareType": ">=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "Monster_W1_Mecha04_Sign01[<span class=\"descriptionNumberColor\">Lock On</span>]"
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "Monster_W1_Mecha04_Sign02[<span class=\"descriptionNumberColor\">Lock On</span>]"
                          }
                        ]
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "Enemy_W1_Mecha04_ChainSawSpeedUpAgain"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Sign_W1_Mecha02[<span class=\"descriptionNumberColor\">Lock On</span>]"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "Enemy_W1_Mecha04_ChainSawSpeedUpAgain"
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
        }
      ]
    },
    "1013022_WMonster_W1_Mecha_05_Passive_AIControlAndHPLock": {
      "fileName": "1013022_WMonster_W1_Mecha_05_Passive_AIControlAndHPLock",
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
          "modifier": "Monster_Mecha04_BattleScore1"
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
          "modifier": "Monster_W1_Mecha04_InsertControl"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 1013021,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Automaton Direwolf (Bug)"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Monster_Mecha04_ResetAI"
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Monster_W1_Mecha04_PassiveMDF[<span class=\"descriptionNumberColor\">Hounding Pursuit</span>]"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Monster_W1_Mecha04_RemoveOneMore"
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
          "modifier": "WMonster_Mecha_02_MuteHitFly"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_W1_Mecha04_ChainSawSpeedController"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "HideMonsterHUD"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Monster_W1_Mecha04_PassiveMDF[<span class=\"descriptionNumberColor\">Hounding Pursuit</span>]",
          "stackData": [],
          "latentQueue": [],
          "description": "If \"Felling Order\" hits one target that does not currently have a Shield, immediately use \"Dismantle\" on a random target.",
          "type": "Other",
          "statusName": "Hounding Pursuit"
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_W1_Mecha04_ChainSawSpeedNormal",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_W1_Mecha04_ChainSawSpeedController",
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
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "StanceBreakState"
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "STAT_Confine"
                      }
                    ]
                  },
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Enemy_W1_Mecha04_ChainSawSpeedNormal"
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
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "STAT_Confine"
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "STAT_CTRL_Frozen"
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "Break"
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
                      "modifier": "Enemy_W1_Mecha04_ChainSawSpeedNormal"
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
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "STAT_Confine"
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "STAT_CTRL_Frozen"
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "Break"
                      }
                    ]
                  },
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Enemy_W1_Mecha04_ChainSawSpeedNormal"
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
          "for": "WMonster_Mecha_02_MuteHitFly",
          "modifierFlags": [
            "MuteHitFly"
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "HideMonsterHUD",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]"
            },
            {
              "eventTrigger": "Action Choice Window [Owner]"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W1_Mecha04_InsertControl",
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
                  "variableName": "Monster_W1_Mecha04_00_InsertFlag"
                }
              ]
            },
            {
              "eventTrigger": "End Broken State [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": 1013021,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "characterName": "Automaton Direwolf (Bug)"
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "Monster_W1_Mecha04_Sign01[<span class=\"descriptionNumberColor\">Lock On</span>]"
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "Monster_W1_Mecha04_Sign02[<span class=\"descriptionNumberColor\">Lock On</span>]"
                          }
                        ]
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "Enemy_W1_Mecha04_ChainSawSpeedUpAgain"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Sign_W1_Mecha02[<span class=\"descriptionNumberColor\">Lock On</span>]"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "Enemy_W1_Mecha04_ChainSawSpeedUpAgain"
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
          "for": "Monster_Mecha04_ResetAI",
          "execute": [
            {
              "eventTrigger": "Action End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_ResetValue",
                    "compareType": "=",
                    "value2": 10
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "WMonster_W1_Mecha_02_AIFlag_P2",
                      "value": 10
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_ResetValue",
                        "compareType": "=",
                        "value2": 3
                      },
                      "passed": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "WMonster_W1_Mecha_02_AIFlag_P2",
                          "value": 3
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Turn End [Anyone]",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "searchRandom": true,
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Monster_W1_Mecha04_Sign01[<span class=\"descriptionNumberColor\">Lock On</span>]"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Monster_W1_Mecha04_Sign02[<span class=\"descriptionNumberColor\">Lock On</span>]"
                      }
                    ]
                  },
                  "noTargetFound": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "WMonster_W1_Mecha_02_AIFlag_P2",
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
                      "name": "Define Custom Variable",
                      "variableName": "MDF_ResetValue",
                      "value": 0
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
                    "modifier": "Monster_W1_Mecha04_Sign01[<span class=\"descriptionNumberColor\">Lock On</span>]"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_ResetValue",
                      "value": 10
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "WMonster_W1_Mecha_02_AIFlag_P2",
                      "value": 10
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "Monster_W1_Mecha04_Sign02[<span class=\"descriptionNumberColor\">Lock On</span>]"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_ResetValue",
                      "value": 3
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "WMonster_W1_Mecha_02_AIFlag_P2",
                      "value": 3
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
    "1013022_WMonster_W1_Mecha_05_Ability12_Part02": {
      "fileName": "1013022_WMonster_W1_Mecha_05_Ability12_Part02",
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
          "modifier": "Enemy_W1_Mecha04_ChainSawSpeedUp"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Mecha04_Aim_Flag"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "searchRandom": true,
          "maxTargets": 2,
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Mecha04_Aim_Flag",
                "compareType": "=",
                "value2": 0,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Mecha04_Aim_Flag",
                  "value": 1
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Monster_W1_Mecha04_Sign01[<span class=\"descriptionNumberColor\">Lock On</span>]",
                  "counter": 1
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Monster_W1_Mecha04_Sign02[<span class=\"descriptionNumberColor\">Lock On</span>]",
                  "counter": 1
                }
              ]
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
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 3
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
              "modifier": "Monster_W1_Mecha04_RL_Ability12_SpeedUp[<span class=\"descriptionNumberColor\">SPD Boost</span>]"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1013022_WMonster_W1_Mecha_05_Ability12_Part01": {
      "fileName": "1013022_WMonster_W1_Mecha_05_Ability12_Part01",
      "childAbilityList": [
        "1013022_WMonster_W1_Mecha_05_Ability12_Camera",
        "1013022_WMonster_W1_Mecha_05_Ability12_Part01",
        "1013022_WMonster_W1_Mecha_05_Ability12_Part02"
      ],
      "skillTrigger": "Skill12",
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
          "ability": "WMonster_W1_Mecha_05_Ability12_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1013022_WMonster_W1_Mecha_05_Ability11_Part02": {
      "fileName": "1013022_WMonster_W1_Mecha_05_Ability11_Part02",
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
              "operator": "Variables[0] ({[Skill11[0]]}) || RETURN",
              "displayLines": "{[Skill11[0]]}",
              "constants": [],
              "variables": [
                "{[Skill11[0]]}"
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
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "W1_Mecha02_ThunderDOT[<span class=\"descriptionNumberColor\">Bleed</span>]",
          "duration": 2,
          "baseChance": 1,
          "stackLimit": {
            "operator": "Variables[0] ({[Skill06[3]]}) || RETURN",
            "displayLines": "{[Skill06[3]]}",
            "constants": [],
            "variables": [
              "{[Skill06[3]]}"
            ]
          },
          "valuePerStack": {
            "Modifier_Bleed_DamagePercentage": {
              "operator": "Variables[0] ({[Skill06[1]]}) || RETURN",
              "displayLines": "{[Skill06[1]]}",
              "constants": [],
              "variables": [
                "{[Skill06[1]]}"
              ]
            },
            "MDF_MaxLayer": {
              "operator": "Variables[0] ({[Skill06[3]]}) || RETURN",
              "displayLines": "{[Skill06[3]]}",
              "constants": [],
              "variables": [
                "{[Skill06[3]]}"
              ]
            }
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1013022_WMonster_W1_Mecha_05_Ability11_Part01": {
      "fileName": "1013022_WMonster_W1_Mecha_05_Ability11_Part01",
      "childAbilityList": [
        "1013022_WMonster_W1_Mecha_05_Ability11_Camera",
        "1013022_WMonster_W1_Mecha_05_Ability11_Part01",
        "1013022_WMonster_W1_Mecha_05_Ability11_Part02"
      ],
      "skillTrigger": "Skill11",
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
          "ability": "WMonster_W1_Mecha_05_Ability11_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1013022_WMonster_W1_Mecha_05_AbilityP09_Part02": {
      "fileName": "1013022_WMonster_W1_Mecha_05_AbilityP09_Part02",
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
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill09[0]]}) || RETURN",
              "displayLines": "{[Skill09[0]]}",
              "constants": [],
              "variables": [
                "{[Skill09[0]]}"
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
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "W1_Mecha02_ThunderDOT[<span class=\"descriptionNumberColor\">Bleed</span>]",
          "duration": 2,
          "baseChance": 1,
          "stackLimit": {
            "operator": "Variables[0] ({[Skill06[3]]}) || RETURN",
            "displayLines": "{[Skill06[3]]}",
            "constants": [],
            "variables": [
              "{[Skill06[3]]}"
            ]
          },
          "valuePerStack": {
            "Modifier_Bleed_DamagePercentage": {
              "operator": "Variables[0] ({[Skill06[1]]}) || RETURN",
              "displayLines": "{[Skill06[1]]}",
              "constants": [],
              "variables": [
                "{[Skill06[1]]}"
              ]
            },
            "MDF_MaxLayer": {
              "operator": "Variables[0] ({[Skill06[3]]}) || RETURN",
              "displayLines": "{[Skill06[3]]}",
              "constants": [],
              "variables": [
                "{[Skill06[3]]}"
              ]
            }
          }
        },
        "Trigger: Attack End"
      ],
      "references": []
    },
    "1013022_WMonster_W1_Mecha_05_AbilityP09_Part01": {
      "fileName": "1013022_WMonster_W1_Mecha_05_AbilityP09_Part01",
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
            "target": "{{Ability Target(ST)}}"
          },
          "ability": "WMonster_W1_Mecha_05_AbilityP09_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1013022_WMonster_W1_Mecha_05_Ability09_Part02": {
      "fileName": "1013022_WMonster_W1_Mecha_05_Ability09_Part02",
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
              "operator": "Variables[0] ({[Skill09[0]]}) || RETURN",
              "displayLines": "{[Skill09[0]]}",
              "constants": [],
              "variables": [
                "{[Skill09[0]]}"
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
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "W1_Mecha02_ThunderDOT[<span class=\"descriptionNumberColor\">Bleed</span>]",
          "duration": 2,
          "baseChance": 1,
          "stackLimit": {
            "operator": "Variables[0] ({[Skill06[3]]}) || RETURN",
            "displayLines": "{[Skill06[3]]}",
            "constants": [],
            "variables": [
              "{[Skill06[3]]}"
            ]
          },
          "valuePerStack": {
            "Modifier_Bleed_DamagePercentage": {
              "operator": "Variables[0] ({[Skill06[1]]}) || RETURN",
              "displayLines": "{[Skill06[1]]}",
              "constants": [],
              "variables": [
                "{[Skill06[1]]}"
              ]
            },
            "MDF_MaxLayer": {
              "operator": "Variables[0] ({[Skill06[3]]}) || RETURN",
              "displayLines": "{[Skill06[3]]}",
              "constants": [],
              "variables": [
                "{[Skill06[3]]}"
              ]
            }
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1013022_WMonster_W1_Mecha_05_Ability09_Part01": {
      "fileName": "1013022_WMonster_W1_Mecha_05_Ability09_Part01",
      "childAbilityList": [
        "1013022_WMonster_W1_Mecha_05_Ability09_Camera",
        "1013022_WMonster_W1_Mecha_05_Ability09_Part01",
        "1013022_WMonster_W1_Mecha_05_Ability09_Part02"
      ],
      "skillTrigger": "Skill09",
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
          "ability": "WMonster_W1_Mecha_05_Ability09_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1013022_WMonster_W1_Mecha_05_Ability07_Part02": {
      "fileName": "1013022_WMonster_W1_Mecha_05_Ability07_Part02",
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
          "modifier": "Enemy_W1_Mecha04_ChainSawSpeedUp"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "Sign_W1_Mecha02[<span class=\"descriptionNumberColor\">Lock On</span>]",
          "counter": 1
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1013022_WMonster_W1_Mecha_05_Ability07_Part01": {
      "fileName": "1013022_WMonster_W1_Mecha_05_Ability07_Part01",
      "childAbilityList": [
        "1013022_WMonster_W1_Mecha_05_Ability07_Camera",
        "1013022_WMonster_W1_Mecha_05_Ability07_Part01",
        "1013022_WMonster_W1_Mecha_05_Ability07_Part02"
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
          "ability": "WMonster_W1_Mecha_05_Ability07_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1013022_WMonster_W1_Mecha_05_Ability06_Part02": {
      "fileName": "1013022_WMonster_W1_Mecha_05_Ability06_Part02",
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
              "target": "{{Ability Target(ST)}}"
            },
            "flagName": "Shield"
          },
          "failed": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "Mecha04_BattleScore2_Flag",
              "context": "TargetEntity",
              "value": 1,
              "max": 1
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Target Has Lowest/Highest Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "partOf": {
                  "name": "Target Name",
                  "target": "{{Hostile Entities(AOE)}}"
                },
                "compareValue": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent%</span>&nbsp;",
                "minOrMax": "Max"
              },
              "ifTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": 1013021,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "Automaton Direwolf (Bug)"
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "Mecha04_EnemySelector"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Ability Target(ST)}}"
                        },
                        "modifier": "Monster_W1_Mecha04_Sign01[<span class=\"descriptionNumberColor\">Lock On</span>]"
                      },
                      "passed": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "Mecha04_EnemySelector",
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
                          "variableName": "Mecha04_EnemySelector",
                          "value": 2
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Enemy ID",
                            "ID": 1013022,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "characterName": "Automaton Direwolf (Complete)"
                          },
                          {
                            "name": "Enemy ID",
                            "ID": 1013023,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "characterName": "Automaton Direwolf (Complete)"
                          },
                          {
                            "name": "Enemy ID",
                            "ID": 1013024,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "characterName": "Automaton Direwolf (Complete)"
                          }
                        ]
                      },
                      "passed": [
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
                              "name": "IF",
                              "conditions": {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                "modifier": "OneMore"
                              },
                              "passed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "OneMore",
                                  "duration": 2
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "OneMore"
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
                              "variableName": "Monster_W1_Mecha04_00_InsertFlag",
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
                              "variableName": "Mecha04_EnemySelector"
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Ability Target(ST)}}"
                                },
                                "modifier": "Monster_W1_Mecha04_Sign01[<span class=\"descriptionNumberColor\">Lock On</span>]"
                              },
                              "passed": [
                                {
                                  "name": "Declare Custom Variable",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "scope": "TargetEntity",
                                  "variableName": "Mecha04_EnemySelector",
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
                                  "variableName": "Mecha04_EnemySelector",
                                  "value": 2
                                }
                              ]
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
                              "target": "{{Caster}}"
                            },
                            "modifier": "OneMore"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "OneMore",
                              "duration": 2
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "OneMore"
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
                          "variableName": "Monster_W1_Mecha04_00_InsertFlag",
                          "value": 1
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
          "name": "Looped Event",
          "maxLoops": 5,
          "Event": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "operator": "Variables[0] ({[Skill06[2]]}) || Constants[0] (0.1) || MUL || RETURN",
                  "displayLines": "({[Skill06[2]]} * 0.1)",
                  "constants": [
                    0.1
                  ],
                  "variables": [
                    "{[Skill06[2]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "EnergyGainPercent": "10%"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "W1_Mecha02_ThunderDOT[<span class=\"descriptionNumberColor\">Bleed</span>]",
              "duration": 2,
              "baseChance": {
                "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
                "displayLines": "{[Skill06[0]]}",
                "constants": [],
                "variables": [
                  "{[Skill06[0]]}"
                ]
              },
              "stackLimit": {
                "operator": "Variables[0] ({[Skill06[3]]}) || RETURN",
                "displayLines": "{[Skill06[3]]}",
                "constants": [],
                "variables": [
                  "{[Skill06[3]]}"
                ]
              },
              "valuePerStack": {
                "Modifier_Bleed_DamagePercentage": {
                  "operator": "Variables[0] ({[Skill06[1]]}) || RETURN",
                  "displayLines": "{[Skill06[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill06[1]]}"
                  ]
                },
                "MDF_MaxLayer": {
                  "operator": "Variables[0] ({[Skill06[3]]}) || RETURN",
                  "displayLines": "{[Skill06[3]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill06[3]]}"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Looped Event",
          "maxLoops": 5,
          "Event": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "operator": "Variables[0] ({[Skill06[2]]}) || Constants[0] (0.1) || MUL || RETURN",
                  "displayLines": "({[Skill06[2]]} * 0.1)",
                  "constants": [
                    0.1
                  ],
                  "variables": [
                    "{[Skill06[2]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "EnergyGainPercent": "10%"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "W1_Mecha02_ThunderDOT[<span class=\"descriptionNumberColor\">Bleed</span>]",
              "duration": 2,
              "baseChance": {
                "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
                "displayLines": "{[Skill06[0]]}",
                "constants": [],
                "variables": [
                  "{[Skill06[0]]}"
                ]
              },
              "stackLimit": {
                "operator": "Variables[0] ({[Skill06[3]]}) || RETURN",
                "displayLines": "{[Skill06[3]]}",
                "constants": [],
                "variables": [
                  "{[Skill06[3]]}"
                ]
              },
              "valuePerStack": {
                "Modifier_Bleed_DamagePercentage": {
                  "operator": "Variables[0] ({[Skill06[1]]}) || RETURN",
                  "displayLines": "{[Skill06[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill06[1]]}"
                  ]
                },
                "MDF_MaxLayer": {
                  "operator": "Variables[0] ({[Skill06[3]]}) || RETURN",
                  "displayLines": "{[Skill06[3]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill06[3]]}"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 1013021,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Automaton Direwolf (Bug)"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Mecha04_AttackCount",
                "compareType": ">",
                "value2": 3,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Monster_W1_Mecha04_RemoveAim"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Mecha04_AttackCount"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Enemy ID",
                    "ID": 1013022,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "Automaton Direwolf (Complete)"
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 1013023,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "Automaton Direwolf (Complete)"
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 1013024,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "Automaton Direwolf (Complete)"
                  }
                ]
              },
              "passed": [
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
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Enemy_W1_Mecha04_ChainSawSpeedUp"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "Sign_W1_Mecha02[<span class=\"descriptionNumberColor\">Lock On</span>]",
                      "onlyRemoveOwnersInstance": true
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Mecha04_AttackCount",
                        "compareType": ">",
                        "value2": 3,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "Monster_W1_Mecha04_RemoveAim"
                        },
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "Mecha04_AttackCount"
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
                    "target": "{{Caster}}"
                  },
                  "modifier": "Enemy_W1_Mecha04_ChainSawSpeedUp"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "Sign_W1_Mecha02[<span class=\"descriptionNumberColor\">Lock On</span>]",
                  "onlyRemoveOwnersInstance": true
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
    "1013022_WMonster_W1_Mecha_05_Ability06_Part01": {
      "fileName": "1013022_WMonster_W1_Mecha_05_Ability06_Part01",
      "childAbilityList": [
        "1013022_WMonster_W1_Mecha_05_Ability06_Camera",
        "1013022_WMonster_W1_Mecha_05_Ability06_Part01",
        "1013022_WMonster_W1_Mecha_05_Ability06_Part02"
      ],
      "skillTrigger": "Skill06",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 1013021,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Automaton Direwolf (Bug)"
          },
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Enemy ID",
                    "ID": 1013022,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "Automaton Direwolf (Complete)"
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 1013023,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "Automaton Direwolf (Complete)"
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 1013024,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "Automaton Direwolf (Complete)"
                  }
                ]
              },
              "passed": [
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
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "OneMore"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "OneMore"
                }
              ]
            }
          ]
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "WMonster_W1_Mecha_05_Ability06_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1013022_Monster_W1_Mecha04_PassiveAbility_KlaraSpecialVictory": {
      "fileName": "1013022_Monster_W1_Mecha04_PassiveAbility_KlaraSpecialVictory",
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
          "modifier": "Monster_W1_Mecha04_KlaraSpecialVictory_LockHP"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Monster_W1_Mecha04_Instance_DisableAction",
          "modifierFlags": [
            "DisableAction"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W1_Mecha04_KlaraSpecialVictory_LockHP",
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
                  "modifier": "Monster_W1_Mecha04_Instance_DisableAction"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "1013022_Modifiers": {
      "fileName": "1013022_Modifiers",
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
          "for": "Monster_W1_Mecha04_RL_AfterCharge",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "ChargeUse",
                    "compareType": "=",
                    "value2": 0
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
                    "name": "Skill Name",
                    "skillName": "Skill06"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "ChargeUse",
                      "value": 1
                    }
                  ]
                }
              ]
            }
          ],
          "duration": 1
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W1_Mecha04_RL_ChargeDecision",
          "execute": [
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "Enemy_W1_Mecha04_ChainSawSpeedUp"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Monster_W1_Mecha04_RL_AfterCharge",
                      "valuePerStack": {
                        "MDF_RogueGoalID": {
                          "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__33) || RETURN",
                          "displayLines": "ENEMIES_OBJECT_UNUSED__33",
                          "constants": [],
                          "variables": [
                            "ENEMIES_OBJECT_UNUSED__33"
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
          "name": "Modifier Construction",
          "for": "Monster_W1_Mecha04_RL_Part03Effect",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W1_Mecha04_RL_Part02Effect",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_Mecha04_RL_ResetAI",
          "execute": [
            {
              "eventTrigger": "Action End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_ResetValue",
                    "compareType": "=",
                    "value2": 4
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "WMonster_W1_Mecha_02_AIFlag_P2",
                      "value": 4
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_ResetValue",
                        "compareType": "=",
                        "value2": 3
                      },
                      "passed": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "WMonster_W1_Mecha_02_AIFlag_P2",
                          "value": 3
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Turn End [Anyone]",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "searchRandom": true,
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Monster_W1_Mecha04_Sign01[<span class=\"descriptionNumberColor\">Lock On</span>]"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Monster_W1_Mecha04_Sign02[<span class=\"descriptionNumberColor\">Lock On</span>]"
                      }
                    ]
                  },
                  "noTargetFound": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "WMonster_W1_Mecha_02_AIFlag_P2",
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
                      "name": "Define Custom Variable",
                      "variableName": "MDF_ResetValue",
                      "value": 0
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
                    "modifier": "Monster_W1_Mecha04_Sign01[<span class=\"descriptionNumberColor\">Lock On</span>]"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_ResetValue",
                      "value": 4
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "WMonster_W1_Mecha_02_AIFlag_P2",
                      "value": 4
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "Monster_W1_Mecha04_Sign02[<span class=\"descriptionNumberColor\">Lock On</span>]"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_ResetValue",
                      "value": 3
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "WMonster_W1_Mecha_02_AIFlag_P2",
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
          "for": "Monster_W1_Mecha04_RL_ChargeFlag",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "Assign Advance/Delay to Current Ability Use",
                  "adjustmentValue": 0.01,
                  "adjustmentType": "="
                },
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W1_Mecha04_RL_Ability12_SpeedUp[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_SpeedAddedRatio_PerLayer",
                  "value": {
                    "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                    "displayLines": "{[PassiveSkill01[1]]}",
                    "constants": [],
                    "variables": [
                      "{[PassiveSkill01[1]]}"
                    ]
                  }
                },
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_SpeedAddedRatio_PerLayer) || Variables[1] (ModifierLayers) || MUL || RETURN",
                    "displayLines": "(MDF_SpeedAddedRatio_PerLayer * ModifierLayers)",
                    "constants": [],
                    "variables": [
                      "MDF_SpeedAddedRatio_PerLayer",
                      "ModifierLayers"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "Mecha04_Aim_Flag"
          ],
          "description": "Increases SPD by <span class=\"descriptionNumberColor\">MDF_SpeedAddedRatio_PerLayer</span>. This effect can stack.",
          "type": "Buff",
          "effectName": "SPD Boost",
          "statusName": "SPD Boost",
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W1_Mecha04_RL_Part3Passive[<span class=\"descriptionNumberColor\">Combat Speed-Up</span>]",
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
                    "operator": "Variables[0] (MDF_SpeedAddedRatio) || RETURN",
                    "displayLines": "MDF_SpeedAddedRatio",
                    "constants": [],
                    "variables": [
                      "MDF_SpeedAddedRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_SpeedAddedRatio"
          ],
          "latentQueue": [],
          "description": "Increases SPD by <span class=\"descriptionNumberColor\">MDF_SpeedAddedRatio</span>. SPD increases further every time Teamwork Order is used.",
          "type": "Buff",
          "effectName": "Combat Speed-Up",
          "statusName": "Combat Speed-Up"
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W1_Mecha04_RL_BreakTarget"
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W1_Mecha04_RL_Support",
          "execute": [
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "Monster_W1_Mecha04_RL_BreakTarget"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Monster_W1_Mecha04_RL_BreakTarget",
                  "casterAssign": "TargetSelf"
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "searchRandom": true,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Monster_W1_Mecha03_RL_PartController"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "Phase2InsertFlag",
                      "value": 1
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "W1_Mecha02_AttackBonus[<span class=\"descriptionNumberColor\">Charging</span>]"
                    },
                    {
                      "name": "Action Advance/Delay",
                      "advanceType": "Set",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "multiBase": 0
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W1_Mecha03_RL_PassiveAbility_InsertCamera",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "priorityTag": "MonsterInsertAttackOthers",
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
          "name": "Modifier Construction",
          "for": "Monster_W1_Mecha04_RL_Endurance",
          "modifierFlags": [
            "Endurance"
          ],
          "execute": [
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
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W1_Mecha04_RL_Stealth",
          "modifierFlags": [
            "Stealth",
            "Endurance"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                "Mark Entity as Non-Target(Unselectable)"
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W1_Mecha04_RL_Enhance_Dormancy[<span class=\"descriptionNumberColor\">Speedy Recovery</span>]",
          "modifierFlags": [
            "DisableHealHP"
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
                  "variableName": "DormancyFlag",
                  "value": 1
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Monster_W1_Mecha04_RL_Stealth"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "OneMorePerTurn"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "Sign_W1_Mecha02[<span class=\"descriptionNumberColor\">Lock On</span>]",
                  "onlyRemoveOwnersInstance": true
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "Monster_W1_Mecha04_Sign01[<span class=\"descriptionNumberColor\">Lock On</span>]",
                  "onlyRemoveOwnersInstance": true
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "Monster_W1_Mecha04_Sign02[<span class=\"descriptionNumberColor\">Lock On</span>]",
                  "onlyRemoveOwnersInstance": true
                },
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phase": "Phase1"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "OneMorePerTurn"
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "DormancyFlag",
                  "value": 0
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "InsertCheck",
                  "value": 1
                },
                {
                  "name": "Lock HP",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Monster_W1_Mecha04_RL_Stealth"
                },
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "phase": "Phase0"
                }
              ]
            },
            {
              "eventTrigger": "Action Choice Window [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Monster_W1_Mecha04_RL_Stealth"
                }
              ]
            },
            {
              "eventTrigger": "Turn [Action-End Phase]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Monster_W1_Mecha04_RL_Stealth"
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessReductionRES</span>&nbsp;",
                  "value": 1
                }
              ]
            }
          ],
          "description": "Currently cannot take action.",
          "type": "Other",
          "statusName": "Speedy Recovery",
          "duration": 2
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W1_Mecha04_RL_Dormancy",
          "modifierFlags": [
            "DisableHealHP",
            "DisableAction",
            "MuteSpeed"
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
                  "modifier": "Monster_W1_Mecha04_RL_Stealth"
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
                  "modifier": "Monster_W1_Mecha04_RL_Stealth"
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessReductionRES</span>&nbsp;",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W1_Mecha04_RL_PartController",
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
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All(with Unselectable)}}"
                      },
                      "searchRandom": true,
                      "includeDyingTargets": true,
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Monster_W1_Mecha03_RL_PartController"
                      },
                      "ifTargetFound": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "HP_Bars_Remaining",
                            "compareType": ">=",
                            "value2": 1
                          },
                          "passed": [
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
                                    "modifier": "Monster_W1_Mecha03_RL_Dormancy",
                                    "justAddedOrActive": true
                                  },
                                  {
                                    "name": "Has Modifier",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "modifier": "Monster_W1_Mecha03_RL_Enhance_Dormancy[<span class=\"descriptionNumberColor\">Firepower Recovery</span>]",
                                    "justAddedOrActive": true
                                  }
                                ]
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
                                        "target": "{{Modifier Holder}}"
                                      },
                                      "silent": true
                                    },
                                    {
                                      "name": "Add Events/Bonuses",
                                      "to": {
                                        "name": "Target Name",
                                        "target": "{{Modifier Holder}}"
                                      },
                                      "modifier": "Monster_W1_Mecha04_RL_Endurance"
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
                                      "name": "Set Enemy Phase",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "mode": "Inc"
                                    },
                                    {
                                      "name": "Inject Ability Use",
                                      "abilityName": "Monster_W1_Mecha04_RL_PassiveAbility_Insert",
                                      "priorityTag": "MonsterChangePhase",
                                      "ownerState": "Mask_AliveOrLimbo",
                                      "targetState": "Mask_AliveOrLimbo",
                                      "canHitNonTargets": true,
                                      "showInActionOrder": true,
                                      "allowAbilityTriggers": false
                                    },
                                    {
                                      "name": "Dispel Debuffs",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "silent": true
                                    },
                                    {
                                      "name": "Add Events/Bonuses",
                                      "to": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "modifier": "Monster_W1_Mecha03_RL_Endurance",
                                      "casterAssign": "TargetSelf"
                                    },
                                    {
                                      "name": "Declare Custom Variable",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "scope": "TargetEntity",
                                      "variableName": "InsertCheck"
                                    },
                                    {
                                      "name": "Define Custom Variable",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "variableName": "Mecha04_00_SpeedAddedBaseRatio",
                                      "value": {
                                        "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                                        "displayLines": "{[PassiveSkill01[0]]}",
                                        "constants": [],
                                        "variables": [
                                          "{[PassiveSkill01[0]]}"
                                        ]
                                      }
                                    }
                                  ]
                                }
                              ],
                              "failed": [
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
                                      "name": "Remove Events/Bonuses",
                                      "to": {
                                        "name": "Target Name",
                                        "target": "{{Player Team All}}"
                                      },
                                      "modifier": "Sign_W1_Mecha02[<span class=\"descriptionNumberColor\">Lock On</span>]",
                                      "onlyRemoveOwnersInstance": true
                                    },
                                    {
                                      "name": "Remove Events/Bonuses",
                                      "to": {
                                        "name": "Target Name",
                                        "target": "{{Player Team All}}"
                                      },
                                      "modifier": "Monster_W1_Mecha04_Sign01[<span class=\"descriptionNumberColor\">Lock On</span>]",
                                      "onlyRemoveOwnersInstance": true
                                    },
                                    {
                                      "name": "Remove Events/Bonuses",
                                      "to": {
                                        "name": "Target Name",
                                        "target": "{{Player Team All}}"
                                      },
                                      "modifier": "Monster_W1_Mecha04_Sign02[<span class=\"descriptionNumberColor\">Lock On</span>]",
                                      "onlyRemoveOwnersInstance": true
                                    },
                                    {
                                      "name": "Dispel Debuffs",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Modifier Holder}}"
                                      },
                                      "silent": true
                                    },
                                    {
                                      "name": "Set HP Value",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Modifier Holder}}"
                                      },
                                      "setValue": 1
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
                                      "name": "Lock HP",
                                      "threshold": 0.0009999999,
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Modifier Holder}}"
                                      }
                                    },
                                    {
                                      "name": "Remove Events/Bonuses",
                                      "to": {
                                        "name": "Target Name",
                                        "target": "{{Modifier Holder}}"
                                      },
                                      "modifier": "Enemy_W1_Mecha04_ChainSawSpeedUp"
                                    },
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "AND",
                                        "conditionList": [
                                          {
                                            "name": "Enemy ID",
                                            "ID": 1013024,
                                            "target": {
                                              "name": "Target Name",
                                              "target": "{{Modifier Holder}}"
                                            },
                                            "characterName": "Automaton Direwolf (Complete)"
                                          },
                                          {
                                            "name": "Compare: Variable",
                                            "target": {
                                              "name": "Target Name",
                                              "target": "{{Modifier Holder}}"
                                            },
                                            "value1": "HP_Bars_Remaining",
                                            "compareType": ">=",
                                            "value2": 2
                                          }
                                        ]
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
                                            "value2": 2
                                          },
                                          "passed": [
                                            {
                                              "name": "Action Advance/Delay",
                                              "target": {
                                                "name": "Target Name",
                                                "target": "{{Modifier Holder}}"
                                              },
                                              "advanceType": "Set",
                                              "multiAdd": "{[Skill13[4]]}"
                                            },
                                            {
                                              "name": "Add Events/Bonuses",
                                              "to": {
                                                "name": "Target Name",
                                                "target": "{{Modifier Holder}}"
                                              },
                                              "modifier": "Monster_W1_Mecha04_RL_Enhance_Dormancy[<span class=\"descriptionNumberColor\">Speedy Recovery</span>]",
                                              "duration": {
                                                "operator": "Variables[0] ({[Skill13[0]]}) || RETURN",
                                                "displayLines": "{[Skill13[0]]}",
                                                "constants": [],
                                                "variables": [
                                                  "{[Skill13[0]]}"
                                                ]
                                              }
                                            }
                                          ],
                                          "failed": [
                                            {
                                              "name": "Action Advance/Delay",
                                              "target": {
                                                "name": "Target Name",
                                                "target": "{{Modifier Holder}}"
                                              },
                                              "advanceType": "Set",
                                              "multiAdd": "{[Skill13[5]]}"
                                            },
                                            {
                                              "name": "Add Events/Bonuses",
                                              "to": {
                                                "name": "Target Name",
                                                "target": "{{Modifier Holder}}"
                                              },
                                              "modifier": "Monster_W1_Mecha04_RL_Enhance_Dormancy[<span class=\"descriptionNumberColor\">Speedy Recovery</span>]",
                                              "duration": {
                                                "operator": "Variables[0] ({[Skill13[2]]}) || RETURN",
                                                "displayLines": "{[Skill13[2]]}",
                                                "constants": [],
                                                "variables": [
                                                  "{[Skill13[2]]}"
                                                ]
                                              }
                                            }
                                          ]
                                        }
                                      ],
                                      "failed": [
                                        {
                                          "name": "Add Events/Bonuses",
                                          "to": {
                                            "name": "Target Name",
                                            "target": "{{Modifier Holder}}"
                                          },
                                          "modifier": "Monster_W1_Mecha04_RL_Dormancy"
                                        }
                                      ]
                                    },
                                    {
                                      "name": "Define Custom Variable",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "variableName": "Mecha04_00_SpeedAddedBaseRatio",
                                      "value": {
                                        "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                                        "displayLines": "{[PassiveSkill01[0]]}",
                                        "constants": [],
                                        "variables": [
                                          "{[PassiveSkill01[0]]}"
                                        ]
                                      }
                                    },
                                    {
                                      "name": "Declare Custom Variable",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Modifier Holder}}"
                                      },
                                      "scope": "TargetEntity",
                                      "variableName": "WMonster_W1_Mecha_02_AIFlag_P2",
                                      "value": 1
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
                  "failed": [
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
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Enemy Team All(with Unselectable)}}"
                          },
                          "searchRandom": true,
                          "includeDyingTargets": true,
                          "conditions": {
                            "name": "Enemy ID",
                            "ID": 1013012,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "characterName": "Automaton Grizzly (Complete)"
                          },
                          "ifTargetFound": [
                            {
                              "name": "Dispel Debuffs",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "silent": true
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "Monster_W1_Mecha03_RL_Endurance",
                              "casterAssign": "TargetSelf"
                            },
                            {
                              "name": "Declare Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "scope": "TargetEntity",
                              "variableName": "InsertCheck"
                            },
                            {
                              "name": "Set Enemy Phase",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "mode": "Inc"
                            },
                            {
                              "name": "Inject Ability Use",
                              "abilityName": "Monster_W1_Mecha03_RL_PassiveAbility_Insert2",
                              "abilitySource": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "priorityTag": "MonsterChangePhase",
                              "ownerState": "Mask_AliveOrLimbo",
                              "targetState": "Mask_AliveOrLimbo",
                              "canHitNonTargets": true,
                              "showInActionOrder": true,
                              "allowAbilityTriggers": false
                            },
                            "Modifier Deletes Itself"
                          ],
                          "noTargetFound": [
                            {
                              "name": "Find New Target",
                              "from": {
                                "name": "Target Name",
                                "target": "{{Enemy Team All(with Unselectable)}}"
                              },
                              "searchRandom": true,
                              "includeDyingTargets": true,
                              "conditions": {
                                "name": "Enemy ID",
                                "ID": 1013014,
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "characterName": "Automaton Grizzly (Complete)"
                              },
                              "ifTargetFound": [
                                {
                                  "name": "Find New Target",
                                  "from": {
                                    "name": "Target Name",
                                    "target": "{{Enemy Team All(with Unselectable)}}"
                                  },
                                  "searchRandom": true,
                                  "includeDyingTargets": true,
                                  "conditions": {
                                    "name": "Has Modifier",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "modifier": "Monster_W1_Mecha03_RL_PartController"
                                  },
                                  "ifTargetFound": [
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Compare: Variable",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Modifier Holder}}"
                                        },
                                        "value1": "HP_Bars_Remaining",
                                        "compareType": ">=",
                                        "value2": 1
                                      },
                                      "passed": [
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
                                                "modifier": "Monster_W1_Mecha03_RL_Dormancy",
                                                "justAddedOrActive": true
                                              },
                                              {
                                                "name": "Has Modifier",
                                                "target": {
                                                  "name": "Target Name",
                                                  "target": "{{Parameter Target}}"
                                                },
                                                "modifier": "Monster_W1_Mecha03_RL_Enhance_Dormancy[<span class=\"descriptionNumberColor\">Firepower Recovery</span>]",
                                                "justAddedOrActive": true
                                              }
                                            ]
                                          },
                                          "passed": [
                                            {
                                              "name": "IF",
                                              "conditions": {
                                                "name": "Compare: Variable",
                                                "value1": "HP_Bars_Remaining",
                                                "compareType": "=",
                                                "value2": 3
                                              },
                                              "passed": [
                                                {
                                                  "name": "Mark Entity For Immediate Death",
                                                  "target": {
                                                    "name": "Target Name",
                                                    "target": "{{Parameter Target}}"
                                                  }
                                                },
                                                {
                                                  "name": "Force Entity Death",
                                                  "target": {
                                                    "name": "Target Name",
                                                    "target": "{{Parameter Target}}"
                                                  }
                                                },
                                                "Modifier Deletes Itself"
                                              ],
                                              "failed": [
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
                                                        "target": "{{Modifier Holder}}"
                                                      },
                                                      "silent": true
                                                    },
                                                    {
                                                      "name": "Remove Events/Bonuses",
                                                      "to": {
                                                        "name": "Target Name",
                                                        "target": "{{Caster}}"
                                                      },
                                                      "modifier": "Monster_W1_Mecha04_RL_Part02Effect"
                                                    },
                                                    {
                                                      "name": "Remove Events/Bonuses",
                                                      "to": {
                                                        "name": "Target Name",
                                                        "target": "{{Caster}}"
                                                      },
                                                      "modifier": "Monster_W1_Mecha04_RL_Part03Effect"
                                                    },
                                                    {
                                                      "name": "Add Events/Bonuses",
                                                      "to": {
                                                        "name": "Target Name",
                                                        "target": "{{Modifier Holder}}"
                                                      },
                                                      "modifier": "Monster_W1_Mecha04_RL_Endurance"
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
                                                      "name": "Set Enemy Phase",
                                                      "target": {
                                                        "name": "Target Name",
                                                        "target": "{{Parameter Target}}"
                                                      },
                                                      "mode": "Inc"
                                                    },
                                                    {
                                                      "name": "Inject Ability Use",
                                                      "abilityName": "Monster_W1_Mecha04_RL_PassiveAbility_Insert3",
                                                      "priorityTag": "MonsterChangePhase",
                                                      "ownerState": "Mask_AliveOrLimbo",
                                                      "targetState": "Mask_AliveOrLimbo",
                                                      "canHitNonTargets": true,
                                                      "showInActionOrder": true,
                                                      "allowAbilityTriggers": false
                                                    },
                                                    {
                                                      "name": "Dispel Debuffs",
                                                      "target": {
                                                        "name": "Target Name",
                                                        "target": "{{Parameter Target}}"
                                                      },
                                                      "silent": true
                                                    },
                                                    {
                                                      "name": "Add Events/Bonuses",
                                                      "to": {
                                                        "name": "Target Name",
                                                        "target": "{{Parameter Target}}"
                                                      },
                                                      "modifier": "Monster_W1_Mecha03_RL_Endurance",
                                                      "casterAssign": "TargetSelf"
                                                    },
                                                    {
                                                      "name": "Declare Custom Variable",
                                                      "target": {
                                                        "name": "Target Name",
                                                        "target": "{{Parameter Target}}"
                                                      },
                                                      "scope": "TargetEntity",
                                                      "variableName": "InsertCheck"
                                                    },
                                                    {
                                                      "name": "Define Custom Variable",
                                                      "target": {
                                                        "name": "Target Name",
                                                        "target": "{{Parameter Target}}"
                                                      },
                                                      "variableName": "Mecha04_00_SpeedAddedBaseRatio",
                                                      "value": {
                                                        "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                                                        "displayLines": "{[PassiveSkill01[0]]}",
                                                        "constants": [],
                                                        "variables": [
                                                          "{[PassiveSkill01[0]]}"
                                                        ]
                                                      }
                                                    }
                                                  ]
                                                }
                                              ]
                                            }
                                          ],
                                          "failed": [
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
                                                  "name": "Remove Events/Bonuses",
                                                  "to": {
                                                    "name": "Target Name",
                                                    "target": "{{Player Team All}}"
                                                  },
                                                  "modifier": "Sign_W1_Mecha02[<span class=\"descriptionNumberColor\">Lock On</span>]",
                                                  "onlyRemoveOwnersInstance": true
                                                },
                                                {
                                                  "name": "Remove Events/Bonuses",
                                                  "to": {
                                                    "name": "Target Name",
                                                    "target": "{{Player Team All}}"
                                                  },
                                                  "modifier": "Monster_W1_Mecha04_Sign01[<span class=\"descriptionNumberColor\">Lock On</span>]",
                                                  "onlyRemoveOwnersInstance": true
                                                },
                                                {
                                                  "name": "Remove Events/Bonuses",
                                                  "to": {
                                                    "name": "Target Name",
                                                    "target": "{{Player Team All}}"
                                                  },
                                                  "modifier": "Monster_W1_Mecha04_Sign02[<span class=\"descriptionNumberColor\">Lock On</span>]",
                                                  "onlyRemoveOwnersInstance": true
                                                },
                                                {
                                                  "name": "Dispel Debuffs",
                                                  "target": {
                                                    "name": "Target Name",
                                                    "target": "{{Modifier Holder}}"
                                                  },
                                                  "silent": true
                                                },
                                                {
                                                  "name": "Set HP Value",
                                                  "target": {
                                                    "name": "Target Name",
                                                    "target": "{{Modifier Holder}}"
                                                  },
                                                  "setValue": 1
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
                                                  "name": "Lock HP",
                                                  "threshold": 0.0009999999,
                                                  "target": {
                                                    "name": "Target Name",
                                                    "target": "{{Modifier Holder}}"
                                                  }
                                                },
                                                {
                                                  "name": "Remove Events/Bonuses",
                                                  "to": {
                                                    "name": "Target Name",
                                                    "target": "{{Modifier Holder}}"
                                                  },
                                                  "modifier": "Enemy_W1_Mecha04_ChainSawSpeedUp"
                                                },
                                                {
                                                  "name": "IF",
                                                  "conditions": {
                                                    "name": "AND",
                                                    "conditionList": [
                                                      {
                                                        "name": "Enemy ID",
                                                        "ID": 1013024,
                                                        "target": {
                                                          "name": "Target Name",
                                                          "target": "{{Modifier Holder}}"
                                                        },
                                                        "characterName": "Automaton Direwolf (Complete)"
                                                      },
                                                      {
                                                        "name": "Compare: Variable",
                                                        "target": {
                                                          "name": "Target Name",
                                                          "target": "{{Modifier Holder}}"
                                                        },
                                                        "value1": "HP_Bars_Remaining",
                                                        "compareType": ">=",
                                                        "value2": 2
                                                      }
                                                    ]
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
                                                        "value2": 2
                                                      },
                                                      "passed": [
                                                        {
                                                          "name": "Action Advance/Delay",
                                                          "target": {
                                                            "name": "Target Name",
                                                            "target": "{{Modifier Holder}}"
                                                          },
                                                          "advanceType": "Set",
                                                          "multiAdd": "{[Skill13[4]]}"
                                                        },
                                                        {
                                                          "name": "Add Events/Bonuses",
                                                          "to": {
                                                            "name": "Target Name",
                                                            "target": "{{Modifier Holder}}"
                                                          },
                                                          "modifier": "Monster_W1_Mecha04_RL_Enhance_Dormancy[<span class=\"descriptionNumberColor\">Speedy Recovery</span>]",
                                                          "duration": {
                                                            "operator": "Variables[0] ({[Skill13[0]]}) || RETURN",
                                                            "displayLines": "{[Skill13[0]]}",
                                                            "constants": [],
                                                            "variables": [
                                                              "{[Skill13[0]]}"
                                                            ]
                                                          }
                                                        }
                                                      ],
                                                      "failed": [
                                                        {
                                                          "name": "Action Advance/Delay",
                                                          "target": {
                                                            "name": "Target Name",
                                                            "target": "{{Modifier Holder}}"
                                                          },
                                                          "advanceType": "Set",
                                                          "multiAdd": "{[Skill13[5]]}"
                                                        },
                                                        {
                                                          "name": "Add Events/Bonuses",
                                                          "to": {
                                                            "name": "Target Name",
                                                            "target": "{{Modifier Holder}}"
                                                          },
                                                          "modifier": "Monster_W1_Mecha04_RL_Enhance_Dormancy[<span class=\"descriptionNumberColor\">Speedy Recovery</span>]",
                                                          "duration": {
                                                            "operator": "Variables[0] ({[Skill13[2]]}) || RETURN",
                                                            "displayLines": "{[Skill13[2]]}",
                                                            "constants": [],
                                                            "variables": [
                                                              "{[Skill13[2]]}"
                                                            ]
                                                          }
                                                        }
                                                      ]
                                                    }
                                                  ],
                                                  "failed": [
                                                    {
                                                      "name": "Add Events/Bonuses",
                                                      "to": {
                                                        "name": "Target Name",
                                                        "target": "{{Modifier Holder}}"
                                                      },
                                                      "modifier": "Monster_W1_Mecha04_RL_Dormancy"
                                                    }
                                                  ]
                                                },
                                                {
                                                  "name": "Remove Events/Bonuses",
                                                  "to": {
                                                    "name": "Target Name",
                                                    "target": "{{Caster}}"
                                                  },
                                                  "modifier": "Monster_W1_Mecha04_RL_Part02Effect"
                                                },
                                                {
                                                  "name": "Remove Events/Bonuses",
                                                  "to": {
                                                    "name": "Target Name",
                                                    "target": "{{Caster}}"
                                                  },
                                                  "modifier": "Monster_W1_Mecha04_RL_Part03Effect"
                                                },
                                                {
                                                  "name": "Define Custom Variable",
                                                  "target": {
                                                    "name": "Target Name",
                                                    "target": "{{Parameter Target}}"
                                                  },
                                                  "variableName": "Mecha04_00_SpeedAddedBaseRatio",
                                                  "value": {
                                                    "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                                                    "displayLines": "{[PassiveSkill01[0]]}",
                                                    "constants": [],
                                                    "variables": [
                                                      "{[PassiveSkill01[0]]}"
                                                    ]
                                                  }
                                                },
                                                {
                                                  "name": "Declare Custom Variable",
                                                  "target": {
                                                    "name": "Target Name",
                                                    "target": "{{Modifier Holder}}"
                                                  },
                                                  "scope": "TargetEntity",
                                                  "variableName": "WMonster_W1_Mecha_02_AIFlag_P2",
                                                  "value": 1
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
                              "noTargetFound": [
                                {
                                  "name": "Find New Target",
                                  "from": {
                                    "name": "Target Name",
                                    "target": "{{Enemy Team All(with Unselectable)}}"
                                  },
                                  "searchRandom": true,
                                  "conditions": {
                                    "name": "Has Modifier",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "modifier": "Monster_W1_Mecha03_RL_PartController"
                                  },
                                  "ifTargetFound": [
                                    {
                                      "name": "Declare Custom Variable",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "scope": "TargetEntity",
                                      "variableName": "TeammateSurvive"
                                    }
                                  ]
                                },
                                "Modifier Deletes Itself"
                              ]
                            }
                          ]
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
          "for": "W1_Mecha02_AttackBonus_Effect",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "W1_Mecha02_AttackBonus[<span class=\"descriptionNumberColor\">Charging</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [],
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
                  "modifier": "W1_Mecha02_AttackBonus_Effect"
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
                    "target": "{{Caster}}"
                  },
                  "modifier": "Monster_W1_Mecha03_RL_Revenge[<span class=\"descriptionNumberColor\">Obliteration Order</span>]"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "Buff_ModifierLayers",
                  "multiplier": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_PropertyValue",
                  "value": {
                    "operator": "Variables[0] (ModifierDamageUpValue) || Variables[1] (Buff_ModifierLayers) || MUL || RETURN",
                    "displayLines": "(ModifierDamageUpValue * Buff_ModifierLayers)",
                    "constants": [],
                    "variables": [
                      "ModifierDamageUpValue",
                      "Buff_ModifierLayers"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
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
                  "modifier": "W1_Mecha02_AttackBonus_Effect"
                },
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [
            "ModifierDamageUpValue"
          ],
          "latentQueue": [],
          "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">ModifierDamageUpValue</span>.",
          "type": "Buff",
          "effectName": "Charging",
          "statusName": "Charging",
          "duration": 1,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "Sign_W1_Mecha02[<span class=\"descriptionNumberColor\">Lock On</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "AttackSign"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "%CasterName will focus attacks on this target.",
          "type": "Other",
          "effectName": "Lock On",
          "statusName": "Lock On"
        },
        {
          "name": "Modifier Construction",
          "for": "W1_Mecha02_ThunderDOT[<span class=\"descriptionNumberColor\">Bleed</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "STAT_DOT",
            "STAT_DOT_Bleed"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "Modifier_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "Owner_MaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "DamageFlat": {
                      "operator": "Variables[0] (Owner_MaxHP) || Variables[1] (Modifier_Bleed_DamagePercentage) || MUL || Variables[2] (Modifier_Layer) || MUL || RETURN",
                      "displayLines": "((Owner_MaxHP * Modifier_Bleed_DamagePercentage) * Modifier_Layer)",
                      "constants": [],
                      "variables": [
                        "Owner_MaxHP",
                        "Modifier_Bleed_DamagePercentage",
                        "Modifier_Layer"
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
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "Modifier_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "Owner_MaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "DamageFlat": {
                      "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (Owner_MaxHP) || MUL || Variables[2] (Modifier_Bleed_DamagePercentage) || MUL || Variables[3] (Modifier_Layer) || MUL || RETURN",
                      "displayLines": "(((DOT_TriggerRatio * Owner_MaxHP) * Modifier_Bleed_DamagePercentage) * Modifier_Layer)",
                      "constants": [],
                      "variables": [
                        "DOT_TriggerRatio",
                        "Owner_MaxHP",
                        "Modifier_Bleed_DamagePercentage",
                        "Modifier_Layer"
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
            "Modifier_Bleed_DamagePercentage",
            "MDF_MaxLayer"
          ],
          "latentQueue": [
            "Mecha04_BattleScore2_Flag",
            "Monster_W1_Mecha04_00_InsertFlag",
            "Mecha04_EnemySelector"
          ],
          "description": "For a certain number of turns, receive Physical DMG based on Max HP at the beginning of each turn, stacking up to <span class=\"descriptionNumberColor\">MDF_MaxLayer</span> time(s).",
          "type": "Debuff",
          "effectName": "Bleed",
          "statusName": "Bleed",
          "duration": 3,
          "stackLimit": 5,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_Mecha04_BattleScore1",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Mecha04_BattleScore2_Flag"
                }
              ]
            },
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Mecha04_BattleScore2_Flag",
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
                          "title": "The Limping Lupine",
                          "desc": "Defeat Automaton Direwolf without triggering Felling Order",
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
          "for": "Enemy_W1_Mecha04_ChainSawSpeedUpAgain",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Enemy_W1_Mecha04_ChainSawSpeedUp"
                },
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "Monster_W1_Mecha04_00_InsertFlag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_W1_Mecha04_ChainSawSpeedUp",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phase": "PhaseSpeedUp"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phase": "PhaseSpeedUp"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "STAT_Confine"
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "Break"
                      }
                    ]
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "Monster_W1_Mecha04_00_InsertFlag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W1_Mecha04_RemoveAim",
          "execute": [
            {
              "eventTrigger": "Turn [Action-End Phase]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "Monster_W1_Mecha04_Sign01[<span class=\"descriptionNumberColor\">Lock On</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "Monster_W1_Mecha04_Sign02[<span class=\"descriptionNumberColor\">Lock On</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Enemy_W1_Mecha04_ChainSawSpeedUp"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "WMonster_W1_Mecha_02_AIFlag_P2",
                  "value": 2
                },
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "Mecha04_BattleScore2_Flag",
            "Monster_W1_Mecha04_00_InsertFlag",
            "Mecha04_EnemySelector",
            "Mecha04_AttackCount"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W1_Mecha04_Sign02[<span class=\"descriptionNumberColor\">Lock On</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "AttackSign"
          ],
          "stackData": [],
          "latentQueue": [
            "Mecha04_Aim_Flag"
          ],
          "description": "%CasterName will focus attacks on this target.",
          "type": "Other",
          "effectName": "Lock On",
          "statusName": "Lock On"
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W1_Mecha04_Sign01[<span class=\"descriptionNumberColor\">Lock On</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "AttackSign"
          ],
          "stackData": [],
          "latentQueue": [
            "Mecha04_Aim_Flag"
          ],
          "description": "%CasterName will focus attacks on this target.",
          "type": "Other",
          "effectName": "Lock On",
          "statusName": "Lock On"
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W1_Mecha04_RemoveOneMore",
          "execute": [
            {
              "eventTrigger": "Action End [Owner]",
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
                        "value1": "WMonster_W1_Mecha_02_AIFlag_P2",
                        "compareType": "=",
                        "value2": 3,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "Monster_W1_Mecha04_00_InsertFlag",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
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
                      "modifier": "OneMorePerTurn"
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
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "references": []
    }
  }
}