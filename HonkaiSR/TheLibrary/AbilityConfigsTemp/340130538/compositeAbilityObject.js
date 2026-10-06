const entityPageType = "misc"
const compositeAbilityObject = {
  "fullCharacterName": 340130538,
  "trimCharacterName": 340130538,
  "abilityList": [
    "340130538_Functions"
  ],
  "abilityObject": {
    "340130538_Functions": {
      "fileName": "340130538_Functions",
      "abilityType": "Char. Functions",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "length": 9,
      "parse": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1966027219\">GM_Test01</a>",
          "parse": [
            {
              "name": "Stack Target Application Chance",
              "target": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "statName": [
                "STAT_CTRL_Frozen"
              ],
              "value": 1
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__774823497\">GM_StartElationTime</a>",
          "parse": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"101547145\">Elation_StartElationTime</a>"
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1672788236\">GM_AddFrozenControlToAllLight</a>",
          "parse": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-298752594\">Standard_CTRL_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]"
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1942720396\">GM_KillAllDarkTeam</a>",
          "parse": [
            {
              "name": "Force Entity Death",
              "target": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "killer": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "deathSourceType": "KilledByOthers"
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1578551498\">GM_TestScoring40140</a>",
          "parse": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "AttackScaling": {
                "DamageType": "Physical",
                "DamageFlat": {
                  "displayLines": 1
                },
                "Toughness": null,
                "ToughnessDMGType": {
                  "DamageType": "Physical"
                },
                "Tags": null,
                "attackType": "Quick-Time Event"
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "AttackScaling": {
                "DamageType": "Physical",
                "DamageFlat": {
                  "displayLines": 1
                },
                "Toughness": null,
                "ToughnessDMGType": {
                  "DamageType": "Physical"
                },
                "Tags": null,
                "attackType": "DOT"
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "AttackScaling": {
                "DamageType": "Physical",
                "DamageFlat": {
                  "displayLines": 1
                },
                "Toughness": null,
                "ToughnessDMGType": {
                  "DamageType": "Physical"
                },
                "Tags": null,
                "attackType": "Additional DMG"
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "AttackScaling": {
                "DamageType": "Physical",
                "DamageFlat": {
                  "displayLines": 1
                },
                "Toughness": null,
                "ToughnessDMGType": {
                  "DamageType": "Physical"
                },
                "Tags": null,
                "attackType": "Follow-up"
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "AttackScaling": {
                "DamageType": "Physical",
                "DamageFlat": {
                  "displayLines": 1
                },
                "Toughness": null,
                "ToughnessDMGType": {
                  "DamageType": "Physical"
                },
                "Tags": null,
                "attackType": "Break DMG"
              }
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1561773879\">GM_TestScoring40141</a>",
          "parse": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "AttackScaling": {
                "DamageType": "Physical",
                "DamageFlat": {
                  "displayLines": 1
                },
                "Toughness": null,
                "ToughnessDMGType": {
                  "DamageType": "Physical"
                },
                "Tags": null,
                "attackType": "Quick-Time Event"
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "AttackScaling": {
                "DamageType": "Fire",
                "DamageFlat": {
                  "displayLines": 1
                },
                "Toughness": null,
                "ToughnessDMGType": {
                  "DamageType": "Fire"
                },
                "Tags": null,
                "attackType": "Quick-Time Event"
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "AttackScaling": {
                "DamageType": "Ice",
                "DamageFlat": {
                  "displayLines": 1
                },
                "Toughness": null,
                "ToughnessDMGType": {
                  "DamageType": "Ice"
                },
                "Tags": null,
                "attackType": "Quick-Time Event"
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "AttackScaling": {
                "DamageType": "Thunder",
                "DamageFlat": {
                  "displayLines": 1
                },
                "Toughness": null,
                "ToughnessDMGType": {
                  "DamageType": "Thunder"
                },
                "Tags": null,
                "attackType": "Quick-Time Event"
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "AttackScaling": {
                "DamageType": "Wind",
                "DamageFlat": {
                  "displayLines": 1
                },
                "Toughness": null,
                "ToughnessDMGType": {
                  "DamageType": "Wind"
                },
                "Tags": null,
                "attackType": "Quick-Time Event"
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "displayLines": 1
                },
                "Toughness": null,
                "ToughnessDMGType": {
                  "DamageType": "Quantum"
                },
                "Tags": null,
                "attackType": "Quick-Time Event"
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "AttackScaling": {
                "DamageType": "Imaginary",
                "DamageFlat": {
                  "displayLines": 1
                },
                "Toughness": null,
                "ToughnessDMGType": {
                  "DamageType": "Imaginary"
                },
                "Tags": null,
                "attackType": "Quick-Time Event"
              }
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1612106736\">GM_TestScoring40142</a>",
          "parse": [
            {
              "name": "Skill Points Modification",
              "adjustmentValue": 0,
              "adjustmentType": "="
            },
            {
              "name": "Skill Points Modification",
              "adjustmentValue": 5,
              "adjustmentType": "+"
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1595329117\">GM_TestScoring40143</a>",
          "parse": [
            {
              "name": "Update Energy",
              "on": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "value": 0,
              "isFixed": "* ERR",
              "isSetToValue": true,
              "ignoreBlock": true
            },
            {
              "name": "Update Energy",
              "on": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valuePercent": 1,
              "isFixed": "(Fixed)",
              "isSetToValue": true,
              "ignoreBlock": true
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1511441022\">GM_TestScoring40144</a>",
          "parse": [
            {
              "name": "Set HP Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "clearNegativeHP": true
            },
            {
              "name": "Set HP Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "clearNegativeHP": true,
              "setPercent": 1
            }
          ]
        }
      ],
      "references": []
    }
  }
}