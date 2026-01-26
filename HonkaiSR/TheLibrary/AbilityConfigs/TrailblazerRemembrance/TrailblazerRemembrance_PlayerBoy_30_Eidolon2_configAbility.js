const configAbility = {
  "fileName": "TrailblazerRemembrance_PlayerBoy_30_Eidolon2",
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
      "modifier": "M_PlayerBoy_30_Eidolon2"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "PlayerBoy_30_Eidolon2_Count[<span class=\"descriptionNumberColor\">Gleaner of the Past</span>]",
      "stackType": "Replace",
      "modifierFlags": [
        "RetainCountZero"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "mInit_Count",
              "value": {
                "operator": "Variables[0] (MDF_Count) || RETURN",
                "displayLines": "MDF_Count",
                "constants": [],
                "variables": [
                  "MDF_Count"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Define Modifier Variable",
              "modifierName": null,
              "value": {
                "operator": "Variables[0] (mInit_Count) || RETURN",
                "displayLines": "mInit_Count",
                "constants": [],
                "variables": [
                  "mInit_Count"
                ]
              }
            },
            {
              "name": "Define Modifier-Specific Variable",
              "modifierName": "PlayerBoy_30_Eidolon2_Count[<span class=\"descriptionNumberColor\">Gleaner of the Past</span>]",
              "variableName": "MDF_Count",
              "value": {
                "operator": "Variables[0] (mInit_Count) || RETURN",
                "displayLines": "mInit_Count",
                "constants": [],
                "variables": [
                  "mInit_Count"
                ]
              }
            }
          ]
        }
      ],
      "description": "When ally memosprites (aside from Mem) take action, Trailblazer regenerates <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span> Energy. This effect can trigger <span class=\"descriptionNumberColor\">MDF_Count</span> more time(s).",
      "type": "Other",
      "statusName": "Gleaner of the Past"
    },
    {
      "name": "Modifier Construction",
      "for": "M_PlayerBoy_30_Eidolon2",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "PlayerBoy_30_Eidolon2_Count[<span class=\"descriptionNumberColor\">Gleaner of the Past</span>]",
              "counter": {
                "operator": "Variables[0] (1) || RETURN",
                "displayLines": "1",
                "constants": [],
                "variables": [
                  1
                ]
              },
              "valuePerStack": {
                "MDF_PropertyRatio": {
                  "operator": "Variables[0] (8) || RETURN",
                  "displayLines": "8",
                  "constants": [],
                  "variables": [
                    8
                  ]
                },
                "MDF_Count": {
                  "operator": "Variables[0] (1) || RETURN",
                  "displayLines": "1",
                  "constants": [],
                  "variables": [
                    1
                  ]
                }
              }
            }
          ]
        },
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
                    "of": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{All Memosprites}} - {{Caster}}.[[getMemosprite]]"
                    },
                    "mustBeAlive2": true
                  },
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "PlayerBoy_30_Eidolon2_Count[<span class=\"descriptionNumberColor\">Gleaner of the Past</span>]",
                    "compareType": ">",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": {
                    "operator": "Variables[0] (8) || RETURN",
                    "displayLines": "8",
                    "constants": [],
                    "variables": [
                      8
                    ]
                  },
                  "isFixed": "* ERR"
                },
                {
                  "name": "Define Modifier Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifierName": "PlayerBoy_30_Eidolon2_Count[<span class=\"descriptionNumberColor\">Gleaner of the Past</span>]",
                  "function": "Add"
                },
                {
                  "name": "Define Modifier-Specific Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifierName": "PlayerBoy_30_Eidolon2_Count[<span class=\"descriptionNumberColor\">Gleaner of the Past</span>]",
                  "adjustmentType": "+",
                  "variableName": "MDF_Count",
                  "value": -1
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{All Memosprites}} - {{Caster}}.[[getMemosprite]]"
                    },
                    "mustBeAlive2": true
                  },
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "PlayerBoy_30_Eidolon2_Count[<span class=\"descriptionNumberColor\">Gleaner of the Past</span>]",
                    "compareType": ">",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": {
                    "operator": "Variables[0] (8) || RETURN",
                    "displayLines": "8",
                    "constants": [],
                    "variables": [
                      8
                    ]
                  },
                  "isFixed": "* ERR"
                },
                {
                  "name": "Define Modifier Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifierName": "PlayerBoy_30_Eidolon2_Count[<span class=\"descriptionNumberColor\">Gleaner of the Past</span>]",
                  "function": "Add"
                },
                {
                  "name": "Define Modifier-Specific Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifierName": "PlayerBoy_30_Eidolon2_Count[<span class=\"descriptionNumberColor\">Gleaner of the Past</span>]",
                  "adjustmentType": "+",
                  "variableName": "MDF_Count",
                  "value": -1
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