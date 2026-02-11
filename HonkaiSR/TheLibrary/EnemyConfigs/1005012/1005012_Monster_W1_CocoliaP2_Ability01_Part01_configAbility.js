const configAbility = {
  "fileName": "1005012_Monster_W1_CocoliaP2_Ability01_Part01",
  "childAbilityList": [
    "1005012_Monster_W1_CocoliaP2_Ability01_Camera",
    "1005012_Monster_W1_CocoliaP2_Ability01_Part01",
    "1005012_Monster_W1_CocoliaP2_Ability01_Part02"
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
      "ability": "Monster_W1_CocoliaP2_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}