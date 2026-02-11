const configAbility = {
  "fileName": "1005011_Monster_W1_CocoliaP2_Ability09_Part01",
  "childAbilityList": [
    "1005011_Monster_W1_CocoliaP2_Ability09_Camera",
    "1005011_Monster_W1_CocoliaP2_Ability09_Part01",
    "1005011_Monster_W1_CocoliaP2_Ability09_Part02"
  ],
  "skillTrigger": "Skill09",
  "abilityType": "Skill",
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Monster_W1_CocoliaP2_Ability09_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}