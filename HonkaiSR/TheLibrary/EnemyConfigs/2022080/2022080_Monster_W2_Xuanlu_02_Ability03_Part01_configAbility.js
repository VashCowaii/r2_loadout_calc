const configAbility = {
  "fileName": "2022080_Monster_W2_Xuanlu_02_Ability03_Part01",
  "childAbilityList": [
    "2022080_Monster_W2_Xuanlu_02_Ability03_Part01",
    "2022080_Monster_W2_Xuanlu_02_Ability03_Part02",
    "2022080_Monster_W2_Xuanlu_02_Ability03_Camera",
    "2022080_Monster_W2_Xuanlu_02_AbilityP03_Part01",
    "2022080_Monster_W2_Xuanlu_02_AbilityP03_Part02",
    "2022080_Monster_W2_Xuanlu_02_AbilityP03_Camera"
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
      "ability": "Monster_W2_Xuanlu_02_Ability03_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}