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
          "variableName": "Summon_Deathrattle",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Parameter Target List}}"
          }
        },
        {
          "name": "Deal Toughness DMG",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_13144) || Variables[1] (Summon_Deathrattle) || MUL || RETURN",
            "displayLines": "(UnusedUnderThisBase_13144 * Summon_Deathrattle)",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_13144",
              "Summon_Deathrattle"
            ]
          },
          "defender": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ignoreAttackerBonuses": true,
          "canDelay": true,
          "ToughnessDMGType": "Damage Type Source"
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