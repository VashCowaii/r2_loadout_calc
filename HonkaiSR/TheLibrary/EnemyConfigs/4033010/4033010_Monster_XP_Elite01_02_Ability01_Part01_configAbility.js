const configAbility = {
  "fileName": "4033010_Monster_XP_Elite01_02_Ability01_Part01",
  "childAbilityList": [
    "4033010_Monster_XP_Elite01_02_Ability01_Camera",
    "4033010_Monster_XP_Elite01_02_Ability01_Part01",
    "4033010_Monster_XP_Elite01_02_Ability01_Part02"
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
      "ability": "Monster_XP_Elite01_02_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}