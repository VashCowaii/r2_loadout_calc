const configAbility = {
  "fileName": "4014020_Monster_W4_Hearse_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "IF",
      "conditions": {
        "name": "Enemy ID",
        "ID": 4014022,
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "characterName": "The Giver, Master of Legions, Lance of Fury (Complete)",
        "isBaseCompare": true
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Enemy ID",
        "ID": 4014022,
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "characterName": "The Giver, Master of Legions, Lance of Fury (Complete)",
        "isBaseCompare": true
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}.[[removeMemosprite]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1871536192\">Monster_W4_Hearse_Sign_Enhance</a>[<span class=\"descriptionNumberColor\">Drowning in Terror</span>]",
          "valuePerStack": {
            "MDF_DamageTakenUpRatio": {
              "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
              "displayLines": "{[Skill02[0]]}",
              "constants": [],
              "variables": [
                "{[Skill02[0]]}"
              ]
            },
            "MDF_ConfineChance": {
              "operator": "Variables[0] (UnusedUnderThisBase_317) || RETURN",
              "displayLines": "UnusedUnderThisBase_317",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_317"
              ]
            }
          }
        }
      ],
      "failed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}.[[removeMemosprite]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"770051597\">Monster_W4_Hearse_Sign</a>[<span class=\"descriptionNumberColor\">Strife-Granted Fear</span>]",
          "valuePerStack": {
            "MDF_DamageTakenUpRatio": {
              "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
              "displayLines": "{[Skill02[0]]}",
              "constants": [],
              "variables": [
                "{[Skill02[0]]}"
              ]
            }
          }
        }
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"985676222\">Monster_W4_Hearse_Enhance</a>[<span class=\"descriptionNumberColor\">Strife-Granted Valiance</span>]"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-200542532\">Monster_APShow_OneMore</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-689985018\">Monster_W4_Hearse_ActionBarHint</a>"
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}