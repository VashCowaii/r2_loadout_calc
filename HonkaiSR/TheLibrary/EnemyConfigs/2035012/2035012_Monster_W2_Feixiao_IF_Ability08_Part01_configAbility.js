const configAbility = {
  "fileName": "2035012_Monster_W2_Feixiao_IF_Ability08_Part01",
  "childAbilityList": [
    "2035012_Monster_W2_Feixiao_Ability08_Camera",
    "2035012_Monster_W2_Feixiao_IF_Ability08_Part01",
    "2035012_Monster_W2_Feixiao_IF_Ability08_Part02"
  ],
  "skillTrigger": "Skill08",
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
      "ability": "Monster_W2_Feixiao_IF_Ability08_Part02",
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