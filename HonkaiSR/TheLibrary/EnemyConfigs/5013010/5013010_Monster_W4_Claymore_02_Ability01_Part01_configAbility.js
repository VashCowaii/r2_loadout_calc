const configAbility = {
  "fileName": "5013010_Monster_W4_Claymore_02_Ability01_Part01",
  "childAbilityList": [
    "5013010_Monster_W4_Claymore_02_Ability01_Camera",
    "5013010_Monster_W4_Claymore_02_IF_Ability01_Camera",
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
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Modifier Holder}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"473072467\">Enemy_W5_Vtuber_InField_Mark</a>"
      },
      "passed": [
        "Deleted bullshit"
      ],
      "failed": [
        "Deleted bullshit"
      ]
    },
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
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "realTargetData": {
    "primaryTarget": "Select Hostile Target",
    "subTarget": "Blast Targets",
    "targetIsVariable": true
  },
  "references": []
}