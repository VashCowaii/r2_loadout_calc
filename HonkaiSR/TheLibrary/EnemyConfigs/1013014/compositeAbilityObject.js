const compositeAbilityObject = {
  "fullCharacterName": 1013014,
  "trimCharacterName": 1013014,
  "abilityList": [
    "1013014_Monster_W1_Mecha03_RL_PassiveAbility_InsertCamera",
    "1013014_Monster_W1_Mecha03_RL_PassiveAbility_Insert3",
    "1013014_Monster_W1_Mecha03_RL_PassiveAbility_Insert2",
    "1013014_Monster_W1_Mecha03_RL_PassiveAbility_Insert",
    "1013014_WMonster_W1_Mecha_02_RL_Ability07_Part02",
    "1013014_WMonster_W1_Mecha_02_RL_Ability07_Part01",
    "1013014_WMonster_W1_Mecha_02_RL_Ability06_Part02",
    "1013014_WMonster_W1_Mecha_02_RL_Ability06_Part01",
    "1013014_WMonster_W1_Mecha_02_RL_Passive_AIControlAndHPLock",
    "1013014_WMonster_W1_Mecha_02_Passive_AIControlAndHPLock",
    "1013014_WMonster_W1_Mecha_02_Ability05_Part02",
    "1013014_WMonster_W1_Mecha_02_Ability05_Part01",
    "1013014_WMonster_W1_Mecha_02_Ability04_Part02",
    "1013014_WMonster_W1_Mecha_02_Ability04_Part01",
    "1013014_WMonster_W1_Mecha_02_Ability03_Part02",
    "1013014_WMonster_W1_Mecha_02_Ability03_Part01",
    "1013014_WMonster_W1_Mecha_02_Ability02_Part02",
    "1013014_WMonster_W1_Mecha_02_Ability02_Part01",
    "1013014_WMonster_W1_Mecha_02_Ability01_Part02",
    "1013014_WMonster_W1_Mecha_02_Ability01_Part01",
    "1013014_WMonster_Mecha_02_PassiveAbilityInitiate",
    "1013014_Modifiers"
  ],
  "abilityObject": {
    "1013014_Monster_W1_Mecha03_RL_PassiveAbility_InsertCamera": {
      "fileName": "1013014_Monster_W1_Mecha03_RL_PassiveAbility_InsertCamera",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "1013014_Monster_W1_Mecha03_RL_PassiveAbility_Insert3": {
      "fileName": "1013014_Monster_W1_Mecha03_RL_PassiveAbility_Insert3",
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
            "modifier": "Monster_W1_Mecha04_RL_PartController"
          },
          "ifTargetFound": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Monster_W1_Mecha04_RL_Dormancy"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Monster_W1_Mecha04_RL_Enhance_Dormancy[<span class=\"descriptionNumberColor\">Speedy Recovery</span>]"
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
                "target": "{{Caster}}"
              },
              "modifier": "W1_Mecha02_AttackBonus[<span class=\"descriptionNumberColor\">Charging</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "W1_Mecha02_AttackBonus_Effect"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster's Minions}}"
                },
                "value1": "TeamCharacterCount",
                "compareType": ">=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Remove Modifier Behavior Flag(s)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  },
                  "flagNames": []
                },
                {
                  "name": "Mark Entity For Immediate Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  }
                },
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
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
              "multiBase": 0
            },
            {
              "name": "Action Advance/Delay",
              "advanceType": "Set",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "multiBase": 0.01
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
                "target": "{{Parameter Target}}"
              },
              "modifier": "Monster_W1_Mecha04_RL_Part3Passive[<span class=\"descriptionNumberColor\">Combat Speed-Up</span>]",
              "valuePerStack": {
                "MDF_SpeedAddedRatio": {
                  "operator": "Variables[0] (MDF_RogueGoalID) || RETURN",
                  "displayLines": "MDF_RogueGoalID",
                  "constants": [],
                  "variables": [
                    "MDF_RogueGoalID"
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
              "modifier": "Monster_W1_Mecha03_RL_Revenge[<span class=\"descriptionNumberColor\">Obliteration Order</span>]",
              "valuePerStack": {
                "MDF_DamageUpRatio": {
                  "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
                  "displayLines": "{[PassiveSkill01[2]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill01[2]]}"
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
              "modifier": "Monster_W1_Mecha03_RL_Endurance"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Monster_W1_Mecha03_RemoveOneMore"
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
              "modifier": "Monster_W1_Mecha03_RL_ChargeFlag"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Monster_W1_Mecha03_RL_Part02Effect"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Monster_W1_Mecha03_RL_Part03Effect"
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
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Monster_W1_Mecha04_RL_Endurance"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Monster_W1_Mecha04_PassiveMDF[<span class=\"descriptionNumberColor\">Hounding Pursuit</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Enemy_W1_Mecha04_ChainSawSpeedUp"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Monster_W1_Mecha04_RL_ChargeFlag",
              "casterAssign": "TargetSelf"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Monster_W1_Mecha04_RL_Part02Effect"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Monster_W1_Mecha04_RL_Part03Effect",
              "casterAssign": "TargetSelf"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Monster_Mecha04_RL_ResetAI",
              "casterAssign": "TargetSelf"
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
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "scope": "TargetEntity",
              "variableName": "WMonster_W1_Mecha_02_AIFlag_P2",
              "value": 1
            }
          ]
        }
      ],
      "references": []
    },
    "1013014_Monster_W1_Mecha03_RL_PassiveAbility_Insert2": {
      "fileName": "1013014_Monster_W1_Mecha03_RL_PassiveAbility_Insert2",
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
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "W1_Mecha02_AttackBonus[<span class=\"descriptionNumberColor\">Charging</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "W1_Mecha02_AttackBonus_Effect"
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
          "modifier": "Monster_W1_Mecha03_RL_Revenge[<span class=\"descriptionNumberColor\">Obliteration Order</span>]",
          "valuePerStack": {
            "MDF_DamageUpRatio": {
              "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
              "displayLines": "{[PassiveSkill01[2]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill01[2]]}"
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
          "modifier": "Monster_W1_Mecha03_RL_Endurance"
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
          "modifier": "Monster_W1_Mecha03_RL_PartController"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W1_Mecha03_RL_ChargeFlag"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W1_Mecha03_RL_Part02Effect"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W1_Mecha03_RL_Part03Effect"
        }
      ],
      "references": []
    },
    "1013014_Monster_W1_Mecha03_RL_PassiveAbility_Insert": {
      "fileName": "1013014_Monster_W1_Mecha03_RL_PassiveAbility_Insert",
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
            "modifier": "Monster_W1_Mecha04_RL_PartController"
          },
          "ifTargetFound": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Monster_W1_Mecha04_RL_Dormancy"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Monster_W1_Mecha04_RL_Enhance_Dormancy[<span class=\"descriptionNumberColor\">Speedy Recovery</span>]"
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
                "target": "{{Caster}}"
              },
              "modifier": "W1_Mecha02_AttackBonus[<span class=\"descriptionNumberColor\">Charging</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "W1_Mecha02_AttackBonus_Effect"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster's Minions}}"
                },
                "value1": "TeamCharacterCount",
                "compareType": ">=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Remove Modifier Behavior Flag(s)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  },
                  "flagNames": []
                },
                {
                  "name": "Mark Entity For Immediate Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  }
                },
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
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
              "multiBase": 0
            },
            {
              "name": "Action Advance/Delay",
              "advanceType": "Set",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "multiBase": 0.01
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
              "modifier": "Monster_W1_Mecha03_RL_Endurance"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Monster_W1_Mecha03_RemoveOneMore"
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
              "modifier": "Monster_W1_Mecha03_RL_ChargeFlag"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Monster_W1_Mecha03_RL_Part02Effect"
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
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Monster_W1_Mecha04_RL_Endurance"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Monster_W1_Mecha04_PassiveMDF[<span class=\"descriptionNumberColor\">Hounding Pursuit</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Enemy_W1_Mecha04_ChainSawSpeedUp"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Monster_W1_Mecha04_RL_ChargeFlag",
              "casterAssign": "TargetSelf"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Monster_W1_Mecha04_RL_Part02Effect",
              "casterAssign": "TargetSelf"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Monster_Mecha04_RL_ResetAI",
              "casterAssign": "TargetSelf"
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
              "variableName": "WMonster_W1_Mecha_02_AIFlag_P2",
              "value": 1
            }
          ]
        }
      ],
      "references": []
    },
    "1013014_WMonster_W1_Mecha_02_RL_Ability07_Part02": {
      "fileName": "1013014_WMonster_W1_Mecha_02_RL_Ability07_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Monster_W1_Mecha03_RL_Enhance_Dormancy[<span class=\"descriptionNumberColor\">Firepower Recovery</span>]",
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
              "modifier": "Monster_W1_Mecha03_RL_Enhance_Dormancy[<span class=\"descriptionNumberColor\">Firepower Recovery</span>]"
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
                    "operator": "Variables[0] (MaxHPValue) || Variables[1] ({[Skill07[1]]}) || MUL || RETURN",
                    "displayLines": "(MaxHPValue * {[Skill07[1]]})",
                    "constants": [],
                    "variables": [
                      "MaxHPValue",
                      "{[Skill07[1]]}"
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
                    "operator": "Variables[0] (MaxHPValue) || Variables[1] ({[Skill07[3]]}) || MUL || RETURN",
                    "displayLines": "(MaxHPValue * {[Skill07[3]]})",
                    "constants": [],
                    "variables": [
                      "MaxHPValue",
                      "{[Skill07[3]]}"
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
                      "modifier": "Monster_W1_Mecha03_RL_Part02Effect"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Monster_W1_Mecha03_RL_Part03Effect"
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
                "value1": "Monster_W1_Mecha03_RL_Enhance_Dormancy[<span class=\"descriptionNumberColor\">Firepower Recovery</span>]",
                "compareType": "=",
                "value2": 2,
                "valueType": "LifeTime"
              },
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Monster_W1_Mecha03_RL_Enhance_Dormancy[<span class=\"descriptionNumberColor\">Firepower Recovery</span>]",
                    "compareType": "=",
                    "value2": 3,
                    "valueType": "LifeTime"
                  },
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Monster_W1_Mecha03_RL_Enhance_Dormancy[<span class=\"descriptionNumberColor\">Firepower Recovery</span>]",
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
    "1013014_WMonster_W1_Mecha_02_RL_Ability07_Part01": {
      "fileName": "1013014_WMonster_W1_Mecha_02_RL_Ability07_Part01",
      "childAbilityList": [
        "1013014_WMonster_W1_Mecha_02_RL_Ability07_Camera",
        "1013014_WMonster_W1_Mecha_02_RL_Ability07_Part01",
        "1013014_WMonster_W1_Mecha_02_RL_Ability07_Part02"
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
          "ability": "WMonster_W1_Mecha_02_RL_Ability07_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1013014_WMonster_W1_Mecha_02_RL_Ability06_Part02": {
      "fileName": "1013014_WMonster_W1_Mecha_02_RL_Ability06_Part02",
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
              "operator": "Variables[0] ({[Skill06[0]]}) || Constants[0] (0.3) || MUL || RETURN",
              "displayLines": "({[Skill06[0]]} * 0.3)",
              "constants": [
                0.3
              ],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "30%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || Constants[0] (0.3) || MUL || RETURN",
              "displayLines": "({[Skill06[0]]} * 0.3)",
              "constants": [
                0.3
              ],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "30%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || Constants[0] (0.4) || MUL || RETURN",
              "displayLines": "({[Skill06[0]]} * 0.4)",
              "constants": [
                0.4
              ],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "40%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1013014_WMonster_W1_Mecha_02_RL_Ability06_Part01": {
      "fileName": "1013014_WMonster_W1_Mecha_02_RL_Ability06_Part01",
      "childAbilityList": [
        "1013014_WMonster_W1_Mecha_02_RL_Ability06_Camera",
        "1013014_WMonster_W1_Mecha_02_RL_Ability06_Part01",
        "1013014_WMonster_W1_Mecha_02_RL_Ability06_Part02"
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
          "ability": "WMonster_W1_Mecha_02_RL_Ability06_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "references": []
    },
    "1013014_WMonster_W1_Mecha_02_RL_Passive_AIControlAndHPLock": {
      "fileName": "1013014_WMonster_W1_Mecha_02_RL_Passive_AIControlAndHPLock",
      "childAbilityList": [
        "1013014_WMonster_W1_Mecha_02_RL_Passive_AIControlAndHPLock"
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
          "modifier": "OneMorePerTurn"
        },
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
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Monster_W1_Mecha03_RemoveOneMore"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_Mecha03_BreakResetCharge"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W1_Mecha03_RL_PartController"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "SummonSequence",
          "value": 1
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
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "WMonster_Mecha_02_MuteHitFly"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Monster_Mecha03_BreakResetCharge",
          "execute": [
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
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
                          "target": "{{Caster}}"
                        },
                        "modifier": "W1_Mecha02_AttackBonus[<span class=\"descriptionNumberColor\">Charging</span>]"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "Monster_W1_Mecha03_RL_Ability03_DamageUp[<span class=\"descriptionNumberColor\">DMG Boost</span>]"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "HP_Bars_Remaining",
                        "compareType": ">",
                        "value2": 1
                      },
                      "passed": [
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
                              "modifier": "W1_Mecha02_AttackBonus_Effect"
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
                            },
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "W1_Mecha02_AttackBonus_Effect"
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
                          "variableName": "AIFlag",
                          "value": 4
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
          "for": "WMonster_Mecha_02_MuteHitFly",
          "modifierFlags": [
            "MuteHitFly"
          ],
          "stackData": [],
          "latentQueue": [
            "SummonSequence"
          ]
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
          "latentQueue": [
            "SummonSequence"
          ]
        }
      ]
    },
    "1013014_WMonster_W1_Mecha_02_Passive_AIControlAndHPLock": {
      "fileName": "1013014_WMonster_W1_Mecha_02_Passive_AIControlAndHPLock",
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
          "modifier": "OneMorePerTurn"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 1013011,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Automaton Grizzly (Bug)"
          },
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Monster_W1_Mecha03_RemoveOneMore"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_Mecha03_BreakResetCharge"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "SummonSequence",
          "value": 1
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
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "WMonster_Mecha_02_MuteHitFly"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Monster_Mecha03_BreakResetCharge",
          "execute": [
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "W1_Mecha02_AttackBonus[<span class=\"descriptionNumberColor\">Charging</span>]"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Enemy ID",
                        "ID": 1013011,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "characterName": "Automaton Grizzly (Bug)"
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
                          "value": 4
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
          "for": "WMonster_Mecha_02_MuteHitFly",
          "modifierFlags": [
            "MuteHitFly"
          ],
          "stackData": [],
          "latentQueue": [
            "SummonSequence"
          ]
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
          "latentQueue": [
            "SummonSequence"
          ]
        }
      ]
    },
    "1013014_WMonster_W1_Mecha_02_Ability05_Part02": {
      "fileName": "1013014_WMonster_W1_Mecha_02_Ability05_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{All Team Members}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": "<=",
            "value2": 3
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "SummonSequence",
                "compareType": "=",
                "value2": 1,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Enemy ID",
                            "ID": 1013012,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "characterName": "Automaton Grizzly (Complete)"
                          },
                          {
                            "name": "Enemy ID",
                            "ID": 1013013,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "characterName": "Automaton Grizzly (Complete)"
                          },
                          {
                            "name": "Enemy ID",
                            "ID": 1013014,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "characterName": "Automaton Grizzly (Complete)"
                          }
                        ]
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 2
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "TeammateSurvive",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": 0,
                          "enemyList": [
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_RO_015_SummonID",
                              "summonLocation": "BeforeCaster"
                            },
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_RO_015_SummonID",
                              "summonLocation": "First"
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": 0,
                          "enemyList": [
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_RO_015_SummonID",
                              "summonLocation": "BeforeCaster"
                            },
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_RO_015_SummonID",
                              "summonLocation": "First"
                            },
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_RO_015_SummonID",
                              "summonLocation": "AfterCaster"
                            },
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_RO_015_SummonID",
                              "summonLocation": "Last"
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
                        "name": "Enemy ID",
                        "ID": 1013011,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "characterName": "Automaton Grizzly (Bug)"
                      },
                      "passed": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": 0,
                          "enemyList": [
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_RO_015_SummonID2",
                              "summonLocation": "BeforeCaster"
                            },
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_RO_015_SummonID2",
                              "summonLocation": "AfterCaster"
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "OR",
                                "conditionList": [
                                  {
                                    "name": "Enemy ID",
                                    "ID": 1013012,
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Caster}}"
                                    },
                                    "characterName": "Automaton Grizzly (Complete)"
                                  },
                                  {
                                    "name": "Enemy ID",
                                    "ID": 1013013,
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Caster}}"
                                    },
                                    "characterName": "Automaton Grizzly (Complete)"
                                  },
                                  {
                                    "name": "Enemy ID",
                                    "ID": 1013014,
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Caster}}"
                                    },
                                    "characterName": "Automaton Grizzly (Complete)"
                                  }
                                ]
                              },
                              {
                                "name": "Compare: Variable",
                                "value1": "HP_Bars_Remaining",
                                "compareType": "=",
                                "value2": 1
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Create Enemies",
                              "delayPercent": 0,
                              "enemyList": [
                                {
                                  "name": "Create Enemy from Custom",
                                  "value": "Monster_RO_015_SummonID",
                                  "summonLocation": "First"
                                },
                                {
                                  "name": "Create Enemy from Custom",
                                  "value": "Monster_RO_015_SummonID",
                                  "summonLocation": "Last"
                                }
                              ]
                            }
                          ],
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "AND",
                                "conditionList": [
                                  {
                                    "name": "OR",
                                    "conditionList": [
                                      {
                                        "name": "Enemy ID",
                                        "ID": 1013012,
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Caster}}"
                                        },
                                        "characterName": "Automaton Grizzly (Complete)"
                                      },
                                      {
                                        "name": "Enemy ID",
                                        "ID": 1013013,
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Caster}}"
                                        },
                                        "characterName": "Automaton Grizzly (Complete)"
                                      }
                                    ]
                                  },
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
                                  "name": "Create Enemies",
                                  "delayPercent": 0,
                                  "enemyList": [
                                    {
                                      "name": "Create Enemy from Custom",
                                      "value": "Monster_RO_015_SummonID",
                                      "summonLocation": "BeforeCaster"
                                    },
                                    {
                                      "name": "Create Enemy from Custom",
                                      "value": "Monster_RO_015_SummonID",
                                      "summonLocation": "First"
                                    }
                                  ]
                                }
                              ],
                              "failed": [
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "AND",
                                    "conditionList": [
                                      {
                                        "name": "Enemy ID",
                                        "ID": 1013014,
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Caster}}"
                                        },
                                        "characterName": "Automaton Grizzly (Complete)"
                                      },
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
                                      "name": "Create Enemies",
                                      "delayPercent": 0,
                                      "enemyList": [
                                        {
                                          "name": "Create Enemy from Custom",
                                          "value": "Monster_RO_015_SummonID2",
                                          "summonLocation": "First"
                                        },
                                        {
                                          "name": "Create Enemy from Custom",
                                          "value": "Monster_RO_015_SummonID2",
                                          "summonLocation": "Last"
                                        }
                                      ]
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "Create Enemies",
                                      "delayPercent": 0,
                                      "enemyList": [
                                        {
                                          "name": "Create Enemy from Custom",
                                          "value": "Monster_RO_015_SummonID",
                                          "summonLocation": "BeforeCaster"
                                        },
                                        {
                                          "name": "Create Enemy from Custom",
                                          "value": "Monster_RO_015_SummonID",
                                          "summonLocation": "AfterCaster"
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
                  "variableName": "SummonSequence",
                  "value": 2
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Enemy ID",
                            "ID": 1013012,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "characterName": "Automaton Grizzly (Complete)"
                          },
                          {
                            "name": "Enemy ID",
                            "ID": 1013013,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "characterName": "Automaton Grizzly (Complete)"
                          },
                          {
                            "name": "Enemy ID",
                            "ID": 1013014,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "characterName": "Automaton Grizzly (Complete)"
                          }
                        ]
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 2
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "TeammateSurvive",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": 0,
                          "enemyList": [
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_RO_015_SummonID",
                              "summonLocation": "BeforeCaster"
                            },
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_RO_015_SummonID",
                              "summonLocation": "First"
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": 0,
                          "enemyList": [
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_RO_015_SummonID",
                              "summonLocation": "BeforeCaster"
                            },
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_RO_015_SummonID",
                              "summonLocation": "First"
                            },
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_RO_015_SummonID",
                              "summonLocation": "AfterCaster"
                            },
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_RO_015_SummonID",
                              "summonLocation": "Last"
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
                        "name": "Enemy ID",
                        "ID": 1013011,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "characterName": "Automaton Grizzly (Bug)"
                      },
                      "passed": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": 0,
                          "enemyList": [
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_RO_015_SummonID2",
                              "summonLocation": "BeforeCaster"
                            },
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_RO_015_SummonID2",
                              "summonLocation": "AfterCaster"
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "OR",
                                "conditionList": [
                                  {
                                    "name": "Enemy ID",
                                    "ID": 1013012,
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Caster}}"
                                    },
                                    "characterName": "Automaton Grizzly (Complete)"
                                  },
                                  {
                                    "name": "Enemy ID",
                                    "ID": 1013013,
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Caster}}"
                                    },
                                    "characterName": "Automaton Grizzly (Complete)"
                                  },
                                  {
                                    "name": "Enemy ID",
                                    "ID": 1013014,
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Caster}}"
                                    },
                                    "characterName": "Automaton Grizzly (Complete)"
                                  }
                                ]
                              },
                              {
                                "name": "Compare: Variable",
                                "value1": "HP_Bars_Remaining",
                                "compareType": "=",
                                "value2": 1
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Create Enemies",
                              "delayPercent": 0,
                              "enemyList": [
                                {
                                  "name": "Create Enemy from Custom",
                                  "value": "Monster_RO_015_SummonID",
                                  "summonLocation": "First"
                                },
                                {
                                  "name": "Create Enemy from Custom",
                                  "value": "Monster_RO_015_SummonID",
                                  "summonLocation": "Last"
                                }
                              ]
                            }
                          ],
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "AND",
                                "conditionList": [
                                  {
                                    "name": "OR",
                                    "conditionList": [
                                      {
                                        "name": "Enemy ID",
                                        "ID": 1013012,
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Caster}}"
                                        },
                                        "characterName": "Automaton Grizzly (Complete)"
                                      },
                                      {
                                        "name": "Enemy ID",
                                        "ID": 1013013,
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Caster}}"
                                        },
                                        "characterName": "Automaton Grizzly (Complete)"
                                      }
                                    ]
                                  },
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
                                  "name": "Create Enemies",
                                  "delayPercent": 0,
                                  "enemyList": [
                                    {
                                      "name": "Create Enemy from Custom",
                                      "value": "Monster_RO_015_SummonID",
                                      "summonLocation": "BeforeCaster"
                                    },
                                    {
                                      "name": "Create Enemy from Custom",
                                      "value": "Monster_RO_015_SummonID",
                                      "summonLocation": "First"
                                    }
                                  ]
                                }
                              ],
                              "failed": [
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "AND",
                                    "conditionList": [
                                      {
                                        "name": "Enemy ID",
                                        "ID": 1013014,
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Caster}}"
                                        },
                                        "characterName": "Automaton Grizzly (Complete)"
                                      },
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
                                      "name": "Create Enemies",
                                      "delayPercent": 0,
                                      "enemyList": [
                                        {
                                          "name": "Create Enemy from Custom",
                                          "value": "Monster_RO_015_SummonID2",
                                          "summonLocation": "First"
                                        },
                                        {
                                          "name": "Create Enemy from Custom",
                                          "value": "Monster_RO_015_SummonID2",
                                          "summonLocation": "Last"
                                        }
                                      ]
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "Create Enemies",
                                      "delayPercent": 0,
                                      "enemyList": [
                                        {
                                          "name": "Create Enemy from Custom",
                                          "value": "Monster_RO_015_SummonID",
                                          "summonLocation": "BeforeCaster"
                                        },
                                        {
                                          "name": "Create Enemy from Custom",
                                          "value": "Monster_RO_015_SummonID",
                                          "summonLocation": "AfterCaster"
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
                  "variableName": "SummonSequence",
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
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Enemy ID",
                        "ID": 1013012,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "characterName": "Automaton Grizzly (Complete)"
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 1013013,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "characterName": "Automaton Grizzly (Complete)"
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 1013014,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "characterName": "Automaton Grizzly (Complete)"
                      }
                    ]
                  },
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
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "TeammateSurvive",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "SummonSequence",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": 0,
                          "enemyList": [
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_RO_015_SummonID",
                              "summonLocation": "BeforeCaster"
                            },
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_RO_015_SummonID",
                              "summonLocation": "AfterCaster"
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
                          "variableName": "SummonSequence",
                          "value": 2
                        }
                      ],
                      "failed": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": 0,
                          "enemyList": [
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_RO_015_SummonID",
                              "summonLocation": "BeforeCaster"
                            },
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_RO_015_SummonID",
                              "summonLocation": "AfterCaster"
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
                          "variableName": "SummonSequence",
                          "value": 1
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
                    "name": "Enemy ID",
                    "ID": 1013011,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "Automaton Grizzly (Bug)"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "SummonSequence",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": 0,
                          "enemyList": [
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_RO_015_SummonID",
                              "summonLocation": "BeforeCaster"
                            },
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_RO_015_SummonID",
                              "summonLocation": "AfterCaster"
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
                          "variableName": "SummonSequence",
                          "value": 2
                        }
                      ],
                      "failed": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": 0,
                          "enemyList": [
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_RO_015_SummonID",
                              "summonLocation": "BeforeCaster"
                            },
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_RO_015_SummonID",
                              "summonLocation": "AfterCaster"
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
                          "variableName": "SummonSequence",
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "Standard_Servant[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Enemy ID",
                "ID": 1013012,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Automaton Grizzly (Complete)"
              },
              {
                "name": "Enemy ID",
                "ID": 1013013,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Automaton Grizzly (Complete)"
              },
              {
                "name": "Enemy ID",
                "ID": 1013014,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Automaton Grizzly (Complete)"
              }
            ]
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "modifier": "Monster_W1_Mecha03_RL_Explode"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1013014_WMonster_W1_Mecha_02_Ability05_Part01": {
      "fileName": "1013014_WMonster_W1_Mecha_02_Ability05_Part01",
      "childAbilityList": [
        "1013014_WMonster_W1_Mecha_02_A_Ability05_Camera",
        "1013014_WMonster_W1_Mecha_02_Ability05_Part01",
        "1013014_WMonster_W1_Mecha_02_Ability05_Part02"
      ],
      "skillTrigger": "Skill05",
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
          "ability": "WMonster_W1_Mecha_02_Ability05_Part02",
          "isTrigger": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Enemy ID",
                "ID": 1013011,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Automaton Grizzly (Bug)"
              },
              {
                "name": "Enemy ID",
                "ID": 1013012,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Automaton Grizzly (Complete)"
              },
              {
                "name": "Enemy ID",
                "ID": 1013013,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Automaton Grizzly (Complete)"
              },
              {
                "name": "Enemy ID",
                "ID": 1013014,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Automaton Grizzly (Complete)"
              }
            ]
          },
          "passed": [
            "Deleted bullshit"
          ],
          "failed": [
            "Deleted bullshit"
          ]
        }
      ],
      "references": []
    },
    "1013014_WMonster_W1_Mecha_02_Ability04_Part02": {
      "fileName": "1013014_WMonster_W1_Mecha_02_Ability04_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Looped Event",
          "Event": [
            "Move to Next Listed Target",
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "ResistedFlag"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "Standard_CTRL_Taunt[<span class=\"descriptionNumberColor\">Taunt</span>]",
              "duration": {
                "operator": "Variables[0] ({[Skill04[1]]}) || RETURN",
                "displayLines": "{[Skill04[1]]}",
                "constants": [],
                "variables": [
                  "{[Skill04[1]]}"
                ]
              },
              "baseChance": {
                "operator": "Variables[0] ({[Skill04[2]]}) || RETURN",
                "displayLines": "{[Skill04[2]]}",
                "constants": [],
                "variables": [
                  "{[Skill04[2]]}"
                ]
              },
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "ResistedFlag",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "UI Display Event (On Entity)",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "popUpText": "Not Effective"
                    }
                  ]
                }
              ],
              "resisted": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "ResistedFlag",
                  "value": 1
                }
              ]
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1013014_WMonster_W1_Mecha_02_Ability04_Part01": {
      "fileName": "1013014_WMonster_W1_Mecha_02_Ability04_Part01",
      "childAbilityList": [
        "1013014_WMonster_W1_Mecha_02_Ability04_Camera",
        "1013014_WMonster_W1_Mecha_02_Ability04_Part01",
        "1013014_WMonster_W1_Mecha_02_Ability04_Part02"
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
          "ability": "WMonster_W1_Mecha_02_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1013014_WMonster_W1_Mecha_02_Ability03_Part02": {
      "fileName": "1013014_WMonster_W1_Mecha_02_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill03[0]]}) || Constants[0] (0.7) || MUL || RETURN",
              "displayLines": "({[Skill03[0]]} * 0.7)",
              "constants": [
                0.7
              ],
              "variables": [
                "{[Skill03[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "70%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill03[0]]}) || Constants[0] (0.3) || MUL || RETURN",
              "displayLines": "({[Skill03[0]]} * 0.3)",
              "constants": [
                0.3
              ],
              "variables": [
                "{[Skill03[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "30%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "W1_Mecha02_AttackBonus_Effect"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1013014_WMonster_W1_Mecha_02_Ability03_Part01": {
      "fileName": "1013014_WMonster_W1_Mecha_02_Ability03_Part01",
      "childAbilityList": [
        "1013014_WMonster_W1_Mecha_02_Ability03_Camera",
        "1013014_WMonster_W1_Mecha_02_Ability03_Part01",
        "1013014_WMonster_W1_Mecha_02_Ability03_Part02"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 1013011,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Automaton Grizzly (Bug)"
          },
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Enemy ID",
                    "ID": 1013012,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "Automaton Grizzly (Complete)"
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 1013013,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "Automaton Grizzly (Complete)"
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 1013014,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "Automaton Grizzly (Complete)"
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
          "ability": "WMonster_W1_Mecha_02_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1013014_WMonster_W1_Mecha_02_Ability02_Part02": {
      "fileName": "1013014_WMonster_W1_Mecha_02_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
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
              "modifier": "Monster_W1_Mecha03_RL_Ability03_DamageUp[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
              "valuePerStack": {
                "MDF_DamageUpRatio_PerLayer": {
                  "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                  "displayLines": "{[PassiveSkill01[0]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill01[0]]}"
                  ]
                }
              }
            }
          ],
          "failed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "W1_Mecha02_AttackBonus[<span class=\"descriptionNumberColor\">Charging</span>]"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "W1_Mecha02_AttackBonus[<span class=\"descriptionNumberColor\">Charging</span>]",
              "duration": 1,
              "valuePerStack": {
                "ModifierDamageUpValue": {
                  "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                  "displayLines": "{[Skill02[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill02[0]]}"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Enemy ID",
                "ID": 1013011,
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "characterName": "Automaton Grizzly (Bug)"
              },
              {
                "name": "Enemy ID",
                "ID": 1013012,
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "characterName": "Automaton Grizzly (Complete)"
              },
              {
                "name": "Enemy ID",
                "ID": 1013013,
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "characterName": "Automaton Grizzly (Complete)"
              },
              {
                "name": "Enemy ID",
                "ID": 1013014,
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "characterName": "Automaton Grizzly (Complete)"
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
              "modifier": "W1_Mecha02_AttackBonus_Effect"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1013014_WMonster_W1_Mecha_02_Ability02_Part01": {
      "fileName": "1013014_WMonster_W1_Mecha_02_Ability02_Part01",
      "childAbilityList": [
        "1013014_WMonster_W1_Mecha_02_Ability02_Camera",
        "1013014_WMonster_W1_Mecha_02_Ability02_Part01",
        "1013014_WMonster_W1_Mecha_02_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "OneMore"
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "WMonster_W1_Mecha_02_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1013014_WMonster_W1_Mecha_02_Ability01_Part02": {
      "fileName": "1013014_WMonster_W1_Mecha_02_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
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
                  "operator": "Variables[0] ({[Skill01[0]]}) || Constants[0] (0.2) || MUL || RETURN",
                  "displayLines": "({[Skill01[0]]} * 0.2)",
                  "constants": [
                    0.2
                  ],
                  "variables": [
                    "{[Skill01[0]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "20%"
              }
            }
          ]
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1013014_WMonster_W1_Mecha_02_Ability01_Part01": {
      "fileName": "1013014_WMonster_W1_Mecha_02_Ability01_Part01",
      "childAbilityList": [
        "1013014_WMonster_W1_Mecha_02_Ability01_Camera",
        "1013014_WMonster_W1_Mecha_02_Ability01_Part01",
        "1013014_WMonster_W1_Mecha_02_Ability01_Part02"
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
          "ability": "WMonster_W1_Mecha_02_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "references": []
    },
    "1013014_WMonster_Mecha_02_PassiveAbilityInitiate": {
      "fileName": "1013014_WMonster_Mecha_02_PassiveAbilityInitiate",
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
          "variableName": "ActivationCountDown",
          "value": 2
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "ActivationMode"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "BeingDamageFlag",
          "value": 1
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "WMonster_Mecha_02_Activation_Controller"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "WMonster_Mecha_02_Activation_Controller",
          "execute": [
            {
              "eventTrigger": "Take Damage End [Owner]: Hit",
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
                        "value1": "BeingDamageFlag",
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
                        "value1": "ActivationMode",
                        "compareType": "=",
                        "value2": 0,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "BeingDamageFlag"
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "WMonster_Mecha_02_Ability10_InsertAbility",
                      "priorityTag": "MonsterInsertAttackSelf",
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
            "ActivationCountDown",
            "ActivationMode",
            "BeingDamageFlag"
          ]
        }
      ]
    },
    "1013014_Modifiers": {
      "fileName": "1013014_Modifiers",
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
          "for": "Monster_W1_Mecha03_RL_AfterCharge",
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
                    "skillName": "Skill03"
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
          "for": "Monster_W1_Mecha03_RL_ChargeDecision",
          "execute": [
            {
              "eventTrigger": "When Modifier is Added [Owner]",
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
                        "modifier": "W1_Mecha02_AttackBonus[<span class=\"descriptionNumberColor\">Charging</span>]"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "Monster_W1_Mecha03_RL_Ability03_DamageUp[<span class=\"descriptionNumberColor\">DMG Boost</span>]"
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
                      "modifier": "Monster_W1_Mecha03_RL_AfterCharge",
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
          "for": "Monster_W1_Mecha03_RL_Part03Effect",
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
          "for": "Monster_W1_Mecha03_RL_Part02Effect",
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
          "for": "Monster_W1_Mecha03_RL_Explode",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "flagName": "Deathrattle"
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "SummonSequence",
            "TeammateSurvive"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W1_Mecha03_RL_ChargeFlag",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
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
                    "modifier": "Monster_W1_Mecha04_RL_PartController"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "Phase2ChargeFlag",
                      "value": 1
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Monster_W1_Mecha04_RL_ChargeFlag"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Turn [Action-End Phase]",
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
          "for": "Monster_W1_Mecha03_RL_Ability03_DamageUp[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_DamageUpRatio_PerLayer) || Variables[1] (ModifierLayers) || MUL || RETURN",
                    "displayLines": "(MDF_DamageUpRatio_PerLayer * ModifierLayers)",
                    "constants": [],
                    "variables": [
                      "MDF_DamageUpRatio_PerLayer",
                      "ModifierLayers"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_DamageUpRatio_PerLayer"
          ],
          "latentQueue": [],
          "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_DamageUpRatio_PerLayer</span>. This effect can stack.",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "DMG Boost",
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W1_Mecha03_RL_Revenge[<span class=\"descriptionNumberColor\">Obliteration Order</span>]",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_DamageUpRatio) || RETURN",
                    "displayLines": "MDF_DamageUpRatio",
                    "constants": [],
                    "variables": [
                      "MDF_DamageUpRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_DamageUpRatio"
          ],
          "latentQueue": [],
          "description": "Increases DMG by <span class=\"descriptionNumberColor\">MDF_DamageUpRatio</span>. Every time this unit enters the Charging state, DMG is increased further.",
          "type": "Buff",
          "effectName": "Obliteration Order",
          "statusName": "Obliteration Order"
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W1_Mecha03_RL_BreakTarget"
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W1_Mecha03_RL_Support",
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
                  "modifier": "Monster_W1_Mecha03_RL_BreakTarget"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Monster_W1_Mecha03_RL_BreakTarget",
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
                    "modifier": "Monster_W1_Mecha04_RL_PartController"
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
                      "abilityName": "Monster_W1_Mecha04_RL_PassiveAbility_InsertCamera",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "priorityTag": "MonsterInsertAttackOthers",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    },
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
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W1_Mecha03_RL_Endurance",
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
          "for": "Monster_W1_Mecha03_RL_Stealth",
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
          "for": "Monster_W1_Mecha03_RL_Enhance_Dormancy[<span class=\"descriptionNumberColor\">Firepower Recovery</span>]",
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
                  "modifier": "Monster_W1_Mecha03_RL_Stealth"
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
                  "modifier": "Monster_W1_Mecha03_RL_Stealth"
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
                  "modifier": "Monster_W1_Mecha03_RL_Stealth"
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
                  "modifier": "Monster_W1_Mecha03_RL_Stealth"
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
          "statusName": "Firepower Recovery",
          "duration": 2
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W1_Mecha03_RL_Dormancy",
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
                  "modifier": "Monster_W1_Mecha03_RL_Stealth"
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
                  "modifier": "Monster_W1_Mecha03_RL_Stealth"
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
          "for": "Monster_W1_Mecha03_RL_PartController",
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
                        "modifier": "Monster_W1_Mecha04_RL_PartController"
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
                                    "modifier": "Monster_W1_Mecha04_RL_Dormancy",
                                    "justAddedOrActive": true
                                  },
                                  {
                                    "name": "Has Modifier",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "modifier": "Monster_W1_Mecha04_RL_Enhance_Dormancy[<span class=\"descriptionNumberColor\">Speedy Recovery</span>]",
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
                                      "modifier": "Monster_W1_Mecha03_RL_Endurance"
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
                                      "abilityName": "Monster_W1_Mecha03_RL_PassiveAbility_Insert",
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
                                      "modifier": "Monster_W1_Mecha04_RL_Endurance",
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
                                      "variableName": "Mecha03_00_DamageUpPercentage",
                                      "value": {
                                        "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                                        "displayLines": "{[Skill02[0]]}",
                                        "constants": [],
                                        "variables": [
                                          "{[Skill02[0]]}"
                                        ]
                                      }
                                    },
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "OR",
                                        "conditionList": [
                                          {
                                            "name": "Enemy ID",
                                            "ID": 1013012,
                                            "target": {
                                              "name": "Target Name",
                                              "target": "{{Caster}}"
                                            },
                                            "characterName": "Automaton Grizzly (Complete)"
                                          },
                                          {
                                            "name": "Enemy ID",
                                            "ID": 1013014,
                                            "target": {
                                              "name": "Target Name",
                                              "target": "{{Caster}}"
                                            },
                                            "characterName": "Automaton Grizzly (Complete)"
                                          }
                                        ]
                                      },
                                      "passed": [
                                        {
                                          "name": "Define Custom Variable",
                                          "target": {
                                            "name": "Target Name",
                                            "target": "{{Parameter Target}}"
                                          },
                                          "variableName": "Mecha03_00_DamageUpBasePercentage",
                                          "value": {
                                            "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
                                            "displayLines": "{[PassiveSkill01[2]]}",
                                            "constants": [],
                                            "variables": [
                                              "{[PassiveSkill01[2]]}"
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
                                      "name": "IF",
                                      "conditions": {
                                        "name": "AND",
                                        "conditionList": [
                                          {
                                            "name": "Enemy ID",
                                            "ID": 1013014,
                                            "target": {
                                              "name": "Target Name",
                                              "target": "{{Modifier Holder}}"
                                            },
                                            "characterName": "Automaton Grizzly (Complete)"
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
                                              "multiAdd": "{[Skill07[4]]}"
                                            },
                                            {
                                              "name": "Add Events/Bonuses",
                                              "to": {
                                                "name": "Target Name",
                                                "target": "{{Modifier Holder}}"
                                              },
                                              "modifier": "Monster_W1_Mecha03_RL_Enhance_Dormancy[<span class=\"descriptionNumberColor\">Firepower Recovery</span>]",
                                              "duration": {
                                                "operator": "Variables[0] ({[Skill07[0]]}) || RETURN",
                                                "displayLines": "{[Skill07[0]]}",
                                                "constants": [],
                                                "variables": [
                                                  "{[Skill07[0]]}"
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
                                              "multiAdd": "{[Skill07[5]]}"
                                            },
                                            {
                                              "name": "Add Events/Bonuses",
                                              "to": {
                                                "name": "Target Name",
                                                "target": "{{Modifier Holder}}"
                                              },
                                              "modifier": "Monster_W1_Mecha03_RL_Enhance_Dormancy[<span class=\"descriptionNumberColor\">Firepower Recovery</span>]",
                                              "duration": {
                                                "operator": "Variables[0] ({[Skill07[2]]}) || RETURN",
                                                "displayLines": "{[Skill07[2]]}",
                                                "constants": [],
                                                "variables": [
                                                  "{[Skill07[2]]}"
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
                                          "modifier": "Monster_W1_Mecha03_RL_Dormancy"
                                        }
                                      ]
                                    },
                                    {
                                      "name": "Define Custom Variable",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "variableName": "Mecha03_00_DamageUpPercentage",
                                      "value": {
                                        "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                                        "displayLines": "{[Skill02[0]]}",
                                        "constants": [],
                                        "variables": [
                                          "{[Skill02[0]]}"
                                        ]
                                      }
                                    },
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "OR",
                                        "conditionList": [
                                          {
                                            "name": "Enemy ID",
                                            "ID": 1013012,
                                            "target": {
                                              "name": "Target Name",
                                              "target": "{{Caster}}"
                                            },
                                            "characterName": "Automaton Grizzly (Complete)"
                                          },
                                          {
                                            "name": "Enemy ID",
                                            "ID": 1013014,
                                            "target": {
                                              "name": "Target Name",
                                              "target": "{{Caster}}"
                                            },
                                            "characterName": "Automaton Grizzly (Complete)"
                                          }
                                        ]
                                      },
                                      "passed": [
                                        {
                                          "name": "Define Custom Variable",
                                          "target": {
                                            "name": "Target Name",
                                            "target": "{{Parameter Target}}"
                                          },
                                          "variableName": "Mecha03_00_DamageUpBasePercentage",
                                          "value": {
                                            "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
                                            "displayLines": "{[PassiveSkill01[2]]}",
                                            "constants": [],
                                            "variables": [
                                              "{[PassiveSkill01[2]]}"
                                            ]
                                          }
                                        }
                                      ]
                                    },
                                    {
                                      "name": "Remove Events/Bonuses",
                                      "to": {
                                        "name": "Target Name",
                                        "target": "{{Modifier Holder}}"
                                      },
                                      "modifier": "W1_Mecha02_AttackBonus[<span class=\"descriptionNumberColor\">Charging</span>]"
                                    },
                                    {
                                      "name": "Remove Events/Bonuses",
                                      "to": {
                                        "name": "Target Name",
                                        "target": "{{Modifier Holder}}"
                                      },
                                      "modifier": "W1_Mecha02_AttackBonus_Effect"
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
                                        "target": "{{Modifier Holder}}"
                                      },
                                      "scope": "TargetEntity",
                                      "variableName": "AIFlag",
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
                            "ID": 1013022,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "characterName": "Automaton Direwolf (Complete)"
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
                              "modifier": "Monster_W1_Mecha04_RL_Endurance",
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
                              "abilityName": "Monster_W1_Mecha04_RL_PassiveAbility_Insert2",
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
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster's Minions}}"
                                },
                                "value1": "TeamCharacterCount",
                                "compareType": ">=",
                                "value2": 1
                              },
                              "passed": [
                                {
                                  "name": "Remove Modifier Behavior Flag(s)",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Caster's Minions}}"
                                  },
                                  "flagNames": []
                                },
                                {
                                  "name": "Mark Entity For Immediate Death",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Caster's Minions}}"
                                  }
                                },
                                {
                                  "name": "Force Entity Death",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Caster's Minions}}"
                                  }
                                },
                                {
                                  "name": "Remove Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster's Minions}}"
                                  },
                                  "modifier": "Monster_W1_Mecha03_RL_Explode"
                                }
                              ]
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
                                "ID": 1013024,
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "characterName": "Automaton Direwolf (Complete)"
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
                                    "modifier": "Monster_W1_Mecha04_RL_PartController"
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
                                                "modifier": "Monster_W1_Mecha04_RL_Dormancy",
                                                "justAddedOrActive": true
                                              },
                                              {
                                                "name": "Has Modifier",
                                                "target": {
                                                  "name": "Target Name",
                                                  "target": "{{Parameter Target}}"
                                                },
                                                "modifier": "Monster_W1_Mecha04_RL_Enhance_Dormancy[<span class=\"descriptionNumberColor\">Speedy Recovery</span>]",
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
                                                      "modifier": "Monster_W1_Mecha03_RL_Part02Effect"
                                                    },
                                                    {
                                                      "name": "Remove Events/Bonuses",
                                                      "to": {
                                                        "name": "Target Name",
                                                        "target": "{{Caster}}"
                                                      },
                                                      "modifier": "Monster_W1_Mecha03_RL_Part03Effect"
                                                    },
                                                    {
                                                      "name": "Add Events/Bonuses",
                                                      "to": {
                                                        "name": "Target Name",
                                                        "target": "{{Modifier Holder}}"
                                                      },
                                                      "modifier": "Monster_W1_Mecha03_RL_Endurance"
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
                                                      "abilityName": "Monster_W1_Mecha03_RL_PassiveAbility_Insert3",
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
                                                      "modifier": "Monster_W1_Mecha04_RL_Endurance",
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
                                                      "variableName": "Mecha03_00_DamageUpPercentage",
                                                      "value": {
                                                        "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                                                        "displayLines": "{[Skill02[0]]}",
                                                        "constants": [],
                                                        "variables": [
                                                          "{[Skill02[0]]}"
                                                        ]
                                                      }
                                                    },
                                                    {
                                                      "name": "IF",
                                                      "conditions": {
                                                        "name": "OR",
                                                        "conditionList": [
                                                          {
                                                            "name": "Enemy ID",
                                                            "ID": 1013012,
                                                            "target": {
                                                              "name": "Target Name",
                                                              "target": "{{Caster}}"
                                                            },
                                                            "characterName": "Automaton Grizzly (Complete)"
                                                          },
                                                          {
                                                            "name": "Enemy ID",
                                                            "ID": 1013014,
                                                            "target": {
                                                              "name": "Target Name",
                                                              "target": "{{Caster}}"
                                                            },
                                                            "characterName": "Automaton Grizzly (Complete)"
                                                          }
                                                        ]
                                                      },
                                                      "passed": [
                                                        {
                                                          "name": "Define Custom Variable",
                                                          "target": {
                                                            "name": "Target Name",
                                                            "target": "{{Parameter Target}}"
                                                          },
                                                          "variableName": "Mecha03_00_DamageUpBasePercentage",
                                                          "value": {
                                                            "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
                                                            "displayLines": "{[PassiveSkill01[2]]}",
                                                            "constants": [],
                                                            "variables": [
                                                              "{[PassiveSkill01[2]]}"
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
                                                  "name": "IF",
                                                  "conditions": {
                                                    "name": "AND",
                                                    "conditionList": [
                                                      {
                                                        "name": "Enemy ID",
                                                        "ID": 1013014,
                                                        "target": {
                                                          "name": "Target Name",
                                                          "target": "{{Modifier Holder}}"
                                                        },
                                                        "characterName": "Automaton Grizzly (Complete)"
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
                                                          "multiAdd": "{[Skill07[4]]}"
                                                        },
                                                        {
                                                          "name": "Add Events/Bonuses",
                                                          "to": {
                                                            "name": "Target Name",
                                                            "target": "{{Modifier Holder}}"
                                                          },
                                                          "modifier": "Monster_W1_Mecha03_RL_Enhance_Dormancy[<span class=\"descriptionNumberColor\">Firepower Recovery</span>]",
                                                          "duration": {
                                                            "operator": "Variables[0] ({[Skill07[0]]}) || RETURN",
                                                            "displayLines": "{[Skill07[0]]}",
                                                            "constants": [],
                                                            "variables": [
                                                              "{[Skill07[0]]}"
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
                                                          "multiAdd": "{[Skill07[5]]}"
                                                        },
                                                        {
                                                          "name": "Add Events/Bonuses",
                                                          "to": {
                                                            "name": "Target Name",
                                                            "target": "{{Modifier Holder}}"
                                                          },
                                                          "modifier": "Monster_W1_Mecha03_RL_Enhance_Dormancy[<span class=\"descriptionNumberColor\">Firepower Recovery</span>]",
                                                          "duration": {
                                                            "operator": "Variables[0] ({[Skill07[2]]}) || RETURN",
                                                            "displayLines": "{[Skill07[2]]}",
                                                            "constants": [],
                                                            "variables": [
                                                              "{[Skill07[2]]}"
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
                                                      "modifier": "Monster_W1_Mecha03_RL_Dormancy"
                                                    }
                                                  ]
                                                },
                                                {
                                                  "name": "Remove Events/Bonuses",
                                                  "to": {
                                                    "name": "Target Name",
                                                    "target": "{{Caster}}"
                                                  },
                                                  "modifier": "Monster_W1_Mecha03_RL_Part02Effect"
                                                },
                                                {
                                                  "name": "Remove Events/Bonuses",
                                                  "to": {
                                                    "name": "Target Name",
                                                    "target": "{{Caster}}"
                                                  },
                                                  "modifier": "Monster_W1_Mecha03_RL_Part03Effect"
                                                },
                                                {
                                                  "name": "Define Custom Variable",
                                                  "target": {
                                                    "name": "Target Name",
                                                    "target": "{{Parameter Target}}"
                                                  },
                                                  "variableName": "Mecha03_00_DamageUpPercentage",
                                                  "value": {
                                                    "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                                                    "displayLines": "{[Skill02[0]]}",
                                                    "constants": [],
                                                    "variables": [
                                                      "{[Skill02[0]]}"
                                                    ]
                                                  }
                                                },
                                                {
                                                  "name": "IF",
                                                  "conditions": {
                                                    "name": "OR",
                                                    "conditionList": [
                                                      {
                                                        "name": "Enemy ID",
                                                        "ID": 1013012,
                                                        "target": {
                                                          "name": "Target Name",
                                                          "target": "{{Caster}}"
                                                        },
                                                        "characterName": "Automaton Grizzly (Complete)"
                                                      },
                                                      {
                                                        "name": "Enemy ID",
                                                        "ID": 1013014,
                                                        "target": {
                                                          "name": "Target Name",
                                                          "target": "{{Caster}}"
                                                        },
                                                        "characterName": "Automaton Grizzly (Complete)"
                                                      }
                                                    ]
                                                  },
                                                  "passed": [
                                                    {
                                                      "name": "Define Custom Variable",
                                                      "target": {
                                                        "name": "Target Name",
                                                        "target": "{{Parameter Target}}"
                                                      },
                                                      "variableName": "Mecha03_00_DamageUpBasePercentage",
                                                      "value": {
                                                        "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
                                                        "displayLines": "{[PassiveSkill01[2]]}",
                                                        "constants": [],
                                                        "variables": [
                                                          "{[PassiveSkill01[2]]}"
                                                        ]
                                                      }
                                                    }
                                                  ]
                                                },
                                                {
                                                  "name": "Remove Events/Bonuses",
                                                  "to": {
                                                    "name": "Target Name",
                                                    "target": "{{Modifier Holder}}"
                                                  },
                                                  "modifier": "W1_Mecha02_AttackBonus[<span class=\"descriptionNumberColor\">Charging</span>]"
                                                },
                                                {
                                                  "name": "Remove Events/Bonuses",
                                                  "to": {
                                                    "name": "Target Name",
                                                    "target": "{{Modifier Holder}}"
                                                  },
                                                  "modifier": "W1_Mecha02_AttackBonus_Effect"
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
                                                    "target": "{{Modifier Holder}}"
                                                  },
                                                  "scope": "TargetEntity",
                                                  "variableName": "AIFlag",
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
                                    "modifier": "Monster_W1_Mecha04_RL_PartController"
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
          "for": "Monster_W1_Mecha03_RemoveOneMore",
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
                        "value2": 5,
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
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "OneMorePerTurn"
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "Monster_W1_Mecha03_RL_Enhance_Dormancy[<span class=\"descriptionNumberColor\">Firepower Recovery</span>]"
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