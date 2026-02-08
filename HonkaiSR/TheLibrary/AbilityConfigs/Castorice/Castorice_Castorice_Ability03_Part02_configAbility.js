const configAbility = {
  "fileName": "Castorice_Castorice_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-604294216\">Castorice_Ability03_Field</a>"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"1186346947\">Castorice_ExtraSpecialSPReturn</a>",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    },
    {
      "name": "Summon Memosprite",
      "memoID": 11407,
      "valuePerStack": {
        "Castorice_Ability21_P3_HPPercentage": {
          "operator": "Variables[0] (0.5) || RETURN",
          "displayLines": "0.5",
          "constants": [],
          "variables": [
            0.5
          ]
        },
        "CastoriceServant_BaseSpeed": {
          "operator": "Variables[0] (165) || RETURN",
          "displayLines": "165",
          "constants": [],
          "variables": [
            165
          ]
        },
        "CastoriceServant_LifeTime": {
          "operator": "Variables[0] (3) || RETURN",
          "displayLines": "3",
          "constants": [],
          "variables": [
            3
          ]
        },
        "CastoriceServant_CurrentHP": {
          "operator": "Variables[0] (Castorice_Passive_MaxCount) || RETURN",
          "displayLines": "Castorice_Passive_MaxCount",
          "constants": [],
          "variables": [
            "Castorice_Passive_MaxCount"
          ]
        },
        "CastoriceServant_MaxHP": {
          "operator": "Variables[0] (Castorice_Passive_MaxCount) || RETURN",
          "displayLines": "Castorice_Passive_MaxCount",
          "constants": [],
          "variables": [
            "Castorice_Passive_MaxCount"
          ]
        },
        "CastoriceServant_PointB2_SpeedRatio": {
          "operator": "Variables[0] (1) || RETURN",
          "displayLines": "1",
          "constants": [],
          "variables": [
            1
          ]
        },
        "CastoriceServant_PointB3_AllDamageTypeAddedRatio": {
          "operator": "Variables[0] (0.3) || RETURN",
          "displayLines": "0.3",
          "constants": [],
          "variables": [
            0.3
          ]
        },
        "CastoriceServant_PointB3_MaxLayer": {
          "operator": "Variables[0] (6) || RETURN",
          "displayLines": "6",
          "constants": [],
          "variables": [
            6
          ]
        },
        "CastoriceServant_Eidolon1_HPRatio01": {
          "operator": "Variables[0] (0.8) || RETURN",
          "displayLines": "0.8",
          "constants": [],
          "variables": [
            0.8
          ]
        },
        "CastoriceServant_Eidolon1_HPRatio02": {
          "operator": "Variables[0] (0.5) || RETURN",
          "displayLines": "0.5",
          "constants": [],
          "variables": [
            0.5
          ]
        },
        "CastoriceServant_Eidolon1_DamageRatio01": {
          "operator": "Variables[0] (1.2) || RETURN",
          "displayLines": "1.2",
          "constants": [],
          "variables": [
            1.2
          ]
        },
        "CastoriceServant_Eidolon1_DamageRatio02": {
          "operator": "Variables[0] (1.4) || RETURN",
          "displayLines": "1.4",
          "constants": [],
          "variables": [
            1.4
          ]
        },
        "CastoriceServant_Eidolon2_MaxCount": {
          "operator": "Variables[0] (2) || RETURN",
          "displayLines": "2",
          "constants": [],
          "variables": [
            2
          ]
        },
        "CastoriceServant_Eidolon6_AddCount": {
          "operator": "Variables[0] (3) || RETURN",
          "displayLines": "3",
          "constants": [],
          "variables": [
            3
          ]
        }
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 2
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"176252830\">Castorice_Eidolon2_Check</a>"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 2
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "Castorice_Rank02_Count",
          "value": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Memosprite}}"
          },
          "variableName": "CastoriceServant_Rank02_Count",
          "value": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          }
        }
      ]
    },
    {
      "name": "Reconstruct Modifier",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"635972074\">Castorice_Passive_AllDamageTypeAddedRatio</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
      "execute": [
        {
          "name": "Copy Modifier",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Memosprite}}"
          },
          "source": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "dispelFilter": "AnyStatus",
          "copyType": "Override",
          "useParamModifier": true
        }
      ]
    },
    {
      "name": "Action Advance/Delay",
      "target": {
        "name": "Target Name",
        "target": "{{Caster's Memosprite}}"
      },
      "advanceType": "Advance",
      "multiAdd": -1
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 2
      },
      "passed": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-537679168\">ReduceActionDelay</a>",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variables": {
            "parameter[0]_NormalizedValue": 1
          }
        },
        {
          "name": "Advance/Delay up to Target",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}.[[getMemosprite]]"
          },
          "targetRef": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "refPoint": "After"
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": []
}