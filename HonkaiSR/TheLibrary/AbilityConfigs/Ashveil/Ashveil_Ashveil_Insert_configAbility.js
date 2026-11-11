const configAbility = {
  "fileName": "Ashveil_Ashveil_Insert",
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
      "modifier": "<a class=\"gModGreen\" id=\"532779389\">Ashveil_InsertCheckSelf</a>"
    },
    "Deleted bullshit",
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "(SkillP01_CurrentEnergy - 1)"
      },
      "variableName": "SkillP01_CurrentEnergy"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1584183733\">Ashveil_PassiveFlag</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Enemy Team All(with Unselectable)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1362659531\">Ashveil_ParasiteDebuffForShow</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Enemy Team All(with Unselectable)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-404579153\">Ashveil_ParasiteDebuffForShow_Ability02_1</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Enemy Team All(with Unselectable)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-387801534\">Ashveil_ParasiteDebuffForShow_Ability02_2</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Enemy Team All(with Unselectable)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1576406867\">Ashveil_ParasiteDebuffForShow_InsertAbility</a>"
    },
    {
      "name": "UI Display Event",
      "popUpText": "Rancor: Enmity Reprisal"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Is Part Of",
        "target1": {
          "name": "Target Name",
          "target": "{{Ashveil: Parasite Target}}"
        },
        "target2": {
          "name": "Target Name",
          "target": "{{Voracity: 1}} + {{Voracity: 2}}"
        }
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Is Part Of",
        "target1": {
          "name": "Target Name",
          "target": "{{Ashveil: Parasite Target}}"
        },
        "target2": {
          "name": "Target Name",
          "target": "{{Voracity: 1}} + {{Voracity: 2}}"
        }
      }
    },
    "Deleted bullshit",
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "Ability_SPAddAlready"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"1185293706\">Ashveil_Ability02_Debuff</a>[<span class=\"descriptionNumberColor\">Bait</span>]"
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1569458515\">Ashveil_InsertAbility_LastTarget</a>"
        },
        {
          "name": "Looped Event",
          "maxLoops": 10,
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "displayLines": "2"
                },
                "HitSplit": 0.1,
                "Toughness": {
                  "displayLines": "ST Toughness Value"
                },
                "Tags": null,
                "attackType": "Follow-up"
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Ability_SPAddAlready",
            "compareType": "=",
            "value2": 0
          },
          "passed": [
            {
              "name": "Update Energy",
              "on": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": 5,
              "isFixed": "* ERR"
            },
            {
              "name": "Define Custom Variable",
              "value": 1,
              "variableName": "Ability_SPAddAlready"
            }
          ]
        }
      ]
    },
    "Trigger: Attack End",
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "(SkillP01_EnhanceInsertBuffStack + 2)"
      },
      "variableName": "SkillP01_EnhanceInsertBuffStack"
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
            "displayLines": "30"
          },
          "addStacksPerTrigger": {
            "displayLines": "2"
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Enemies Still Alive",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "includeUnselectable": true,
        "invertCondition": true
      },
      "failed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ashveil: Parasite Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1576406867\">Ashveil_ParasiteDebuffForShow_InsertAbility</a>"
        },
        "Trigger: Skip Death Handling"
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1584183733\">Ashveil_PassiveFlag</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1569458515\">Ashveil_InsertAbility_LastTarget</a>"
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  }
}