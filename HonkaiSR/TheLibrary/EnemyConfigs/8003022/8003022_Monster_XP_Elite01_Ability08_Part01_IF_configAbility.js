const configAbility = {
  "fileName": "8003022_Monster_XP_Elite01_Ability08_Part01_IF",
  "childAbilityList": [
    "8003022_Monster_XP_Elite01_Ability08_Camera_IF",
    "8003022_Monster_XP_Elite01_Ability08_Part01_IF",
    "8003022_Monster_XP_Elite01_Ability08_Part02"
  ],
  "skillTrigger": "Skill08",
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
      "ability": "Monster_XP_Elite01_Ability08_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}