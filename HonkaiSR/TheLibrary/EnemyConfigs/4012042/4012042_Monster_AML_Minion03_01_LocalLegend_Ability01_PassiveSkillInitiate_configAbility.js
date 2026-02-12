const configAbility = {
  "fileName": "4012042_Monster_AML_Minion03_01_LocalLegend_Ability01_PassiveSkillInitiate",
  "childAbilityList": [
    "4012042_Monster_AML_Minion03_01_LocalLegend_Ability01_PassiveSkillInitiate",
    "4012042_Monster_AML_Minion03_01_Ability01_Camera",
    "4012042_Monster_AML_Minion03_01_LocalLegend_Ability01_Part01",
    "4012042_Monster_AML_Minion03_01_LocalLegend_Ability01_Part02"
  ],
  "skillTrigger": "Skill01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Summoner}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-69325530\">Monster_AML_Minion03_01_LocalLegend_ListenPhase2</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-69325530\">Monster_AML_Minion03_01_LocalLegend_ListenPhase2</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Action-End Phase]",
          "execute": [
            {
              "name": "Inject Ability Use",
              "abilityName": "Monster_AML_Minion03_01_LocalLegend_Ability01_Part01",
              "abilitySource": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "abilityTarget": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "priorityTag": "MonsterBattleCry",
              "canHitNonTargets": true,
              "showInActionOrder": true,
              "abortFlags": [
                "STAT_CTRL",
                "Break",
                "DisableAction"
              ],
              "allowAbilityTriggers": false
            },
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}