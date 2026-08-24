const configAbility = {
  "fileName": "8015050_Monster_W5_AsatPramad_Ability06_Part01",
  "childAbilityList": [
    "8015050_Monster_W5_AsatPramad_Ability06_Part01",
    "8015050_Monster_W5_AsatPramad_Ability06_Part02",
    "8015050_Monster_W5_AsatPramad_Ability06_Camera"
  ],
  "skillTrigger": "Skill06",
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
      "ability": "Monster_W5_AsatPramad_Ability06_Part02",
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