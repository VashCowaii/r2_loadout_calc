const configAbility = {
  "fileName": "8015050_Monster_W5_AsatPramad_Ability01_Part01",
  "childAbilityList": [
    "8015050_Monster_W5_AsatPramad_Ability01_Part01",
    "8015050_Monster_W5_AsatPramad_Ability01_Part02",
    "8015050_Monster_W5_AsatPramad_Ability01_Camera"
  ],
  "skillTrigger": "Skill01",
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
      "ability": "Monster_W5_AsatPramad_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}