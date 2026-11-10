const configAbility = {
  "fileName": "WavestriderCaptain_Ability51261",
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
      "modifier": "<a class=\"gModGreen\" id=\"2008190265\">Relic_126_Main</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-922033468\">Relic_126_Sub2</a>[<span class=\"descriptionNumberColor\">Wavestrider Captain</span>]",
      "stackType": "ReplaceByCaster",
      "description": "ATK increases by <span class=\"descriptionNumberColor\">MDF_AttackAddRatio</span>.",
      "type": "Buff",
      "effectName": "ATK Boost",
      "statusName": "Wavestrider Captain",
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
                "displayLines": "MDF_AttackAddRatio"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1631804574\">Relic_126_Sub</a>[<span class=\"descriptionNumberColor\">Help</span>]",
      "stackType": "ReplaceByCaster",
      "description": "Stacks up to <span class=\"descriptionNumberColor\">_MaxLayer</span> time(s). When using Ultimate, if the unit possesses <span class=\"descriptionNumberColor\">_MaxLayer</span> stacks of \"Help,\" consumes all \"Help\" and increases the wearer's ATK by <span class=\"descriptionNumberColor\">MDF_AttackAddRatio</span>, lasting <span class=\"descriptionNumberColor\">#SkillRelic_126_4_P3_LifeTime</span> turn(s).",
      "type": "Other",
      "effectName": "Help",
      "statusName": "Help",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "_Layer",
              "multiplier": 1
            }
          ]
        },
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
                    "name": "Compare: Variable",
                    "value1": "_Layer",
                    "compareType": "=",
                    "value2": {
                      "displayLines": "2"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-922033468\">Relic_126_Sub2</a>[<span class=\"descriptionNumberColor\">Wavestrider Captain</span>]",
                  "duration": {
                    "displayLines": "1"
                  },
                  "valuePerStack": {
                    "MDF_AttackAddRatio": {
                      "displayLines": "0.48"
                    }
                  }
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2008190265\">Relic_126_Main</a>",
      "execute": [
        {
          "eventTrigger": "Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Part Of",
                    "target1": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "invertCondition": true
                  },
                  {
                    "name": "Is Teammate",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Is Part Of",
                        "target1": {
                          "name": "Target Name",
                          "target": "{{Parameter Target's Ability Targets}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      },
                      {
                        "name": "Is Part Of",
                        "target1": {
                          "name": "Target Name",
                          "target": "{{Parameter Target's Ability Sub-Targets}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      }
                    ]
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
                  "modifier": "<a class=\"gModGreen\" id=\"1631804574\">Relic_126_Sub</a>[<span class=\"descriptionNumberColor\">Help</span>]",
                  "stackLimit": {
                    "displayLines": "2"
                  },
                  "valuePerStack": {
                    "_MaxLayer": {
                      "displayLines": "2"
                    },
                    "MDF_AttackAddRatio": {
                      "displayLines": "0.48"
                    }
                  },
                  "addStacksPerTrigger": 1
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "isLightcone": true,
  "isRelic": true,
  "desc": [
    "Increases CRIT DMG by 16%.",
    "When the wearer becomes the target of another ally target's ability, gains 1 stack of \"Help,\" stacking up to 2 time(s). If there are 2 stack(s) of \"Help\" when the wearer uses their Ultimate, consumes all \"Help\" to increase the wearer's ATK by 48% for 1 turn(s)."
  ],
  "params": [
    [
      0.16
    ],
    [
      2,
      0.48,
      1
    ]
  ]
}