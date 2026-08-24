const configAbility = {
  "fileName": "1003014_Monster_W1_Soldier03_Ability03_Part01_FateRin",
  "childAbilityList": [
    "1003014_Monster_W1_Soldier03_Ability03_Camera_FateRin_02",
    "1003014_Monster_W1_Soldier03_Ability03_Part01_FateRin",
    "1003014_Monster_W1_Soldier03_Ability03_Part02_FateRin",
    "1003014_Monster_W1_Soldier03_Ability03_Camera_FateRin_01"
  ],
  "skillTrigger": "Skill03",
  "abilityType": "Skill",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Change Entity Turn-State",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "phase": "Phase1"
    },
    {
      "name": "Inject Ability Use",
      "abilityName": "Monster_W1_Soldier03_Ability03_Part01_FateRin_Insert",
      "abilitySource": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "abilityTarget": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "allowAbilityTriggers": false
    },
    "Deleted bullshit",
    "Deleted bullshit",
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Monster_W1_Soldier03_Ability03_Part02_FateRin",
      "isTrigger": true
    },
    {
      "name": "UI Display Event",
      "popUpText": "Generates \"Gate of Babylon!\" when drawing cards."
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "realTargetData": {
    "primaryTarget": "Select Hostile Target"
  },
  "references": []
}