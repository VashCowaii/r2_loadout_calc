const configAbility = {
  "fileName": "60025_Phainon_Ability21_Insert_Part02_MainStory",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Attack-Type Extension",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "typeToExtend": "Follow-up",
      "extendTypeTo": "Skill",
      "instanceIdentifier": "Phainon_Skill21"
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
      "name": "Attack-Type Extension",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "typeToExtend": "Follow-up",
      "isRemove": true,
      "instanceIdentifier": "Phainon_Skill21"
    },
    "Trigger: Attack End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  }
}