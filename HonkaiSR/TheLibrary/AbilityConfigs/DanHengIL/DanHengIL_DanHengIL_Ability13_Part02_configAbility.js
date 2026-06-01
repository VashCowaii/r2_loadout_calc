const configAbility = {
  "fileName": "DanHengIL_DanHengIL_Ability13_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "variableName": "Flag_AttackCount",
      "value": 0
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
          "operator": "Variables[0] (5) || Constants[0] (0.142) || MUL || RETURN",
          "displayLines": "(5 * 0.142)",
          "constants": [
            0.142
          ],
          "variables": [
            5
          ]
        },
        "Toughness": {
          "operator": "Variables[0] (ST Toughness Value) || Constants[0] (0.142) || MUL || RETURN",
          "displayLines": "(ST Toughness Value * 0.142)",
          "constants": [
            0.142
          ],
          "variables": [
            "ST Toughness Value"
          ]
        },
        "Tags": null,
        "EnergyGainPercent": "14%"
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Flag_AttackCount",
      "value": {
        "operator": "Variables[0] (Flag_AttackCount) || Constants[0] (1) || ADD || RETURN",
        "displayLines": "(Flag_AttackCount + 1)",
        "constants": [
          1
        ],
        "variables": [
          "Flag_AttackCount"
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
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] (5) || Constants[0] (0.142) || MUL || RETURN",
          "displayLines": "(5 * 0.142)",
          "constants": [
            0.142
          ],
          "variables": [
            5
          ]
        },
        "Toughness": {
          "operator": "Variables[0] (ST Toughness Value) || Constants[0] (0.142) || MUL || RETURN",
          "displayLines": "(ST Toughness Value * 0.142)",
          "constants": [
            0.142
          ],
          "variables": [
            "ST Toughness Value"
          ]
        },
        "Tags": null,
        "EnergyGainPercent": "14%"
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Flag_AttackCount",
      "value": {
        "operator": "Variables[0] (Flag_AttackCount) || Constants[0] (1) || ADD || RETURN",
        "displayLines": "(Flag_AttackCount + 1)",
        "constants": [
          1
        ],
        "variables": [
          "Flag_AttackCount"
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
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] (5) || Constants[0] (0.142) || MUL || RETURN",
          "displayLines": "(5 * 0.142)",
          "constants": [
            0.142
          ],
          "variables": [
            5
          ]
        },
        "Toughness": {
          "operator": "Variables[0] (ST Toughness Value) || Constants[0] (0.142) || MUL || RETURN",
          "displayLines": "(ST Toughness Value * 0.142)",
          "constants": [
            0.142
          ],
          "variables": [
            "ST Toughness Value"
          ]
        },
        "Tags": null,
        "EnergyGainPercent": "14%"
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Flag_AttackCount",
      "value": {
        "operator": "Variables[0] (Flag_AttackCount) || Constants[0] (1) || ADD || RETURN",
        "displayLines": "(Flag_AttackCount + 1)",
        "constants": [
          1
        ],
        "variables": [
          "Flag_AttackCount"
        ]
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1955464894\">DanHengIL_Ability02_CriticalDamage</a>[<span class=\"descriptionNumberColor\">Outroar</span>]",
      "duration": {
        "operator": "Variables[0] (SkillRank_Rank04_LifeTime) || RETURN",
        "displayLines": "SkillRank_Rank04_LifeTime",
        "constants": [],
        "variables": [
          "SkillRank_Rank04_LifeTime"
        ]
      },
      "immediateEffect": true,
      "stackLimit": {
        "operator": "Variables[0] (4) || RETURN",
        "displayLines": "4",
        "constants": [],
        "variables": [
          4
        ]
      },
      "valuePerStack": {
        "MDF_AddCriticalDamage": {
          "operator": "Variables[0] (0.12) || RETURN",
          "displayLines": "0.12",
          "constants": [],
          "variables": [
            0.12
          ]
        },
        "MDF_MaxLayer": {
          "operator": "Variables[0] (4) || RETURN",
          "displayLines": "4",
          "constants": [],
          "variables": [
            4
          ]
        }
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
          "operator": "Variables[0] (5) || Constants[0] (0.142) || MUL || RETURN",
          "displayLines": "(5 * 0.142)",
          "constants": [
            0.142
          ],
          "variables": [
            5
          ]
        },
        "Toughness": {
          "operator": "Variables[0] (ST Toughness Value) || Constants[0] (0.142) || MUL || RETURN",
          "displayLines": "(ST Toughness Value * 0.142)",
          "constants": [
            0.142
          ],
          "variables": [
            "ST Toughness Value"
          ]
        },
        "Tags": null,
        "EnergyGainPercent": "14%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Targets Adjacent(Blast)}}"
      },
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] (1.8) || RETURN",
          "displayLines": "1.8",
          "constants": [],
          "variables": [
            1.8
          ]
        },
        "HitSplit": 0.25,
        "Toughness": {
          "operator": "Variables[0] (Blast Toughness Value) || RETURN",
          "displayLines": "Blast Toughness Value",
          "constants": [],
          "variables": [
            "Blast Toughness Value"
          ]
        },
        "Tags": null
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Flag_AttackCount",
      "value": {
        "operator": "Variables[0] (Flag_AttackCount) || Constants[0] (1) || ADD || RETURN",
        "displayLines": "(Flag_AttackCount + 1)",
        "constants": [
          1
        ],
        "variables": [
          "Flag_AttackCount"
        ]
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1955464894\">DanHengIL_Ability02_CriticalDamage</a>[<span class=\"descriptionNumberColor\">Outroar</span>]",
      "duration": {
        "operator": "Variables[0] (SkillRank_Rank04_LifeTime) || RETURN",
        "displayLines": "SkillRank_Rank04_LifeTime",
        "constants": [],
        "variables": [
          "SkillRank_Rank04_LifeTime"
        ]
      },
      "immediateEffect": true,
      "stackLimit": {
        "operator": "Variables[0] (4) || RETURN",
        "displayLines": "4",
        "constants": [],
        "variables": [
          4
        ]
      },
      "valuePerStack": {
        "MDF_AddCriticalDamage": {
          "operator": "Variables[0] (0.12) || RETURN",
          "displayLines": "0.12",
          "constants": [],
          "variables": [
            0.12
          ]
        },
        "MDF_MaxLayer": {
          "operator": "Variables[0] (4) || RETURN",
          "displayLines": "4",
          "constants": [],
          "variables": [
            4
          ]
        }
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
          "operator": "Variables[0] (5) || Constants[0] (0.142) || MUL || RETURN",
          "displayLines": "(5 * 0.142)",
          "constants": [
            0.142
          ],
          "variables": [
            5
          ]
        },
        "Toughness": {
          "operator": "Variables[0] (ST Toughness Value) || Constants[0] (0.142) || MUL || RETURN",
          "displayLines": "(ST Toughness Value * 0.142)",
          "constants": [
            0.142
          ],
          "variables": [
            "ST Toughness Value"
          ]
        },
        "Tags": null,
        "EnergyGainPercent": "15%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Targets Adjacent(Blast)}}"
      },
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] (1.8) || RETURN",
          "displayLines": "1.8",
          "constants": [],
          "variables": [
            1.8
          ]
        },
        "HitSplit": 0.25,
        "Toughness": {
          "operator": "Variables[0] (Blast Toughness Value) || RETURN",
          "displayLines": "Blast Toughness Value",
          "constants": [],
          "variables": [
            "Blast Toughness Value"
          ]
        },
        "Tags": null
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Flag_AttackCount",
      "value": {
        "operator": "Variables[0] (Flag_AttackCount) || Constants[0] (1) || ADD || RETURN",
        "displayLines": "(Flag_AttackCount + 1)",
        "constants": [
          1
        ],
        "variables": [
          "Flag_AttackCount"
        ]
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1955464894\">DanHengIL_Ability02_CriticalDamage</a>[<span class=\"descriptionNumberColor\">Outroar</span>]",
      "duration": {
        "operator": "Variables[0] (SkillRank_Rank04_LifeTime) || RETURN",
        "displayLines": "SkillRank_Rank04_LifeTime",
        "constants": [],
        "variables": [
          "SkillRank_Rank04_LifeTime"
        ]
      },
      "immediateEffect": true,
      "stackLimit": {
        "operator": "Variables[0] (4) || RETURN",
        "displayLines": "4",
        "constants": [],
        "variables": [
          4
        ]
      },
      "valuePerStack": {
        "MDF_AddCriticalDamage": {
          "operator": "Variables[0] (0.12) || RETURN",
          "displayLines": "0.12",
          "constants": [],
          "variables": [
            0.12
          ]
        },
        "MDF_MaxLayer": {
          "operator": "Variables[0] (4) || RETURN",
          "displayLines": "4",
          "constants": [],
          "variables": [
            4
          ]
        }
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
          "operator": "Variables[0] (5) || Constants[0] (0.142) || MUL || RETURN",
          "displayLines": "(5 * 0.142)",
          "constants": [
            0.142
          ],
          "variables": [
            5
          ]
        },
        "Toughness": {
          "operator": "Variables[0] (ST Toughness Value) || Constants[0] (0.142) || MUL || RETURN",
          "displayLines": "(ST Toughness Value * 0.142)",
          "constants": [
            0.142
          ],
          "variables": [
            "ST Toughness Value"
          ]
        },
        "Tags": null,
        "EnergyGainPercent": "14%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Targets Adjacent(Blast)}}"
      },
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] (1.8) || RETURN",
          "displayLines": "1.8",
          "constants": [],
          "variables": [
            1.8
          ]
        },
        "HitSplit": 0.25,
        "Toughness": {
          "operator": "Variables[0] (Blast Toughness Value) || RETURN",
          "displayLines": "Blast Toughness Value",
          "constants": [],
          "variables": [
            "Blast Toughness Value"
          ]
        },
        "Tags": null
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Flag_AttackCount",
      "value": {
        "operator": "Variables[0] (Flag_AttackCount) || Constants[0] (1) || ADD || RETURN",
        "displayLines": "(Flag_AttackCount + 1)",
        "constants": [
          1
        ],
        "variables": [
          "Flag_AttackCount"
        ]
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1955464894\">DanHengIL_Ability02_CriticalDamage</a>[<span class=\"descriptionNumberColor\">Outroar</span>]",
      "duration": {
        "operator": "Variables[0] (SkillRank_Rank04_LifeTime) || RETURN",
        "displayLines": "SkillRank_Rank04_LifeTime",
        "constants": [],
        "variables": [
          "SkillRank_Rank04_LifeTime"
        ]
      },
      "immediateEffect": true,
      "stackLimit": {
        "operator": "Variables[0] (4) || RETURN",
        "displayLines": "4",
        "constants": [],
        "variables": [
          4
        ]
      },
      "valuePerStack": {
        "MDF_AddCriticalDamage": {
          "operator": "Variables[0] (0.12) || RETURN",
          "displayLines": "0.12",
          "constants": [],
          "variables": [
            0.12
          ]
        },
        "MDF_MaxLayer": {
          "operator": "Variables[0] (4) || RETURN",
          "displayLines": "4",
          "constants": [],
          "variables": [
            4
          ]
        }
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] (5) || Constants[0] (0.148) || MUL || RETURN",
          "displayLines": "(5 * 0.148)",
          "constants": [
            0.148
          ],
          "variables": [
            5
          ]
        },
        "Toughness": {
          "operator": "Variables[0] (ST Toughness Value) || Constants[0] (0.148) || MUL || RETURN",
          "displayLines": "(ST Toughness Value * 0.148)",
          "constants": [
            0.148
          ],
          "variables": [
            "ST Toughness Value"
          ]
        },
        "Tags": null,
        "EnergyGainPercent": "15%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Targets Adjacent(Blast)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] (1.8) || RETURN",
          "displayLines": "1.8",
          "constants": [],
          "variables": [
            1.8
          ]
        },
        "HitSplit": 0.25,
        "Toughness": {
          "operator": "Variables[0] (Blast Toughness Value) || RETURN",
          "displayLines": "Blast Toughness Value",
          "constants": [],
          "variables": [
            "Blast Toughness Value"
          ]
        },
        "Tags": null
      }
    },
    "Trigger: Attack End",
    {
      "name": "Define Custom Variable",
      "variableName": "Flag_AttackCount",
      "value": {
        "operator": "Variables[0] (Flag_AttackCount) || Constants[0] (1) || ADD || RETURN",
        "displayLines": "(Flag_AttackCount + 1)",
        "constants": [
          1
        ],
        "variables": [
          "Flag_AttackCount"
        ]
      }
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1633577543\">DanHengIL_BPCost_1</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1683910400\">DanHengIL_BPCost_2</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1667132781\">DanHengIL_BPCost_3</a>"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "EXSkill01",
      "value": 0
    },
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}