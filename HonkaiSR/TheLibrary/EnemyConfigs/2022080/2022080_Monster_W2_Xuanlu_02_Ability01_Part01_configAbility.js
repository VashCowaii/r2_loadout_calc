const configAbility = {
  "fileName": "2022080_Monster_W2_Xuanlu_02_Ability01_Part01",
  "childAbilityList": [
    "2022080_Monster_W2_Xuanlu_02_Ability01_Part01",
    "2022080_Monster_W2_Xuanlu_02_Ability01_Part02",
    "2022080_Monster_W2_Xuanlu_02_Ability01_Camera"
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
      "ability": "Monster_W2_Xuanlu_02_Ability01_Part02",
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
      "name": "Target Sequence",
      "Sequence": [
        {
          "name": "Target Name",
          "target": "{{Enemy Team All}}"
        },
        {
          "name": "Target Filter",
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value": "MonsterType_Xuanlu"
          }
        }
      ]
    }
  },
  "references": []
}