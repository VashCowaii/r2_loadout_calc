const configAbility = {
  "fileName": "2034014_Monster_W2_LycanKing_Ability03_Part01",
  "childAbilityList": [
    "2034014_Monster_W2_LycanKing_Ability03_Part01",
    "2034014_Monster_W2_LycanKing_Ability03_Part02",
    "2034014_Monster_W2_LycanKing_Ability03_Camera"
  ],
  "skillTrigger": "Skill03",
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
      "ability": "Monster_W2_LycanKing_Ability03_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}