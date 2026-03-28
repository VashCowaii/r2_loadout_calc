const configAbility = {
  "fileName": "5014020_Monster_W5_Pam_PassiveAbility01_Part01",
  "childAbilityList": [
    "5014020_Monster_W5_Pam_PassiveAbility01_Camera",
    "5014020_Monster_W5_Pam_PassiveAbility01_Part01",
    "5014020_BattleEventAbility_W5_Pam_SummonMonster",
    "5014020_Monster_W5_Pam_PassiveAbility01_Camera_2",
    "5014020_Monster_W5_Pam_PassiveAbility01_Camera_3"
  ],
  "skillTrigger": "PassiveSkill01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-216839443\">Monster_W5_Pam_summon_zangshui_monitor</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"761695263\">Monster_W5_Pam_Deathrattle</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-51456028\">Modifier_Monster_W5_Pam_DefenceUp_Boom</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Check Boolean Value",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "value": "Monster_W5_Pam_00_MainStory"
      }
    }
  ],
  "whenAdded": [
    {
      "name": "IF",
      "conditions": {
        "name": "Check Boolean Value",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "value": "Monster_W5_Pam_00_MainStory"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1299504024\">Monster_W5_Pam_MainStory_Monitor</a>"
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1299504024\">Monster_W5_Pam_MainStory_Monitor</a>",
      "execute": [
        {
          "eventTrigger": "HP Change [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": "<=",
                    "value2": 0.5
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 1
                  }
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
      "for": "<a class=\"gModGreen\" id=\"mod__761695263\">Monster_W5_Pam_Deathrattle</a>",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_IsAngry",
                "compareType": "=",
                "value2": 1
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
      "for": "<a class=\"gModGreen\" id=\"mod__-216839443\">Monster_W5_Pam_summon_zangshui_monitor</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking Modifier Instance [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"2010976662\">Modifier_Monster_W5_Pam_DefenceUp_Remove_02</a>"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "<a class=\"gModGreen\" id=\"-983171602\">Modifier_Monster_W5_Pam_DefenceUp</a>[<span class=\"descriptionNumberColor\">Lasting Antibac</span>]",
                    "compareType": ">",
                    "value2": 0,
                    "valueType": "Layer"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-983171602\">Modifier_Monster_W5_Pam_DefenceUp</a>[<span class=\"descriptionNumberColor\">Lasting Antibac</span>]"
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