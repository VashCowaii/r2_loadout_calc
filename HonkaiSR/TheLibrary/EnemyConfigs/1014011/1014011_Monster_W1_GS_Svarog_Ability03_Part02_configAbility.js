const configAbility = {
  "fileName": "1014011_Monster_W1_GS_Svarog_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "modifier": "Boss_Cocolia_Endurance"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Character ID",
        "ID": 1310,
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "characterName": "Firefly"
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "Svarog_ListenPlayerDie_Modifier"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "modifier": "Svarog_ListenBreak_RemoveControl_Modifier"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "modifier": "Svarog_Part_ListenHP_Modifier",
      "valuePerStack": {
        "PassiveAbility02_P2_HPRatio": {
          "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__35) || RETURN",
          "displayLines": "ENEMIES_OBJECT_UNUSED__35",
          "constants": [],
          "variables": [
            "ENEMIES_OBJECT_UNUSED__35"
          ]
        },
        "PassiveAbility02_P3_StanceBreakTakenRatio": {
          "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__36) || RETURN",
          "displayLines": "ENEMIES_OBJECT_UNUSED__36",
          "constants": [],
          "variables": [
            "ENEMIES_OBJECT_UNUSED__36"
          ]
        },
        "PassiveAbility02_P4_MDF_AllDamageTypeTakenRatio": {
          "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__37) || RETURN",
          "displayLines": "ENEMIES_OBJECT_UNUSED__37",
          "constants": [],
          "variables": [
            "ENEMIES_OBJECT_UNUSED__37"
          ]
        },
        "PassiveAbility02_P5_LifeTime": {
          "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__38) || RETURN",
          "displayLines": "ENEMIES_OBJECT_UNUSED__38",
          "constants": [],
          "variables": [
            "ENEMIES_OBJECT_UNUSED__38"
          ]
        }
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "Svarog_Control_Modifier[<span class=\"descriptionNumberColor\">Restrain</span>]"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "modifier": "Svarog_Control_OnPart_Modifier"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "Svarog_ListenPlayerAllDie_Modifier"
    },
    "Trigger: Attack End",
    "Trigger: Ability End"
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Svarog_ListenPlayerAllDie_Modifier",
      "execute": [
        {
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Player Team All}}.[[removeMemosprite]]"
                },
                "value1": "TeamCharacterCount",
                "compareType": "<=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Svarog_Control_Modifier[<span class=\"descriptionNumberColor\">Restrain</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  },
                  "modifier": "Svarog_Control_OnPart_Modifier"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  },
                  "modifier": "Svarog_Part_OnTurnEndChangePhaseModifier"
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Svarog_ListenBreak_RemoveControl_Modifier",
      "execute": [
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Svarog's Confinement Target}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Svarog_Control_Modifier[<span class=\"descriptionNumberColor\">Restrain</span>]"
                }
              ]
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Svarog_Control_OnPart_Modifier"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Summoner of Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "Phase_Flag",
              "value": 1
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Summoner of Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "AIFlag",
              "value": 1
            },
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "phase": "Phase0"
            },
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}