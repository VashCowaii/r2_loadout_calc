const configAbility = {
  "fileName": "Evernight_Evernight_Ability02_2_Servant",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Evernight_UltraMode_Effect_Normal"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "function_Evernight_Group_FollowControl_00"
    },
    {
      "name": "Trigger Multiple Functions",
      "variables": {},
      "functionList": [
        {
          "name": "Use Custom Character Function",
          "functionName": "Evernight_Ability02_2_TriggerAnim_Pos"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Evernight_Ability02_2_TriggerAnim_01"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Evernight_Ability02_2_TriggerAnim_02"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Evernight_Ability02_2_TriggerAnim_03"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Evernight_Ability02_2_TriggerAnim_04"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Evernight_Ability02_2_TriggerAnim_05"
        }
      ]
    }
  ],
  "functions": [
    {
      "name": "CharacterFunctions",
      "functionName": "Evernight_Ability02_2_TriggerAnim_Pos",
      "parse": []
    },
    {
      "name": "CharacterFunctions",
      "functionName": "Evernight_Ability02_2_TriggerAnim_01",
      "parse": [
        {
          "name": "Use Custom Character Function",
          "functionName": "function_Evernight_Group_FollowControl_STB"
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "Evernight_Ability02_2_TriggerAnim_02",
      "parse": []
    },
    {
      "name": "CharacterFunctions",
      "functionName": "Evernight_Ability02_2_TriggerAnim_03",
      "parse": []
    },
    {
      "name": "CharacterFunctions",
      "functionName": "Evernight_Ability02_2_TriggerAnim_04",
      "parse": []
    },
    {
      "name": "CharacterFunctions",
      "functionName": "Evernight_Ability02_2_TriggerAnim_05",
      "parse": []
    }
  ],
  "references": []
}