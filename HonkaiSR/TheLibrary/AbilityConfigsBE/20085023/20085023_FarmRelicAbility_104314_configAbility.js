const configAbility = {
  "fileName": "20085023_FarmRelicAbility_104314",
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
      "modifier": "<a class=\"gModGreen\" id=\"1940525233\">MFarmRelic_104314</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-772982810\">MFarmRelic_104314_DamageAddedRatio</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
      "stackType": "Replace",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_DamageAddedRatio) || Variables[1] (MDF_SummonCount) || MUL || RETURN",
                "displayLines": "(MDF_DamageAddedRatio * MDF_SummonCount)",
                "constants": [],
                "variables": [
                  "MDF_DamageAddedRatio",
                  "MDF_SummonCount"
                ]
              }
            }
          ]
        }
      ],
      "description": "Each ally summon increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_DamageAddedRatio</span>, current number of summons: <span class=\"descriptionNumberColor\">MDF_SummonCount</span>.",
      "type": "Buff",
      "effectName": "DMG Boost",
      "statusName": "DMG Boost"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1940525233\">MFarmRelic_104314</a>",
      "execute": [
        {
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Player Team"
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"739278249\">FarmRelicAbility_104314_Template</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Player Team"
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"739278249\">FarmRelicAbility_104314_Template</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"739278249\">FarmRelicAbility_104314_Template</a>"
            }
          ],
          "priorityLevel": -90
        },
        {
          "eventTrigger": "Battle Event/Summon Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Player Team"
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"739278249\">FarmRelicAbility_104314_Template</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Battle Event/Summon Died [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Player Team"
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"739278249\">FarmRelicAbility_104314_Template</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Owner Changed [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Player Team"
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"739278249\">FarmRelicAbility_104314_Template</a>"
                }
              ]
            }
          ]
        }
      ],
      "modifierFunctions": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__739278249\">FarmRelicAbility_104314_Template</a>",
          "parse": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_SummonCount",
              "value": 0
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]] + {{Battle Event List}}"
              },
              "ifTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "type": "Memosprite"
                      },
                      {
                        "name": "Is Entity a Battle Event/Summon",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "expectedType": "Summon"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_SummonCount",
                      "value": {
                        "operator": "Variables[0] (MDF_SummonCount) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(MDF_SummonCount + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "MDF_SummonCount"
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-772982810\">MFarmRelic_104314_DamageAddedRatio</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
              "valuePerStack": {
                "MDF_SummonCount": {
                  "operator": "Variables[0] (MDF_SummonCount) || RETURN",
                  "displayLines": "MDF_SummonCount",
                  "constants": [],
                  "variables": [
                    "MDF_SummonCount"
                  ]
                }
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}