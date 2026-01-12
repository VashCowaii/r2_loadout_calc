const configAbility = {
  "fileName": "DanHeng_DanHeng_Trace01",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "DanHeng_LowHP_AggroDown",
      "valuePerStack": {
        "MDF_HPRatio": {
          "operator": "Variables[0] (0.5) || RETURN",
          "displayLines": "0.5",
          "constants": [],
          "variables": [
            0.5
          ]
        },
        "MDF_AggroDown": {
          "operator": "Variables[0] (0.5) || RETURN",
          "displayLines": "0.5",
          "constants": [],
          "variables": [
            0.5
          ]
        }
      }
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "DanHeng_Trace_AggroDown[<span class=\"descriptionNumberColor\">Hidden Dragon</span>]",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">Aggro%</span>&nbsp;",
              "value": {
                "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || SUB || RETURN",
                "displayLines": "(0 - MDF_PropertyValue)",
                "constants": [
                  0
                ],
                "variables": [
                  "MDF_PropertyValue"
                ]
              }
            }
          ]
        }
      ],
      "description": "Lowers the chances of being attacked by enemies.",
      "type": "Buff",
      "effectName": "Aggro Chance Reduction",
      "statusName": "Hidden Dragon"
    },
    {
      "name": "Modifier Construction",
      "for": "DanHeng_LowHP_AggroDown",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": "Owner of this Modifier",
                "value1": "CurrentHP%",
                "compareType": "<=",
                "value2": {
                  "operator": "Variables[0] (MDF_HPRatio) || RETURN",
                  "displayLines": "MDF_HPRatio",
                  "constants": [],
                  "variables": [
                    "MDF_HPRatio"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "DanHeng_Trace_AggroDown[<span class=\"descriptionNumberColor\">Hidden Dragon</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (MDF_AggroDown) || RETURN",
                      "displayLines": "MDF_AggroDown",
                      "constants": [],
                      "variables": [
                        "MDF_AggroDown"
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
                "target": "Owner of this Modifier",
                "value1": "CurrentHP%",
                "compareType": "<=",
                "value2": {
                  "operator": "Variables[0] (MDF_HPRatio) || RETURN",
                  "displayLines": "MDF_HPRatio",
                  "constants": [],
                  "variables": [
                    "MDF_HPRatio"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "DanHeng_Trace_AggroDown[<span class=\"descriptionNumberColor\">Hidden Dragon</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (MDF_AggroDown) || RETURN",
                      "displayLines": "MDF_AggroDown",
                      "constants": [],
                      "variables": [
                        "MDF_AggroDown"
                      ]
                    }
                  }
                }
              ],
              "failed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "DanHeng_Trace_AggroDown[<span class=\"descriptionNumberColor\">Hidden Dragon</span>]",
                  "onlyRemoveOwnersInstance": true
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_HPRatio",
        "MDF_AggroDown"
      ],
      "latentQueue": []
    }
  ]
}