const configAbility = {
  "fileName": "60025_Phainon_Ability21_Insert_Part02_MainStory",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Attack-Type Extension",
      "identifier": "Phainon_Skill21",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "typeToExtend": "Follow-up",
      "extendTypeTo": "Skill"
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
            "Toughness": {
              "displayLines": 30
            },
            "Tags": [
              "Counter"
            ],
            "behaviorTag": "DirectlyLoseHpHit",
            "attackType": "Follow-up"
          }
        }
      ]
    },
    {
      "name": "Remove Attack-Type Extension",
      "identifier": "Phainon_Skill21",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "typeToExtend": "Follow-up"
    },
    "Trigger: Attack End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  }
}