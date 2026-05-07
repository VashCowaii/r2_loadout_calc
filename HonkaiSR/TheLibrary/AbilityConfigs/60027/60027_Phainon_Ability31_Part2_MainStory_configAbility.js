const configAbility = {
  "fileName": "60027_Phainon_Ability31_Part2_MainStory",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable with Team Count",
      "target": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}.[[living]]"
      },
      "variableName": "ADF_TargetCount",
      "livingTargets": true,
      "context": "ContextAbility"
    },
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
          "variableName": "_CurrentHp",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "displayLines": 1
            },
            "DamageFlat": {
              "operator": "Variables[0] (_CurrentHp) || RETURN",
              "displayLines": "_CurrentHp",
              "constants": [],
              "variables": [
                "_CurrentHp"
              ]
            },
            "HitSplit": {
              "operator": "Constants[0] (1) || Variables[0] (ADF_TargetCount) || DIV || RETURN",
              "displayLines": "(1 / ADF_TargetCount)",
              "constants": [
                1
              ],
              "variables": [
                "ADF_TargetCount"
              ]
            },
            "Toughness": {
              "displayLines": 60
            },
            "Tags": null,
            "behaviorTag": "DirectlyLoseHpHit",
            "attackType": "Ultimate"
          },
          "attackType": "Ultimate"
        }
      ]
    },
    "Trigger: Attack End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  }
}