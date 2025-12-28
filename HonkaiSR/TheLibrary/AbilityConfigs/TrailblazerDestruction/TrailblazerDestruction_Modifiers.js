const configAbility = {
  "fileName": "TrailblazerDestruction_Modifiers",
  "abilityType": "Char. Modifiers",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Modifier Construction",
      "for": "PlayerWarrior_Ultimate_Transform",
      "lifeCyclePhaseAllowed": "ActionPhaseEnd",
      "modifierFlags": [
        "STAT_Burst"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Update Ability Binding",
              "target": "Caster",
              "abilityName": "Skill01",
              "skillSlot": "Basic ATK"
            },
            {
              "name": "Update Ability Binding",
              "target": "Caster",
              "abilityName": "Skill02",
              "skillSlot": "Skill",
              "enableSecondaryType": "ControlSkill02"
            },
            {
              "name": "Update Ult Alt Display"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ],
      "duration": 2
    },
    {
      "name": "Modifier Construction",
      "for": "PlayerBoy_Trace03_DamageAddedRatio",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Hit",
          "execute": [
            {
              "name": "Adjust Target Stats",
              "on": "Attacker",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (0.25) || RETURN",
                "displayLines": "0.25",
                "constants": [],
                "variables": [
                  0.25
                ]
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "PlayerBoy_Eidolon1_Check_Modifier",
      "execute": [
        {
          "eventTrigger": "Got a Kill [Owner]",
          "execute": [
            {
              "name": "Update Energy",
              "on": "Owner of this Modifier",
              "value": {
                "operator": "Variables[0] (10) || RETURN",
                "displayLines": "10",
                "constants": [],
                "variables": [
                  10
                ]
              },
              "isFixed": "* ERR"
            },
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "Got a Queued Kill [Owner]",
          "execute": [
            {
              "name": "Update Energy",
              "on": "Owner of this Modifier",
              "value": {
                "operator": "Variables[0] (10) || RETURN",
                "displayLines": "10",
                "constants": [],
                "variables": [
                  10
                ]
              },
              "isFixed": "* ERR"
            },
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ],
  "references": []
}