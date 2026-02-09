const configAbility = {
  "fileName": "1005012_Monster_W1_CocoliaP2_Ability04_Part01",
  "childAbilityList": [
    "1005012_Monster_W1_CocoliaP2_Ability04_Camera",
    "1005012_Monster_W1_CocoliaP2_Ability04_Part01",
    "1005012_Monster_W1_CocoliaP2_Ability04_Part02"
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
      "ability": "Monster_W1_CocoliaP2_Ability04_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}