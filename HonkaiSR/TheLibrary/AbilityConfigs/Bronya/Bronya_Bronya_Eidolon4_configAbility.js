const configAbility = {
  "fileName": "Bronya_Bronya_Eidolon4",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "Bronya_Eidolon4_ATK_Flag"
    },
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "Bronya_Eidolon4_Listen"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Bronya_Eidolon4_ATK_Flag",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Bronya_Eidolon4_Listen",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 4
              },
              "passed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": 1,
                  "maximum": 1,
                  "assignState": "True",
                  "priorState": "Active",
                  "bar#": 3,
                  "cooldown": 0
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Turn [Action-End Phase]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": "Owner of this Modifier",
              "modifier": "Bronya_Eidolon4_ATK_Flag"
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Anyone]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "NOT",
                    "condition": {
                      "name": "Current Action Holder Is",
                      "target": "Owner of this Modifier"
                    }
                  },
                  {
                    "name": "Current Action Holder's Team",
                    "team": "TeamLight"
                  },
                  {
                    "name": "Skill Type",
                    "skillType": "Basic ATK"
                  },
                  {
                    "name": "Has Modifier",
                    "target": "Caster",
                    "modifier": "Bronya_Eidolon4_ATK_Flag"
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": "Use [SKILL TARGETS OF] Prior Target(s) Defined",
                        "value1": "CurrentHP%",
                        "compareType": ">",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Target Count",
                        "target": "Use [SKILL TARGETS OF] Prior Target(s) Defined",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Has Weakness",
                        "target": "Use [SKILL TARGETS OF] Prior Target(s) Defined",
                        "DamageType": "Wind"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Bronya_Eidolon4_ATK",
                      "abilitySource": "Caster",
                      "abilityTarget": "Use [SKILL TARGETS OF] Prior Target(s) Defined",
                      "priorityTag": "AvatarInsertAttackSelf",
                      "showInActionOrder": true,
                      "abortFlags": [
                        "STAT_CTRL",
                        "DisableAction"
                      ],
                      "allowAbilityTriggers": false
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Target Count",
                        "target": "Use [SKILL TARGETS OF] Prior Target(s) Defined",
                        "compareType": ">",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Find New Target",
                          "from": "All Enemies (AOE)",
                          "searchRandom": true,
                          "maxTargets": 1,
                          "conditions": {
                            "name": "Has Weakness",
                            "target": "Use Prior Target(s) Defined",
                            "DamageType": "Wind"
                          },
                          "ifTargetFound": [
                            {
                              "name": "Inject Ability Use",
                              "abilityName": "Bronya_Eidolon4_ATK",
                              "abilitySource": "Caster",
                              "abilityTarget": "Use Prior Target(s) Defined",
                              "priorityTag": "AvatarInsertAttackSelf",
                              "canHitNonTargets": true,
                              "showInActionOrder": true,
                              "abortFlags": [
                                "STAT_CTRL",
                                "DisableAction"
                              ],
                              "allowAbilityTriggers": false
                            }
                          ]
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
      "stackData": [],
      "latentQueue": []
    }
  ]
}