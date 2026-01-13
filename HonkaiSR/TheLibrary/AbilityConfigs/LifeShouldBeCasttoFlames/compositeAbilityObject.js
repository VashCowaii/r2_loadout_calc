const compositeAbilityObject = {
  "fullCharacterName": "Life Should Be Cast to Flames",
  "trimCharacterName": "LifeShouldBeCasttoFlames",
  "abilityList": [
    "LifeShouldBeCasttoFlames_Ability23041"
  ],
  "fixedStats": {},
  "abilityObject": {
    "LifeShouldBeCasttoFlames_Ability23041": {
      "fileName": "LifeShouldBeCasttoFlames_Ability23041",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "LC_23041_Main"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "LC_23041_Sub[<span class=\"descriptionNumberColor\">DEF Reduced</span>]",
          "stackType": "Replace",
          "modifierFlags": [
            "STAT_DefenceDown"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
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
          "description": "DEF decreases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "effectName": "DEF Reduction",
          "statusName": "DEF Reduced"
        },
        {
          "name": "Modifier Construction",
          "for": "LC_23041_SubOnEmemy",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Defender Finalizes DMG Data",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target",
                    "target": "Use Prior Target(s) Defined",
                    "target2": "Caster"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "LC_23041_Sub[<span class=\"descriptionNumberColor\">DEF Reduced</span>]",
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
                          "operator": "Variables[0] (0.12) || RETURN",
                          "displayLines": "0.12",
                          "constants": [],
                          "variables": [
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
        },
        {
          "name": "Modifier Construction",
          "for": "LC_23041_Main",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Update Energy",
                  "on": "Owner of this Modifier",
                  "value": {
                    "operator": "Variables[0] (10) || RETURN",
                    "displayLines": "10",
                    "constants": [],
                    "variables": [
                      10
                    ]
                  },
                  "isFixed": "* ERR"
                }
              ]
            },
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "Reconstruct Modifier",
                  "target": "Use Prior Target(s) Defined",
                  "casterFilter": "Caster",
                  "counter": 1,
                  "includeTargetsInLimbo": true,
                  "flagFilter": [
                    "STAT_AttachWeakness"
                  ],
                  "execute": [
                    {
                      "name": "Define Custom Variable",
                      "target": "Owner of this Modifier",
                      "scope": "ContextModifier",
                      "variableName": "_have_caster_weakness",
                      "value": 1
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "target": "Owner of this Modifier",
                      "scope": "ContextModifier",
                      "variableName": "_have_caster_weakness",
                      "value": 0
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": "Owner of this Modifier",
                    "value1": "_have_caster_weakness",
                    "compareType": ">=",
                    "value2": 1,
                    "contextScope": "ContextModifier"
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (0.6) || RETURN",
                        "displayLines": "0.6",
                        "constants": [],
                        "variables": [
                          0.6
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": "All Hostile Entities (AOE)(ALL)",
              "modifier": "LC_23041_SubOnEmemy",
              "aliveOnly": "False",
              "haloStatus": true
            }
          ]
        }
      ],
      "isLightcone": true,
      "desc": "When the wearer's turn starts, regenerates #5[i] Energy. If the enemy target has a Weakness implanted by the wearer, increases the wearer's DMG dealt to it by #3[i]%.\\nWhen an enemy target gets attacked by the wearer, the wearer decreases the target's DEF by #2[i]%, lasting for #4[i] turn(s). The same types of effects cannot stack.",
      "params": [
        [
          0,
          0.12,
          0.6,
          2,
          10
        ],
        [
          0,
          0.15,
          0.7,
          2,
          10
        ],
        [
          0,
          0.18,
          0.8,
          2,
          10
        ],
        [
          0,
          0.21,
          0.9,
          2,
          10
        ],
        [
          0,
          0.24,
          1,
          2,
          10
        ]
      ]
    }
  },
  "isLightcone": true
}