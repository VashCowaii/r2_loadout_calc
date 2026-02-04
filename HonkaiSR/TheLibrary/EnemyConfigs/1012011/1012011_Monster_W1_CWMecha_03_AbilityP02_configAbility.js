const configAbility = {
  "fileName": "1012011_Monster_W1_CWMecha_03_AbilityP02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Enemy_W1_CWMecha_03_Aura_Resistance_Controller"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Enemy_W1_CWMecha_03_Aura_Resistance",
      "stackType": "ReplaceByCaster",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_Aura_AllDamageTypeResistance) || RETURN",
                "displayLines": "MDF_Aura_AllDamageTypeResistance",
                "constants": [],
                "variables": [
                  "MDF_Aura_AllDamageTypeResistance"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_W1_CWMecha_03_Aura_Resistance_Controller",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members}}"
              },
              "modifier": "Enemy_W1_CWMecha_03_Aura_Resistance",
              "valuePerStack": {
                "MDF_Aura_AllDamageTypeResistance": {
                  "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__27) || RETURN",
                  "displayLines": "ENEMIES_OBJECT_UNUSED__27",
                  "constants": [],
                  "variables": [
                    "ENEMIES_OBJECT_UNUSED__27"
                  ]
                }
              }
            }
          ]
        },
        {
          "eventTrigger": "When Put in Deathstate Limbo",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members}}"
              },
              "modifier": "Enemy_W1_CWMecha_03_Aura_Resistance",
              "onlyRemoveOwnersInstance": true
            }
          ]
        },
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Teammate",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Enemy_W1_CWMecha_03_Aura_Resistance",
                  "valuePerStack": {
                    "MDF_Aura_AllDamageTypeResistance": {
                      "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__27) || RETURN",
                      "displayLines": "ENEMIES_OBJECT_UNUSED__27",
                      "constants": [],
                      "variables": [
                        "ENEMIES_OBJECT_UNUSED__27"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}