const configAbility = {
  "fileName": "3003015_Monster_W3_Dinosaur_02_IF_Ability09_Part01",
  "childAbilityList": [
    "3003015_Monster_W3_Dinosaur_02_IF_Ability09_Part01",
    "3003015_Monster_W3_Dinosaur_02_IF_Ability09_Part02",
    "3003015_Monster_W3_Dinosaur_02_Ability09_Camera",
    "3003015_Monster_W3_Dinosaur_02_IF_Ability09_Insert_Part01",
    "3003015_Monster_W3_Dinosaur_02_IF_Ability09_Insert_Part02",
    "3003015_Monster_W3_Dinosaur_02_IF_Ability09_Insert_Camera"
  ],
  "skillTrigger": "Skill09",
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
      "ability": "Monster_W3_Dinosaur_02_IF_Ability09_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}