const compositeAbilityObject = {
  "fullCharacterName": 1013023,
  "trimCharacterName": 1013023,
  "abilityList": [
    "1013023_Monster_W1_Mecha04_RL_PassiveAbility_InsertCamera",
    "1013023_Monster_W1_Mecha04_RL_PassiveAbility_Insert3",
    "1013023_Monster_W1_Mecha04_RL_PassiveAbility_Insert2",
    "1013023_Monster_W1_Mecha04_RL_PassiveAbility_Insert",
    "1013023_WMonster_W1_Mecha_05_RL_Ability13_Part02",
    "1013023_WMonster_W1_Mecha_05_RL_Ability13_Part01",
    "1013023_WMonster_W1_Mecha_05_RL_Ability10_Part02",
    "1013023_WMonster_W1_Mecha_05_RL_Ability10_Part01",
    "1013023_WMonster_W1_Mecha_05_RL_Ability08_Part02",
    "1013023_WMonster_W1_Mecha_05_RL_Ability08_Part01",
    "1013023_WMonster_W1_Mecha_05_RL_Passive_AIControlAndHPLock",
    "1013023_WMonster_W1_Mecha_05_Passive_AIControlAndHPLock",
    "1013023_WMonster_W1_Mecha_05_Ability12_Part02",
    "1013023_WMonster_W1_Mecha_05_Ability12_Part01",
    "1013023_WMonster_W1_Mecha_05_Ability11_Part02",
    "1013023_WMonster_W1_Mecha_05_Ability11_Part01",
    "1013023_WMonster_W1_Mecha_05_AbilityP09_Part02",
    "1013023_WMonster_W1_Mecha_05_AbilityP09_Part01",
    "1013023_WMonster_W1_Mecha_05_Ability09_Part02",
    "1013023_WMonster_W1_Mecha_05_Ability09_Part01",
    "1013023_WMonster_W1_Mecha_05_Ability07_Part02",
    "1013023_WMonster_W1_Mecha_05_Ability07_Part01",
    "1013023_WMonster_W1_Mecha_05_Ability06_Part02",
    "1013023_WMonster_W1_Mecha_05_Ability06_Part01",
    "1013023_Monster_W1_Mecha04_PassiveAbility_KlaraSpecialVictory",
    "1013023_Modifiers"
  ],
  "abilityObject": {
    "1013023_Monster_W1_Mecha04_RL_PassiveAbility_InsertCamera": {
      "fileName": "1013023_Monster_W1_Mecha04_RL_PassiveAbility_InsertCamera",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "1013023_Monster_W1_Mecha04_RL_PassiveAbility_Insert3": {
      "fileName": "1013023_Monster_W1_Mecha04_RL_PassiveAbility_Insert3",
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
            "modifier": "<a class=\"gModGreen\" id=\"1494789360\">Monster_W1_Mecha03_RL_PartController</a>"
          },
          "ifTargetFound": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1739978054\">Monster_W1_Mecha03_RL_Dormancy</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-785895523\">Monster_W1_Mecha03_RL_Enhance_Dormancy</a>[<span class=\"descriptionNumberColor\">Firepower Recovery</span>]"
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
              "modifier": "<a class=\"gModGreen\" id=\"1670817312\">W1_Mecha02_AttackBonus</a>[<span class=\"descriptionNumberColor\">Charging</span>]"
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
                "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]",
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1139046842\">Monster_W1_Mecha03_RL_Explode</a>"
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
              "functionName": "<a class=\"gTempYellow\" id=\"542143301\">Monster_ChangePhase</a>"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1902031976\">Monster_ChangePhase_ParamEntity</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1362109025\">Monster_W1_Mecha04_RL_Part3Passive</a>[<span class=\"descriptionNumberColor\">Combat Speed-Up</span>]",
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
              "modifier": "<a class=\"gModGreen\" id=\"-735432971\">Monster_W1_Mecha03_RL_Revenge</a>[<span class=\"descriptionNumberColor\">Obliteration Order</span>]",
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
              "modifier": "<a class=\"gModGreen\" id=\"1547227211\">Monster_W1_Mecha04_RL_Endurance</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1945457431\">Monster_W1_Mecha04_PassiveMDF</a>[<span class=\"descriptionNumberColor\">Hounding Pursuit</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1520229010\">Enemy_W1_Mecha04_ChainSawSpeedUp</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1780187848\">Monster_W1_Mecha04_RL_ChargeFlag</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1289880646\">Monster_W1_Mecha04_RL_Part02Effect</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1980712149\">Monster_W1_Mecha04_RL_Part03Effect</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1432540592\">Monster_Mecha04_RL_ResetAI</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1002549759\">Monster_W1_Mecha04_Sign01</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
              "onlyRemoveOwnersInstance": true
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1052882616\">Monster_W1_Mecha04_Sign02</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
              "onlyRemoveOwnersInstance": true
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-16772570\">Monster_W1_Mecha03_RL_Endurance</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-404471381\">Monster_W1_Mecha03_RemoveOneMore</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>",
              "casterAssign": "TargetSelf"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-9287253\">Monster_W1_Mecha03_RL_ChargeFlag</a>",
              "casterAssign": "TargetSelf"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1629066392\">Monster_W1_Mecha03_RL_Part03Effect</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1629066392\">Monster_W1_Mecha03_RL_Part03Effect</a>",
              "casterAssign": "TargetSelf"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1488319040\">Standard_CTRL_Taunt</a>[<span class=\"descriptionNumberColor\">Taunt</span>]",
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
    "1013023_Monster_W1_Mecha04_RL_PassiveAbility_Insert2": {
      "fileName": "1013023_Monster_W1_Mecha04_RL_PassiveAbility_Insert2",
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
          "functionName": "<a class=\"gTempYellow\" id=\"542143301\">Monster_ChangePhase</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1362109025\">Monster_W1_Mecha04_RL_Part3Passive</a>[<span class=\"descriptionNumberColor\">Combat Speed-Up</span>]",
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
          "modifier": "<a class=\"gModGreen\" id=\"1547227211\">Monster_W1_Mecha04_RL_Endurance</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1520229010\">Enemy_W1_Mecha04_ChainSawSpeedUp</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1002549759\">Monster_W1_Mecha04_Sign01</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
          "onlyRemoveOwnersInstance": true
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1052882616\">Monster_W1_Mecha04_Sign02</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
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
          "modifier": "<a class=\"gModGreen\" id=\"736844777\">Monster_W1_Mecha04_RL_PartController</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1780187848\">Monster_W1_Mecha04_RL_ChargeFlag</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1289880646\">Monster_W1_Mecha04_RL_Part02Effect</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1980712149\">Monster_W1_Mecha04_RL_Part03Effect</a>"
        }
      ],
      "references": []
    },
    "1013023_Monster_W1_Mecha04_RL_PassiveAbility_Insert": {
      "fileName": "1013023_Monster_W1_Mecha04_RL_PassiveAbility_Insert",
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
            "modifier": "<a class=\"gModGreen\" id=\"1494789360\">Monster_W1_Mecha03_RL_PartController</a>"
          },
          "ifTargetFound": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1739978054\">Monster_W1_Mecha03_RL_Dormancy</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-785895523\">Monster_W1_Mecha03_RL_Enhance_Dormancy</a>[<span class=\"descriptionNumberColor\">Firepower Recovery</span>]"
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
              "modifier": "<a class=\"gModGreen\" id=\"1670817312\">W1_Mecha02_AttackBonus</a>[<span class=\"descriptionNumberColor\">Charging</span>]"
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
                "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]",
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1139046842\">Monster_W1_Mecha03_RL_Explode</a>"
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
              "functionName": "<a class=\"gTempYellow\" id=\"542143301\">Monster_ChangePhase</a>"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1902031976\">Monster_ChangePhase_ParamEntity</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1547227211\">Monster_W1_Mecha04_RL_Endurance</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1945457431\">Monster_W1_Mecha04_PassiveMDF</a>[<span class=\"descriptionNumberColor\">Hounding Pursuit</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1520229010\">Enemy_W1_Mecha04_ChainSawSpeedUp</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1780187848\">Monster_W1_Mecha04_RL_ChargeFlag</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1289880646\">Monster_W1_Mecha04_RL_Part02Effect</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1432540592\">Monster_Mecha04_RL_ResetAI</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1909388904\">Sign_W1_Mecha02</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
              "onlyRemoveOwnersInstance": true
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-16772570\">Monster_W1_Mecha03_RL_Endurance</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-404471381\">Monster_W1_Mecha03_RemoveOneMore</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>",
              "casterAssign": "TargetSelf"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-9287253\">Monster_W1_Mecha03_RL_ChargeFlag</a>",
              "casterAssign": "TargetSelf"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1676987149\">Monster_W1_Mecha03_RL_Part02Effect</a>",
              "casterAssign": "TargetSelf"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1488319040\">Standard_CTRL_Taunt</a>[<span class=\"descriptionNumberColor\">Taunt</span>]",
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
    "1013023_WMonster_W1_Mecha_05_RL_Ability13_Part02": {
      "fileName": "1013023_WMonster_W1_Mecha_05_RL_Ability13_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "<a class=\"gModGreen\" id=\"-849878014\">Monster_W1_Mecha04_RL_Enhance_Dormancy</a>[<span class=\"descriptionNumberColor\">Speedy Recovery</span>]",
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
              "modifier": "<a class=\"gModGreen\" id=\"-849878014\">Monster_W1_Mecha04_RL_Enhance_Dormancy</a>[<span class=\"descriptionNumberColor\">Speedy Recovery</span>]"
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
                    "operator": "Variables[0] (MaxHPValue) || Variables[1] (UnusedUnderThisBase_60) || MUL || RETURN",
                    "displayLines": "(MaxHPValue * UnusedUnderThisBase_60)",
                    "constants": [],
                    "variables": [
                      "MaxHPValue",
                      "UnusedUnderThisBase_60"
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
                    "operator": "Variables[0] (MaxHPValue) || Variables[1] (UnusedUnderThisBase_59) || MUL || RETURN",
                    "displayLines": "(MaxHPValue * UnusedUnderThisBase_59)",
                    "constants": [],
                    "variables": [
                      "MaxHPValue",
                      "UnusedUnderThisBase_59"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1289880646\">Monster_W1_Mecha04_RL_Part02Effect</a>"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1980712149\">Monster_W1_Mecha04_RL_Part03Effect</a>"
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
                "value1": "<a class=\"gModGreen\" id=\"-849878014\">Monster_W1_Mecha04_RL_Enhance_Dormancy</a>[<span class=\"descriptionNumberColor\">Speedy Recovery</span>]",
                "compareType": "=",
                "value2": 2,
                "valueType": "LifeTime"
              },
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "<a class=\"gModGreen\" id=\"-849878014\">Monster_W1_Mecha04_RL_Enhance_Dormancy</a>[<span class=\"descriptionNumberColor\">Speedy Recovery</span>]",
                    "compareType": "=",
                    "value2": 3,
                    "valueType": "LifeTime"
                  },
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "<a class=\"gModGreen\" id=\"-849878014\">Monster_W1_Mecha04_RL_Enhance_Dormancy</a>[<span class=\"descriptionNumberColor\">Speedy Recovery</span>]",
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
    "1013023_WMonster_W1_Mecha_05_RL_Ability13_Part01": {
      "fileName": "1013023_WMonster_W1_Mecha_05_RL_Ability13_Part01",
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
          "ability": "WMonster_W1_Mecha_05_RL_Ability13_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1013023_WMonster_W1_Mecha_05_RL_Ability10_Part02": {
      "fileName": "1013023_WMonster_W1_Mecha_05_RL_Ability10_Part02",
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
            "modifier": "<a class=\"gModGreen\" id=\"1494789360\">Monster_W1_Mecha03_RL_PartController</a>"
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
                      "modifier": "<a class=\"gModGreen\" id=\"118150896\">Monster_W1_Mecha03_RL_Ability03_DamageUp</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
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
                      "modifier": "<a class=\"gModGreen\" id=\"1364752860\">W1_Mecha02_AttackBonus_Effect</a>"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1670817312\">W1_Mecha02_AttackBonus</a>[<span class=\"descriptionNumberColor\">Charging</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1670817312\">W1_Mecha02_AttackBonus</a>[<span class=\"descriptionNumberColor\">Charging</span>]",
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1170331045\">Monster_APShow_Base_Immediately</a>",
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
              "modifier": "<a class=\"gModGreen\" id=\"-136691859\">Monster_W1_Mecha04_RL_Ability12_SpeedUp</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1520229010\">Enemy_W1_Mecha04_ChainSawSpeedUp</a>"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1002549759\">Monster_W1_Mecha04_Sign01</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1052882616\">Monster_W1_Mecha04_Sign02</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
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
    "1013023_WMonster_W1_Mecha_05_RL_Ability10_Part01": {
      "fileName": "1013023_WMonster_W1_Mecha_05_RL_Ability10_Part01",
      "childAbilityList": [
        "1013023_WMonster_W1_Mecha_05_RL_Ability10_Camera",
        "1013023_WMonster_W1_Mecha_05_RL_Ability10_Part01",
        "1013023_WMonster_W1_Mecha_05_RL_Ability10_Part02"
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
            "modifier": "<a class=\"gModGreen\" id=\"1494789360\">Monster_W1_Mecha03_RL_PartController</a>"
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
    "1013023_WMonster_W1_Mecha_05_RL_Ability08_Part02": {
      "fileName": "1013023_WMonster_W1_Mecha_05_RL_Ability08_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"-95545360\">W1_Mecha02_ThunderDOT</a>[<span class=\"descriptionNumberColor\">Bleed</span>]",
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
    "1013023_WMonster_W1_Mecha_05_RL_Ability08_Part01": {
      "fileName": "1013023_WMonster_W1_Mecha_05_RL_Ability08_Part01",
      "childAbilityList": [
        "1013023_WMonster_W1_Mecha_05_RL_Ability08_Camera",
        "1013023_WMonster_W1_Mecha_05_RL_Ability08_Part01",
        "1013023_WMonster_W1_Mecha_05_RL_Ability08_Part02"
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
    "1013023_WMonster_W1_Mecha_05_RL_Passive_AIControlAndHPLock": {
      "fileName": "1013023_WMonster_W1_Mecha_05_RL_Passive_AIControlAndHPLock",
      "childAbilityList": [
        "1013023_WMonster_W1_Mecha_05_RL_Passive_AIControlAndHPLock"
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
          "modifier": "<a class=\"gModGreen\" id=\"1081277388\">Monster_Mecha04_BattleScore1</a>"
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
          "modifier": "<a class=\"gModGreen\" id=\"-1945457431\">Monster_W1_Mecha04_PassiveMDF</a>[<span class=\"descriptionNumberColor\">Hounding Pursuit</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1827416969\">Monster_W1_Mecha04_InsertControl</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"736844777\">Monster_W1_Mecha04_RL_PartController</a>"
        }
      ],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-69428728\">WMonster_Mecha_02_MuteHitFly</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1170487461\">Enemy_W1_Mecha04_ChainSawSpeedController</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1068246674\">HideMonsterHUD</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1945457431\">Monster_W1_Mecha04_PassiveMDF</a>[<span class=\"descriptionNumberColor\">Hounding Pursuit</span>]",
          "stackData": [],
          "latentQueue": [],
          "description": "If \"Felling Order\" hits one target that does not currently have a Shield, immediately use \"Dismantle\" on a random target.",
          "type": "Other",
          "statusName": "Hounding Pursuit"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-742125552\">Enemy_W1_Mecha04_ChainSawSpeedNormal</a>",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1170487461\">Enemy_W1_Mecha04_ChainSawSpeedController</a>",
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
                        "modifier": "<a class=\"gModGreen\" id=\"-898477955\">StanceBreakState</a>"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-742125552\">Enemy_W1_Mecha04_ChainSawSpeedNormal</a>"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-742125552\">Enemy_W1_Mecha04_ChainSawSpeedNormal</a>"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-742125552\">Enemy_W1_Mecha04_ChainSawSpeedNormal</a>"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-69428728\">WMonster_Mecha_02_MuteHitFly</a>",
          "modifierFlags": [
            "MuteHitFly"
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1068246674\">HideMonsterHUD</a>",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1827416969\">Monster_W1_Mecha04_InsertControl</a>",
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
                            "modifier": "<a class=\"gModGreen\" id=\"-1002549759\">Monster_W1_Mecha04_Sign01</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-1052882616\">Monster_W1_Mecha04_Sign02</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
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
                          "modifier": "<a class=\"gModGreen\" id=\"413586706\">Enemy_W1_Mecha04_ChainSawSpeedUpAgain</a>"
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
                        "modifier": "<a class=\"gModGreen\" id=\"-1909388904\">Sign_W1_Mecha02</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"413586706\">Enemy_W1_Mecha04_ChainSawSpeedUpAgain</a>"
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
    "1013023_WMonster_W1_Mecha_05_Passive_AIControlAndHPLock": {
      "fileName": "1013023_WMonster_W1_Mecha_05_Passive_AIControlAndHPLock",
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
          "modifier": "<a class=\"gModGreen\" id=\"1081277388\">Monster_Mecha04_BattleScore1</a>"
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
          "modifier": "<a class=\"gModGreen\" id=\"-1827416969\">Monster_W1_Mecha04_InsertControl</a>"
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
              "modifier": "<a class=\"gModGreen\" id=\"1101304873\">Monster_Mecha04_ResetAI</a>"
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1945457431\">Monster_W1_Mecha04_PassiveMDF</a>[<span class=\"descriptionNumberColor\">Hounding Pursuit</span>]"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1321057432\">Monster_W1_Mecha04_RemoveOneMore</a>"
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
          "modifier": "<a class=\"gModGreen\" id=\"-69428728\">WMonster_Mecha_02_MuteHitFly</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1170487461\">Enemy_W1_Mecha04_ChainSawSpeedController</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1068246674\">HideMonsterHUD</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1945457431\">Monster_W1_Mecha04_PassiveMDF</a>[<span class=\"descriptionNumberColor\">Hounding Pursuit</span>]",
          "stackData": [],
          "latentQueue": [],
          "description": "If \"Felling Order\" hits one target that does not currently have a Shield, immediately use \"Dismantle\" on a random target.",
          "type": "Other",
          "statusName": "Hounding Pursuit"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-742125552\">Enemy_W1_Mecha04_ChainSawSpeedNormal</a>",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1170487461\">Enemy_W1_Mecha04_ChainSawSpeedController</a>",
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
                        "modifier": "<a class=\"gModGreen\" id=\"-898477955\">StanceBreakState</a>"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-742125552\">Enemy_W1_Mecha04_ChainSawSpeedNormal</a>"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-742125552\">Enemy_W1_Mecha04_ChainSawSpeedNormal</a>"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-742125552\">Enemy_W1_Mecha04_ChainSawSpeedNormal</a>"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-69428728\">WMonster_Mecha_02_MuteHitFly</a>",
          "modifierFlags": [
            "MuteHitFly"
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1068246674\">HideMonsterHUD</a>",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1827416969\">Monster_W1_Mecha04_InsertControl</a>",
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
                            "modifier": "<a class=\"gModGreen\" id=\"-1002549759\">Monster_W1_Mecha04_Sign01</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-1052882616\">Monster_W1_Mecha04_Sign02</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
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
                          "modifier": "<a class=\"gModGreen\" id=\"413586706\">Enemy_W1_Mecha04_ChainSawSpeedUpAgain</a>"
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
                        "modifier": "<a class=\"gModGreen\" id=\"-1909388904\">Sign_W1_Mecha02</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"413586706\">Enemy_W1_Mecha04_ChainSawSpeedUpAgain</a>"
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
          "for": "<a class=\"gModGreen\" id=\"mod__1101304873\">Monster_Mecha04_ResetAI</a>",
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
                        "modifier": "<a class=\"gModGreen\" id=\"-1002549759\">Monster_W1_Mecha04_Sign01</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1052882616\">Monster_W1_Mecha04_Sign02</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
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
                      "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
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
                    "modifier": "<a class=\"gModGreen\" id=\"-1002549759\">Monster_W1_Mecha04_Sign01</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
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
                    "modifier": "<a class=\"gModGreen\" id=\"-1052882616\">Monster_W1_Mecha04_Sign02</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
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
    "1013023_WMonster_W1_Mecha_05_Ability12_Part02": {
      "fileName": "1013023_WMonster_W1_Mecha_05_Ability12_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"1520229010\">Enemy_W1_Mecha04_ChainSawSpeedUp</a>"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1002549759\">Monster_W1_Mecha04_Sign01</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1052882616\">Monster_W1_Mecha04_Sign02</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
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
              "modifier": "<a class=\"gModGreen\" id=\"-136691859\">Monster_W1_Mecha04_RL_Ability12_SpeedUp</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1013023_WMonster_W1_Mecha_05_Ability12_Part01": {
      "fileName": "1013023_WMonster_W1_Mecha_05_Ability12_Part01",
      "childAbilityList": [
        "1013023_WMonster_W1_Mecha_05_Ability12_Camera",
        "1013023_WMonster_W1_Mecha_05_Ability12_Part01",
        "1013023_WMonster_W1_Mecha_05_Ability12_Part02"
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
    "1013023_WMonster_W1_Mecha_05_Ability11_Part02": {
      "fileName": "1013023_WMonster_W1_Mecha_05_Ability11_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"-95545360\">W1_Mecha02_ThunderDOT</a>[<span class=\"descriptionNumberColor\">Bleed</span>]",
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
    "1013023_WMonster_W1_Mecha_05_Ability11_Part01": {
      "fileName": "1013023_WMonster_W1_Mecha_05_Ability11_Part01",
      "childAbilityList": [
        "1013023_WMonster_W1_Mecha_05_Ability11_Camera",
        "1013023_WMonster_W1_Mecha_05_Ability11_Part01",
        "1013023_WMonster_W1_Mecha_05_Ability11_Part02"
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
    "1013023_WMonster_W1_Mecha_05_AbilityP09_Part02": {
      "fileName": "1013023_WMonster_W1_Mecha_05_AbilityP09_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"-95545360\">W1_Mecha02_ThunderDOT</a>[<span class=\"descriptionNumberColor\">Bleed</span>]",
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
    "1013023_WMonster_W1_Mecha_05_AbilityP09_Part01": {
      "fileName": "1013023_WMonster_W1_Mecha_05_AbilityP09_Part01",
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
    "1013023_WMonster_W1_Mecha_05_Ability09_Part02": {
      "fileName": "1013023_WMonster_W1_Mecha_05_Ability09_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"-95545360\">W1_Mecha02_ThunderDOT</a>[<span class=\"descriptionNumberColor\">Bleed</span>]",
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
    "1013023_WMonster_W1_Mecha_05_Ability09_Part01": {
      "fileName": "1013023_WMonster_W1_Mecha_05_Ability09_Part01",
      "childAbilityList": [
        "1013023_WMonster_W1_Mecha_05_Ability09_Camera",
        "1013023_WMonster_W1_Mecha_05_Ability09_Part01",
        "1013023_WMonster_W1_Mecha_05_Ability09_Part02"
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
    "1013023_WMonster_W1_Mecha_05_Ability07_Part02": {
      "fileName": "1013023_WMonster_W1_Mecha_05_Ability07_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"1520229010\">Enemy_W1_Mecha04_ChainSawSpeedUp</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1909388904\">Sign_W1_Mecha02</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
          "counter": 1
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1013023_WMonster_W1_Mecha_05_Ability07_Part01": {
      "fileName": "1013023_WMonster_W1_Mecha_05_Ability07_Part01",
      "childAbilityList": [
        "1013023_WMonster_W1_Mecha_05_Ability07_Camera",
        "1013023_WMonster_W1_Mecha_05_Ability07_Part01",
        "1013023_WMonster_W1_Mecha_05_Ability07_Part02"
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
    "1013023_WMonster_W1_Mecha_05_Ability06_Part02": {
      "fileName": "1013023_WMonster_W1_Mecha_05_Ability06_Part02",
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
                        "modifier": "<a class=\"gModGreen\" id=\"-1002549759\">Monster_W1_Mecha04_Sign01</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
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
                                "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
                              },
                              "passed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>",
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
                                  "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
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
                                "modifier": "<a class=\"gModGreen\" id=\"-1002549759\">Monster_W1_Mecha04_Sign01</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
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
                            "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>",
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
                              "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
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
              "modifier": "<a class=\"gModGreen\" id=\"-95545360\">W1_Mecha02_ThunderDOT</a>[<span class=\"descriptionNumberColor\">Bleed</span>]",
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
              "modifier": "<a class=\"gModGreen\" id=\"-95545360\">W1_Mecha02_ThunderDOT</a>[<span class=\"descriptionNumberColor\">Bleed</span>]",
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
                  "modifier": "<a class=\"gModGreen\" id=\"86526796\">Monster_W1_Mecha04_RemoveAim</a>"
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
                      "modifier": "<a class=\"gModGreen\" id=\"1520229010\">Enemy_W1_Mecha04_ChainSawSpeedUp</a>"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1909388904\">Sign_W1_Mecha02</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
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
                          "modifier": "<a class=\"gModGreen\" id=\"86526796\">Monster_W1_Mecha04_RemoveAim</a>"
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
                  "modifier": "<a class=\"gModGreen\" id=\"1520229010\">Enemy_W1_Mecha04_ChainSawSpeedUp</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1909388904\">Sign_W1_Mecha02</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
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
    "1013023_WMonster_W1_Mecha_05_Ability06_Part01": {
      "fileName": "1013023_WMonster_W1_Mecha_05_Ability06_Part01",
      "childAbilityList": [
        "1013023_WMonster_W1_Mecha_05_Ability06_Camera",
        "1013023_WMonster_W1_Mecha_05_Ability06_Part01",
        "1013023_WMonster_W1_Mecha_05_Ability06_Part02"
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
                      "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
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
                  "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
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
    "1013023_Monster_W1_Mecha04_PassiveAbility_KlaraSpecialVictory": {
      "fileName": "1013023_Monster_W1_Mecha04_PassiveAbility_KlaraSpecialVictory",
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
          "modifier": "<a class=\"gModGreen\" id=\"-220942891\">Monster_W1_Mecha04_KlaraSpecialVictory_LockHP</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__151548297\">Monster_W1_Mecha04_Instance_DisableAction</a>",
          "modifierFlags": [
            "DisableAction"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-220942891\">Monster_W1_Mecha04_KlaraSpecialVictory_LockHP</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"151548297\">Monster_W1_Mecha04_Instance_DisableAction</a>"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "1013023_Modifiers": {
      "fileName": "1013023_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-977376968\">Monster_W1_Mecha04_RL_AfterCharge</a>",
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
          "for": "<a class=\"gModGreen\" id=\"mod__613455868\">Monster_W1_Mecha04_RL_ChargeDecision</a>",
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
                    "modifier": "<a class=\"gModGreen\" id=\"1520229010\">Enemy_W1_Mecha04_ChainSawSpeedUp</a>"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-977376968\">Monster_W1_Mecha04_RL_AfterCharge</a>",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1980712149\">Monster_W1_Mecha04_RL_Part03Effect</a>",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1289880646\">Monster_W1_Mecha04_RL_Part02Effect</a>",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1432540592\">Monster_Mecha04_RL_ResetAI</a>",
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
                        "modifier": "<a class=\"gModGreen\" id=\"-1002549759\">Monster_W1_Mecha04_Sign01</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1052882616\">Monster_W1_Mecha04_Sign02</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
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
                      "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
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
                    "modifier": "<a class=\"gModGreen\" id=\"-1002549759\">Monster_W1_Mecha04_Sign01</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
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
                    "modifier": "<a class=\"gModGreen\" id=\"-1052882616\">Monster_W1_Mecha04_Sign02</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
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
          "for": "<a class=\"gModGreen\" id=\"mod__1780187848\">Monster_W1_Mecha04_RL_ChargeFlag</a>",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-136691859\">Monster_W1_Mecha04_RL_Ability12_SpeedUp</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1362109025\">Monster_W1_Mecha04_RL_Part3Passive</a>[<span class=\"descriptionNumberColor\">Combat Speed-Up</span>]",
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
          "for": "<a class=\"gModGreen\" id=\"mod__373380688\">Monster_W1_Mecha04_RL_BreakTarget</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1749433093\">Monster_W1_Mecha04_RL_Support</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"373380688\">Monster_W1_Mecha04_RL_BreakTarget</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"373380688\">Monster_W1_Mecha04_RL_BreakTarget</a>",
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
                    "modifier": "<a class=\"gModGreen\" id=\"1494789360\">Monster_W1_Mecha03_RL_PartController</a>"
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
                      "modifier": "<a class=\"gModGreen\" id=\"1670817312\">W1_Mecha02_AttackBonus</a>[<span class=\"descriptionNumberColor\">Charging</span>]"
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
          "for": "<a class=\"gModGreen\" id=\"mod__1547227211\">Monster_W1_Mecha04_RL_Endurance</a>",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1755632757\">Monster_W1_Mecha04_RL_Stealth</a>",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-849878014\">Monster_W1_Mecha04_RL_Enhance_Dormancy</a>[<span class=\"descriptionNumberColor\">Speedy Recovery</span>]",
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
                  "modifier": "<a class=\"gModGreen\" id=\"1755632757\">Monster_W1_Mecha04_RL_Stealth</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
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
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1909388904\">Sign_W1_Mecha02</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
                  "onlyRemoveOwnersInstance": true
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1002549759\">Monster_W1_Mecha04_Sign01</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
                  "onlyRemoveOwnersInstance": true
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1052882616\">Monster_W1_Mecha04_Sign02</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
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
                  "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
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
                  "modifier": "<a class=\"gModGreen\" id=\"1755632757\">Monster_W1_Mecha04_RL_Stealth</a>"
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
                  "modifier": "<a class=\"gModGreen\" id=\"1755632757\">Monster_W1_Mecha04_RL_Stealth</a>"
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
                  "modifier": "<a class=\"gModGreen\" id=\"1755632757\">Monster_W1_Mecha04_RL_Stealth</a>"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-301883151\">Monster_W1_Mecha04_RL_Dormancy</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"1755632757\">Monster_W1_Mecha04_RL_Stealth</a>"
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
                  "modifier": "<a class=\"gModGreen\" id=\"1755632757\">Monster_W1_Mecha04_RL_Stealth</a>"
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
          "for": "<a class=\"gModGreen\" id=\"mod__736844777\">Monster_W1_Mecha04_RL_PartController</a>",
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
                        "modifier": "<a class=\"gModGreen\" id=\"1494789360\">Monster_W1_Mecha03_RL_PartController</a>"
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
                                    "modifier": "<a class=\"gModGreen\" id=\"-1739978054\">Monster_W1_Mecha03_RL_Dormancy</a>",
                                    "justAddedOrActive": true
                                  },
                                  {
                                    "name": "Has Modifier",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "modifier": "<a class=\"gModGreen\" id=\"-785895523\">Monster_W1_Mecha03_RL_Enhance_Dormancy</a>[<span class=\"descriptionNumberColor\">Firepower Recovery</span>]",
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
                                      "modifier": "<a class=\"gModGreen\" id=\"1547227211\">Monster_W1_Mecha04_RL_Endurance</a>"
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
                                      "modifier": "<a class=\"gModGreen\" id=\"-16772570\">Monster_W1_Mecha03_RL_Endurance</a>",
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
                                      "modifier": "<a class=\"gModGreen\" id=\"-1909388904\">Sign_W1_Mecha02</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
                                      "onlyRemoveOwnersInstance": true
                                    },
                                    {
                                      "name": "Remove Events/Bonuses",
                                      "to": {
                                        "name": "Target Name",
                                        "target": "{{Player Team All}}"
                                      },
                                      "modifier": "<a class=\"gModGreen\" id=\"-1002549759\">Monster_W1_Mecha04_Sign01</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
                                      "onlyRemoveOwnersInstance": true
                                    },
                                    {
                                      "name": "Remove Events/Bonuses",
                                      "to": {
                                        "name": "Target Name",
                                        "target": "{{Player Team All}}"
                                      },
                                      "modifier": "<a class=\"gModGreen\" id=\"-1052882616\">Monster_W1_Mecha04_Sign02</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
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
                                      "modifier": "<a class=\"gModGreen\" id=\"1520229010\">Enemy_W1_Mecha04_ChainSawSpeedUp</a>"
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
                                              "multiAdd": "UnusedUnderThisBase_58"
                                            },
                                            {
                                              "name": "Add Events/Bonuses",
                                              "to": {
                                                "name": "Target Name",
                                                "target": "{{Modifier Holder}}"
                                              },
                                              "modifier": "<a class=\"gModGreen\" id=\"-849878014\">Monster_W1_Mecha04_RL_Enhance_Dormancy</a>[<span class=\"descriptionNumberColor\">Speedy Recovery</span>]",
                                              "duration": {
                                                "operator": "Variables[0] (UnusedUnderThisBase_57) || RETURN",
                                                "displayLines": "UnusedUnderThisBase_57",
                                                "constants": [],
                                                "variables": [
                                                  "UnusedUnderThisBase_57"
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
                                              "multiAdd": "UnusedUnderThisBase_56"
                                            },
                                            {
                                              "name": "Add Events/Bonuses",
                                              "to": {
                                                "name": "Target Name",
                                                "target": "{{Modifier Holder}}"
                                              },
                                              "modifier": "<a class=\"gModGreen\" id=\"-849878014\">Monster_W1_Mecha04_RL_Enhance_Dormancy</a>[<span class=\"descriptionNumberColor\">Speedy Recovery</span>]",
                                              "duration": {
                                                "operator": "Variables[0] (UnusedUnderThisBase_55) || RETURN",
                                                "displayLines": "UnusedUnderThisBase_55",
                                                "constants": [],
                                                "variables": [
                                                  "UnusedUnderThisBase_55"
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
                                          "modifier": "<a class=\"gModGreen\" id=\"-301883151\">Monster_W1_Mecha04_RL_Dormancy</a>"
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
                              "modifier": "<a class=\"gModGreen\" id=\"-16772570\">Monster_W1_Mecha03_RL_Endurance</a>",
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
                                    "modifier": "<a class=\"gModGreen\" id=\"1494789360\">Monster_W1_Mecha03_RL_PartController</a>"
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
                                                "modifier": "<a class=\"gModGreen\" id=\"-1739978054\">Monster_W1_Mecha03_RL_Dormancy</a>",
                                                "justAddedOrActive": true
                                              },
                                              {
                                                "name": "Has Modifier",
                                                "target": {
                                                  "name": "Target Name",
                                                  "target": "{{Parameter Target}}"
                                                },
                                                "modifier": "<a class=\"gModGreen\" id=\"-785895523\">Monster_W1_Mecha03_RL_Enhance_Dormancy</a>[<span class=\"descriptionNumberColor\">Firepower Recovery</span>]",
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
                                                      "modifier": "<a class=\"gModGreen\" id=\"-1289880646\">Monster_W1_Mecha04_RL_Part02Effect</a>"
                                                    },
                                                    {
                                                      "name": "Remove Events/Bonuses",
                                                      "to": {
                                                        "name": "Target Name",
                                                        "target": "{{Caster}}"
                                                      },
                                                      "modifier": "<a class=\"gModGreen\" id=\"1980712149\">Monster_W1_Mecha04_RL_Part03Effect</a>"
                                                    },
                                                    {
                                                      "name": "Add Events/Bonuses",
                                                      "to": {
                                                        "name": "Target Name",
                                                        "target": "{{Modifier Holder}}"
                                                      },
                                                      "modifier": "<a class=\"gModGreen\" id=\"1547227211\">Monster_W1_Mecha04_RL_Endurance</a>"
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
                                                      "modifier": "<a class=\"gModGreen\" id=\"-16772570\">Monster_W1_Mecha03_RL_Endurance</a>",
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
                                                  "modifier": "<a class=\"gModGreen\" id=\"-1909388904\">Sign_W1_Mecha02</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
                                                  "onlyRemoveOwnersInstance": true
                                                },
                                                {
                                                  "name": "Remove Events/Bonuses",
                                                  "to": {
                                                    "name": "Target Name",
                                                    "target": "{{Player Team All}}"
                                                  },
                                                  "modifier": "<a class=\"gModGreen\" id=\"-1002549759\">Monster_W1_Mecha04_Sign01</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
                                                  "onlyRemoveOwnersInstance": true
                                                },
                                                {
                                                  "name": "Remove Events/Bonuses",
                                                  "to": {
                                                    "name": "Target Name",
                                                    "target": "{{Player Team All}}"
                                                  },
                                                  "modifier": "<a class=\"gModGreen\" id=\"-1052882616\">Monster_W1_Mecha04_Sign02</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
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
                                                  "modifier": "<a class=\"gModGreen\" id=\"1520229010\">Enemy_W1_Mecha04_ChainSawSpeedUp</a>"
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
                                                          "multiAdd": "UnusedUnderThisBase_58"
                                                        },
                                                        {
                                                          "name": "Add Events/Bonuses",
                                                          "to": {
                                                            "name": "Target Name",
                                                            "target": "{{Modifier Holder}}"
                                                          },
                                                          "modifier": "<a class=\"gModGreen\" id=\"-849878014\">Monster_W1_Mecha04_RL_Enhance_Dormancy</a>[<span class=\"descriptionNumberColor\">Speedy Recovery</span>]",
                                                          "duration": {
                                                            "operator": "Variables[0] (UnusedUnderThisBase_57) || RETURN",
                                                            "displayLines": "UnusedUnderThisBase_57",
                                                            "constants": [],
                                                            "variables": [
                                                              "UnusedUnderThisBase_57"
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
                                                          "multiAdd": "UnusedUnderThisBase_56"
                                                        },
                                                        {
                                                          "name": "Add Events/Bonuses",
                                                          "to": {
                                                            "name": "Target Name",
                                                            "target": "{{Modifier Holder}}"
                                                          },
                                                          "modifier": "<a class=\"gModGreen\" id=\"-849878014\">Monster_W1_Mecha04_RL_Enhance_Dormancy</a>[<span class=\"descriptionNumberColor\">Speedy Recovery</span>]",
                                                          "duration": {
                                                            "operator": "Variables[0] (UnusedUnderThisBase_55) || RETURN",
                                                            "displayLines": "UnusedUnderThisBase_55",
                                                            "constants": [],
                                                            "variables": [
                                                              "UnusedUnderThisBase_55"
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
                                                      "modifier": "<a class=\"gModGreen\" id=\"-301883151\">Monster_W1_Mecha04_RL_Dormancy</a>"
                                                    }
                                                  ]
                                                },
                                                {
                                                  "name": "Remove Events/Bonuses",
                                                  "to": {
                                                    "name": "Target Name",
                                                    "target": "{{Caster}}"
                                                  },
                                                  "modifier": "<a class=\"gModGreen\" id=\"-1289880646\">Monster_W1_Mecha04_RL_Part02Effect</a>"
                                                },
                                                {
                                                  "name": "Remove Events/Bonuses",
                                                  "to": {
                                                    "name": "Target Name",
                                                    "target": "{{Caster}}"
                                                  },
                                                  "modifier": "<a class=\"gModGreen\" id=\"1980712149\">Monster_W1_Mecha04_RL_Part03Effect</a>"
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
                                    "modifier": "<a class=\"gModGreen\" id=\"1494789360\">Monster_W1_Mecha03_RL_PartController</a>"
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
          "for": "<a class=\"gModGreen\" id=\"mod__1364752860\">W1_Mecha02_AttackBonus_Effect</a>",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1670817312\">W1_Mecha02_AttackBonus</a>[<span class=\"descriptionNumberColor\">Charging</span>]",
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
                  "modifier": "<a class=\"gModGreen\" id=\"1364752860\">W1_Mecha02_AttackBonus_Effect</a>"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-735432971\">Monster_W1_Mecha03_RL_Revenge</a>[<span class=\"descriptionNumberColor\">Obliteration Order</span>]"
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
                  "modifier": "<a class=\"gModGreen\" id=\"1364752860\">W1_Mecha02_AttackBonus_Effect</a>"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1909388904\">Sign_W1_Mecha02</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-95545360\">W1_Mecha02_ThunderDOT</a>[<span class=\"descriptionNumberColor\">Bleed</span>]",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1081277388\">Monster_Mecha04_BattleScore1</a>",
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
          "for": "<a class=\"gModGreen\" id=\"mod__413586706\">Enemy_W1_Mecha04_ChainSawSpeedUpAgain</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"1520229010\">Enemy_W1_Mecha04_ChainSawSpeedUp</a>"
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
          "for": "<a class=\"gModGreen\" id=\"mod__1520229010\">Enemy_W1_Mecha04_ChainSawSpeedUp</a>",
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
          "for": "<a class=\"gModGreen\" id=\"mod__86526796\">Monster_W1_Mecha04_RemoveAim</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1002549759\">Monster_W1_Mecha04_Sign01</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1052882616\">Monster_W1_Mecha04_Sign02</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1520229010\">Enemy_W1_Mecha04_ChainSawSpeedUp</a>"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1052882616\">Monster_W1_Mecha04_Sign02</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1002549759\">Monster_W1_Mecha04_Sign01</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1321057432\">Monster_W1_Mecha04_RemoveOneMore</a>",
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