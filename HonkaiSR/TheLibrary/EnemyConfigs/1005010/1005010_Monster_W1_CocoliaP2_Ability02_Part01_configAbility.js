const configAbility = {
  "fileName": "1005010_Monster_W1_CocoliaP2_Ability02_Part01",
  "childAbilityList": [
    "1005010_Monster_W1_CocoliaP2_Ability02_Camera",
    "1005010_Monster_W1_CocoliaP2_Ability02_Part01",
    "1005010_Monster_W1_CocoliaP2_Ability02_Part02"
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
      "ability": "Monster_W1_CocoliaP2_Ability02_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}