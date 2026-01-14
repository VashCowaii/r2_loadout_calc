const configAbility = {
  "fileName": "Hook_Hook_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "ATK Scaling DMG",
      "target": "Single Target (Primary)",
      "AttackScaling": {
        "DamageType": "Fire",
        "Damage": {
          "operator": "Variables[0] (4) || RETURN",
          "displayLines": "4",
          "constants": [],
          "variables": [
            4
          ]
        },
        "HitSplit": 0.3,
        "Toughness": {
          "operator": "Variables[0] (ST Toughness Value) || RETURN",
          "displayLines": "ST Toughness Value",
          "constants": [],
          "variables": [
            "ST Toughness Value"
          ]
        },
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": "Single Target (Primary)",
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Fire",
        "Damage": {
          "operator": "Variables[0] (4) || RETURN",
          "displayLines": "4",
          "constants": [],
          "variables": [
            4
          ]
        },
        "HitSplit": 0.7,
        "Toughness": {
          "operator": "Variables[0] (ST Toughness Value) || RETURN",
          "displayLines": "ST Toughness Value",
          "constants": [],
          "variables": [
            "ST Toughness Value"
          ]
        },
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Flag",
        "target": "Single Target (Primary)",
        "flagName": "STAT_DOT_Burn"
      },
      "passed": [
        {
          "name": "Trigger Ability",
          "from": "Caster",
          "inherentTarget": "Single Target (Primary)",
          "ability": "Hook_PassiveAbility01_2",
          "isTrigger": true
        }
      ],
      "failed": [
        "Trigger: Attack End"
      ]
    },
    {
      "name": "Update Displayed Energy Bar",
      "assignState": "True",
      "priorState": "Active",
      "bar#": 1,
      "cooldown": 0
    },
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "Hook_BPAbilityAlter_Enable[<span class=\"descriptionNumberColor\">Enhanced Skill</span>]"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 1
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Hook_Eidolon1_AddDamageRatio",
          "valuePerStack": {
            "MDF_AddRatio": {
              "operator": "Variables[0] (0.2) || RETURN",
              "displayLines": "0.2",
              "constants": [],
              "variables": [
                0.2
              ]
            }
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Playing With Fire"
      },
      "passed": [
        {
          "name": "Update Energy",
          "on": "Caster",
          "value": {
            "operator": "Variables[0] (5) || RETURN",
            "displayLines": "5",
            "constants": [],
            "variables": [
              5
            ]
          },
          "isFixed": "* ERR"
        },
        {
          "name": "Action Advance/Delay",
          "target": "Caster",
          "advanceType": "Advance",
          "value": "-0.2"
        }
      ]
    },
    "Trigger: Skip Death Handling",
    "Trigger: Ability End"
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Hook_Eidolon1_AddDamageRatio",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Skill"
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                      "value": "MDF_AddRatio"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_AddRatio"
      ],
      "latentQueue": []
    }
  ]
}