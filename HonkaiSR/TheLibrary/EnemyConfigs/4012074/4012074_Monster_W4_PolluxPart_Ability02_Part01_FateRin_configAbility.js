const configAbility = {
  "fileName": "4012074_Monster_W4_PolluxPart_Ability02_Part01_FateRin",
  "childAbilityList": [
    "4012074_Monster_W4_PolluxPart_Ability02_Part01_FateRin",
    "4012074_Monster_W4_PolluxPart_Ability02_Part02_FateRin",
    "4012074_Monster_W4_PolluxPart_Ability02_Camera_FateRin"
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
      "ability": "Monster_W4_PolluxPart_Ability02_Part02_FateRin",
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