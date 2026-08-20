const configAbility = {
  "fileName": "1003014_Monster_W1_Soldier03_Ability02_Part01_FateRin",
  "childAbilityList": [
    "1003014_Monster_W1_Soldier03_Ability07_Camera_FateRin",
    "1003014_Monster_W1_Soldier03_Ability02_Part01_FateRin",
    "1003014_Monster_W1_Soldier03_Ability02_Part02_FateRin"
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
      "ability": "Monster_W1_Soldier03_Ability02_Part02_FateRin",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}