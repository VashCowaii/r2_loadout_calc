const configAbility = {
  "fileName": "5013011_Monster_W4_Claymore_02_Ability05_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{All Team Members(Exclude Self)}}"
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{All Team Members(Exclude Self)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"135439563\">MModifier_Monster_W4_Claymore_02_Ability05_Speed</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
      "duration": {
        "operator": "Variables[0] ({[Skill05[4]]}) || RETURN",
        "displayLines": "{[Skill05[4]]}",
        "constants": [],
        "variables": [
          "{[Skill05[4]]}"
        ]
      },
      "valuePerStack": {
        "MDF_PropertyValue": {
          "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
          "displayLines": "{[Skill05[0]]}",
          "constants": [],
          "variables": [
            "{[Skill05[0]]}"
          ]
        }
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Check Boolean Value",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "value": "ENEMIES_OBJECT_UNUSED__181"
      },
      "passed": [
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "set": 0
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"437668983\">Monster_W4_Nikadory_RLBoss_DamageUp</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
          "duration": {
            "operator": "Variables[0] (UnusedUnderThisBase_584) || RETURN",
            "displayLines": "UnusedUnderThisBase_584",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_584"
            ]
          },
          "valuePerStack": {
            "MDF_DamageUpRatio_PerLayer": {
              "operator": "Variables[0] (UnusedUnderThisBase_585) || RETURN",
              "displayLines": "UnusedUnderThisBase_585",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_585"
              ]
            }
          }
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": []
}