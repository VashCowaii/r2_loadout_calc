const configAbility = {
  "fileName": "8002079_Monster_XP_Minion04_02_AbilityP01_InsertAbility_EnterBattle_Fengrao",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Exit Broken-State",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "OR",
        "conditionList": [
          {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "flagName": "STAT_CTRL",
            "invertCondition": true
          },
          {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "flagName": "DisableAction",
            "invertCondition": true
          },
          {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "flagName": "Break",
            "invertCondition": true
          }
        ]
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_XP_Minion04_02_EffectPaths"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_XP_Minion04_02_Fengrao_Caster"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "searchRandom": true,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "Enemy_XP_Minion04_02_P01_EnterBattle",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Enemy_XP_Minion04_02_Fengrao_Minion",
              "valuePerStack": {
                "_HealRatio": {
                  "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
                  "displayLines": "{[SkillP01[0]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP01[0]]}"
                  ]
                },
                "_LoseRatio": {
                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                  "displayLines": "{[SkillP01[1]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP01[1]]}"
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
          "modifier": "Enemy_XP_Minion04_02_EffectGround"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_XP_Minion04_02_EffectRound"
        }
      ],
      "failed": [
        {
          "name": "Animation Event",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "state": "Skill04",
          "passed": [
            {
              "name": "Animation Task"
            },
            {
              "name": "Animation Task",
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Enemy_XP_Minion04_02_EffectPaths"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Enemy_XP_Minion04_02_Fengrao_Caster"
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{All Team Members(Exclude Self)}}"
                  },
                  "searchRandom": true,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Enemy_XP_Minion04_02_P01_EnterBattle",
                    "invertCondition": true
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Enemy_XP_Minion04_02_Fengrao_Minion",
                      "valuePerStack": {
                        "_HealRatio": {
                          "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
                          "displayLines": "{[SkillP01[0]]}",
                          "constants": [],
                          "variables": [
                            "{[SkillP01[0]]}"
                          ]
                        },
                        "_LoseRatio": {
                          "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                          "displayLines": "{[SkillP01[1]]}",
                          "constants": [],
                          "variables": [
                            "{[SkillP01[1]]}"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "references": []
}