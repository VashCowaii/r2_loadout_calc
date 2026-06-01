const configAbility = {
  "fileName": "3021022_Monster_W2_ArgentiTotem_01_AbilityP01_Part01",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Exit Broken-State",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "PowerFlag",
        "compareType": "=",
        "value2": 1,
        "contextScope": "TargetEntity"
      },
      "passed": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value": "PowerFlag"
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-444895536\">W2_ArgentiTotem_01_BattleScore1</a>"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-957742074\">Enemy_Argenti_DamageUP</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
          "duration": {
            "operator": "Variables[0] (UnusedUnderThisBase_8274) || RETURN",
            "displayLines": "UnusedUnderThisBase_8274",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_8274"
            ]
          },
          "valuePerStack": {
            "MDF_ShowValue1": {
              "operator": "Variables[0] (UnusedUnderThisBase_8280) || RETURN",
              "displayLines": "UnusedUnderThisBase_8280",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_8280"
              ]
            }
          },
          "addStacksPerTrigger": {
            "operator": "Variables[0] (UnusedUnderThisBase_8275) || Constants[0] (1) || SUB || RETURN",
            "displayLines": "(UnusedUnderThisBase_8275 - 1)",
            "constants": [
              1
            ],
            "variables": [
              "UnusedUnderThisBase_8275"
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-957742074\">Enemy_Argenti_DamageUP</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
          "duration": {
            "operator": "Variables[0] (UnusedUnderThisBase_8274) || RETURN",
            "displayLines": "UnusedUnderThisBase_8274",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_8274"
            ]
          },
          "valuePerStack": {
            "MDF_ShowValue1": {
              "operator": "Variables[0] (UnusedUnderThisBase_8280) || RETURN",
              "displayLines": "UnusedUnderThisBase_8280",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_8280"
              ]
            }
          },
          "addStacksPerTrigger": 1
        }
      ],
      "failed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-957742074\">Enemy_Argenti_DamageUP</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
          "duration": {
            "operator": "Variables[0] (UnusedUnderThisBase_8274) || RETURN",
            "displayLines": "UnusedUnderThisBase_8274",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_8274"
            ]
          },
          "valuePerStack": {
            "MDF_ShowValue1": {
              "operator": "Variables[0] (UnusedUnderThisBase_8280) || RETURN",
              "displayLines": "UnusedUnderThisBase_8280",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_8280"
              ]
            }
          },
          "addStacksPerTrigger": {
            "operator": "Variables[0] (UnusedUnderThisBase_8281) || RETURN",
            "displayLines": "UnusedUnderThisBase_8281",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_8281"
            ]
          }
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  },
  "references": []
}