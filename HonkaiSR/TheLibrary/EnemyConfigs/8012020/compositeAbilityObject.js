const compositeAbilityObject = {
  "fullCharacterName": 8012020,
  "trimCharacterName": 8012020,
  "abilityList": [
    "8012020_Monster_AML_Minion03_Ability02_Part02",
    "8012020_Monster_AML_Minion03_Ability02_Part01",
    "8012020_Monster_AML_Minion03_Ability01_Part02",
    "8012020_Monster_AML_Minion03_Ability01_Part01",
    "8012020_Monster_AML_Minion03_Passive01",
    "8012020_Modifiers"
  ],
  "abilityObject": {
    "8012020_Monster_AML_Minion03_Ability02_Part02": {
      "fileName": "8012020_Monster_AML_Minion03_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                  "displayLines": "{[Skill02[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill02[0]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1906134144\">Enemy_AML_Minion03_Target</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
          "onlyRemoveOwnersInstance": true
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8012020_Monster_AML_Minion03_Ability02_Part01": {
      "fileName": "8012020_Monster_AML_Minion03_Ability02_Part01",
      "childAbilityList": [
        "8012020_Monster_AML_Minion03_Ability02_Part01",
        "8012020_Monster_AML_Minion03_Ability02_Part02",
        "8012020_Monster_AML_Minion03_Ability02_Camera"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_AML_Minion03_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8012020_Monster_AML_Minion03_Ability01_Part02": {
      "fileName": "8012020_Monster_AML_Minion03_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1906134144\">Enemy_AML_Minion03_Target</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
              "displayLines": "{[Skill01[1]]}",
              "constants": [],
              "variables": [
                "{[Skill01[1]]}"
              ]
            }
          }
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8012020_Monster_AML_Minion03_Ability01_Part01": {
      "fileName": "8012020_Monster_AML_Minion03_Ability01_Part01",
      "childAbilityList": [
        "8012020_Monster_AML_Minion03_Ability01_Part01",
        "8012020_Monster_AML_Minion03_Ability01_Part02",
        "8012020_Monster_AML_Minion03_Ability01_Camera"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_AML_Minion03_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8012020_Monster_AML_Minion03_Passive01": {
      "fileName": "8012020_Monster_AML_Minion03_Passive01",
      "skillTrigger": "PassiveSkill01",
      "abilityType": "Talent",
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
          "modifier": "<a class=\"gModGreen\" id=\"537523857\">Monster_AML_Minion03_EffectController</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__642618837\">Monster_AML_Minion03_Effect</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__537523857\">Monster_AML_Minion03_EffectController</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-898477955\">StanceBreakState</a>"
                  },
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"642618837\">Monster_AML_Minion03_Effect</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"642618837\">Monster_AML_Minion03_Effect</a>"
                }
              ]
            },
            {
              "eventTrigger": "End Broken State [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"642618837\">Monster_AML_Minion03_Effect</a>"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "8012020_Modifiers": {
      "fileName": "8012020_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1906134144\">Enemy_AML_Minion03_Target</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "TeamAction"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Update Modifier Description",
                  "popUpText": "Targeted by %CasterName. Receives <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> more DMG."
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
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
          "description": "%CasterName will focus attacks on this target.",
          "type": "Other",
          "effectName": "Lock On",
          "statusName": "Lock On"
        }
      ],
      "references": []
    }
  }
}