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
      "name": "Add Attack-Type Extension",
      "identifier": "Phainon_Skill21",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "typeToExtend": "Follow-up",
      "extendTypeTo": "Skill"
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
          "displayLines": "(0.4 * (1 + (ADF_GuardLayer * 0.2)))"
        },
        "Toughness": {
          "displayLines": "AOE Toughness Value"
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
        "displayLines": "4"
      },
      "execute": [
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
                  "displayLines": "(0.3 * (1 + (ADF_GuardLayer * 0.2)))"
                },
                "Toughness": {
                  "displayLines": "ST Toughness Value"
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
      "name": "Remove Attack-Type Extension",
      "identifier": "Phainon_Skill21",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "typeToExtend": "Follow-up"
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
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  }
}