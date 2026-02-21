const configAbility = {
  "fileName": "4013014_Monster_W4_Claymore_Ability01_Part01",
  "childAbilityList": [
    "4013014_Monster_W4_Claymore_Ability01_Camera",
    "4013014_Monster_W4_Claymore_Ability01_Part01",
    "4013014_Monster_W4_Claymore_Ability01_Part02"
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
      "ability": "Monster_W4_Claymore_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}