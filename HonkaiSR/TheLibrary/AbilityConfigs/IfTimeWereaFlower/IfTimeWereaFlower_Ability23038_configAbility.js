const configAbility = {
  "fileName": "IfTimeWereaFlower_Ability23038",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "LC_23038_Main"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "LC_23038_AuraBonus_Buff[<span class=\"descriptionNumberColor\">Presage</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
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
      "description": "Increases CRIT DMG by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "CRIT DMG Boost",
      "statusName": "Presage"
    },
    {
      "name": "Modifier Construction",
      "for": "LC_23038_AuraBonus[<span class=\"descriptionNumberColor\">Presage</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
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
      "description": "Increases CRIT DMG by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "CRIT DMG Boost",
      "statusName": "Presage",
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": "Allied Team(ALL, exclude Owner) [Exclude battle mechanics]",
          "modifier": "LC_23038_AuraBonus_Buff[<span class=\"descriptionNumberColor\">Presage</span>]",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
              "displayLines": "MDF_PropertyValue",
              "constants": [],
              "variables": [
                "MDF_PropertyValue"
              ]
            }
          }
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "LC_23038_Main",
      "execute": [
        {
          "eventTrigger": "Attack Start [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_IsInsert",
              "value": 0
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Attack Type",
                "attackTypes": [
                  "Follow-up"
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_IsInsert",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Attack End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_IsInsert",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "LC_23038_AuraBonus[<span class=\"descriptionNumberColor\">Presage</span>]",
                  "duration": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (0.48) || RETURN",
                      "displayLines": "0.48",
                      "constants": [],
                      "variables": [
                        0.48
                      ]
                    }
                  }
                },
                {
                  "name": "Update Energy",
                  "on": "Caster",
                  "value": {
                    "operator": "Variables[0] (12) || RETURN",
                    "displayLines": "12",
                    "constants": [],
                    "variables": [
                      12
                    ]
                  },
                  "isFixed": "* ERR"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Wave Count",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "LC_23038_AuraBonus[<span class=\"descriptionNumberColor\">Presage</span>]",
                  "duration": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (0.48) || RETURN",
                      "displayLines": "0.48",
                      "constants": [],
                      "variables": [
                        0.48
                      ]
                    }
                  }
                },
                {
                  "name": "Update Energy",
                  "on": "Caster",
                  "value": {
                    "operator": "Variables[0] (21) || RETURN",
                    "displayLines": "21",
                    "constants": [],
                    "variables": [
                      21
                    ]
                  },
                  "isFixed": "* ERR"
                }
              ]
            }
          ],
          "priorityLevel": -80
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ],
  "isLightcone": true,
  "desc": "Increases the wearer's CRIT DMG by #1[i]%. After the wearer launches Follow-up ATK, additionally regenerates #2[i] Energy and gains \"Presage,\" lasting for #3[i] turn(s). While the wearer has \"Presage,\" all ally targets' CRIT DMG increases by #4[i]%. When entering battle, the wearer regenerates #5[i] Energy and gains \"Presage,\" lasting for #6[i] turn(s).",
  "params": [
    [
      0.36,
      12,
      2,
      0.48,
      21,
      2
    ],
    [
      0.42,
      12,
      2,
      0.6,
      21,
      2
    ],
    [
      0.48,
      12,
      2,
      0.72,
      21,
      2
    ],
    [
      0.54,
      12,
      2,
      0.84,
      21,
      2
    ],
    [
      0.6,
      12,
      2,
      0.96,
      21,
      2
    ]
  ]
}