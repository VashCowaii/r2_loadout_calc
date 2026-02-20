const configAbility = {
  "fileName": "2035012_Monster_W2_Feixiao_IF_Ability09_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Change Character Transformation",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "phase": "Phase2"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All(with Unselectable)V2}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"833181750\">Enemy_W2_LycanKing_IF_MuteUltra</a>"
    },
    {
      "name": "Define Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Nebula Devourer: Self}}"
      },
      "variableName": "_TurnCount",
      "value": 0
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1095869748\">Monster_W2_Feixiao_IF_Locking</a>"
    },
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
    "Trigger: Ability End"
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1095869748\">Monster_W2_Feixiao_IF_Locking</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "phase": "Phase1"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "UI Display Event",
              "popUpText": "Prioritize selecting non-DMG dealing ally characters as the ability target!"
            }
          ]
        },
        {
          "eventTrigger": "Update Target Selected(UI) [Anyone]"
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}