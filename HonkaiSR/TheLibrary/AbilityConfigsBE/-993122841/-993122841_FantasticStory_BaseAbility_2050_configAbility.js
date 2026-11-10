const configAbility = {
  "fileName": "-993122841_FantasticStory_BaseAbility_2050",
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
          "name": "ADF_8",
          "value": 5
        },
        {
          "name": "ADF_9",
          "value": 10
        },
        {
          "name": "ADF_10",
          "value": 1.2
        },
        {
          "name": "ADF_11",
          "value": 0.5
        }
      ]
    },
    {
      "name": "Add Ability",
      "abilityName": "FantasticStory_BaseAbility_2060",
      "parameters": {
        "ADF_1_Get": {
          "displayLines": "ADF_1"
        },
        "ADF_2_Get": {
          "displayLines": "ADF_2"
        },
        "ADF_3_Get": {
          "displayLines": "ADF_3"
        },
        "ADF_4_Get": {
          "displayLines": "ADF_4"
        },
        "ADF_5_Get": {
          "displayLines": "ADF_5"
        },
        "ADF_6_Get": {
          "displayLines": "ADF_6"
        }
      }
    },
    {
      "name": "Add Ability",
      "abilityName": "FantasticStory_BaseAbility_2060_BaseAddOn",
      "parameters": {
        "ADF_1_Get": {
          "displayLines": "ADF_8"
        }
      }
    },
    {
      "name": "Add Ability",
      "abilityName": "FantasticStory_BaseAbility_2060_BeforeFever"
    },
    {
      "name": "Add Ability",
      "abilityName": "FantasticStory_BaseAbility_2060_EnterFever",
      "parameters": {
        "ADF_1_Get": {
          "displayLines": "ADF_9"
        },
        "ADF_2_Get": {
          "displayLines": "ADF_10"
        },
        "ADF_3_Get": {
          "displayLines": "ADF_11"
        }
      }
    }
  ],
  "references": []
}