const compositeAbilityObject = {
  "fullCharacterName": "Self-Enshrouded Recluse",
  "trimCharacterName": "SelfEnshroudedRecluse",
  "abilityList": [
    "SelfEnshroudedRecluse_Ability51281",
    "SelfEnshroudedRecluse_Ability51280"
  ],
  "abilityObject": {
    "SelfEnshroudedRecluse_Ability51281": {
      "fileName": "SelfEnshroudedRecluse_Ability51281",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Relic_128_Main"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Relic_128_Sub1[<span class=\"descriptionNumberColor\">Self-Enshrouded Recluse</span>]",
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
                    "operator": "Variables[0] (0.15) || RETURN",
                    "displayLines": "0.15",
                    "constants": [],
                    "variables": [
                      0.15
                    ]
                  }
                }
              ]
            }
          ],
          "description": "CRIT DMG increases by <span class=\"descriptionNumberColor\">#SkillRelic_128_4_P2_CriticalDamage</span>.",
          "type": "Buff",
          "statusName": "Self-Enshrouded Recluse"
        },
        {
          "name": "Modifier Construction",
          "for": "Relic_128_Sub",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": "Owner of this Modifier",
                    "flagName": "Shield",
                    "casterFilter": "Caster"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": "Owner of this Modifier",
                        "modifier": "Relic_128_Sub1[<span class=\"descriptionNumberColor\">Self-Enshrouded Recluse</span>]",
                        "invertCondition": true,
                        "casterFilter": "Caster"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Owner of this Modifier",
                          "modifier": "Relic_128_Sub1[<span class=\"descriptionNumberColor\">Self-Enshrouded Recluse</span>]"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Losing Modifier [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": "Owner of this Modifier",
                    "flagName": "Shield",
                    "casterFilter": "Caster"
                  },
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": "Owner of this Modifier",
                        "modifier": "Relic_128_Sub1[<span class=\"descriptionNumberColor\">Self-Enshrouded Recluse</span>]",
                        "casterFilter": "Caster"
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": "Owner of this Modifier",
                          "modifier": "Relic_128_Sub1[<span class=\"descriptionNumberColor\">Self-Enshrouded Recluse</span>]",
                          "onlyRemoveOwnersInstance": true
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking Modifier Instance [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": "Owner of this Modifier",
                    "flagName": "Shield",
                    "casterFilter": "Caster"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": "Owner of this Modifier",
                        "modifier": "Relic_128_Sub1[<span class=\"descriptionNumberColor\">Self-Enshrouded Recluse</span>]",
                        "invertCondition": true,
                        "casterFilter": "Caster"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Owner of this Modifier",
                          "modifier": "Relic_128_Sub1[<span class=\"descriptionNumberColor\">Self-Enshrouded Recluse</span>]"
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
          "name": "Modifier Construction",
          "for": "Relic_128_Main",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">Shield%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (0.12) || RETURN",
                    "displayLines": "0.12",
                    "constants": [],
                    "variables": [
                      0.12
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": "Allied Team(ALL) [Exclude battle mechanics]",
              "modifier": "Relic_128_Sub",
              "haloStatus": true
            }
          ]
        }
      ],
      "isLightcone": true,
      "isRelic": true,
      "desc": [
        "The provided Shield Effect increases by 10%.",
        "Increases the Shield Effect provided by the wearer by 12%. When an ally target holds a Shield provided by the wearer, the ally target's CRIT DMG increases by 15%."
      ],
      "params": [
        [
          0.1
        ],
        [
          0.12,
          0.15
        ]
      ]
    },
    "SelfEnshroudedRecluse_Ability51280": {
      "fileName": "SelfEnshroudedRecluse_Ability51280",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Relic_128_Main2"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Relic_128_Main2",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">Shield%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (0.1) || RETURN",
                    "displayLines": "0.1",
                    "constants": [],
                    "variables": [
                      0.1
                    ]
                  }
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
        "The provided Shield Effect increases by 10%.",
        "Increases the Shield Effect provided by the wearer by 12%. When an ally target holds a Shield provided by the wearer, the ally target's CRIT DMG increases by 15%."
      ],
      "params": [
        [
          0.1
        ],
        [
          0.12,
          0.15
        ]
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