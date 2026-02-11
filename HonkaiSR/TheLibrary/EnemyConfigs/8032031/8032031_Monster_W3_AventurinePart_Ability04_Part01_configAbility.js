const configAbility = {
  "fileName": "8032031_Monster_W3_AventurinePart_Ability04_Part01",
  "childAbilityList": [
    "8032031_Monster_W3_AventurinePart_Ability04_Camera",
    "8032031_Monster_W3_AventurinePart_Ability04_Part01",
    "8032031_Monster_W3_AventurinePart_Ability04_Part02"
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
      "inherentTarget": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "ability": "Monster_W3_AventurinePart_Ability04_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}