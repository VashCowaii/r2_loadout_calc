const configAbility = {
  "fileName": "ThoughWorldsApart_Ability23051",
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
      "modifier": "<a class=\"gModGreen\" id=\"-2127237332\">LC_23051_Main</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-194150391\">LC_23051_Sub</a>[<span class=\"descriptionNumberColor\">Redoubt</span>]",
      "stackType": "ReplaceByCaster",
      "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "Redoubt",
      "statusName": "Redoubt",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}.[[getMemoAndSummon]]"
                },
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(MDF_23051_DamageRatio01 + MDF_23051_DamageRatio02)"
                  },
                  "variableName": "MDF_PropertyValue"
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "MDF_23051_DamageRatio01"
                  },
                  "variableName": "MDF_PropertyValue"
                }
              ]
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
                "displayLines": "MDF_PropertyValue"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2127237332\">LC_23051_Main</a>",
      "execute": [
        {
          "eventTrigger": "Ability Use [Owner]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Ultimate"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-194150391\">LC_23051_Sub</a>[<span class=\"descriptionNumberColor\">Redoubt</span>]",
                  "duration": {
                    "displayLines": "3"
                  },
                  "valuePerStack": {
                    "MDF_23051_DamageRatio01": {
                      "displayLines": "0.24"
                    },
                    "MDF_23051_DamageRatio02": {
                      "displayLines": "0.12"
                    }
                  }
                },
                {
                  "name": "Heal",
                  "target": {
                    "name": "Target Name",
                    "target": "{{All Team Members}}"
                  },
                  "healPercent": {
                    "displayLines": "0.1"
                  }
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{All Team Members}}.[[sortByHPCurrent]]"
                  },
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "Heal",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "healPercent": {
                        "displayLines": "0.1"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "isLightcone": true,
  "desc": "Increases the wearer's ATK by #1[i]%. When the wearer uses Ultimate, restores HP equal to #5[i]% of the wearer's ATK for all allies, and additionally restores HP equal to #6[i]% of the wearer's ATK for the character with the lowest current HP, and grants \"Redoubt\" to all allies for #4[i] turn(s). Targets with \"Redoubt\" deal #2[i]% increased DMG, which further increases by #3[i]% if the targets have summons.",
  "params": [
    [
      0.64,
      0.24,
      0.12,
      3,
      0.1,
      0.1
    ],
    [
      0.8,
      0.3,
      0.15,
      3,
      0.125,
      0.125
    ],
    [
      0.96,
      0.36,
      0.18,
      3,
      0.15,
      0.15
    ],
    [
      1.12,
      0.42,
      0.21,
      3,
      0.175,
      0.175
    ],
    [
      1.28,
      0.48,
      0.24,
      3,
      0.2,
      0.2
    ]
  ]
}