const configAbility = {
  "fileName": "Evey_Servant_EvernightServant_Ability01_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1807727255\">Evernight_UltraMode_Effect_Normal</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster's Summoner}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-889130257\">Evernight_UltraMode</a>[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster's Summoner}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-889130257\">Evernight_UltraMode</a>[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]"
      }
    },
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "_Partner_Count_Show"
      },
      "variableName": "S01_T_PTN"
    },
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "S01_HitCount"
    },
    {
      "name": "Looped Event",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "S01_T_PTN",
        "compareType": ">=",
        "value2": {
          "displayLines": "_Partner_CountThresHold"
        }
      },
      "execute": [
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(S01_T_PTN - _Partner_CountThresHold)"
          },
          "variableName": "S01_T_PTN"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(S01_HitCount + 1)"
          },
          "variableName": "S01_HitCount"
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
        "modifier": "<a class=\"gModGreen\" id=\"-889130257\">Evernight_UltraMode</a>[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]"
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
          "displayLines": "(0.5 + (S01_HitCount * 0.1))"
        },
        "dmgFormula": "Max HP Scaling",
        "HitSplit": 0.1,
        "Toughness": {
          "displayLines": "ST Toughness Value"
        },
        "ToughnessDMGType": {
          "DamageType": "Ice"
        },
        "Tags": null,
        "attackType": "Memosprite",
        "EnergyGainPercent": "100%"
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
          "displayLines": "(0.5 + (S01_HitCount * 0.1))"
        },
        "dmgFormula": "Max HP Scaling",
        "HitSplit": 0.1,
        "Toughness": {
          "displayLines": "ST Toughness Value"
        },
        "ToughnessDMGType": {
          "DamageType": "Ice"
        },
        "Tags": null,
        "attackType": "Memosprite",
        "EnergyGainPercent": "100%"
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
          "displayLines": "(0.5 + (S01_HitCount * 0.1))"
        },
        "dmgFormula": "Max HP Scaling",
        "HitSplit": 0.1,
        "Toughness": {
          "displayLines": "ST Toughness Value"
        },
        "ToughnessDMGType": {
          "DamageType": "Ice"
        },
        "Tags": null,
        "attackType": "Memosprite",
        "EnergyGainPercent": "100%"
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
          "displayLines": "(0.5 + (S01_HitCount * 0.1))"
        },
        "dmgFormula": "Max HP Scaling",
        "HitSplit": 0.1,
        "Toughness": {
          "displayLines": "ST Toughness Value"
        },
        "ToughnessDMGType": {
          "DamageType": "Ice"
        },
        "Tags": null,
        "attackType": "Memosprite",
        "EnergyGainPercent": "100%"
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
          "displayLines": "(0.5 + (S01_HitCount * 0.1))"
        },
        "dmgFormula": "Max HP Scaling",
        "HitSplit": 0.1,
        "Toughness": {
          "displayLines": "ST Toughness Value"
        },
        "ToughnessDMGType": {
          "DamageType": "Ice"
        },
        "Tags": null,
        "attackType": "Memosprite",
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster's Summoner}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-889130257\">Evernight_UltraMode</a>[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]"
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
          "displayLines": "(0.5 + (S01_HitCount * 0.1))"
        },
        "dmgFormula": "Max HP Scaling",
        "HitSplit": 0.5,
        "Toughness": {
          "displayLines": "ST Toughness Value"
        },
        "ToughnessDMGType": {
          "DamageType": "Ice"
        },
        "Tags": null,
        "attackType": "Memosprite",
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "((_Partner_Count_Show + 1) + _Evernight_00_Extra_Energy)"
      },
      "variableName": "_Partner_Count"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Death Animation Completed",
        "team": "Enemy Team",
        "entityType": "Team Characters",
        "invertCondition": true
      },
      "passed": [
        {
          "name": "WAIT FOR",
          "conditions": {
            "name": "Death Animation Completed",
            "team": "Enemy Team",
            "entityType": "Team Characters"
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
          "target": "{{Caster's Summoner}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-889130257\">Evernight_UltraMode</a>[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1807727255\">Evernight_UltraMode_Effect_Normal</a>"
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}