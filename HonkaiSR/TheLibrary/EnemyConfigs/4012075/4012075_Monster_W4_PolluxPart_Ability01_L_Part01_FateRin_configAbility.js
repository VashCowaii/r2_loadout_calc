const configAbility = {
  "fileName": "4012075_Monster_W4_PolluxPart_Ability01_L_Part01_FateRin",
  "childAbilityList": [
    "4012075_Monster_W4_PolluxPart_Ability01_L_Part01_FateRin",
    "4012075_Monster_W4_PolluxPart_Ability01_L_Part02_FateRin",
    "4012075_Monster_W4_PolluxPart_Ability01_L_Camera_FateRin"
  ],
  "skillTrigger": "Skill01",
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
      "ability": "Monster_W4_PolluxPart_Ability01_L_Part02_FateRin",
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