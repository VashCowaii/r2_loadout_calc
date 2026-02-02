const configAbility = {
  "fileName": "-1954781239_FantasticStory_PlusAbility_0031_Insert",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "variableName": "DV_FantasticStory_PlusAbility_0031_TriggerDamageFlag",
      "value": 0
    },
    "Deleted bullshit",
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "searchRandom": true,
      "includeDyingTargets": true,
      "maxTargets": 5,
      "ifTargetFound": [
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
              "operator": "Variables[0] (TempHP_get) || Variables[1] (ADF_2_get) || MUL || RETURN",
              "displayLines": "(TempHP_get * ADF_2_get)",
              "constants": [],
              "variables": [
                "TempHP_get",
                "ADF_2_get"
              ]
            },
            "dmgFormulaFinal": "Converted DMG Base",
            "Toughness": null,
            "Tags": null,
            "attackType": "DOT"
          }
        }
      ]
    },
    "Trigger: Attack End"
  ],
  "references": []
}