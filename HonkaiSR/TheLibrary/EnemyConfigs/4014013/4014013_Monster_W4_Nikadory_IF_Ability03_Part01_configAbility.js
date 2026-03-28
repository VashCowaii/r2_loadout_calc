const configAbility = {
  "fileName": "4014013_Monster_W4_Nikadory_IF_Ability03_Part01",
  "childAbilityList": [
    "4014013_Monster_W4_Nikadory_IF_Ability03_Camera",
    "4014013_Monster_W4_Nikadory_IF_Ability03_Part01",
    "4014013_Monster_W4_Nikadory_Ability03_Part02"
  ],
  "skillTrigger": "Skill03",
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
      "ability": "Monster_W4_Nikadory_Ability03_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}