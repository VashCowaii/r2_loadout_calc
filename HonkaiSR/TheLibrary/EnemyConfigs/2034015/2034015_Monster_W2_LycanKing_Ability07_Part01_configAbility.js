const configAbility = {
  "fileName": "2034015_Monster_W2_LycanKing_Ability07_Part01",
  "childAbilityList": [
    "2034015_Monster_W2_LycanKing_Ability07_Part01",
    "2034015_Monster_W2_LycanKing_Ability07_Part02",
    "2034015_Monster_W2_LycanKing_Ability07_Camera"
  ],
  "skillTrigger": "Skill07",
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
      "inherentTarget": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "ability": "Monster_W2_LycanKing_Ability07_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  },
  "references": []
}