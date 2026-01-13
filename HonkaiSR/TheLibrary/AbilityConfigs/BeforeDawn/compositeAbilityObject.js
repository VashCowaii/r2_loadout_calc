const compositeAbilityObject = {
  "fullCharacterName": "Before Dawn",
  "trimCharacterName": "BeforeDawn",
  "abilityList": [
    "BeforeDawn_Ability23010"
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
    "BeforeDawn_Ability23010": {
      "fileName": "BeforeDawn_Ability23010",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "LC_23010_Main"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "LC_23010_Sub[<span class=\"descriptionNumberColor\">Somnus Corpus</span>]",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
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
                      "name": "Adjust Target Stats",
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (0.48) || RETURN",
                        "displayLines": "0.48",
                        "constants": [],
                        "variables": [
                          0.48
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_InsertFlag",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_InsertFlag",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_InsertFlag",
                      "value": 0
                    },
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "description": "Increases DMG dealt by the next Follow-Up ATK by <span class=\"descriptionNumberColor\">#SkillEquip_P3_InsertDamageAddedRatio</span>.",
          "type": "Buff",
          "statusName": "Somnus Corpus"
        },
        {
          "name": "Modifier Construction",
          "for": "LC_23010_Main",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Skill",
                      "Ultimate"
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (0.18) || RETURN",
                        "displayLines": "0.18",
                        "constants": [],
                        "variables": [
                          0.18
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Skill Type",
                        "skillType": "Skill"
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Ultimate"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "LC_23010_Sub[<span class=\"descriptionNumberColor\">Somnus Corpus</span>]"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "isLightcone": true,
      "desc": "Increases the wearer's CRIT DMG by #1[i]%. Increases DMG dealt by the wearer's Skill and Ultimate by #2[i]%. After the wearer uses Skill or Ultimate, gains \"Somnus Corpus.\" Upon triggering a Follow-Up ATK, consumes \"Somnus Corpus,\" and increases DMG dealt by Follow-Up ATK by #3[i]%.",
      "params": [
        [
          0.36,
          0.18,
          0.48
        ],
        [
          0.42,
          0.21,
          0.56
        ],
        [
          0.48,
          0.24,
          0.64
        ],
        [
          0.54,
          0.27,
          0.72
        ],
        [
          0.6,
          0.3,
          0.8
        ]
      ]
    }
  },
  "isLightcone": true
}