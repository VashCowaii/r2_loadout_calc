const configAbility = {
  "fileName": "5013012_Monster_W4_Claymore_02_Ability02_Part01",
  "childAbilityList": [
    "5013012_Monster_W4_Claymore_02_Ability02_Camera",
    "5013012_Monster_W4_Claymore_02_Ability02_Part01",
    "5013012_Monster_W4_Claymore_02_Ability02_Part02",
    "5013012_Monster_W4_Claymore_02_Ability02_Insert_Part01",
    "5013012_Monster_W4_Claymore_02_Ability02_Insert_Part02"
  ],
  "skillTrigger": "Skill02",
  "abilityType": "Skill",
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Deleted bullshit",
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "inherentTarget": {
        "name": "Target Sequence",
        "Sequence": [
          {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          {
            "name": "Sort by Physical Positioning",
            "byHighest": true
          },
          {
            "name": "Filter by Life-State",
            "state": "Mask_AliveOnly"
          },
          {
            "name": "Target Index",
            "indexValue": 1
          }
        ]
      },
      "ability": "Monster_W4_Claymore_02_Ability02_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}