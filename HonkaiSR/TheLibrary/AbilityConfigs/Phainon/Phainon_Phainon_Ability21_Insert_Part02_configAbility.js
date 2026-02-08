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
      "modifier": "<a class=\"gModGreen\" id=\"-1520947056\">M_Phainon_Ability21_InsertCheck</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1586210896\">Phainon_Guard_Visual_ReadyForHitBack</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"211331230\">Phainon_Guard_VisualOnStack</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-833311189\">Phainon_Guard_VisualAfterAbilityUse</a>"
    },
    {
      "name": "Define Custom Variable with Modifier Values",
      "scope": "ContextAbility",
      "valueType": "Layer",
      "variableName": "ADF_GuardLayer",
      "modifierName": "<a class=\"gModGreen\" id=\"1985962154\">Phainon_Guard</a>[<span class=\"descriptionNumberColor\">Soulscorch</span>]",
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
      "modifier": "<a class=\"gModGreen\" id=\"554403436\">M_Phainon_Ability21_TargetTimeslow</a>",
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
          "functionName": "<a class=\"gTempYellow\" id=\"247970287\">Bounce_SelectTarget</a>",
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
      "modifier": "<a class=\"gModGreen\" id=\"1985962154\">Phainon_Guard</a>[<span class=\"descriptionNumberColor\">Soulscorch</span>]"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__554403436\">M_Phainon_Ability21_TargetTimeslow</a>",
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