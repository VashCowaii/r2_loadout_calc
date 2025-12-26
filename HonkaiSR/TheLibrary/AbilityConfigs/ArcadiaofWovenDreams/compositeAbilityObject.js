const compositeAbilityObject = {
  "fullCharacterName": "Arcadia of Woven Dreams",
  "trimCharacterName": "ArcadiaofWovenDreams",
  "abilityList": [
    "ArcadiaofWovenDreams_Ability53211"
  ],
  "abilityObject": {
    "ArcadiaofWovenDreams_Ability53211": {
      "fileName": "ArcadiaofWovenDreams_Ability53211",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Relic_321_Main"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Relic_321_Sub[<span class=\"descriptionNumberColor\">Arcadia of Woven Dreams</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
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
          "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "statusName": "Arcadia of Woven Dreams"
        },
        {
          "name": "Modifier Construction",
          "for": "Relic_321_Main",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Ability53211_GlobalFunctions"
                }
              ]
            },
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team",
                    "target": "Use Prior Target(s) Defined",
                    "team": "TeamLight"
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "Ability53211_GlobalFunctions"
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
                    "target": "Use Prior Target(s) Defined",
                    "team": "TeamLight"
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "Ability53211_GlobalFunctions"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Departed State: Begin [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team",
                    "target": "Use Prior Target(s) Defined",
                    "team": "TeamLight"
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "Ability53211_GlobalFunctions"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Departed State: End [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team",
                    "target": "Use Prior Target(s) Defined",
                    "team": "TeamLight"
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "Ability53211_GlobalFunctions"
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
        "When the number of ally targets on the field is not equal to 4, for every 1 additional/missing ally target, increases the DMG dealt by the wearer and their memosprite by 9%/12%, stacking up to 4/3 time(s)."
      ],
      "params": [
        [
          0.09,
          0.12,
          4,
          3
        ],
        []
      ],
      "referencesGlobalFunctions": [
        {
          "name": "CharacterFunctions",
          "functionName": "Ability53211_GlobalFunctions",
          "parse": [
            {
              "name": "Define Custom Variable",
              "variableName": "_TeamCount",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_DamageAddCount",
              "value": 0
            },
            {
              "name": "Define Custom Variable with Team Count",
              "target": "Allied Team",
              "variableName": "_TeamCount",
              "livingTargets": true
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_DamageAddCount",
              "value": {
                "operator": "Variables[0] (_TeamCount) || Constants[0] (4) || SUB || RETURN",
                "displayLines": "(_TeamCount - 4)",
                "constants": [
                  4
                ],
                "variables": [
                  "_TeamCount"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_DamageAddCount",
                "compareType": ">=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_DamageAddCount",
                  "value": {
                    "operator": "Variables[0] (MIN) || Variables[1] (_DamageAddCount) || Variables[2] (4) || PARAM_2 || FUNCTION || RETURN",
                    "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(_DamageAddCount, 4)",
                    "constants": [],
                    "variables": [
                      "MIN",
                      "_DamageAddCount",
                      4
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "Relic_321_Sub[<span class=\"descriptionNumberColor\">Arcadia of Woven Dreams</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (_DamageAddCount) || Variables[1] (0.09) || MUL || RETURN",
                      "displayLines": "(_DamageAddCount * 0.09)",
                      "constants": [],
                      "variables": [
                        "_DamageAddCount",
                        0.09
                      ]
                    }
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster's Memosprite",
                  "modifier": "Relic_321_Sub[<span class=\"descriptionNumberColor\">Arcadia of Woven Dreams</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (_DamageAddCount) || Variables[1] (0.09) || MUL || RETURN",
                      "displayLines": "(_DamageAddCount * 0.09)",
                      "constants": [],
                      "variables": [
                        "_DamageAddCount",
                        0.09
                      ]
                    }
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_DamageAddCount",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Caster",
                  "modifier": "Relic_321_Sub[<span class=\"descriptionNumberColor\">Arcadia of Woven Dreams</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Caster's Memosprite",
                  "modifier": "Relic_321_Sub[<span class=\"descriptionNumberColor\">Arcadia of Woven Dreams</span>]"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_DamageAddCount",
                "compareType": "<=",
                "value2": -1
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_DamageAddCount",
                  "value": {
                    "operator": "Variables[0] (ABS) || Variables[1] (_DamageAddCount) || PARAM_1 || FUNCTION || RETURN",
                    "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">ABS</span>(_DamageAddCount)",
                    "constants": [],
                    "variables": [
                      "ABS",
                      "_DamageAddCount"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_DamageAddCount",
                  "value": {
                    "operator": "Variables[0] (MIN) || Variables[1] (_DamageAddCount) || Variables[2] (3) || PARAM_2 || FUNCTION || RETURN",
                    "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(_DamageAddCount, 3)",
                    "constants": [],
                    "variables": [
                      "MIN",
                      "_DamageAddCount",
                      3
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "Relic_321_Sub[<span class=\"descriptionNumberColor\">Arcadia of Woven Dreams</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (_DamageAddCount) || Variables[1] (0.12) || MUL || RETURN",
                      "displayLines": "(_DamageAddCount * 0.12)",
                      "constants": [],
                      "variables": [
                        "_DamageAddCount",
                        0.12
                      ]
                    }
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster's Memosprite",
                  "modifier": "Relic_321_Sub[<span class=\"descriptionNumberColor\">Arcadia of Woven Dreams</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (_DamageAddCount) || Variables[1] (0.12) || MUL || RETURN",
                      "displayLines": "(_DamageAddCount * 0.12)",
                      "constants": [],
                      "variables": [
                        "_DamageAddCount",
                        0.12
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  },
  "fixedStats": {
    "2": {},
    "4": {}
  },
  "isLightcone": true,
  "isRelic": true
}