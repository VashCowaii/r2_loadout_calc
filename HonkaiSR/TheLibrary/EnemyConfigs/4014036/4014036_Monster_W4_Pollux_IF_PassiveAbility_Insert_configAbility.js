const configAbility = {
  "fileName": "4014036_Monster_W4_Pollux_IF_PassiveAbility_Insert",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
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
      "modifier": "Enemy_W4_Pollux_IF_Strengthen[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "modifier": "Enemy_W4_PolluxPart_IF_Link"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "modifier": "Enemy_W4_PolluxPart_IF_Reflex[<span class=\"descriptionNumberColor\">Corrosive Retaliation</span>]",
      "valuePerStack": {
        "MDF_ReflexDamageValue": {
          "operator": "Variables[0] ({[SkillP04[0]]}) || RETURN",
          "displayLines": "{[SkillP04[0]]}",
          "constants": [],
          "variables": [
            "{[SkillP04[0]]}"
          ]
        }
      }
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
      "variableName": "AIFlag",
      "value": 1
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Monster_W4_Pollux_IF_PartController_LockHP"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Enemy_W4_Pollux_IF_Strengthen_Break"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Modifier Holder}}"
      },
      "modifier": "Enemy_W4_Pollux_IF_Strengthen_BreakMark"
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
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Standard_Monster_AllDamageReduce[<span class=\"descriptionNumberColor\">DMG Mitigation</span>]",
      "valuePerStack": {
        "MDF_PropertyValue": {
          "operator": "Variables[0] ({[SkillP03[4]]}) || RETURN",
          "displayLines": "{[SkillP03[4]]}",
          "constants": [],
          "variables": [
            "{[SkillP03[4]]}"
          ]
        }
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Monster_Standard_WeakControl[<span class=\"descriptionNumberColor\">Toughness Protection</span>]"
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
          }
        ]
      }
    }
  ],
  "references": []
}