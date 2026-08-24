const configAbility = {
  "fileName": "8015030_Monster_W5_AsatPramad_Ability07_Part01",
  "childAbilityList": [
    "8015030_Monster_W5_AsatPramad_Ability07_Part01",
    "8015030_Monster_W5_AsatPramad_Ability07_Part02",
    "8015030_Monster_W5_AsatPramad_Ability07_Camera"
  ],
  "skillTrigger": "Skill07",
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
      "ability": "Monster_W5_AsatPramad_Ability07_Part02",
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