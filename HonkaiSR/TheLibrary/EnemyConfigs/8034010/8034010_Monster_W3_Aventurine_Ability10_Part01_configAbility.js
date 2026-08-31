const configAbility = {
  "fileName": "8034010_Monster_W3_Aventurine_Ability10_Part01",
  "childAbilityList": [
    "8034010_Monster_W3_Aventurine_Ability10_Camera",
    "8034010_Monster_W3_Aventurine_Ability10_Part01",
    "8034010_Monster_W3_Aventurine_Ability10_Part02"
  ],
  "skillTrigger": "Skill10",
  "abilityType": "Skill",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Monster_W3_Aventurine_Ability10_Part02",
      "isTrigger": true
    },
    "Deleted bullshit",
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-941439932\">Monster_W3_Aventurine_MainEndSelf</a>",
        "invertCondition": true
      }
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