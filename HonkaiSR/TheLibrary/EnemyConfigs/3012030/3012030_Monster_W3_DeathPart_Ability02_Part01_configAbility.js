const configAbility = {
  "fileName": "3012030_Monster_W3_DeathPart_Ability02_Part01",
  "childAbilityList": [
    "3012030_Monster_W3_DeathPart_Ability02_Part01",
    "3012030_Monster_W3_DeathPart_Ability02_Part02",
    "3012030_Monster_W3_DeathPart_Ability02_Camera"
  ],
  "skillTrigger": "Skill02",
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
      "ability": "Monster_W3_DeathPart_Ability02_Part02",
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