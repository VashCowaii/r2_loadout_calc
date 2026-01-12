const configAbility = {
  "fileName": "Clara_Modifiers",
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
      "for": "Klara_Passive_ShowAmmo",
      "stackType": "ReplaceByCaster"
    },
    {
      "name": "Modifier Construction",
      "for": "Klara_Passive_DamageReduce[<span class=\"descriptionNumberColor\">Guardian</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                "displayLines": "MDF_PropertyValue",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_PropertyValue"
      ],
      "latentQueue": [],
      "description": "DMG taken -<span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "statusName": "Guardian"
    },
    {
      "name": "Modifier Construction",
      "for": "Klara_BPAbility_Revenge[<span class=\"descriptionNumberColor\">Mark of Counter</span>]",
      "modifierFlags": [
        "ListenBattleEventSkill"
      ],
      "execute": [
        {
          "eventTrigger": "Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target",
                "target": "Use Prior Target(s) Defined",
                "target2": "Caster"
              },
              "passed": [
                {
                  "name": "Toggle Skill Mark"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Active Ability Chosen [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target",
                "target": "Use Prior Target(s) Defined",
                "target2": "Caster"
              },
              "passed": [
                {
                  "name": "Toggle Skill Mark",
                  "toggle": true,
                  "skillTypesAllow": [
                    "Skill"
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Toggle Skill Mark"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "The target is Marked by Svarog.",
      "type": "Other",
      "statusName": "Mark of Counter"
    },
    {
      "name": "Modifier Construction",
      "for": "Klara_TechniqueUsage_AggroUP[<span class=\"descriptionNumberColor\">A Small Price for Victory</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">Aggro%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                "displayLines": "MDF_PropertyValue",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_PropertyValue"
      ],
      "latentQueue": [],
      "description": "Higher chance to be attacked.",
      "type": "Buff",
      "statusName": "A Small Price for Victory"
    },
    {
      "name": "Modifier Construction",
      "for": "Klara_PassiveATK_Mark",
      "execute": [
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "Inject Ability Use",
              "abilityName": "Klara_PassiveAbility01_InsertAbility",
              "abilitySource": "Caster",
              "abilityTarget": "Owner of this Modifier",
              "priorityTag": "AvatarInsertAttackSelf",
              "showInActionOrder": true,
              "abortFlags": [
                "STAT_CTRL",
                "DisableAction"
              ],
              "allowAbilityTriggers": false
            },
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ],
  "references": []
}