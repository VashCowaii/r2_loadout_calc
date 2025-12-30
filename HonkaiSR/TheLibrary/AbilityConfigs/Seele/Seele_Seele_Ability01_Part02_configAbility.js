const configAbility = {
  "fileName": "Seele_Seele_Ability01_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "ATK Scaling DMG",
      "target": "Single Target (Primary)",
      "AttackScaling": {
        "DamageType": "Quantum",
        "Damage": {
          "operator": "Variables[0] (1) || RETURN",
          "displayLines": "1",
          "constants": [],
          "variables": [
            1
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
        "DamageType": "Quantum",
        "Damage": {
          "operator": "Variables[0] (1) || RETURN",
          "displayLines": "1",
          "constants": [],
          "variables": [
            1
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
    "Trigger: Attack End",
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Rippling Waves"
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Is Extra-Turn"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Current Turn Is",
                "target": "Caster"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "Seele_Trace02_ModifyAction",
                  "valuePerStack": {
                    "MDF_DelayCost": {
                      "operator": "Variables[0] (0.2) || RETURN",
                      "displayLines": "0.2",
                      "constants": [],
                      "variables": [
                        0.2
                      ]
                    }
                  }
                }
              ],
              "failed": [
                {
                  "name": "Action Advance/Delay",
                  "target": "Caster",
                  "advanceType": "Advance",
                  "value": "-0.2"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Assign Advance/Delay to Current Ability Use",
              "adjustmentValue": {
                "operator": "Variables[0] (0.2) || INVERT || RETURN",
                "displayLines": "-0.2",
                "constants": [],
                "variables": [
                  0.2
                ]
              },
              "adjustmentType": "Advance"
            },
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "Ability01PreShowModifier_AppliedRatio",
              "valuePerStack": {
                "MDF_Ability01_Delay": {
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
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Ability01PreShowModifier_AppliedRatio",
      "stackType": "Multiple",
      "execute": [
        {
          "eventTrigger": "Action End [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [
        "MDF_Skill01_Delay"
      ],
      "latentQueue": [],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "target": "Owner of this Modifier",
        "skillType": [
          "Basic ATK"
        ],
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": {
            "operator": "Variables[0] (MDF_Skill01_Delay) || INVERT || RETURN",
            "displayLines": "-MDF_Skill01_Delay",
            "constants": [],
            "variables": [
              "MDF_Skill01_Delay"
            ]
          }
        }
      }
    },
    {
      "name": "Modifier Construction",
      "for": "Seele_Trace02_ModifyAction",
      "stackType": "Multiple",
      "execute": [
        {
          "eventTrigger": "Turn End [Anyone]",
          "execute": [
            {
              "name": "Action Advance/Delay",
              "target": "Owner of this Modifier",
              "advanceType": "Advance",
              "value": "-0.2"
            },
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [
        "MDF_DelayCost"
      ],
      "latentQueue": [],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "target": "Owner of this Modifier",
        "skillType": [
          "Basic ATK"
        ],
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": {
            "operator": "Variables[0] (0.2) || INVERT || RETURN",
            "displayLines": "-0.2",
            "constants": [],
            "variables": [
              0.2
            ]
          }
        }
      }
    }
  ]
}