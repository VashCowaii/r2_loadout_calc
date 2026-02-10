const configAbility = {
  "fileName": "8032034_Monster_W3_AventurinePart_Ability03_Part01",
  "childAbilityList": [
    "8032034_Monster_W3_AventurinePart_Ability03_Part01",
    "8032034_Monster_W3_AventurinePart_Ability03_Part02"
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
      "inherentTarget": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "ability": "Monster_W3_AventurinePart_Ability03_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}