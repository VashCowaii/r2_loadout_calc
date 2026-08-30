const configAbility = {
  "fileName": "AventurineWaveflair_AventurineW_PassiveAbility01",
  "childAbilityList": [
    "AventurineWaveflair_AventurineW_PassiveAbility01"
  ],
  "skillTrigger": "SkillP01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Define Custom Variable",
      "variableName": "_MaxEnergyPoint",
      "value": {
        "operator": "Variables[0] (30) || RETURN",
        "displayLines": "30",
        "constants": [],
        "variables": [
          30
        ]
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-880249058\">AventurineW_InsertElationAbilityShowToast</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1435762620\">AventurineW_EnergyPointTotalController</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1423861026\">AventurineW_EchoPointLifeTime</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Sift Through Gilded Dreams"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"90748474\">AventurineW_Tree03_TriggerNum</a>[<span class=\"descriptionNumberColor\">Sift Through Gilded Dreams</span>]"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Sift Through Gilded Dreams"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-750726366\">AventurineW_Point03_Logic</a>"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 1
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1353143847\">AventurineW_Eidolon1</a>[<span class=\"descriptionNumberColor\">A Holiday on the Line</span>]",
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (0.24) || RETURN",
              "displayLines": "0.24",
              "constants": [],
              "variables": [
                0.24
              ]
            }
          }
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
          "variableName": "_MaxEnergyPoint",
          "value": {
            "operator": "Variables[0] (50) || RETURN",
            "displayLines": "50",
            "constants": [],
            "variables": [
              50
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1403476704\">AventurineW_Eidolon2</a>"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 6
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1946436058\">AventurineW_Eidolon6_ElationDamageExtra</a>[<span class=\"descriptionNumberColor\">The Past in Fast Lane</span>]",
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (0.25) || RETURN",
              "displayLines": "0.25",
              "constants": [],
              "variables": [
                0.25
              ]
            }
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Party in Perfect Paradise"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1237850841\">AventurineW_ElationConvert</a>"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"2141093581\">AventurineW_Passive</a>"
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": 0,
      "maximum": {
        "operator": "Variables[0] (_MaxEnergyPoint) || RETURN",
        "displayLines": "_MaxEnergyPoint",
        "constants": [],
        "variables": [
          "_MaxEnergyPoint"
        ]
      },
      "assignState": "True",
      "priorState": "Normal",
      "bar#": 4,
      "cooldown": 0
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  }
}