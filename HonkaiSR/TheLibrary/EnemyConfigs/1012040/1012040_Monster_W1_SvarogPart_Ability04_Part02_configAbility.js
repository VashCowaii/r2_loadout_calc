const configAbility = {
  "fileName": "1012040_Monster_W1_SvarogPart_Ability04_Part02",
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
        "modifier": "Svarog_Control_OnPart_Modifier"
      },
      "passed": [
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Svarog's Confinement Target}}"
          },
          "variableName": "Owner_MaxHP",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Svarog's Confinement Target}}"
          },
          "modifier": "Standard_AbilityTarget"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Svarog's Confinement Target}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (Owner_MaxHP) || Variables[1] ({[Skill03[0]]}) || MUL || RETURN",
              "displayLines": "(Owner_MaxHP * {[Skill03[0]]})",
              "constants": [],
              "variables": [
                "Owner_MaxHP",
                "{[Skill03[0]]}"
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
            "target": "{{Svarog's Confinement Target}}"
          },
          "popUpText": "Restrained"
        }
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Svarog's Confinement Target}}"
      },
      "modifier": "Standard_AbilityTarget"
    },
    "Trigger: Ability End"
  ],
  "references": []
}