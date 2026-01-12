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
      "functionName": "Advanced_Silwolf_Ability02_OverrideNameForStatus",
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
                  "target": "Owner of this Modifier",
                  "modifierName": "Advanced_Silwolf_BPAbility_WeakType[<span class=\"descriptionNumberColor\">Extra Weakness</span>]",
                  "modifierNameUpdate": "Advanced_Silwolf_BPAbility_WeakType_Physical[<span class=\"descriptionNumberColor\">Additional Physical Weakness</span>]"
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 2,
              "execute": [
                {
                  "name": "Override Modifier Name",
                  "target": "Owner of this Modifier",
                  "modifierName": "Advanced_Silwolf_BPAbility_WeakType[<span class=\"descriptionNumberColor\">Extra Weakness</span>]",
                  "modifierNameUpdate": "Advanced_Silwolf_BPAbility_WeakType_Fire[<span class=\"descriptionNumberColor\">Additional Fire Weakness</span>]"
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 4,
              "execute": [
                {
                  "name": "Override Modifier Name",
                  "target": "Owner of this Modifier",
                  "modifierName": "Advanced_Silwolf_BPAbility_WeakType[<span class=\"descriptionNumberColor\">Extra Weakness</span>]",
                  "modifierNameUpdate": "Advanced_Silwolf_BPAbility_WeakType_Ice[<span class=\"descriptionNumberColor\">Additional Ice Weakness</span>]"
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 8,
              "execute": [
                {
                  "name": "Override Modifier Name",
                  "target": "Owner of this Modifier",
                  "modifierName": "Advanced_Silwolf_BPAbility_WeakType[<span class=\"descriptionNumberColor\">Extra Weakness</span>]",
                  "modifierNameUpdate": "Advanced_Silwolf_BPAbility_WeakType_Thunder[<span class=\"descriptionNumberColor\">Additional Lightning Weakness</span>]"
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 16,
              "execute": [
                {
                  "name": "Override Modifier Name",
                  "target": "Owner of this Modifier",
                  "modifierName": "Advanced_Silwolf_BPAbility_WeakType[<span class=\"descriptionNumberColor\">Extra Weakness</span>]",
                  "modifierNameUpdate": "Advanced_Silwolf_BPAbility_WeakType_Wind[<span class=\"descriptionNumberColor\">Additional Wind Weakness</span>]"
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 32,
              "execute": [
                {
                  "name": "Override Modifier Name",
                  "target": "Owner of this Modifier",
                  "modifierName": "Advanced_Silwolf_BPAbility_WeakType[<span class=\"descriptionNumberColor\">Extra Weakness</span>]",
                  "modifierNameUpdate": "Advanced_Silwolf_BPAbility_WeakType_Quantum[<span class=\"descriptionNumberColor\">Additional Quantum Weakness</span>]"
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 64,
              "execute": [
                {
                  "name": "Override Modifier Name",
                  "target": "Owner of this Modifier",
                  "modifierName": "Advanced_Silwolf_BPAbility_WeakType[<span class=\"descriptionNumberColor\">Extra Weakness</span>]",
                  "modifierNameUpdate": "Advanced_Silwolf_BPAbility_WeakType_Imaginary[<span class=\"descriptionNumberColor\">Additional Imaginary Weakness</span>]"
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
      "functionName": "Advanced_Silwolf_PassiveAbility01_WeakTypeTransfer",
      "parse": [
        {
          "name": "Find New Target",
          "from": [
            {
              "name": "Target List",
              "target": "All Enemies (AOE)"
            },
            {
              "name": "Sort by Life-State",
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
                    "target": "Use Prior Target(s) Defined",
                    "invertCondition": true
                  },
                  {
                    "name": "Living State",
                    "state": "Bit_OnStage",
                    "target": "Use Prior Target(s) Defined"
                  },
                  {
                    "name": "Has Modifier",
                    "target": "Use Prior Target(s) Defined",
                    "modifier": "Advanced_Silwolf_BPAbility_WeakType[<span class=\"descriptionNumberColor\">Extra Weakness</span>]",
                    "invertCondition": true
                  }
                ]
              }
            }
          ],
          "maxTargets": 1,
          "conditions": {
            "name": "Living State",
            "state": "Mask_AliveOnly",
            "target": "Caster"
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": "Use Prior Target(s) Defined",
              "modifier": "Advanced_Silwolf_BPAbility_WeakType[<span class=\"descriptionNumberColor\">Extra Weakness</span>]",
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