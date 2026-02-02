const configAbility = {
  "fileName": "-993122841_FantasticStory_PlusAbility_2061",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "Define Custom Variable",
      "variableName": "DV_FantasticStory_PlusAbility_2061",
      "value": 1
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "ContextCaster",
      "variableName": "DV_FantasticStory_PlusAbility_2061_ADF_1",
      "value": {
        "operator": "Variables[0] (#ADF_1) || RETURN",
        "displayLines": "#ADF_1",
        "constants": [],
        "variables": [
          "#ADF_1"
        ]
      }
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "ContextCaster",
      "variableName": "DV_FantasticStory_PlusAbility_2061_ADF_2",
      "value": {
        "operator": "Variables[0] (#ADF_2) || RETURN",
        "displayLines": "#ADF_2",
        "constants": [],
        "variables": [
          "#ADF_2"
        ]
      }
    }
  ],
  "references": []
}