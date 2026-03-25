const configAbility = {
  "fileName": "5013061_Monster_W5_Ranger_Ability01_Part01",
  "childAbilityList": [
    "5013061_Monster_W5_Ranger_Ability01_Camera",
    "5013061_Monster_W5_Ranger_Ability01_Part01",
    "5013061_Monster_W5_Ranger_Ability01_Part02"
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
      "ability": "Monster_W5_Ranger_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit",
    "Deleted bullshit"
  ],
  "references": []
}