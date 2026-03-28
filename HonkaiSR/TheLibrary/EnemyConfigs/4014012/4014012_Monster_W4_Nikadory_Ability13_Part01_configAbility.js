const configAbility = {
  "fileName": "4014012_Monster_W4_Nikadory_Ability13_Part01",
  "childAbilityList": [
    "4014012_Monster_W4_Nikadory_Ability13_Camera",
    "4014012_Monster_W4_Nikadory_Ability13_Part01",
    "4014012_Monster_W4_Nikadory_Ability13_Part02"
  ],
  "skillTrigger": "Skill13",
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
      "ability": "Monster_W4_Nikadory_Ability13_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}