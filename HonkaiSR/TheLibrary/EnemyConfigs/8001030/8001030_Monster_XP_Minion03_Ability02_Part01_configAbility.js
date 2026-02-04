const configAbility = {
  "fileName": "8001030_Monster_XP_Minion03_Ability02_Part01",
  "childAbilityList": [
    "8001030_Monster_XP_Minion03_Ability02_Camera",
    "8001030_Monster_XP_Minion03_Ability02_Part01",
    "8001030_Monster_XP_Minion03_Ability02_Part02"
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
      "ability": "Monster_XP_Minion03_Ability02_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}