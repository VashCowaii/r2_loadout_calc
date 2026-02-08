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
      "functionName": "<a class=\"gTempYellow\" id=\"294638745\">function_Evernight_Group_SizeControl_Perf</a>"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"-1711321550\">function_Evernight_Group_FollowControl_00</a>"
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
          "functionName": "<a class=\"gTempYellow\" id=\"575337399\">Servant_Evernight_Ability01_TriggerEffect</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1580786153\">Servant_Evernight_Ability01_TriggerAnim_01</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1564008534\">Servant_Evernight_Ability01_TriggerAnim_02</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1547230915\">Servant_Evernight_Ability01_TriggerAnim_03</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1664674248\">Servant_Evernight_Ability01_TriggerAnim_04</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1647896629\">Servant_Evernight_Ability01_TriggerAnim_05</a>"
        }
      ]
    }
  ],
  "functions": [
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__575337399\">Servant_Evernight_Ability01_TriggerEffect</a>",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Summoner}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-889130257\">Evernight_UltraMode</a>[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]"
          }
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1580786153\">Servant_Evernight_Ability01_TriggerAnim_01</a>",
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
                  "functionName": "<a class=\"gTempYellow\" id=\"-1551336747\">function_Evernight_Group_FollowControl_STB</a>"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1946909591\">function_Evernight_Group_SizeControl_STB</a>"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1551336747\">function_Evernight_Group_FollowControl_STB</a>"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1946909591\">function_Evernight_Group_SizeControl_STB</a>"
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1564008534\">Servant_Evernight_Ability01_TriggerAnim_02</a>",
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
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1547230915\">Servant_Evernight_Ability01_TriggerAnim_03</a>",
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
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1664674248\">Servant_Evernight_Ability01_TriggerAnim_04</a>",
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
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1647896629\">Servant_Evernight_Ability01_TriggerAnim_05</a>",
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