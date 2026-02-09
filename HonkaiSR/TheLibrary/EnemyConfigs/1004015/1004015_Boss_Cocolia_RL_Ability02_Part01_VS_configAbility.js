const configAbility = {
  "fileName": "1004015_Boss_Cocolia_RL_Ability02_Part01_VS",
  "childAbilityList": [
    "1004015_Boss_Cocolia_RL_Ability02_Part01_Camera",
    "1004015_Boss_Cocolia_RL_Ability02_Part01_VS",
    "1004015_Boss_Cocolia_RL_Ability02_Part02_VS"
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
      "ability": "Boss_Cocolia_RL_Ability02_Part02_VS",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}