const configAbility = {
  "fileName": "8003012_Monster_XP_Elite01_01_Ability03_Part01_IF",
  "childAbilityList": [
    "8003012_Monster_XP_Elite01_01_Ability03_Camera",
    "8003012_Monster_XP_Elite01_01_Ability03_Part01_IF",
    "8003012_Monster_XP_Elite01_01_Ability03_Part02_IF"
  ],
  "skillTrigger": "Skill03",
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
      "ability": "Monster_XP_Elite01_01_Ability03_Part02_IF",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}