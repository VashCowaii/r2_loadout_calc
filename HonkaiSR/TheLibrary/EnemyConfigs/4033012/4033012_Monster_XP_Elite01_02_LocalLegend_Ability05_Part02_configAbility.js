const configAbility = {
  "fileName": "4033012_Monster_XP_Elite01_02_LocalLegend_Ability05_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "ifTargetFound": [
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "variableName": "_TargetMaxHp",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "AttackScaling": {
            "DamageType": {
              "name": "Damage Type Source",
              "sourceType": {}
            },
            "DamageFlat": {
              "operator": "Variables[0] (UnusedUnderThisBase_156) || Variables[1] (_TargetMaxHp) || MUL || RETURN",
              "displayLines": "(UnusedUnderThisBase_156 * _TargetMaxHp)",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_156",
                "_TargetMaxHp"
              ]
            },
            "dmgFormulaFinal": "Converted DMG Base",
            "Toughness": null,
            "Tags": null,
            "attackType": "True DMG",
            "EnergyGainPercent": "100%"
          }
        }
      ]
    },
    "Trigger: Attack End",
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}