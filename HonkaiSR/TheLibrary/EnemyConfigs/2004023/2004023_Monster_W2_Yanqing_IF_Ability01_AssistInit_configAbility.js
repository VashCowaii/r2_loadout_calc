const configAbility = {
  "fileName": "2004023_Monster_W2_Yanqing_IF_Ability01_AssistInit",
  "childAbilityList": [
    "2004023_Monster_W2_Yanqing_IF_Ability01_AssistInit",
    "2004023_Monster_W2_Yanqing_IF_Ability01_Logic",
    "2004023_Monster_W2_Yanqing_IF_Ability01_Perform",
    "2004023_Monster_W2_Yanqing_IF_Ability01_Effect",
    "2004023_Monster_W2_Yanqing_IF_Ability01_Camera"
  ],
  "skillTrigger": "Skill01",
  "abilityType": "Basic ATK",
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "Monster_W2_Yanqing_00_IF_Skill01_AssistMark01"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "Monster_W2_Yanqing_00_IF_Skill01_AssistMark02"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "Monster_W2_Yanqing_00_IF_Skill01_AssistMark03"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{All Team Members(Exclude Self)}}"
      },
      "searchRandom": true,
      "maxTargets": 2,
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "flagName": "STAT_CTRL",
            "invertCondition": true
          },
          {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "flagName": "Break",
            "invertCondition": true
          },
          {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "flagName": "DisableAction",
            "invertCondition": true
          }
        ]
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2039253924\">Monster_W2_Yanqing_IF_AssistMark01</a>"
        },
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "Monster_W2_Yanqing_00_IF_Skill01_AssistMark01",
          "context": "TargetEntity",
          "value": 1,
          "max": 2
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{All Team Members(Exclude Self)}}"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "flagName": "STAT_CTRL",
            "invertCondition": true
          },
          {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "flagName": "Break",
            "invertCondition": true
          },
          {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "flagName": "DisableAction",
            "invertCondition": true
          },
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"2039253924\">Monster_W2_Yanqing_IF_AssistMark01</a>",
            "invertCondition": true
          }
        ]
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2089586781\">Monster_W2_Yanqing_IF_AssistMark02</a>"
        },
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "Monster_W2_Yanqing_00_IF_Skill01_AssistMark02",
          "context": "TargetEntity",
          "value": 1,
          "max": 1
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{All Team Members(Exclude Self)}}"
      },
      "searchRandom": true,
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "flagName": "STAT_CTRL",
            "invertCondition": true
          },
          {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "flagName": "Break",
            "invertCondition": true
          },
          {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "flagName": "DisableAction",
            "invertCondition": true
          },
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"2039253924\">Monster_W2_Yanqing_IF_AssistMark01</a>",
            "invertCondition": true
          },
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"2089586781\">Monster_W2_Yanqing_IF_AssistMark02</a>",
            "invertCondition": true
          }
        ]
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2072809162\">Monster_W2_Yanqing_IF_AssistMark03</a>"
        },
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "Monster_W2_Yanqing_00_IF_Skill01_AssistMark03",
          "context": "TargetEntity",
          "value": 1,
          "max": 4
        }
      ]
    },
    {
      "name": "Trigger Joint-Attack Ability",
      "abilityList": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "ability": "Monster_W2_Yanqing_IF_Ability01_Logic"
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              {
                "name": "Target Filter",
                "conditions": {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2039253924\">Monster_W2_Yanqing_IF_AssistMark01</a>"
                }
              },
              "Shuffle Targets",
              {
                "name": "Return Target",
                "value": 2
              }
            ]
          },
          "inherentTarget": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "Shuffle Targets",
              {
                "name": "Return Target",
                "value": 1
              }
            ]
          },
          "behaviorTag": "AssistAttack1",
          "abortFlags": [
            "STAT_CTRL",
            "Break",
            "DisableAction"
          ],
          "ability": "MISSING NAME OBJECT(Or implicit from Context)"
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              {
                "name": "Target Filter",
                "conditions": {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2089586781\">Monster_W2_Yanqing_IF_AssistMark02</a>"
                }
              },
              "Shuffle Targets",
              {
                "name": "Return Target",
                "value": 1
              }
            ]
          },
          "inherentTarget": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "Shuffle Targets",
              {
                "name": "Return Target",
                "value": 1
              }
            ]
          },
          "delay": 0.5,
          "behaviorTag": "AssistAttack1",
          "abortFlags": [
            "STAT_CTRL",
            "Break",
            "DisableAction"
          ],
          "ability": "MISSING NAME OBJECT(Or implicit from Context)"
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              {
                "name": "Target Filter",
                "conditions": {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2072809162\">Monster_W2_Yanqing_IF_AssistMark03</a>"
                }
              },
              "Shuffle Targets",
              {
                "name": "Return Target",
                "value": 4
              }
            ]
          },
          "inherentTarget": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "Shuffle Targets",
              {
                "name": "Return Target",
                "value": 1
              }
            ]
          },
          "delay": 1,
          "behaviorTag": "AssistAttack1",
          "abortFlags": [
            "STAT_CTRL",
            "Break",
            "DisableAction"
          ],
          "ability": "MISSING NAME OBJECT(Or implicit from Context)"
        }
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{All Team Members(Exclude Self)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"2039253924\">Monster_W2_Yanqing_IF_AssistMark01</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{All Team Members(Exclude Self)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"2089586781\">Monster_W2_Yanqing_IF_AssistMark02</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{All Team Members(Exclude Self)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"2072809162\">Monster_W2_Yanqing_IF_AssistMark03</a>"
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2072809162\">Monster_W2_Yanqing_IF_AssistMark03</a>",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2089586781\">Monster_W2_Yanqing_IF_AssistMark02</a>",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2039253924\">Monster_W2_Yanqing_IF_AssistMark01</a>",
      "stackData": [],
      "latentQueue": []
    }
  ]
}