const configAbility = {
  "fileName": "SilverWolf_Functions",
  "abilityType": "Char. Functions",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "length": 2,
  "parse": [
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-509776970\">Advanced_Silwolf_Ability02_OverrideNameForStatus</a>",
      "parse": [
        {
          "name": "SWITCH",
          "switchValue": {
            "operator": "Variables[0] (DF_WeakType) || RETURN",
            "displayLines": "DF_WeakType",
            "constants": [],
            "variables": [
              "DF_WeakType"
            ]
          },
          "caseEvents": [
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 1,
              "execute": [
                {
                  "name": "Override Modifier Name",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifierName": "<a class=\"gModGreen\" id=\"-755062835\">Advanced_Silwolf_BPAbility_WeakType</a>[<span class=\"descriptionNumberColor\">Extra Weakness</span>]",
                  "modifierNameUpdate": "<a class=\"gModGreen\" id=\"-1062446229\">Advanced_Silwolf_BPAbility_WeakType_Physical</a>[<span class=\"descriptionNumberColor\">Additional Physical Weakness</span>]"
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 2,
              "execute": [
                {
                  "name": "Override Modifier Name",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifierName": "<a class=\"gModGreen\" id=\"-755062835\">Advanced_Silwolf_BPAbility_WeakType</a>[<span class=\"descriptionNumberColor\">Extra Weakness</span>]",
                  "modifierNameUpdate": "<a class=\"gModGreen\" id=\"860600554\">Advanced_Silwolf_BPAbility_WeakType_Fire</a>[<span class=\"descriptionNumberColor\">Additional Fire Weakness</span>]"
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 4,
              "execute": [
                {
                  "name": "Override Modifier Name",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifierName": "<a class=\"gModGreen\" id=\"-755062835\">Advanced_Silwolf_BPAbility_WeakType</a>[<span class=\"descriptionNumberColor\">Extra Weakness</span>]",
                  "modifierNameUpdate": "<a class=\"gModGreen\" id=\"-1570756707\">Advanced_Silwolf_BPAbility_WeakType_Ice</a>[<span class=\"descriptionNumberColor\">Additional Ice Weakness</span>]"
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 8,
              "execute": [
                {
                  "name": "Override Modifier Name",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifierName": "<a class=\"gModGreen\" id=\"-755062835\">Advanced_Silwolf_BPAbility_WeakType</a>[<span class=\"descriptionNumberColor\">Extra Weakness</span>]",
                  "modifierNameUpdate": "<a class=\"gModGreen\" id=\"1824019324\">Advanced_Silwolf_BPAbility_WeakType_Thunder</a>[<span class=\"descriptionNumberColor\">Additional Lightning Weakness</span>]"
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 16,
              "execute": [
                {
                  "name": "Override Modifier Name",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifierName": "<a class=\"gModGreen\" id=\"-755062835\">Advanced_Silwolf_BPAbility_WeakType</a>[<span class=\"descriptionNumberColor\">Extra Weakness</span>]",
                  "modifierNameUpdate": "<a class=\"gModGreen\" id=\"-1784823028\">Advanced_Silwolf_BPAbility_WeakType_Wind</a>[<span class=\"descriptionNumberColor\">Additional Wind Weakness</span>]"
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 32,
              "execute": [
                {
                  "name": "Override Modifier Name",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifierName": "<a class=\"gModGreen\" id=\"-755062835\">Advanced_Silwolf_BPAbility_WeakType</a>[<span class=\"descriptionNumberColor\">Extra Weakness</span>]",
                  "modifierNameUpdate": "<a class=\"gModGreen\" id=\"-1901191893\">Advanced_Silwolf_BPAbility_WeakType_Quantum</a>[<span class=\"descriptionNumberColor\">Additional Quantum Weakness</span>]"
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 64,
              "execute": [
                {
                  "name": "Override Modifier Name",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifierName": "<a class=\"gModGreen\" id=\"-755062835\">Advanced_Silwolf_BPAbility_WeakType</a>[<span class=\"descriptionNumberColor\">Extra Weakness</span>]",
                  "modifierNameUpdate": "<a class=\"gModGreen\" id=\"-1384846161\">Advanced_Silwolf_BPAbility_WeakType_Imaginary</a>[<span class=\"descriptionNumberColor\">Additional Imaginary Weakness</span>]"
                }
              ]
            }
          ],
          "defaultEvents": []
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__1273458995\">Advanced_Silwolf_PassiveAbility01_WeakTypeTransfer</a>",
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              {
                "name": "Filter by Life-State",
                "state": "Mask_AliveOnly"
              },
              {
                "name": "Sort by Monster Rank",
                "byHighest": true,
                "maxRank": "Elite"
              },
              {
                "name": "Target Filter",
                "conditions": {
                  "name": "AND",
                  "conditionList": [
                    {
                      "name": "Target is Unselectable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "invertCondition": true
                    },
                    {
                      "name": "Living State",
                      "state": "Bit_OnStage",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    },
                    {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-755062835\">Advanced_Silwolf_BPAbility_WeakType</a>[<span class=\"descriptionNumberColor\">Extra Weakness</span>]",
                      "invertCondition": true
                    }
                  ]
                }
              }
            ]
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Living State",
            "state": "Mask_AliveOnly",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            }
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-755062835\">Advanced_Silwolf_BPAbility_WeakType</a>[<span class=\"descriptionNumberColor\">Extra Weakness</span>]",
              "duration": {
                "operator": "Variables[0] (3) || RETURN",
                "displayLines": "3",
                "constants": [],
                "variables": [
                  3
                ]
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.2) || RETURN",
                  "displayLines": "0.2",
                  "constants": [],
                  "variables": [
                    0.2
                  ]
                },
                "_WeakType": {
                  "operator": "Variables[0] (_WeakType) || RETURN",
                  "displayLines": "_WeakType",
                  "constants": [],
                  "variables": [
                    "_WeakType"
                  ]
                }
              }
            }
          ]
        }
      ]
    }
  ],
  "references": []
}