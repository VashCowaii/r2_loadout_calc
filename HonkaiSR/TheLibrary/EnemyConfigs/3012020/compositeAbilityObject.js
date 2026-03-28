const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 3012020,
  "trimCharacterName": 3012020,
  "abilityList": [
    "3012020_Monster_W3_Clock_01_Ability03_Part02",
    "3012020_Monster_W3_Clock_01_Ability03_Part01",
    "3012020_Monster_W3_Clock_01_AbilityP01",
    "3012020_Modifiers"
  ],
  "abilityObject": {
    "3012020_Monster_W3_Clock_01_Ability03_Part02": {
      "fileName": "3012020_Monster_W3_Clock_01_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
              "displayLines": "{[Skill03[0]]}",
              "constants": [],
              "variables": [
                "{[Skill03[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "3012020_Monster_W3_Clock_01_Ability03_Part01": {
      "fileName": "3012020_Monster_W3_Clock_01_Ability03_Part01",
      "childAbilityList": [
        "3012020_Monster_W3_Clock_01_Ability03_Part01",
        "3012020_Monster_W3_Clock_01_Ability03_Part02",
        "3012020_Monster_W3_Clock_01_Ability03_Camera"
      ],
      "skillTrigger": "Skill03",
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
          "ability": "Monster_W3_Clock_01_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "3012020_Monster_W3_Clock_01_AbilityP01": {
      "fileName": "3012020_Monster_W3_Clock_01_AbilityP01",
      "childAbilityList": [
        "3012020_Monster_W3_Clock_01_AbilityP01"
      ],
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-95775214\">Enemy_W3_Clock_01_AbilityP01_SuperArmorController</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "3012020_Modifiers": {
      "fileName": "3012020_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-621497770\">Enemy_W3_Clock_01_BreakHitEffectController</a>",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-95775214\">Enemy_W3_Clock_01_AbilityP01_SuperArmorController</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"73301376\">Standard_SuperArmor</a>[<span class=\"descriptionNumberColor\">Safeguard</span>]",
                  "valuePerStack": {
                    "MDF_AllDamageTypeResistance": {
                      "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
                      "displayLines": "{[SkillP01[0]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillP01[0]]}"
                      ]
                    }
                  }
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
                  "modifier": "<a class=\"gModGreen\" id=\"73301376\">Standard_SuperArmor</a>[<span class=\"descriptionNumberColor\">Safeguard</span>]"
                },
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "advanceType": "Set",
                  "multiAdd": "{[SkillP01[1]]}"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1917647041\">Standard_SuperArmorBreak</a>[<span class=\"descriptionNumberColor\">Safeguard Broken</span>]",
                  "valuePerStack": {
                    "MDF_AllDamageTypeTakenRatio": {
                      "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                      "displayLines": "{[SkillP01[2]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillP01[2]]}"
                      ]
                    }
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-621497770\">Enemy_W3_Clock_01_BreakHitEffectController</a>"
                }
              ]
            },
            {
              "eventTrigger": "End Broken State [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1917647041\">Standard_SuperArmorBreak</a>[<span class=\"descriptionNumberColor\">Safeguard Broken</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"73301376\">Standard_SuperArmor</a>[<span class=\"descriptionNumberColor\">Safeguard</span>]",
                  "valuePerStack": {
                    "MDF_AllDamageTypeResistance": {
                      "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
                      "displayLines": "{[SkillP01[0]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillP01[0]]}"
                      ]
                    }
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-621497770\">Enemy_W3_Clock_01_BreakHitEffectController</a>"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "references": []
    }
  }
}