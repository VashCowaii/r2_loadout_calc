const configAbility = {
  "fileName": "1005011_Monster_W1_CocoliaP2_Ability11_Part01",
  "childAbilityList": [
    "1005011_Monster_W1_CocoliaP2_Ability11_Part01",
    "1005011_Monster_W1_CocoliaP2_Ability11_Part02"
  ],
  "skillTrigger": "Skill11",
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
      "ability": "Monster_W1_CocoliaP2_Ability11_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}