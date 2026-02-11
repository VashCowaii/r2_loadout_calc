const configAbility = {
  "fileName": "4062010_Monster_W4_Turkey_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Deleted bullshit",
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "conditions": {
        "name": "Enemy ID",
        "ID": 406201,
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "characterName": null,
        "isCompareUniqueID": true
      },
      "ifTargetFound": [
        {
          "name": "Trigger Joint-Attack Ability",
          "abilityList": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Parameter Target List}}"
                  },
                  {
                    "name": "Target Index",
                    "indexType": "IndexStrict"
                  }
                ]
              },
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1846949450\">Enemy_W4_Turkey_Ability02_Power</a>[<span class=\"descriptionNumberColor\">Hemotort Resonance</span>]",
                "invertCondition": true
              },
              "abortFlags": [
                "STAT_CTRL",
                "DisableAction",
                "Break"
              ],
              "ability": "Monster_W4_Turkey_Ability02_Part01_Assist"
            },
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Parameter Target List}}"
                  },
                  {
                    "name": "Target Index",
                    "indexType": "IndexStrict",
                    "indexValue": 1
                  }
                ]
              },
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1846949450\">Enemy_W4_Turkey_Ability02_Power</a>[<span class=\"descriptionNumberColor\">Hemotort Resonance</span>]",
                "invertCondition": true
              },
              "abortFlags": [
                "STAT_CTRL",
                "DisableAction",
                "Break"
              ],
              "ability": "Monster_W4_Turkey_Ability02_Part01_Assist"
            },
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Parameter Target List}}"
                  },
                  {
                    "name": "Target Index",
                    "indexType": "IndexStrict",
                    "indexValue": 2
                  }
                ]
              },
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1846949450\">Enemy_W4_Turkey_Ability02_Power</a>[<span class=\"descriptionNumberColor\">Hemotort Resonance</span>]",
                "invertCondition": true
              },
              "abortFlags": [
                "STAT_CTRL",
                "DisableAction",
                "Break"
              ],
              "ability": "Monster_W4_Turkey_Ability02_Part01_Assist"
            },
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Parameter Target List}}"
                  },
                  {
                    "name": "Target Index",
                    "indexType": "IndexStrict",
                    "indexValue": 3
                  }
                ]
              },
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1846949450\">Enemy_W4_Turkey_Ability02_Power</a>[<span class=\"descriptionNumberColor\">Hemotort Resonance</span>]",
                "invertCondition": true
              },
              "abortFlags": [
                "STAT_CTRL",
                "DisableAction",
                "Break"
              ],
              "ability": "Monster_W4_Turkey_Ability02_Part01_Assist"
            },
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Parameter Target List}}"
                  },
                  {
                    "name": "Target Index",
                    "indexType": "IndexStrict",
                    "indexValue": 4
                  }
                ]
              },
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1846949450\">Enemy_W4_Turkey_Ability02_Power</a>[<span class=\"descriptionNumberColor\">Hemotort Resonance</span>]",
                "invertCondition": true
              },
              "abortFlags": [
                "STAT_CTRL",
                "DisableAction",
                "Break"
              ],
              "ability": "Monster_W4_Turkey_Ability02_Part01_Assist"
            }
          ]
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": []
}