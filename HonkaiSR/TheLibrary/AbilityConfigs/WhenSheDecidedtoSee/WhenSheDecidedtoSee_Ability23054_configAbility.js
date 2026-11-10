const configAbility = {
  "fileName": "WhenSheDecidedtoSee_Ability23054",
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
      "modifier": "<a class=\"gModGreen\" id=\"-306753455\">LC_23054_Main</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__786135756\">LC_23054_Sub2</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Update Energy",
              "on": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "value": {
                "displayLines": "15"
              },
              "isFixed": "(Fixed)"
            }
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "priorityLevel": -80,
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Wave Count",
                "compareType": ">",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": {
                    "displayLines": "15"
                  },
                  "isFixed": "(Fixed)"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1530520902\">LC_23054_Sub_ToTeamMembers</a>[<span class=\"descriptionNumberColor\">Great Fortune</span>]",
      "stackType": "ReplaceByCaster",
      "description": "CRIT Rate increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> and CRIT DMG increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue2</span>.",
      "type": "Buff",
      "effectName": "Great Fortune",
      "statusName": "Great Fortune",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
              "value": {
                "displayLines": "MDF_PropertyValue"
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
              "value": {
                "displayLines": "MDF_PropertyValue2"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1143895626\">LC_23054_Sub</a>[<span class=\"descriptionNumberColor\">Great Fortune</span>]",
      "stackType": "ReplaceByCaster",
      "description": "Increases CRIT Rate by <span class=\"descriptionNumberColor\">#SkillEquip_P2_Value</span>, CRIT DMG by <span class=\"descriptionNumberColor\">#SkillEquip_P3_Value</span>, and Energy Regeneration Rate by <span class=\"descriptionNumberColor\">#SkillEquip_P5_AddSPRatio</span>.",
      "type": "Buff",
      "effectName": "Great Fortune",
      "statusName": "Great Fortune",
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]] -{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1530520902\">LC_23054_Sub_ToTeamMembers</a>[<span class=\"descriptionNumberColor\">Great Fortune</span>]",
          "aliveOnly": "True",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_PropertyValue": {
              "displayLines": "0.1"
            },
            "MDF_PropertyValue2": {
              "displayLines": "0.3"
            }
          }
        }
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
              "value": {
                "displayLines": "0.1"
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
              "value": {
                "displayLines": "0.3"
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyRegenRate</span>&nbsp;",
              "value": {
                "displayLines": "0.12"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-306753455\">LC_23054_Main</a>",
      "execute": [
        {
          "eventTrigger": "Ability Use [Owner]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  },
                  {
                    "name": "Is Part Of",
                    "target1": {
                      "name": "Target Name",
                      "target": "{{Ability Targets of Modifier Holder}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Player Team All}}"
                    }
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1143895626\">LC_23054_Sub</a>[<span class=\"descriptionNumberColor\">Great Fortune</span>]",
                  "duration": {
                    "displayLines": "3"
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "priorityLevel": -80,
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Wave Count",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1143895626\">LC_23054_Sub</a>[<span class=\"descriptionNumberColor\">Great Fortune</span>]",
                  "duration": {
                    "displayLines": "3"
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"786135756\">LC_23054_Sub2</a>"
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "isLightcone": true,
  "desc": "Increases the wearer's SPD by #1[i]%. When the wearer enters combat or uses Ultimate on an ally target, the wearer gains \"Great Fortune\" for #4[i] turn(s). While the wearer holds \"Great Fortune,\" all allies' CRIT Rate increases by #2[i]%, CRIT DMG increases by #3[i]%, and the wearer's Energy Regeneration Rate increases by #5[i]%.\\nAt the start of each wave, the wearer regenerates a fixed amount of #6[i] Energy.",
  "params": [
    [
      0.18,
      0.1,
      0.3,
      3,
      0.12,
      15
    ],
    [
      0.21,
      0.11,
      0.375,
      3,
      0.14,
      15
    ],
    [
      0.24,
      0.12,
      0.45,
      3,
      0.16,
      15
    ],
    [
      0.27,
      0.13,
      0.525,
      3,
      0.18,
      15
    ],
    [
      0.3,
      0.14,
      0.6,
      3,
      0.2,
      15
    ]
  ]
}