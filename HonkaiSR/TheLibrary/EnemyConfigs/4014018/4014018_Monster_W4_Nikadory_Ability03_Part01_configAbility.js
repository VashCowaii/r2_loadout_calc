const configAbility = {
  "fileName": "4014018_Monster_W4_Nikadory_Ability03_Part01",
  "childAbilityList": [
    "4014018_Monster_W4_Nikadory_Ability03_Camera",
    "4014018_Monster_W4_Nikadory_Ability03_Part01",
    "4014018_Monster_W4_Nikadory_Ability03_Part02",
    "4014018_Monster_W4_Nikadory_Ability03_Insert_Camera",
    "4014018_Monster_W4_Nikadory_FT_Ability03_Insert_Part01",
    "4014018_Monster_W4_Nikadory_FT_Ability03_Insert_Part02"
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
  "realTargetData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}