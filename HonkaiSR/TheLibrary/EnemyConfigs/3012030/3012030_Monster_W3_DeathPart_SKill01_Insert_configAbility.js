const configAbility = {
  "fileName": "3012030_Monster_W3_DeathPart_SKill01_Insert",
  "childAbilityList": [
    "3012030_Monster_W3_DeathPart_SKill01_Insert",
    "3012030_Monster_W3_DeathPart_SKill01_Part02",
    "3012030_Monster_W3_DeathPart_Ability01_Camera"
  ],
  "skillTrigger": "Skill01",
  "abilityType": "Skill",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "UI Display Event",
      "popUpText": "Slumber Awakening"
    },
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Monster_W3_DeathPart_SKill01_Part02",
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