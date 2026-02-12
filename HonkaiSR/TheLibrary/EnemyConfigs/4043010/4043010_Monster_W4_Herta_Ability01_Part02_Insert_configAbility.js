const configAbility = {
  "fileName": "4043010_Monster_W4_Herta_Ability01_Part02_Insert",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "SummonType",
        "compareType": "=",
        "value2": 1
      },
      "passed": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-61933346\">MonsterHerta_SummonOnce</a>",
          "isGlobal": true,
          "variables": {
            "TP_SummonLocation": 0,
            "TP_DelayRatio": 0.75
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-61933346\">MonsterHerta_SummonOnce</a>",
          "isGlobal": true,
          "variables": {
            "TP_SummonLocation": 1,
            "TP_DelayRatio": 1
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-61933346\">MonsterHerta_SummonOnce</a>",
          "isGlobal": true,
          "variables": {
            "TP_SummonLocation": 1,
            "TP_DelayRatio": 1.5
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-61933346\">MonsterHerta_SummonOnce</a>",
          "isGlobal": true,
          "variables": {
            "TP_SummonLocation": 2,
            "TP_DelayRatio": 1
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-61933346\">MonsterHerta_SummonOnce</a>",
          "isGlobal": true,
          "variables": {
            "TP_SummonLocation": 2,
            "TP_DelayRatio": 1.5
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "SummonType",
        "compareType": "=",
        "value2": 2
      },
      "passed": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-61933346\">MonsterHerta_SummonOnce</a>",
          "isGlobal": true,
          "variables": {
            "TP_SummonLocation": 0,
            "TP_DelayRatio": 0.75
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-61933346\">MonsterHerta_SummonOnce</a>",
          "isGlobal": true,
          "variables": {
            "TP_SummonLocation": 1,
            "TP_DelayRatio": 1
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-61933346\">MonsterHerta_SummonOnce</a>",
          "isGlobal": true,
          "variables": {
            "TP_SummonLocation": 2,
            "TP_DelayRatio": 1
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "SummonType",
        "compareType": "=",
        "value2": 1
      },
      "passed": [
        {
          "name": "Trigger Multiple Functions",
          "functionList": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1673790475\">MonsterHerta_Explode</a>"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"372443677\">MonsterHerta_FireOnce</a>"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"372443677\">MonsterHerta_FireOnce</a>",
              "baseDelay": 0.0666
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"372443677\">MonsterHerta_FireOnce</a>",
              "baseDelay": 0.0666
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"372443677\">MonsterHerta_FireOnce</a>",
              "baseDelay": 0.1
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"372443677\">MonsterHerta_FireOnce</a>",
              "baseDelay": 0.1
            }
          ]
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "SummonType",
        "compareType": "=",
        "value2": 2
      },
      "passed": [
        {
          "name": "Trigger Multiple Functions",
          "functionList": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1673790475\">MonsterHerta_Explode</a>"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"372443677\">MonsterHerta_FireOnce</a>"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"372443677\">MonsterHerta_FireOnce</a>",
              "baseDelay": 0.0666
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"372443677\">MonsterHerta_FireOnce</a>",
              "baseDelay": 0.0666
            }
          ]
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1515699713\">Monster_W4_Herta_SummonMonsterKillTogether</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1110556528\">Monster_W4_Herta_SummonMonsterEnd</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1515699713\">Monster_W4_Herta_SummonMonsterKillTogether</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1515699713\">Monster_W4_Herta_SummonMonsterKillTogether</a>"
              },
              "noTargetFound": [
                {
                  "name": "Destroy Battle Entity",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  }
                }
              ]
            }
          ]
        }
      ],
      "useEntitySnapshot": true,
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1110556528\">Monster_W4_Herta_SummonMonsterEnd</a>",
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
        },
        {
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count",
                "target": {
                  "name": "Target Name",
                  "target": "{{Minions of Modifier Holder}}"
                },
                "compareType": "=",
                "value2": 0,
                "livingTargets": true
              },
              "passed": [
                {
                  "name": "Destroy Battle Entity",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Owner]: End",
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
      "latentQueue": []
    }
  ]
}