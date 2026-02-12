const configAbility = {
  "fileName": "4012040_Monster_AML_Minion03_01_PassiveAbilityInitiate",
  "skillTrigger": "PassiveSkillInitiate",
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
      "modifier": "<a class=\"gModGreen\" id=\"1282910303\">Enemy_Heaven_StoneShieldController</a>",
      "valuePerStack": {
        "MDF_MaxLayer": {
          "operator": "Variables[0] ({[PassiveSkillInitiate[0]]}) || RETURN",
          "displayLines": "{[PassiveSkillInitiate[0]]}",
          "constants": [],
          "variables": [
            "{[PassiveSkillInitiate[0]]}"
          ]
        },
        "MDF_CrackedEffect": {
          "operator": "Variables[0] ({[PassiveSkillInitiate[1]]}) || RETURN",
          "displayLines": "{[PassiveSkillInitiate[1]]}",
          "constants": [],
          "variables": [
            "{[PassiveSkillInitiate[1]]}"
          ]
        },
        "MDF_CrackedDamage": {
          "operator": "Variables[0] ({[PassiveSkillInitiate[5]]}) || RETURN",
          "displayLines": "{[PassiveSkillInitiate[5]]}",
          "constants": [],
          "variables": [
            "{[PassiveSkillInitiate[5]]}"
          ]
        },
        "MDF_DamageResistance": {
          "operator": "Variables[0] ({[PassiveSkillInitiate[2]]}) || RETURN",
          "displayLines": "{[PassiveSkillInitiate[2]]}",
          "constants": [],
          "variables": [
            "{[PassiveSkillInitiate[2]]}"
          ]
        },
        "MDF_CrackedDamageAfter": {
          "operator": "Variables[0] ({[PassiveSkillInitiate[3]]}) || RETURN",
          "displayLines": "{[PassiveSkillInitiate[3]]}",
          "constants": [],
          "variables": [
            "{[PassiveSkillInitiate[3]]}"
          ]
        },
        "MDF_ModifySP": {
          "operator": "Variables[0] ({[PassiveSkillInitiate[4]]}) || RETURN",
          "displayLines": "{[PassiveSkillInitiate[4]]}",
          "constants": [],
          "variables": [
            "{[PassiveSkillInitiate[4]]}"
          ]
        }
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1048406986\">Enemy_Heaven_ModelController_AML_Minion</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1048406986\">Enemy_Heaven_ModelController_AML_Minion</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "When Modifier is Added [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]"
              }
            }
          ]
        },
        {
          "eventTrigger": "When Losing Modifier [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]"
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Living State",
                    "state": "Mask_AliveOnly",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    }
                  }
                }
              ]
            }
          ]
        },
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
                    "modifier": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                    "compareType": "=",
                    "value2": 0,
                    "valueType": "Layer"
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Living State",
                        "state": "Mask_AliveOnly",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      },
                      {
                        "name": "Has Turn-State",
                        "invertCondition": true,
                        "states": [
                          "InsertAbilityActionPhase"
                        ]
                      }
                    ]
                  }
                }
              ]
            },
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valueType": "MaxLayer",
              "variableName": "MDF_MaxLayer",
              "modifierName": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
              "multiplier": 1
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                    "compareType": "=",
                    "value2": {
                      "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                      "displayLines": "MDF_MaxLayer",
                      "constants": [],
                      "variables": [
                        "MDF_MaxLayer"
                      ]
                    },
                    "valueType": "Layer"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_LastLayer",
                    "compareType": "=",
                    "value2": 0
                  }
                ]
              }
            },
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valueType": "Layer",
              "variableName": "MDF_LastLayer",
              "modifierName": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
              "multiplier": 1
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}