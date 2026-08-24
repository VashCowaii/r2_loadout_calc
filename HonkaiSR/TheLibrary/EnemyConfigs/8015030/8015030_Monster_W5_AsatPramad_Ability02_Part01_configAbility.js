const configAbility = {
  "fileName": "8015030_Monster_W5_AsatPramad_Ability02_Part01",
  "childAbilityList": [
    "8015030_Monster_W5_AsatPramad_Ability02_Part01",
    "8015030_Monster_W5_AsatPramad_Ability02_Part02",
    "8015030_Monster_W5_AsatPramad_Ability02_Camera",
    "8015030_Monster_W5_AsatPramad_Ability02_1_Camera"
  ],
  "skillTrigger": "Skill02",
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
      "ability": "Monster_W5_AsatPramad_Ability02_Part02",
      "isTrigger": true
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "CurrentFace",
        "compareType": "=",
        "value2": 0
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
    "primaryTarget": "Select Hostile Target"
  },
  "references": []
}