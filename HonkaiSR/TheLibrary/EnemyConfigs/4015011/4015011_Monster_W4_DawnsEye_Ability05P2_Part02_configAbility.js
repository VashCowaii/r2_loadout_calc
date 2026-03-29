const configAbility = {
  "fileName": "4015011_Monster_W4_DawnsEye_Ability05P2_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"2111915075\">Enemy_W4_DawnsEye_Ability4P2Effect</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"2022265091\">Enemy_W4_DawnsEye_MainStory</a>"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1205772152\">Enemy_W4_DawnsEye_Ability05Phase02</a>"
        }
      ]
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Thunder",
        "Damage": {
          "operator": "Variables[0] ({[Skill05P2[0]]}) || RETURN",
          "displayLines": "{[Skill05P2[0]]}",
          "constants": [],
          "variables": [
            "{[Skill05P2[0]]}"
          ]
        },
        "HitSplit": 0.2,
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Thunder",
        "Damage": {
          "operator": "Variables[0] ({[Skill05P2[0]]}) || RETURN",
          "displayLines": "{[Skill05P2[0]]}",
          "constants": [],
          "variables": [
            "{[Skill05P2[0]]}"
          ]
        },
        "HitSplit": 0.2,
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Thunder",
        "Damage": {
          "operator": "Variables[0] ({[Skill05P2[0]]}) || RETURN",
          "displayLines": "{[Skill05P2[0]]}",
          "constants": [],
          "variables": [
            "{[Skill05P2[0]]}"
          ]
        },
        "HitSplit": 0.6,
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "Thunder_CountDark",
        "compareType": ">",
        "value2": {
          "operator": "Variables[0] ({[Skill05P2[1]]}) || RETURN",
          "displayLines": "{[Skill05P2[1]]}",
          "constants": [],
          "variables": [
            "{[Skill05P2[1]]}"
          ]
        }
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "Thunder_CountTotal",
          "value": {
            "operator": "Variables[0] ({[Skill05P2[1]]}) || RETURN",
            "displayLines": "{[Skill05P2[1]]}",
            "constants": [],
            "variables": [
              "{[Skill05P2[1]]}"
            ]
          }
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "variableName": "Thunder_CountTotal",
          "value": {
            "operator": "Variables[0] (Thunder_CountDark) || RETURN",
            "displayLines": "Thunder_CountDark",
            "constants": [],
            "variables": [
              "Thunder_CountDark"
            ]
          }
        }
      ]
    },
    {
      "name": "Define Custom Variable with Team Count",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "variableName": "CurrentLightTeamCount",
      "livingTargets": true
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "CurrentLightTeamCount",
        "compareType": ">",
        "value2": 0
      },
      "passed": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
            "DamageFlat": {
              "operator": "Variables[0] ({[SkillP02[0]]}) || Variables[1] (BaseAttack) || MUL || Variables[2] (Thunder_CountTotal) || MUL || Variables[3] (CurrentLightTeamCount) || DIV || RETURN",
              "displayLines": "((({[SkillP02[0]]} * BaseAttack) * Thunder_CountTotal) / CurrentLightTeamCount)",
              "constants": [],
              "variables": [
                "{[SkillP02[0]]}",
                "BaseAttack",
                "Thunder_CountTotal",
                "CurrentLightTeamCount"
              ]
            },
            "dmgFormulaFinal": "Converted DMG Base",
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK"
          }
        },
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "Thunder_CountDark",
          "value": {
            "operator": "Constants[0] (0) || Variables[0] (Thunder_CountTotal) || SUB || RETURN",
            "displayLines": "(0 - Thunder_CountTotal)",
            "constants": [
              0
            ],
            "variables": [
              "Thunder_CountTotal"
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
          "modifier": "<a class=\"gModGreen\" id=\"-2093876840\">Modifier_Monster_W4_DawnsEye_WheaterRainUIController</a>"
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
      "modifier": "<a class=\"gModGreen\" id=\"-484779713\">Enemy_W4_DawnsEye_Ability05_HitTag</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-526594563\">Modifier_Monster_W4_DawnsEye_WheaterRainChargeBreak</a>"
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
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All(with Unselectable)}}"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Enemy ID",
        "ID": {
          "operator": "Variables[0] (PartEntity1_MonsterID) || RETURN",
          "displayLines": "PartEntity1_MonsterID",
          "constants": [],
          "variables": [
            "PartEntity1_MonsterID"
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
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "Thunder_CountLight",
        "compareType": ">",
        "value2": 0
      },
      "passed": [
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
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 2
              },
              {
                "name": "Compare: Variable",
                "value1": "Thunder_CountLight",
                "compareType": ">=",
                "value2": 1
              }
            ]
          },
          "abilityName": "BattleEventAbility_W4_DawnsEye_RainSKill04Result",
          "abilitySource": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "abilityTarget": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "priorityTag": "MonsterChangeState",
          "canHitNonTargets": true,
          "allowAbilityTriggers": false
        }
      ],
      "failed": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1414068042\">Modifier_Monster_W4_DawnsEye_WheaterMarkAbility04</a>[<span class=\"descriptionNumberColor\">Ionization</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2093876840\">Modifier_Monster_W4_DawnsEye_WheaterRainUIController</a>"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1205772152\">Enemy_W4_DawnsEye_Ability05Phase02</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}