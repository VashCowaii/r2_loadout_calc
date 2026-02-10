const configAbility = {
  "fileName": "8025010_Monster_SW_Boss_01_Ability01_Part01",
  "childAbilityList": [
    "8025010_Monster_SW_Boss_01_Ability01_Camera",
    "8025010_Monster_SW_Boss_01_Ability01_Part01",
    "8025010_Monster_SW_Boss_01_Ability01_Part02"
  ],
  "skillTrigger": "Skill01",
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
      "ability": "Monster_SW_Boss_01_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}