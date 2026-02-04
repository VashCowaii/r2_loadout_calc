const configAbility = {
  "fileName": "1012011_Monster_W1_CWMecha_03_AbilityP01",
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
      "modifier": "Enemy_W1_CWMecha_03_Aura_Speed_Controller"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Enemy_W1_CWMecha_03_Aura_Speed",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_Aura_SpeedUpValue) || RETURN",
                "displayLines": "MDF_Aura_SpeedUpValue",
                "constants": [],
                "variables": [
                  "MDF_Aura_SpeedUpValue"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_W1_CWMecha_03_Aura_Speed_Controller",
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
              "modifier": "Enemy_W1_CWMecha_03_Aura_Speed",
              "valuePerStack": {
                "MDF_Aura_SpeedUpValue": {
                  "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__26) || RETURN",
                  "displayLines": "ENEMIES_OBJECT_UNUSED__26",
                  "constants": [],
                  "variables": [
                    "ENEMIES_OBJECT_UNUSED__26"
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
              "modifier": "Enemy_W1_CWMecha_03_Aura_Speed",
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
                  "modifier": "Enemy_W1_CWMecha_03_Aura_Speed",
                  "valuePerStack": {
                    "MDF_Aura_SpeedUpValue": {
                      "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__26) || RETURN",
                      "displayLines": "ENEMIES_OBJECT_UNUSED__26",
                      "constants": [],
                      "variables": [
                        "ENEMIES_OBJECT_UNUSED__26"
                      ]
                    },
                    "MDF_Die_Delay": 0.5
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