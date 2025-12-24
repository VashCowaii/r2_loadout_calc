const compositeAbilityObject = {
  "fullCharacterName": "Hero of Triumphant Song",
  "trimCharacterName": "HeroofTriumphantSong",
  "abilityList": [
    "HeroofTriumphantSong_Ability51231"
  ],
  "abilityObject": {
    "HeroofTriumphantSong_Ability51231": {
      "fileName": "HeroofTriumphantSong_Ability51231",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Relic_123_Main"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Relic_123_Sub3[<span class=\"descriptionNumberColor\">Hero of Triumphant Song</span>]",
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
          "description": "CRIT DMG increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "CRIT DMG Boost",
          "statusName": "Hero of Triumphant Song"
        },
        {
          "name": "Modifier Construction",
          "for": "Relic_123_Sub2",
          "execute": [
            {
              "eventTrigger": "Attack Start [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": "Owner of this Modifier",
                    "modifier": "Relic_123_Sub3[<span class=\"descriptionNumberColor\">Hero of Triumphant Song</span>]"
                  },
                  "failed": [
                    {
                      "name": "Adjust Target Stats",
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (0.3) || RETURN",
                        "displayLines": "0.3",
                        "constants": [],
                        "variables": [
                          0.3
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "Relic_123_Sub3[<span class=\"descriptionNumberColor\">Hero of Triumphant Song</span>]",
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
                      "operator": "Variables[0] (0.3) || RETURN",
                      "displayLines": "0.3",
                      "constants": [],
                      "variables": [
                        0.3
                      ]
                    }
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "[SUMMONER OF] Owner of this Modifier",
                  "modifier": "Relic_123_Sub3[<span class=\"descriptionNumberColor\">Hero of Triumphant Song</span>]",
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
                      "operator": "Variables[0] (0.3) || RETURN",
                      "displayLines": "0.3",
                      "constants": [],
                      "variables": [
                        0.3
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Relic_123_Sub1",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (0.06) || RETURN",
                    "displayLines": "0.06",
                    "constants": [],
                    "variables": [
                      0.06
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Relic_123_Main",
          "execute": [
            {
              "eventTrigger": "Entity Death",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Entity Type",
                        "target": "Use Prior Target(s) Defined",
                        "type": "Memosprite"
                      },
                      {
                        "name": "Is Part Of",
                        "of": "Use [SUMMONER OF] Prior Target(s) Defined",
                        "target": "Caster",
                        "mustBeAlive2": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Caster",
                      "modifier": "Relic_123_Sub1"
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
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Entity Type",
                        "target": "Use Prior Target(s) Defined",
                        "type": "Memosprite"
                      },
                      {
                        "name": "Is Part Of",
                        "of": "Use [SUMMONER OF] Prior Target(s) Defined",
                        "target": "Caster",
                        "mustBeAlive2": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Caster",
                      "modifier": "Relic_123_Sub1"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Caster's Memosprite",
                      "modifier": "Relic_123_Sub2"
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
                    "name": "Compare: Target Count",
                    "target": "Caster's Memosprite",
                    "compareType": ">=",
                    "value2": 1,
                    "livingTargets": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Caster",
                      "modifier": "Relic_123_Sub1"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Caster's Memosprite",
                      "modifier": "Relic_123_Sub2"
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
      "isRelic": true,
      "desc": [
        "Increases ATK by 12%.",
        "While the wearer's memosprite is on the field, increases the wearer's SPD by 6%. When the wearer's memosprite attacks, increases the wearer's and memosprite's CRIT DMG by 30%, lasting for 2 turn(s)."
      ],
      "params": [
        [
          0.12
        ],
        [
          0.06,
          0.3,
          2
        ]
      ]
    }
  },
  "fixedStats": {
    "2": {
      "ATK%": 0.12
    },
    "4": {}
  },
  "isLightcone": true,
  "isRelic": true
}