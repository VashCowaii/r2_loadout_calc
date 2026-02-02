const configAbility = {
  "fileName": "-2108121442_FantasticStory_BaseAbility_2000",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "Define Variable with Buff Configs",
      "finalKeyArray": [
        {
          "name": "ADF_1",
          "value": 100
        },
        {
          "name": "ADF_2",
          "value": 0.3
        },
        {
          "name": "ADF_3",
          "value": 0.03
        },
        {
          "name": "ADF_4",
          "value": 0.05
        },
        {
          "name": "ADF_5",
          "value": 0.05
        },
        {
          "name": "ADF_6",
          "value": 100
        },
        {
          "name": "ADF_7",
          "value": 5
        },
        {
          "name": "ADF_8",
          "value": 0.55
        },
        {
          "name": "ADF_9",
          "value": 1
        },
        {
          "name": "ADF_10",
          "value": 0.5
        },
        {
          "name": "ADF_11",
          "value": 0.55
        }
      ]
    },
    {
      "name": "Add Ability",
      "abilityName": "FantasticStory_BaseAbility_2010",
      "parameters": {
        "ADF_1_Get": {
          "operator": "Variables[0] (ADF_1) || RETURN",
          "displayLines": "ADF_1",
          "constants": [],
          "variables": [
            "ADF_1"
          ]
        },
        "ADF_2_Get": {
          "operator": "Variables[0] (ADF_2) || RETURN",
          "displayLines": "ADF_2",
          "constants": [],
          "variables": [
            "ADF_2"
          ]
        },
        "ADF_3_Get": {
          "operator": "Variables[0] (ADF_3) || RETURN",
          "displayLines": "ADF_3",
          "constants": [],
          "variables": [
            "ADF_3"
          ]
        },
        "ADF_4_Get": {
          "operator": "Variables[0] (ADF_4) || RETURN",
          "displayLines": "ADF_4",
          "constants": [],
          "variables": [
            "ADF_4"
          ]
        },
        "ADF_5_Get": {
          "operator": "Variables[0] (ADF_5) || RETURN",
          "displayLines": "ADF_5",
          "constants": [],
          "variables": [
            "ADF_5"
          ]
        },
        "ADF_6_Get": {
          "operator": "Variables[0] (ADF_6) || RETURN",
          "displayLines": "ADF_6",
          "constants": [],
          "variables": [
            "ADF_6"
          ]
        }
      }
    },
    {
      "name": "Add Ability",
      "abilityName": "FantasticStory_BaseAbility_2010_BaseAddOn",
      "parameters": {
        "ADF_1_Get": {
          "operator": "Variables[0] (ADF_7) || RETURN",
          "displayLines": "ADF_7",
          "constants": [],
          "variables": [
            "ADF_7"
          ]
        }
      }
    },
    {
      "name": "Add Ability",
      "abilityName": "FantasticStory_BaseAbility_2010_BeforeFever",
      "parameters": {
        "ADF_1_Get": {
          "operator": "Variables[0] (ADF_8) || RETURN",
          "displayLines": "ADF_8",
          "constants": [],
          "variables": [
            "ADF_8"
          ]
        }
      }
    },
    {
      "name": "Add Ability",
      "abilityName": "FantasticStory_BaseAbility_2010_EnterFever",
      "parameters": {
        "ADF_1_Get": {
          "operator": "Variables[0] (ADF_9) || RETURN",
          "displayLines": "ADF_9",
          "constants": [],
          "variables": [
            "ADF_9"
          ]
        },
        "ADF_2_Get": {
          "operator": "Variables[0] (ADF_10) || RETURN",
          "displayLines": "ADF_10",
          "constants": [],
          "variables": [
            "ADF_10"
          ]
        },
        "ADF_3_Get": {
          "operator": "Variables[0] (ADF_11) || RETURN",
          "displayLines": "ADF_11",
          "constants": [],
          "variables": [
            "ADF_11"
          ]
        }
      }
    }
  ],
  "references": []
}