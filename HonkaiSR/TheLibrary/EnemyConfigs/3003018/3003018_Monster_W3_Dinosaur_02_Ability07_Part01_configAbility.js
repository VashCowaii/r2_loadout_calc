const configAbility = {
  "fileName": "3003018_Monster_W3_Dinosaur_02_Ability07_Part01",
  "childAbilityList": [
    "3003018_Monster_W3_Dinosaur_02_Ability07_Camera",
    "3003018_Monster_W3_Dinosaur_02_Ability07_Part01",
    "3003018_Monster_W3_Dinosaur_02_Ability07_Part02"
  ],
  "skillTrigger": "Skill07",
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
      "ability": "Monster_W3_Dinosaur_02_Ability07_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}