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
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target List}}"
          },
          "variableName": "Summon_Deathrattle"
        },
        {
          "name": "Deal Toughness DMG",
          "value": {
            "operator": "Variables[0] ({[Skill02[2]]}) || Variables[1] (Summon_Deathrattle) || MUL || RETURN",
            "displayLines": "({[Skill02[2]]} * Summon_Deathrattle)",
            "constants": [],
            "variables": [
              "{[Skill02[2]]}",
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
  "references": []
}