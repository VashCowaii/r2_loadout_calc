const configAbility = {
  "fileName": "4014034_Monster_W4_Pollux_Ability04_Part01_FateRin",
  "childAbilityList": [
    "4014034_Monster_W4_Pollux_Ability04_Part01_FateRin",
    "4014034_Monster_W4_Pollux_Ability04_Part02_FateRin",
    "4014034_Monster_W4_Pollux_Ability04_Camera"
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
      "ability": "Monster_W4_Pollux_Ability04_Part02_FateRin",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "realTargetData": {
    "primaryTarget": "Select Ally Target"
  },
  "references": []
}