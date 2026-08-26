const configAbility = {
  "fileName": "4023010_Monster_W4_Griffin_Ability01_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Fire",
        "Damage": {
          "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
          "displayLines": "{[Skill01[0]]}",
          "constants": [],
          "variables": [
            "{[Skill01[0]]}"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"263350627\">Enemy_XP_Elite01_Burn</a>[<span class=\"descriptionNumberColor\">Enkindle</span>]",
          "duration": {
            "operator": "Variables[0] (UnusedUnderThisBase_13870) || RETURN",
            "displayLines": "UnusedUnderThisBase_13870",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_13870"
            ]
          },
          "baseChance": {
            "operator": "Variables[0] (UnusedUnderThisBase_13863) || RETURN",
            "displayLines": "UnusedUnderThisBase_13863",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_13863"
            ]
          },
          "valuePerStack": {
            "MDF_DamagePercentage_Layer": {
              "operator": "Variables[0] (UnusedUnderThisBase_13871) || RETURN",
              "displayLines": "UnusedUnderThisBase_13871",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_13871"
              ]
            }
          }
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}