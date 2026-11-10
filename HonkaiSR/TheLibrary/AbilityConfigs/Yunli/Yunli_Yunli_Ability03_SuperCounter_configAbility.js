const configAbility = {
  "fileName": "Yunli_Yunli_Ability03_SuperCounter",
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
      "modifier": "<a class=\"gModGreen\" id=\"1386061477\">Yunli_SuperCounter_Achevement</a>"
    },
    {
      "name": "Change Entity Turn-State",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "phase": "Phase2"
    },
    {
      "name": "Looped Event",
      "maxLoops": 7,
      "execute": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "displayLines": "2.2"
            },
            "HitSplit": 0.12,
            "Toughness": {
              "displayLines": "ST Toughness Value"
            },
            "ToughnessDMGType": {
              "DamageType": "Physical"
            },
            "instanceTag": "Yunli_Migiri_Damage",
            "Tags": [
              "Counter"
            ],
            "attackType": "Follow-up",
            "EnergyGainPercent": "100%"
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
            "DamageType": "Physical",
            "Damage": {
              "displayLines": "1.1"
            },
            "HitSplit": 0.12,
            "Toughness": {
              "displayLines": "Blast Toughness Value"
            },
            "ToughnessDMGType": {
              "DamageType": "Physical"
            },
            "instanceTag": "Yunli_Migiri_Damage",
            "Tags": [
              "Counter"
            ],
            "attackType": "Follow-up"
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
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Physical",
        "Damage": {
          "displayLines": "2.2"
        },
        "HitSplit": 0.16,
        "Toughness": {
          "displayLines": "ST Toughness Value"
        },
        "ToughnessDMGType": {
          "DamageType": "Physical"
        },
        "instanceTag": "Yunli_Migiri_Damage",
        "Tags": [
          "Counter"
        ],
        "attackType": "Follow-up",
        "EnergyGainPercent": "100%"
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
        "DamageType": "Physical",
        "Damage": {
          "displayLines": "1.1"
        },
        "HitSplit": 0.16,
        "Toughness": {
          "displayLines": "Blast Toughness Value"
        },
        "ToughnessDMGType": {
          "DamageType": "Physical"
        },
        "instanceTag": "Yunli_Migiri_Damage",
        "Tags": [
          "Counter"
        ],
        "attackType": "Follow-up"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 1
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(6 + 3)"
          },
          "variableName": "MDF_LoopCount"
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "6"
          },
          "variableName": "MDF_LoopCount"
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "0.72"
      },
      "variableName": "MDF_LoopDamage"
    },
    {
      "name": "Looped Event",
      "maxLoops": {
        "displayLines": "MDF_LoopCount"
      },
      "execute": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "searchRandom": true,
          "includeDyingTargets": true,
          "maxTargets": 1,
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Enemies Still Alive",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "includeUnselectable": true,
                "invertCondition": true
              },
              {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "CurrentHP",
                "compareType": ">",
                "value2": 0
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "displayLines": "MDF_LoopDamage"
                },
                "Toughness": {
                  "displayLines": "(ST Toughness Value * 0.25)"
                },
                "ToughnessDMGType": {
                  "DamageType": "Physical"
                },
                "instanceTag": "Yunli_Migiri_Damage",
                "Tags": [
                  "Counter"
                ],
                "attackType": "Follow-up"
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
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1898161246\">Yunli_AddRegardAsAttackType</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1896809372\">Yunli_Blocking_CritDamage</a>[<span class=\"descriptionNumberColor\">Earthbind, Etherbreak</span>]"
    },
    "Trigger: Attack End",
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"275203206\">Yunli_Eidolon1</a>"
    },
    {
      "name": "Define Custom Variable",
      "value": 1,
      "variableName": "OnInsertAbort_Flg"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1386061477\">Yunli_SuperCounter_Achevement</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"1705533057\">Yunli_Blocking_BeingAttackMark</a>"
      },
      "passed": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1705533057\">Yunli_Blocking_BeingAttackMark</a>"
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(MDF_Energy_Count - 1)"
          },
          "variableName": "MDF_Energy_Count"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Fiery Wheel"
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "MDF_Energy_Count",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Update Displayed Energy Bar",
              "assignState": "True",
              "priorState": "Active",
              "bar#": 1,
              "cooldown": 0
            }
          ],
          "failed": [
            {
              "name": "Update Displayed Energy Bar",
              "assignState": "True",
              "priorState": "Normal",
              "bar#": 1,
              "cooldown": 0
            }
          ]
        }
      ]
    },
    "Trigger: Skip Death Handling",
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 4
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"359091301\">Yunli_Eidolon4</a>[<span class=\"descriptionNumberColor\">Artisan's Ironsong</span>]",
          "duration": {
            "displayLines": "1"
          },
          "valuePerStack": {
            "MDF_ProbabilityValue": {
              "displayLines": "0.5"
            }
          }
        }
      ]
    }
  ],
  "onAbort": [],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  }
}