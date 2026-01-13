const configAbility = {
  "fileName": "WeWillMeetAgain_Ability21029",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "LC_21029_Main"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "LC_21029_Main",
      "execute": [
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": "Owner of this Modifier",
                "value1": "Flag_21029",
                "compareType": "=",
                "value2": 1,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": "Ability Target List",
                  "searchRandom": true,
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": "Use Prior Target(s) Defined",
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": {
                          "name": "Custom Damage Type",
                          "initialTypePreRead": "Physical",
                          "sourceType": "ReadTargetType",
                          "readTarget": "Caster"
                        },
                        "Damage": {
                          "operator": "Variables[0] (0.48) || RETURN",
                          "displayLines": "0.48",
                          "constants": [],
                          "variables": [
                            0.48
                          ]
                        },
                        "indirectDMG": true,
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Additional DMG"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Owner]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Skill Type",
                    "skillType": "Basic ATK"
                  },
                  {
                    "name": "Skill Type",
                    "skillType": "Skill"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": "Owner of this Modifier",
                  "scope": "TargetEntity",
                  "variableName": "Flag_21029",
                  "value": 1
                }
              ],
              "failed": [
                {
                  "name": "Declare Custom Variable",
                  "target": "Owner of this Modifier",
                  "scope": "TargetEntity",
                  "variableName": "Flag_21029"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": "Owner of this Modifier",
              "scope": "TargetEntity",
              "variableName": "Flag_21029"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ],
  "isLightcone": true,
  "desc": "After the wearer uses Basic ATK or Skill, deals Additional DMG equal to #1[i]% of the wearer's ATK to a random enemy that has been attacked.",
  "params": [
    [
      0.48
    ],
    [
      0.6
    ],
    [
      0.72
    ],
    [
      0.84
    ],
    [
      0.96
    ]
  ]
}