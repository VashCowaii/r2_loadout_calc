const configAbility = {
  "fileName": "8002083_Monster_XP_Minion04_02_Ability02_Part01_FateRin",
  "childAbilityList": [
    "8002083_Monster_XP_Minion04_02_Ability02_Part01_FateRin",
    "8002083_Monster_XP_Minion04_02_Ability02_Part02_FateRin",
    "8002083_Monster_XP_Minion04_Ability02_Camera"
  ],
  "skillTrigger": "Skill02",
  "abilityType": "Basic ATK",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Monster_XP_Minion04_02_Ability02_Part02_FateRin",
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