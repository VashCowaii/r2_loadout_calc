const configAbility = {
  "fileName": "5013011_Monster_W4_Claymore_02_Ability05_Part01",
  "childAbilityList": [
    "5013011_Monster_W4_Claymore_02_Ability05_Camera",
    "5013011_Monster_W4_Claymore_02_Ability05_Part01",
    "5013011_Monster_W4_Claymore_02_Ability05_Part02",
    "5013011_Monster_W4_Claymore_02_Ability052_Camera",
    "5013011_Monster_W4_Claymore_02_Ability052_Part02"
  ],
  "skillTrigger": "Skill05",
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
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-1907385221\">MModifier_Monster_W4_Claymore_02_Elation</a>[<span class=\"descriptionNumberColor\">Frenzied Rendition</span>]"
      },
      "passed": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W4_Claymore_02_Ability052_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "failed": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W4_Claymore_02_Ability05_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ]
    }
  ],
  "references": []
}