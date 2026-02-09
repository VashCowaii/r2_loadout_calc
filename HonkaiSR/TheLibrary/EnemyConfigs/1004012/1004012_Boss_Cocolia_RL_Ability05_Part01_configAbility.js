const configAbility = {
  "fileName": "1004012_Boss_Cocolia_RL_Ability05_Part01",
  "childAbilityList": [
    "1004012_Boss_Cocolia_RL_Ability05_Part01_Camera",
    "1004012_Boss_Cocolia_RL_Ability05_Part01",
    "1004012_Boss_Cocolia_RL_Ability05_Part02"
  ],
  "skillTrigger": "Skill05",
  "abilityType": "Skill",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "Cocolia_BattleScore5_Flag",
      "value": 1
    },
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Boss_Cocolia_RL_Ability05_Part02",
      "isTrigger": true
    },
    "Deleted bullshit",
    {
      "name": "Change Character Transformation",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "phase": "Phase2"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "ChargeFlag",
      "value": 1
    }
  ],
  "references": []
}