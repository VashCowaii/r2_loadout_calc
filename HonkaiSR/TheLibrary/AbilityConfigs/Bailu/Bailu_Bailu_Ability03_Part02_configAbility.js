const configAbility = {
  "fileName": "Bailu_Bailu_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Heal",
      "target": {
        "name": "Target Name",
        "target": "{{All Team Members}}"
      },
      "healPercent": {
        "displayLines": "0.135"
      },
      "healFlat": {
        "displayLines": "360"
      },
      "formula": "Heal from Healer's MaxHP"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "searchRandom": true,
      "ifTargetFound": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"36808524\">Bailu_Heal_Mark</a>[<span class=\"descriptionNumberColor\">Invigoration</span>]"
          },
          "passed": [
            {
              "name": "Define Modifier Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifierName": "<a class=\"gModGreen\" id=\"36808524\">Bailu_Heal_Mark</a>[<span class=\"descriptionNumberColor\">Invigoration</span>]",
              "function": "Add",
              "value": 1,
              "valueType": "Duration"
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Trace Activated",
                "conditionList": "Vidyadhara Ichor Lines"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "1"
                  },
                  "variableName": "MDF_SkillTree02_HealCountExtra"
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "MDF_SkillTree02_HealCountExtra"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Trace Activated",
                "conditionList": "Aquatic Benediction"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "0.1"
                  },
                  "variableName": "MDF_SkillTree03_DamageResistance"
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "MDF_SkillTree03_DamageResistance"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 1
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "8"
                  },
                  "variableName": "MDF_Rank01_AddSP"
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "MDF_Rank01_AddSP"
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"36808524\">Bailu_Heal_Mark</a>[<span class=\"descriptionNumberColor\">Invigoration</span>]",
              "duration": {
                "displayLines": "2"
              },
              "immediateEffect": true,
              "valuePerStack": {
                "MDF__HealPercentage2": {
                  "displayLines": "0.054"
                },
                "MDF__HealValue2": {
                  "displayLines": "144"
                },
                "MDF_AddSP": {
                  "displayLines": "MDF_Rank01_AddSP"
                },
                "MDF_HealCount": {
                  "displayLines": "2"
                },
                "MDF_HealCountExtra": {
                  "displayLines": "MDF_SkillTree02_HealCountExtra"
                }
              },
              "success": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Aquatic Benediction"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"249464740\">Bailu_PointB3</a>[<span class=\"descriptionNumberColor\">Aquatic Benediction</span>]",
                      "valuePerStack": {
                        "MDF_DamageResistance": {
                          "displayLines": "MDF_SkillTree03_DamageResistance"
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 2
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1195469105\">Bailu_Eidolon2</a>[<span class=\"descriptionNumberColor\">Sylphic Slumber</span>]",
          "duration": {
            "displayLines": "2"
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
              "displayLines": "0.15"
            }
          }
        }
      ]
    },
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "valuePercent": 1,
      "ofAbilitySplit": true,
      "isFixed": "* ERR"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Ability Target List}}"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "conditions": {
        "name": "Compare: Target",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "target2": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "invertCondition": true
      }
    },
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{All Team Members}}"
  }
}