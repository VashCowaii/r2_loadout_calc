const configAbility = {
  "fileName": "8025011_Monster_SW_Boss_01_IF_Ability05_Part01",
  "childAbilityList": [
    "8025011_Monster_SW_Boss_01_Ability05_Camera",
    "8025011_Monster_SW_Boss_01_IF_Ability05_Part01",
    "8025011_Monster_SW_Boss_01_IF_Ability05_Part02",
    "8025011_Monster_SW_Boss_01_IF_AbilityP01_Insert",
    "8025011_Monster_SW_Boss_01_AbilityP05_Camera"
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
      "ability": "Monster_SW_Boss_01_IF_Ability05_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}