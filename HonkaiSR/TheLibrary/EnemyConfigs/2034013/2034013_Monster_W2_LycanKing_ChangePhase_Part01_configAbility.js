const configAbility = {
  "fileName": "2034013_Monster_W2_LycanKing_ChangePhase_Part01",
  "childAbilityList": [
    "2034013_Monster_W2_LycanKing_ChangePhase_Part01",
    "2034013_Monster_W2_LycanKing_ChangePhase_Part02",
    "2034013_Monster_W2_LycanKing_ChangePhase_Camera"
  ],
  "skillTrigger": "ChangePhase",
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
      "ability": "Monster_W2_LycanKing_ChangePhase_Part02",
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