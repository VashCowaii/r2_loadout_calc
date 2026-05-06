const configAbility = {
  "fileName": "30505_BattleEventAbility_ChallengePeakBattle_Elation_01_PassiveAbilityPC01",
  "childAbilityList": [
    "30505_BattleEventAbility_ChallengePeakBattle_Elation_01_PassiveAbilityPC01"
  ],
  "skillTrigger": "SkillPC01",
  "abilityType": "Talent",
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"847649245\">Modifier_ChallengePeakBattle_Elation_01_PassiveAbility_ExtraElationSkill</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__847649245\">Modifier_ChallengePeakBattle_Elation_01_PassiveAbility_ExtraElationSkill</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Preload Battle Event(s)",
              "eventID": [
                30505
              ]
            }
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "priorityLevel": -90
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  }
}