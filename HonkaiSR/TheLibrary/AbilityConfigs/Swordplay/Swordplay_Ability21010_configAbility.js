const configAbility = {
  "fileName": "Swordplay_Ability21010",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "LC_21010_Main"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "LC_21010_DamageAddedRatio[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": "Owner of this Modifier",
              "valueType": "Layer",
              "variableName": "_Layer",
              "multiplier": 1
            },
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValue) || Variables[1] (_Layer) || MUL || RETURN",
                "displayLines": "(MDF_PropertyValue * _Layer)",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue",
                  "_Layer"
                ]
              }
            }
          ]
        }
      ],
      "description": "Each stack increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>, up to <span class=\"descriptionNumberColor\">#SkillEquip_P2_MaxLayer</span> stack(s).",
      "type": "Buff",
      "statusName": "DMG Boost",
      "stackLimit": 10,
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "LC_21010_Target",
      "stackType": "ReplaceByCaster"
    },
    {
      "name": "Modifier Construction",
      "for": "LC_21010_Main",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Hit",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": "Target Receiving DMG",
                "modifier": "LC_21010_Target",
                "casterFilter": "Caster"
              },
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": "Caster",
                    "modifier": "LC_21010_DamageAddedRatio[<span class=\"descriptionNumberColor\">DMG Boost</span>]"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "target": "Owner of this Modifier",
                      "valueType": "Layer",
                      "variableName": "MDF_Layer",
                      "modifierName": "LC_21010_DamageAddedRatio[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                      "multiplier": 1
                    },
                    {
                      "name": "Adjust Target Stats",
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (0.08) || INVERT || Variables[1] (MDF_Layer) || MUL || RETURN",
                        "displayLines": "(-0.08 * MDF_Layer)",
                        "constants": [],
                        "variables": [
                          0.08,
                          "MDF_Layer"
                        ]
                      }
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Caster",
                      "modifier": "LC_21010_DamageAddedRatio[<span class=\"descriptionNumberColor\">DMG Boost</span>]"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "All Hostile Entities (AOE)",
                      "modifier": "LC_21010_Target",
                      "onlyRemoveOwnersInstance": true
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Target Receiving DMG",
                      "modifier": "LC_21010_Target"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "All Hostile Entities (AOE)",
                      "modifier": "LC_21010_Target",
                      "onlyRemoveOwnersInstance": true
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Target Receiving DMG",
                      "modifier": "LC_21010_Target"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Deal Damage End [Owner]: Hit",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": "Caster",
                "modifier": "LC_21010_DamageAddedRatio[<span class=\"descriptionNumberColor\">DMG Boost</span>]"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "LC_21010_DamageAddedRatio[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                    "compareType": "<",
                    "value2": {
                      "operator": "Variables[0] (5) || RETURN",
                      "displayLines": "5",
                      "constants": [],
                      "variables": [
                        5
                      ]
                    },
                    "valueType": "Layer"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Caster",
                      "modifier": "LC_21010_DamageAddedRatio[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (5) || RETURN",
                        "displayLines": "5",
                        "constants": [],
                        "variables": [
                          5
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.08) || RETURN",
                          "displayLines": "0.08",
                          "constants": [],
                          "variables": [
                            0.08
                          ]
                        }
                      }
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "LC_21010_DamageAddedRatio[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (5) || RETURN",
                    "displayLines": "5",
                    "constants": [],
                    "variables": [
                      5
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (0.08) || RETURN",
                      "displayLines": "0.08",
                      "constants": [],
                      "variables": [
                        0.08
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
  ],
  "isLightcone": true,
  "desc": "For each time the wearer hits the same target, DMG dealt increases by #1[i]%, stacking up to #2[i] time(s). This effect will be dispelled when the wearer changes targets.",
  "params": [
    [
      0.08,
      5
    ],
    [
      0.1,
      5
    ],
    [
      0.12,
      5
    ],
    [
      0.14,
      5
    ],
    [
      0.16,
      5
    ]
  ]
}