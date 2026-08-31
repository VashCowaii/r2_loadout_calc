const configAbility = {
  "fileName": "8034010_Monster_W3_Aventurine_Ability08_Part01",
  "childAbilityList": [
    "8034010_Monster_W3_Aventurine_Ability08_Camera",
    "8034010_Monster_W3_Aventurine_Ability08_Part01",
    "8034010_Monster_W3_Aventurine_Ability08_Part02"
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
      "ability": "Monster_W3_Aventurine_Ability08_Part02",
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