const configAbility = {
  "fileName": "Phainon_Phainon_Ability21_Insert_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "M_Phainon_Ability21_InsertCheck"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Phainon_Guard_Visual_ReadyForHitBack"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Phainon_Guard_VisualOnStack"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Phainon_Guard_VisualAfterAbilityUse"
    },
    {
      "name": "Define Custom Variable with Modifier Values",
      "scope": "ContextAbility",
      "valueType": "Layer",
      "variableName": "ADF_GuardLayer",
      "modifierName": "Phainon_Guard[<span class=\"descriptionNumberColor\">Soulscorch</span>]",
      "multiplier": 1
    },
    {
      "name": "Attack-Type Extension",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "typeToExtend": "Follow-up",
      "extendTypeTo": "Skill",
      "instanceIdentifier": "Phainon_Skill21"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "M_Phainon_Ability21_TargetTimeslow",
      "silentAdd": true
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Physical",
        "Damage": {
          "operator": "Variables[0] (0.4) || Constants[0] (1) || Variables[1] (ADF_GuardLayer) || Variables[2] (0.2) || MUL || ADD || MUL || RETURN",
          "displayLines": "(0.4 * (1 + (ADF_GuardLayer * 0.2)))",
          "constants": [
            1
          ],
          "variables": [
            0.4,
            "ADF_GuardLayer",
            0.2
          ]
        },
        "Toughness": {
          "operator": "Variables[0] (AOE Toughness Value) || RETURN",
          "displayLines": "AOE Toughness Value",
          "constants": [],
          "variables": [
            "AOE Toughness Value"
          ]
        },
        "ToughnessDMGType": {
          "DamageType": "Physical"
        },
        "Tags": [
          "Counter"
        ],
        "attackType": "Follow-up"
      }
    },
    {
      "name": "Looped Event",
      "maxLoops": {
        "operator": "Variables[0] (4) || RETURN",
        "displayLines": "4",
        "constants": [],
        "variables": [
          4
        ]
      },
      "Event": [
        {
          "name": "Use Custom Character Function",
          "functionName": "Bounce_SelectTarget",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "paramSequence": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "operator": "Variables[0] (0.3) || Constants[0] (1) || Variables[1] (ADF_GuardLayer) || Variables[2] (0.2) || MUL || ADD || MUL || RETURN",
                  "displayLines": "(0.3 * (1 + (ADF_GuardLayer * 0.2)))",
                  "constants": [
                    1
                  ],
                  "variables": [
                    0.3,
                    "ADF_GuardLayer",
                    0.2
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
                "ToughnessDMGType": {
                  "DamageType": "Physical"
                },
                "Tags": [
                  "Counter"
                ],
                "attackType": "Follow-up"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Attack-Type Extension",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "typeToExtend": "Follow-up",
      "isRemove": true,
      "instanceIdentifier": "Phainon_Skill21"
    },
    "Trigger: Attack End",
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Phainon_Guard[<span class=\"descriptionNumberColor\">Soulscorch</span>]"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "M_Phainon_Ability21_TargetTimeslow",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "Ability Use [Anyone]: End",
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