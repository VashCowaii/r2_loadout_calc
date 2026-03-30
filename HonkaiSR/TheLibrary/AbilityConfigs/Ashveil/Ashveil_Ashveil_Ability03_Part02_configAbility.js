const configAbility = {
  "fileName": "Ashveil_Ashveil_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"212291347\">Ashveil_DebuffRemove</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Damnation Trail"
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "SkillP01_EnhanceInsertBuffStack",
          "value": {
            "operator": "Variables[0] (SkillP01_EnhanceInsertBuffStack) || Variables[1] (2) || ADD || RETURN",
            "displayLines": "(SkillP01_EnhanceInsertBuffStack + 2)",
            "constants": [],
            "variables": [
              "SkillP01_EnhanceInsertBuffStack",
              2
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1033168707\">Ashveil_Eidolon6_DamageUp</a>[<span class=\"descriptionNumberColor\">Finale: And Then There Were None</span>]",
              "stackLimit": {
                "operator": "Variables[0] (30) || RETURN",
                "displayLines": "30",
                "constants": [],
                "variables": [
                  30
                ]
              },
              "addStacksPerTrigger": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 4
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-599775826\">Ashveil_Eidolon4_AttackUp</a>[<span class=\"descriptionNumberColor\">Heed: Swallow Truth Whole</span>]",
          "duration": {
            "operator": "Variables[0] (3) || RETURN",
            "displayLines": "3",
            "constants": [],
            "variables": [
              3
            ]
          },
          "valuePerStack": {
            "MDF_AttackUp": {
              "operator": "Variables[0] (0.4) || RETURN",
              "displayLines": "0.4",
              "constants": [],
              "variables": [
                0.4
              ]
            }
          }
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"811958138\">Ashveil_Ability03_FloatingOnEnemy</a>"
    },
    {
      "name": "Looped Event",
      "maxLoops": 15,
      "Event": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] (4) || RETURN",
              "displayLines": "4",
              "constants": [],
              "variables": [
                4
              ]
            },
            "HitSplit": 0.05,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
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
      "modifier": "<a class=\"gModGreen\" id=\"811958138\">Ashveil_Ability03_FloatingOnEnemy</a>"
    },
    {
      "name": "Looped Event",
      "maxLoops": 5,
      "Event": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] (4) || RETURN",
              "displayLines": "4",
              "constants": [],
              "variables": [
                4
              ]
            },
            "HitSplit": 0.05,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        }
      ]
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"-469638766\">Ashveil_TryInsert_Enhance</a>"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "SkillP01_CurrentEnergy",
      "value": {
        "operator": "Variables[0] (SkillP01_CurrentEnergy) || Variables[1] (3) || ADD || RETURN",
        "displayLines": "(SkillP01_CurrentEnergy + 3)",
        "constants": [],
        "variables": [
          "SkillP01_CurrentEnergy",
          3
        ]
      }
    },
    "Trigger: Attack End",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1362659531\">Ashveil_ParasiteDebuffForShow</a>"
    },
    "Trigger: Skip Death Handling",
    "Trigger: Ability End"
  ],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"441988386\">Ashveil_SpecialMarkAdder</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__811958138\">Ashveil_Ability03_FloatingOnEnemy</a>",
      "modifierFlags": [
        "STAT_Confine_Effect"
      ],
      "stackData": [],
      "latentQueue": []
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}