const configAbility = {
  "fileName": "4033031_Monster_W4_Griffin_01_LocalLegend_Ability01_Part01",
  "childAbilityList": [
    "4033031_Monster_W4_Griffin_01_Ability01_Camera",
    "4033031_Monster_W4_Griffin_01_LocalLegend_Ability01_Part01",
    "4033031_Monster_W4_Griffin_01_LocalLegend_Ability01_Part02"
  ],
  "skillTrigger": "Skill01",
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
      "inherentTarget": {
        "name": "Target Name",
        "target": "{{Player Team All(Left to Right)}}"
      },
      "ability": "Monster_W4_Griffin_01_LocalLegend_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}