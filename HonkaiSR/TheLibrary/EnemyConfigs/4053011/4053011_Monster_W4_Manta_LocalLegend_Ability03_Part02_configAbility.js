const configAbility = {
  "fileName": "4053011_Monster_W4_Manta_LocalLegend_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Has Flag",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "flagName": "Break"
      },
      "passed": [
        {
          "name": "Exit Broken-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Reset Toughness",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        }
      ]
    },
    {
      "name": "Define Custom Variable with Team Count",
      "target": {
        "name": "Target Name",
        "target": "{{Player Team(Exclude Memosprites)}}.[[removeCharChange]]"
      },
      "variableName": "_CharacterCount",
      "livingTargets": true
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "_CharacterCount",
        "compareType": ">",
        "value2": 1
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"833181750\">Enemy_W2_LycanKing_IF_MuteUltra</a>"
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "variableName": "MDF_Count",
      "value": 0
    },
    {
      "name": "Define Custom Variable",
      "variableName": "InsertCheck02",
      "value": 0
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": 0,
      "entityClass": "Enemy",
      "target": {
        "name": "Target Name",
        "target": "{{Modifier Holder}}"
      },
      "maximum": {
        "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
        "displayLines": "{[PassiveSkill01[0]]}",
        "constants": [],
        "variables": [
          "{[PassiveSkill01[0]]}"
        ]
      },
      "assignState": "True",
      "state": "Normal"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "_CharacterCount",
        "compareType": ">",
        "value2": 1
      },
      "passed": [
        {
          "name": "Inject Extra-Turn",
          "actionTag": null,
          "skillType": "ControlSkill03",
          "target": {
            "name": "Add Target by Unique Identifier",
            "identifier": "SelectTarget"
          },
          "afterInjection": []
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1318648029\">Monster_W4_Manta_LocalLegend_Locking</a>"
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1318648029\">Monster_W4_Manta_LocalLegend_Locking</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "Update Target Selected(UI) [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Player's Aim Target List}}"
                },
                "team": "Player Team"
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "InsertCheck02"
      ]
    }
  ]
}