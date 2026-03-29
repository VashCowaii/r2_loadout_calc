const configAbility = {
  "fileName": "4034016_Monster_W4_FireProwler_01_DeathRattle",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "Deathrattle_Count"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "OR",
        "conditionList": [
          {
            "name": "Stage Type",
            "stageType": "EvolveBuildActivity"
          }
        ]
      }
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "includeDyingTargets": true,
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "value1": "Deathrattle",
        "compareType": "=",
        "value2": 1
      },
      "ignoreParallelWarning": true,
      "ifTargetFound": [
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "Deathrattle_Count",
          "value": 1,
          "max": 4
        },
        {
          "name": "Reconstruct Modifier",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "casterFilter": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1577610826\">Enemy_W4_FireProwler_RallyHP_Mark</a>",
          "includeTargetsInLimbo": true,
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-228290033\">ParamModifier</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"742116058\">Enemy_W4_FireProwler_AllDamageReduce</a>[<span class=\"descriptionNumberColor\">DMG Reduction</span>]"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"742116058\">Enemy_W4_FireProwler_AllDamageReduce</a>[<span class=\"descriptionNumberColor\">DMG Reduction</span>]"
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill01[4]]}) || RETURN",
              "displayLines": "{[Skill01[4]]}",
              "constants": [],
              "variables": [
                "{[Skill01[4]]}"
              ]
            },
            "dmgFormula": "Max HP Scaling",
            "dmgFormulaFinal": "Converted DMG Base",
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK"
          }
        },
        {
          "name": "Define Custom Variable",
          "scope": "TargetEntity",
          "variableName": "Deathrattle",
          "value": 0
        }
      ]
    },
    "Trigger: Attack End",
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-1577610826\">Enemy_W4_FireProwler_RallyHP_Mark</a>"
      },
      "passed": [
        {
          "name": "UI Display Event (On Entity)",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "popUpText": "\"Entangled By Agony\"'s restoration reduced"
        }
      ],
      "failed": [
        {
          "name": "UI Display Event (On Entity)",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "popUpText": "\"Entangled By Agony\" dispelled"
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}