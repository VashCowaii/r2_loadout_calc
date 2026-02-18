const configAbility = {
  "fileName": "3025013_Monster_W3_Sunday_IF_EX02_PassiveAbility",
  "skillTrigger": "SkillEX02",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "HardLevel",
        "compareType": ">=",
        "value2": 1
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1776791671\">Enemy_W3_Sunday_IF_EX02_Boss</a>"
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__901570774\">Monster_W3_SundayPart_IF_EX02_DamageTaken</a>[<span class=\"descriptionNumberColor\">Shattered Illusion</span>]",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                "displayLines": "MDF_PropertyValue",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue"
                ]
              }
            }
          ]
        }
      ],
      "description": "\"Echo of Faded Dreams\" takes <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> increased DMG. This effect is dispelled when Cacophonic Conductor recovers from a Weakness Break.",
      "type": "Other",
      "statusName": "Shattered Illusion"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__606317793\">Monster_W3_SundayPart_IF_EX02_DamageReduce</a>[<span class=\"descriptionNumberColor\">Rhythm Without End</span>]",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                "displayLines": "MDF_PropertyValue",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue"
                ]
              }
            }
          ]
        }
      ],
      "description": "\"Echo of Faded Dreams\" takes <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> less DMG. This effect is dispelled when Cacophonic Conductor becomes Weakness Broken.",
      "type": "Other",
      "statusName": "Rhythm Without End"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1776791671\">Enemy_W3_Sunday_IF_EX02_Boss</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"606317793\">Monster_W3_SundayPart_IF_EX02_DamageReduce</a>[<span class=\"descriptionNumberColor\">Rhythm Without End</span>]",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] ({[SkillEX01[0]]}) || RETURN",
                  "displayLines": "{[SkillEX01[0]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillEX01[0]]}"
                  ]
                }
              }
            }
          ]
        },
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Caster's Minions}}"
                    }
                  },
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"606317793\">Monster_W3_SundayPart_IF_EX02_DamageReduce</a>[<span class=\"descriptionNumberColor\">Rhythm Without End</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] ({[SkillEX01[0]]}) || RETURN",
                      "displayLines": "{[SkillEX01[0]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillEX01[0]]}"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "HP Change [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "CurrentHP%",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"606317793\">Monster_W3_SundayPart_IF_EX02_DamageReduce</a>[<span class=\"descriptionNumberColor\">Rhythm Without End</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] ({[SkillEX01[0]]}) || RETURN",
                      "displayLines": "{[SkillEX01[0]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillEX01[0]]}"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"901570774\">Monster_W3_SundayPart_IF_EX02_DamageTaken</a>[<span class=\"descriptionNumberColor\">Shattered Illusion</span>]",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] ({[SkillEX01[1]]}) || RETURN",
                  "displayLines": "{[SkillEX01[1]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillEX01[1]]}"
                  ]
                }
              }
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"606317793\">Monster_W3_SundayPart_IF_EX02_DamageReduce</a>[<span class=\"descriptionNumberColor\">Rhythm Without End</span>]"
            }
          ]
        },
        {
          "eventTrigger": "End Broken State [Owner]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"901570774\">Monster_W3_SundayPart_IF_EX02_DamageTaken</a>[<span class=\"descriptionNumberColor\">Shattered Illusion</span>]"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}