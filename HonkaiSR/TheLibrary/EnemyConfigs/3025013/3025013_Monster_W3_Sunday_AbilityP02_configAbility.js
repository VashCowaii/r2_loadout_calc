const configAbility = {
  "fileName": "3025013_Monster_W3_Sunday_AbilityP02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1775290134\">Enemy_W3_Sunday_BreakExtraDelay</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1097728420\">Enemy_W3_Sunday_Preshow_1</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1047395563\">Enemy_W3_Sunday_Preshow_2</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1064173182\">Enemy_W3_Sunday_Preshow_3</a>"
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1064173182\">Enemy_W3_Sunday_Preshow_3</a>",
      "stackData": [],
      "latentQueue": [],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "conditions": {
          "name": "AND",
          "conditionList": [
            {
              "name": "Has Toughness Reduction Preview",
              "caster": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            },
            {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"104648719\">Enemy_W3_Sunday_SummonMinions_BreakExtraDelay</a>"
            }
          ]
        },
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": {
            "operator": "Variables[0] ({[SkillP02[2]]}) || RETURN",
            "displayLines": "{[SkillP02[2]]}",
            "constants": [],
            "variables": [
              "{[SkillP02[2]]}"
            ]
          }
        }
      }
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1047395563\">Enemy_W3_Sunday_Preshow_2</a>",
      "stackData": [],
      "latentQueue": [],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "conditions": {
          "name": "AND",
          "conditionList": [
            {
              "name": "Has Toughness Reduction Preview",
              "caster": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            },
            {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1775290134\">Enemy_W3_Sunday_BreakExtraDelay</a>"
            },
            {
              "name": "Compare: Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "value1": "HP_Bars_Remaining",
              "compareType": "=",
              "value2": 3
            }
          ]
        },
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": {
            "operator": "Variables[0] (UnusedUnderThisBase_286) || RETURN",
            "displayLines": "UnusedUnderThisBase_286",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_286"
            ]
          }
        }
      }
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1097728420\">Enemy_W3_Sunday_Preshow_1</a>",
      "stackData": [],
      "latentQueue": [],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "conditions": {
          "name": "AND",
          "conditionList": [
            {
              "name": "Has Toughness Reduction Preview",
              "caster": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            },
            {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1775290134\">Enemy_W3_Sunday_BreakExtraDelay</a>"
            },
            {
              "name": "Compare: Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "value1": "HP_Bars_Remaining",
              "compareType": "=",
              "value2": 3,
              "invertCondition": true
            }
          ]
        },
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": {
            "operator": "Variables[0] (UnusedUnderThisBase_287) || RETURN",
            "displayLines": "UnusedUnderThisBase_287",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_287"
            ]
          }
        }
      }
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1775290134\">Enemy_W3_Sunday_BreakExtraDelay</a>",
      "execute": [
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 3
              },
              "passed": [
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "advanceType": "Set",
                  "multiAdd": "UnusedUnderThisBase_286"
                }
              ],
              "failed": [
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "advanceType": "Set",
                  "multiAdd": "UnusedUnderThisBase_287"
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