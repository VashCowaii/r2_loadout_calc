const configAbility = {
  "fileName": "8015010_Monster_AML_Boss_Insert02_Part01",
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
      "ability": "Monster_AML_Boss_Insert02_Part02",
      "isTrigger": true
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "_IsWeeklyBoss",
        "compareType": "=",
        "value2": 1,
        "contextScope": "TargetEntity"
      },
      "passed": [
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase2"
        }
      ],
      "failed": [
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase2"
        }
      ]
    },
    {
      "name": "Set Mapping Point",
      "point": "Origin",
      "mapTo": "HeadOrigin"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Enemy_AML_Boss_DamageTakenUp",
      "valuePerStack": {
        "MDF_PropertyValue": {
          "operator": "Variables[0] ({[PassiveSkill02[0]]}) || RETURN",
          "displayLines": "{[PassiveSkill02[0]]}",
          "constants": [],
          "variables": [
            "{[PassiveSkill02[0]]}"
          ]
        }
      }
    }
  ],
  "references": []
}