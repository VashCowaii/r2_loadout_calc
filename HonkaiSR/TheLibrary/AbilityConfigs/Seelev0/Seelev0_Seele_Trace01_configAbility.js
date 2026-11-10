const configAbility = {
  "fileName": "Seelev0_Seele_Trace01",
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
      "modifier": "<a class=\"gModGreen\" id=\"-730910953\">Seele_LowHP_AggroDown</a>",
      "valuePerStack": {
        "MDF_HPRatio": {
          "displayLines": "0.5"
        },
        "MDF_AggroDown": {
          "displayLines": "0.5"
        }
      }
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1465401968\">Seele_Trace_AggroDown</a>[<span class=\"descriptionNumberColor\">Nightshade</span>]",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "description": "Lowers the chances of being attacked by enemies.",
      "type": "Buff",
      "effectName": "Aggro Chance Reduction",
      "statusName": "Nightshade",
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">Aggro%</span>&nbsp;",
              "statValue": {
                "displayLines": "(0 - MDF_PropertyValue)"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-730910953\">Seele_LowHP_AggroDown</a>",
      "stackType": "ReplaceByCaster",
      "stackData": [
        "MDF_HPRatio",
        "MDF_AggroDown"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
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
                "compareType": "<=",
                "value2": {
                  "displayLines": "MDF_HPRatio"
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1465401968\">Seele_Trace_AggroDown</a>[<span class=\"descriptionNumberColor\">Nightshade</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "displayLines": "MDF_AggroDown"
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
                "compareType": "<=",
                "value2": {
                  "displayLines": "MDF_HPRatio"
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1465401968\">Seele_Trace_AggroDown</a>[<span class=\"descriptionNumberColor\">Nightshade</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "displayLines": "MDF_AggroDown"
                    }
                  }
                }
              ],
              "failed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1465401968\">Seele_Trace_AggroDown</a>[<span class=\"descriptionNumberColor\">Nightshade</span>]",
                  "onlyRemoveOwnersInstance": true
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  }
}