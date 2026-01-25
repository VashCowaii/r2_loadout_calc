const configAbility = {
  "fileName": "1002030_Monster_W1_Soldier04_Ability02_Part01",
  "childAbilityList": [
    "1002030_Monster_W1_Soldier04_Ability02_Part01",
    "1002030_Monster_W1_Soldier04_Ability02_Part02",
    "1002030_Monster_W1_Soldier04_Ability02_Camera"
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
      "ability": "Monster_W1_Soldier04_Ability02_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}