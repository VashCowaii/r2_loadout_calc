const configAbility = {
  "fileName": "5014021_BE_BattleEvents",
  "abilityType": "Char. B.Events",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Battle Event Construction",
      "ID": 20032,
      "team": "Neutral Team",
      "eventType": "Summon",
      "abilityList": null,
      "overridesArray": [
        {
          "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;",
          "value": 90
        },
        {
          "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
          "value": 100
        },
        {
          "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;",
          "value": 110
        }
      ],
      "hardLevelEvent": true,
      "actionDescription": "Ally's \"Alloy Pommy.\"\\nEach time allies gain 1 Punchline, accumulates 1 point of Charge. When the Charge reaches <unbreak>#1[i]</unbreak> points, immediately gains 1 extra turn and enhances Basic ATK.\\nBasic ATK deals Quantum DMG to one designated enemy target and gains Punchlines.\\nEnhanced Basic ATK consumes <unbreak>#1[i]</unbreak> points of Charge, dealing Quantum DMG to one designated enemy target and True DMG equal to a certain percentage of the target's Max HP, and removes 1 stack of the \"Lasting Antibac\" effect from the target."
    },
    {
      "name": "Battle Event Construction",
      "ID": 20033,
      "team": "Enemy Team",
      "eventType": "Assist",
      "abilityList": [
        "BattleEventAbility_W5_Pam_Summon"
      ],
      "overridesArray": [
        {
          "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;",
          "value": 90
        },
        {
          "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
          "value": 100
        },
        {
          "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;",
          "value": 120
        }
      ],
      "hardLevelEvent": true,
      "actionDescription": "When taking action, summons an \"Alloy Pommy\" for both ally and enemy teams.\\nAllies can only have 1 \"Alloy Pommy,\" and it cannot be targeted by abilities from either team."
    }
  ],
  "references": []
}