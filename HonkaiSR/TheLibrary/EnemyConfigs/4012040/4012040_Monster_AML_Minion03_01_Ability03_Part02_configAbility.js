const configAbility = {
  "fileName": "4012040_Monster_AML_Minion03_01_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Sequence",
        "Sequence": [
          {
            "name": "Target Name",
            "target": "{{All Team Members with Unselectable Team Members(Exclude Self)}}"
          },
          {
            "name": "Target Filter",
            "conditions": {
              "name": "AND",
              "conditionList": [
                {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1282910303\">Enemy_Heaven_StoneShieldController</a>"
                }
              ]
            }
          }
        ]
      },
      "searchRandom": true
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1735610792\">MModifier_Monster_AML_Minion03_01_Halo</a>[<span class=\"descriptionNumberColor\">War Song</span>]",
      "valuePerStack": {
        "MDF_DamagePercentage": {
          "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
          "displayLines": "{[Skill03[0]]}",
          "constants": [],
          "variables": [
            "{[Skill03[0]]}"
          ]
        },
        "MDF_AddMaxLayer": {
          "operator": "Variables[0] ({[Skill03[1]]}) || RETURN",
          "displayLines": "{[Skill03[1]]}",
          "constants": [],
          "variables": [
            "{[Skill03[1]]}"
          ]
        },
        "MDF_SetMaxLayer": {
          "operator": "Variables[0] ({[Skill03[2]]}) || RETURN",
          "displayLines": "{[Skill03[2]]}",
          "constants": [],
          "variables": [
            "{[Skill03[2]]}"
          ]
        }
      }
    },
    "Trigger: Ability End"
  ],
  "references": []
}