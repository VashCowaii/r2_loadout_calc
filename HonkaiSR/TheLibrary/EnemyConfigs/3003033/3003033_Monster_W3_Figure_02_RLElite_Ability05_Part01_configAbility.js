const configAbility = {
  "fileName": "3003033_Monster_W3_Figure_02_RLElite_Ability05_Part01",
  "childAbilityList": [
    "3003033_Monster_W3_Figure_02_RLElite_Ability05_Camera",
    "3003033_Monster_W3_Figure_02_RLElite_Ability05_Part01",
    "3003033_Monster_W3_Figure_02_RLElite_Ability05_Part02"
  ],
  "skillTrigger": "Skill05",
  "abilityType": "Skill",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"1529042769\">Monster_W3_Figure_02_RLElite_AimTarget</a>[<span class=\"descriptionNumberColor\">Target Locked On</span>]",
        "invertCondition": true
      }
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"1529042769\">Monster_W3_Figure_02_RLElite_AimTarget</a>[<span class=\"descriptionNumberColor\">Target Locked On</span>]"
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
            "target": "{{Parameter Target List}}"
          },
          "ability": "Monster_W3_Figure_02_RLElite_Ability05_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "noTargetFound": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "ability": "Monster_W3_Figure_02_RLElite_Ability05_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ]
    }
  ],
  "references": []
}