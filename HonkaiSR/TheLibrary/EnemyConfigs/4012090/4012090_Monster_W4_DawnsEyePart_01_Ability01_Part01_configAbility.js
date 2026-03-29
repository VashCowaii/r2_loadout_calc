const configAbility = {
  "fileName": "4012090_Monster_W4_DawnsEyePart_01_Ability01_Part01",
  "childAbilityList": [
    "4012090_Monster_W4_DawnsEyePart_01_Ability01_Part01",
    "4012090_Monster_W4_DawnsEyePart_01_Ability01_Part02",
    "4012090_Monster_W4_DawnsEyePart_01_Ability01_Camera"
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
      "ability": "Monster_W4_DawnsEyePart_01_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit",
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Compare: Monster Rank",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "compareType": "=",
        "value2": 5
      }
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}