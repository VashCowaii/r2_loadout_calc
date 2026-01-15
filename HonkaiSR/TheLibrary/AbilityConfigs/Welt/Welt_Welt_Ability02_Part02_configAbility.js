const configAbility = {
  "fileName": "Welt_Welt_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "Welt_Ability02_ListenModifier"
    },
    {
      "name": "ATK Scaling DMG",
      "target": "Single Target (Primary)",
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] (0.72) || RETURN",
          "displayLines": "0.72",
          "constants": [],
          "variables": [
            0.72
          ]
        },
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
        "name": "Has Modifier",
        "target": "Caster",
        "modifier": "Welt_Eidolon1_Enhance[<span class=\"descriptionNumberColor\">Legacy of Honor</span>]"
      },
      "passed": [
        {
          "name": "Define Modifier Variable",
          "target": "Caster",
          "modifierName": "Welt_Eidolon1_Enhance[<span class=\"descriptionNumberColor\">Legacy of Honor</span>]",
          "function": "Add"
        },
        {
          "name": "ATK Scaling DMG",
          "target": "Single Target (Primary)",
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] (0.72) || Variables[1] (0.8) || MUL || RETURN",
              "displayLines": "(0.72 * 0.8)",
              "constants": [],
              "variables": [
                0.72,
                0.8
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Additional DMG"
          }
        }
      ]
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "Bounce_SelectTarget",
      "target": "All Hostile Entities (AOE)",
      "paramSequence": [
        "Select Random Target from List",
        {
          "name": "ATK Scaling DMG",
          "target": "Use Prior Target(s) Defined",
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] (0.72) || RETURN",
              "displayLines": "0.72",
              "constants": [],
              "variables": [
                0.72
              ]
            },
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
        }
      ]
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "Bounce_SelectTarget",
      "target": "All Hostile Entities (AOE)",
      "paramSequence": [
        "Select Random Target from List",
        {
          "name": "ATK Scaling DMG",
          "target": "Use Prior Target(s) Defined",
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] (0.72) || RETURN",
              "displayLines": "0.72",
              "constants": [],
              "variables": [
                0.72
              ]
            },
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
          "name": "Use Custom Character Function",
          "functionName": "Bounce_SelectTarget",
          "target": "All Hostile Entities (AOE)",
          "paramSequence": [
            "Select Random Target from List",
            {
              "name": "ATK Scaling DMG",
              "target": "Use Prior Target(s) Defined",
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Imaginary",
                "Damage": {
                  "operator": "Variables[0] (0.72) || RETURN",
                  "displayLines": "0.72",
                  "constants": [],
                  "variables": [
                    0.72
                  ]
                },
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
            }
          ]
        },
        "Trigger: Attack End"
      ],
      "failed": [
        "Trigger: Attack End"
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": "Caster",
      "modifier": "Welt_Ability02_ListenModifier"
    },
    "Trigger: Ability End"
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Welt_Ability02_ListenModifier",
      "execute": [
        {
          "eventTrigger": "Deal Damage End [Owner]: Hit",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 4
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Target Receiving DMG",
                  "modifier": "Welt_BPAbility_SpeedDown[<span class=\"descriptionNumberColor\">Slow</span>]",
                  "duration": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  },
                  "baseChance": {
                    "operator": "Variables[0] (0.75) || Variables[1] (0.35) || ADD || RETURN",
                    "displayLines": "(0.75 + 0.35)",
                    "constants": [],
                    "variables": [
                      0.75,
                      0.35
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyRatio": {
                      "operator": "Variables[0] (0.1) || RETURN",
                      "displayLines": "0.1",
                      "constants": [],
                      "variables": [
                        0.1
                      ]
                    }
                  }
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Target Receiving DMG",
                  "modifier": "Welt_BPAbility_SpeedDown[<span class=\"descriptionNumberColor\">Slow</span>]",
                  "duration": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  },
                  "baseChance": {
                    "operator": "Variables[0] (0.75) || RETURN",
                    "displayLines": "0.75",
                    "constants": [],
                    "variables": [
                      0.75
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyRatio": {
                      "operator": "Variables[0] (0.1) || RETURN",
                      "displayLines": "0.1",
                      "constants": [],
                      "variables": [
                        0.1
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}