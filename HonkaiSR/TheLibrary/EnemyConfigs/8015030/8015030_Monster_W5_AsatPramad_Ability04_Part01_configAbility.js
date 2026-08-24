const configAbility = {
  "fileName": "8015030_Monster_W5_AsatPramad_Ability04_Part01",
  "childAbilityList": [
    "8015030_Monster_W5_AsatPramad_Ability04_Part01",
    "8015030_Monster_W5_AsatPramad_Ability04_Part02",
    "8015030_Monster_W5_AsatPramad_Ability04_Camera",
    "8015030_Monster_W5_AsatPramad_Ability04_Fail_Camera",
    "8015030_Monster_W5_AsatPramad_Ability04_Insert_Part01",
    "8015030_Monster_W5_AsatPramad_Ability04_Insert_Part02"
  ],
  "skillTrigger": "Skill04",
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
      "ability": "Monster_W5_AsatPramad_Ability04_Part02",
      "isTrigger": true
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{{{Cyrene}}'s All Player Characters}}"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"724771238\">Enemy_W5_AsatPramad_Bomb</a>[<span class=\"descriptionNumberColor\">Meme'd</span>]"
      },
      "ifTargetFound": [
        "Deleted bullshit"
      ],
      "noTargetFound": [
        "Deleted bullshit"
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}",
    "targetIsVariable": true
  },
  "references": []
}