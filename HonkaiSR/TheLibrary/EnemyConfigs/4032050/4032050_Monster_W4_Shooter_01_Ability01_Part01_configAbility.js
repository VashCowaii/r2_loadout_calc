const configAbility = {
  "fileName": "4032050_Monster_W4_Shooter_01_Ability01_Part01",
  "childAbilityList": [
    "4032050_Monster_W4_Shooter_01_Ability01_Camera",
    "4032050_Monster_W4_Shooter_01_Ability01_Part01",
    "4032050_Monster_W4_Shooter_01_Ability01_Part02"
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
      "ability": "Monster_W4_Shooter_01_Ability01_Part02",
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