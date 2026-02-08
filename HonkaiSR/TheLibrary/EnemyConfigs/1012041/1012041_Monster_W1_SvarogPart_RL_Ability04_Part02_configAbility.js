const configAbility = {
  "fileName": "1012041_Monster_W1_SvarogPart_RL_Ability04_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Modifier Holder}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"1762407654\">Monster_W1_Svarog_RL_Control_OnPart_Modifier</a>"
      },
      "passed": [
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Svarog's Confinement Target v2}}"
          },
          "variableName": "Owner_MaxHP",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Svarog's Confinement Target v2}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"985995630\">Standard_AbilityTarget</a>"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Svarog's Confinement Target v2}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "DamageFlat": {
              "operator": "Variables[0] (Owner_MaxHP) || Variables[1] ({[PassiveSkill03[0]]}) || MUL || RETURN",
              "displayLines": "(Owner_MaxHP * {[PassiveSkill03[0]]})",
              "constants": [],
              "variables": [
                "Owner_MaxHP",
                "{[PassiveSkill03[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Additional DMG",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "UI Display Event (On Entity)",
          "target": {
            "name": "Target Name",
            "target": "{{Svarog's Confinement Target v2}}"
          },
          "popUpText": "Restrained"
        }
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Svarog's Confinement Target v2}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"985995630\">Standard_AbilityTarget</a>"
    },
    "Trigger: Ability End"
  ],
  "references": []
}