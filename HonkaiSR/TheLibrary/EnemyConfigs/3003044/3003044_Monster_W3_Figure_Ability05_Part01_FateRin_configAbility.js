const configAbility = {
  "fileName": "3003044_Monster_W3_Figure_Ability05_Part01_FateRin",
  "childAbilityList": [
    "3003044_Monster_W3_Figure_Ability05_Camera",
    "3003044_Monster_W3_Figure_Ability05_Part01_FateRin",
    "3003044_Monster_W3_Figure_Ability05_Part02_FateRin"
  ],
  "skillTrigger": "Skill02",
  "abilityType": "Basic ATK",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "FirstTime",
        "compareType": "=",
        "value2": 1
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "FirstTime",
          "value": 0
        }
      ]
    },
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Monster_W3_Figure_Ability05_Part02_FateRin",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}