const configAbility = {
  "fileName": "3012040_Monster_W3_Ghost_Ability02_Part01",
  "childAbilityList": [
    "3012040_Monster_W3_Ghost_Ability02_Part01",
    "3012040_Monster_W3_Ghost_Ability02_Part02"
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
      "ability": "Monster_W3_Ghost_Ability02_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}