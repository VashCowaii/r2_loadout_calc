const configAbility = {
  "fileName": "ItsShowtime_Ability21041",
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
      "modifier": "LC_21041_Main"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "LC_21041_Sub_Attack[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (0.2) || RETURN",
                "displayLines": "0.2",
                "constants": [],
                "variables": [
                  0.2
                ]
              }
            }
          ]
        }
      ],
      "description": "Increases ATK by <span class=\"descriptionNumberColor\">#SkillEquip_P5_AttackRatio</span>.",
      "type": "Buff",
      "effectName": "ATK Boost",
      "statusName": "ATK Boost"
    },
    {
      "name": "Modifier Construction",
      "for": "LC_21041_Sub[<span class=\"descriptionNumberColor\">Trick</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valueType": "Layer",
              "variableName": "_Layer",
              "multiplier": 1
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (0.06) || Variables[1] (_Layer) || MUL || RETURN",
                "displayLines": "(0.06 * _Layer)",
                "constants": [],
                "variables": [
                  0.06,
                  "_Layer"
                ]
              }
            }
          ]
        }
      ],
      "description": "Each stack increases DMG dealt by <span class=\"descriptionNumberColor\">#SkillEquip_P1_DamageAddedRatio</span>, up to <span class=\"descriptionNumberColor\">#SkillEquip_P2_MaxLayer</span> stack(s).",
      "type": "Buff",
      "effectName": "DMG Boost",
      "statusName": "Trick",
      "stackLimit": 0,
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "LC_21041_Main",
      "execute": [
        {
          "eventTrigger": "Apply Modifier [From Owner] (Success)",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team"
                  },
                  {
                    "name": "Compare: Modifier Status Type",
                    "statusType": "Debuff"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "LC_21041_Sub[<span class=\"descriptionNumberColor\">Trick</span>]",
                  "duration": {
                    "operator": "Variables[0] (1) || RETURN",
                    "displayLines": "1",
                    "constants": [],
                    "variables": [
                      1
                    ]
                  },
                  "stackLimit": {
                    "operator": "Variables[0] (3) || RETURN",
                    "displayLines": "3",
                    "constants": [],
                    "variables": [
                      3
                    ]
                  }
                }
              ]
            }
          ]
        }
      ],
      "abilityValueChange": [
        {
          "name": "Ability Value Changes",
          "variableName": "&nbsp;<span class=\"descriptionNumberColor\">EffectHitRateSUM</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "maxValue": {
                "operator": "Variables[0] (0.8) || RETURN",
                "displayLines": "0.8",
                "constants": [],
                "variables": [
                  0.8
                ]
              },
              "whenEnteringRange": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "LC_21041_Sub_Attack[<span class=\"descriptionNumberColor\">ATK Boost</span>]"
                }
              ]
            },
            {
              "name": "Variable Value Range Conditions",
              "minValue": {
                "operator": "Variables[0] (0.8) || RETURN",
                "displayLines": "0.8",
                "constants": [],
                "variables": [
                  0.8
                ]
              },
              "whenEnteringRange": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "LC_21041_Sub_Attack[<span class=\"descriptionNumberColor\">ATK Boost</span>]"
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
  "desc": "When the wearer inflicts a debuff on an enemy, gains a stack of Trick. Every stack of Trick increases the wearer's DMG dealt by #1[i]%, stacking up to #2[i] time(s). This effect lasts for #3[i] turn(s). When the wearer's Effect Hit Rate is #4[i]% or higher, increases ATK by #5[i]%.",
  "params": [
    [
      0.06,
      3,
      1,
      0.8,
      0.2
    ],
    [
      0.07,
      3,
      1,
      0.8,
      0.24
    ],
    [
      0.08,
      3,
      1,
      0.8,
      0.28
    ],
    [
      0.09,
      3,
      1,
      0.8,
      0.32
    ],
    [
      0.1,
      3,
      1,
      0.8,
      0.36
    ]
  ]
}