const configAbility = {
  "fileName": "Clara_Klara_Eidolon4",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "Klara_Eidolon4_ListenBeingAttack"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Klara_Eidolon4_DamageReduce[<span class=\"descriptionNumberColor\">DMG Mitigation</span>]",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                "displayLines": "MDF_PropertyValue",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue"
                ]
              }
            }
          ]
        }
      ],
      "description": "DMG taken -<span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "statusName": "DMG Mitigation"
    },
    {
      "name": "Modifier Construction",
      "for": "Klara_Eidolon4_ListenBeingAttack",
      "execute": [
        {
          "eventTrigger": "Being Attacked End [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "Klara_Eidolon4_DamageReduce[<span class=\"descriptionNumberColor\">DMG Mitigation</span>]",
              "duration": 1,
              "immediateEffect": true,
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.3) || RETURN",
                  "displayLines": "0.3",
                  "constants": [],
                  "variables": [
                    0.3
                  ]
                }
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}