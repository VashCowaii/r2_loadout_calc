const configAbility = {
  "fileName": "5024010_Monster_W5_Ripper_FleshBonus",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Compare: Monster Rank",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "compareType": ">=",
        "value2": 4
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2073151026\">WMonster_W5_RipperPart_Bonus</a>",
          "stackLimit": {
            "operator": "Variables[0] (Buff_MaxLayer) || RETURN",
            "displayLines": "Buff_MaxLayer",
            "constants": [],
            "variables": [
              "Buff_MaxLayer"
            ]
          },
          "valuePerStack": {
            "MDF_DamageUpRatio_PerLayer": {
              "operator": "Variables[0] (Buff_DamageUpRatio) || RETURN",
              "displayLines": "Buff_DamageUpRatio",
              "constants": [],
              "variables": [
                "Buff_DamageUpRatio"
              ]
            }
          }
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}