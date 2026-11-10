const configAbility = {
  "fileName": "4053013_Monster_W4_Manta_LocalLegend_Ability03_Part02",
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
      "variableName": "_CharacterCount",
      "readTarget": {
        "name": "Target Name",
        "target": "{{Player Team(Exclude Memosprites)}}.[[removeCharChange]]"
      },
      "living": true
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
      "value": 0,
      "variableName": "MDF_Count"
    },
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "InsertCheck02"
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
        "displayLines": "{[PassiveSkill01[0]]}"
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
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1318648029\">Monster_W4_Manta_LocalLegend_Locking</a>",
      "latentQueue": [
        "InsertCheck02"
      ],
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
      ]
    }
  ]
}