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
      "value": 0,
      "variableName": "_index"
    },
    {
      "name": "IF",
      "conditions": "Active: Fast-Forward Animations",
      "passed": [
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">CEIL</span>((HitCount / 2))"
          },
          "variableName": "_runtime_hitcount"
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "HitCount"
          },
          "variableName": "_runtime_hitcount"
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "((_deltaFrame - _runtime_hitcount) / (ENEMIES_OBJECT_UNUSED__249 - 1))"
      },
      "variableName": "_deltaFrame"
    },
    {
      "name": "Looped Event",
      "maxLoops": {
        "displayLines": "ENEMIES_OBJECT_UNUSED__249"
      },
      "execute": [
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(_index + 1)"
          },
          "variableName": "_index"
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