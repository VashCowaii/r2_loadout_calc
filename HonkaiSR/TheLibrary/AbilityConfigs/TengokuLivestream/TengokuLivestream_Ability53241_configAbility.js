const configAbility = {
  "fileName": "TengokuLivestream_Ability53241",
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
      "modifier": "<a class=\"gModGreen\" id=\"1577177113\">Relic_324_Main</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__25554174\">Relic_324_Sub</a>[<span class=\"descriptionNumberColor\">Tengoku@Livestream</span>]",
      "stackType": "ReplaceByCaster",
      "description": "CRIT DMG increases by <span class=\"descriptionNumberColor\">#SkillRelic_324_2_P3_CriticalDamage</span>.",
      "type": "Buff",
      "effectName": "CRIT DMG Boost",
      "statusName": "Tengoku@Livestream",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
              "value": {
                "displayLines": "0.32"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1577177113\">Relic_324_Main</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Turn [Anyone]: Start Pre-action Phase",
          "execute": [
            {
              "name": "Define Custom Variable",
              "value": 1,
              "variableName": "_PhaseFlag"
            },
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "_BPCount_Sum"
            }
          ]
        },
        {
          "eventTrigger": "Skill Point Changes",
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
                      "target": "{{Modifier Holder}}"
                    }
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "ParameterValue",
                    "compareType": "<",
                    "value2": 0
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "_PhaseFlag",
                    "compareType": ">=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable with SkillPoint Changes",
                  "variableName": "_BPCount"
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(_BPCount_Sum + &nbsp;<span class=\"descriptionFunctionColor\">ABS</span>(_BPCount))"
                  },
                  "variableName": "_BPCount_Sum"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_BPCount_Sum",
                    "compareType": ">=",
                    "value2": {
                      "displayLines": "3"
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"25554174\">Relic_324_Sub</a>[<span class=\"descriptionNumberColor\">Tengoku@Livestream</span>]",
                      "duration": {
                        "displayLines": "3"
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": 0,
                      "variableName": "_PhaseFlag"
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
  "isRelic": true,
  "desc": [
    "Increases the wearer's CRIT DMG by 16%. If 3 or more Skill Points are consumed in the same turn, additionally increases the wearer's CRIT DMG by 32%, lasting for 3 turns."
  ],
  "params": [
    [
      0.16,
      3,
      0.32,
      3
    ],
    []
  ]
}