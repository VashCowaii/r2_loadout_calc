const configAbility = {
  "fileName": "Evanescia_Evanescia_Ability03_Part01",
  "childAbilityList": [
    "Evanescia_Evanescia_Ability03_EnterReady",
    "Evanescia_Evanescia_Ability03_Camera",
    "Evanescia_Evanescia_Ability03_Part01",
    "Evanescia_Evanescia_Ability03_Part02"
  ],
  "skillTrigger": "Skill03",
  "abilityType": "Ultimate",
  "energy": 5,
  "toughnessList": [
    5,
    20,
    0
  ],
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Evanescia_Ability03_Part02",
      "isTrigger": true
    },
    "Deleted bullshit",
    {
      "name": "Define Custom Variable",
      "variableName": "_index",
      "value": 0
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Active: Fast-Forward Animations"
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "_runtime_hitcount",
          "value": {
            "operator": "Variables[0] (CEIL) || Variables[1] (HitCount) || Constants[0] (2) || DIV || PARAM_1 || FUNCTION || RETURN",
            "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">CEIL</span>((HitCount / 2))",
            "constants": [
              2
            ],
            "variables": [
              "CEIL",
              "HitCount"
            ]
          }
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "variableName": "_runtime_hitcount",
          "value": {
            "operator": "Variables[0] (HitCount) || RETURN",
            "displayLines": "HitCount",
            "constants": [],
            "variables": [
              "HitCount"
            ]
          }
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "variableName": "_deltaFrame",
      "value": {
        "operator": "Variables[0] (_deltaFrame) || Variables[1] (_runtime_hitcount) || SUB || Variables[2] (ENEMIES_OBJECT_UNUSED__249) || Constants[0] (1) || SUB || DIV || RETURN",
        "displayLines": "((_deltaFrame - _runtime_hitcount) / (ENEMIES_OBJECT_UNUSED__249 - 1))",
        "constants": [
          1
        ],
        "variables": [
          "_deltaFrame",
          "_runtime_hitcount",
          "ENEMIES_OBJECT_UNUSED__249"
        ]
      }
    },
    {
      "name": "Looped Event",
      "maxLoops": {
        "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__249) || RETURN",
        "displayLines": "ENEMIES_OBJECT_UNUSED__249",
        "constants": [],
        "variables": [
          "ENEMIES_OBJECT_UNUSED__249"
        ]
      },
      "Event": [
        {
          "name": "Define Custom Variable",
          "variableName": "_index",
          "value": {
            "operator": "Variables[0] (_index) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(_index + 1)",
            "constants": [
              1
            ],
            "variables": [
              "_index"
            ]
          }
        }
      ]
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  }
}