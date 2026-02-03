const configAbility = {
  "fileName": "8013144_WMonster_W0_Boss_Part2_PassiveAbility03",
  "childAbilityList": [
    "8013144_WMonster_W0_Boss_Part2_PassiveAbility03"
  ],
  "skillTrigger": "PassiveSkill03",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "AML_Boss_BattleScore1"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Enemy_AML_Boss_Part2_OnBreakRecoverSoundEffect"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Enemy_W0_Boss_Part2_OnBreakRecoverChangeWeak"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Target Part 0}}"
        },
        "value1": "HP_Bars_Remaining",
        "compareType": "=",
        "value2": 2
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_W0_Boss_Part2_OnPhase3SpeedUp[<span class=\"descriptionNumberColor\">Burst</span>]",
          "valuePerStack": {
            "MDF_SpeedAddedRatio": {
              "operator": "Variables[0] ({[PassiveSkill03[0]]}) || RETURN",
              "displayLines": "{[PassiveSkill03[0]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill03[0]]}"
              ]
            }
          }
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Enemy_AML_Boss_Part2_OnBreakRecoverSoundEffect",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "flagName": "Break"
                  },
                  {
                    "name": "Current Action Holder Is",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    }
                  }
                ]
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_W0_Boss_Part2_OnBreakRecoverChangeWeak",
      "execute": [
        {
          "eventTrigger": "End Broken State [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Enemy_Monster_AML_Boss_Part2_Ability07"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}