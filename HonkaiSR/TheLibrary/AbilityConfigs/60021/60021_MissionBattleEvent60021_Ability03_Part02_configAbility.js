const configAbility = {
  "fileName": "60021_MissionBattleEvent60021_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Skill Points Modification",
      "adjustmentValue": 5,
      "adjustmentType": "+"
    },
    {
      "name": "Heal",
      "target": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "healPercent": 1,
      "formula": "Heal from Target MaxHP"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Character ID",
        "ID": 18007,
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "characterName": null
      },
      "ifTargetFound": [
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "variableName": "CurEnergy",
          "context": "TargetEntity",
          "value": 100
        }
      ]
    },
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "valuePercent": 1,
      "ofAbilitySplit": true,
      "isFixed": "* ERR"
    },
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "All Player Team Members"
  }
}