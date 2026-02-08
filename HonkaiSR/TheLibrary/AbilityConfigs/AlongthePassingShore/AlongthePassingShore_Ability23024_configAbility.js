const configAbility = {
  "fileName": "AlongthePassingShore_Ability23024",
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
      "modifier": "<a class=\"gModGreen\" id=\"9255980\">LC_23024_Main</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__746039723\">LC_23024_Sub02</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1868046089\">LC_23024_Sub</a>[<span class=\"descriptionNumberColor\">Mirage Fizzle</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ],
      "description": "The wearer deals <span class=\"descriptionNumberColor\">MDF_PropertyValue01</span> more DMG to the target. And additionally increases the Ultimate DMG dealt by <span class=\"descriptionNumberColor\">MDF_PropertyValue02</span>.",
      "type": "Debuff",
      "effectName": "Mirage Fizzle",
      "statusName": "Mirage Fizzle"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__9255980\">LC_23024_Main</a>",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Hit",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"746039723\">LC_23024_Sub02</a>",
                "casterFilter": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                }
              },
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1868046089\">LC_23024_Sub</a>[<span class=\"descriptionNumberColor\">Mirage Fizzle</span>]",
                  "duration": 1,
                  "valuePerStack": {
                    "MDF_PropertyValue01": {
                      "operator": "Variables[0] (0.24) || RETURN",
                      "displayLines": "0.24",
                      "constants": [],
                      "variables": [
                        0.24
                      ]
                    },
                    "MDF_PropertyValue02": {
                      "operator": "Variables[0] (0.24) || RETURN",
                      "displayLines": "0.24",
                      "constants": [],
                      "variables": [
                        0.24
                      ]
                    }
                  },
                  "success": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"746039723\">LC_23024_Sub02</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1868046089\">LC_23024_Sub</a>[<span class=\"descriptionNumberColor\">Mirage Fizzle</span>]",
                "justAddedOrActive": true,
                "casterFilter": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                }
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Ultimate"
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                          "value": "(0.24 + 0.24)"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                          "value": "0.24"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE, with Unselectables)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"746039723\">LC_23024_Sub02</a>"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ],
  "isLightcone": true,
  "desc": "Increases the wearer's CRIT DMG by #1[i]%. When the wearer hits an enemy target, inflicts Mirage Fizzle on the enemy, lasting for 1 turn. Each time the wearer attacks, this effect can only trigger 1 time on each target. The wearer deals #2[i]% increased DMG to targets afflicted with Mirage Fizzle, and the DMG dealt by Ultimate additionally increases by #3[i]%.",
  "params": [
    [
      0.36,
      0.24,
      0.24
    ],
    [
      0.42,
      0.28,
      0.28
    ],
    [
      0.48,
      0.32,
      0.32
    ],
    [
      0.54,
      0.36,
      0.36
    ],
    [
      0.6,
      0.4,
      0.4
    ]
  ]
}