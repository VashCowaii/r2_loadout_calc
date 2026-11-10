const configAbility = {
  "fileName": "FuXuan_FuXuan_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Dunjia, the Metamystic"
      },
      "passed": [
        {
          "name": "Define Custom Variable with Stat",
          "variableName": "MaxHP",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "((MaxHP * 0.05) + 133)"
          },
          "variableName": "HealHPValue"
        },
        {
          "name": "Heal",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "healFlat": {
            "displayLines": "HealHPValue"
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 6
      },
      "passed": [
        {
          "name": "Define Custom Variable with Stat",
          "variableName": "CasterMaxHP",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "GDF_AllTeamMemberLoseHPValue",
            "compareType": "<=",
            "value2": {
              "displayLines": "(CasterMaxHP * 1.2)"
            }
          },
          "failed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(CasterMaxHP * 1.2)"
              },
              "variableName": "GDF_AllTeamMemberLoseHPValue"
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
            "DamageType": "Quantum",
            "Damage": {
              "displayLines": "1"
            },
            "DamageFlat": {
              "displayLines": "(GDF_AllTeamMemberLoseHPValue * 2)"
            },
            "dmgFormula": "Max HP Scaling",
            "Toughness": {
              "displayLines": "AOE Toughness Value"
            },
            "ToughnessDMGType": {
              "DamageType": "Quantum"
            },
            "Tags": null,
            "attackType": "Ultimate",
            "EnergyGainPercent": "100%"
          }
        }
      ],
      "failed": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "displayLines": "1"
            },
            "dmgFormula": "Max HP Scaling",
            "Toughness": {
              "displayLines": "AOE Toughness Value"
            },
            "ToughnessDMGType": {
              "DamageType": "Quantum"
            },
            "Tags": null,
            "attackType": "Ultimate",
            "EnergyGainPercent": "100%"
          }
        }
      ]
    },
    "Trigger: Attack End",
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "GDF_AllTeamMemberLoseHPValue"
    },
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "(GDF_ExChangeHPCount + 1)"
      },
      "variableName": "GDF_ExChangeHPCount"
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": {
        "displayLines": "GDF_ExChangeHPCount"
      },
      "maximum": 2,
      "assignState": "True",
      "priorState": "Active",
      "bar#": 3,
      "cooldown": 0
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "value1": "CurrentHP",
        "compareType": ">",
        "value2": 0
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "value1": "CurrentHP%",
                "compareType": "<=",
                "value2": {
                  "displayLines": "0.5"
                }
              },
              {
                "name": "Compare: Variable",
                "value1": "GDF_LimboHPChangeFlag",
                "compareType": "=",
                "value2": 0
              },
              {
                "name": "Compare: Variable",
                "value1": "GDF_ExChangeHPCount",
                "compareType": ">",
                "value2": 0
              }
            ]
          },
          "passed": [
            {
              "name": "Inject Ability Use",
              "condition": {
                "name": "Insert Ability Condition",
                "type": "AbilityOwnerInsertUnusedCount",
                "typeValue": 1
              },
              "abilityName": "FuXuan_Passive_Ability",
              "abilitySource": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "abilityTarget": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "priorityTag": "CharacterHealSelf",
              "canHitNonTargets": true,
              "showInActionOrder": true,
              "abortFlags": [
                "STAT_CTRL",
                "DisableAction"
              ],
              "allowAbilityTriggers": false
            }
          ]
        }
      ]
    },
    "Trigger: Skip Death Handling",
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  }
}