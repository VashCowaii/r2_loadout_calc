const configAbility = {
  "fileName": "1004015_Boss_Cocolia_RL_Ability05_Part01",
  "childAbilityList": [
    "1004015_Boss_Cocolia_RL_Ability05_Part01_Camera",
    "1004015_Boss_Cocolia_RL_Ability05_Part01",
    "1004015_Boss_Cocolia_RL_Ability05_Part02"
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
      "variableName": "Cocolia_BattleScore5_Flag",
      "resetValue": 1,
      "scope": "TargetEntity"
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
      "name": "Change Entity Turn-State",
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
      "variableName": "ChargeFlag",
      "resetValue": 1,
      "scope": "TargetEntity"
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}