const configAbility = {
  "fileName": "4015010_Monster_W4_DawnsEye_Ability03_Part01",
  "childAbilityList": [
    "4015010_Monster_W4_DawnsEye_Ability03P1_Camera",
    "4015010_Monster_W4_DawnsEye_Ability03_Part01",
    "4015010_Monster_W4_DawnsEye_Ability03_Part02"
  ],
  "skillTrigger": "Skill03P1",
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
      "ability": "Monster_W4_DawnsEye_Ability03_Part02",
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