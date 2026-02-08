const configAbility = {
  "fileName": "20085023_FarmRelicAbility_104309",
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
      "modifier": "<a class=\"gModGreen\" id=\"1789379567\">MFarmRelic_104309</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1769154752\">MFarmRelic_104309_Sub2</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valueType": "Layer",
              "variableName": "_Layer",
              "multiplier": 1
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_1) || Variables[1] (_Layer) || MUL || RETURN",
                "displayLines": "(MDF_1 * _Layer)",
                "constants": [],
                "variables": [
                  "MDF_1",
                  "_Layer"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_Layer",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ],
      "description": "Each stack increases DMG received by <span class=\"descriptionNumberColor\">MDF_1</span>. This effect can stack up to <span class=\"descriptionNumberColor\">MDF_2</span> time(s).",
      "type": "Debuff",
      "effectName": "Vulnerability",
      "statusName": "Vulnerability",
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-76327950\">MFarmRelic_104309_Sub</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier is Added [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "STAT_DOT"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Varying Value SUM",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "DOT_Layer",
                  "value": "STAT_DOT",
                  "valueType": "Amount"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DOT_Layer",
                    "compareType": ">",
                    "value2": 5
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "DOT_Layer",
                      "value": 5
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1769154752\">MFarmRelic_104309_Sub2</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "valueType": "Layer",
                      "variableName": "Modifier_Layer",
                      "modifierName": "<a class=\"gModGreen\" id=\"-1769154752\">MFarmRelic_104309_Sub2</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
                      "multiplier": 1
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Modifier_Layer",
                      "value": 0
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1769154752\">MFarmRelic_104309_Sub2</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (DOT_Layer) || Variables[1] (Modifier_Layer) || SUB || RETURN",
                    "displayLines": "(DOT_Layer - Modifier_Layer)",
                    "constants": [],
                    "variables": [
                      "DOT_Layer",
                      "Modifier_Layer"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Losing Modifier [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "STAT_DOT"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Varying Value SUM",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "DOT_Layer",
                  "value": "STAT_DOT",
                  "valueType": "Amount"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DOT_Layer",
                    "compareType": ">",
                    "value2": 5
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "DOT_Layer",
                      "value": 5
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1769154752\">MFarmRelic_104309_Sub2</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "valueType": "Layer",
                      "variableName": "Modifier_Layer",
                      "modifierName": "<a class=\"gModGreen\" id=\"-1769154752\">MFarmRelic_104309_Sub2</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
                      "multiplier": 1
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Modifier_Layer",
                      "value": 0
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1769154752\">MFarmRelic_104309_Sub2</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (DOT_Layer) || Variables[1] (Modifier_Layer) || SUB || RETURN",
                    "displayLines": "(DOT_Layer - Modifier_Layer)",
                    "constants": [],
                    "variables": [
                      "DOT_Layer",
                      "Modifier_Layer"
                    ]
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1789379567\">MFarmRelic_104309</a>",
      "execute": [
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
                "team": "Enemy Team"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-76327950\">MFarmRelic_104309_Sub</a>"
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