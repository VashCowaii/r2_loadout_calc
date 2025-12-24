const configAbility = {
  "fileName": "WavestriderCaptain_Ability51261",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "Relic_126_Main"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Relic_126_Sub2[<span class=\"descriptionNumberColor\">Wavestrider Captain</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_AttackAddRatio) || RETURN",
                "displayLines": "MDF_AttackAddRatio",
                "constants": [],
                "variables": [
                  "MDF_AttackAddRatio"
                ]
              }
            }
          ]
        }
      ],
      "description": "ATK increases by <span class=\"descriptionNumberColor\">MDF_AttackAddRatio</span>.",
      "type": "Buff",
      "effectName": "ATK Boost",
      "statusName": "Wavestrider Captain"
    },
    {
      "name": "Modifier Construction",
      "for": "Relic_126_Sub[<span class=\"descriptionNumberColor\">Help</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Receiving Modifier",
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
                      "operator": "Variables[0] (2) || RETURN",
                      "displayLines": "2",
                      "constants": [],
                      "variables": [
                        2
                      ]
                    }
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "Relic_126_Sub2[<span class=\"descriptionNumberColor\">Wavestrider Captain</span>]",
                  "duration": {
                    "operator": "Variables[0] (1) || RETURN",
                    "displayLines": "1",
                    "constants": [],
                    "variables": [
                      1
                    ]
                  },
                  "valuePerStack": {
                    "MDF_AttackAddRatio": {
                      "operator": "Variables[0] (0.48) || RETURN",
                      "displayLines": "0.48",
                      "constants": [],
                      "variables": [
                        0.48
                      ]
                    }
                  }
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ],
      "description": "Stacks up to <span class=\"descriptionNumberColor\">_MaxLayer</span> time(s). When using Ultimate, if the unit possesses <span class=\"descriptionNumberColor\">_MaxLayer</span> stacks of \"Help,\" consumes all \"Help\" and increases the wearer's ATK by <span class=\"descriptionNumberColor\">MDF_AttackAddRatio</span>, lasting <span class=\"descriptionNumberColor\">#SkillRelic_126_4_P3_LifeTime</span> turn(s).",
      "type": "Other",
      "effectName": "Help",
      "statusName": "Help"
    },
    {
      "name": "Modifier Construction",
      "for": "Relic_126_Main",
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
                    "of": "Use Prior Target(s) Defined",
                    "target": "Caster",
                    "mustBeAlive2": true,
                    "invertCondition": true
                  },
                  {
                    "name": "Is Teammate",
                    "target": "Use Prior Target(s) Defined"
                  },
                  {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Is Part Of",
                        "of": "Use [SKILL TARGETS OF] Prior Target(s) Defined",
                        "target": "Caster",
                        "mustBeAlive2": true
                      },
                      {
                        "name": "Is Part Of",
                        "of": "Use [SKILL SUB-TARGETS OF] Prior Target(s) Defined",
                        "target": "Caster",
                        "mustBeAlive2": true
                      }
                    ]
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "Relic_126_Sub[<span class=\"descriptionNumberColor\">Help</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  },
                  "valuePerStack": {
                    "_MaxLayer": {
                      "operator": "Variables[0] (2) || RETURN",
                      "displayLines": "2",
                      "constants": [],
                      "variables": [
                        2
                      ]
                    },
                    "MDF_AttackAddRatio": {
                      "operator": "Variables[0] (0.48) || RETURN",
                      "displayLines": "0.48",
                      "constants": [],
                      "variables": [
                        0.48
                      ]
                    }
                  },
                  "addStacksPerTrigger": 1
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