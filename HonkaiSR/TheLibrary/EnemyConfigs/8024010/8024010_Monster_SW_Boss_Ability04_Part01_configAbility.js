const configAbility = {
  "fileName": "8024010_Monster_SW_Boss_Ability04_Part01",
  "childAbilityList": [
    "8024010_Monster_SW_Boss_Ability04_Camera",
    "8024010_Monster_SW_Boss_Ability04_Part01",
    "8024010_Monster_SW_Boss_Ability04_Part02"
  ],
  "skillTrigger": "Skill04",
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
      "ability": "Monster_SW_Boss_Ability04_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}