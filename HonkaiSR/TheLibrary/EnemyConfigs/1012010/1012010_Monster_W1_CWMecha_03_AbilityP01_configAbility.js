const configAbility = {
  "fileName": "1012010_Monster_W1_CWMecha_03_AbilityP01",
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
      "modifier": "<a class=\"gModGreen\" id=\"1749893185\">Enemy_W1_CWMecha_03_Aura_Speed_Controller</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1285136712\">Enemy_W1_CWMecha_03_Aura_Speed</a>",
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
      "for": "<a class=\"gModGreen\" id=\"mod__1749893185\">Enemy_W1_CWMecha_03_Aura_Speed_Controller</a>",
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
              "modifier": "<a class=\"gModGreen\" id=\"-1285136712\">Enemy_W1_CWMecha_03_Aura_Speed</a>",
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
              "modifier": "<a class=\"gModGreen\" id=\"-1285136712\">Enemy_W1_CWMecha_03_Aura_Speed</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1285136712\">Enemy_W1_CWMecha_03_Aura_Speed</a>",
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