const configAbility = {
  "fileName": "TopazNumby_Topaz_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Numby",
      "modifier": "Topaz_BE_UltraEnhance_Text"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": "Numby",
      "modifier": "Topaz_BE_UltraEnhance_Text"
    },
    {
      "name": "Update Energy",
      "on": "Caster",
      "valuePercent": 1,
      "ofAbilitySplit": true,
      "isFixed": "* ERR"
    },
    {
      "name": "Trigger Ability",
      "from": "Numby",
      "ability": "Topaz_BE_RefreshEnhance"
    },
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "Topaz_UltraEnhance[<span class=\"descriptionNumberColor\">Windfall Bonanza!</span>]",
      "counter": {
        "operator": "Variables[0] (MaxEnhance) || RETURN",
        "displayLines": "MaxEnhance",
        "constants": [],
        "variables": [
          "MaxEnhance"
        ]
      },
      "valuePerStack": {
        "Ability03_P1_BEDamageRatio": {
          "operator": "Variables[0] (1.5) || RETURN",
          "displayLines": "1.5",
          "constants": [],
          "variables": [
            1.5
          ]
        },
        "Ability03_P2_CriticalChance": {
          "operator": "Variables[0] (0.25) || RETURN",
          "displayLines": "0.25",
          "constants": [],
          "variables": [
            0.25
          ]
        },
        "Ability03_P3_DelayRatio": {
          "operator": "Variables[0] (0.5) || RETURN",
          "displayLines": "0.5",
          "constants": [],
          "variables": [
            0.5
          ]
        },
        "Eidolon6_P2_PenRatio": {
          "operator": "Variables[0] (0.1) || RETURN",
          "displayLines": "0.1",
          "constants": [],
          "variables": [
            0.1
          ]
        }
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "CurEnhance",
      "value": {
        "operator": "Variables[0] (MaxEnhance) || RETURN",
        "displayLines": "MaxEnhance",
        "constants": [],
        "variables": [
          "MaxEnhance"
        ]
      }
    },
    {
      "name": "Show Attack Time",
      "enhanced": {
        "operator": "Variables[0] (MaxEnhance) || RETURN",
        "displayLines": "MaxEnhance",
        "constants": [],
        "variables": [
          "MaxEnhance"
        ]
      },
      "on": null,
      "show": true
    },
    {
      "name": "Add Events/Bonuses",
      "to": "Numby",
      "modifier": "Topaz_BE_UltraEnhance_ShowText",
      "valuePerStack": {
        "ATKCount": {
          "operator": "Variables[0] (MaxEnhance) || RETURN",
          "displayLines": "MaxEnhance",
          "constants": [],
          "variables": [
            "MaxEnhance"
          ]
        }
      }
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": {
        "operator": "Variables[0] (MaxEnhance) || RETURN",
        "displayLines": "MaxEnhance",
        "constants": [],
        "variables": [
          "MaxEnhance"
        ]
      },
      "maximum": {
        "operator": "Variables[0] (MaxEnhance) || RETURN",
        "displayLines": "MaxEnhance",
        "constants": [],
        "variables": [
          "MaxEnhance"
        ]
      },
      "assignState": "True",
      "priorState": "Active",
      "bar#": 3,
      "cooldown": 0
    },
    "Trigger: Ability End"
  ],
  "references": []
}