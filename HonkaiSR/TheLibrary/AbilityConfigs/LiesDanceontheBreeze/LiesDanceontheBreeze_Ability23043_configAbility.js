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
      "modifier": "<a class=\"gModGreen\" id=\"1095447041\">LC_23043_Main</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__409362716\">LC_23043_Sub2</a>[<span class=\"descriptionNumberColor\">Theft</span>]",
      "stackType": "Replace",
      "modifierFlags": [
        "DEF_DOWN"
      ],
      "description": "Decreases DEF by <span class=\"descriptionNumberColor\">#SkillEquip_P6_DefenceDown</span>.",
      "type": "Debuff",
      "effectName": "Theft",
      "statusName": "Theft",
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
              "statValue": {
                "displayLines": "-0.08"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-254264378\">LC_23043_Sub</a>[<span class=\"descriptionNumberColor\">Bamboozle</span>]",
      "stackType": "Replace",
      "modifierFlags": [
        "DEF_DOWN"
      ],
      "description": "Decreases DEF by <span class=\"descriptionNumberColor\">#SkillEquip_P3_DefenceDown</span>.",
      "type": "Debuff",
      "effectName": "Bamboozle",
      "statusName": "Bamboozle",
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
              "statValue": {
                "displayLines": "-0.16"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1095447041\">LC_23043_Main</a>",
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
              "modifier": "<a class=\"gModGreen\" id=\"-254264378\">LC_23043_Sub</a>[<span class=\"descriptionNumberColor\">Bamboozle</span>]",
              "duration": {
                "displayLines": "2"
              },
              "baseChance": {
                "displayLines": "1.2"
              }
            },
            {
              "name": "Define Custom Variable with Stat",
              "variableName": "_TMP_SPEED",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "value": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_TMP_SPEED",
                "compareType": ">=",
                "value2": {
                  "displayLines": "170"
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"409362716\">LC_23043_Sub2</a>[<span class=\"descriptionNumberColor\">Theft</span>]",
                  "duration": {
                    "displayLines": "2"
                  },
                  "baseChance": {
                    "displayLines": "1.2"
                  }
                }
              ]
            }
          ]
        }
      ]
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