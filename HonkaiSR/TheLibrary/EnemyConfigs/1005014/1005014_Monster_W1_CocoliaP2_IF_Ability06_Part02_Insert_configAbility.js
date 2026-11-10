const configAbility = {
  "fileName": "1005014_Monster_W1_CocoliaP2_IF_Ability06_Part02_Insert",
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
      "modifier": "<a class=\"gModGreen\" id=\"1052811320\">Enemy_W1_CocoliaP2_Ability10_Aiming</a>"
    },
    {
      "name": "Shot Fired",
      "execute": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "displayLines": "({[Skill06[0]]} * 0.25)"
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "25%"
          }
        }
      ]
    },
    {
      "name": "Shot Fired",
      "execute": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "displayLines": "({[Skill06[0]]} * 0.25)"
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "25%"
          }
        }
      ]
    },
    {
      "name": "Shot Fired",
      "execute": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "displayLines": "({[Skill06[0]]} * 0.25)"
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "25%"
          }
        }
      ]
    },
    {
      "name": "Shot Fired",
      "execute": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "displayLines": "({[Skill06[0]]} * 0.25)"
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "25%"
          }
        }
      ]
    },
    {
      "name": "Define Custom Variable with Team Count",
      "variableName": "_NotBreakCount",
      "readTarget": {
        "name": "Target Name",
        "target": "{{All Team Members(Exclude Self)}}"
      },
      "conditions": {
        "name": "Has Flag",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "flagName": "Break",
        "invertCondition": true
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"2120593927\">Enemy_W2_Cocolia_IF_MoreTarget</a>"
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_NotBreakCount",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-298752594\">Standard_CTRL_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]",
              "duration": {
                "displayLines": "{[SkillP02[2]]}"
              },
              "baseChance": {
                "displayLines": "{[SkillEX03[0]]}"
              },
              "valuePerStack": {
                "Modifier_Frozen_DamagePercentage": {
                  "displayLines": "{[SkillP02[1]]}"
                }
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_NotBreakCount",
            "compareType": "=",
            "value2": 2
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-298752594\">Standard_CTRL_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]",
              "duration": {
                "displayLines": "{[SkillP02[2]]}"
              },
              "baseChance": {
                "displayLines": "{[SkillEX03[1]]}"
              },
              "valuePerStack": {
                "Modifier_Frozen_DamagePercentage": {
                  "displayLines": "{[SkillP02[1]]}"
                }
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_NotBreakCount",
            "compareType": "=",
            "value2": 3
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-298752594\">Standard_CTRL_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]",
              "duration": {
                "displayLines": "{[SkillP02[2]]}"
              },
              "baseChance": {
                "displayLines": "{[SkillEX03[2]]}"
              },
              "valuePerStack": {
                "Modifier_Frozen_DamagePercentage": {
                  "displayLines": "{[SkillP02[1]]}"
                }
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_NotBreakCount",
            "compareType": "=",
            "value2": 4
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-298752594\">Standard_CTRL_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]",
              "duration": {
                "displayLines": "{[SkillP02[2]]}"
              },
              "baseChance": {
                "displayLines": "{[SkillEX03[3]]}"
              },
              "valuePerStack": {
                "Modifier_Frozen_DamagePercentage": {
                  "displayLines": "{[SkillP02[1]]}"
                }
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1281838321\">Enemy_W1_CocoliaP2_Ability10_TargetLock</a>[<span class=\"descriptionNumberColor\">Harbinger of Annihilation</span>]"
    },
    {
      "name": "Change Entity Turn-State",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "phase": "PhaseNormal"
    },
    "Trigger: Attack End"
  ],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  },
  "references": []
}