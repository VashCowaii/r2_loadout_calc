const configAbility = {
  "fileName": "1012042_Monster_Svarog_RL_Insert",
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
          "variableName": "Owner_MaxHP",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Svarog's Confinement Target v2}}"
          },
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
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
              "displayLines": "(Owner_MaxHP * {[PassiveSkill03[0]]})"
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
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}