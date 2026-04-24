const configAbility = {
  "fileName": "5014014_Monster_W5_Vtuber_IF_AbilityP01_Insert01_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Deal Toughness DMG",
      "value": {
        "operator": "Variables[0] ({[PassiveSkill01[4]]}) || RETURN",
        "displayLines": "{[PassiveSkill01[4]]}",
        "constants": [],
        "variables": [
          "{[PassiveSkill01[4]]}"
        ]
      },
      "defender": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "forceReduction": true,
      "canDelay": true,
      "ToughnessDMGType": "Quantum"
    },
    {
      "name": "Adjust Team Punchline Value",
      "value": {
        "operator": "Variables[0] ({[PassiveSkill01[5]]}) || RETURN",
        "displayLines": "{[PassiveSkill01[5]]}",
        "constants": [],
        "variables": [
          "{[PassiveSkill01[5]]}"
        ]
      },
      "adjustment": "Add"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"242915518\">Enemy_W5_Vtuber_IF_AbilityP01_AddAbility</a>"
      },
      "ifTargetFound": [
        {
          "name": "Inject Ability Use",
          "conditionActive": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "value1": "CurrentHP",
                "compareType": ">",
                "value2": 0
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "flagName": [
                  "Break"
                ],
                "invertCondition": true,
                "checkType": "And"
              }
            ]
          },
          "abilityName": "Monster_W5_Vtuber_IF_AbilityP01_Insert02_Part01",
          "abilitySource": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "abilityTarget": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "priorityTag": "EnemyForceKill",
          "canHitNonTargets": true,
          "showInActionOrder": true,
          "allowAbilityTriggers": false
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}