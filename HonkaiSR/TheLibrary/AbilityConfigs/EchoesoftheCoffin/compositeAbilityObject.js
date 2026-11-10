const entityPageType = "lc"
const compositeAbilityObject = {
  "fullCharacterName": "Echoes of the Coffin",
  "trimCharacterName": "EchoesoftheCoffin",
  "abilityList": [
    "EchoesoftheCoffin_Ability23008"
  ],
  "fixedStats": {
    "1": {
      "ATK%": 0.24
    },
    "2": {
      "ATK%": 0.28
    },
    "3": {
      "ATK%": 0.32
    },
    "4": {
      "ATK%": 0.36
    },
    "5": {
      "ATK%": 0.4
    }
  },
  "abilityObject": {
    "EchoesoftheCoffin_Ability23008": {
      "fileName": "EchoesoftheCoffin_Ability23008",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1747972242\">LC_23008_Main</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1558750701\">LC_23008_SpeedDeltaAddedRatio</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "STAT_SpeedUp"
          ],
          "description": "SPD increases by <span class=\"descriptionNumberColor\">MDF_SpeedDeltaAdd</span>.",
          "type": "Buff",
          "effectName": "SPD Boost",
          "statusName": "SPD Boost",
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;",
                  "statValue": {
                    "displayLines": "MDF_SpeedDeltaAdd"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1747972242\">LC_23008_Main</a>",
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": {
              "name": "Target Sequence",
              "TargetList": [
                {
                  "name": "Target Name",
                  "target": "{{Player Team All}}"
                },
                {
                  "name": "Target Filter",
                  "conditions": {
                    "name": "NOT",
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1558750701\">LC_23008_SpeedDeltaAddedRatio</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]"
                    }
                  }
                }
              ]
            },
            "skillType": [
              "Ultimate"
            ],
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": "12(SPD Change)"
            }
          },
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
                  "includeDyingTargets": true,
                  "maxTargets": {
                    "displayLines": "3"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(MDF_EnemyCount + 1)"
                      },
                      "variableName": "MDF_EnemyCount"
                    }
                  ]
                },
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": {
                    "displayLines": "(MDF_EnemyCount * 3)"
                  },
                  "isFixed": "* ERR"
                },
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "MDF_EnemyCount"
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{All Team Members}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1558750701\">LC_23008_SpeedDeltaAddedRatio</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
                      "duration": 1,
                      "valuePerStack": {
                        "MDF_SpeedDeltaAdd": {
                          "displayLines": "12"
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "isLightcone": true,
      "desc": "Increases the wearer's ATK by #1[i]%. After the wearer uses an attack, for each different enemy target the wearer hits, regenerates #3[f1] Energy. Each attack can regenerate Energy up to #4[i] time(s) this way. After the wearer uses their Ultimate, all allies gain #2[i] SPD for 1 turn.",
      "params": [
        [
          0.24,
          12,
          3,
          3
        ],
        [
          0.28,
          14,
          3.5,
          3
        ],
        [
          0.32,
          16,
          4,
          3
        ],
        [
          0.36,
          18,
          4.5,
          3
        ],
        [
          0.4,
          20,
          5,
          3
        ]
      ]
    }
  },
  "isLightcone": true
}