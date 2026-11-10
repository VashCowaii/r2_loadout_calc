const configAbility = {
  "fileName": "Yunli_Yunli_Ability03_NormalCounter",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "(MDF_Energy_Count + 1)"
      },
      "variableName": "MDF_Energy_Count"
    },
    "Deleted bullshit",
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1705533057\">Yunli_Blocking_BeingAttackMark</a>"
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
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "0.72"
      },
      "variableName": "MDF_LoopDamage"
    },
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
    },
    {
      "name": "Define Custom Variable",
      "value": 1,
      "variableName": "OnInsertAbort_Flg"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Fiery Wheel"
      },
      "passed": [
        {
          "name": "Update Displayed Energy Bar",
          "assignState": "True",
          "priorState": "Active",
          "bar#": 1,
          "cooldown": 0
        }
      ]
    },
    "Trigger: Skip Death Handling",
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"275203206\">Yunli_Eidolon1</a>"
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  }
}