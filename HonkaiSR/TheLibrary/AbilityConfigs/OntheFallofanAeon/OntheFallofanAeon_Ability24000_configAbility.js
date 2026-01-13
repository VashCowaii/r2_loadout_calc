const configAbility = {
  "fileName": "OntheFallofanAeon_Ability24000",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "LC_24000_Main"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "LC_24000_DamageAddedRatio[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (0.12) || RETURN",
                "displayLines": "0.12",
                "constants": [],
                "variables": [
                  0.12
                ]
              }
            }
          ]
        }
      ],
      "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">#SkillEquip_P3_DamageAddedRatio</span>.",
      "type": "Buff",
      "effectName": "DMG Boost",
      "statusName": "DMG Boost"
    },
    {
      "name": "Modifier Construction",
      "for": "LC_24000_AttackAddedRatio[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (0.08) || Variables[1] (_Layer) || MUL || RETURN",
                "displayLines": "(0.08 * _Layer)",
                "constants": [],
                "variables": [
                  0.08,
                  "_Layer"
                ]
              }
            }
          ]
        }
      ],
      "description": "Each stack increases ATK by <span class=\"descriptionNumberColor\">#SkillEquip_P1_AttackAddedRatio</span>, up to <span class=\"descriptionNumberColor\">#SkillEquip_P2_MaxLayer</span> stack(s).",
      "type": "Buff",
      "effectName": "ATK Boost",
      "statusName": "ATK Boost",
      "stackLimit": 5,
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "LC_24000_Main",
      "execute": [
        {
          "eventTrigger": "Attack Start [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": "Owner of this Modifier",
                "modifier": "LC_24000_AttackAddedRatio[<span class=\"descriptionNumberColor\">ATK Boost</span>]"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": "Owner of this Modifier",
                    "value1": "LC_24000_AttackAddedRatio[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
                    "compareType": "<",
                    "value2": {
                      "operator": "Variables[0] (4) || RETURN",
                      "displayLines": "4",
                      "constants": [],
                      "variables": [
                        4
                      ]
                    },
                    "valueType": "Layer"
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (0.08) || RETURN",
                        "displayLines": "0.08",
                        "constants": [],
                        "variables": [
                          0.08
                        ]
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "LC_24000_AttackAddedRatio[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (4) || RETURN",
                        "displayLines": "4",
                        "constants": [],
                        "variables": [
                          4
                        ]
                      }
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Adjust Target Stats",
                  "on": "Attacker",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (0.08) || RETURN",
                    "displayLines": "0.08",
                    "constants": [],
                    "variables": [
                      0.08
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "LC_24000_AttackAddedRatio[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (4) || RETURN",
                    "displayLines": "4",
                    "constants": [],
                    "variables": [
                      4
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Caused Weakness Break [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": "Owner of this Modifier",
              "modifier": "LC_24000_DamageAddedRatio[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
              "duration": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ],
  "isLightcone": true,
  "desc": "When the wearer attacks, increases their ATK by #1[i]% in this battle. This effect can stack up to #2[i] time(s). After the wearer breaks an enemy's Weakness, increases DMG dealt by #3[i]%, lasting for #4[i] turn(s).",
  "params": [
    [
      0.08,
      4,
      0.12,
      2
    ],
    [
      0.1,
      4,
      0.15,
      2
    ],
    [
      0.12,
      4,
      0.18,
      2
    ],
    [
      0.14,
      4,
      0.21,
      2
    ],
    [
      0.16,
      4,
      0.24,
      2
    ]
  ]
}