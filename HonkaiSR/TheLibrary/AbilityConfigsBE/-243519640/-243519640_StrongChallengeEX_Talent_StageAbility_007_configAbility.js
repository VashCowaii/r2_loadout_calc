const configAbility = {
  "fileName": "-243519640_StrongChallengeEX_Talent_StageAbility_007",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1712002939\">MStrongChallengeEX_Talent_StageAbility_LE_007</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1732992681\">MStrongChallengeEX_Talent_StageAbility_BOSS_007</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Ability",
              "abilityName": "StrongChallengeEX_Talent_StageAbility_007_Insert"
            },
            {
              "name": "Add Ability",
              "abilityName": "BattleEventAbility_SummonMonsterInfinite_Camera"
            },
            {
              "name": "Inject Ability Use",
              "abilityName": "StrongChallengeEX_Talent_StageAbility_007_Insert",
              "abilityTarget": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "priorityTag": "MonsterSummon",
              "canHitNonTargets": true,
              "valuePerStack": {
                "PropertyValue": {
                  "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                  "displayLines": "MDF_PropertyValue",
                  "constants": [],
                  "variables": [
                    "MDF_PropertyValue"
                  ]
                },
                "LifeTime": {
                  "operator": "Variables[0] (MDF_LifeTime) || RETURN",
                  "displayLines": "MDF_LifeTime",
                  "constants": [],
                  "variables": [
                    "MDF_LifeTime"
                  ]
                },
                "MaxLayer": {
                  "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                  "displayLines": "MDF_MaxLayer",
                  "constants": [],
                  "variables": [
                    "MDF_MaxLayer"
                  ]
                }
              },
              "allowAbilityTriggers": false
            }
          ]
        },
        {
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team"
                  },
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "ENEMIES_OBJECT_UNUSED_8"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "StrongChallengeEX_Talent_StageAbility_007_Insert",
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "priorityTag": "MonsterSummon",
                  "canHitNonTargets": true,
                  "valuePerStack": {
                    "PropertyValue": {
                      "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                      "displayLines": "MDF_PropertyValue",
                      "constants": [],
                      "variables": [
                        "MDF_PropertyValue"
                      ]
                    },
                    "LifeTime": {
                      "operator": "Variables[0] (MDF_LifeTime) || RETURN",
                      "displayLines": "MDF_LifeTime",
                      "constants": [],
                      "variables": [
                        "MDF_LifeTime"
                      ]
                    },
                    "MaxLayer": {
                      "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                      "displayLines": "MDF_MaxLayer",
                      "constants": [],
                      "variables": [
                        "MDF_MaxLayer"
                      ]
                    }
                  },
                  "allowAbilityTriggers": false
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "End Broken State [Owner]",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 4,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team"
                  },
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "ENEMIES_OBJECT_UNUSED_8"
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1349202594\">MStrongChallengeEX_Talent_StageAbility_BOSS_007_Trigger</a>"
                },
                {
                  "name": "Inject Ability Use",
                  "abilityName": "StrongChallengeEX_Talent_StageAbility_007_Minion04_RunAway_Part01",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "priorityTag": "MonsterBuffSelf",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1712002939\">MStrongChallengeEX_Talent_StageAbility_LE_007</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "Weakness Break [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team"
                  },
                  {
                    "name": "Compare: Monster Rank",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "compareType": ">=",
                    "value2": 4
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1732992681\">MStrongChallengeEX_Talent_StageAbility_BOSS_007</a>",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (#ADF_1) || RETURN",
                      "displayLines": "#ADF_1",
                      "constants": [],
                      "variables": [
                        "#ADF_1"
                      ]
                    },
                    "MDF_LifeTime": {
                      "operator": "Variables[0] (#ADF_2) || RETURN",
                      "displayLines": "#ADF_2",
                      "constants": [],
                      "variables": [
                        "#ADF_2"
                      ]
                    },
                    "MDF_MaxLayer": {
                      "operator": "Variables[0] (#ADF_3) || RETURN",
                      "displayLines": "#ADF_3",
                      "constants": [],
                      "variables": [
                        "#ADF_3"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}