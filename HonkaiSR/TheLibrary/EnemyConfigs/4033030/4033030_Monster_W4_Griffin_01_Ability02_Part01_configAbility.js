const configAbility = {
  "fileName": "4033030_Monster_W4_Griffin_01_Ability02_Part01",
  "childAbilityList": [
    "4033030_Monster_W4_Griffin_01_Ability02_Camera",
    "4033030_Monster_W4_Griffin_01_Ability02_Part01",
    "4033030_Monster_W4_Griffin_01_Ability02_Part02"
  ],
  "skillTrigger": "Skill02",
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
      "ability": "Monster_W4_Griffin_01_Ability02_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}