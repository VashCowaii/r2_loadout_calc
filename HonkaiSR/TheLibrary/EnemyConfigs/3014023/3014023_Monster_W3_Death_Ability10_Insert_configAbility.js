const configAbility = {
  "fileName": "3014023_Monster_W3_Death_Ability10_Insert",
  "childAbilityList": [
    "3014023_Monster_W3_Death_Ability10_Insert",
    "3014023_Monster_W3_Death_Ability10_Part02",
    "3014023_Monster_W3_Death_Ability10_1_Camera",
    "3014023_Monster_W3_Death_Ability10_2_Camera"
  ],
  "skillTrigger": "Skill10",
  "abilityType": "Basic ATK",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Monster_W3_Death_Ability10_Part02",
      "isTrigger": true
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "BonusAttackCounter",
        "compareType": "=",
        "value2": 1,
        "contextScope": "TargetEntity"
      },
      "passed": [
        "Deleted bullshit"
      ],
      "failed": [
        "Deleted bullshit"
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}