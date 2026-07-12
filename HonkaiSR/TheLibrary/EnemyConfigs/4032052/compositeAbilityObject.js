const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 4032052,
  "trimCharacterName": 4032052,
  "abilityList": [
    "4032052_Monster_W4_Shooter_01_LocalLegend02_AbilityP01",
    "4032052_Monster_W4_Shooter_01_LocalLegend02_Ability01_Part02",
    "4032052_Monster_W4_Shooter_01_LocalLegend02_Ability01_Part01",
    "4032052_Handling"
  ],
  "abilityObject": {
    "4032052_Monster_W4_Shooter_01_LocalLegend02_AbilityP01": {
      "fileName": "4032052_Monster_W4_Shooter_01_LocalLegend02_AbilityP01",
      "skillTrigger": "SkillP01",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"276019182\">Enemy_W4_Shooter_01_ConfineHit_Controller</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4032052_Monster_W4_Shooter_01_LocalLegend02_Ability01_Part02": {
      "fileName": "4032052_Monster_W4_Shooter_01_LocalLegend02_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{EVENT[RoT] Dark Praetor: Dark Characters}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1028185089\">Enemy_AML_Minion02_01_RallyHP_Controller_V2</a>",
          "valuePerStack": {
            "MDF_RallyTransferRatio": {
              "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
              "displayLines": "{[SkillP01[0]]}",
              "constants": [],
              "variables": [
                "{[SkillP01[0]]}"
              ]
            },
            "MDF_Rally_HealPercentage": {
              "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
              "displayLines": "{[SkillP01[1]]}",
              "constants": [],
              "variables": [
                "{[SkillP01[1]]}"
              ]
            },
            "MDF_Rally_HealUpRatio": {
              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
              "displayLines": "{[SkillP01[2]]}",
              "constants": [],
              "variables": [
                "{[SkillP01[2]]}"
              ]
            },
            "MDF_Rally_Strongth_AllDamageTypeAddedRatio": {
              "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
              "displayLines": "{[SkillP01[3]]}",
              "constants": [],
              "variables": [
                "{[SkillP01[3]]}"
              ]
            }
          }
        },
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{EVENT[RoT] Dark Praetor: Dark Characters}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
              "displayLines": "{[Skill01[0]]}",
              "constants": [],
              "variables": [
                "{[Skill01[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "4032052_Monster_W4_Shooter_01_LocalLegend02_Ability01_Part01": {
      "fileName": "4032052_Monster_W4_Shooter_01_LocalLegend02_Ability01_Part01",
      "childAbilityList": [
        "4032052_Monster_W4_Shooter_01_LocalLegend02_Ability01_Camera",
        "4032052_Monster_W4_Shooter_01_LocalLegend02_Ability01_Part01",
        "4032052_Monster_W4_Shooter_01_LocalLegend02_Ability01_Part02"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W4_Shooter_01_LocalLegend02_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}",
        "targetIsVariable": true
      },
      "references": []
    },
    "4032052_Handling": {
      "fileName": "4032052_Handling",
      "abilityType": "Handling",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Action Handling",
          "values": [
            {
              "name": "Define Handler String",
              "variableName": "CurrentPhase",
              "value": "Common_SequenceThree_Phase01"
            },
            {
              "name": "Define Handler Boolean",
              "variableName": "ForbidClearSkillUseRecord",
              "value": true
            }
          ],
          "options": [
            {
              "name": "HANDLER OPTION",
              "option": "UseSequenceSkill",
              "goal": [
                {
                  "name": "Sequence Event",
                  "passed": [
                    {
                      "name": "Use Sequence Ability Option"
                    }
                  ]
                }
              ],
              "type": "DefaultDSE",
              "check": [
                {
                  "name": "Sequence Ability Use Value",
                  "valueCheck": 1
                }
              ]
            }
          ]
        }
      ],
      "references": []
    }
  }
}