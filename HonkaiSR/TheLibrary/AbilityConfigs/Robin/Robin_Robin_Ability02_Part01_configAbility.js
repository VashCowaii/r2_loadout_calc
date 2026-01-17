const configAbility = {
  "fileName": "Robin_Robin_Ability02_Part01",
  "childAbilityList": [
    "Robin_Robin_Ability02_Camera",
    "Robin_Robin_Ability02_Part01",
    "Robin_Robin_Ability02_Part02",
    "Robin_Robin_Ability02_FriendAttack"
  ],
  "skillTrigger": "Skill02",
  "abilityType": "Skill",
  "energy": 30,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    "Deleted bullshit",
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Robin_Ability02_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}