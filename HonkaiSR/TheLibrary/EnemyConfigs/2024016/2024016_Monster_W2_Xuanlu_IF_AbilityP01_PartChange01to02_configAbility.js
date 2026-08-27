const configAbility = {
  "fileName": "2024016_Monster_W2_Xuanlu_IF_AbilityP01_PartChange01to02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Dispel Debuffs",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "silent": true
    },
    "Deleted bullshit",
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"677221093\">Enemy_W2_Xuanlu_IF_Ability07_WeaknessControl</a>[<span class=\"descriptionNumberColor\">Hardy Leaf Sheath</span>]"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1404590263\">Standard_Endurance</a>"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"542143301\">Monster_ChangePhase</a>"
    },
    {
      "name": "Action Advance/Delay",
      "advanceType": "Set",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "set": 0
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "AIFlag",
      "value": 1
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"113542848\">Enemy_W2_Xuanlu_10_SecondPhase</a>"
    },
    "Deleted bullshit",
    {
      "name": "Create Enemies",
      "delayPercent": {
        "operator": "Variables[0] ({[SkillP01[4]]}) || RETURN",
        "displayLines": "{[SkillP01[4]]}",
        "constants": [],
        "variables": [
          "{[SkillP01[4]]}"
        ]
      },
      "enemyList": [
        {
          "name": "Enemy Entry",
          "enemyID": {
            "operator": "Variables[0] (SummonList_ADF_7) || RETURN",
            "displayLines": "SummonList_ADF_7",
            "constants": [],
            "variables": [
              "SummonList_ADF_7"
            ]
          },
          "locationType": "BeforeCaster"
        }
      ]
    },
    {
      "name": "Create Enemies",
      "delayPercent": {
        "operator": "Variables[0] ({[SkillP01[5]]}) || RETURN",
        "displayLines": "{[SkillP01[5]]}",
        "constants": [],
        "variables": [
          "{[SkillP01[5]]}"
        ]
      },
      "enemyList": [
        {
          "name": "Enemy Entry",
          "enemyID": {
            "operator": "Variables[0] (SummonList_ADF_8) || RETURN",
            "displayLines": "SummonList_ADF_8",
            "constants": [],
            "variables": [
              "SummonList_ADF_8"
            ]
          },
          "locationType": "AfterCaster"
        }
      ]
    },
    {
      "name": "Create Enemies",
      "delayPercent": {
        "operator": "Variables[0] ({[SkillP01[6]]}) || RETURN",
        "displayLines": "{[SkillP01[6]]}",
        "constants": [],
        "variables": [
          "{[SkillP01[6]]}"
        ]
      },
      "refreshPositions": false,
      "enemyList": [
        {
          "name": "Enemy Entry",
          "enemyID": {
            "operator": "Variables[0] (SummonList_ADF_4) || RETURN",
            "displayLines": "SummonList_ADF_4",
            "constants": [],
            "variables": [
              "SummonList_ADF_4"
            ]
          },
          "locationType": "First"
        }
      ]
    },
    {
      "name": "Create Enemies",
      "delayPercent": {
        "operator": "Variables[0] ({[SkillP01[7]]}) || RETURN",
        "displayLines": "{[SkillP01[7]]}",
        "constants": [],
        "variables": [
          "{[SkillP01[7]]}"
        ]
      },
      "refreshPositions": false,
      "enemyList": [
        {
          "name": "Enemy Entry",
          "enemyID": {
            "operator": "Variables[0] (SummonList_ADF_4) || RETURN",
            "displayLines": "SummonList_ADF_4",
            "constants": [],
            "variables": [
              "SummonList_ADF_4"
            ]
          },
          "locationType": "Last"
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Enemy ID",
        "ID": {
          "operator": "Variables[0] (SummonList_ADF_7) || RETURN",
          "displayLines": "SummonList_ADF_7",
          "constants": [],
          "variables": [
            "SummonList_ADF_7"
          ]
        },
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "characterName": null
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-880477462\">Enemy_W4_Xuanlu_IF_ServantLV3_01</a>[<span class=\"descriptionNumberColor\">Right-Hand Man</span>]"
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Enemy ID",
        "ID": {
          "operator": "Variables[0] (SummonList_ADF_8) || RETURN",
          "displayLines": "SummonList_ADF_8",
          "constants": [],
          "variables": [
            "SummonList_ADF_8"
          ]
        },
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "characterName": null
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-897255081\">Enemy_W4_Xuanlu_IF_ServantLV3_02</a>[<span class=\"descriptionNumberColor\">Right-Hand Man</span>]"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"679693225\">Enemy_W2_Xuanlu_IF_AbilityP01_WeaknessControl</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Xuanlu: Servant 02}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1650758297\">Enemy_W2_Xuanlu_IF_AbilityP01_ServantLV3_Weakness_01</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Xuanlu: Servant 02}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1633980678\">Enemy_W2_Xuanlu_IF_AbilityP01_ServantLV3_Weakness_02</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"225051539\">Enemy_W2_Xuanlu_IF_Ability08Controller</a>",
      "valuePerStack": {
        "MDF_MaxChargeCount": {
          "operator": "Variables[0] ({[Skill08[2]]}) || RETURN",
          "displayLines": "{[Skill08[2]]}",
          "constants": [],
          "variables": [
            "{[Skill08[2]]}"
          ]
        }
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
    },
    {
      "name": "Define Custom Variable",
      "scope": "TargetEntity",
      "variableName": "CurrentXuanluPartSummonIndex",
      "value": 1
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}