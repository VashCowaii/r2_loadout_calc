const configAbility = {
  "fileName": "-243519640_Modifiers",
  "abilityType": "Char. Modifiers",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Modifier Construction",
      "for": "MStrongChallengeEX_StageAbility_EX_BeingBreakDMGShow",
      "stackType": "Replace",
      "stackData": [
        "MDF_PropertyValue"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "MStrongChallengeEX_StageAbility_EX_BeingBreakDMGTrigger03"
    },
    {
      "name": "Modifier Construction",
      "for": "MStrongChallengeEX_StageAbility_EX_BeingBreakDMGTrigger02"
    },
    {
      "name": "Modifier Construction",
      "for": "MStrongChallengeEX_StageAbility_EX_BeingBreakDMGTrigger01"
    },
    {
      "name": "Modifier Construction",
      "for": "MStrongChallengeEX_Talent_StageAbility_BOSS_007_Debuff",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "Layer",
              "multiplier": 1
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (Layer) || Variables[1] (MDF_PropertyValue) || MUL || RETURN",
                "displayLines": "(Layer * MDF_PropertyValue)",
                "constants": [],
                "variables": [
                  "Layer",
                  "MDF_PropertyValue"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "MStrongChallengeEX_Talent_StageAbility_BOSS_007_Trigger",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              "modifier": "MStrongChallengeEX_Talent_StageAbility_BOSS_007_Debuff",
              "duration": {
                "operator": "Variables[0] (MDF_LifeTime) || RETURN",
                "displayLines": "MDF_LifeTime",
                "constants": [],
                "variables": [
                  "MDF_LifeTime"
                ]
              },
              "stackLimit": {
                "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                "displayLines": "MDF_MaxLayer",
                "constants": [],
                "variables": [
                  "MDF_MaxLayer"
                ]
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                  "displayLines": "MDF_PropertyValue",
                  "constants": [],
                  "variables": [
                    "MDF_PropertyValue"
                  ]
                }
              },
              "casterAssign": "TargetSelf"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Ability",
              "abilityName": "StrongChallengeEX_Talent_StageAbility_007_Minion04_RunAway_Part01"
            },
            {
              "name": "Add Ability",
              "abilityName": "StrongChallengeEX_Talent_StageAbility_007_Minion04_RunAway_Part02"
            },
            {
              "name": "Inject Ability Use",
              "abilityName": "Monster_XP_Minion04_02_AbilityP01_InsertAbility_EnterBattle_Huimie",
              "abilityTarget": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "priorityTag": "MonsterBattleCry",
              "canHitNonTargets": true,
              "showInActionOrder": true,
              "allowAbilityTriggers": false
            }
          ]
        }
      ],
      "stackData": [
        "MDF_PropertyValue",
        "MDF_LifeTime",
        "MDF_MaxLayer"
      ],
      "latentQueue": []
    }
  ],
  "references": []
}