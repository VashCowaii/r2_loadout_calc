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
      "functionName": "<a class=\"gTempYellow\" id=\"294638745\">function_Evernight_Group_SizeControl_Perf</a>"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"-1711321550\">function_Evernight_Group_FollowControl_00</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster's Summoner}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-889130257\">Evernight_UltraMode</a>[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]"
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
              "functionName": "<a class=\"gTempYellow\" id=\"996483879\">Servant_Evernight_Ability12_TriggerAnim_Tuowei</a>"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1426186916\">Servant_Evernight_Ability12_TriggerAnim_Man</a>"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1684581797\">Servant_Evernight_Ability12_TriggerAnim_01</a>"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1667804178\">Servant_Evernight_Ability12_TriggerAnim_02</a>"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1651026559\">Servant_Evernight_Ability12_TriggerAnim_03</a>"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1634248940\">Servant_Evernight_Ability12_TriggerAnim_04</a>"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1617471321\">Servant_Evernight_Ability12_TriggerAnim_05</a>"
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
              "functionName": "<a class=\"gTempYellow\" id=\"1828267341\">Servant_Evernight_Ability11_TriggerAnim_Man</a>"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1582823768\">Servant_Evernight_Ability11_TriggerAnim_01</a>"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1532490911\">Servant_Evernight_Ability11_TriggerAnim_02</a>"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1549268530\">Servant_Evernight_Ability11_TriggerAnim_03</a>"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1498935673\">Servant_Evernight_Ability11_TriggerAnim_04</a>"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1515713292\">Servant_Evernight_Ability11_TriggerAnim_05</a>"
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
        "modifier": "<a class=\"gModGreen\" id=\"-889130257\">Evernight_UltraMode</a>[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]"
      }
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"-1551336747\">function_Evernight_Group_FollowControl_STB</a>"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"-1946909591\">function_Evernight_Group_SizeControl_STB</a>"
    }
  ],
  "functions": [
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__1828267341\">Servant_Evernight_Ability11_TriggerAnim_Man</a>",
      "parse": []
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1582823768\">Servant_Evernight_Ability11_TriggerAnim_01</a>",
      "parse": []
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1532490911\">Servant_Evernight_Ability11_TriggerAnim_02</a>",
      "parse": []
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1549268530\">Servant_Evernight_Ability11_TriggerAnim_03</a>",
      "parse": []
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1498935673\">Servant_Evernight_Ability11_TriggerAnim_04</a>",
      "parse": []
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1515713292\">Servant_Evernight_Ability11_TriggerAnim_05</a>",
      "parse": []
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__996483879\">Servant_Evernight_Ability12_TriggerAnim_Tuowei</a>",
      "parse": []
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1426186916\">Servant_Evernight_Ability12_TriggerAnim_Man</a>",
      "parse": []
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1684581797\">Servant_Evernight_Ability12_TriggerAnim_01</a>",
      "parse": []
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1667804178\">Servant_Evernight_Ability12_TriggerAnim_02</a>",
      "parse": []
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1651026559\">Servant_Evernight_Ability12_TriggerAnim_03</a>",
      "parse": []
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1634248940\">Servant_Evernight_Ability12_TriggerAnim_04</a>",
      "parse": []
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1617471321\">Servant_Evernight_Ability12_TriggerAnim_05</a>",
      "parse": []
    }
  ],
  "references": []
}