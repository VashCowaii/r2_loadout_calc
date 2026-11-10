const configAbility = {
  "fileName": "DanHengIL_DanHengIL_Ability13_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "Flag_AttackCount"
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
          "displayLines": "(5 * 0.142)"
        },
        "Toughness": {
          "displayLines": "(ST Toughness Value * 0.142)"
        },
        "Tags": null,
        "EnergyGainPercent": "14%"
      }
    },
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "(Flag_AttackCount + 1)"
      },
      "variableName": "Flag_AttackCount"
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
          "displayLines": "(5 * 0.142)"
        },
        "Toughness": {
          "displayLines": "(ST Toughness Value * 0.142)"
        },
        "Tags": null,
        "EnergyGainPercent": "14%"
      }
    },
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "(Flag_AttackCount + 1)"
      },
      "variableName": "Flag_AttackCount"
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
          "displayLines": "(5 * 0.142)"
        },
        "Toughness": {
          "displayLines": "(ST Toughness Value * 0.142)"
        },
        "Tags": null,
        "EnergyGainPercent": "14%"
      }
    },
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "(Flag_AttackCount + 1)"
      },
      "variableName": "Flag_AttackCount"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1955464894\">DanHengIL_Ability02_CriticalDamage</a>[<span class=\"descriptionNumberColor\">Outroar</span>]",
      "duration": {
        "displayLines": "SkillRank_Rank04_LifeTime"
      },
      "immediateEffect": true,
      "stackLimit": {
        "displayLines": "4"
      },
      "valuePerStack": {
        "MDF_AddCriticalDamage": {
          "displayLines": "0.12"
        },
        "MDF_MaxLayer": {
          "displayLines": "4"
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
          "displayLines": "(5 * 0.142)"
        },
        "Toughness": {
          "displayLines": "(ST Toughness Value * 0.142)"
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
          "displayLines": "1.8"
        },
        "HitSplit": 0.25,
        "Toughness": {
          "displayLines": "Blast Toughness Value"
        },
        "Tags": null
      }
    },
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "(Flag_AttackCount + 1)"
      },
      "variableName": "Flag_AttackCount"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1955464894\">DanHengIL_Ability02_CriticalDamage</a>[<span class=\"descriptionNumberColor\">Outroar</span>]",
      "duration": {
        "displayLines": "SkillRank_Rank04_LifeTime"
      },
      "immediateEffect": true,
      "stackLimit": {
        "displayLines": "4"
      },
      "valuePerStack": {
        "MDF_AddCriticalDamage": {
          "displayLines": "0.12"
        },
        "MDF_MaxLayer": {
          "displayLines": "4"
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
          "displayLines": "(5 * 0.142)"
        },
        "Toughness": {
          "displayLines": "(ST Toughness Value * 0.142)"
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
          "displayLines": "1.8"
        },
        "HitSplit": 0.25,
        "Toughness": {
          "displayLines": "Blast Toughness Value"
        },
        "Tags": null
      }
    },
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "(Flag_AttackCount + 1)"
      },
      "variableName": "Flag_AttackCount"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1955464894\">DanHengIL_Ability02_CriticalDamage</a>[<span class=\"descriptionNumberColor\">Outroar</span>]",
      "duration": {
        "displayLines": "SkillRank_Rank04_LifeTime"
      },
      "immediateEffect": true,
      "stackLimit": {
        "displayLines": "4"
      },
      "valuePerStack": {
        "MDF_AddCriticalDamage": {
          "displayLines": "0.12"
        },
        "MDF_MaxLayer": {
          "displayLines": "4"
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
          "displayLines": "(5 * 0.142)"
        },
        "Toughness": {
          "displayLines": "(ST Toughness Value * 0.142)"
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
          "displayLines": "1.8"
        },
        "HitSplit": 0.25,
        "Toughness": {
          "displayLines": "Blast Toughness Value"
        },
        "Tags": null
      }
    },
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "(Flag_AttackCount + 1)"
      },
      "variableName": "Flag_AttackCount"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1955464894\">DanHengIL_Ability02_CriticalDamage</a>[<span class=\"descriptionNumberColor\">Outroar</span>]",
      "duration": {
        "displayLines": "SkillRank_Rank04_LifeTime"
      },
      "immediateEffect": true,
      "stackLimit": {
        "displayLines": "4"
      },
      "valuePerStack": {
        "MDF_AddCriticalDamage": {
          "displayLines": "0.12"
        },
        "MDF_MaxLayer": {
          "displayLines": "4"
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
          "displayLines": "(5 * 0.148)"
        },
        "Toughness": {
          "displayLines": "(ST Toughness Value * 0.148)"
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
          "displayLines": "1.8"
        },
        "HitSplit": 0.25,
        "Toughness": {
          "displayLines": "Blast Toughness Value"
        },
        "Tags": null
      }
    },
    "Trigger: Attack End",
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "(Flag_AttackCount + 1)"
      },
      "variableName": "Flag_AttackCount"
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
      "value": 0,
      "variableName": "EXSkill01"
    },
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}