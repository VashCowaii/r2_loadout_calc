const configAbility = {
  "fileName": "1005012_Monster_W1_CocoliaP2_Ability10_Part01",
  "childAbilityList": [
    "1005012_Monster_W1_CocoliaP2_Ability10_Camera",
    "1005012_Monster_W1_CocoliaP2_Ability10_Part01",
    "1005012_Monster_W1_CocoliaP2_Ability10_Part02"
  ],
  "skillTrigger": "Skill10",
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
      "ability": "Monster_W1_CocoliaP2_Ability10_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}