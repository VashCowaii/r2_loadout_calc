const configAbility = {
  "fileName": "3001020_Monster_XP_Minion01_04_Ability01_Part01",
  "childAbilityList": [
    "3001020_Monster_XP_Minion01_04_Ability01_Camera",
    "3001020_Monster_XP_Minion01_04_Ability01_Part01",
    "3001020_Monster_XP_Minion01_04_Ability01_Part02"
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
      "ability": "Monster_XP_Minion01_04_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "realTargetData": {
    "primaryTarget": "Select Hostile Target"
  },
  "references": []
}