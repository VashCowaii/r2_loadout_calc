const configAbility = {
  "fileName": "5013070_Monster_W5_Ranger_Ability04_Part01",
  "childAbilityList": [
    "5013070_Monster_W5_Ranger_Ability04_Camera",
    "5013070_Monster_W5_Ranger_Ability04_Part01",
    "5013070_Monster_W5_Ranger_Ability04_Part02"
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
      "ability": "Monster_W5_Ranger_Ability04_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}