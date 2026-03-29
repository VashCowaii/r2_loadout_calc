const configAbility = {
  "fileName": "4064014_Monster_W4_Serpent_01_SummonDeathrattle",
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
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target List}}"
          },
          "variableName": "Summon_Deathrattle"
        },
        {
          "name": "Deal Toughness DMG",
          "value": {
            "operator": "Variables[0] (MDF_Deathrattle) || Variables[1] (Summon_Deathrattle) || MUL || RETURN",
            "displayLines": "(MDF_Deathrattle * Summon_Deathrattle)",
            "constants": [],
            "variables": [
              "MDF_Deathrattle",
              "Summon_Deathrattle"
            ]
          },
          "defender": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ignoreAttackerBonuses": true,
          "canDelay": true,
          "ToughnessDMGType": {
            "name": "Damage Type Source",
            "sourceType": {}
          }
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "scope": "TargetEntity",
      "variableName": "Deathrattle",
      "value": 0
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}