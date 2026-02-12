const configAbility = {
  "fileName": "4012020_Monster_W4_Scholar_Ability01_Part01",
  "childAbilityList": [
    "4012020_Monster_W4_Scholar_Ability01_Camera",
    "4012020_Monster_W4_Scholar_Ability01_Part01",
    "4012020_Monster_W4_Scholar_Ability01_Part02"
  ],
  "skillTrigger": "Skill01",
  "abilityType": "Skill",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{All Team Members(Exclude Self)}}"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1765528423\">MModifier_Monster_W4_Scholar_BookTarget</a>[<span class=\"descriptionNumberColor\">Gleaned Instruction</span>]",
            "invertCondition": true
          },
          {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value": "MonsterType_W4_Scholar_00",
            "invertCondition": true
          }
        ]
      },
      "ifTargetFound": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "ability": "Monster_W4_Scholar_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ]
    }
  ],
  "references": []
}