const configAbility = {
  "fileName": "1912336050_ChallengePeakBattle_BaseAbility_0024",
  "abilityType": null,
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
      "modifier": "<a class=\"gModGreen\" id=\"1691526156\">Modifier_ChallengePeakBattle_BaseAbility_0024</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1007065912\">Modifier_ChallengePeakBattle_BaseAbility_0024_03</a>",
      "stackType": "Replace",
      "modifierFlags": [
        "Shield"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Shield",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              }
            },
            {
              "name": "Set Hit-Class",
              "reset": true
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "Create Shield",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "value": {
                "operator": "Variables[0] (_MaxHP) || Variables[1] (ChallengePeakBattle_0024_ADF_1) || MUL || RETURN",
                "displayLines": "(_MaxHP * ChallengePeakBattle_0024_ADF_1)",
                "constants": [],
                "variables": [
                  "_MaxHP",
                  "ChallengePeakBattle_0024_ADF_1"
                ]
              }
            },
            {
              "name": "Set Hit-Class"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1023843531\">Modifier_ChallengePeakBattle_BaseAbility_0024_02</a>[<span class=\"descriptionNumberColor\">Unyielding</span>]",
      "description": "When attacked, gains a Shield equal to <span class=\"descriptionNumberColor\">ChallengePeakBattle_0024_ADF_1</span> of this unit's Max HP.",
      "type": "Other",
      "statusName": "Unyielding",
      "execute": [
        {
          "eventTrigger": "Being Attacked [Owner]: Start",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1007065912\">Modifier_ChallengePeakBattle_BaseAbility_0024_03</a>",
              "valuePerStack": {
                "ChallengePeakBattle_0024_ADF_1": {
                  "operator": "Variables[0] (ChallengePeakBattle_0024_ADF_1) || RETURN",
                  "displayLines": "ChallengePeakBattle_0024_ADF_1",
                  "constants": [],
                  "variables": [
                    "ChallengePeakBattle_0024_ADF_1"
                  ]
                }
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1691526156\">Modifier_ChallengePeakBattle_BaseAbility_0024</a>",
      "execute": [
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1023843531\">Modifier_ChallengePeakBattle_BaseAbility_0024_02</a>[<span class=\"descriptionNumberColor\">Unyielding</span>]",
                  "valuePerStack": {
                    "ChallengePeakBattle_0024_ADF_1": {
                      "operator": "Variables[0] (#ADF_1) || RETURN",
                      "displayLines": "#ADF_1",
                      "constants": [],
                      "variables": [
                        "#ADF_1"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}