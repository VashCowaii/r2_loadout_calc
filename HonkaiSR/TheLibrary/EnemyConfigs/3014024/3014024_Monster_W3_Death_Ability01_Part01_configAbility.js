const configAbility = {
  "fileName": "3014024_Monster_W3_Death_Ability01_Part01",
  "childAbilityList": [
    "3014024_Monster_W3_Death_Ability01_Part01",
    "3014024_Monster_W3_Death_Ability01_Part02",
    "3014024_Monster_W3_Death_Ability01_Camera"
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
      "ability": "Monster_W3_Death_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}