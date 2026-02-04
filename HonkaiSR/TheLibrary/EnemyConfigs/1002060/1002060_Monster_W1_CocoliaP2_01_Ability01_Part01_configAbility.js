const configAbility = {
  "fileName": "1002060_Monster_W1_CocoliaP2_01_Ability01_Part01",
  "childAbilityList": [
    "1002060_Monster_W1_CocoliaP2_01_Ability01_Part01",
    "1002060_Monster_W1_CocoliaP2_01_Ability01_Part02",
    "1002060_Monster_W1_CocoliaP2_01_Ability01_Camera"
  ],
  "skillTrigger": "Skill01",
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
      "ability": "Monster_W1_CocoliaP2_01_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}