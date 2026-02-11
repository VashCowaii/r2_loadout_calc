const configAbility = {
  "fileName": "8003022_Monster_XP_Elite01_Ability09_Part01_IF",
  "childAbilityList": [
    "8003022_Monster_XP_Elite01_Ability09_Camera_IF",
    "8003022_Monster_XP_Elite01_Ability09_Part01_IF",
    "8003022_Monster_XP_Elite01_Ability09_Part02"
  ],
  "skillTrigger": "Skill09",
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
      "ability": "Monster_XP_Elite01_Ability09_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}