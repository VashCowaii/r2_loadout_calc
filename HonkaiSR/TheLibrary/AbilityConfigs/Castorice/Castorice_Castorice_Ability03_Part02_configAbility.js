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
          "displayLines": "0.5"
        },
        "CastoriceServant_BaseSpeed": {
          "displayLines": "165"
        },
        "CastoriceServant_LifeTime": {
          "displayLines": "3"
        },
        "CastoriceServant_CurrentHP": {
          "displayLines": "Castorice_Passive_MaxCount"
        },
        "CastoriceServant_MaxHP": {
          "displayLines": "Castorice_Passive_MaxCount"
        },
        "CastoriceServant_PointB2_SpeedRatio": {
          "displayLines": "1"
        },
        "CastoriceServant_PointB3_AllDamageTypeAddedRatio": {
          "displayLines": "0.3"
        },
        "CastoriceServant_PointB3_MaxLayer": {
          "displayLines": "6"
        },
        "CastoriceServant_Eidolon1_HPRatio01": {
          "displayLines": "0.8"
        },
        "CastoriceServant_Eidolon1_HPRatio02": {
          "displayLines": "0.5"
        },
        "CastoriceServant_Eidolon1_DamageRatio01": {
          "displayLines": "1.2"
        },
        "CastoriceServant_Eidolon1_DamageRatio02": {
          "displayLines": "1.4"
        },
        "CastoriceServant_Eidolon2_MaxCount": {
          "displayLines": "2"
        },
        "CastoriceServant_Eidolon6_AddCount": {
          "displayLines": "3"
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
          "value": {
            "displayLines": "2"
          },
          "variableName": "Castorice_Rank02_Count"
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Memosprite}}"
          },
          "value": {
            "displayLines": "2"
          },
          "variableName": "CastoriceServant_Rank02_Count"
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
          "source": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "refPoint": "After"
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  }
}