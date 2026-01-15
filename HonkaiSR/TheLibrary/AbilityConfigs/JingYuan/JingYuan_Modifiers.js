const configAbility = {
  "fileName": "JingYuan_Modifiers",
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
      "for": "JingYuan_Tree03_CriticalChanceUp[<span class=\"descriptionNumberColor\">CRIT Rate Boost</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
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
      "description": "CRIT Rate +<span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "CRIT Rate Boost",
      "statusName": "CRIT Rate Boost"
    },
    {
      "name": "Modifier Construction",
      "for": "JingYuan_CriticalDamageUp",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
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
      "latentQueue": [
        "ATKCountSum"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "JingYuan_Eidolon6_AllDamageTypeTakenRatio",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": "Owner of this Modifier",
              "valueType": "Layer",
              "variableName": "MDF_Layer",
              "modifierName": "JingYuan_Eidolon6_AllDamageTypeTakenRatio",
              "multiplier": 1
            },
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValue) || Variables[1] (MDF_Layer) || MUL || RETURN",
                "displayLines": "(MDF_PropertyValue * MDF_Layer)",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue",
                  "MDF_Layer"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_PropertyValue"
      ],
      "latentQueue": [
        "ATKCountSum"
      ],
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "JingYuan_Eidolon2_DamageAddedRatio[<span class=\"descriptionNumberColor\">Dharma Corpora</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Hit",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Attack Type",
                "attackTypes": [
                  "Basic ATK",
                  "Skill",
                  "Ultimate"
                ]
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                      "value": "MDF_DamageAddedRatio"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_DamageAddedRatio"
      ],
      "latentQueue": [
        "ATKCountSum"
      ],
      "description": "Jing Yuan's Basic ATK, Skill, and Ultimate deal <span class=\"descriptionNumberColor\">MDF_DamageAddedRatio</span> increased DMG.",
      "type": "Buff",
      "statusName": "Dharma Corpora"
    },
    {
      "name": "Modifier Construction",
      "for": "JingYuan_BattleEvent_SpeedUp",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "STAT_SpeedUp"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": "Owner of this Modifier",
              "valueType": "Layer",
              "variableName": "MDF_Layer",
              "modifierName": "JingYuan_BattleEvent_SpeedUp",
              "multiplier": 1
            },
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValue) || Variables[1] (MDF_Layer) || MUL || RETURN",
                "displayLines": "(MDF_PropertyValue * MDF_Layer)",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue",
                  "MDF_Layer"
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
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "JingYuan_BattleEvent",
      "stackType": "Prolong",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Inject Ability Use",
              "abilityName": "JingYuan_Passive_Insert",
              "abilitySource": "Caster [of Battle Event]",
              "abilityTarget": "All Enemies (AOE)",
              "priorityTag": "AvatarInsertAttackSelf",
              "canHitNonTargets": true,
              "abortFlags": [
                "STAT_CTRL",
                "DisableAction"
              ],
              "allowAbilityTriggers": false
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "JingYuan_BattleEvent_UltraATKCount[<span class=\"descriptionNumberColor\">Lightbringer</span>]",
      "stackType": "ReplaceByCaster",
      "description": "Lightning-Lord's Enhanced ATK count.",
      "type": "Other",
      "statusName": "Lightbringer",
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "JingYuan_BattleEvent_ATKCount[<span class=\"descriptionNumberColor\">Prana Extirpated</span>]",
      "stackType": "ReplaceByCaster",
      "stackData": [],
      "latentQueue": [],
      "description": "Lightning-Lord's Hits Per Action.",
      "type": "Other",
      "statusName": "Prana Extirpated",
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "JingYuan_BattleEvent_ATKCountShowText",
      "stackType": "ReplaceByCaster",
      "stackData": [
        "ATKCount"
      ],
      "latentQueue": []
    }
  ],
  "references": []
}