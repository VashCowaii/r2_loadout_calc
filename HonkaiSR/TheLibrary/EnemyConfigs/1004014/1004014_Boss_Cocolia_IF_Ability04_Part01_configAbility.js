const configAbility = {
  "fileName": "1004014_Boss_Cocolia_IF_Ability04_Part01",
  "childAbilityList": [
    "1004014_Boss_Cocolia_RL_Ability04_Part01_Camera",
    "1004014_Boss_Cocolia_IF_Ability04_Part01",
    "1004014_Boss_Cocolia_IF_Ability04_Part02",
    "1004014_Boss_Cocolia_IF_Ability04_Part01_Camera_Insert",
    "1004014_Boss_Cocolia_IF_Ability04_Part01_Insert",
    "1004014_Boss_Cocolia_IF_Ability04_Part02_Insert"
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
      "ability": "Boss_Cocolia_IF_Ability04_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}