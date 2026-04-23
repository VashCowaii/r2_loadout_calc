const configAbility = {
  "fileName": "5013011_Monster_W4_Claymore_02_Ability04_Part01",
  "childAbilityList": [
    "5013011_Monster_W4_Claymore_Ability04_Camera",
    "5013011_Monster_W4_Claymore_02_Ability04_Part01",
    "5013011_Monster_W4_Claymore_02_Ability04_Part02",
    "5013011_Monster_W4_Claymore_02_Ability04_Camera",
    "5013011_Monster_W4_Claymore_02_IF_Ability04_Camera",
    "5013011_Monster_W4_Claymore_02_Ability042_Part01",
    "5013011_Monster_W4_Claymore_02_Ability042_Part02",
    "5013011_Monster_W4_Claymore_02_Ability042_Camera"
  ],
  "skillTrigger": "Skill04",
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
      }
    },
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Monster_W4_Claymore_02_Ability04_Part02",
      "isTrigger": true
    },
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
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}