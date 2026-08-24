const configAbility = {
  "fileName": "4012081_Monster_W4_DawnsEyePart_Ability02_Part01_FateRin",
  "childAbilityList": [
    "4012081_Monster_W4_DawnsEyePart_Ability02_Camera",
    "4012081_Monster_W4_DawnsEyePart_Ability02_Part01_FateRin",
    "4012081_Monster_W4_DawnsEyePart_Ability02_Part02_FateRin"
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
      "ability": "Monster_W4_DawnsEyePart_Ability02_Part02_FateRin",
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