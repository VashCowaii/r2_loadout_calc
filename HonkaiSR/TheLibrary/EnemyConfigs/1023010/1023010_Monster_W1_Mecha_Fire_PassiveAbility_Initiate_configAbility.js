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
      "modifier": "Monster_W1_Mecha_Fire_Initiate"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Monster_W1_Mecha04_01_MuteHitFly"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "HideMonsterHUD"
    }
  ],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "HideMonsterHUD"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Monster_W1_Mecha04_01_MuteHitFly",
      "modifierFlags": [
        "MuteHitFly"
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W1_Mecha_Fire_Initiate",
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
                "modifier": "Standard_DOT_Burn[<span class=\"descriptionNumberColor\">Burn</span>]"
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
                  "modifier": "Monster_W1_Mecha_Fire_Passive[<span class=\"descriptionNumberColor\">Out of Control</span>]",
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
      "for": "HideMonsterHUD",
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