const configAbility = {
  "fileName": "1687681259_FantasticStory_PlusAbility_2312",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "Define Custom Variable",
      "variableName": "DV_FantasticStory_PlusAbility_2312",
      "value": 1
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "DV_FantasticStory_PlusAbility_2312_ADF_1",
      "resetValue": {
        "operator": "Variables[0] (#ADF_1) || RETURN",
        "displayLines": "#ADF_1",
        "constants": [],
        "variables": [
          "#ADF_1"
        ]
      },
      "scope": "ContextCaster"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "DV_FantasticStory_PlusAbility_2312_ADF_2",
      "resetValue": {
        "operator": "Variables[0] (#ADF_2) || RETURN",
        "displayLines": "#ADF_2",
        "constants": [],
        "variables": [
          "#ADF_2"
        ]
      },
      "scope": "ContextCaster"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "DV_FantasticStory_PlusAbility_2312_ADF_3",
      "resetValue": {
        "operator": "Variables[0] (#ADF_3) || RETURN",
        "displayLines": "#ADF_3",
        "constants": [],
        "variables": [
          "#ADF_3"
        ]
      },
      "scope": "ContextCaster"
    }
  ],
  "references": []
}