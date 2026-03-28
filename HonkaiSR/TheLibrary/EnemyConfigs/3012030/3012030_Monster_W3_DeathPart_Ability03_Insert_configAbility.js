const configAbility = {
  "fileName": "3012030_Monster_W3_DeathPart_Ability03_Insert",
  "childAbilityList": [
    "3012030_Monster_W3_DeathPart_Ability03_Insert",
    "3012030_Monster_W3_DeathPart_Ability03_Part02",
    "3012030_Monster_W3_DeathPart_Ability03_Part03",
    "3012030_Monster_W3_DeathPart_Ability03_Camera"
  ],
  "skillTrigger": "Skill03",
  "abilityType": "Skill",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Level Entity}}"
            },
            "value1": "DeathPart_Appear_Flag",
            "compareType": "=",
            "value2": 1,
            "contextScope": "TargetEntity"
          }
        ]
      },
      "passed": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W3_DeathPart_Ability03_Part03",
          "isTrigger": true
        }
      ],
      "failed": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "scope": "TargetEntity",
          "variableName": "DeathPart_Appear_Flag",
          "value": 1
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W3_DeathPart_Ability03_Part02",
          "isTrigger": true
        }
      ]
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}