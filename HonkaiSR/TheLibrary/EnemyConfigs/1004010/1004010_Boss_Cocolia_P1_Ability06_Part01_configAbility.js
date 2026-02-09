const configAbility = {
  "fileName": "1004010_Boss_Cocolia_P1_Ability06_Part01",
  "childAbilityList": [
    "1004010_Boss_Cocolia_P1_Ability06_Part01_Camera",
    "1004010_Boss_Cocolia_P1_Ability06_Part01",
    "1004010_Boss_Cocolia_P1_Ability06_Part02"
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
      "ability": "Boss_Cocolia_P1_Ability06_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}