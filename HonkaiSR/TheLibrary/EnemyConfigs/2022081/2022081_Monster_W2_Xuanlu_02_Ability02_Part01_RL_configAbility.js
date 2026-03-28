const configAbility = {
  "fileName": "2022081_Monster_W2_Xuanlu_02_Ability02_Part01_RL",
  "childAbilityList": [
    "2022081_Monster_W2_Xuanlu_02_Ability02_Part01_RL",
    "2022081_Monster_W2_Xuanlu_02_Ability02_Part02_RL",
    "2022081_Monster_W2_Xuanlu_02_Ability02_Camera"
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
      "ability": "Monster_W2_Xuanlu_02_Ability02_Part02_RL",
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