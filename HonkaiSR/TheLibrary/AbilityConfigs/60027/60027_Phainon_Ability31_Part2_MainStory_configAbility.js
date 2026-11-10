const configAbility = {
  "fileName": "60027_Phainon_Ability31_Part2_MainStory",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable with Team Count",
      "variableName": "ADF_TargetCount",
      "scope": "ContextAbility",
      "readTarget": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}.[[living]]"
      },
      "living": true
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
          "variableName": "_CurrentHp",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
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
              "displayLines": "_CurrentHp"
            },
            "HitSplit": {
              "displayLines": "(1 / ADF_TargetCount)"
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