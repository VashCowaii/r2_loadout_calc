const configAbility = {
  "fileName": "4023020_Monster_W4_Unicorn_Ability04_Part01",
  "childAbilityList": [
    "4023020_Monster_W4_Unicorn_Ability04_Part01",
    "4023020_Monster_W4_Unicorn_Ability04_Part02",
    "4023020_Monster_W4_Unicorn_Ability04_Camera",
    "4023020_Monster_W4_Unicorn_Ability04_Camera02"
  ],
  "skillTrigger": "Skill04",
  "abilityType": "Skill",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Monster_W4_Unicorn_Ability04_Part02",
      "isTrigger": true
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Flag",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "flagName": "Taunt",
        "invertCondition": true
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
    "primaryTarget": "{{Ability Target List}}"
  },
  "realTargetData": {
    "primaryTarget": "Select Hostile Target",
    "targetIsVariable": true
  },
  "references": []
}