const configAbility = {
  "fileName": "8015050_Monster_W5_AsatPramad_Ability08_Part01",
  "childAbilityList": [
    "8015050_Monster_W5_AsatPramad_Ability08_Part01",
    "8015050_Monster_W5_AsatPramad_Ability08_Part02",
    "8015050_Monster_W5_AsatPramad_Ability08_Camera",
    "8015050_Monster_W5_AsatPramad_Ability08_Assist_00",
    "8015050_Monster_W5_AsatPramad_Ability08_Assist_01"
  ],
  "skillTrigger": "Skill08",
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
      "ability": "Monster_W5_AsatPramad_Ability08_Part02",
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