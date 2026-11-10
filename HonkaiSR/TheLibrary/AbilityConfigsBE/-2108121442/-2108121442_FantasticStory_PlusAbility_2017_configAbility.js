const configAbility = {
  "fileName": "-2108121442_FantasticStory_PlusAbility_2017",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "Define Custom Variable",
      "value": 1,
      "variableName": "DV_FantasticStory_PlusAbility_2017"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "DV_FantasticStory_PlusAbility_2017_ADF_1",
      "resetValue": {
        "operator": "Variables[0] (#ADF_1) || RETURN",
        "displayLines": "#ADF_1",
        "constants": [],
        "variables": [
          "#ADF_1"
        ]
      },
      "scope": "ContextCaster"
    }
  ],
  "references": []
}