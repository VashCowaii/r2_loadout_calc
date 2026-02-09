const configAbility = {
  "fileName": "1004014_Boss_Cocolia_IF_02_Ability02_Part01",
  "childAbilityList": [
    "1004014_Boss_Cocolia_IF_Ability02_Part01_Camera",
    "1004014_Boss_Cocolia_IF_02_Ability02_Part01",
    "1004014_Boss_Cocolia_IF_02_Ability02_Part02"
  ],
  "skillTrigger": "Skill02",
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
      "ability": "Boss_Cocolia_IF_02_Ability02_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}