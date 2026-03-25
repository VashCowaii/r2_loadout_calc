const configAbility = {
  "fileName": "5013040_Monster_W5_Ranger_Ability05_Part01",
  "childAbilityList": [
    "5013040_Monster_W5_Ranger_Ability05_Camera",
    "5013040_Monster_W5_Ranger_Ability05_Part01",
    "5013040_Monster_W5_Ranger_Ability05_Part02"
  ],
  "skillTrigger": "Skill05",
  "abilityType": "Basic ATK",
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Deleted bullshit",
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Monster_W5_Ranger_Ability05_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}