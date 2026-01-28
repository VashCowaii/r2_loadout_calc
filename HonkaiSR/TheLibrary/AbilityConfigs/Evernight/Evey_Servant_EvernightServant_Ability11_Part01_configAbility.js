const configAbility = {
  "fileName": "Evey_Servant_EvernightServant_Ability11_Part01",
  "childAbilityList": [
    "Evey_Servant_EvernightServant_Ability11_Part01",
    "Evey_Servant_EvernightServant_Ability11_Part02",
    "Evey_Servant_EvernightServant_Ability11_Camera",
    "Evey_Servant_EvernightServant_Ability12_Part02",
    "Evey_Servant_EvernightServant_Ability12_Camera",
    "Evey_Servant_EvernightServant_Ability11_EnterReady"
  ],
  "skillTrigger": "Skill11",
  "abilityType": "Memosprite",
  "energy": 10,
  "toughnessList": [
    30,
    20,
    0
  ],
  "parse": [
    {
      "name": "Define Custom Variable (VFX)",
      "variableName": "Is_S11_Ready",
      "value": 0
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "function_Evernight_Group_SizeControl_Perf"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "function_Evernight_Group_FollowControl_00"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster's Summoner}}"
        },
        "modifier": "Evernight_UltraMode[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]"
      },
      "passed": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Servant_EvernightServant_Ability12_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        {
          "name": "Trigger Multiple Functions",
          "variables": {},
          "functionList": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Servant_Evernight_Ability12_TriggerAnim_Tuowei"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "Servant_Evernight_Ability12_TriggerAnim_Man"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "Servant_Evernight_Ability12_TriggerAnim_01"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "Servant_Evernight_Ability12_TriggerAnim_02"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "Servant_Evernight_Ability12_TriggerAnim_03"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "Servant_Evernight_Ability12_TriggerAnim_04"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "Servant_Evernight_Ability12_TriggerAnim_05"
            }
          ]
        }
      ],
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target Count SUM",
            "target": {
              "name": "Target Name",
              "target": "{{Hostile Entities(AOE)}}"
            },
            "conditions": {
              "name": "Compare: Monster Rank",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "compareType": ">=",
              "value2": 5
            }
          }
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Servant_EvernightServant_Ability11_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        {
          "name": "Trigger Multiple Functions",
          "variables": {},
          "functionList": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Servant_Evernight_Ability11_TriggerAnim_Man"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "Servant_Evernight_Ability11_TriggerAnim_01"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "Servant_Evernight_Ability11_TriggerAnim_02"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "Servant_Evernight_Ability11_TriggerAnim_03"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "Servant_Evernight_Ability11_TriggerAnim_04"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "Servant_Evernight_Ability11_TriggerAnim_05"
            }
          ]
        }
      ]
    },
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
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "function_Evernight_Group_FollowControl_STB"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "function_Evernight_Group_SizeControl_STB"
    }
  ],
  "functions": [
    {
      "name": "CharacterFunctions",
      "functionName": "Servant_Evernight_Ability11_TriggerAnim_Man",
      "parse": []
    },
    {
      "name": "CharacterFunctions",
      "functionName": "Servant_Evernight_Ability11_TriggerAnim_01",
      "parse": []
    },
    {
      "name": "CharacterFunctions",
      "functionName": "Servant_Evernight_Ability11_TriggerAnim_02",
      "parse": []
    },
    {
      "name": "CharacterFunctions",
      "functionName": "Servant_Evernight_Ability11_TriggerAnim_03",
      "parse": []
    },
    {
      "name": "CharacterFunctions",
      "functionName": "Servant_Evernight_Ability11_TriggerAnim_04",
      "parse": []
    },
    {
      "name": "CharacterFunctions",
      "functionName": "Servant_Evernight_Ability11_TriggerAnim_05",
      "parse": []
    },
    {
      "name": "CharacterFunctions",
      "functionName": "Servant_Evernight_Ability12_TriggerAnim_Tuowei",
      "parse": []
    },
    {
      "name": "CharacterFunctions",
      "functionName": "Servant_Evernight_Ability12_TriggerAnim_Man",
      "parse": []
    },
    {
      "name": "CharacterFunctions",
      "functionName": "Servant_Evernight_Ability12_TriggerAnim_01",
      "parse": []
    },
    {
      "name": "CharacterFunctions",
      "functionName": "Servant_Evernight_Ability12_TriggerAnim_02",
      "parse": []
    },
    {
      "name": "CharacterFunctions",
      "functionName": "Servant_Evernight_Ability12_TriggerAnim_03",
      "parse": []
    },
    {
      "name": "CharacterFunctions",
      "functionName": "Servant_Evernight_Ability12_TriggerAnim_04",
      "parse": []
    },
    {
      "name": "CharacterFunctions",
      "functionName": "Servant_Evernight_Ability12_TriggerAnim_05",
      "parse": []
    }
  ],
  "references": []
}