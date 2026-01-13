const compositeAbilityObject = {
  "fullCharacterName": "Along the Passing Shore",
  "trimCharacterName": "AlongthePassingShore",
  "abilityList": [
    "AlongthePassingShore_Ability23024"
  ],
  "fixedStats": {
    "1": {
      "CritDamageBase": 0.36
    },
    "2": {
      "CritDamageBase": 0.42
    },
    "3": {
      "CritDamageBase": 0.48
    },
    "4": {
      "CritDamageBase": 0.54
    },
    "5": {
      "CritDamageBase": 0.6
    }
  },
  "abilityObject": {
    "AlongthePassingShore_Ability23024": {
      "fileName": "AlongthePassingShore_Ability23024",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "LC_23024_Main"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "LC_23024_Sub02"
        },
        {
          "name": "Modifier Construction",
          "for": "LC_23024_Sub[<span class=\"descriptionNumberColor\">Mirage Fizzle</span>]",
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
          "for": "LC_23024_Main",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Hit",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": "Use Prior Target(s) Defined",
                    "modifier": "LC_23024_Sub02",
                    "casterFilter": "Owner of this Modifier"
                  },
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Use Prior Target(s) Defined",
                      "modifier": "LC_23024_Sub[<span class=\"descriptionNumberColor\">Mirage Fizzle</span>]",
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
                          "to": "Use Prior Target(s) Defined",
                          "modifier": "LC_23024_Sub02"
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
                    "target": "Use Prior Target(s) Defined",
                    "modifier": "LC_23024_Sub[<span class=\"descriptionNumberColor\">Mirage Fizzle</span>]",
                    "justAddedOrActive": true,
                    "casterFilter": "Owner of this Modifier"
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
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                          "value": {
                            "operator": "Variables[0] (0.24) || Variables[1] (0.24) || ADD || RETURN",
                            "displayLines": "(0.24 + 0.24)",
                            "constants": [],
                            "variables": [
                              0.24,
                              0.24
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Adjust Target Stats",
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                          "value": {
                            "operator": "Variables[0] (0.24) || RETURN",
                            "displayLines": "0.24",
                            "constants": [],
                            "variables": [
                              0.24
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
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "All Hostile Entities (AOE)(ALL)",
                  "modifier": "LC_23024_Sub02"
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
  },
  "isLightcone": true
}