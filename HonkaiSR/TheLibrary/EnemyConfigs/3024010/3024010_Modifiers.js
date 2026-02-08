const configAbility = {
  "fileName": "3024010_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1888942295\">Monster_Argenti_Attack_Sign</a>",
      "modifierFlags": [],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-401873404\">Monster_Standard_AllDamageReduce</a>",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
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
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-488812813\">Enemy_W2_Argenti_Power_RL</a>[<span class=\"descriptionNumberColor\">Soul Ascension</span>]",
      "stackType": "Refresh",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "The knight's prayers completely ascended the soul. This is regarded as equal to \"Soulfreed.\"",
      "type": "Buff",
      "effectName": "Soul Ascension",
      "statusName": "Soul Ascension"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-431168288\">Enemy_W2_Argenti_Power</a>[<span class=\"descriptionNumberColor\">Soulfreed</span>]",
      "stackType": "Refresh",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "The knight's prayers bid the liberation of souls. Abilities have been enhanced.",
      "type": "Buff",
      "effectName": "Soulfreed",
      "statusName": "Soulfreed"
    }
  ],
  "references": []
}