const configAbility = {
  "fileName": "1005010_Monster_W1_CocoliaP2_Ability06_Part01",
  "childAbilityList": [
    "1005010_Monster_W1_CocoliaP2_Ability06_Camera",
    "1005010_Monster_W1_CocoliaP2_Ability06_Part01",
    "1005010_Monster_W1_CocoliaP2_Ability06_Part02"
  ],
  "skillTrigger": "Skill06",
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
      "ability": "Monster_W1_CocoliaP2_Ability06_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}