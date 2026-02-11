const configAbility = {
  "fileName": "1004015_Boss_Cocolia_RL_Ability01_Part01",
  "childAbilityList": [
    "1004015_Boss_Cocolia_RL_Ability01_Part01_Camera",
    "1004015_Boss_Cocolia_RL_Ability01_Part01",
    "1004015_Boss_Cocolia_RL_Ability01_Part02"
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
      "ability": "Boss_Cocolia_RL_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}