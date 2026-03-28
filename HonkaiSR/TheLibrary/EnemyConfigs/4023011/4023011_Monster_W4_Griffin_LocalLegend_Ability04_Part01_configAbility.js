const configAbility = {
  "fileName": "4023011_Monster_W4_Griffin_LocalLegend_Ability04_Part01",
  "childAbilityList": [
    "4023011_Monster_W4_Griffin_LocalLegend_Ability04_Part01",
    "4023011_Monster_W4_Griffin_LocalLegend_Ability04_Part02",
    "4023011_Monster_W4_Griffin_LocalLegend_Ability04_Camera"
  ],
  "skillTrigger": "Skill04",
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
      "ability": "Monster_W4_Griffin_LocalLegend_Ability04_Part02",
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