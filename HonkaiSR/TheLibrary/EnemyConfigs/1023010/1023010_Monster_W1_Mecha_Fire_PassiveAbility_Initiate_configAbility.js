const configAbility = {
  "fileName": "1023010_Monster_W1_Mecha_Fire_PassiveAbility_Initiate",
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
      "modifier": "<a class=\"gModGreen\" id=\"1782341316\">Monster_W1_Mecha_Fire_Initiate</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1525735107\">Monster_W1_Mecha04_01_MuteHitFly</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1068246674\">HideMonsterHUD</a>"
    }
  ],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1068246674\">HideMonsterHUD</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1525735107\">Monster_W1_Mecha04_01_MuteHitFly</a>",
      "modifierFlags": [
        "MuteHitFly"
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1782341316\">Monster_W1_Mecha_Fire_Initiate</a>",
      "execute": [
        {
          "eventTrigger": "Deal Damage End [Owner]: Hit",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target TAKING DMG}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1990407757\">Standard_DOT_Burn</a>[<span class=\"descriptionNumberColor\">Burn</span>]"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Monster_W1_Mecha_Fire_PassiveCounter_01",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Monster_W1_Mecha_Fire_PassiveCounter_01",
                "compareType": ">=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1848655652\">Monster_W1_Mecha_Fire_Passive</a>[<span class=\"descriptionNumberColor\">Out of Control</span>]",
                  "duration": {
                    "operator": "Variables[0] ({[PassiveSkillInitiate[1]]}) || RETURN",
                    "displayLines": "{[PassiveSkillInitiate[1]]}",
                    "constants": [],
                    "variables": [
                      "{[PassiveSkillInitiate[1]]}"
                    ]
                  },
                  "valuePerStack": {
                    "ModifierCriticalChanceRatio_PerLayer": {
                      "operator": "Variables[0] ({[PassiveSkillInitiate[0]]}) || RETURN",
                      "displayLines": "{[PassiveSkillInitiate[0]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkillInitiate[0]]}"
                      ]
                    }
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Monster_W1_Mecha_Fire_PassiveCounter_01",
                  "value": 0
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Enemy ID",
                "ID": 1023011,
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "characterName": "Searing Prowler (Bug)"
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Monster_W1_Mecha_Fire_AICounter_01",
                  "value": 1
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1068246674\">HideMonsterHUD</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]"
        },
        {
          "eventTrigger": "Action Choice Window [Owner]"
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}