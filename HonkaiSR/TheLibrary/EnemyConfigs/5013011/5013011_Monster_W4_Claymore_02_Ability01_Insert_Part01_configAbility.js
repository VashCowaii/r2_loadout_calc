const configAbility = {
  "fileName": "5013011_Monster_W4_Claymore_02_Ability01_Insert_Part01",
  "abilityType": null,
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
      "ability": "Monster_W4_Claymore_02_Ability01_Insert_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}