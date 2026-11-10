const configAbility = {
  "fileName": "1005014_Monster_W1_CocoliaP2_IF_Ability11_ChangePhase",
  "childAbilityList": [
    "1005014_Monster_W1_CocoliaP2_IF_Ability11_ChangePhase"
  ],
  "skillTrigger": "Skill11",
  "abilityType": "Skill",
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Animation Event",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "state": "SkillPerform02",
      "passed": [
        "Deleted bullshit",
        {
          "name": "Animation Task",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-856191872\">Enemy_W1_CocoliaP2_EnvironmentEffect_01</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-805859015\">Enemy_W1_CocoliaP2_EnvironmentEffect_02</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"30904515\">Enemy_W1_CocoliaP2_IF_ImaginaryPhaseEffect</a>"
            },
            {
              "name": "Change Entity Turn-State",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "phase": "PhaseNormal"
            },
            {
              "name": "Action Advance/Delay",
              "advanceType": "Set",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "multiBase": 0
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"155177783\">Monster_W1_CocoliaP2_IF_BOSS_PowerUp</a>",
              "valuePerStack": {
                "MDF_Cocolia_IF_BOSS_AllDamageReduce": {
                  "displayLines": "{[Skill11[0]]}"
                },
                "MDF_Cocolia_IF_BOSS_AllDamageTypeAddedRatio": {
                  "displayLines": "{[Skill11[1]]}"
                },
                "MDF_Cocolia_IF_BOSS_SpeedAddedRatio": {
                  "displayLines": "{[Skill11[2]]}"
                }
              }
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"964527705\">Enemy_W1_CocoliaP2_PartController</a>"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "Cocolia_ChangePhase_InsertController",
              "scope": "TargetEntity"
            }
          ]
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__288944780\">Enemy_W1_CocoliaP2_IF_Instance_DisableAction</a>",
      "modifierFlags": [
        "DisableAction"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1281903716\">Enemy_W1_CocoliaP2_IF_FinalPhase_SpeedUp</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;",
              "statValue": {
                "displayLines": "MDF_SpeedDelta"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__30904515\">Enemy_W1_CocoliaP2_IF_ImaginaryPhaseEffect</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        }
      ]
    }
  ]
}