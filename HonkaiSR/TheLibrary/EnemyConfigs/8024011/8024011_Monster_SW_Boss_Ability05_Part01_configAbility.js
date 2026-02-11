const configAbility = {
  "fileName": "8024011_Monster_SW_Boss_Ability05_Part01",
  "childAbilityList": [
    "8024011_Monster_SW_Boss_Ability05_Camera",
    "8024011_Monster_SW_Boss_Ability05_Part01",
    "8024011_Monster_SW_Boss_Ability05_Part02"
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
      "ability": "Monster_SW_Boss_Ability05_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}