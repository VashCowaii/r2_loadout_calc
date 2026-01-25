const configAbility = {
  "fileName": "1002020_Monster_W1_Soldier01_03_Ability02_Part01",
  "childAbilityList": [
    "1002020_Monster_W1_Soldier01_03_Ability02_Camera",
    "1002020_Monster_W1_Soldier01_03_Ability02_Part01",
    "1002020_Monster_W1_Soldier01_03_Ability02_Part02"
  ],
  "skillTrigger": "Skill02",
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
      "ability": "Monster_W1_Soldier01_03_Ability02_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}