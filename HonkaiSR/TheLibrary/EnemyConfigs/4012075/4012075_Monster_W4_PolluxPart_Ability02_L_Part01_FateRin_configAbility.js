const configAbility = {
  "fileName": "4012075_Monster_W4_PolluxPart_Ability02_L_Part01_FateRin",
  "childAbilityList": [
    "4012075_Monster_W4_PolluxPart_Ability02_L_Part01_FateRin",
    "4012075_Monster_W4_PolluxPart_Ability02_L_Part02_FateRin",
    "4012075_Monster_W4_PolluxPart_Ability02_L_Camera_FateRin"
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
      "ability": "Monster_W4_PolluxPart_Ability02_L_Part02_FateRin",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "realTargetData": {
    "primaryTarget": "Select Hostile Target",
    "subTarget": "Blast Targets"
  },
  "references": []
}