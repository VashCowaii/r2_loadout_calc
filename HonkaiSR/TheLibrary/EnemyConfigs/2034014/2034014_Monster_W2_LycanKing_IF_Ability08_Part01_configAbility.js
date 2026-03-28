const configAbility = {
  "fileName": "2034014_Monster_W2_LycanKing_IF_Ability08_Part01",
  "childAbilityList": [
    "2034014_Monster_W2_LycanKing_IF_Ability08_Part01",
    "2034014_Monster_W2_LycanKing_IF_Ability08_Part02",
    "2034014_Monster_W2_LycanKing_IF_Ability08_Camera"
  ],
  "skillTrigger": "Skill08",
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
      "ability": "Monster_W2_LycanKing_IF_Ability08_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}