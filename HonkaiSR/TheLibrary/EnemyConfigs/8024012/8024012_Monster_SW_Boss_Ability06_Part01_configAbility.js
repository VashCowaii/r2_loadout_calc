const configAbility = {
  "fileName": "8024012_Monster_SW_Boss_Ability06_Part01",
  "childAbilityList": [
    "8024012_Monster_SW_Boss_Ability06_Camera",
    "8024012_Monster_SW_Boss_Ability06_Part01",
    "8024012_Monster_SW_Boss_Ability06_Part02"
  ],
  "skillTrigger": "Skill06",
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
      "ability": "Monster_SW_Boss_Ability06_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}