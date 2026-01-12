const configAbility = {
  "fileName": "March7thP_March7th_Eidolon2",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "March7th_Eidolon2_Shield_pre"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "March7th_Eidolon2_Shield[<span class=\"descriptionNumberColor\">Shield</span>]",
      "stackType": "Replace",
      "modifierFlags": [
        "Shield"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Set Shield State/Value"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Shield",
              "target": "Owner of this Modifier"
            },
            {
              "name": "Set Shield State/Value",
              "reset": true
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Create Shield",
              "target": "Owner of this Modifier",
              "value": {
                "operator": "Variables[0] (MDF_ShieldValue) || RETURN",
                "displayLines": "MDF_ShieldValue",
                "constants": [],
                "variables": [
                  "MDF_ShieldValue"
                ]
              }
            }
          ]
        }
      ],
      "description": "Gains a Shield that absorbs DMG. While the Shield persists, enemy attacks will not reduce Shielded characters' HP.",
      "type": "Buff",
      "effectName": "Shield",
      "statusName": "Shield"
    },
    {
      "name": "Modifier Construction",
      "for": "March7th_Eidolon2_Shield_pre",
      "execute": [
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
                  "name": "Define Custom Variable with Stat",
                  "target": "Caster",
                  "variableName": "CasterDefence",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">DEFSUM</span>&nbsp;"
                },
                {
                  "name": "Find New Target",
                  "from": "All Team Members(In Context)",
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Target Has Lowest/Highest Value",
                    "target": "Use Prior Target(s) Defined",
                    "partOf": "All Team Members(In Context)",
                    "compareValue": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent%</span>&nbsp;",
                    "minOrMax": "Min"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Use Prior Target(s) Defined",
                      "modifier": "March7th_Eidolon2_Shield[<span class=\"descriptionNumberColor\">Shield</span>]",
                      "duration": {
                        "operator": "Variables[0] (3) || RETURN",
                        "displayLines": "3",
                        "constants": [],
                        "variables": [
                          3
                        ]
                      },
                      "valuePerStack": {
                        "MDF_ShieldValue": {
                          "operator": "Variables[0] (0.24) || Variables[1] (CasterDefence) || MUL || Variables[2] (320) || ADD || RETURN",
                          "displayLines": "((0.24 * CasterDefence) + 320)",
                          "constants": [],
                          "variables": [
                            0.24,
                            "CasterDefence",
                            320
                          ]
                        }
                      }
                    }
                  ]
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
  ]
}