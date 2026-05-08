const configAbility = {
  "fileName": "Natasha_LocalPlayer_Natasha_NormalAtk01",
  "skillTrigger": "NormalAtk",
  "abilityType": "Basic ATK",
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": "Ability Has a Target",
      "passed": [
        "Deleted bullshit",
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "from": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "to": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "value1": "Distance_Between_Entities",
            "compareType": "<=",
            "value2": 7.5
          },
          "passed": [
            {
              "name": "Shot Fired",
              "execute": [
                {
                  "name": "Overworld Attack Instance",
                  "onHit": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          "Compare Projectile Visual Lifetime",
                          {
                            "name": "Target Exists",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Projectile's Target}}"
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              ],
              "projectileFinished": [
                {
                  "name": "Overworld Attack Instance"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Shot Fired",
              "execute": [
                {
                  "name": "Overworld Attack Instance",
                  "onAttack": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          "Compare Projectile Visual Lifetime",
                          {
                            "name": "Target Exists",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Projectile's Target}}"
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              ],
              "projectileFinished": [
                {
                  "name": "Overworld Attack Instance"
                }
              ]
            }
          ]
        }
      ],
      "failed": [
        "Deleted bullshit",
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "Overworld Attack Instance",
              "onAttack": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      "Compare Projectile Visual Lifetime",
                      {
                        "name": "Target Exists",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Projectile's Target}}"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "projectileFinished": [
            {
              "name": "Overworld Attack Instance"
            }
          ]
        }
      ]
    }
  ],
  "onAbortReg": [],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "Skill Point User(Or NONE)"
  },
  "realTargetData": {
    "primaryTarget": "Select Hostile Target"
  }
}