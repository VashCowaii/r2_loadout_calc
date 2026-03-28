const configAbility = {
  "fileName": "3003011_Monster_W3_Dinosaur_Ability06_Part01",
  "childAbilityList": [
    "3003011_Monster_W3_Dinosaur_Ability06_Camera",
    "3003011_Monster_W3_Dinosaur_Ability06_Part01",
    "3003011_Monster_W3_Dinosaur_Ability06_Part02Crazy",
    "3003011_Monster_W3_Dinosaur_Ability06_Insert_Part01",
    "3003011_Monster_W3_Dinosaur_Ability06_Insert_Part02Crazy",
    "3003011_Monster_W3_Dinosaur_Ability06_Insert_Camera"
  ],
  "skillTrigger": "Skill06",
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
      "ability": "Monster_W3_Dinosaur_Ability06_Part02Crazy",
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