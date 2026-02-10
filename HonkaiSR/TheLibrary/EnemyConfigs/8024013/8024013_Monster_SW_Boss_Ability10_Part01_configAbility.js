const configAbility = {
  "fileName": "8024013_Monster_SW_Boss_Ability10_Part01",
  "childAbilityList": [
    "8024013_Monster_SW_Boss_Ability10_Camera",
    "8024013_Monster_SW_Boss_Ability10_Part01",
    "8024013_Monster_SW_Boss_Ability10_Part02"
  ],
  "skillTrigger": "Skill10",
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
      "ability": "Monster_SW_Boss_Ability10_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}