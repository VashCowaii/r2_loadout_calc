const configAbility = {
  "fileName": "Evey_Servant_EvernightServant_DeathRattle",
  "childAbilityList": [
    "Evey_Servant_EvernightServant_DeathRattle"
  ],
  "skillTrigger": "SkillP04",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-182017003\">Memosprite_EvernightServant_DeathRattle</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-182017003\">Memosprite_EvernightServant_DeathRattle</a>",
      "modifierFlags": [
        "Deathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "Was Killed (Queued) [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2040095871\">Memosprite_EvernightServant_DeathRattle_Speed</a>[<span class=\"descriptionNumberColor\">You, Parting, Beyond Reach</span>]",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.1) || RETURN",
                  "displayLines": "0.1",
                  "constants": [],
                  "variables": [
                    0.1
                  ]
                },
                "MDF_PropertyValue_2": {
                  "operator": "Variables[0] (0.01) || RETURN",
                  "displayLines": "0.01",
                  "constants": [],
                  "variables": [
                    0.01
                  ]
                }
              },
              "casterAssign": "TargetSelf"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}