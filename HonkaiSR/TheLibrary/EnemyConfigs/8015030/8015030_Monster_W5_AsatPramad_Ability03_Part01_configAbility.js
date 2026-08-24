const configAbility = {
  "fileName": "8015030_Monster_W5_AsatPramad_Ability03_Part01",
  "childAbilityList": [
    "8015030_Monster_W5_AsatPramad_Ability03_Part01",
    "8015030_Monster_W5_AsatPramad_Ability03_Part02",
    "8015030_Monster_W5_AsatPramad_Ability03_Camera",
    "8015030_Monster_W5_AsatPramad_Ability03_Insert_Part01",
    "8015030_Monster_W5_AsatPramad_Ability03_Insert_Part02"
  ],
  "skillTrigger": "Skill03",
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
      "ability": "Monster_W5_AsatPramad_Ability03_Part02",
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