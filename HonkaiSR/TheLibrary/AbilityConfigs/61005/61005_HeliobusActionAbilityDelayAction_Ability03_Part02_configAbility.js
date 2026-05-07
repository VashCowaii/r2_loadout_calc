const configAbility = {
  "fileName": "61005_HeliobusActionAbilityDelayAction_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Deleted bullshit",
    {
      "name": "UI Display Event",
      "popUpText": "Suppression: Demon Shackle"
    },
    {
      "name": "Action Advance/Delay",
      "target": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "advanceType": "Set",
      "add": {
        "operator": "Variables[0] (#BattleEvent_P1_ADF) || Constants[0] (10) || DIV || RETURN",
        "displayLines": "(#BattleEvent_P1_ADF / 10)",
        "constants": [
          10
        ],
        "variables": [
          "#BattleEvent_P1_ADF"
        ]
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1997760414\">Standard_Confine</a>[<span class=\"descriptionNumberColor\">Imprisonment</span>]",
      "duration": 1,
      "immediateEffect": true,
      "valuePerStack": {
        "MDF_SpeedDownRatio": 0,
        "MDF_ActionDelayRatio": 0
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"373407425\">Modifier_HeliobusActionAbilityDelayAction</a>[<span class=\"descriptionNumberColor\">Paranoia</span>]",
      "duration": {
        "operator": "Variables[0] (#BattleEvent_P2_ADF) || RETURN",
        "displayLines": "#BattleEvent_P2_ADF",
        "constants": [],
        "variables": [
          "#BattleEvent_P2_ADF"
        ]
      }
    },
    "Trigger: Ability End"
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__822356417\">Modifier_HeliobusActionAbilityDelayAction_Attacker</a>",
      "execute": [
        {
          "eventTrigger": "Deal Damage End [Owner]: Hit",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "_Attack",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Imaginary",
                "DamageFlat": {
                  "operator": "Variables[0] (DamageValue) || Variables[1] (_Attack) || MUL || RETURN",
                  "displayLines": "(DamageValue * _Attack)",
                  "constants": [],
                  "variables": [
                    "DamageValue",
                    "_Attack"
                  ]
                },
                "dmgFormula": "Max HP Scaling",
                "Toughness": null,
                "Tags": null,
                "attackType": "Additional DMG"
              }
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"822356417\">Modifier_HeliobusActionAbilityDelayAction_Attacker</a>"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__373407425\">Modifier_HeliobusActionAbilityDelayAction</a>[<span class=\"descriptionNumberColor\">Paranoia</span>]",
      "description": "After every attack received, receive Imaginary Additional DMG equal to <span class=\"descriptionNumberColor\">#BattleEvent_P3_ADF</span> of the attacker's ATK. This DMG is not affected by additional multipliers.",
      "type": "Debuff",
      "effectName": "Paranoia",
      "statusName": "Paranoia",
      "execute": [
        {
          "eventTrigger": "Being Attacked Start [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"822356417\">Modifier_HeliobusActionAbilityDelayAction_Attacker</a>",
              "valuePerStack": {
                "DamageValue": {
                  "operator": "Variables[0] (#BattleEvent_P3_ADF) || RETURN",
                  "displayLines": "#BattleEvent_P3_ADF",
                  "constants": [],
                  "variables": [
                    "#BattleEvent_P3_ADF"
                  ]
                }
              }
            }
          ]
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "All Enemy Team Members"
  }
}