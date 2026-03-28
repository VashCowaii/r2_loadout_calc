const configAbility = {
  "fileName": "2004024_Monster_W2_Yanqing_Ability08_Part02_RL",
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
          "target": "{{All Team Members(Exclude Self)}}"
        },
        "value1": "TeamCharacterCount",
        "compareType": ">=",
        "value2": 1
      }
    },
    "Ability Start",
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1389810309\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_Core_RL</a>[<span class=\"descriptionNumberColor\">Sword Formation</span>]"
    },
    {
      "name": "Define Custom Variable with Team Count",
      "target": {
        "name": "Target Name",
        "target": "{{All Team Members}}"
      },
      "variableName": "W2_Yanqing_00_Skill07_AllTeamMemberNumber",
      "livingTargets": true
    },
    {
      "name": "Define Custom Variable with Team Count",
      "target": {
        "name": "Target Name",
        "target": "{{All Team Members}}"
      },
      "variableName": "ExtraDamageTimes",
      "livingTargets": true
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Add Target by Unique Identifier",
          "identifier": "W2_Yanqing_00_Skill02_SummonMinion_Pos_1"
        },
        "value1": "TeamCharacterCount",
        "compareType": ">=",
        "value2": 1
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Add Target by Unique Identifier",
          "identifier": "W2_Yanqing_00_Skill02_SummonMinion_Pos_2"
        },
        "value1": "TeamCharacterCount",
        "compareType": ">=",
        "value2": 1
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Add Target by Unique Identifier",
          "identifier": "W2_Yanqing_00_Skill02_SummonMinion_Pos_4"
        },
        "value1": "TeamCharacterCount",
        "compareType": ">=",
        "value2": 1
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Add Target by Unique Identifier",
          "identifier": "W2_Yanqing_00_Skill02_SummonMinion_Pos_5"
        },
        "value1": "TeamCharacterCount",
        "compareType": ">=",
        "value2": 1
      }
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
      }
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
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"153779397\">Enemy_W2_Yanqing_01_StandByEffect</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-770732625\">Enemy_W2_Yanqing_01_SwordPowerUp_StandByEffect</a>"
        }
      ]
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
      }
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1328693800\">Enemy_W2_Yanqing_Ability02_DuringSkill</a>"
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
          "name": "Remove from Team Target Grouping",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "stayInTeam": false
        }
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-63015955\">Enemy_W2_Yanqing_StandBySwordEffect</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "W2_Yanqing_00_Skill07_AllTeamMemberNumber",
        "compareType": ">",
        "value2": 0
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "W2_Yanqing_00_Skill07_AllTeamMemberNumber",
          "value": {
            "operator": "Variables[0] (W2_Yanqing_00_Skill07_AllTeamMemberNumber) || Constants[0] (1) || SUB || RETURN",
            "displayLines": "(W2_Yanqing_00_Skill07_AllTeamMemberNumber - 1)",
            "constants": [
              1
            ],
            "variables": [
              "W2_Yanqing_00_Skill07_AllTeamMemberNumber"
            ]
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Constants[0] (0.4) || Constants[1] (0.15) || Variables[0] (ExtraDamageTimes) || Constants[2] (1) || SUB || MUL || ADD || Variables[1] ({[Skill08[0]]}) || MUL || RETURN",
              "displayLines": "((0.4 + (0.15 * (ExtraDamageTimes - 1))) * {[Skill08[0]]})",
              "constants": [
                0.4,
                0.15,
                1
              ],
              "variables": [
                "ExtraDamageTimes",
                "{[Skill08[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "40%"
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "W2_Yanqing_00_Skill07_AllTeamMemberNumber",
        "compareType": ">",
        "value2": 0
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "W2_Yanqing_00_Skill07_AllTeamMemberNumber",
          "value": {
            "operator": "Variables[0] (W2_Yanqing_00_Skill07_AllTeamMemberNumber) || Constants[0] (1) || SUB || RETURN",
            "displayLines": "(W2_Yanqing_00_Skill07_AllTeamMemberNumber - 1)",
            "constants": [
              1
            ],
            "variables": [
              "W2_Yanqing_00_Skill07_AllTeamMemberNumber"
            ]
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Constants[0] (0.7) || Variables[0] ({[Skill08[0]]}) || MUL || RETURN",
              "displayLines": "(0.7 * {[Skill08[0]]})",
              "constants": [
                0.7
              ],
              "variables": [
                "{[Skill08[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "W2_Yanqing_00_Skill07_AllTeamMemberNumber",
        "compareType": ">",
        "value2": 0
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "W2_Yanqing_00_Skill07_AllTeamMemberNumber",
          "value": {
            "operator": "Variables[0] (W2_Yanqing_00_Skill07_AllTeamMemberNumber) || Constants[0] (1) || SUB || RETURN",
            "displayLines": "(W2_Yanqing_00_Skill07_AllTeamMemberNumber - 1)",
            "constants": [
              1
            ],
            "variables": [
              "W2_Yanqing_00_Skill07_AllTeamMemberNumber"
            ]
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Constants[0] (0.7) || Variables[0] ({[Skill08[0]]}) || MUL || RETURN",
              "displayLines": "(0.7 * {[Skill08[0]]})",
              "constants": [
                0.7
              ],
              "variables": [
                "{[Skill08[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "W2_Yanqing_00_Skill07_AllTeamMemberNumber",
        "compareType": ">",
        "value2": 0
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "W2_Yanqing_00_Skill07_AllTeamMemberNumber",
          "value": {
            "operator": "Variables[0] (W2_Yanqing_00_Skill07_AllTeamMemberNumber) || Constants[0] (1) || SUB || RETURN",
            "displayLines": "(W2_Yanqing_00_Skill07_AllTeamMemberNumber - 1)",
            "constants": [
              1
            ],
            "variables": [
              "W2_Yanqing_00_Skill07_AllTeamMemberNumber"
            ]
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Constants[0] (0.7) || Variables[0] ({[Skill08[0]]}) || MUL || RETURN",
              "displayLines": "(0.7 * {[Skill08[0]]})",
              "constants": [
                0.7
              ],
              "variables": [
                "{[Skill08[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "W2_Yanqing_00_Skill07_AllTeamMemberNumber",
        "compareType": ">",
        "value2": 0
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "W2_Yanqing_00_Skill07_AllTeamMemberNumber",
          "value": {
            "operator": "Variables[0] (W2_Yanqing_00_Skill07_AllTeamMemberNumber) || Constants[0] (1) || SUB || RETURN",
            "displayLines": "(W2_Yanqing_00_Skill07_AllTeamMemberNumber - 1)",
            "constants": [
              1
            ],
            "variables": [
              "W2_Yanqing_00_Skill07_AllTeamMemberNumber"
            ]
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Constants[0] (0.7) || Variables[0] ({[Skill08[0]]}) || MUL || RETURN",
              "displayLines": "(0.7 * {[Skill08[0]]})",
              "constants": [
                0.7
              ],
              "variables": [
                "{[Skill08[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null
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
        "DamageType": "Ice",
        "Damage": {
          "operator": "Constants[0] (0.6) || Constants[1] (0.15) || Variables[0] (ExtraDamageTimes) || Constants[2] (1) || SUB || MUL || ADD || Variables[1] ({[Skill08[0]]}) || MUL || RETURN",
          "displayLines": "((0.6 + (0.15 * (ExtraDamageTimes - 1))) * {[Skill08[0]]})",
          "constants": [
            0.6,
            0.15,
            1
          ],
          "variables": [
            "ExtraDamageTimes",
            "{[Skill08[0]]}"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "60%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1560182165\">Enemy_W2_Yanqing_Ability02_Mark</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1666789092\">Enemy_W2_Yanqing_Ability02_MarkingCountDown_1</a>[<span class=\"descriptionNumberColor\">Ready for Battle</span>]"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-63015955\">Enemy_W2_Yanqing_StandBySwordEffect</a>"
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}