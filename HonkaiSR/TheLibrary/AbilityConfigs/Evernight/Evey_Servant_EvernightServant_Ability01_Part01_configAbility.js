const configAbility = {
  "fileName": "Evey_Servant_EvernightServant_Ability01_Part01",
  "childAbilityList": [
    "Evey_Servant_EvernightServant_Ability01_Part01",
    "Evey_Servant_EvernightServant_Ability01_Part02",
    "Evey_Servant_EvernightServant_Ability01_Camera"
  ],
  "skillTrigger": "Skill01",
  "abilityType": "Memosprite",
  "energy": 20,
  "toughnessList": [
    10,
    0,
    0
  ],
  "parse": [
    {
      "name": "Use Custom Character Function",
      "functionName": "function_Evernight_Group_SizeControl_Perf"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "function_Evernight_Group_FollowControl_00"
    },
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Servant_EvernightServant_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit",
    {
      "name": "Trigger Multiple Functions",
      "variables": {},
      "functionList": [
        {
          "name": "Use Custom Character Function",
          "functionName": "Servant_Evernight_Ability01_TriggerEffect"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Servant_Evernight_Ability01_TriggerAnim_01"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Servant_Evernight_Ability01_TriggerAnim_02"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Servant_Evernight_Ability01_TriggerAnim_03"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Servant_Evernight_Ability01_TriggerAnim_04"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Servant_Evernight_Ability01_TriggerAnim_05"
        }
      ]
    }
  ],
  "functions": [
    {
      "name": "CharacterFunctions",
      "functionName": "Servant_Evernight_Ability01_TriggerEffect",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Summoner}}"
            },
            "modifier": "Evernight_UltraMode[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]"
          }
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "Servant_Evernight_Ability01_TriggerAnim_01",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Death Animation Completed",
            "team": "Enemy Team",
            "type": "Team Characters",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "WAIT FOR",
              "condition": {
                "name": "Death Animation Completed",
                "team": "Enemy Team",
                "type": "Team Characters"
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Battle is Over"
              },
              "failed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "function_Evernight_Group_FollowControl_STB"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "function_Evernight_Group_SizeControl_STB"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "function_Evernight_Group_FollowControl_STB"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "function_Evernight_Group_SizeControl_STB"
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "Servant_Evernight_Ability01_TriggerAnim_02",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Death Animation Completed",
            "team": "Enemy Team",
            "type": "Team Characters",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "WAIT FOR",
              "condition": {
                "name": "Death Animation Completed",
                "team": "Enemy Team",
                "type": "Team Characters"
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Battle is Over"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "Servant_Evernight_Ability01_TriggerAnim_03",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Death Animation Completed",
            "team": "Enemy Team",
            "type": "Team Characters",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "WAIT FOR",
              "condition": {
                "name": "Death Animation Completed",
                "team": "Enemy Team",
                "type": "Team Characters"
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Battle is Over"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "Servant_Evernight_Ability01_TriggerAnim_04",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Death Animation Completed",
            "team": "Enemy Team",
            "type": "Team Characters",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "WAIT FOR",
              "condition": {
                "name": "Death Animation Completed",
                "team": "Enemy Team",
                "type": "Team Characters"
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Battle is Over"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "Servant_Evernight_Ability01_TriggerAnim_05",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Death Animation Completed",
            "team": "Enemy Team",
            "type": "Team Characters",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "WAIT FOR",
              "condition": {
                "name": "Death Animation Completed",
                "team": "Enemy Team",
                "type": "Team Characters"
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Battle is Over"
              }
            }
          ]
        }
      ]
    }
  ],
  "references": []
}