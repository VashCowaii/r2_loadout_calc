const configAbility = {
  "fileName": "LiesDanceontheBreeze_Ability23043",
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
      "modifier": "LC_23043_Main"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "LC_23043_Sub2[<span class=\"descriptionNumberColor\">Theft</span>]",
      "stackType": "Replace",
      "modifierFlags": [
        "STAT_DefenceDown"
      ],
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (0.08) || INVERT || RETURN",
                "displayLines": "-0.08",
                "constants": [],
                "variables": [
                  0.08
                ]
              }
            }
          ]
        }
      ],
      "description": "Decreases DEF by <span class=\"descriptionNumberColor\">#SkillEquip_P6_DefenceDown</span>.",
      "type": "Debuff",
      "effectName": "Theft",
      "statusName": "Theft"
    },
    {
      "name": "Modifier Construction",
      "for": "LC_23043_Sub[<span class=\"descriptionNumberColor\">Bamboozle</span>]",
      "stackType": "Replace",
      "modifierFlags": [
        "STAT_DefenceDown"
      ],
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (0.16) || INVERT || RETURN",
                "displayLines": "-0.16",
                "constants": [],
                "variables": [
                  0.16
                ]
              }
            }
          ]
        }
      ],
      "description": "Decreases DEF by <span class=\"descriptionNumberColor\">#SkillEquip_P3_DefenceDown</span>.",
      "type": "Debuff",
      "effectName": "Bamboozle",
      "statusName": "Bamboozle"
    },
    {
      "name": "Modifier Construction",
      "for": "LC_23043_Main",
      "execute": [
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "modifier": "LC_23043_Sub[<span class=\"descriptionNumberColor\">Bamboozle</span>]",
              "duration": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              },
              "baseChance": {
                "operator": "Variables[0] (1.2) || RETURN",
                "displayLines": "1.2",
                "constants": [],
                "variables": [
                  1.2
                ]
              }
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "_TMP_SPEED",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_TMP_SPEED",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (170) || RETURN",
                  "displayLines": "170",
                  "constants": [],
                  "variables": [
                    170
                  ]
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "modifier": "LC_23043_Sub2[<span class=\"descriptionNumberColor\">Theft</span>]",
                  "duration": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  },
                  "baseChance": {
                    "operator": "Variables[0] (1.2) || RETURN",
                    "displayLines": "1.2",
                    "constants": [],
                    "variables": [
                      1.2
                    ]
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
  "desc": "Increases the wearer's SPD by #1[i]%. After the wearer uses an attack, there is a #2[i]% base chance to inflict the \"Bamboozle\" state on every enemy target. While under the \"Bamboozle\" state, enemy targets have their DEF decreased by #3[i]% for #4[i] turn(s). If the wearer's SPD is higher than or equal to #7[i], there is a #5[i]% base chance to inflict the \"Theft\" state on every enemy target. While under the \"Theft\" state, enemy targets have their DEF decreased by #6[i]% for #4[i] turn(s). When \"Bamboozle\" or \"Theft\" is repeatedly inflicted, only the most recently inflicted instance takes effect.",
  "params": [
    [
      0.18,
      1.2,
      0.16,
      2,
      1.2,
      0.08,
      170
    ],
    [
      0.21,
      1.2,
      0.18,
      2,
      1.2,
      0.09,
      170
    ],
    [
      0.24,
      1.2,
      0.2,
      2,
      1.2,
      0.1,
      170
    ],
    [
      0.27,
      1.2,
      0.22,
      2,
      1.2,
      0.11,
      170
    ],
    [
      0.3,
      1.2,
      0.24,
      2,
      1.2,
      0.12,
      170
    ]
  ]
}