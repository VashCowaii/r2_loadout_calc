const configAbility = {
  "fileName": "2035011_Monster_W2_Feixiao_Ability08_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"2043551800\">Monster_W2_Feixiao_Main</a>"
          },
          {
            "name": "Compare: Variable",
            "value1": "SpecialTalkUltraSkill",
            "compareType": "=",
            "value2": 1
          }
        ]
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "SpecialTalkUltraSkill",
          "value": 2
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"2043551800\">Monster_W2_Feixiao_Main</a>"
          },
          {
            "name": "Compare: Variable",
            "value1": "SpecialTalkUltraSkill",
            "compareType": "=",
            "value2": 0
          }
        ]
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "SpecialTalkUltraSkill",
          "value": 1
        }
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Nebula Devourer: Self}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"239356205\">Monster_W2_Feixiao_ChargeEffectControl</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1540195907\">Monster_W2_Feixiao_Part2Effect</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1070872392\">Monster_W2_Feixiao_Part3Effect</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Nebula Devourer: Self}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-255389438\">Monster_W2_FeixiaoPart_Part2Effect</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Nebula Devourer: Self}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1302036093\">Monster_W2_FeixiaoPart_Part3Effect</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Nebula Devourer: Self}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-452452552\">Monster_W2_FeixiaoPart_Part3EffectSpecial</a>"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "searchRandom": true,
      "ifTargetFound": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"881636857\">Monster_W2_Feixiao_UltraConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Skill08DamagePercentage",
      "value": 0
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "EnhanceHead_Flag",
        "compareType": "=",
        "value2": 1
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "Skill08DamagePercentage",
          "value": {
            "operator": "Variables[0] (Skill08DamagePercentage) || Variables[1] ({[Skill08[2]]}) || ADD || RETURN",
            "displayLines": "(Skill08DamagePercentage + {[Skill08[2]]})",
            "constants": [],
            "variables": [
              "Skill08DamagePercentage",
              "{[Skill08[2]]}"
            ]
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "EnhanceTail_Flag",
        "compareType": "=",
        "value2": 1
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "Skill08DamagePercentage",
          "value": {
            "operator": "Variables[0] (Skill08DamagePercentage) || Variables[1] ({[Skill08[2]]}) || ADD || RETURN",
            "displayLines": "(Skill08DamagePercentage + {[Skill08[2]]})",
            "constants": [],
            "variables": [
              "Skill08DamagePercentage",
              "{[Skill08[2]]}"
            ]
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "EnhanceLimb_Flag",
        "compareType": "=",
        "value2": 1
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "Skill08DamagePercentage",
          "value": {
            "operator": "Variables[0] (Skill08DamagePercentage) || Variables[1] ({[Skill08[1]]}) || ADD || Variables[2] ({[Skill08[0]]}) || ADD || RETURN",
            "displayLines": "((Skill08DamagePercentage + {[Skill08[1]]}) + {[Skill08[0]]})",
            "constants": [],
            "variables": [
              "Skill08DamagePercentage",
              "{[Skill08[1]]}",
              "{[Skill08[0]]}"
            ]
          }
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "variableName": "Skill08DamagePercentage",
          "value": {
            "operator": "Variables[0] (Skill08DamagePercentage) || Variables[1] ({[Skill08[0]]}) || ADD || RETURN",
            "displayLines": "(Skill08DamagePercentage + {[Skill08[0]]})",
            "constants": [],
            "variables": [
              "Skill08DamagePercentage",
              "{[Skill08[0]]}"
            ]
          }
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team All}}.[[getMemosprite]]"
      }
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"1886819039\">Monster_W2_Feixiao_Ability08Mark</a>",
        "invertCondition": true
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1886819039\">Monster_W2_Feixiao_Ability08Mark</a>"
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"1886819039\">Monster_W2_Feixiao_Ability08Mark</a>",
        "invertCondition": true
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1886819039\">Monster_W2_Feixiao_Ability08Mark</a>"
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"1886819039\">Monster_W2_Feixiao_Ability08Mark</a>",
        "invertCondition": true
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1886819039\">Monster_W2_Feixiao_Ability08Mark</a>"
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"1886819039\">Monster_W2_Feixiao_Ability08Mark</a>",
        "invertCondition": true
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1886819039\">Monster_W2_Feixiao_Ability08Mark</a>"
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
        "DamageType": "Wind",
        "Damage": {
          "operator": "Variables[0] (Skill08DamagePercentage) || RETURN",
          "displayLines": "Skill08DamagePercentage",
          "constants": [],
          "variables": [
            "Skill08DamagePercentage"
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
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "EnhanceHead_Flag",
        "compareType": "=",
        "value2": 1
      },
      "passed": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "searchRandom": true,
          "maxTargets": {
            "operator": "Variables[0] ({[PassiveSkill03[4]]}) || RETURN",
            "displayLines": "{[PassiveSkill03[4]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill03[4]]}"
            ]
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1794338335\">Standard_CTRL_Crazy</a>[<span class=\"descriptionNumberColor\">Outrage</span>]",
              "duration": {
                "operator": "Variables[0] ({[PassiveSkill03[3]]}) || RETURN",
                "displayLines": "{[PassiveSkill03[3]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill03[3]]}"
                ]
              },
              "baseChance": {
                "operator": "Variables[0] ({[Skill03[5]]}) || RETURN",
                "displayLines": "{[Skill03[5]]}",
                "constants": [],
                "variables": [
                  "{[Skill03[5]]}"
                ]
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
        "value1": "EnhanceTail_Flag",
        "compareType": "=",
        "value2": 1
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1887773470\">Standard_FatigueRatio</a>[<span class=\"descriptionNumberColor\">Weaken</span>]",
          "duration": {
            "operator": "Variables[0] ({[PassiveSkill03[2]]}) || RETURN",
            "displayLines": "{[PassiveSkill03[2]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill03[2]]}"
            ]
          },
          "baseChance": {
            "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
            "displayLines": "{[Skill02[2]]}",
            "constants": [],
            "variables": [
              "{[Skill02[2]]}"
            ]
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
              "displayLines": "{[Skill02[1]]}",
              "constants": [],
              "variables": [
                "{[Skill02[1]]}"
              ]
            }
          }
        }
      ]
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
      "name": "Change Character Transformation",
      "target": {
        "name": "Target Name",
        "target": "{{Nebula Devourer: Self}}"
      },
      "phase": "Phase1"
    },
    {
      "name": "Change Character Transformation",
      "target": {
        "name": "Target Name",
        "target": "{{Feixiao Parts: Head}}"
      },
      "phase": "Phase1"
    },
    {
      "name": "Change Character Transformation",
      "target": {
        "name": "Target Name",
        "target": "{{Feixiao Parts: Claws}}"
      },
      "phase": "Phase1"
    },
    {
      "name": "Change Character Transformation",
      "target": {
        "name": "Target Name",
        "target": "{{Feixiao Parts: Tail}}"
      },
      "phase": "Phase1"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1886819039\">Monster_W2_Feixiao_Ability08Mark</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1070872392\">Monster_W2_Feixiao_Part3Effect</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Nebula Devourer: Self}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1302036093\">Monster_W2_FeixiaoPart_Part3Effect</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Nebula Devourer: Self}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-452452552\">Monster_W2_FeixiaoPart_Part3EffectSpecial</a>"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "EnhanceHead_Flag",
      "value": 0
    },
    {
      "name": "Define Custom Variable",
      "variableName": "EnhanceLimb_Flag",
      "value": 0
    },
    {
      "name": "Define Custom Variable",
      "variableName": "EnhanceTail_Flag",
      "value": 0
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
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"2043551800\">Monster_W2_Feixiao_Main</a>"
          },
          {
            "name": "Compare: Variable",
            "value1": "SpecialTalkUltraSkill",
            "compareType": "=",
            "value2": 1
          }
        ]
      }
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}