const configAbility = {
  "fileName": "4064010_Monster_W4_Serpent_01_SummonDeathrattle",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "Summon_Deathrattle"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "includeDyingTargets": true,
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "value1": "MDF_Deathrattle",
        "compareType": "=",
        "value2": 1,
        "contextScope": "TargetEntity"
      },
      "ifTargetFound": [
        {
          "name": "Define Custom Variable with Team Count",
          "variableName": "Summon_Deathrattle",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Parameter Target List}}"
          }
        },
        {
          "name": "Deal Toughness DMG",
          "value": {
            "displayLines": "({[Skill02[2]]} * Summon_Deathrattle)"
          },
          "defender": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ignoreAttackerBonuses": true,
          "canDelay": true,
          "ToughnessDMGType": "Null Type"
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "scope": "TargetEntity",
      "value": 0,
      "variableName": "Deathrattle"
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}