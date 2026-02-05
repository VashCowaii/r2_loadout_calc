const configAbility = {
  "fileName": "4014036_Monster_W4_Pollux_PassiveAbility_Insert",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "_StorySimulationSpeed",
        "compareType": "=",
        "value2": 1
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "_StorySimulationSpeed",
          "value": 0
        }
      ]
    },
    {
      "name": "Remove Modifier Behavior Flag(s)",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}} + {{Caster's Minions}}"
      },
      "flagNames": []
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Monster_W4_Pollux_Strengthen[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Monster_W4_Pollux_DisableAction"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Enemy_W4_Pollux_Endurance"
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
      "name": "Use Custom Character Function",
      "functionName": "Monster_ChangePhase"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "searchRandom": true,
      "ifTargetFound": [
        {
          "name": "Use Custom Character Function",
          "functionName": "Monster_ChangePhase_ParamEntity"
        }
      ]
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "AIFlag"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Monster_W4_Pollux_PartController_LockHP"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Monster_W4_Pollux_Strengthen_Break"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Modifier Holder}}"
      },
      "modifier": "Monster_W4_Pollux_Strengthen_BreakMark"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "_EnergyValue",
      "value": 0
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": {
        "operator": "Variables[0] (_EnergyValue) || RETURN",
        "displayLines": "_EnergyValue",
        "constants": [],
        "variables": [
          "_EnergyValue"
        ]
      },
      "entityClass": "Enemy",
      "maximum": 1,
      "assignState": "True",
      "state": "Normal",
      "trigger": "SpEff_Trigger"
    },
    {
      "name": "Change Character Transformation",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "phase": "Phase1"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "StoryMode",
        "compareType": "=",
        "value2": 1
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W4_Pollux_StoryMode_LockHP"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Enemy ID",
            "ID": 4014032,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Pollux, Netherwing Husk, Ferry of Souls"
          },
          {
            "name": "Compare: Variable",
            "value1": "_WorldLevel",
            "compareType": "<",
            "value2": 6
          }
        ]
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}} + {{Caster's Minions}}"
          },
          "modifier": "Standard_Monster_AllDamageReduce[<span class=\"descriptionNumberColor\">DMG Mitigation</span>]",
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (UnusedUnderThisBase_76) || RETURN",
              "displayLines": "UnusedUnderThisBase_76",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_76"
              ]
            }
          }
        }
      ],
      "failed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}} + {{Caster's Minions}}"
          },
          "modifier": "Standard_Monster_AllDamageReduce[<span class=\"descriptionNumberColor\">DMG Mitigation</span>]",
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (UnusedUnderThisBase_77) || RETURN",
              "displayLines": "UnusedUnderThisBase_77",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_77"
              ]
            }
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "OR",
        "conditionList": [
          {
            "name": "Stage Type",
            "stageType": "Challenge"
          },
          {
            "name": "Stage Type",
            "stageType": "VerseSimulation"
          },
          {
            "name": "Stage Type",
            "stageType": "StrongChallengeActivity"
          },
          {
            "name": "Stage Type",
            "stageType": "RogueRelic"
          },
          {
            "name": "Enemy ID",
            "ID": 4014032,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Pollux, Netherwing Husk, Ferry of Souls"
          }
        ]
      }
    }
  ],
  "references": []
}