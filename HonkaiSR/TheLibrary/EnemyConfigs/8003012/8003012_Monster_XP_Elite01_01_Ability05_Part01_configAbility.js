const configAbility = {
  "fileName": "8003012_Monster_XP_Elite01_01_Ability05_Part01",
  "childAbilityList": [
    "8003012_Monster_XP_Elite01_01_Ability05_Camera",
    "8003012_Monster_XP_Elite01_01_Ability05_Part01",
    "8003012_Monster_XP_Elite01_01_Ability05_Part02"
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
      "ability": "Monster_XP_Elite01_01_Ability05_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}