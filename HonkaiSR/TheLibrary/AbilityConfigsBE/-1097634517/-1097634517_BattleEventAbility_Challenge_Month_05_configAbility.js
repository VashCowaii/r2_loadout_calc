const configAbility = {
  "fileName": "-1097634517_BattleEventAbility_Challenge_Month_05",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1010384728\">Modifier_BattleEventAbility_Challenge_Month_05</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1754357914\">MLevel_BattleEventAbility_Challenge_Month_05</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Attack Targets of Modifier Holder}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": {
                      "name": "Custom Damage Type",
                      "initialTypePreRead": "Physical",
                      "sourceType": "ReadTargetType",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      }
                    },
                    "Damage": {
                      "operator": "Variables[0] (ADF_1) || RETURN",
                      "displayLines": "ADF_1",
                      "constants": [],
                      "variables": [
                        "ADF_1"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Additional DMG"
                  }
                },
                {
                  "name": "Define Modifier Variable",
                  "modifierName": "<a class=\"gModGreen\" id=\"1754357914\">MLevel_BattleEventAbility_Challenge_Month_05</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
                  "function": "Add"
                }
              ]
            }
          ]
        }
      ],
      "description": "After launching attacks, consumes 1 stack of \"Memory Imprint\" and deals <span class=\"descriptionNumberColor\">ADF_1</span> of the character's ATK as Additional DMG to a random enemy target that was attacked.",
      "type": "Buff",
      "effectName": "Memory Imprint",
      "statusName": "Memory Imprint"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1010384728\">Modifier_BattleEventAbility_Challenge_Month_05</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1754357914\">MLevel_BattleEventAbility_Challenge_Month_05</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]"
            },
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "inherentTarget": {
                "name": "Target Name",
                "target": "{{Player Team Entity}}"
              },
              "ability": "BattleEventAbility_Camear_AllLightTeam",
              "isTrigger": true
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1754357914\">MLevel_BattleEventAbility_Challenge_Month_05</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
              "counter": {
                "operator": "Variables[0] (#BattleEvent_P1_ADF) || RETURN",
                "displayLines": "#BattleEvent_P1_ADF",
                "constants": [],
                "variables": [
                  "#BattleEvent_P1_ADF"
                ]
              },
              "valuePerStack": {
                "ADF_1": {
                  "operator": "Variables[0] (#BattleEvent_P2_ADF) || RETURN",
                  "displayLines": "#BattleEvent_P2_ADF",
                  "constants": [],
                  "variables": [
                    "#BattleEvent_P2_ADF"
                  ]
                }
              },
              "casterAssign": "TargetSelf"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}