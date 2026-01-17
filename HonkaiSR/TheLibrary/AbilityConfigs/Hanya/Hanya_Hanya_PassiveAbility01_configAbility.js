const configAbility = {
  "fileName": "Hanya_Hanya_PassiveAbility01",
  "childAbilityList": [
    "Hanya_Hanya_PassiveAbility01"
  ],
  "skillTrigger": "SkillP01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Define Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Modifier Holder}}"
      },
      "variableName": "ZhanYinCount",
      "value": 0
    },
    {
      "name": "Define Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Modifier Holder}}"
      },
      "variableName": "ZhanYinCount_01",
      "value": 0
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": {
        "operator": "Variables[0] (ZhanYinCount) || RETURN",
        "displayLines": "ZhanYinCount",
        "constants": [],
        "variables": [
          "ZhanYinCount"
        ]
      },
      "maximum": {
        "operator": "Variables[0] (2) || RETURN",
        "displayLines": "2",
        "constants": [],
        "variables": [
          2
        ]
      },
      "assignState": "True",
      "bar#": 3,
      "cooldown": 0
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Hanya_AbilityPreShowModifier"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 2
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Hanya_Eidolon2_Pre"
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Hanya_AbilityPreShowModifier",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "MDF_Skill03_Speed",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "MDF_Skill03_Speed_Convert",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">SpeedConverted</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_Skill03_Speed",
              "value": {
                "operator": "Variables[0] (MDF_Skill03_Speed) || Variables[1] (MDF_Skill03_Speed_Convert) || SUB || RETURN",
                "displayLines": "(MDF_Skill03_Speed - MDF_Skill03_Speed_Convert)",
                "constants": [],
                "variables": [
                  "MDF_Skill03_Speed",
                  "MDF_Skill03_Speed_Convert"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "target": {
          "name": "Target Name",
          "target": "{{Player's Aim Target List}}"
        },
        "skillType": [
          "Ultimate"
        ],
        "conditions": {
          "name": "Has Modifier",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "WHanya_Ability03Bonus[<span class=\"descriptionNumberColor\">Edict</span>]",
          "invertCondition": true
        },
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": "(0.2 * MDF_Skill03_Speed)(SPD Change)"
        }
      }
    }
  ]
}