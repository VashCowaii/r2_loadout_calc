const configAbility = {
  "fileName": "Anaxa_Anaxa_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "M_Anaxa_BPAbility_ModifyDamage"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 4
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Anaxa_BPAbility_Bonus[<span class=\"descriptionNumberColor\">Blaze, Plunged to Canyon</span>]",
          "duration": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          },
          "stackLimit": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (0.3) || RETURN",
              "displayLines": "0.3",
              "constants": [],
              "variables": [
                0.3
              ]
            }
          },
          "addStacksPerTrigger": 1
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "scope": "ContextAbility",
      "variableName": "_count",
      "value": 0
    },
    {
      "name": "Define Custom Variable",
      "variableName": "ADF_LoopCount",
      "value": {
        "operator": "Variables[0] (4) || Variables[1] (Skill02_ExtraHitCount) || ADD || RETURN",
        "displayLines": "(4 + Skill02_ExtraHitCount)",
        "constants": [],
        "variables": [
          4,
          "Skill02_ExtraHitCount"
        ]
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": "Single Target (Primary)",
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Wind",
        "Damage": {
          "operator": "Variables[0] (0.7) || RETURN",
          "displayLines": "0.7",
          "constants": [],
          "variables": [
            0.7
          ]
        },
        "Toughness": {
          "operator": "Variables[0] (ST Toughness Value) || RETURN",
          "displayLines": "ST Toughness Value",
          "constants": [],
          "variables": [
            "ST Toughness Value"
          ]
        },
        "instanceTag": "Anaxa_00_BP",
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": "Single Target (Primary)",
      "modifier": "M_Anaxa_Ability02_HitMark"
    },
    {
      "name": "Looped Event",
      "maxLoops": {
        "operator": "Variables[0] (ADF_LoopCount) || RETURN",
        "displayLines": "ADF_LoopCount",
        "constants": [],
        "variables": [
          "ADF_LoopCount"
        ]
      },
      "Event": [
        {
          "name": "Define Custom Variable with Added Value",
          "target": "Caster",
          "variableName": "_count",
          "context": "ContextAbility",
          "value": 1
        },
        {
          "name": "Find New Target",
          "from": "All Hostile Entities (AOE)",
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": "Use Prior Target(s) Defined",
            "modifier": "M_Anaxa_Ability02_HitMark",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Anaxa_Ability02_SingleHit"
            }
          ],
          "noTargetFound": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Bounce_SelectTarget",
              "target": "All Hostile Entities (AOE)",
              "paramSequence": []
            }
          ]
        }
      ]
    },
    "Trigger: Attack End",
    "Trigger: Ability End"
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Anaxa_BPAbility_Bonus[<span class=\"descriptionNumberColor\">Blaze, Plunged to Canyon</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
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
      "description": "Each stack increases ATK by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>. This effect stacks up to <span class=\"descriptionNumberColor\">MDF_MaxLayer</span> time(s).",
      "type": "Buff",
      "effectName": "ATK Boost",
      "statusName": "Blaze, Plunged to Canyon"
    },
    {
      "name": "Modifier Construction",
      "for": "M_Anaxa_Ability02_HitMark",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "Attack DMG End [Anyone]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "M_Anaxa_BPAbility_ModifyDamage",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has DMG Instance Tag",
                "tag": "Anaxa_00_BP"
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                      "value": "(MDF_TargetCount * 0.2)"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Team Count",
              "target": "All Hostile Entities (AOE)",
              "variableName": "MDF_TargetCount",
              "livingTargets": true,
              "context": "ContextModifier"
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}