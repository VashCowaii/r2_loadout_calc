const configAbility = {
  "fileName": "SilverWolf_Advanced_Silwolf_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Single Target (Primary)",
      "modifier": "Advanced_Silwolf_BPAbility_AllDamageTypeResistanceDown[<span class=\"descriptionNumberColor\">All-Type RES Reduction</span>]",
      "duration": {
        "operator": "Variables[0] (2) || RETURN",
        "displayLines": "2",
        "constants": [],
        "variables": [
          2
        ]
      },
      "baseChance": {
        "operator": "Variables[0] (1) || RETURN",
        "displayLines": "1",
        "constants": [],
        "variables": [
          1
        ]
      },
      "valuePerStack": {
        "MDF_PropertyValue": {
          "operator": "Variables[0] (0.13) || RETURN",
          "displayLines": "0.13",
          "constants": [],
          "variables": [
            0.13
          ]
        }
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": "Single Target (Primary)",
      "modifier": "Advanced_Silwolf_BPAbility_WeakType[<span class=\"descriptionNumberColor\">Extra Weakness</span>]",
      "duration": {
        "operator": "Variables[0] (3) || RETURN",
        "displayLines": "3",
        "constants": [],
        "variables": [
          3
        ]
      },
      "baseChance": {
        "operator": "Variables[0] (1.2) || RETURN",
        "displayLines": "1.2",
        "constants": [],
        "variables": [
          1.2
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
        "_WeakType": 0,
        "_TheFirstAvatarWeakType": {
          "operator": "Variables[0] (_TheFirstAvatarWeakType) || RETURN",
          "displayLines": "_TheFirstAvatarWeakType",
          "constants": [],
          "variables": [
            "_TheFirstAvatarWeakType"
          ]
        }
      },
      "success": [
        {
          "name": "Define Custom Variable",
          "variableName": "_BPFlag",
          "value": 0
        }
      ],
      "failed": []
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "_BPFlag",
        "compareType": "=",
        "value2": 0
      },
      "passed": [
        {
          "name": "Use Custom Character Function",
          "functionName": "Advanced_Silwolf_Ability02_Success"
        }
      ],
      "failed": [
        {
          "name": "Use Custom Character Function",
          "functionName": "Advanced_Silwolf_Ability02_Failed"
        }
      ]
    }
  ],
  "references": []
}