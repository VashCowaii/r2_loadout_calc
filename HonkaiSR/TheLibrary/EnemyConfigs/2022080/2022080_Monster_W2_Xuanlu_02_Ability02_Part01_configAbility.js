const configAbility = {
  "fileName": "2022080_Monster_W2_Xuanlu_02_Ability02_Part01",
  "childAbilityList": [
    "2022080_Monster_W2_Xuanlu_02_Ability02_Part01",
    "2022080_Monster_W2_Xuanlu_02_Ability02_Part02",
    "2022080_Monster_W2_Xuanlu_02_Ability02_Camera"
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
      "ability": "Monster_W2_Xuanlu_02_Ability02_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "realTargetData": {
    "primaryTarget": "Select Ally Target",
    "filter": {
      "name": "Target Name",
      "target": "{{Caster}}"
    }
  },
  "references": []
}