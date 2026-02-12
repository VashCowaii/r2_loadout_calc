const configAbility = {
  "fileName": "4043010_Monster_W3_TV_01_Ability01_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Level Entity}}"
        },
        "value1": "TV_01_EliteFlag",
        "compareType": "=",
        "value2": 0,
        "contextScope": "TargetEntity"
      },
      "passed": [
        {
          "name": "Random Event",
          "isUnique": true,
          "odds": [
            {
              "operator": "Variables[0] (TV_01_EliteChance) || RETURN",
              "displayLines": "TV_01_EliteChance",
              "constants": [],
              "variables": [
                "TV_01_EliteChance"
              ]
            },
            {
              "operator": "Constants[0] (1) || Variables[0] (TV_01_EliteChance) || SUB || RETURN",
              "displayLines": "(1 - TV_01_EliteChance)",
              "constants": [
                1
              ],
              "variables": [
                "TV_01_EliteChance"
              ]
            }
          ],
          "execute": [
            {
              "name": "Sequence Event",
              "passed": [
                {
                  "name": "Select Random Enemy from Pool",
                  "poolID": {
                    "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__105) || RETURN",
                    "displayLines": "ENEMIES_OBJECT_UNUSED__105",
                    "constants": [],
                    "variables": [
                      "ENEMIES_OBJECT_UNUSED__105"
                    ]
                  },
                  "filter": [
                    "Elite"
                  ],
                  "poolKey": "MonsterIDKey"
                }
              ]
            },
            {
              "name": "Sequence Event",
              "passed": [
                {
                  "name": "Select Random Enemy from Pool",
                  "poolID": {
                    "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__105) || RETURN",
                    "displayLines": "ENEMIES_OBJECT_UNUSED__105",
                    "constants": [],
                    "variables": [
                      "ENEMIES_OBJECT_UNUSED__105"
                    ]
                  },
                  "filter": [
                    "Minion"
                  ],
                  "poolKey": "MonsterIDKey"
                }
              ]
            }
          ]
        }
      ],
      "failed": [
        {
          "name": "Select Random Enemy from Pool",
          "poolID": {
            "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__105) || RETURN",
            "displayLines": "ENEMIES_OBJECT_UNUSED__105",
            "constants": [],
            "variables": [
              "ENEMIES_OBJECT_UNUSED__105"
            ]
          },
          "filter": [
            "Minion"
          ],
          "poolKey": "MonsterIDKey"
        }
      ]
    },
    {
      "name": "Remove from Team Target Grouping",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "stayInTeam": false
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"533043980\">Monster_FormChange</a>",
      "isGlobal": true,
      "variables": {
        "Summon_MonsterIDKey": {
          "operator": "Variables[0] (MonsterIDKey) || RETURN",
          "displayLines": "MonsterIDKey",
          "constants": [],
          "variables": [
            "MonsterIDKey"
          ]
        }
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Recently Summoned Enemies}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"303346537\">Monster_W3_TV_01_SummonMonsterKillTogether</a>",
      "casterAssign": "TargetSelf"
    },
    {
      "name": "Action Advance/Delay",
      "target": {
        "name": "Target Name",
        "target": "{{Recently Summoned Enemies}}"
      },
      "advanceType": "Delay",
      "multiAdd": 1
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Monster Rank",
        "target": {
          "name": "Target Name",
          "target": "{{Recently Summoned Enemies}}"
        },
        "compareType": ">=",
        "value2": 3
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "scope": "TargetEntity",
          "variableName": "TV_01_EliteFlag",
          "value": 1
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"868255192\">Monster_W3_TV_01_SummonMonsterEnd</a>"
    },
    "Trigger: Ability End"
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__303346537\">Monster_W3_TV_01_SummonMonsterKillTogether</a>",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Monster Rank",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "compareType": ">=",
                "value2": 3
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "TV_01_EliteFlag",
                  "value": 0
                }
              ]
            },
            {
              "name": "Destroy Battle Entity",
              "target": {
                "name": "Target Name",
                "target": "{{Summoner of Modifier Holder}}"
              }
            }
          ]
        },
        {
          "eventTrigger": "Entity Left Battle [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Monster Rank",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "compareType": ">=",
                "value2": 3
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "TV_01_EliteFlag",
                  "value": 0
                }
              ]
            },
            {
              "name": "Destroy Battle Entity",
              "target": {
                "name": "Target Name",
                "target": "{{Summoner of Modifier Holder}}"
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "TV_01_EliteFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__868255192\">Monster_W3_TV_01_SummonMonsterEnd</a>",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "Action End [Owner]",
          "execute": [
            {
              "name": "Entity Exit Stage",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "reason": "Vanish",
              "living": false
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "TV_01_EliteFlag"
      ]
    }
  ]
}