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
      "modifier": "Memosprite_EvernightServant_DeathRattle"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Memosprite_EvernightServant_DeathRattle",
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
              "modifier": "Memosprite_EvernightServant_DeathRattle_Speed[<span class=\"descriptionNumberColor\">You, Parting, Beyond Reach</span>]",
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