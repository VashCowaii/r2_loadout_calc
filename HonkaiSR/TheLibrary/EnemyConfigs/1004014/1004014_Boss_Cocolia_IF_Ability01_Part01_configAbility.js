const configAbility = {
  "fileName": "1004014_Boss_Cocolia_IF_Ability01_Part01",
  "childAbilityList": [
    "1004014_Boss_Cocolia_RL_Ability01_Part01_Camera",
    "1004014_Boss_Cocolia_IF_Ability01_Part01",
    "1004014_Boss_Cocolia_IF_Ability01_Part02",
    "1004014_Boss_Cocolia_IF_Ability01_Part01_Insert",
    "1004014_Boss_Cocolia_IF_Ability01_Part02_Insert",
    "1004014_Boss_Cocolia_IF_Ability01_Part01_Camera_Insert"
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
      "ability": "Boss_Cocolia_IF_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}