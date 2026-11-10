const configAbility = {
  "fileName": "Luocha_Luocha_Passive01_InsertAbility",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "_insertCheck_"
    },
    {
      "name": "Update Displayed Energy Bar",
      "priorState": "Active",
      "bar#": 1
    },
    {
      "name": "UI Display Event",
      "popUpText": "Cycle of Life"
    },
    "Deleted bullshit",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1807885982\">Luocha_Passive01_HealHPArea</a>",
      "duration": {
        "displayLines": "2"
      },
      "valuePerStack": {
        "MDF_PropertyValue": {
          "displayLines": "0.18"
        },
        "MDF_PropertyRatio": {
          "displayLines": "0.12"
        },
        "MDF_PropertyHealValue": {
          "displayLines": "240"
        },
        "MDF_PropertyValueTraceB2": {
          "displayLines": "0.07"
        },
        "MDF_PropertyHealValueTraceB2": {
          "displayLines": "93"
        },
        "MDF_PropertyRatio_Eidolon1": {
          "displayLines": "0.2"
        },
        "MDF_LifeTime": {
          "displayLines": "2"
        }
      }
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-390780291\">Luocha_Passive01Modifier</a>[<span class=\"descriptionNumberColor\">Abyss Flower</span>]"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"905229597\">Luocha_Passive01_InsertMark</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__572527518\">Luocha_Eidolon4_Fatigue</a>[<span class=\"descriptionNumberColor\">Weaken</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "STAT_Fatigue"
      ],
      "description": "Deals <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span> less DMG.",
      "type": "Debuff",
      "effectName": "Weaken",
      "statusName": "Weaken",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">Weaken%</span>&nbsp;",
              "statValue": {
                "displayLines": "MDF_PropertyRatio"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1838655775\">Luocha_Passive01_HealHPSelf</a>[<span class=\"descriptionNumberColor\">Cycle of Life</span>]",
      "stackType": "ReplaceByCaster",
      "description": "After using an attack on an enemy, restores HP to self.",
      "type": "Other",
      "statusName": "Cycle of Life",
      "execute": [
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "Heal",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "healPercent": {
                "displayLines": "MDF_PropertyValue"
              },
              "healFlat": {
                "displayLines": "MDF_PropertyHealValue"
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Trace Activated",
                "conditionList": "Sanctified"
              },
              "passed": [
                {
                  "name": "Heal",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder's Team Members(Exclude Self)}}"
                  },
                  "healPercent": {
                    "displayLines": "MDF_PropertyValueSkillTreeB2"
                  },
                  "healFlat": {
                    "displayLines": "MDF_PropertyHealValueSkillTreeB2"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1378311281\">Luocha_Passive01_HealHP</a>[<span class=\"descriptionNumberColor\">Cycle of Life</span>]",
      "stackType": "ReplaceByCaster",
      "description": "After using an attack on an enemy, restores HP to self.",
      "type": "Other",
      "statusName": "Cycle of Life",
      "execute": [
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "Heal",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "healPercent": {
                "displayLines": "MDF_PropertyValue"
              },
              "healFlat": {
                "displayLines": "MDF_PropertyHealValue"
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Trace Activated",
                "conditionList": "Sanctified"
              },
              "passed": [
                {
                  "name": "Heal",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder's Team Members(Exclude Self)}}"
                  },
                  "healPercent": {
                    "displayLines": "MDF_PropertyValueSkillTreeB2"
                  },
                  "healFlat": {
                    "displayLines": "MDF_PropertyHealValueSkillTreeB2"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1807885982\">Luocha_Passive01_HealHPArea</a>",
      "stackType": "ReplaceByCaster",
      "stackData": [
        "MDF_PropertyValue",
        "MDF_PropertyRatio",
        "MDF_PropertyHealValue",
        "MDF_PropertyValueSkillTreeB2",
        "MDF_PropertyHealValueSkillTreeB2",
        "MDF_PropertyRatio_Rank01",
        "MDF_LifeTime"
      ],
      "latentQueue": [
        "_insertCheck_"
      ],
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1838655775\">Luocha_Passive01_HealHPSelf</a>[<span class=\"descriptionNumberColor\">Cycle of Life</span>]",
          "duration": {
            "displayLines": "MDF_LifeTime"
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
              "displayLines": "MDF_PropertyValue"
            },
            "MDF_PropertyHealValue": {
              "displayLines": "MDF_PropertyHealValue"
            },
            "MDF_PropertyValueTraceB2": {
              "displayLines": "MDF_PropertyValueSkillTreeB2"
            },
            "MDF_PropertyHealValueTraceB2": {
              "displayLines": "MDF_PropertyHealValueSkillTreeB2"
            }
          }
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members with Unselectable Team Members(Exclude Self)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1378311281\">Luocha_Passive01_HealHP</a>[<span class=\"descriptionNumberColor\">Cycle of Life</span>]",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_PropertyValue": {
              "displayLines": "MDF_PropertyValue"
            },
            "MDF_PropertyHealValue": {
              "displayLines": "MDF_PropertyHealValue"
            },
            "MDF_PropertyValueTraceB2": {
              "displayLines": "MDF_PropertyValueSkillTreeB2"
            },
            "MDF_PropertyHealValueTraceB2": {
              "displayLines": "MDF_PropertyHealValueSkillTreeB2"
            }
          }
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members with Unselectables}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1394916865\">Luocha_Eidolon1_ATKUp</a>[<span class=\"descriptionNumberColor\">Ablution of the Quick</span>]",
          "haloStatus": true,
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 1
          },
          "valuePerStack": {
            "MDF_PropertyRatio": {
              "displayLines": "MDF_PropertyRatio_Rank01"
            }
          }
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE, with Unselectables)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"572527518\">Luocha_Eidolon4_Fatigue</a>[<span class=\"descriptionNumberColor\">Weaken</span>]",
          "haloStatus": true,
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 4
          },
          "valuePerStack": {
            "MDF_PropertyRatio": {
              "displayLines": "MDF_PropertyRatio"
            }
          }
        }
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Update Displayed Energy Bar",
              "value": 0,
              "maximum": 2,
              "priorState": "Normal",
              "bar#": 2
            }
          ]
        },
        {
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "Update Displayed Energy Bar",
              "value": 0,
              "maximum": 2,
              "priorState": "Normal",
              "bar#": 2
            }
          ]
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  }
}