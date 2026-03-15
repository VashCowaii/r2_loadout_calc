const configAbility = {
  "fileName": "5013010_Monster_W4_Claymore_02_Ability01_Part01",
  "childAbilityList": [
    "5013010_Monster_W4_Claymore_02_Ability01_Camera",
    "5013010_Monster_W4_Claymore_02_Ability01_Part01",
    "5013010_Monster_W4_Claymore_02_Ability01_Part02",
    "5013010_Monster_W4_Claymore_02_Ability01_Insert_Part01",
    "5013010_Monster_W4_Claymore_02_Ability01_Insert_Part02"
  ],
  "skillTrigger": "Skill01",
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
            "name": "Sort by Physical Positioning"
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
      "ability": "Monster_W4_Claymore_02_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}