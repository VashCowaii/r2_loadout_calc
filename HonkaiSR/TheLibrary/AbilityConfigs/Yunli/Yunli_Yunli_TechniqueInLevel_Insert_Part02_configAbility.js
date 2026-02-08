const configAbility = {
  "fileName": "Yunli_Yunli_TechniqueInLevel_Insert_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1898161246\">Yunli_AddRegardAsAttackType</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"37918586\">Yunli_TechniqueInLevel</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 1
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"275203206\">Yunli_Eidolon1</a>",
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (0.2) || RETURN",
              "displayLines": "0.2",
              "constants": [],
              "variables": [
                0.2
              ]
            }
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_LoopCount",
          "value": {
            "operator": "Variables[0] (6) || Variables[1] (3) || ADD || RETURN",
            "displayLines": "(6 + 3)",
            "constants": [],
            "variables": [
              6,
              3
            ]
          }
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_LoopCount",
          "value": {
            "operator": "Variables[0] (6) || RETURN",
            "displayLines": "6",
            "constants": [],
            "variables": [
              6
            ]
          }
        }
      ]
    },
    "Deleted bullshit",
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Living State",
            "state": "Mask_AliveOnly",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            }
          },
          {
            "name": "Target is Unselectable",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
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
          "ability": "Yunli_Ability03_SuperCounter",
          "isTrigger": true
        }
      ]
    }
  ],
  "references": []
}