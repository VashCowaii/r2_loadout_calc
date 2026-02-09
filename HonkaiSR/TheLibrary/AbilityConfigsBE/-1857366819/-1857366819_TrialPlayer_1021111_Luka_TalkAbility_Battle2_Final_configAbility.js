const configAbility = {
  "fileName": "-1857366819_TrialPlayer_1021111_Luka_TalkAbility_Battle2_Final",
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
      "modifier": "<a class=\"gModGreen\" id=\"535355805\">TrialPlayer_101111_Luka_LimboAddAttack2</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-58718825\">TrialPlayer_101111_Luka_Final_SpecialWin</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1162946172\">Standard_CTRL_Stun</a>[<span class=\"descriptionNumberColor\">Stunned</span>]",
      "duration": 2
    },
    {
      "name": "Action Advance/Delay",
      "advanceType": "Set",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "set": 100
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-58718825\">TrialPlayer_101111_Luka_Final_SpecialWin</a>",
      "execute": [
        {
          "eventTrigger": "Waiting for Healing in Limbo",
          "execute": [
            {
              "name": "Set HP Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "setValue": 1
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked End [Owner]"
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}