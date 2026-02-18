const configAbility = {
  "fileName": "3014021_Monster_W3_Death_Ability04_Part01",
  "childAbilityList": [
    "3014021_Monster_W3_Death_Ability04_Part01",
    "3014021_Monster_W3_Death_Ability04_Part02",
    "3014021_Monster_W3_Death_Ability04_Camera"
  ],
  "skillTrigger": "Skill04",
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
      "ability": "Monster_W3_Death_Ability04_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}