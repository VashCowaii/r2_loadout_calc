const configAbility = {
  "fileName": "3025015_Monster_W3_Sunday_AbilityP03",
  "skillTrigger": "SkillP03",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"484414107\">Enemy_W3_Sunday_MainStory380_DamageTakenRatio</a>",
      "valuePerStack": {
        "MDF_Monster_DamageTakenRatio_Level01": {
          "operator": "Variables[0] ({[SkillP03[0]]}) || RETURN",
          "displayLines": "{[SkillP03[0]]}",
          "constants": [],
          "variables": [
            "{[SkillP03[0]]}"
          ]
        },
        "MDF_Monster_DamageTakenRatio_Level02": {
          "operator": "Variables[0] ({[SkillP03[1]]}) || RETURN",
          "displayLines": "{[SkillP03[1]]}",
          "constants": [],
          "variables": [
            "{[SkillP03[1]]}"
          ]
        },
        "MDF_Monster_DamageTakenRatio_Level03": {
          "operator": "Variables[0] ({[SkillP03[2]]}) || RETURN",
          "displayLines": "{[SkillP03[2]]}",
          "constants": [],
          "variables": [
            "{[SkillP03[2]]}"
          ]
        },
        "MDF_Monster_DamageTakenRatio_Level04": {
          "operator": "Variables[0] ({[SkillP03[3]]}) || RETURN",
          "displayLines": "{[SkillP03[3]]}",
          "constants": [],
          "variables": [
            "{[SkillP03[3]]}"
          ]
        },
        "MDF_Monster_DamageTakenRatio_Level05": {
          "operator": "Variables[0] ({[SkillP03[4]]}) || RETURN",
          "displayLines": "{[SkillP03[4]]}",
          "constants": [],
          "variables": [
            "{[SkillP03[4]]}"
          ]
        },
        "MDF_Monster_DamageTakenRatio_Level06": {
          "operator": "Variables[0] ({[SkillP03[5]]}) || RETURN",
          "displayLines": "{[SkillP03[5]]}",
          "constants": [],
          "variables": [
            "{[SkillP03[5]]}"
          ]
        },
        "MDF_Monster_DamageTakenRatio_Level00": {
          "operator": "Variables[0] ({[SkillP03[6]]}) || RETURN",
          "displayLines": "{[SkillP03[6]]}",
          "constants": [],
          "variables": [
            "{[SkillP03[6]]}"
          ]
        }
      }
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Character ID",
        "ID": 1001,
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "characterName": "March 7th"
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-709595036\">Enemy_W3_Sunday_MainStory380_Mar7thAllDamageTypeAddedRatio</a>",
          "valuePerStack": {
            "MDF_AllDamageTypeAddedRatio": {
              "operator": "Variables[0] ({[SkillP03[7]]}) || RETURN",
              "displayLines": "{[SkillP03[7]]}",
              "constants": [],
              "variables": [
                "{[SkillP03[7]]}"
              ]
            }
          }
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1733765355\">Enemy_W3_Sunday_MainStory380_LockHP</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1733765355\">Enemy_W3_Sunday_MainStory380_LockHP</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Lock HP",
              "threshold": 0.01
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-709595036\">Enemy_W3_Sunday_MainStory380_Mar7thAllDamageTypeAddedRatio</a>",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
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
                      "value": "MDF_AllDamageTypeAddedRatio"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_AllDamageTypeAddedRatio"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__484414107\">Enemy_W3_Sunday_MainStory380_DamageTakenRatio</a>",
      "execute": [
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Player Team"
              },
              "passed": [
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "operator": "Variables[0] (MDF_WorldLevel) || RETURN",
                    "displayLines": "MDF_WorldLevel",
                    "constants": [],
                    "variables": [
                      "MDF_WorldLevel"
                    ]
                  },
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 0,
                      "execute": [
                        {
                          "name": "Adjust Target Stats",
                          "modifiedValuesArray": [
                            {
                              "on": "Defender",
                              "statName": "&nbsp;<span class=\"descriptionNumberColor\">EnemyVulnerability</span>&nbsp;",
                              "value": "MDF_Monster_DamageTakenRatio_Level01"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 1,
                      "execute": [
                        {
                          "name": "Adjust Target Stats",
                          "modifiedValuesArray": [
                            {
                              "on": "Defender",
                              "statName": "&nbsp;<span class=\"descriptionNumberColor\">EnemyVulnerability</span>&nbsp;",
                              "value": "MDF_Monster_DamageTakenRatio_Level02"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 2,
                      "execute": [
                        {
                          "name": "Adjust Target Stats",
                          "modifiedValuesArray": [
                            {
                              "on": "Defender",
                              "statName": "&nbsp;<span class=\"descriptionNumberColor\">EnemyVulnerability</span>&nbsp;",
                              "value": "MDF_Monster_DamageTakenRatio_Level03"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 3,
                      "execute": [
                        {
                          "name": "Adjust Target Stats",
                          "modifiedValuesArray": [
                            {
                              "on": "Defender",
                              "statName": "&nbsp;<span class=\"descriptionNumberColor\">EnemyVulnerability</span>&nbsp;",
                              "value": "MDF_Monster_DamageTakenRatio_Level04"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 4,
                      "execute": [
                        {
                          "name": "Adjust Target Stats",
                          "modifiedValuesArray": [
                            {
                              "on": "Defender",
                              "statName": "&nbsp;<span class=\"descriptionNumberColor\">EnemyVulnerability</span>&nbsp;",
                              "value": "MDF_Monster_DamageTakenRatio_Level05"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 5,
                      "execute": [
                        {
                          "name": "Adjust Target Stats",
                          "modifiedValuesArray": [
                            {
                              "on": "Defender",
                              "statName": "&nbsp;<span class=\"descriptionNumberColor\">EnemyVulnerability</span>&nbsp;",
                              "value": "MDF_Monster_DamageTakenRatio_Level06"
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  "defaultEvents": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">EnemyVulnerability</span>&nbsp;",
                          "value": "MDF_Monster_DamageTakenRatio_Level00"
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
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with WorldLevel",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "MDF_WorldLevel"
            }
          ]
        }
      ],
      "stackData": [
        "MDF_Monster_DamageTakenRatio_Level01",
        "MDF_Monster_DamageTakenRatio_Level02",
        "MDF_Monster_DamageTakenRatio_Level03",
        "MDF_Monster_DamageTakenRatio_Level04",
        "MDF_Monster_DamageTakenRatio_Level05",
        "MDF_Monster_DamageTakenRatio_Level06",
        "MDF_Monster_DamageTakenRatio_Level00"
      ],
      "latentQueue": []
    }
  ]
}