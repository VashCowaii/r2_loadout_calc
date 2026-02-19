const configAbility = {
  "fileName": "3014023_Monster_W3_Death_Ability12_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"606573810\">Monster_W3_Death_AllDamageUp</a>[<span class=\"descriptionNumberColor\">Biting Obituary</span>]"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "searchRandom": true,
      "maxTargets": 2,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"1275477744\">Modifier_W3_Death_Attack_Sign</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
      }
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "searchRandom": true,
      "maxTargets": 2,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"1275477744\">Modifier_W3_Death_Attack_Sign</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
      },
      "ifTargetFound": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Toughness": null,
            "Tags": null,
            "attackType": "DOT"
          }
        },
        {
          "name": "Set HP Value",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "setValue": {
            "operator": "Constants[0] (0.01) || RETURN",
            "displayLines": "0.01",
            "constants": [
              0.01
            ],
            "variables": []
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"787482349\">Death_Control_Modifier_MainLine</a>",
          "valuePerStack": {
            "MDF_HealHPPercentage": {
              "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
              "displayLines": "{[Skill05[0]]}",
              "constants": [],
              "variables": [
                "{[Skill05[0]]}"
              ]
            },
            "MDF_AddSPValue": {
              "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
              "displayLines": "{[Skill05[1]]}",
              "constants": [],
              "variables": [
                "{[Skill05[1]]}"
              ]
            }
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Skill07_EffectFlag",
            "compareType": "=",
            "value2": 0,
            "contextScope": "TargetEntity"
          },
          "passed": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "Skill07_EffectFlag",
              "context": "TargetEntity",
              "value": 1
            }
          ],
          "failed": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "Skill07_EffectFlag"
            }
          ]
        }
      ]
    },
    "Trigger: Attack End",
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "Skill07_EffectFlag"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "Death_SpecialVictory_Flag",
        "compareType": "=",
        "value2": 1,
        "contextScope": "TargetEntity"
      },
      "passed": [
        {
          "name": "Assign Value to Stat",
          "variableName": "MainLine_Character_1",
          "value": {
            "operator": "Variables[0] (MainLine_Character_1) || RETURN",
            "displayLines": "MainLine_Character_1",
            "constants": [],
            "variables": [
              "MainLine_Character_1"
            ]
          }
        },
        {
          "name": "Assign Value to Stat",
          "variableName": "MainLine_Character_2",
          "value": {
            "operator": "Variables[0] (MainLine_Character_2) || RETURN",
            "displayLines": "MainLine_Character_2",
            "constants": [],
            "variables": [
              "MainLine_Character_2"
            ]
          }
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": []
}