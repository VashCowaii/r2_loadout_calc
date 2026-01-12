const configAbility = {
  "fileName": "Luocha_Luocha_Ability02_InsertAbility",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "variableName": "IsInserAbilityTrigger",
      "value": 1
    },
    {
      "name": "Find New Target",
      "from": [
        {
          "name": "Join Targets",
          "TargetList": [
            {
              "name": "Target List",
              "target": "All Teammates (Excluding Owner)"
            },
            {
              "name": "Target List",
              "target": "Caster"
            }
          ]
        },
        {
          "name": "Target Filter",
          "conditions": {
            "name": "Is Entity a Battle Event/Summon",
            "target": "Use Prior Target(s) Defined",
            "invertCondition": true
          }
        }
      ],
      "searchRandom": true,
      "maxTargets": 1,
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Target Has Lowest/Highest Value",
            "target": "Use Prior Target(s) Defined",
            "partOf": [
              {
                "name": "Join Targets",
                "TargetList": [
                  {
                    "name": "Target List",
                    "target": "All Teammates (Excluding Owner)"
                  },
                  {
                    "name": "Target List",
                    "target": "Caster"
                  }
                ]
              },
              {
                "name": "Target Filter",
                "conditions": {
                  "name": "Is Entity a Battle Event/Summon",
                  "target": "Use Prior Target(s) Defined",
                  "invertCondition": true
                }
              }
            ],
            "compareValue": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent%</span>&nbsp;",
            "minOrMax": "Min"
          },
          {
            "name": "Compare: Variable",
            "target": "Use Prior Target(s) Defined",
            "value1": "CurrentHP",
            "compareType": ">",
            "value2": 0
          }
        ]
      },
      "ifTargetFound": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": "Use Prior Target(s) Defined",
            "value1": "CurrentHP%",
            "compareType": "<=",
            "value2": {
              "operator": "Variables[0] (0.5) || RETURN",
              "displayLines": "0.5",
              "constants": [],
              "variables": [
                0.5
              ]
            }
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "Luocha_Passive01_HealHPCD[<span class=\"descriptionNumberColor\">Prayer of Abyss Flower</span>]",
              "duration": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              }
            },
            {
              "name": "Remove Events/Bonuses",
              "to": "All Team Members(In Context, with Untargetable)",
              "modifier": "Luocha_InsertAbility02_Mark"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": "Caster",
              "modifier": "Luocha_InsertAbility02_Retarget"
            },
            "Deleted bullshit",
            {
              "name": "Trigger Ability",
              "from": "Caster",
              "inherentTarget": "Use Prior Target(s) Defined",
              "ability": "Luocha_Ability02_Part02",
              "isTrigger": true
            }
          ],
          "failed": [
            {
              "name": "Remove Events/Bonuses",
              "to": "All Team Members(In Context, with Untargetable)",
              "modifier": "Luocha_InsertAbility02_Mark"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": "Caster",
              "modifier": "Luocha_InsertAbility02_Retarget"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "IsInserAbilityTrigger",
              "value": 0
            }
          ]
        }
      ]
    }
  ],
  "onAbort": [
    {
      "name": "Remove Events/Bonuses",
      "to": "All Team Members(In Context, with Untargetable)",
      "modifier": "Luocha_InsertAbility02_Mark"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": "Caster",
      "modifier": "Luocha_InsertAbility02_Retarget"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "IsInserAbilityTrigger",
      "value": 0
    },
    {
      "name": "IF",
      "conditions": {
        "name": "OR",
        "conditionList": [
          {
            "name": "Has Flag",
            "target": "Caster",
            "flagName": "STAT_CTRL"
          },
          {
            "name": "Has Flag",
            "target": "Caster",
            "flagName": "DisableAction"
          }
        ]
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": "Caster",
            "modifier": "Luocha_Passive01_InsertMark"
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": "Caster",
              "modifier": "Luocha_Passive01_InsertMark"
            },
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "Luocha_Passive01_DisableActionInsertMark"
            }
          ]
        }
      ]
    }
  ],
  "references": []
}