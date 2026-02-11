const configAbility = {
  "fileName": "8003022_Monster_XP_Elite01_Ability05_Part01_IF",
  "childAbilityList": [
    "8003022_Monster_XP_Elite01_Ability05_Camera_IF",
    "8003022_Monster_XP_Elite01_Ability05_Part01_IF",
    "8003022_Monster_XP_Elite01_Ability05_Part02_IF"
  ],
  "skillTrigger": "Skill05",
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
      "ability": "Monster_XP_Elite01_Ability05_Part02_IF",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}